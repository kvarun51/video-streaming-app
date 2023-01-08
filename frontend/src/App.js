import logo from "./logo.svg";
import "./styles/globals.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import MainFeed from "./Components/MainFeed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/browse" element={<MainFeed />} />
      </Routes>
    </div>
  );
  // return (
  //   <div className="App">
  //     <UserAuthContextProvider>
  //       <Router>
  //         <Switch>
  //           <Route exact path="/">
  //             {!cookie["loggedUser"] || cookie["loggedUser"] == "undefined" ? (
  //               <LandingPage />
  //             ) : (
  //               <Redirect to="/browse" />
  //             )}
  //           </Route>
  //           <Route exact path="/login">
  //             {" "}
  //             <SignIn />
  //           </Route>
  //           <Route exact path="/signUp">
  //             <Payments />
  //           </Route>
  //           <Route exact path="/admin">
  //             <AdminController />
  //           </Route>
  //           <Route exact path="/browse">
  //             <ProtectedRoute>
  //               <HomePage />
  //             </ProtectedRoute>
  //           </Route>
  //           <Route exact path="/browse/:id/:isMovie">
  //             <ProtectedRoute>
  //               <IndivisualDetail />
  //             </ProtectedRoute>
  //           </Route>
  //           <Route exact path="/browse/:cat">
  //             <ProtectedRoute>
  //               <HomePage />
  //             </ProtectedRoute>
  //           </Route>
  //           <Route exact path="/paymentStatus">
  //             <ProtectedRoute>
  //               <PaymentStatus />
  //             </ProtectedRoute>
  //           </Route>
  //         </Switch>
  //       </Router>
  //     </UserAuthContextProvider>
  //   </div>
  // );
}

export default App;
