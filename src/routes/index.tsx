
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import PetShare from '../pages/Logged';

const PetShareRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<SignIn />} />
            <Route path='*' element={<PetShare />} />
        </Routes>
    );
};

export default PetShareRoutes;