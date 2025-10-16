import RapportTable from "@/components/table-rapport";
import { Input } from "@/components/ui/input";
import Image from "next/image";



const Page = () => {


  return (
    <div className='max-w-7xl mx-auto space-y-4 bg-white text-black' id="myContent">
      <div className="flex items-center justify-between">
        <Image
          src="/logo.jpeg"
          alt="logo pic"
          width={100}
          height={100}
        />
        <div>
          <h1 className="font-medium text-lg"> تقرير يومي لمراقبة المحلات</h1>
          <div className="flex items-center gag-x-4 ">
            <Input type="date" className="w-[150px] border-none"/>
            <div>: التاريخ</div>
          </div>
        </div>
      </div>
      <RapportTable />
    </div>
  )
}


export default Page;
