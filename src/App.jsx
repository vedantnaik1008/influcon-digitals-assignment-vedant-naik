import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import routes from './routes';

function App() {
    return (
        <div className='overflow-hidden'>
            <BrowserRouter>
                <Header />
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
