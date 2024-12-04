import { createContext, useState, ReactNode } from "react";

// Define the interface for the user context
interface User {
  name: string;
}

interface AppContextType {
  user: User;
  setUser: (user: User) => void;
}

// Create a context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export function AppContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({ name: "John" });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
