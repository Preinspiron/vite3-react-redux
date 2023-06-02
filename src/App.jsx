// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Routing from './routes/Routing';
import './App.css';
import { Container } from '@mui/material';

function App() {
  // const [count, setCount] = useState(0)

  console.log(222);
  return (

    <Container maxWidth='lg' >
      <Routing />
    </Container>
  );
}

export default App;
