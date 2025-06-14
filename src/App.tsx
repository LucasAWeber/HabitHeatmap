import { Box, } from '@mui/material';
import Home from './pages/Home';

const App = () => {
    
  return (
    <Box sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'background.default',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Home/>
    </Box>
  );
};

export default App;