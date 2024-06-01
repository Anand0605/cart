import React from 'react'
import { Products } from '../data'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart, selectCartItem} from '../redux/cartSlice'

const Product = () => {
    const dispatch = useDispatch()
    const cartItem = useSelector(selectCartItem)
    console.log("Cart Item =",cartItem)

const handleAddToCart =(item)=>{
dispatch(addToCart(item))
}

  return (
    <div className="container">
        <div className="row">
            {
                Products.map((item)=>(
                    <div key={item.id} className="container col-md-4 my-4">
                        <div className="card bg-dark"  style={{width:"18rem"}}>
                            <div className='p-4 d-flex justify-content-center align-items-center'><img src={item.imgSrc} className="card-img-top " alt="..." style={{width:"200px",height:"200px", borderRadius:"10px"}}/></div>
  
  <div className="card-body text-light text-center">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <div className="btn btn-primary mx-3">{item.price} ₹</div>
    <button className="btn btn-warning" onClick={()=>handleAddToCart(item)}> Add to cart</button>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Product