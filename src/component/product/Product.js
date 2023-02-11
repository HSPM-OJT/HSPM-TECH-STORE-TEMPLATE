import { Link } from "react-router-dom";
import Card from "../../ui/Card";
import ConfirmModal from "../utility/ConfirmModal";
import Backdrop from "../utility/Backdrop";
import { getToken } from "../auth/authSlice";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { deleteProducts } from "./productSlice";
function Product(props) {
    const token = useSelector(getToken)

    const [isModalOpen,setModalOpen] = useState(false)
    const dispatch = useDispatch();

    function deleteHandler(){
        setModalOpen(true);
    }

    function backdropHandler(){
        setModalOpen(false);
    }

    function cancelHandler(){
        setModalOpen(false);
    }

    function confirmHandler(){
        dispatch(deleteProducts({id:props.id,token})).unwrap()

        setModalOpen(false)
    }

    return(
            <div className="col-md-3 mt-3 mb-3">
            <Card>
            <div className="card card-body">

            <Link to='/productlist' className="img-wrap"> <img src={props.image} alt="image" /> </Link>
            <figcaption className="info-wrap">
            <h3 class="fw-bold text-center text-uppercase">{props.productName}</h3>
            <h5 class="fst-italic text-center font-monospace">{props.price} MMK</h5>

            <Link to={`/product/editProduct/${props.id}`}>
            <div class="d-grid gap-2">
                    <button className="btn btn-primary">Update</button> 
            </div>
            </Link>
            
            <div class="d-grid gap-2">
                <button className="btn btn-danger" onClick={deleteHandler}>Delete</button> 
            </div>
            {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler}/>}
            {isModalOpen && <Backdrop onBackdrop={backdropHandler}/>}           
            </figcaption>

            </div>
            </Card>
            </div>
    )
}

export default Product;