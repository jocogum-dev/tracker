'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

import { Expenses } from "@prisma/client";
import ExpenseForm from "./expensese-form";


export default function EditExpense({ todo }: { todo: Expenses }) {

    return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="bg-green-300 hover:bg-green-500">
                        <Pencil />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <ExpenseForm todo={todo} />
                    </DialogHeader>
                </DialogContent>
            </Dialog>
    )
}
