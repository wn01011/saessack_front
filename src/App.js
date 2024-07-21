import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main.jsx';
import Layout from './router/Layout.jsx';
import Chat from './pages/chat/Chat.jsx';
import Depressive from './pages/depressive/Depressive.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/depressive" element={<Depressive />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
