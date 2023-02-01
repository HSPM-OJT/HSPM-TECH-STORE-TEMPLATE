import { useDispatch } from 'react-redux';
import { useState } from 'react';
import classes from './AddProductForm.module.css';
import { addNewProduct } from './productSlice';
import { useNavigate } from 'react-router-dom';

function AddProductForm(){

    const navigate = useNavigate()

    const [productName,setProductName] = useState('')
    const [productCode,setProductCode] = useState('')
    const [quantity,setQuantity] = useState('')
    const [description,setDesciption] = useState('')
    const [image,setImage] = useState('')
    const [expireDate,setExpireDate] = useState('')
    const [price,setPrice] = useState('')

    const [addRequestStatus,setAddRequestStatus] =useState('idle')

    const onProductCodeChange = e => setProductCode(e.target.value)
    const onQuantityChange = e => setQuantity(e.target.value)
    const onDescriptionChange = e => setDesciption(e.target.value)
    const onExpireDateChange = e => setExpireDate(e.target.value)
    const onImageChange = e => setImage(e.target.value)
    const onProductNameChange = e => setProductName(e.target.value)
    const onPriceChange = e => setPrice(e.target.value)

    const canSave =[productCode,productName,price,quantity,image,expireDate,description].every(Boolean) && addRequestStatus === 'idle'

    const dispatch = useDispatch()

    const onSubmit = (event)=>{
        event.preventDefault()

        if(canSave){

       try {
        setAddRequestStatus('pending')
        dispatch(
            addNewProduct({
                productName,
                productCode,
                price,
                quantity,
                expireDate,
                description,
                image
            }

            ),
        ).unwrap();
        navigate('/productlist')
        
       } catch (error) {
         console.log(error)
       }finally{
        setAddRequestStatus('idle')
       }
        

        setImage('')
        setProductName('')
        setPrice('')
        setProductCode('')
        setQuantity('')
        setDesciption('')
        setExpireDate('')
            }
        
    }

    return (
        <div className={`bg-light shadow-sm p-3 mb-5 bg-body rounded ${classes.frame}`}>
        <h2 className="text-center pb-3">Add/Update  Product form</h2>
         <form onSubmit={onSubmit}>
            <div className="row mb-3">
                <div className="col-6">
                    <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        placeholder="Enter productName"
                        value={productName}
                        onChange={onProductNameChange}
                        />
                    
                </div>
                <div className="col-6">
                    <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        placeholder="Enter productCode"
                        value={productCode}
                        onChange={onProductCodeChange}
                        />
                    
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-6">
                    <input 
                        type="number" 
                        className="form-control form-control-lg" 
                        placeholder="Enter price"
                        value={price}
                        onChange={onPriceChange}
                        />
                    
                </div>
                <div className="col-6">
                    <input 
                        type="number" 
                        className="form-control form-control-lg" 
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={onQuantityChange}
                        />
                    
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-6">
                    <input 
                        type="url" 
                        className="form-control form-control-lg" 
                        placeholder="Enter Image"
                        value={image}
                        onChange={onImageChange}
                        />
                    
                </div>
                <div className="col-6">
                    <input 
                        type="date" 
                        className="form-control form-control-lg" 
                        placeholder="Enter expire date"
                        value={expireDate}
                        onChange={onExpireDateChange}
                        />
                    
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <textarea name="" id="50" cols="5" rows="5" 
                        className="form-control form-control-lg"
                        value={description}
                        onChange={onDescriptionChange}
                        />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-6 text-center">
                    <button type="reset" className={`btn btn-danger float-start ${classNamees.button}`}>reset</button>
    
                </div>
                <div className="col-6 text-center">
                    <button type="submit" className={`btn btn-primary float-end ${classes.button}`} disabled={!canSave}>Add product</button>
    
                </div>
    
            </div>
         </form>
        </div>

    )
}

export default AddProductForm