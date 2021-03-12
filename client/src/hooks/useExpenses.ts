import { useState, useEffect } from 'react';
import { apiClient } from '../lib/ApiClient';

export interface ApiResponse {
  id: number,
  type: string,
  thing: string,
  price: number,
  payed_at: string
}

export const useExpenses = () => {
  const [apiResponse, setApiResponse] = useState<Array<ApiResponse> | undefined>();
  useEffect(() => {
    const f = async () => {
      const res = await apiClient('GET', '/api/expenses');
      setApiResponse(res);
    };
    f();
  }, []);
  return apiResponse;
};
