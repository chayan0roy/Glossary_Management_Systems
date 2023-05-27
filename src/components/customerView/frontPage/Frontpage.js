import FrontpageBanner from "./FrontpageBanner"
import { Link } from "react-router-dom";
import Data from "../../../DATA"
import { useState } from "react"

export default function Frontpage({ setFPCData }) {

	return (
		<div className='frontpage pages'>
			<FrontpageBanner />
			<div className='cardList'>
				{
					Data.map((FPData) => {
						return (
							<div className='pageCard'>
								<div className='pageCardImageArea'>
									<img src={FPData.Catagory_img} alt='' />
								</div>
								<div className='text_and_btn_area'>
									<h1>{FPData.Catagory}</h1>
									<Link className="pageCardButton" onClick={() => setFPCData(FPData)} to={FPData.pageLink}>Shop Now</Link>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}