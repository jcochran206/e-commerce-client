import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header/>
          <main className="py-3">
            <Container>
              <Route path='/' component={HomeScreen} exact />
              <Route path='/product/:id' component={ProductScreen} />
            </Container>
          </main>
          <Footer/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
