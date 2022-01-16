import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Megazines from "./pages/megazines/Megazines";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import Posts from "./pages/posts/Posts";
import { BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/admind/Dashboard";
import AdminPost from "./pages/adminP/AdminPost";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import { GuardProvider, GuardedRoute } from 'react-router-guards';

const requireLogin = (to, from, next) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (to.meta.auth) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const role = user.role
      if (role === "admin") {
        console.log("is admin")
      } else {
        console.log("is user")
      }
      // next();
    }
    next.redirect('/login');
  } else {
    next();
  }

  if (to.meta.isAdmin) {
    //const user = JSON.parse(localStorage.getItem("user"));
    // console.log("role-1: ",user.role)
    if (user) {
      console.log("role-1: ",user.role)
      const role = user.role
      if (role == "admin") {
        next();
      } 
       else {
         window.location.href = "/"

       }
    }
   // return <Redirect to="/login" />
  //  window.location.href = "/login"
    //next.redirect('/login');
  } else {
    next();
  }

  if (to.meta.isUser) {
    
    //const user = JSON.parse(localStorage.getItem("user"));
    //console.log("role-1: ",user.role)
    if (user) {
      const role = user.role
      console.log("role-1: ",user.role)
      if (role == "user") {
        next()
      }

      return <Redirect to="/admin" />
      //window.location.href = "/login"
    }
    //return <Redirect to="/login"/>
    //window.location.href = "/login"
  //  next.redirect('/login');
  } else {
    next();
  }
};
function App() {


  const { user } = useContext(Context);
  // var role;
  // if (user.role){
  //   role = user.role;
  // }else{
  //   role = "user"
  // }

//  console.log("role user ",user.role)

  return (
    <Router>
      <TopBar />
      <GuardProvider guards={[requireLogin]}>
        <Switch>

          <GuardedRoute exact path="/">
            <Home />
          </GuardedRoute>
          <GuardedRoute path="/register" >{user ? <Home /> : <Register />}</GuardedRoute>
          <GuardedRoute path="/login">{user ? <Home /> : <Login />}</GuardedRoute>
          <GuardedRoute path="/write" meta={{ isUser: true }}>{user ? <Write /> : <Register />}</GuardedRoute>
          <GuardedRoute path="/megazines" >{<Megazines />}</GuardedRoute>
          <GuardedRoute path="/contact" >{<Contact />}</GuardedRoute>
          <GuardedRoute path="/team">{<Team />}</GuardedRoute>
          <GuardedRoute path="/posts">{<Posts />}</GuardedRoute>
          <GuardedRoute path="/detail">{<Single />}</GuardedRoute>
          <GuardedRoute path="/settings">{user ? <Settings /> : <Register />}</GuardedRoute>
          <GuardedRoute path="/post/:postId">

            <Single />
          </GuardedRoute>
          <GuardedRoute path="/admin/dashboard" meta={{ isAdmin: true }}>{user ? <Dashboard /> : <AdminLogin />}</GuardedRoute>
          {/* <GuardedRoute path="/admin/post" meta={{ isAdmin: true }}>{user ? <AdminPost /> : <AdminLogin />}</GuardedRoute>
          <GuardedRoute path="/admin" meta={{ isAdmin: true }}>{<AdminLogin />}</GuardedRoute> */}
        </Switch>
      </GuardProvider>
      <Footer />
    </Router>
  );
}

export default App;
