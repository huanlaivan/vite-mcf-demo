import { create } from "zustand";
import { PRODUCTS } from "@/constants";

const useStore = create((_, get) => ({
  products: PRODUCTS,
  getProductById: (id) => get().products.find((p) => p.id === id),
}));

export default useStore;
