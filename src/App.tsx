import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EthereumProvider } from './context/EthereumContext';
import LandingScreen from './screens/LandingScreen';
import Navbar from './components/Navbar';
import { Toaster } from 'sonner';
import { TooltipProvider } from './components/ui/tooltip';

const App = () => {
  return (
    <EthereumProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingScreen />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </EthereumProvider>
  );
};

export default App;
