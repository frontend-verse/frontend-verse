import { Search, Bell, User, Video, ShieldUser, LogOut } from "lucide-react";
import Image from "next/image";
import SwivelUpLogo from "@/images/SwivelUpLogo.jpg";
import { use } from "react";
import { useRouter } from "next/navigation";
import { DASHBOARD_ROUTE, INTERVIEW_MANAGEMENT_ROUTE, MY_INTERVIEWS_ROUTE } from "@/constants/routes.constant";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useUserRole } from "@/hooks/use-user-role";
import CustomToolTip from "../atoms/tooltip";
import { useAuth } from "@/providers/auth_provider";
import { DeleteConfirmationDialog } from "../atoms/delete-confirmation-dialog";

export function ClientHeader() {
  const router = useRouter();

  const { logout } = useAuth();

  const userRole = useUserRole();

  const handleLogoClick = () => {
    router.push("/interviews");
  };
  return (
    <header className="bg-white dark:bg-gray-800 pt-5 pb-3">
      <div className="flex justify-between">
        <div className=" h-fit w-fit cursor-pointer" onClick={handleLogoClick}>
          <Image src={SwivelUpLogo} alt="swivel-up-logo" width={210} />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-5 ">
            {userRole === "admin" && <CustomToolTip title="Admin Portal" content={<div
              className="w-14 h-14 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer dark:bg-gray-600 flex items-center justify-center"
              onClick={() => router.push(INTERVIEW_MANAGEMENT_ROUTE)}
            >
              <ShieldUser className="w-8 h-8 text-gray-600 dark:text-gray-300 " />
            </div>} />}
            <CustomToolTip title="My Interviews" content={<div
              className="w-14 h-14 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer dark:bg-gray-600 flex items-center justify-center"
              onClick={() => router.push(MY_INTERVIEWS_ROUTE)}
            >
              <Video className="w-8 h-8 text-gray-600 dark:text-gray-300 " />
            </div>} />
            <DeleteConfirmationDialog
              onDelete={logout}
              title="Are you sure you want to logout?"
              description=""
              buttonTitle="Logout"
              trigger={<div className="w-14 h-14 cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300  dark:bg-gray-600 flex items-center justify-center">
                <LogOut className="w-8 h-8 text-gray-600 dark:text-gray-300 " />
              </div>}
            />

          </div>
        </div>
      </div>
    </header>
  );
}
