"use client";
import { SWIVELUP_USER_ROLE } from "@/constants/user.constant";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useUserRole = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const role = Cookies.get(SWIVELUP_USER_ROLE) || "";
    setUserRole(role);
  }, []);

  return userRole;
};
