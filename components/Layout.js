import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = ({ children}) => {
    return (
        <div className="contant">
            {children}
            <Header/>
            <Sidebar/>
            <Footer/>
        </div>
    )
}

export default Layout