import { Metadata } from "next";
import Header from "./(components)/Header/Header";
import { IconBellRinging } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default function Page() {

  return (
    <>
      <Header title="Dashboard">
        <button className="bg-white drop-shadow-sm hover:drop-shadow-md transition rounded-xl p-3">
          <IconBellRinging className="h-4 w-4 text-slate-500" />
        </button>
      </Header>
    </>
  );
}
