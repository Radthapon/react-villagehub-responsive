
import './Companies.css'

const Companies = () => {
    const companiesImgUrl = {
            ikea:"https://1000logos.net/wp-content/uploads/2017/02/IKEA-Logo.png",
            thaiwat:"https://www.bticino.co.th/wp-content/uploads/2017/06/thaiwatsadu-logo-1.png",
            homepro:"https://www.maxwell.co.th/wp-content/uploads/2019/06/home-pro-logo-01.png",
            sbimg:"https://awards.brandingforum.org/wp-content/uploads/2016/05/SB-Design-Square-Logo-1024x576.jpg",
        }
    
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <img src={companiesImgUrl.ikea} />
            <img src={companiesImgUrl.thaiwat} />
            <img src={companiesImgUrl.homepro} />
            <img src={companiesImgUrl.sbimg} />
        </div>
    </section>
  )
}

export default Companies