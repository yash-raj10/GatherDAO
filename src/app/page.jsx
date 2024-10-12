import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { BackgroundLines } from "@/components/ui/background-lines";
import Middle from "@/components/ui/middle";

export default function Home() {
  return (
    <div>
      <BackgroundLines />
      {/* <div className="text-white">hlo</div> */}
      <Middle />
    </div>
  );
}
