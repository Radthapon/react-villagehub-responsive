
import './Countact.css'
import {IoIosCall} from 'react-icons/io'
import {BsChatFill} from 'react-icons/bs'
import {BsChatRightDotsFill} from 'react-icons/bs'

const Countact = () => {
    const imageUrl = "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <section className="u-wrapper">
        <div className="flexCenter paddings innerWidth u-container">
            <a id="contact"></a>
            <div className=" flexCenter left-side">
                <div className="flexColStart contact-title">
                    <span className="orangeText">Our Contact Us</span>
                    <span className="primaryText">Easy to contact us</span>
                    <span className="secondaryText">We always ready to help by providijng the best services for you. We beleive a good 
                        <br/>blace to live can make your life better</span>
                </div>

                <div className="flexColStart contact-cards">

                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart text">
                            <div className="flexCenter icon">
                                <IoIosCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText '>Call</span>
                                <span className='secondaryText'>021 123 123 12</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Call Now
                        </div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart text">
                            <div className="flexCenter icon">
                                <BsChatFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText '>Chat</span>
                                <span className='secondaryText'>021 123 123 12</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Call Now
                        </div>
                    </div>    
                </div>


                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart text">
                            <div className="flexCenter icon">
                                <BsChatFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText '>Video Call</span>
                                <span className='secondaryText'>021 123 123 12</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Call Now
                        </div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart text">
                            <div className="flexCenter icon">
                                <BsChatRightDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText '>Message</span>
                                <span className='secondaryText'>021 123 123 12</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Call Now
                        </div>
                    </div>    
                </div>

                </div>
            </div>

            <div className="flexCenter right-side">
                <div className="vimage-container">
                    <img src={imageUrl}/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Countact