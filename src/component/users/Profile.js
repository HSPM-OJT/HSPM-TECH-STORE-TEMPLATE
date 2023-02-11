import { Link } from "react-router-dom";
import Card from "../../ui/Card";
function Profile (){
    return (
        <div className="container">
            <div className="main">
                <div className="row">
                    <div className="col-md-4 mt-1">
                        <Card>
                            <div className="card card-body">
                                <img src="img.jpg" className="rounded-circle" width="150px" alt="default"></img>
                                <div className="mt-3 text-center">
                                    <Link to='/product/productlist'>ProductList</Link><br/>
                                    <Link to='/product/addnewProduct'>AddProduct</Link><br/>
                                    <Link to='/user/users'>UserList</Link><br/>
                                    <Link to='/order/all'>OrderList</Link><br/>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-8 mt-1">
                        <div className="card mb-3 content">
                            <h2 className="m-3 pt-3">About</h2>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h3>Full Name</h3>
                                    </div>
                                    <div className="col-md-9 text-secondary">
                                        <p>ptk</p>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h3>Email</h3>
                                    </div>
                                    <div className="col-md-9 text-secondary">
                                        <p>pan@gmail.com</p>
                                    </div> 
                                </div>
                                <br/>
                                    <div className="row">
                                    <div className="col-md-3">
                                        <h3>Phone Number</h3>
                                    </div>
                                    <div className="col-md-9 text-secondary">
                                        <p>09969610229</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Profile;