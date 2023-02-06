function Profile (){
    return (
        <div className="container">
            <div className="main">
                <div className="row">
                    <div className="col-md-4 mt-1">
                        <div className="card text-center sidebar">
                            <div className="card-body">
                                <img src="img.jpg" className="rounded-circle" width="150px"></img>
                                <div className="mt-3">
                                    <h3>FirstName+LastName</h3>
                                    <a href="#">HOME</a><br/>
                                    <a href="#">Shopping Cart</a><br/>
                                    <a href="#">UserList</a><br/>
                                    <a href="#">Log Out</a><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-1">
                        <div className="card mb-3 content">
                            <h1 className="m-3 pt-3">About</h1>
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