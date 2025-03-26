import Hero1 from "@/components/global/Hero1";
import ProductContainer from "@/components/global/ProductContainer";


export default function Home() {
  return (
    <div className="">
      <Hero1 />
      <div className="my-3 px-3 md:px-5">
        <h1 className="text-lg text-center font-bold mb-3">Products</h1>
        <ProductContainer/>
      </div>

    </div>
  );
}
