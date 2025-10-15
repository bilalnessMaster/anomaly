'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { TableStore } from "@/store/table-store"

const formSchema = z.object({
  city: z.string().min(2),
  behviour: z.string().min(2)
})

export const Create = () => {
  const { setNewData } = TableStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
      behviour: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    setNewData(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} dir="rlt" className="text-right space-y-5 px-4">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex flex-col items-end gap-y-2">
              <FormLabel className="text-end mb-1 ">المدينة</FormLabel>
              <FormControl>
                <Input placeholder="االدار البيضاء" {...field} dir="rtl" />
              </FormControl>
              <FormDescription>
                اضف اسم المدينة هنا.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="behviour"
          render={({ field }) => (
            <FormItem className="flex flex-col items-end gap-y-2">
              <FormLabel className="text-end mb-1 ">االحالة</FormLabel>
              <FormControl>
                <Input placeholder="اضف اسم المدينة هنا" {...field} dir="rtl" />
              </FormControl>
              <FormDescription>
                ااصف الحالة هنا .
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SheetFooter>
          <Button type="submit">حفظ</Button>
          <SheetClose asChild>
            <Button variant="outline">اغلاق</Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </Form>)

}
