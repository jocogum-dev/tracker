import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    try {
        const expenses = await prisma.expenses.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(expenses);
    }catch(error){
        console.error('Error fetching expenses:', error);
        return NextResponse.json({message: 'An unexpected error occurred'}, {status: 500});
    }
    
}

export async function DELETE(request: NextRequest) {
    try{
        const id = request.nextUrl.searchParams.get('id');

        if(!id) {
            return NextResponse.json({message: 'Expense ID is required.'}, {status: 400});
        }

        const deleteExpense = await prisma.expenses.delete({
            where: { 
                id: parseInt(id)
            },
        })

        if (!deleteExpense) {
            return NextResponse.json({message: 'Expense not found'}, {status: 404});
        }

        return NextResponse.json({message: 'Expense deleted successfully'}, {status: 200});
    }catch(error){
        console.error('Error deleting expense', error);
        return NextResponse.json({message: "An unexpected error occurred"}, {status: 500});
    }
}