import { AnnonceContext } from "../context/AnnonceContext"
import { useContext } from "react"

export const useAnnonceContext = () => {
  const context = useContext(AnnonceContext)

  if(!context) {
    throw Error('useAnnonceContext must be used inside an AnnonceContextProvider')
  }

  return context
}