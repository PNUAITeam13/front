import { create } from "zustand";

interface IToastProps {
  id: string;
  additionalMessage?: string;
}
interface State {
  data: IToastProps[];
}

interface Actions {
  addMessage: (message: IToastProps) => void;
  removeMessage: (id: string) => void;
  clearMessages: () => void;
}

const initialState: State = {
  data: [],
};

export const useMessageStore = create<State & Actions>((set) => ({
  ...initialState,
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
