import { Outlet, NavLink } from 'react-router-dom';
const Layout = () => {
    // const isLoading = useSelector(selectIsLoading);
    return (
      <>
        {/* <MainContainer> */}
          {/* <Container> */}
          <div>123</div>
          <NavLink to='/'>Linkto/</NavLink>
        <NavLink to='/t'>Linkto/t</NavLink>
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