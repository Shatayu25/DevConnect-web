import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const AuthContext = createContext();

const baseUrl = BASE_URL;

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProfile() {
    try {
      const res = await fetch(`${baseUrl}/profile/view`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    } catch (err) {
      console.log(err);
      // to set the loading state to false, whether the user log in successfully or not
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, fetchProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside of the AuthContextProvider");
  }
  return context;
}

export { useAuth, AuthProvider };
