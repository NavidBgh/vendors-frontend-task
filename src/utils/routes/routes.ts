import Home from "../../pages/Home";
import Vendors from "../../pages/Vendors";

interface route {
    path: string,
    component: any,
    private: boolean,
    exact: boolean
}

export const routes: route[] = [
    {
        path: '/',
        component: Home,
        private: false,
        exact: true
    },
    {
        path: '/vendors',
        component: Vendors,
        private: false,
        exact: true
    },
];