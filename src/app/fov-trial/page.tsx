"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";

type Settings = { enabled: boolean; canManage: boolean };
class SessionExpired extends Error {}

async function api(path: string, token: string, options: RequestInit = {}) {
  const res = await fetch("/api/phone" + path, {
    ...options,
    cache: "no-store",
    headers: {
      ...options.headers,
      ...(token ? { Authorization: "Bearer " + token } : {}),
    },
  });
  if (res.status === 401 && token)
    throw new SessionExpired("Sign in again to resume your trial.");
  const body = await res.json();
  if (!res.ok)
    throw new Error(body.message || "Request failed (" + res.status + ")");
  return body;
}

const button =
  "rounded-lg bg-purple-700 px-4 py-2.5 text-white disabled:opacity-50";
export default function TrialPage() {
  const [token, setToken] = useState("");
  const [settings, setSettings] = useState<Settings>();
  const [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const active = useRef<AbortController | null>(null);
  useEffect(() => () => active.current?.abort(), []);
  async function run(fn: (signal: AbortSignal) => Promise<void>) {
    if (active.current) return;
    const controller = new AbortController();
    active.current = controller;
    setBusy(true);
    setError("");
    try {
      await fn(controller.signal);
    } catch (e) {
      if (e instanceof SessionExpired) {
        setToken("");
        setSettings(undefined);
      }
      setError(
        controller.signal.aborted
          ? "Cancelled"
          : e instanceof Error
            ? e.message
            : "Trial failed",
      );
    } finally {
      active.current = null;
      setBusy(false);
    }
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    void run(async (signal) => {
      const response = await api("/user/login", "", {
        method: "POST",
        signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          password: form.get("password"),
        }),
      });
      const access = response.data.accessToken;
      const current = await api("/fov-trial", access, { signal });
      setToken(access);
      setSettings(current);
    });
  }

  return (
    <main className="mx-auto max-w-2xl space-y-5 p-5 text-slate-900">
      <Link href="/dashboard" className="text-purple-700 underline">
        Dashboard
      </Link>
      <h1 className="text-3xl font-semibold">iOS recording methods</h1>
      <p>
        Enable the trial to let staff choose full video or on-device FOV
        selection before recording in the Oculab iOS app.
      </p>
      {!settings ? (
        <form onSubmit={login} className="grid gap-3">
          <label>
            Oculab email
            <input
              className="block w-full rounded border p-2"
              type="email"
              name="email"
              autoComplete="username"
              required
            />
          </label>
          <label>
            Password
            <input
              className="block w-full rounded border p-2"
              type="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </label>
          <button disabled={busy} className={button}>
            Sign in
          </button>
        </form>
      ) : (
        <>
          <section className="flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4">
            <strong>Facility trial · {settings.enabled ? "On" : "Off"}</strong>
            {settings.canManage && (
              <button
                disabled={busy}
                className="text-purple-700 underline"
                onClick={() =>
                  void run(async (signal) => {
                    const value = await api("/fov-trial", token, {
                      method: "PUT",
                      signal,
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ enabled: !settings.enabled }),
                    });
                    setSettings(value);
                  })
                }
              >
                {settings.enabled ? "Disable" : "Enable"} for facility
              </button>
            )}
          </section>
          <button
            disabled={busy}
            className="underline"
            onClick={() => {
              setToken("");
              setSettings(undefined);
              setError("");
            }}
          >
            Sign out
          </button>
        </>
      )}
      {busy && (
        <button
          className="mx-3 underline"
          onClick={() => active.current?.abort()}
        >
          Cancel
        </button>
      )}
      {error && (
        <p role="alert" className="text-red-800">
          {error}
        </p>
      )}
    </main>
  );
}
