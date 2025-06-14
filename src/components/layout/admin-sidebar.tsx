"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    Home,
    Briefcase,
    File,
    BarChart2,
    Settings,
    Icon,
    LogOut,
} from "lucide-react"
import {
    DASHBOARD_ROUTE,
    JOB_MANAGEMENT_ROUTE,
    QUESTION_MANAGEMENT_ROUTE,
    INTERVIEW_MANAGEMENT_ROUTE,
    RUBRICS_MANAGEMENT_ROUTE,
} from "@/constants/routes.constant"
import SwivelUpLogo from "@/images/SwivelUpLogo.jpg"
import Image from "next/image"
import { Button } from "../ui/button"
import { useAuth } from "@/providers/auth_provider"
import { menubarItems } from "./menu-items"
import { DeleteConfirmationDialog } from "../atoms/delete-confirmation-dialog"



export function AdminSidebar() {
    const pathname = usePathname()
    const { logout } = useAuth();

    return (
        <div className="w-64 bg-white md:block hidden dark:bg-gray-800 shadow-lg">
            <div className="p-6">
                <Image src={SwivelUpLogo} alt="swivel-up-logo" width={210} />
            </div>
            <nav className="mt-2">
                <div className="px-4 flex flex-col justify-between h-[80vh] space-y-1">
                    <div>
                        {menubarItems.map((item) => {
                            const isActive = pathname === item.route
                            const Icon = item.icon

                            return (
                                <Link
                                    key={item.title}
                                    href={item.route}
                                    className={cn(
                                        "flex items-center px-4 py-2 text-muted-foreground rounded-lg",
                                        isActive ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                    )}
                                >
                                    <Icon className="w-5 h-5 mr-3" />
                                    {item.title}
                                </Link>
                            )
                        })}
                    </div>
                    <DeleteConfirmationDialog
                        onDelete={logout}
                        title="Are you sure you want to logout?"
                        description=""
                        buttonTitle="Logout"
                        trigger={<Button
                            className="flex items-center cursor-pointer px-4 py-2 text-muted-foreground rounded-lg dark:bg-gray-700 dark:hover:bg-gray-500 hover:bg-gray-200 bg-white"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Logout
                        </Button>}
                    />

                </div>
            </nav>
        </div>
    )
}
