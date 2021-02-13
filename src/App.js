import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import NotFound from './pages/NotFound'; 
import './App.css';
import Reports from './pages/Reports';
import Products from './pages/Products';
//Routes
import PrivateRoute from './routes/PrivateRoute';
//screens
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Logout from './components/auth/Logout';

function App() {
  return (
    <>
      <Router>
        {/* <PrivateRoute exact path="/" component={Navbar} /> */}
        {/* <Navbar /> */}
        <Switch>
          {/* Application dashboard route */}
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/reports" component={Reports} />
          <PrivateRoute exact path="/products" component={Products} />
          {/* <PrivateRoute exact path="/*" component={NotFound} /> */}
          {/* authentication route */}
          <Route exact path="/login" component={ Login } />
          <Route exact path="/forgotpassword" component={ ForgotPassword } />
          <Route path="/resetpassword/:resetToken" component={ ResetPassword } />
          <Route path="/logout" component={ Logout } />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
