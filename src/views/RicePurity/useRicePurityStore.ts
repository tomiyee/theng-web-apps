import { create } from "zustand";
import { persist } from "zustand/middleware";

type StoreState = {
  checked: boolean[];
  toggle: (index: number) => void;
};

const useRicePurityStore = create(
  persist<StoreState>(
    (set, get) => ({
      checked: new Array(100).fill(false),
      toggle: (index: number) => {
        set({ checked: get().checked.map((v, i) => (i === index ? !v : v)) });
      },
    }),
    {
      name: "purity-test",
    }
  )
);
export default useRicePurityStore;