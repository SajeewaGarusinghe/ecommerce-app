import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearProdDetails, setProdDetails } from '../../features/ProductSlice';

const ProductDetails = () => {
  const { prodId } = useParams();

  const dispatch = useDispatch();
  let prodDetails = useSelector((state) => state.products.selectedProdDetails);
  const { image, title, price, category, description } = prodDetails;

  const fetchProductDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    // console.log('data >>>', response.data);
    dispatch(setProdDetails(response.data));
  };

  useEffect(() => {
    if (prodId && prodId !== '') {
      fetchProductDetails(prodId);
    }
    return () => {
      dispatch(clearProdDetails());
    };
  }, []);

  return (
    <div className="ui grid container">
      {Object.keys(prodDetails).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label" href="/">
                    ${price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
