"use client"

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white border-none">
          <Link
            href="/"
            className=" cursor-pointer flex items-center gap-1 px-4  rounded-lg"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Logo"
              
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
                <nav  className=""></nav>
            </SheetClose>

          </div>
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  "sidebar-Link flex items-center gap-4 p-3 rounded-lg transition-colors",
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-700"
                )}
              >
                <div className="relative size-7">
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    className={cn({ "brightness-[3] invert-0": isActive })}
                  />
                </div>
                <p className={cn("sidebar-label", { "!text-white": isActive })}>
                  {item.label}
                </p>
                <span className="ml-auto text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
