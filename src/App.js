import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import DisabilityInfo from './views/DisabilityInfo';
import FindService from './views/FindService';
import SearchResults from './views/SearchResults';
import EssentialDocs from './views/EssentialDocs';
import Resources from './views/Resources';

const App = () => {
  return (
    <div className='h-screen'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/disability-info' element={<DisabilityInfo />}></Route>
        <Route path='/service' element={<FindService />}></Route>
        <Route path='/search-results' element={<SearchResults />}></Route>
        <Route path='/docs' element={<EssentialDocs />}></Route>
        <Route path='/resources' element={<Resources />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
