import Navbar from './components/Navbar';
import './App.css';
import Home from './Pages';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    
    <>
    <Navbar />
    
   <switch>
   <Route path="/"  exact  component={Home} />
   </switch>
    <Footer />
   


    
    </>
    
  );
}

export default App;
