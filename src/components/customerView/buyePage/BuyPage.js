import Data from "../../../DATA"

export default function BuyPage({ FPCData, PPShoptData }) {
    return (
        <div className="buyPage pages">
            <div className="buyPageImageSection">
                <div className="leftSection">
                    <img src={FPCData.productList[2].product_img}></img>
                    <img src={FPCData.productList[2].product_img}></img>
                    <img src={FPCData.productList[2].product_img}></img>
                </div>
                <div className="rightSection">
                    <img src={FPCData.productList[2].product_img}></img>
                </div>
            </div>
            <div className="buyPageshopSection">
                <h1>{FPCData.productList[PPShoptData].name}</h1>
                <h1>{FPCData.productList[PPShoptData].price}</h1>
                <button className="pageCardButton">Shop Now</button>
                <button className="pageCardButton">Add to chart</button>
            </div>
        </div>
    )
}
