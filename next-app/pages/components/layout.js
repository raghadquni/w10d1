import NavBar from "./NavBar";

const Layout = ({children}) => {
    return (  
        <>
        <NavBar />
        {children} {/* pages */}
        </>
    );
}
 
export default Layout;