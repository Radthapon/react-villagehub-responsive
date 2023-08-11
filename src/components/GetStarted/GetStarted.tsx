import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="flexCenter paddings innerWidth g-container">
          <a id="strated"></a>
            <div className="innerWidth inner-container">
            <div className="flexColCenter">
            <div className="flexColCenter get-title">
                <h1 className="title">Get started with Homyz</h1>
                <span className='secondaryText'>Subscribe and find super attractive price quotes from us.
                     <br />Find your residence soon </span>
            </div>
            <div className="get-button">
                <button className='button'>Get Started</button>
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default GetStarted