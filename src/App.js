import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import MenuAppBar from './Components/AppBarWithMenu';




function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <MenuAppBar></MenuAppBar>
      
     
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
         
          </Switch>

      
    </div>
  );
  }

export default App;