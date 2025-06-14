import {
  DASHBOARD_ROUTE,
  INTERVIEW_MANAGEMENT_ROUTE,
  QUESTION_MANAGEMENT_ROUTE,
  RUBRICS_MANAGEMENT_ROUTE,
} from "@/constants/routes.constant";
import { BarChart2, File, Home, Settings } from "lucide-react";

export const menubarItems = [
  // {
  //   title: "Dashboard",
  //   icon: Home,
  //   route: DASHBOARD_ROUTE,
  // },
  // {
  //     title: "Job Management",
  //     icon: Briefcase,
  //     route: JOB_MANAGEMENT_ROUTE,
  // },

  {
    title: "Interview Management",
    icon: BarChart2,
    route: INTERVIEW_MANAGEMENT_ROUTE,
  },
  {
    title: "Question Management",
    icon: File,
    route: QUESTION_MANAGEMENT_ROUTE,
  },
  {
    title: "Rubric Management",
    icon: Settings,
    route: RUBRICS_MANAGEMENT_ROUTE,
  },
];
