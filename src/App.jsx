import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';

function App() {
  return (
    <BrowserRouter basename="/vite3-react-redux">
      <CssBaseline />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
