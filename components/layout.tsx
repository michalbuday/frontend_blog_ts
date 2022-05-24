import React from 'react';
import Nav, { Category } from "./nav";
import Footer from "./footer";

interface LayoutProps {
    children: React.ReactNode,
    categories: Array<Category>
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
