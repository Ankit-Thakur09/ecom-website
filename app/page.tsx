import Hero1 from "@/components/global/Hero1";
import ProductContainer from "@/components/global/ProductContainer";
import SplitCard from "../components/SplitCard"


export default function Home() {
  return (
   <div className="relative">
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-b from-amber-300 to-amber-200"></div>
    
    <div className="relative z-10">
      <Hero1 />

      <div className="h-[300px] bg-red-500">
        <p className="text-white text-center font-bold">This is part of the same container</p>
      </div>
    </div>
  </div>

  <div className= " relative z-10 my-10 px-3 md:px-5">
    <h1 className="text-lg text-center font-bold mb-5">Products</h1>
    <ProductContainer />
  </div>
  <div>
    <SplitCard/>
  </div>
</div>
  );
}
