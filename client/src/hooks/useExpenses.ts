import { useState, useEffect } from 'react';
import { apiClient } from '../lib/ApiClient';

export interface Expenses {
  id: number,
  type: string,
  value: number,
  payed_at: string
}


export const useExpenses = () => {
  const [days, setDays] = useState<Array<string>>([]);
  const [expenseTypes, setExpenseTypes] = useState<Array<string>>([]);
  const [contentOfCells, setContentOfCell] = useState<Array<Array<{
    totalPrice: number,
    expenseId: number
  }>>>();
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
      const contentOfCells = days.map((day) => {
        return res.filter((expense) =>
          expense.payed_at === day
        ).map((filteredExpense) => {
          return {
            totalPrice: filteredExpense.value,
            expenseId: filteredExpense.id
          };
        });
      });
      setContentOfCell(
        contentOfCells
      );
    };
    f();
  }, []);
  return {days, expenseTypes, contentOfCells};
};
