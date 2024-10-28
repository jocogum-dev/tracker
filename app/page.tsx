import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { prisma } from '@/lib/prisma';

export default async function Home() {
  const expenses = await prisma.expenses.findMany();

  return (
    <div>
      <h2>Home</h2>

      <Table>
        <TableCaption>A list of your recent expenses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Paid</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
            <TableCell className="font-medium"> {expense.id} </TableCell>
              <TableCell>{ expense.title} </TableCell>
              <TableCell> {expense.category}</TableCell>
              <TableCell className="text-right"> {expense.amount} </TableCell>
              <TableCell>{ expense.paid? "paid" : "not paid"} </TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>

    </div>
  );
}
