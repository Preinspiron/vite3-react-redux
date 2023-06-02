
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Tweets from '../pages/Tweets';
import Layout from '../components/Layout';
import { useGetUsersQuery, usePutUserMutation } from '@/api/store';




function Routing() {
  const {data, isFetching}  = useGetUsersQuery()
  console.log(data);
  console.log(isFetching);
// const [putUser, {}]  = usePutUserMutation()
// console.log(usePutUserMutation);
// console.log(putUser(1));


    return (
      <Routes>
      <Route path="/" element={<Layout/>}> 
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
        
        
      </Routes>
    );
  }
  
  export default Routing;