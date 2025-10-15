import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PlusIcon } from "lucide-react"
import { Create } from "./form"

export function Add() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <span>
            اضافة
          </span>
          <span>
            <PlusIcon />
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            اضافة حالة
          </SheetTitle>
          <SheetDescription>
            هنا يمكنك اضافة جميع البيانات متعلقة بالحالة.
          </SheetDescription>
        </SheetHeader>
        <Create />
      </SheetContent>
    </Sheet>
  )
}
