import ContactUs from './pages/ContactUs';
import Home from './pages/Home';

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/contact-us',
        element: <ContactUs />
    }
];

export default routes;