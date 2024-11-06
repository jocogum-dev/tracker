'use client'

import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { mutate } from "swr"

export default function DeleteExpense({id}: {id:number}) {
    async function handleDelete(){
        const response = await fetch(`/api/expenses?id=${id}`, {
            method: "DELETE",
        });

        if(response.ok) {
            console.log("Expense deleted successfully");
            mutate('/api/expenses');
        } else {
            console.log("Failed to delete expense");
        }
    }

    return (
        <Button onClick={handleDelete} variant="outline" className="bg-rose-300 hover:bg-rose-500">
            <Trash2 />
        </Button>
    )
}
