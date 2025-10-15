"use client";
import { TableStore } from "@/store/table-store";
import { exportTableToExcel } from "@/utils/exportExcel";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { X } from "lucide-react";
export default function TableData() {
  const { data , DeleteData} = TableStore()
  return (
    <Table id="myTable">
      <TableCaption>بيانات جميع خاصة فقط ب دوزاني.</TableCaption>
      <TableHeader>
        <TableRow>
          {/* 
<TableHead className="w-[100px]">Invoice</TableHead>
          */}
          <TableHead>المدينة</TableHead>
          <TableHead>االحالة</TableHead>
          <TableHead>عملية</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          data.map(({ city, behviour }, index) => (
            <TableRow key={index} className="relative">
              <TableCell className="font-medium">{city}</TableCell>
              <TableCell>{behviour}</TableCell>
              <TableCell className="w-12" onClick={()=>DeleteData(city)}><X className="size-6 text-red-500 cursor-pointer" /></TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>);
}
