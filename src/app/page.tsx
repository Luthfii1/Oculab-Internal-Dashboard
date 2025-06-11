'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Optional check: prevent infinite loop if already on /dashboard
    if (window.location.pathname === '/') {
      router.replace('/dashboard');
    }
  }, [router]);

  return null;
}
