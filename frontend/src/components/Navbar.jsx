import React from "react"
import { AiOutlineUser, AiOutlineWallet } from "react-icons/ai"
import { Link } from "react-router-dom"
import { ACCOUNT_BALANCE, CURRENCY, USER_NAME, USER_SURNAME } from "../constants"
import { useDispatch, useSelector } from "react-redux"
import '../styles/components/Navbar.css'
import { setSearchQuery } from "../redux/actions/productActions"

const Navbar = () => {
  const dispatch = useDispatch()
  const searchQuery = useSelector((state) => state.products.searchQuery)

  return (
    <nav className="navbar">
      <div className="content">
        <Link to="/">
          <h2 className="logo-title">Ecommerce</h2>
        </Link>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          onBlur={() => dispatch(setSearchQuery(""))}
        />
      </div>
      <div className="content">
        <div className="user-info">
          <AiOutlineWallet className="icon" />{ACCOUNT_BALANCE} {CURRENCY}
        </div>
        <div className="user-info" >
          <AiOutlineUser className="icon" />
          {USER_NAME} {USER_SURNAME}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
