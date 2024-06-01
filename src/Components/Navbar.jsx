import React from 'react'

const Navbar = () => {
  return (
    <div className="nav_bar sticky-top">
        <div className="left"><h4>Redux-Toolkit</h4></div>
        <div className="middle">
            <button className="btn btn-warning"><h5>Cart Item Total price = 0</h5></button>
        </div>
        <div className="right"><button type="button" class="btn btn-primary position-relative">
        <span class="material-symbols-outlined">
shopping_cart
</span>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0
    <span class="visually-hidden">unread messages</span>
  </span>
</button></div>

    </div>
  )
}

export default Navbar