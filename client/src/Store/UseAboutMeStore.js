import { create } from "zustand";

const useAboutMeStore = create((set) => ({
  isOpenAboutMe: false,

  openAboutMe: () => {
    set({ isOpenAboutMe: true });
  },

  closeAboutMe: () => {
    set({ isOpenAboutMe: false });
  },
}));

export default useAboutMeStore;
