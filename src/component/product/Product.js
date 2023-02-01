import { Link } from "react-router-dom";
import Card from "../../ui/Card";

function Product(props) {
    
    return(
            <div className="col-md-3 mt-3 mb-3">
            <Card>
            <div className="card card-body">
            <Link to='/productlist' className="img-wrap"> <img src={props.image} alt="image" /> </Link>
            <figcaption className="info-wrap">
            <h3 class="fw-bold text-center text-uppercase">{props.productName}</h3>
            <h5 class="fst-italic text-center font-monospace">{props.price} MMK</h5>             
            </figcaption>
            </div>
            </Card>
            </div>
    )
}

export default Product;