import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';


const App: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/:name" element={<UserInfoPage />} />
            <Route
                path="*"
                element={<Navigate to="/" replace/>}
            />
        </Routes>
    );
}

export default App;
