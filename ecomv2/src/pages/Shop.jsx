import { React, useState, useEffect } from 'react';
import Nav from '../components/Nav';

const Shop = () => {
	// const [data, setData] = useState([]);

	// useEffect(() => {
	//   const fetchData = async () => {
	// 	try {
	// 	  const response = await fetch('/api/data');
	// 	  const jsonData = await response.json();
	// 	  setData(jsonData);
	// 	} catch (error) {
	// 	  console.log(error);
	// 	}
	//   };
  
	//   fetchData();
	// }, []);
  
	return (
	  <div>
		<Nav />
		<h2>Data from SQL Server:</h2>
		
	  </div>
	);

}

export default Shop
