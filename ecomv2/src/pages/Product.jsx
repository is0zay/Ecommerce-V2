import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

 Product = () => {
	const [product, setProduct] = useState(null);
	const { id } = useParams();
  
	useEffect(() => {
	  const fetchProduct = async () => {
		try {
		  const response = await axios.get(`/api/products/${id}`); // Replace with your API endpoint
		  setProduct(response.data);
		} catch (error) {
		  console.error(error);
		}
	  };
  
	  fetchProduct();
	}, [id]);
  
	if (!product) {
	  return <div>Loading...</div>;
	}

	return ( 
		<div>
			<div className="product-two">
				<div className="product-left">
					<img src={product.image} alt="product image"/>
				</div>
				<div className="product-right">
					<h1 className="product-h1">{product.name}</h1>
					<h2 className='product-h2'>${product.price}</h2>
					
				</div>
			</div>
		</div>
	 );
}

export default Product;
