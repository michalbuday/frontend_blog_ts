import React from 'react';
import Nav from "./nav";
import Footer from "./footer";
import PageContainer from './pageContainer';
import { categoryType } from '../lib/types';

interface LayoutProps {
    children: React.ReactNode,
    categories: Array<categoryType>
}

const Layout:React.FC<LayoutProps> = ({children, categories}) => {
    return (
        <React.Fragment>
            <Nav categories={categories} />
                <PageContainer>
                    {children}
                </PageContainer>
            <Footer/>
        </React.Fragment>
    );
}

export default Layout;
