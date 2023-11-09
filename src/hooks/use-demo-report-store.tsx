import create from "zustand";

interface State {
  responseText: string;
  setResponseText: (text: string) => void;
}

const useDemoReportStore = create<State>((set) => ({
  responseText: "",
  setResponseText: (text) => set({ responseText: text }),
}));

export default useDemoReportStore;
