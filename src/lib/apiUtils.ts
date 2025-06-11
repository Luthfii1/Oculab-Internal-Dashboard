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
export function handleError(error: any): string {
  if (error.response?.data?.status === 'error') {
    return error.response.data.message;
  }
  return error.message || 'An unexpected error occurred';
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