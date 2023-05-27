import './AddToCart.css'
import Data from '../../../DATA.js'
import { useEffect, useState } from 'react'
export default function AddToCart({ PPChartData }) {

	const [cart, setCart] = useState([]);

	useEffect(()=>{
		setCart(PPChartData)
	},[PPChartData])

	return (
		<div className='AddToCartPage pages'>
			<div className='chart_area'>
				{
					cart.map((cartItem, cartIndex) => {
						return (
							<div className='chart'>
								<div className='leftArea'>
									<img src={cartItem.product_img}></img>
									<h2>{cartItem.name}</h2>
								</div>
								<div className='rightArea'>
									<h3>Rs. {cartItem.price}.00</h3>
									<button className='increase_value' onClick={() => {
										const CART = cart.map((item, indx)=>{
											return(cartIndex === indx ? {...item, quantity : item.quantity + 1} : item)
										})
										setCart(CART);
									}}>+</button>
									<h3>{cartItem.quantity}</h3>
									<button className='decrease_value' onClick={() => {
										const CART = cart.map((item, indx)=>{
											return(cartIndex === indx ? {...item, quantity : item.quantity > 1 ? item.quantity - 1 : 1} : item)
										})
										setCart(CART);
									}}>-</button>
									<h3>Rs. {cartItem.price * cartItem.quantity}.00</h3>
									<button className='deleteChart' onClick={() => {
										const newChart = cart.filter((i) => i.id !== cartItem.id);
										setCart(newChart);
									}}>DEL</button>
								</div>
							</div>
						)
					})
				}
			</div>
			<div className='summeyAreay'>
				<h1>Order Summery</h1>
				<hr></hr>
				<h2>Total Items<span>{cart.length}</span></h2>
				<h2>Total Price<span>
									{
										cart.map(item => item.price * item.quantity).reduce((total, value) => total += value, 0)
									}
								</span>
				</h2>
				<hr></hr>
				<button>Buy Now</button>
			</div>
		</div>
	)
}
