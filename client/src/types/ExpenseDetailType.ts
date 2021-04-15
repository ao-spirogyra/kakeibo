type ExpenseDetailTitleKey = 'item' | 'price' | 'memo'
export type ExpenseDetail = {
  [key in ExpenseDetailTitleKey]: key extends 'price' ? number : string  
}
