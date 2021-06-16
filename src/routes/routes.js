import React, { lazy, Suspense } from 'react'
import { retry } from '../helper/import-comp'
// import Home from '../pages/home/home'
// import About from '../pages/about/about'
// import Contact from '../pages/contact/contact'

const Home = lazy(() => retry(() => import("../pages/home/home")))
const About = lazy(() => retry(() => import("../pages/about/about")))
const Contact = lazy(() => retry(() => import("../pages/contact/contact")))

export default [
    {
        key: 'home',
        component: Home,
        path: '/',
        exact: false
    },
    {
        key: 'about',
        component: About,
        path: '/about',
        exact: true
    },
    {
        key: 'contact',
        component: Contact,
        path: '/contact',
        exact: true
    }
]