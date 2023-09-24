import React from "react";
import { Link } from "react-router-dom";
import { setProductsInCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import Tooltip from '@mui/material/Tooltip';
import "../styles/components/ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <Tooltip title={product.brand + ' ' + product.model + ' ' + product.createdAt.slice(0, 10)} placement="top">
          <div className="image-box">
            {" "}
            <img
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="product-price">${product.price}</div>
          <div className="product-name">{product.name}</div>
        </Tooltip>
      </Link>
      <div className="product-add-button-box">
        <button onClick={() => dispatch(setProductsInCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
