import { RegisterModalStoreProps } from "../types/index";
import { create } from "zustand";

export const useRegisterModal = create<RegisterModalStoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
