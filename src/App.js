import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/shared/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home/Home";
import Footer from "./pages/shared/Footer/Footer";
import Login from "./pages/login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Details from "./pages/details/Details/Details";
import MyOrder from "./pages/myOrder/MyOrder";
import ManageOrders from "./pages/manageOrder/ManageOrders";
import Addservices from "./pages/addServices/Addservices";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/serviceDetails/:id">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservices">
              <Addservices></Addservices>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
