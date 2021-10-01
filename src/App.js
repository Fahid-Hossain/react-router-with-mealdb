import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          {/* //navbar  */}
          <Navbar></Navbar>
        <Switch>
          <Route path="/home">
             <Home></Home> 
          </Route>
          <Route exact path="/">
             <Home></Home> 
          </Route>
          <Route path="/meals">
             <Meals></Meals>
          </Route>
          <Route path="/meal/:MealId">
              <MealDetails></MealDetails>
          </Route>
          <Route path="*">
             <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
