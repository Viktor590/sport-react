import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // 1: 67b1fac92cb9e4d503fef476a7e6de85
  // 2: df639f2bb8fa2ee38658c35901849d56
  const request = useCallback(async (url, method = 'GET', headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "67b1fac92cb9e4d503fef476a7e6de85"
  }) => {

    setLoading(true);
    try {
      const response = await fetch(url, { method, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      setLoading(false);
      return data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError }
}
