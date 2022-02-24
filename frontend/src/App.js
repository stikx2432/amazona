import HomeScreen from './screens/HomeScreen'
import {BrowserRouter, Route} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row"> 
          <div>
              <a href="/" className="brand">amazona</a>
          </div>
          <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
          </div>
      </header>
      <main>
        <Route path="/product/:id" component={ProductScreen} exact></Route>
        <Route path="/" component={HomeScreen} exact></Route>
          
      </main>
      <footer className="row center">
          All rights deserved
      </footer>
  </div>
</BrowserRouter>
  );
}

export default App;
