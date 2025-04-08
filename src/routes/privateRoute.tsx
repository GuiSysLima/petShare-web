
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Logged/Home';
import DonateType from '../pages/Logged/DonateType';
import DonateAnimal from '../pages/Logged/DonateAnimal';
import DonateItem from '../pages/Logged/DonateItem';
import SelectedAnimal from '../pages/Logged/SelectedAnimal';
import Success from '../pages/Logged/Success';

const PetSharePrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/animal/:id' element={<SelectedAnimal />} />
            <Route path='/DonateType' element={<DonateType />} />
            <Route path='/DonateAnimal' element={<DonateAnimal />} />
            <Route path='/DonateItem' element={<DonateItem />} />
            <Route path='/success' element={<Success />} />
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    );
};

export default PetSharePrivateRoutes;