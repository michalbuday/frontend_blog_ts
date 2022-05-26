import React from 'react';
import Nav from "./nav";
import Footer from "./footer";
import { categoryType } from '../lib/types';

interface LayoutProps {
    children: React.ReactNode,
    categories: Array<categoryType>
}

const Layout:React.FC<LayoutProps> = ({children, categories}) => {
    return (
    <>
        <Nav categories={categories} />
        {children}
        <Footer/>
    </>
    );
}

export default Layout;
