import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Dashboard from "./pages/Dashboard"
import Students from "./pages/Students"
import Companies from "./pages/Companies"
import Settings from "./pages/Settings"

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center px-4 border-b">
            <SidebarTrigger />
            <span className="ml-4 font-bold text-zinc-700">Placement Admin</span>
          </header>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </BrowserRouter>
  )
}