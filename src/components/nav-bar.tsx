'use client'

import { Download } from "lucide-react"
import { Button } from "./ui/button"
import { Add } from "./sheet"
import { exportTableToExcel } from "@/utils/exportExcel"


export const Navbar = () => {


  return (
    <header className="w-full h-12 flex items-center px-2">
      <nav className="w-full  flex justify-end gap-x-4">
        <Button onClick={() => exportTableToExcel("myTable")}>
          <span>
            تحميل الجدول
          </span>
          <span>
            <Download />
          </span>
        </Button>
        <Add />
      </nav>
    </header>
  )
}
