import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"
import AppNavbar from "@/components/app-navbar";


export const metadata: Metadata = {
  title: "Tracker",
  description: "An expense tracker app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <AppNavbar>
              <SidebarTrigger />
            </AppNavbar>
            
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
