import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import YourPlans from './components/YourPlans/YourPlans';
import Footer from './components/Footer/Footer';
import Campaign from './components/Campaign/Campaign';

function App() {
  return (  
    <div className="App">
      <Header className="App-header"/>
      <Campaign/>
      {/* <YourPlans className="text-left"/> */}
      <Footer/>
    </div>
  );
}

export default App;
