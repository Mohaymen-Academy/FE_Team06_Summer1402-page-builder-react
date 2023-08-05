import App from '../../Pages/App.jsx';
import LoginPage from '../../Pages/Login.jsx';
import ErrorPage from '../../Pages/ErrorPage.jsx';

const routes = [
    {
        path: '/App',
        component: App,
        Private: true,
    },
    {
        path: '/login',
        component: LoginPage,
        Private: false,
    },
    {
        path: '/error',
        component: ErrorPage,
        Private: false,
    },
    
];

export default routes;