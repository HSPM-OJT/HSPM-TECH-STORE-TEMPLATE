
function Order(props) {
    
    return(
        <div className="mb-5">
        <h5 className="text-center">CheckOut form</h5>
        <div className="card card-body container bg-light shadow mb-10">
        
        <div className="row">
            <div className="col-3 mb-2">
                <h5>Name : { props.customerName}</h5>
            </div>
            <div className="col-3 mb-2">
                <h5>Phone : { props.phone}</h5>
            </div>
            <div className="col-3 mb-2">
                <h5>Email : { props.email}</h5>
            </div>
            <div className="col-3 mb-2">
                <h5>Order Date : {props.orderDate}</h5>
            </div>
        </div>
            <br />
            <div className="row">
                <div className="col-5 mb-2">
                    productName
                </div>
                <div className="col-3 mb-2">
                    Price
                </div>
                <div className="col-2 mb-2">
                    Quantity
                </div>

                <div className="col-2 mb-2">
                    SubTotal
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-5 mb-2">
                {props.productName}
                </div>
                <div className="col-3 mb-2">
                    {props.price}
                </div>
                <div className="col-2 mb-2">
                    {props.quantity}
                </div>

                <div className="col-2 mb-2">
                    {props.subTotal}
                </div>

            </div>
            <div className="row">
                <div className="col-5 mb-2">
                    
                </div>
                <div className="col-3 mb-2">
                    
                </div>
                <div className="col-2 mb-2">
                    ShippingCost
                </div>

                <div className="col-2 mb-2">
                    {props.shippingCost}
                </div>

            </div>
            <div className="row">
                <div className="col-5 mb-2">
                    
                </div>
                <div className="col-3 mb-2">
                    
                </div>
                <div className="col-2 mb-2">
                    GrandTotal
                </div>

                <div className="col-2 mb-2">
                    {props.grandTotal}
                </div>

            </div>
        {/* </div> */}
    </div>
    </div>
    )

}
export default Order;