import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UpLogo from "@/images/up.svg";

const ClientFooter = () => {
  return (
    <footer className="pt-10 flex justify-end items-center w-full mb-20">
      {/* <Link href="#" className="flex items-center text-sm">
        <ArrowLeft className="mr-1 " size={30} />
        <p className="font-[family-name:var(--font-dancing-script)] text-3xl">
          Go back
        </p>
      </Link> */}
      {/* <div className="flex items-center gap-3">
        <Image src={UpLogo} alt="swivel-up-logo" width={40} />
        <span className="text-md mr-2 font-[family-name:var(--font-playfair-display)] ">
          Next: Managing Mindsets & Biases
        </span>
      </div> */}
    </footer>
  );
};

export default ClientFooter;
