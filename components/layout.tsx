import Nav, { Category } from "./nav";
import Footer from "./footer";

interface LayoutProps {
    children: React.ReactNode,
    categories: Array<Category>
}

const Layout = ({children, categories}: LayoutProps) => {
    return (
    <>
        <Nav categories={categories} />
        {children}
        <Footer/>
    </>
    );
}

export default Layout;
