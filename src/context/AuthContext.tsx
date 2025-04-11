import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/axios'
import { User } from '../services/queries/User/interface'

interface AuthContextType {
    user: User | null
    token: string | null
    login: (user: User, token: string) => void
    logout: () => void
    isAuthenticated: boolean
    isAuthChecked: boolean
}

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<User | null>(null)
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        const storedUser = localStorage.getItem('user')
        if (storedToken) {
            setToken(storedToken)
            setUser(JSON.parse(storedUser!))
            api.defaults.headers.common['Authorization'] = storedToken
        }

        setIsAuthChecked(true);
    }, [])

    const login = (user: User, newToken: string) => {
        localStorage.setItem('token', newToken)
        localStorage.setItem('user', JSON.stringify(user))
        api.defaults.headers.common['Authorization'] = newToken
        setToken(newToken)
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        delete api.defaults.headers.common['Authorization']
        setToken(null)
        setUser(null)
        navigate('/login')
    }

    const isAuthenticated = !!user && !!token;

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, isAuthChecked }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
