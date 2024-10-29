import HomePage from '../pages/HomePage/HomePage.jsx'
import Orders from '../pages/Order/OrderPage.jsx'
import ProductsPage from '../pages/ProductsPage/ProductsPage.jsx'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx'
export const routes = [
    
    {
        path: '/order',
        page: Orders,
        isShowHeader: true,
    },
    {
        path: '/ProductsPage',
        page: ProductsPage,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFoundPage,       
    },
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },

]

