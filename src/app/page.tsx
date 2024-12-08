import Benefit from "@/Components/Benieft";
import Brandoffer from "@/Components/Brandoffer";
import GlobalBrand from "@/Components/Globalbrand";
import Hero from "@/Components/Hero";
import Newceramics from "@/Components/New ceramics";
import OurPopularproduct from "@/Components/OurPopularproduct";


export default function Home() {
  return (
   <div>
    
    <br></br>
    <Hero />
    <br></br>
    <Brandoffer />
    <br></br>
    <Newceramics />
    <br></br>
    <OurPopularproduct />
    <br></br>
    <Benefit />
    <br></br>
      <GlobalBrand />
   </div>
  );
}
