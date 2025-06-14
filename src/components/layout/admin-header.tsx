"use client";
import { useState } from "react";
import { Search, Bell, User, Space, LogOut, X, Menu } from "lucide-react";
import SwivelUpLogo from "@/images/SwivelUpLogo.jpg";
import { ThemeToggle } from "@/components/theme-toggle";
import { menubarItems } from "./menu-items";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/providers/auth_provider";
import "./style.css";
import { INTERVIEWS_ROUTE } from "@/constants/routes.constant";
import Image from "next/image";

export function AdminHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const router = useRouter();
  const { logout } = useAuth();

  const MenuContent = () => {
    return (
      <div className="bg-white w-full  py-3 flex flex-col items-center">

        <div className="flex flex-col gap-5 w-full">
          {menubarItems.map(({ title, route, icon }) => {
            const isActive = pathname === route;
            return (
              <Button
                key={route}
                className={`w-full ${isActive
                  ? "bg-gray-200 font-semibold"
                  : "bg-transparent text-foreground"
                  }`}
                onClick={() => router.push(route)}
              >
                <span className={` ${isActive ? "text-blue-600" : ""}`}>
                  {title}
                </span>
              </Button>
            );
          })}

          <Button
            onClick={logout}
            className="w-full bg-transparent text-foreground"
          >
            <LogOut /> Logout
          </Button>
        </div>
      </div>
    );
  };
  return (
    <header className="bg-white dark:bg-gray-800 z-10 sticky top-0 left-0 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">

        <div className="flex items-center">
          {/* <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 md:w-64 w-48 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div> */}
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => router.push(INTERVIEWS_ROUTE)}
            className="cursor-pointer"
          >
            Client Portal
          </Button>
          <ThemeToggle />

          <div className="show-popover">
            {open ? (
              <X
                className="text-black cursor-pointer "
                onClick={() => setOpen(false)}
              />
            ) : (
              <Menu
                className="text-black cursor-pointer "
                onClick={() => setOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
      {open && (
        <div className="show-popover">
          {" "}
          <MenuContent />
        </div>
      )}
    </header>
  );
}
