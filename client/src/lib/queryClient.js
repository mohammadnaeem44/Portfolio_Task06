import { QueryClient } from "@tanstack/react-query";

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
};

let browserQueryClient = undefined;

const getQueryClient = () => {
  if (typeof window === "undefined") {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
};

export const queryClient = getQueryClient();

export async function apiRequest(url, options = {}) {
  const { isFormData = false, ...fetchOptions } = options;
  
  const config = {
    credentials: "include",
    ...fetchOptions,
    headers: {
      ...(!isFormData && { "Content-Type": "application/json" }),
      ...fetchOptions.headers,
    },
  };

  if (config.body && !isFormData && typeof config.body !== "string") {
    config.body = JSON.stringify(config.body);
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    if (response.status >= 500) {
      throw new Error(`Server error: ${response.status}`);
    } else if (response.status >= 400) {
      const errorText = await response.text();
      throw new Error(errorText || `Request failed: ${response.status}`);
    }
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}