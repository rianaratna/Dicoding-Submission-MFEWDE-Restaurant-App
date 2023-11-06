import Home from '../views/pages/home';
import Favourite from '../views/pages/favourite';
import Detail from '../views/pages/detail';

const routes = {
    '/': Home, // Default Page
    '/home': Home,
    '/favourite': Favourite,
    '/detail/:id': Detail,
};

export default routes;
