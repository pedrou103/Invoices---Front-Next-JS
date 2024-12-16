"use client";

import { usePathname } from "next/navigation";
import MenuItem from "../Menu/MenuItem";

const menuItems = [
    { href: '/', title: 'Dashboard', iconName: 'LayoutDashboard' },
    { href: '/cards', title: 'Cartões', iconName: 'CreditCard' },
];

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <>
            <div className="w-100 flex flex-col justify-center items-center">
                <img src="https://img.freepik.com/vetores-premium/icone-de-perfil-de-avatar-padrao-imagem-de-usuario-de-midia-social-icone-de-avatar-cinza-silhueta-de-perfil-em-branco-ilustracao-vetorial_561158-3408.jpg" className="rounded-full w-20 h-20" alt="" />
                <p className="text-white text-lg mt-3">Pedro Lucas</p>
            </div>
            <aside className="py-3 my-3 flex flex-col gap-1">

                {menuItems.map((item, index) => {
                    const active = item.href === '/' 
                    ? pathname === '/' 
                    : pathname.startsWith(item.href)

                    return (
                        <MenuItem key={index} href={item.href} title={item.title} iconName={item.iconName} isActive={active} />
                    )
                })}
            </aside>
        </>
    )
}