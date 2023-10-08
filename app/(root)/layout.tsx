import LeftSideBar from "@/components/shared/LeftSideBar";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";
import "../globals.css";
import Topbar from "@/components/shared/TopBar";
import Bottombar from "@/components/shared/BottomBar";
import RightSidebar from "@/components/shared/RightSidebar";

export const metadata = {
   title: "Threads",
   description: "A Nex.js 13 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <ClerkProvider
         appearance={{
            baseTheme: dark,
         }}
      >
         <html lang="en">
            <body className={inter.className}>
               <Topbar />

               <main className="flex flex-row">
                  <LeftSideBar />
                  <section className="main-container">
                     <div className="w-full max-w-4xl">{children}</div>
                  </section>
                  <RightSidebar />
               </main>
               <Bottombar />
            </body>
         </html>
      </ClerkProvider>
   );
}
