"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cities, Titles } from "@/utils/constants";
import { Row } from "./raw";

export default function RapportTable() {

  return (
    <Table id="myTable">
      <TableCaption>بيانات جميع خاصة فقط ب دوزاني.</TableCaption>
      <TableHeader>
        <TableRow>
          {
            Titles.map((data: string) => (
              <TableHead key={data} className="max-w-23 whitespace-pre-wrap h-12 border-t text-center font-medium border-r border-neutral-200 first:border-l-neutral-200 first:border-l" >{data}</TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          cities.map((city, index) => (
            <Row city={city} key={index} />
          ))
        }
      </TableBody>
    </Table>);
}
