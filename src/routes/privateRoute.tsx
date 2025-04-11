
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Logged/Home';
import DonateType from '../pages/Logged/DonateType';
import DonateAnimal from '../pages/Logged/DonateAnimal';
import DonateItem from '../pages/Logged/DonateItem';
import Success from '../pages/Logged/Success';
import RequestItem from '../pages/Logged/RequestItem';
import MyAds from '../pages/Logged/MyAds';
import SelectedItem from '../pages/Logged/SelectedItem';
import SelectedItemRequest from '../pages/Logged/SelectedItemRequest';
import SelectedAnimal from '../pages/Logged/SelectedAnimal';
import MyInterest from '../pages/Logged/MyInterest';

const PetSharePrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/animal/:id' element={<SelectedAnimal />} />
            <Route path='/item/:id' element={<SelectedItem />} />
            <Route path='/request/:id' element={<SelectedItemRequest />} />
            <Route path='/DonateType' element={<DonateType />} />
            <Route path='/DonateAnimal' element={<DonateAnimal />} />
            <Route path='/DonateItem' element={<DonateItem />} />
            <Route path='/RequestItem' element={<RequestItem />} />
            <Route path='/ads' element={<MyAds />} />
            <Route path='/interest' element={<MyInterest />} />
            <Route path='/success' element={<Success />} />
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    );
};

export default PetSharePrivateRoutes;