
import React, { useState } from 'react';

import Header from './Components/Header'
import Footer from './Components/Footer';
import SignInForm from './User/SignInForm'
import SignUpForm from './User/SignUpForm';
import Profile from './User/Profile';

import Form from './User/Form';
import Scholarship from './User/Scholarship';
import EssayHelp from './User/EssayHelp';


import { 
Routes, 
Route,
} from "react-router-dom";



function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  return (
      <div className='bg-dark min-h-screen'>
        <Header loggedIn={loggedIn}></Header>
          <Routes>

            <Route
              path="/signin"
              element={ <SignInForm setLoggedIn={setLoggedIn} />}>
            </Route>

            <Route
              path="/signup"
              element={ <SignUpForm setLoggedIn={setLoggedIn} />}>
            </Route>

            <Route
              path="/"
              element={ <Profile />}>
            </Route>

            <Route
              path="/form"
              element={ <Form />}>
            </Route>

            <Route
              path="/scholarship"
              element={ <Scholarship />}>
            </Route>

            <Route
              path="/essayshelp"
              element={ <EssayHelp />}>
            </Route>

          </Routes>
        <Footer></Footer>
      </div>
  );
}

export default App;
