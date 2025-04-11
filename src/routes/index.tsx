
import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import PetShare from '../pages/Logged';
import Register from '../pages/Register';
import { AuthProvider, useAuth } from '../context/AuthContext';

const PublicRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth()

    if (isAuthenticated) {
        return <Navigate to="/home" />
    }
    return children
}



const PetShareRoutes = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/login' element={
                    <PublicRoute>
                        <SignIn />
                    </PublicRoute>} />
                <Route path='/register' element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>} />
                <Route path='*' element={<PetShare />} />
            </Routes>
        </AuthProvider>
    );
};

export default PetShareRoutes;