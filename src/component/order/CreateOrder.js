function Order() {
    
    return(
        <main>
            <div className="container">
            <div className="row">
                
            <div className="col-md-5 order-md-2">
            <h4 className="mb-3 text-center">Shipping address</h4>
            <form className="needs-validation" noValidate>
                <div className="row">
                <div className="col mb-3">
                <label htmlFor="country">Street</label>
                    <input className="d-block w-100 form-control" type="text" required></input>
                </div>
                </div>
                <div className="row">
                <div className="col mb-3">
                    <label htmlFor="state">Township</label>
                    <input className="d-block w-100 form-control" type="text" required></input>
                </div>
                </div>
                
                <div className="row">
                <div className="col mb-3">
                <label htmlFor="country">City</label>
                    <select class="custom-select d-block w-100 form-control" id="country" required>
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
                </div>
                <div className="row">
                <div className="col mb-3">
                    <label htmlFor="state">Country</label>
                    <input className="d-block w-100 form-control" type="text" value="Myanmar" disabled></input>
                </div>
                </div>
                </form>
            </div>
            <div className="col-md-7 order-md-1">
                <h4 className="mb-3 text-center">Billing detail</h4>
                <form className="needs-validation" noValidate>
                <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required></input>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                <label htmlFor="lastname">Last name</label>
                <input type='text' className="form-control" id="lastName" placeholder="" value="" required></input>
                <div className="invalid-feedback">
                    Valid last name is required.
                </div>
                </div>
                </div>

                <div className="mb-3">
                <label htmlFor="username">Email</label>
                <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                </div>
                <input type="email" class="form-control" id="email" placeholder="Email" required></input>
                <div class="invalid-feedback">
                Your email is required.
                </div>
                </div>
                </div>
                
                <div className="mb-3">
                <label htmlFor="address">Phone</label>
                <input type="text" class="form-control" id="address" placeholder="09*********" required></input>
                <div class="invalid-feedback">
                    Please enter your Phone number.
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                <label htmlFor="country">Street</label>
                    {/* <select class="" id="street" required>
                        <option value="">Choose...</option>
                        <option>Mynamar</option>
                    </select> */}
                    <input className="d-block w-100 form-control" type="text" required></input>
                
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="state">Township</label>
                    <input className="d-block w-100 form-control" type="text" required></input>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                <label htmlFor="country">City</label>
                    <select class="custom-select d-block w-100 form-control" id="country" required>
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
                    <input className="d-block w-100 form-control" type="text" value="Myanmar" disabled></input>
                </div>
                {/* <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
               <input type="text" class="form-control" id="zip" placeholder="" required></input>
               <div class="invalid-feedback">
                 Zip code required.
                </div>
                </div> */}
                </div>
                {/* <hr class="mb-4" />
                    <div className="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="same-address"></input>
                    <label class="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="save-info"></input>
                    <label class="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                    </div>
                 */}
                <hr class="mb-4" />
                <h4 class="mb-3">Payment</h4>
                <div class="d-block my-3">
                <div className="custom-control custom-radio d-inline me-5">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                <label class="custom-control-label ps-2" htmlFor="credit"> Credit card</label>
                </div>
                <div className="custom-control custom-radio d-inline me-5">
                <input id="visa" name="paymentMethod" type="radio" class="custom-control-input" required></input>
                <label class="custom-control-label ps-2" htmlFor="visa"> Visa card</label>
                </div>
                <div className="custom-control custom-radio d-inline me-5">
                <input id="mpu" name="paymentMethod" type="radio" class="custom-control-input" required></input>
                <label class="custom-control-label ps-2" htmlFor="mpu"> MPU</label>
                </div>
                <div></div>
               <br />
                <div className="custom-control custom-radio d-inline me-5">
                <input id="master" name="paymentMethod" type="radio" class="custom-control-input" required></input>
                <label class="custom-control-label ps-2" htmlFor="master">Master card</label>
                </div>
                <div className="custom-control custom-radio d-inline me-5">
                <input id="jcb" name="paymentMethod" type="radio" class="custom-control-input" required></input>
                <label class="custom-control-label ps-2" htmlFor="jcb"> JCB card</label>
                </div>
                <div className="custom-control custom-radio d-inline me-5">
                <input id="upi" name="paymentMethod" type="radio" class="custom-control-input" required></input>
                <label class="custom-control-label ps-2" htmlFor="upi"> UPI card</label>
                </div>
                </div>
                {/* </hr> */}
                <div className="row">
                <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required></input>
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                 Name on card is required
                </div>
                </div>
                <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required></input>
                <div className="invalid-feedback">
                Credit card number is required
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required></input>
                <div className="invalid-feedback">
                Expiration date required
                </div>
                </div>
                <div className="col-md-7 mb-3">
                <label htmlFor="cc-cvv">CVC</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required></input>
                <div className="invalid-feedback">
                Security code required
                </div>
                </div>
                </div>
                <hr className="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            
                </form>
            </div>
            </div>
            </div>
        </main>
    )

}
export default Order;