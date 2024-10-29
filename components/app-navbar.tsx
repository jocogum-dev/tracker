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
          Tracker
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
