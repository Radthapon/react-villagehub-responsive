import './Home.css'
import  Hero  from '../../components/Hero/Hero'
import  Header  from '../../components/Header/Header'
import Companies from '../../components/Companies/Companies'
import Residencies from '../../components/Residencies/Residencies'
import Value from '../../components/Value/Value'
import Countact from '../../components/Conutact/Countact'
import GetStarted from '../../components/GetStarted/GetStarted'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <div>
      <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Countact/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}
export default Home