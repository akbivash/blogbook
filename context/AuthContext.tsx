import { auth } from "@/config/firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";


export type AuthContextType = {
  errorMsg: string;
  isLoading: boolean;
  isLoggedIn: boolean;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  errorMsg: "",
  isLoading: false,
  signIn: async () => {},
  signInWithGoogle: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, provider);
      setIsLoading(false);
      let token = await result.user.getIdToken();
      localStorage.setItem("Token", token);
      router.push("/user/account");
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message);
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      let token = await res.user.getIdToken();
      localStorage.setItem("Token", token);

      setIsLoading(false);
      router.push("/user/account");
    } catch (err: any) {
      setErrorMsg(err.message);
      setIsLoading(false);
      console.log(err);
    }
  };
  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const res = await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      let token = await res.user.getIdToken();
      localStorage.setItem("Token", token);
      router.push("/blogs");
    } catch (err: any) {
      setErrorMsg(err.message);
      setIsLoading(false);
      console.log(err);
    }
  };

  const signOut = async () => {
    await auth.signOut();
    localStorage.removeItem("Token");
    router.push("/user/signup");
  };

  useEffect(() => {
    let token = localStorage.getItem("Token");
    if (token) {
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  }, [signIn, signUp, signInWithGoogle,signOut]);

  const value: AuthContextType = {
    signInWithGoogle,
    signUp,
    isLoading,
    errorMsg,
    signIn,
    signOut,
    isLoggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
