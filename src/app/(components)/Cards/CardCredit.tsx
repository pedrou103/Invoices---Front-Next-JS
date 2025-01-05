import { CardCreditProps } from "@/app/lib/definitions";
import { IconCreditCardFilled, IconTrendingUp3 } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";

export default function CardCredit({ title, limit, id, color}: CardCreditProps) {
    return (
        <div className="w-full border rounded-2xl p-3 text-black shadow-md">
        <div className="flex gap-3 items-start mb-3">
          <div className={`${clsx(`bg-${color}-200`)} ${clsx(`text-${color}-500`)} p-2 rounded-xl`}>
            <IconCreditCardFilled />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">{title}</span>
            <span className="text-gray-500 text-sm">R$: {limit}</span>
          </div>
        </div>
        <Link
            href=""
            className="bg-gray-200 hover:bg-gray-600 px-3 py-2 flex gap-2 rounded-lg text-sm items-center justify-center transition-all"
        >
            Visualizar faturas
            <IconTrendingUp3 className="w-5 h-5" />
        </Link>
      </div>
    );
}