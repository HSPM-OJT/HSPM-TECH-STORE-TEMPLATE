import Product from "./Product";
import { useSelector,useDispatch } from "react-redux";
import { selectAllProduct,getProductError,getProductStatus, fetchProducts } from "./productSlice";
import { useEffect } from "react";
import { getToken } from "../auth/authSlice";
function ProductList() {
    const dispatch = useDispatch()
    const token = useSelector(getToken)
    const products = useSelector(selectAllProduct )
    const productStatus = useSelector(getProductStatus)
    const error = useSelector(getProductError)

    useEffect(()=>{
        if(productStatus === 'idle'){
            if(token){
            dispatch(fetchProducts(token))
            }else{
                console.log('Invalid Token')
            }
        }
    },[productStatus,dispatch,token])

    let content 

    if(productStatus === 'loading'){
        content = (<p>loading...</p>)
    }

    if(productStatus === 'succeed'){
        content = products.map(
            (product)=>(
                    <Product 
                        image={product.image}
                        productName={product.productName}
                        price={product.price}
                    />
                    
                )
            
        )
    }
    
    if(productStatus === 'failed'){
        content = (<p>{error}</p>)
    }

    return content

}

export default ProductList;