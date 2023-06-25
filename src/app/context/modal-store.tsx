"use client"

import { ReactNode, createContext, useContext, useState } from "react"

type ModalContextProps = {
  openModal: boolean;
  handleOpenModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  openModal: false,
  handleOpenModal: () => ''
})

export const ModalContextProvider = ({ 
  children,
 }: { 
  children: ReactNode 
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <ModalContext.Provider value={{ openModal, handleOpenModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext)
