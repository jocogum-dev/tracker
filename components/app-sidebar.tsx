import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, Home, Settings, HandCoins, LayoutDashboard } from "lucide-react"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard,
    },
    {
        title: "Expense",
        url: "#",
        icon: HandCoins,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup >
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarHeader>
                                Tracker
                            </SidebarHeader>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup >
                <SidebarGroup>
                    <SidebarGroupLabel>Pages</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
