import { Outlet, NavLink } from 'react-router-dom';
const Layout = () => {
    // const isLoading = useSelector(selectIsLoading);
    return (
      <>
        {/* <MainContainer> */}
          {/* <Container> */}
          <nav className='main-nav'>
          <NavLink className='link'  to='/'>Home</NavLink>
        <NavLink className='link' to='/t'>Tweets</NavLink>  
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