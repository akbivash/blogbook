import Navbar from "@/components/Navbar";
import { AppProvider, useGlobalContext } from "@/context/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <AppProvider>
        <SessionProvider session={session}>
          <div className=" flex  justify-center dark:bg-dark-dark dark:border-dark-default z-40 fixed  left-0 top-0 w-full h-[10vh] border-b-gray-200 border-b-2 bg-gray-100  font-roboto">
            <Navbar />
          </div>
          <div className="pt-16 relative dark:bg-dark-dark dark:text-gray-300 min-h-screen  font-sans max-w-[1400px] mx-auto">
            <Component {...pageProps} />
          </div>
        </SessionProvider>
      </AppProvider>
    </>
  );
}
