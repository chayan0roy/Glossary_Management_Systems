import { Link } from "react-router-dom";
import Data from "../../../DATA";
import { useState } from "react"

export default function ProductList({ FPCData, addToChart, setPPShoptData }) {
	return (
		<div className='productList pages'>
			<div className='cardList'>
				{
					FPCData.productList.map((PLData, indx) => {
						return (
							<div className='pageCard'>
								<div className='pageCardImageArea'>
									<img src={PLData.product_img} alt='' />
								</div>
								<div className='text_and_btn_area'>
									<div className='pageCardTextArea'>
										<h1>{PLData.name}</h1>
										<h2>{PLData.price}</h2>
									</div>
									<div className='pageCardBtnArea'>
										<button className="pageCardButton" onClick={() => addToChart(PLData)}>Add To Chart</button>
										<Link className="pageCardButton" onClick={() => setPPShoptData(indx)} to={PLData.pageLink}>Buy</Link>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}






