'use client'
import TableData from '@/components/Table';
import { exportTableToExcel } from '@/utils/exportExcel'
export default function Home() {
  return (
    <main className='max-w-2xl mx-auto'>
      <TableData />
    </main>
  );
}
