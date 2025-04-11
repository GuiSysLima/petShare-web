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
}

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if (storedToken) {
            setToken(storedToken)
            api.defaults.headers.common['Authorization'] = storedToken
        }
    }, [])

    const login = (user: User, newToken: string) => {
        localStorage.setItem('token', newToken)
        api.defaults.headers.common['Authorization'] = newToken
        setToken(newToken)
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem('token')
        delete api.defaults.headers.common['Authorization']
        setToken(null)
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
