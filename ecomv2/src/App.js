import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Product from './pages/Product';
import { CartProvider } from './components/Cart';



function App() {
  return (
	<div className='body'>
		<CartProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="shop" element={<Shop />} />
					<Route path="contact" element={<Contact />} />
					<Route path="/shop/:id" element={<Product />} />
					
				</Routes>
			</BrowserRouter>
		</CartProvider>
		<Footer />
  	</div>
  );
}

export default App;

// Use BrowserRouter to set up the file paths used in the navbar
// Future plan to use CartProvider component to store information to the cart



