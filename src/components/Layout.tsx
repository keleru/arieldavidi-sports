import { useState, type ReactNode } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* Глобальный фон */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets/football-field.jpg')",
          filter: "blur(2px)",
          opacity: 0.15,
          zIndex: -10,
        }}
      />

      <Navbar openMenu={() => setOpen(true)} />
      <SideMenu open={open} close={() => setOpen(false)} />

      <div className="pt-20 relative z-0">{children}</div>
    </>
  );
}
