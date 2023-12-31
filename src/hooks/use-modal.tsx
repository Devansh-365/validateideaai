import create from "zustand";

export type ModalType =
  | "buisnessIdeaModal"
  | "deleteBuisnessIdea"
  | "createDemoReportModal"
  | "alertDemoUser"
  | "createMoreReport"
  | "contactUs";

interface ModalData {
  report?: any;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
