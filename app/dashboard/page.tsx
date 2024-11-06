'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

import { Pencil, Trash2} from "lucide-react"


import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json())


import { Expenses } from "@prisma/client";
import { Button } from "@/components/ui/button";
import DeleteExpense from "@/components/delete-expense";

export default function page() {

  const { data: expenses, error, isLoading } = useSWR<Expenses[]>('/api/expenses', fetcher)
  const expenseList = expenses || [];

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3 px-5 pt-5">
        <Skeleton className="h-8 rounded-xl w-full" />
        <hr />
        <div className="space-y-2">
          <Skeleton className="h-8 w-full" />
        </div>
        <Skeleton className="h-8 rounded-xl w-[200px] mx-auto" />
      </div>
    )
  }
  if (error) {
    return (
      <div>Error Occurred.</div>
    )
  }

  return (
    <div className="px-5 pt-5">
    <Table>
      <TableCaption>A list of your recent expenses.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Date</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Paid</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        
        {expenseList.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell className="font-medium"> {new Date(expense.createdAt).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</TableCell>
            <TableCell>{ expense.title} </TableCell>
            <TableCell> {expense.category}</TableCell>
            <TableCell className="text-right font-medium"> {expense.amount} </TableCell>
            <TableCell className="text-right">{ expense.paid? "paid" : "not paid"} </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-5">
              <Button variant="outline" className="bg-green-300 hover:bg-green-500">
                <Pencil/>
              </Button>
                <DeleteExpense id={expense.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
        
      </TableBody>
    </Table>
</div>
  )
}
