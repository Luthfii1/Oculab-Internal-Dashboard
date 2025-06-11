import { AxiosError } from "axios";

/**
 * Handles API responses and throws appropriate errors
 * @param response - The API response object
 * @returns The processed response data
 * @throws Error - If the response indicates an error
 */
export function handleResponse<T = unknown>(response: ApiResponse<T>): ApiResponse<T> {
  if (response.status === 'error') {
    throw new Error(response.data.description);
  }
  return response;
}

/**
 * Handles API errors and extracts the error message
 * @param error - The error object
 * @returns The error message
 */
export function handleError(error: unknown): string {
  if (isAxiosError(error) && error.response && error.response.data) {
    return extractApiErrorMessage(error, 'An unexpected error occurred');
  }
  return error instanceof Error ? error.message : 'An unexpected error occurred';
}

/**
 * Helper function to create error response
 * @param errorType - Type of error
 * @param description - Error description
 * @param code - HTTP status code
 * @returns Standardized error response
 */
export function createErrorResponse(errorType: string | null, description: string, code = 500) {
  return {
    status: 'error' as const,
    code,
    message: 'Operation failed',
    data: {
      errorType,
      description,
    },
  };
}

/**
 * Helper function to create success response
 * @param data - Response data
 * @param message - Success message
 * @param code - HTTP status code
 * @returns Standardized success response
 */
export function createSuccessResponse<T = unknown>(data: T, message: string, code = 200) {
  return {
    status: 'success' as const,
    code,
    message,
    data,
  };
}

// Types
export type ApiResponse<T = unknown> =
  | {
      status: 'success';
      code: number;
      message: string;
      data: T;
    }
  | {
      status: 'error';
      code: number;
      message: string;
      data: {
        errorType: string | null;
        description: string;
      };
    }; 

export function isAxiosError(error: unknown): error is AxiosError {
  return typeof error === 'object' && error !== null && 'isAxiosError' in error;
}

export function extractApiErrorMessage(error: unknown, fallback: string): string {
  if (isAxiosError(error) && error.response && error.response.data) {
    const data = error.response.data as Record<string, unknown>;
    if (
      data.status === 'error' &&
      typeof data.data === 'object' &&
      data.data !== null &&
      'description' in (data.data as Record<string, unknown>) &&
      typeof (data.data as Record<string, unknown>).description === 'string' &&
      (data.data as Record<string, unknown>).description
    ) {
      return (data.data as Record<string, unknown>).description as string;
    }
    if (typeof data.message === 'string' && data.message) {
      return data.message;
    }
    if (typeof data.description === 'string' && data.description) {
      return data.description;
    }
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return fallback;
}