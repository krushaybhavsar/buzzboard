import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EthereumProvider } from './context/EthereumContext';
import LandingScreen from './screens/LandingScreen';
import Navbar from './components/Navbar';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <EthereumProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingScreen />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </EthereumProvider>
  );
};

export default App;
