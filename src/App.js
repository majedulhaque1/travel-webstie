import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hotel from './components/Header/Hotel';
import Destination from './components/Destination/Destination';
import TopDestination from './components/TopDestination';
import InterestingStories from './components/InterestingStories';
import OurPartner from './components/OurPartner';
import Review from './components/Review';
import BlogPost from './components/BlogPost';
import Newsletter from './components/Newsletter';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import TravelInfo from './components/Header/TravelInfo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Destination></Destination>
      <TopDestination></TopDestination>
      <InterestingStories></InterestingStories>
      <OurPartner></OurPartner>
      <Review></Review>
      <BlogPost></BlogPost>
      <Newsletter></Newsletter>
      <Gallery></Gallery>
      <Footer></Footer>
      <Routes>
        {/* <Route path='/' element={<TravelInfo></TravelInfo>}>
          <Route path='/hotel' element={<Hotel/>}></Route>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
