import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='content'>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
