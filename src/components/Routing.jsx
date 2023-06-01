
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Tweets from '../pages/Tweets';


function Routing() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        
      </Routes>
    );
  }
  
  export default Routing;