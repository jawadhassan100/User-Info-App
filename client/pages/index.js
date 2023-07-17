import Head from "next/head";
import Login from "@jawad/components/Login";
import Navbar from "@jawad/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}
