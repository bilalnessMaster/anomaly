import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Titles } from "@/utils/constants"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { K2D } from "next/font/google"
import { Textarea } from "./ui/textarea"


export const Row = ({ city }: { city: string }) => {
  return (
    <TableRow className="h-16 border-b border-neutral-200">
      {
        Titles.slice(0, 1).map((_, i) => (
          <TableCell key={i} className="first:border-l  border-r border-neutral-200">
            <div className="w-full flex justify-center ">
                <Textarea placeholder="اضف ملاحضة"  dir="rtl"/>  
            </div>
          </TableCell>
        ))
      } 
      {
        Titles.slice(0, 1).map((_, i) => (
          <TableCell key={i} className="first:border-l  border-r border-neutral-200">
            <div className="w-full flex justify-center ">
            <Check />
            </div>
          </TableCell>
        ))
      }
      {
        Titles.slice(0, 1).map((_, i) => (
          <TableCell key={i} className="first:border-l  border-r border-neutral-200">
            <div className="w-full flex justify-center ">
              <Select>
                <SelectTrigger className="w-[120px]" dir="rtl">
                  <SelectValue placeholder="جيد" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">جيد</SelectItem>
                    <SelectItem value="banana">مقبول</SelectItem>
                    <SelectItem value="blueberry">غير مقبول</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </TableCell>
        ))
      }

      {
        Titles.slice(0, 2).map((_, i) => (
          <TableCell key={i} className="first:border-l  border-r border-neutral-200">
            <div className="w-full flex justify-center ">
              <Check />
            </div>
          </TableCell>
        ))
      }
      {
        Titles.slice(0, 2).map((_, i) => (
          <TableCell key={i} className="first:border-l  border-r border-neutral-200">
            <div className="w-full flex justify-center ">
              <Select>
                <SelectTrigger className="w-[120px]" dir="rtl">
                  <SelectValue placeholder="جيد" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">جيد</SelectItem>
                    <SelectItem value="banana">مقبول</SelectItem>
                    <SelectItem value="blueberry">غير مقبول</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </TableCell>
        ))
      }

      {
        Titles.slice(0, 2).map((_, i) => (
          <TableCell key={i} className="first:border-l  border-r border-neutral-200">
            <div className="w-full flex justify-center ">
              <Check />
            </div>
          </TableCell>
        ))
      }
      <TableCell className="font-medium text-right border-r border-neutral-201">
        {city}
      </TableCell>
    </TableRow>
  )
}


const Check = () => {


  return (
    <RadioGroup defaultValue="option-one" >
      <div className="flex gap-x-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">لا</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">نعم</Label>
        </div>
      </div>
    </RadioGroup>)
}
