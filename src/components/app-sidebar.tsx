import { Link, useLocation } from "react-router-dom" // 1. Import Link and useLocation
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  GraduationCap, 
  Settings, 
  FileText 
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// 2. Updated URLs to match your App.tsx routes
const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Students", url: "/students", icon: Users },
  { title: "Companies", url: "/companies", icon: Building2 },
  { title: "Applications", url: "/applications", icon: FileText },
  { title: "Placements", url: "/placements", icon: GraduationCap },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const location = useLocation(); // Hook to check current path

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-500">Placement Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    tooltip={item.title}
                    isActive={location.pathname === item.url} // Highlights the active tab
                  >
                    {/* 3. Replaced <a> with <Link> and 'href' with 'to' */}
                    <Link to={item.url}>
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
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