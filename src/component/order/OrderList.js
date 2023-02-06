import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import Order from "./Order";
import { selectAllOrders,getOrderStatus, fetchOrders } from "./orderSlice";

function OrderList() {

    const dispatch = useDispatch()
    console.log('dispatch')
    const orders = useSelector(selectAllOrders)
    console.log("OrderList"+orders)
    const orderStatus = useSelector(getOrderStatus)

    useEffect(() => {
        if(orderStatus === 'idle'){
            dispatch(fetchOrders())
        }
    },[orderStatus,dispatch])

    let content;

    if(orderStatus === 'loading'){
        content = (<p>Loading.....</p>)
    }

    if(orderStatus === 'succeeded'){
        console.log()
        content = orders.map(
            (order) => (
                <Order 
                productName={order.productName}
                price={order.price}
                quantity={order.quantity}
                subTotal={order.subTotal}
                shippingCost={order.shippingCost}
                grandTotal={order.grandTotal}
                orderDate={order.orderDate}
                customerName={order.customerName}
                email={order.email}
                phone={order.phone}
                 />
            )
        )
    }

    return content
    
}

export default OrderList;