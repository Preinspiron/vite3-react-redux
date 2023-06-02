
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Tweets from '../pages/Tweets';
import Layout from '../components/Layout';
import { useGetUsersQuery } from '@/api/store';



function Routing() {
  const {data}  = useGetUsersQuery()
  console.log(data);

    return (
      <Routes>
      <Route path="/" element={<Layout/>}> 
        <Route index element={<Home />} />
        <Route path="t" element={<Tweets />} />
      </Route>
        
        
      </Routes>
    );
  }
  
  export default Routing;