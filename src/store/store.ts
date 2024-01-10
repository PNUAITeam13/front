import { create } from "zustand";

interface IToastProps {
  id: string;
  additionalMessage?: string;
}
interface State {
  data: IToastProps[];
  currentTab: string;
}

interface Actions {
  addMessage: (message: IToastProps) => void;
  removeMessage: (id: string) => void;
  clearMessages: () => void;
  setCurrentTab: (tab: string) => void;
}

const initialState: State = {
  data: [],
  currentTab: "alcho",
};

export const useMessageStore = create<State & Actions>((set) => ({
  ...initialState,
  setCurrentTab: (tab) => set((state) => ({ ...state, currentTab: tab })),
  addMessage: (message) => {
    set((state) => ({ ...state, data: [...state.data, message] }));
  },
  clearMessages: () => set((state) => ({ ...state, data: [] })),
  removeMessage: (id) =>
    set((state) => ({
      ...state,
      data: state.data.filter((el) => el.id !== id),
    })),
}));
