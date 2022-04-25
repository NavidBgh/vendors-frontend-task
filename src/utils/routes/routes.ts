import { Home, Vendors } from "../../pages";

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