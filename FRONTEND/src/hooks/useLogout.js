import { useAnnonceContext } from './useAnnonceContext'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatchAnnonce } = useAnnonceContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchAnnonce({ type: 'SET_ANNONCE',payload:[] })
  }

  return { logout }
}