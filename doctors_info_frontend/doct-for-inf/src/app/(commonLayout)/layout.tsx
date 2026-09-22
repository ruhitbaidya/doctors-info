import Footer from "@/components/shere/Footer";
import Navbar from "@/components/shere/navbar";
import { ReactNode } from "react";

const layout = ({children}:{children : ReactNode}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default layout
