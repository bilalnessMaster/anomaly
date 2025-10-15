import { create } from 'zustand';

type dataProps = {
  city: string;
  behviour: string
}


interface tableStoreProps {
  data: dataProps[];
  setNewData: (data: dataProps) => void;
  DeleteData: (value: string) => void;
}

export const TableStore = create<tableStoreProps>((set, get) => ({
  data: [],
  setNewData: (dataForm) => {
    const { data } = get()
    const newData = [...data, dataForm]
    set({ data: newData })
  },
  DeleteData: (value) => {
    const { data } = get()
    const newData = data.filter(({ city }) => city != value)
    set({ data: newData })
  }
}))
