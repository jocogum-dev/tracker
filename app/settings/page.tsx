import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



import { prisma } from '@/lib/prisma';

export default async function page() {
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  return (
    <div className='px-5 pt-5'>
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user?.name}</CardTitle>
          <CardDescription>This is your settings page</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{user?.email}</p>
        </CardContent>
        <CardFooter>
          <p>{user.id}</p>
        </CardFooter>
      </Card>

    </div>
  )
}
