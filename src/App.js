import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Frontpage from './components/customerView/frontPage/Frontpage';
import ProductList from './components/customerView/productList/ProductList';
import BuyPage from './components/customerView/buyePage/BuyPage';
import AddToCart from './components/customerView/addToCartPage/AddToCart';
import { useState } from 'react';

export default function App() {
	const [FPCData, setFPCData] = useState();
	const [PPShoptData, setPPShoptData] = useState();
	const [PPChartData, setPPChartData] = useState([]);

	console.log(FPCData);
	const addToChart = (newPPChartData) => {
		setPPChartData([...PPChartData, { ...newPPChartData, quantity: 1 }]);
	}

	const [showChart, setShowChart] = useState(false);


	return (
		<div className='app'>
			<Header counter={PPChartData.length} setShowChart={setShowChart} />
			{
				showChart ? <AddToCart PPChartData={PPChartData} />
					:
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Frontpage setFPCData={setFPCData} />} />
							<Route path='/productList' element={<ProductList FPCData={FPCData} addToChart={addToChart} setPPShoptData={setPPShoptData} />} />
							<Route path='/buyPage' element={<BuyPage FPCData={FPCData} PPShoptData={PPShoptData} />} />
						</Routes>
					</BrowserRouter>
			}
		</div>
	)
}
