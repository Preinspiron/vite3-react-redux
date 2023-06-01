
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Tweets from '../pages/Tweets';


function Routing() {
    return (
      <Routes>
      <Route path="/"> 
        <Route index element={<Home />} />
        <Route path="/t" element={<Tweets />} />
      </Route>
        
        
      </Routes>
    );
  }
  
  export default Routing;