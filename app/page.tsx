import Image from "next/image";
import Navbar from "./compo/Navbar";
import Slider from "./compo/Slider";
import Horizon from "./compo/Horizon";

export default function Home() {
  return (
    <div >
   <Navbar />
   <Slider />
   <Horizon />

    </div>
  );
}
