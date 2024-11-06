import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function AppNavbar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <nav className="flex flex-row justify-between items-center px-5 py-2 border-b border-[#e5e7eb] shadow-sm">
      {children}
      <div className="flex flex-row justify-center items-center gap-5">  
        <div className="text-xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-bl from-rose-500 to-purple-500 dark:from-rose-200 dark:via-indigo-300 dark:to-sky-500">
            Tracker
          </span>
          
        </div>
        <Avatar>
          <AvatarImage className="border rounded-full p-1" src="/user-round.svg" />
          
          <AvatarFallback>
            TR
          </AvatarFallback>
        </Avatar>

      </div>
    </nav>
  )
}
