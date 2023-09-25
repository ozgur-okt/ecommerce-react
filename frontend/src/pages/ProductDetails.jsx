import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { setProductsInCart } from "../redux/actions/cartActions"
import Cart from "../components/Cart"
import "../styles/pages/ProductDetails.css"


const ProductDetails = () => {
  const dispatch = useDispatch()
  const { productId } = useParams() 
  const products = useSelector((state) => state.products.products) || []
  const oneProduct = products.find((product) => product.id === productId) || null

  const [readMore, setReadMore] = useState(false)

  if (!oneProduct) {
    return <div> Loading... </div>
  }

  return (
    <div className="pd ">
      <div className="pd-content ">
        <div className="image-box">
          <img
            src={oneProduct?.image}
            alt={oneProduct?.name}
          />
        </div>
        <div className="pd-info">
          <h2>{oneProduct?.name}</h2>
          <p className="pd-price ">${oneProduct?.price}</p>
          <button onClick={() => dispatch(setProductsInCart(oneProduct))}>
            Add To Cart
          </button>
          {readMore ?
            <>
              <p className="pd-description">{oneProduct?.description}</p>
              <p className="text-amount" onClick={() => setReadMore(false)}> Show less </p>
            </>
            :
            <>
              <p className="pd-description">{oneProduct?.description.slice(0, 200) + '...'} </p>
              <p className="text-amount" onClick={() => setReadMore(true)}> Read more </p>
            </>
          }
        </div>
      </div>
      <div className="pd-cart ">
        <Cart />
      </div>
    </div>
  )
}

export default ProductDetails
