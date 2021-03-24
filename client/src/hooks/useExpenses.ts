import { useState, useEffect } from 'react';
import { apiClient } from '../lib/ApiClient';

export interface Expenses {
  id: number,
  type: string,
  price: number,
  payed_at: string
}


export const useExpenses = () => {
  const [days, setDays] = useState<Array<string>>([]);
  const [expenseTypes, setExpenseTypes] = useState<Array<string>>([]);
  const [totalPrice, setTotalPrice] = useState<Array<Array<number>>>();
  useEffect(() => {
    const f = async () => {
      const res = await apiClient<Expenses[]>('GET', '/api/expenses');
      const days =
        Array.from(
          new Set(
            res.map<string>((expense) => {
              return expense.payed_at;
            })
          )
        );
      setDays(
        days
      );
      const expenseTypes =
        Array.from(
          new Set(
            res.map<string>((expense) => {
              return expense.type;
            })
          )
        );
      setExpenseTypes(
        expenseTypes
      );
      const totalPrice = days.map((day) => {
        return res.filter((expense) =>
          expense.payed_at === day
        ).map((filteredExpense) => {
          return filteredExpense.price;
        });
      });
      setTotalPrice(
        totalPrice
      );
    };
    f();
  }, []);
  return {days, expenseTypes, totalPrice};
};
