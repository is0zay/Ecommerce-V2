import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';
import './Shop.css';
import SortProducts from '../components/SortProduct';
import { Link } from 'react-router-dom';


const Shop = () => {

	const [filterIsActive, setIsActive] = useState(false);

  const handleFilterClick = () => {
    setIsActive(!filterIsActive);
  };
	

	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [filterOptions, setFilterOptions] = useState({
	  tops: false,
	  bottoms: false,
	  accessories: false,
	  priceMin: '',
	  priceMax: ''
	});
	const [sortOption, setSortOption] = useState('');
  
	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const response = await axios.get('http://localhost:3001/api/products'); 
		  setProducts(response.data);
		} catch (error) {
		  console.error(error);
		}
	  };
  
	  fetchData();
	}, []);
  
	useEffect(() => {
	  const applyFilters = () => {
		let filtered = products;
  
		const selectedFilters = Object.entries(filterOptions)
		  .filter(([key, value]) => value && key !== 'priceMin' && key !== 'priceMax')
		  .map(([key]) => key);
  
		if (selectedFilters.length > 0) {
		  filtered = filtered.filter(product =>
			selectedFilters.includes(product.category)
		  );
		}
  
		const { priceMin, priceMax } = filterOptions;
		if (priceMin !== '' && priceMax !== '') {
		  filtered = filtered.filter(product =>
			product.price >= parseFloat(priceMin) && product.price <= parseFloat(priceMax)
		  );
		}
  
		setFilteredProducts(filtered);
	  };
  
	  applyFilters();
	}, [filterOptions, products]);
  
	useEffect(() => {
	  const sortProducts = () => {
		let sorted = [...filteredProducts];
  
		if (sortOption === 'lowToHigh') {
		  sorted.sort((a, b) => a.price - b.price);
		} else if (sortOption === 'highToLow') {
		  sorted.sort((a, b) => b.price - a.price);
		}
  
		setFilteredProducts(sorted);
	  };
  
	  sortProducts();
	}, [sortOption]);
  
	const handleFilterChange = event => {
	  const { name, value, type, checked } = event.target;
	  const newValue = type === 'checkbox' ? checked : value;
  
	  setFilterOptions(prevOptions => ({
		...prevOptions,
		[name]: newValue
	  }));
	};
  
	const handleSortChange = event => {
	  setSortOption(event.target.value);
	};
  

	return (
		<div>
			<Nav />
			<div className='index-main-shop'>
				<div className='filterSection'>
					<h2 className='filter-h2' onClick={handleFilterClick}>Filter Products</h2>
					<div  className={`${filterIsActive ? 'filter-hide' : 'filter-show'}`}>
					<div>
						<label className="filter-label">
						<input
							type="checkbox"
							name="tops"
							checked={filterOptions.tops}
							onChange={handleFilterChange}
							className="filterInput-check" />
						Tops
						</label>
					</div>
				
					<div>
						<label className="filter-label">
						<input
							type="checkbox"
							name="bottoms"
							checked={filterOptions.bottoms}
							onChange={handleFilterChange}
							className="filterInput-check"
						/>
						Bottoms
						</label>
					</div>

					<div>
						<label className="filter-label">
						<input
							type="checkbox"
							name="accessories"
							checked={filterOptions.accessories}
							onChange={handleFilterChange}
							className="filterInput-check"
						/>
						Accessories
						</label>
					</div>
					<div>
						<label className="filter-label">
						Price Min:
						<input
							type="number"
							name="priceMin"
							value={filterOptions.priceMin}
							onChange={handleFilterChange}
							className="filterPrice"
						/>
						</label>
					</div>
					<div>
						<label className="filter-label">
						Price Max:
						<input
							type="number"
							name="priceMax"
							value={filterOptions.priceMax}
							onChange={handleFilterChange}
							className="filterPrice"
						/>
						</label>
					</div>

					<div className='sortSection'>
					<SortProducts sortHandler={handleSortChange}  sortOption={sortOption}/>
					</div>
					
				</div>
				
				</div>
			
		
				<div className='shop-grid' id='shopGrid'>
					{filteredProducts.map(product => (
							<div className='shop-tile' id='shopTile' key={product.id} >
								<Link to={`/shop/${product.id}`}>	
								<img src={product.image} className="productImg" alt={product.description}></img>
								<h2 className='shop-h2'>{product.name}</h2>
								<p className='shop-description'>{product.description}</p>
								<h2 className='shop-h2'>${product.price}</h2>
								</Link>	 
							</div>
						
					))}
				</div>
				
			</div>
			
		</div>
  );
};


export default Shop;




