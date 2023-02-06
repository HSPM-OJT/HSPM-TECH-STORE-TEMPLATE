import Card from "../../ui/Card"
import { Link } from "react-router-dom"
function Category(){

    return (
        
        <div className="col-md-3">
        <Card>
            <div href="#" className="card card-product-grid">
                     <Link to='/product/list' className="img-wrap"> <img src="assets/images/items/1.jpg" alt="1" /> </Link>
                     <figcaption className="info-wrap">
                       
                     </figcaption>
                     <div className="text-center bg-primary p-2">Apple</div> 
            </div>
        </Card>
        </div>
    )

}

export default Category