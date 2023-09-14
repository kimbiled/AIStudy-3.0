import { type ReactNode } from "react";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

interface Props {
   children: ReactNode;
   className?: string;
}

export default function Layout({ children, className }: Props) {
   return (
      <>
         <Header />
         <main
            className={className}
            style={{
               flex: 1,
            }}
         >
            {children}
         </main>
         <Footer />
      </>
   );
}
