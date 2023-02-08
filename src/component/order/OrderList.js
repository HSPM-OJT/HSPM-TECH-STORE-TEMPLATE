import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import Order from "./Order";
import { selectAllOrders,getOrderStatus, fetchOrders } from "./orderSlice";
import { getToken } from "../auth/authSlice";
function OrderList() {

    const dispatch = useDispatch()
    const token = useSelector(getToken)
    const orders = useSelector(selectAllOrders)
    const orderStatus = useSelector(getOrderStatus)

    useEffect(() => {
        if(orderStatus === 'idle'){
            if(token){
            dispatch(fetchOrders(token))
            }else{
                console.log('Invalid Token')
            }
        }
    },[orderStatus,dispatch,token])

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