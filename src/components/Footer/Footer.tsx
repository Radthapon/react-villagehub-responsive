import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="flexCenter paddings innerWidth f-container">
            
            <div className="flexColCenter left-footer">
                <div className="logo-footer">
                    <div/>
                    <h1>VILLAGEHUB</h1>
                </div>
                <div className="flexColCenter left-text">
                <span className='secondaryText'>Our vision is to make all people <br/>
                the best place to live for them.</span>
                </div>
            </div>

            <div className="flexColCenter rigth-footer">
                <div className="flexColCenter right-text">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>145 New York, FL 5467, USA</span>
                </div>
                <div className="flexCenter link-footer">
                    <a href="" className='orangeText'>Property</a>
                    <a href="" className='orangeText'>Services</a>
                    <a href="" className='orangeText'>Product</a>
                    <a href="" className='orangeText'>About Us</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer