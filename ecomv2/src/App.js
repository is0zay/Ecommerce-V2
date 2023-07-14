import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Shop from './pages/Shop';

function App() {
  return (
	<div className='body'>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>

		<Footer />
  	</div>
  );
}

export default App;



