"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface User {
  name: string;
  email: string;
  membershipTier?: string;
  enrolledClasses: string[];
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const isLoggedIn = !!user;

  // Simulated login — replace with real API call when ready
  const login = async (email: string, _password: string, name?: string): Promise<void> => {
    const mockUser: User = {
      name: name ?? email.split("@")[0],
      email,
      membershipTier: "elite",
      enrolledClasses: [],
    };
    setUser(mockUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
