import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main.jsx';
import Layout from './router/Layout.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
