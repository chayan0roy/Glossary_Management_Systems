import FPBData from "./FrontpageBannerData"

export default function FrontpageBanner() {
  return (
    <div className='frontpageBanner'>
        <img src={FPBData[0]}></img>
    </div>
  )
}
