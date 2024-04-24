import Indicator_card from "./ui/indicators";
import Layout from "./Layout";
import {Barchart} from "./ui/BarChart";

export default function Home() {
  return (
    <Layout>
      <div className="flex h-auto w-full flex-col gap-y-10 pt-6">
        <Indicator_card />
        <div className="flex flex-row gap-4 bg-gray-100 p-7 justify-center items-center h-[600px] w-full">
        <Barchart/>
        </div>
      </div>
    </Layout>
  )
}