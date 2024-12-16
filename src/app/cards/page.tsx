import { Metadata } from "next";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: 'Cartões'
};

export default function Cards() {

  return (
    <>
      <Header title="Cartões" />
    </>
  );
}
