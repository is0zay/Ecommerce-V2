import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from '../components/Cart';
import './Product.css';
import Nav from '../components/Nav';

const Product = () => {
	const [product, setProduct] = useState(null);
	const { id } = useParams();


		useEffect(() => {
		const fetchProduct = async () => {
			try {
			const response = await axios.get(`http://localhost:3001/api/products/${id}`); // Replace with your API endpoint
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
				<Nav />
				<div className="product-two">
					<div className="product-left">
						<img src={product[0].image} alt="product image" className='prodImg'/>
					</div>
					<div className="product-right">
						<h1 className="productH1">{product[0].name}</h1>
						<h2 className='product-h2'>${product[0].price}</h2>
						<p className='product-p'>{product[0].description}</p>

					</div>
				</div>
			</div>
		);
	
}

export default Product;
