import { useState, useEffect } from 'react';
import { apiClient } from '../lib/ApiClient';
import { ExpenseDetail } from '../types/ExpenseDetailType';

export const useExpenseDetails = (expenseId) => {
  // expense_type_id と expense_date_id で絞ってGETする
  const titles: Readonly<Array<keyof ExpenseDetail>> = ['item', 'price', 'memo'];
  const [values, setValues] = useState<Array<string | number>[]>();
  const get = async () => {
    const res = await apiClient<ExpenseDetail[]>('GET', `/api/expenses/detail?expense_id=${expenseId}`);
    setValues(res.map((eachObj) => {
      return Object.values(eachObj);
    }));
  };
  useEffect(() => {
    get();
  }, []);
  return {titles, values};
};
