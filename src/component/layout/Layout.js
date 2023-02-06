
import Footer from "../footer/Footer"
import MainNavigation from "./MainNavigation"
import OrderList from "../order/OrderList"

function Layout(props){
    return (
        <div className="container-fluid">
        <MainNavigation />

        <main>
        {props.children}
        </main>
        
        <Footer />

        </div>
    )
}

export default Layout