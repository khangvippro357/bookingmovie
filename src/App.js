import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Adminlayout from "./layouts/Adminlayout";
import './css/index.css'
import "./styles";
import Footer from "./components/Footer/index";
import Applayout from "./layouts/Applayout";
import Carousel from "./components/Carousel";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Route Admin */}

        <Route path="/admin">
          <Adminlayout>
            {/* <Switch>
                <Redirect exact from="/admin" to="/admin/courses" />
                <Route path="/admin/courses">
                  <AdminCourses />
                </Route>
                <Route path="/admin/users">
                  <AdminUsers />
                </Route>
              </Switch> */}
              
          </Adminlayout>
        </Route>
        
        
        {/* Route Main */}
        {/* <Route path="/">
            </Adminlayout>
          </Route>
          {/* Route Main */}
        <Route path="/">
          <Applayout >
            {/* <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/courses/:category">
                <Coursess />
              </Route>
              <Route path="/course/:courseId">
                <Course />
              </Route>
            </Switch> */}
            <Carousel/>
          </Applayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
