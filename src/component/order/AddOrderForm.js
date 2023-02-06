import { useDispatch} from "react-redux";
import { useState } from "react";
import { addNewOrder} from "./orderSlice";
import { useNavigate } from "react-router-dom";

function AddOrderForm(){

    const navigate = useNavigate()

    const [productName,setProductName] = useState('')
    const [price,setPrice] = useState('')
    const [quantity,setQuantity] = useState('')
    const [shippingCost,setShippingCost] = useState('')
    const [customerName,setCustomerName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [street,setStreet] = useState('')
    const [township,setTownship] = useState('')
    const [city,setCity] = useState('')
    const [country,setCountry] = useState('')

    const [addRequestStatus,setAddRequestStatus] = useState('idle')

    const onProductNameChange = e => setProductName(e.target.value)
    const onPriceChange = e => setPrice(e.target.value)
    const onQuantityChange = e => setQuantity(e.target.value)
    
    const onShippingCostChange = e => setShippingCost(e.target.value)
   
    const onCustomerNameChange = e => setCustomerName(e.target.value)
    const onEmailChange = e => setEmail(e.target.value)
    const onPhoneChange = e => setPhone(e.target.value)
    const onStreetChange = e => setStreet(e.target.value)
    const onTownshipChange = e => setTownship(e.target.value)
    const onCityChange = e => setCity(e.target.value)
    const onCountryChange = e => setCountry(e.target.value)

    const canCreate = [productName,price,quantity,shippingCost,customerName,email,phone,street,township,city,country].every(Boolean) && addRequestStatus === 'idle'
    // console.log(canCreate)

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault()

        if(canCreate){
            try{
                setAddRequestStatus('pending')

                dispatch(
                    addNewOrder({
                        order:{
                            productName,
                            price,
                            quantity,
                            shippingCost,
                            customerName,
                            email,
                            phone,
                            street,
                            township,
                            city,
                            country
                        }
                    }),
                ).unwrap()
                navigate('/')
            }catch(error){
                console.log(error)
            }finally{
                setAddRequestStatus('idle')
            }

            setCustomerName('')
            setEmail('')
            setPhone('')
            setStreet('')
            setTownship('')
            setCity('')
            
        }
    }

    return(
        <main>
            <div className="container">
            <div className="row">
            
            <div className="col-md-7 order-md-1">
                <h4 className="mb-3 text-center">Billing detail</h4>
                <form onSubmit={onSubmit} >
                <input type='hidden' value="Dell inspiron 5" onChange={onProductNameChange}></input>
                <input type='hidden' value='2000000' onChange={onPriceChange}></input>
                <input type='hidden' value='2' onChange={onQuantityChange}></input>
                <input type='hidden' value='3000' onChange={onShippingCostChange} ></input>
                <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="customerName">Customer name</label>
                    <input type="text" className="form-control" required 
                    value={customerName} 
                    onChange={onCustomerNameChange}
                    ></input>
                    
                </div>
                </div>

                <div className="mb-3">
                <label htmlFor="username">Email</label>
                <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                </div>
                <input type="email" class="form-control" id="email" placeholder="Email" required 
                value={email}
                onChange={onEmailChange}
                ></input>
                <div class="invalid-feedback">
                Your email is required.
                </div>
                </div>
                </div>
                
                <div className="mb-3">
                <label htmlFor="address">Phone</label>
                <input type="text" class="form-control" placeholder="09*********" required 
                value={phone}
                onChange={onPhoneChange}
                ></input>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                <label htmlFor="country">Street</label>
                    {/* <select class="" id="street" required>
                        <option value="">Choose...</option>
                        <option>Mynamar</option>
                    </select> */}
                    <input className="d-block w-100 form-control" type="text" required 
                    value={street}
                    onChange={onStreetChange}
                    ></input>
                
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="state">Township</label>
                    <input className="d-block w-100 form-control" type="text" required 
                    value={township}
                    onChange={onTownshipChange}
                    ></input>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                <label htmlFor="country">City</label>
                    <select class="custom-select d-block w-100 form-control" id="country" required 
                    value={city} 
                    onChange={onCityChange}
                    >
                        <option value="">Choose...</option>
                        <option>Yangon</option>
                        <option>Mandalay</option>
                        <option>Naypyitaw</option>
                        <option>Others</option>
                    </select>
                <div class="invalid-feedback">
                    Please select a valid City.
                </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="state">Country</label>
                    <input className="d-block w-100 form-control" type="text" value="Myanmar" disabled
                    onChange={onCountryChange}
                    ></input>
                </div>
                </div>
                 
                <button className="btn btn-primary" type="submit" >Continue to checkout</button>

                </form>
                
            </div>
            </div>
            </div>
        </main>
    )
}

export default AddOrderForm;