import { ReactElement } from "react";
import Nav, { Category } from "./nav";

interface LayoutProps {
    children: React.ReactNode,
    categories: Array<Category>
}

const Layout = ({children, categories}: LayoutProps) => {
    return (
    <>
        <Nav categories={categories} />
        {children}
    </>
    );
}

export default Layout;
