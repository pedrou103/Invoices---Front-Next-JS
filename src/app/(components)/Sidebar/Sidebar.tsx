"use client";

import { usePathname } from "next/navigation";
import MenuItem from "../Menu/MenuItem";
import { IconBrandShopee } from "@tabler/icons-react";
import profile from "../../../../public/assets/img/profile.avif"
import Image from "next/image";

const menuItems = [
  { href: "/", title: "Dashboard", iconName: "ChartPieFilled" },
  { href: "/cards", title: "Cartões", iconName: "ChartPieFilled" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className="h-full flex flex-col justify-between">
        <div className="">
          <div className="w-100 flex justify-center items-center pt-6 mb-11">
            <div className="rounded-xl w-10 h-10 bg-purple-200 flex items-center justify-center text-black me-3">
              <IconBrandShopee />
            </div>
            <p className="text-white text-base">
              Meu <br /> Dinheirinho
            </p>
          </div>
          <div className="w-100 flex flex-col justify-center items-center mb-10">
            <Image
              src={profile}
              className="rounded-full w-12 h-12"
              alt=""
            />
            <p className="text-white mt-4">Pedro Lucas</p>
            <span className="text-gray-400 text-xs mt-2">email@example.com</span>
          </div>
          <aside className="py-3 my-3 flex flex-col gap-5">
            {menuItems.map((item, index) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <MenuItem
                  key={index}
                  href={item.href}
                  title={item.title}
                  iconName={item.iconName}
                  isActive={active}
                />
              );
            })}
          </aside>
        </div>
        <div>
          <MenuItem href="/" title="Logout" iconName="Logout" />
          <div className="w-full flex flex-col justify-center items-center mt-3 pb-4">
            <p className="text-gray-400 text-xs mt-2">developed by </p>
          </div>
        </div>
      </div>
    </>
  );
}
