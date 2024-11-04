import HomePage from '../pages/HomePage/HomePage.jsx'
import Orders from '../pages/Order/OrderPage.jsx'
import ProductsPage from '../pages/ProductsPage/ProductsPage.jsx'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx'
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import SigninPage from '../pages/SigninPage/SigninPage.jsx'
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage.jsx'
import ForgetPasswordPage from '../pages/ForgetPasswordPage/ForgetPasswordPage.jsx'
export const routes = [
    {
        path: '/ForgetPass',
        page: ForgetPasswordPage,
        isShowHeader: true,
    },
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
        path: '/Login',
        page: LoginPage,
        isShowHeader: true,
    },
    {
        path: '/Signin',
        page: SigninPage,
        isShowHeader: true,
    },
    {
        path: '/ProductDetail',
        page: ProductDetailPage,
        isShowHeader: true,
    },
    {
        path: '/type',
        page: TypeProductPage,
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

