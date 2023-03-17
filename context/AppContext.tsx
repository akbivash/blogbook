import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react'


type AppContextType = {
    isModalOpen:boolean
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType>({
    isModalOpen:false,
    setIsModalOpen:() => {}
})

type AppProviderProps = {
children: ReactNode
}

export const AppProvider:React.FC<AppProviderProps> = ({children}) => {
const[isModalOpen, setIsModalOpen] = useState(false)



    const value:AppContextType = {
setIsModalOpen, isModalOpen
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}