import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface State {
  isModalOpen: boolean;
  posts: any[];
  categories: string[];
  selectedCategory: string;
  isLoading: boolean;
  message: string;
}

interface ContextProps {
  state: State;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPosts: React.Dispatch<React.SetStateAction<any[]>>;
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}
const initialState = {
  state: {
    isModalOpen: false,
    posts: [],
    categories: [],
    selectedCategory: "All",
    isLoading: false,
    message: "",
  },
  setIsModalOpen: () => null,
  setPosts: () => null,
  setCategories: () => null,
  setSelectedCategory: () => null,
  setIsLoading: () => null,
  setMessage: () => null,
};

const AppContext = createContext<ContextProps>(initialState);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const value = {
    setIsModalOpen,
    setPosts,
    setCategories,
    setSelectedCategory,
    setIsLoading,
    setMessage,
    state: {
      isModalOpen,
      posts,
      categories,
      isLoading,
      message,
      selectedCategory,
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
