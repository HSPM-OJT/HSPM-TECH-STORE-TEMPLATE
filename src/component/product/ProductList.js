import Product from "./Product";
import { useSelector,useDispatch } from "react-redux";
import { selectAllProduct,getProductError,getProductStatus, fetchProducts } from "./productSlice";
import { useEffect } from "react";

function ProductList() {

    const dispatch = useDispatch()
    const products = useSelector(selectAllProduct )
    const ProductStatus = useSelector(getProductStatus)
    const error = useSelector(getProductError)

    useEffect(()=>{
        if(ProductStatus == 'idle'){
            dispatch(fetchProducts())
        }
    },[ProductStatus,dispatch])

    let content 

    if(ProductStatus === 'loading'){
        content = (<p>loading...</p>)
    }

    if(ProductStatus === 'succeed'){
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
    
    if(ProductStatus === 'failed'){
        content = (<p>{error}</p>)
    }

    return content

}

export default ProductList;