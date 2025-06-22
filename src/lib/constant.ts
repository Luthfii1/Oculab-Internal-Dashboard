// set api url
export const API_URL = process.env.NEXT_PUBLIC_API_URL; // NEXT_PUBLIC_PROD_API_URL for production

export const IS_DEVELOPMENT_MODE =
  process.env.NEXT_PUBLIC_IS_DEVELOPMENT_MODE === "true";
export const BASE_URL = IS_DEVELOPMENT_MODE
  ? "http://localhost:8080"
  : API_URL || "http://localhost:8080";
export const USING_DUMMY_DATA =
  process.env.NEXT_PUBLIC_USING_DUMMY_DATA === "true";
