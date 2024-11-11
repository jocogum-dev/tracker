'use client'

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json())


import { Expenses } from "@prisma/client";

import Loading from "./loading";
import ExpenseTable from '@/components/expense-table';

export default function page() {

  const { data: expenses, error, isLoading } = useSWR<Expenses[]>('/api/expenses', fetcher)
  const expenseList = expenses || [];

  if (isLoading) {
    return (
      <Loading />
    )
  }
  if (error) {
    return (
      <div>Error Occurred.</div>
    )
  }

  return (
    <div className="px-5 pt-5">
      <ExpenseTable expenseList={expenseList} />
    </div>
  )
}
