import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import DeleteExpense from "@/components/delete-expense";
import EditExpense from "@/components/edit-expense";

import { Expenses } from "@prisma/client";


export default function ExpenseTable({expenseList}: {expenseList: Expenses[]}) {
  return (
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
              <EditExpense todo={expense} />
                <DeleteExpense id={expense.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
        
      </TableBody>
    </Table>
  )
}
