import { Outlet, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import s from './Layout.module.scss'
const Layout = () => {
  // const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {/* <MainContainer> */}
      {/* <Container> */}
      <nav className={s.nav}>
        
      <Link  to="/">
          
          <Button variant="outlined">HOME</Button>
          </Link>
          <Link  to="/tweets">
          
          <Button variant="outlined">TWEETS</Button>
          </Link>
         
          
          
    
      </nav>

      {/* {isLoading && <Loader />} */}
      {/* <Suspense fallback={<Loader />}> */}
      <Outlet />
      {/* </Suspense> */}
      {/* </Container> */}
      {/* </MainContainer> */}
    </>
  );
};

export default Layout;
