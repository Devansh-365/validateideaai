import create from "zustand";

interface AuthStore {
  roles: string;
  isLoggedIn: boolean;
  setRoles: (roles: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  roles: "visitor",
  isLoggedIn: false,
  setRoles: (roles) => set({ roles }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));

export default useAuthStore;
