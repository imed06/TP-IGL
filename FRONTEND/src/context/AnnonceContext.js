import { createContext, useEffect, useReducer } from 'react'

export const AnnonceContext = createContext()

export const AnnonceReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ANNONCE':
            return {
                Annonce: action.payload
            }
        case 'CREATE_ANNONCE':
            return {
                Annonce: [action.payload, ...state.Annonce]
            }
        default:
            return state
    }
}

export const AnnonceContextProvider = ({ children }) => {
    const [state, dispatchAnnonce] = useReducer(AnnonceReducer, {
        Annonce: []
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            dispatchAnnonce({ type: 'SET_ANNONCE', payload: user?.annonces })
        }
    }, [])

    return (
        <AnnonceContext.Provider value={{ ...state, dispatchAnnonce }}>
            {children}
        </AnnonceContext.Provider>
    )
}