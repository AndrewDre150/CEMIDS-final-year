// import { useContext, useEffect } from "react";
// import "./App.scss";

// import { ThemeContext } from "./context/ThemeContext";
// import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MoonIcon from "./assets/icons/moon.svg";
// import SunIcon from "./assets/icons/sun.svg";
// import BaseLayout from "./layout/BaseLayout";
// import { Dashboard, PageNotFound } from "./screens";
// import Chart from './components/Charts/Chart'
// import Login from './components/Login/Login'
// import Signup from './components/SignUp/Signup'
// import Calender from './components/calender/Calender'
// import LandingPage from "./components/Landing/Landing-page";
// import DonationForm from "./components/donation/DonationForm";
// import Payment from './components/payment/Payment'
// import Quiz from './components/Quiz/Quiz'
// import ClimateChangeQuiz from "./components/Quizes/ClimateChange";
// import PlasticsImpactsQuiz from "./components/Quizes/PlasticsImpact";
// import EnvironmentalLiteracyQuiz from "./components/Quizes/EnviromentalLiteracy";
// import CleanEnergyQuiz from "./components/Quizes/CleanEnergy";
// // import QuizRoute from './components/Quizes/QuizRoute'
// import HomeQuiz from './components/Landing/Components/HomeQuiz'
// import Chatbot from './components/Chatbot/Chatbot'
// import Map from './components/Landing/Components/Map'
// import EventsMap from "./components/Map/EventsMap";
// import Analytics from "./components/Charts/Analytics";

// function App() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   // adding dark-mode class if the dark mode is set on to the body tag
//   useEffect(() => {
//     if (theme === DARK_THEME) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [theme]);

//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<LandingPage/>} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/payment" element={<Payment />} />
//           {/* <Route path="/testpayment" element={<Testpayment />} /> */}
//           <Route path="/climatequiz" element={<ClimateChangeQuiz/>} />
//           <Route path="/cleanenergy" element={<CleanEnergyQuiz/>} />
//           <Route path="/environment" element={<EnvironmentalLiteracyQuiz/>} />
//           <Route path="/plasticsquiz" element={<PlasticsImpactsQuiz/>} />

//           <Route element={<BaseLayout />}>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="*" element={<PageNotFound />} />
//             <Route path="/charts" element={<Chart />} />
//             <Route path="/analytics" element={<Analytics />} />
//             <Route path="/calender" element={<Calender/>} />
//             <Route path="/donation" element={<DonationForm/>} />
//             {/* <Route path="/map" element={<Map />} /> */}
//             <Route path="/eventsmap" element={<EventsMap />} />
//             <Route path="/quiz" element={<HomeQuiz/>} />
//             <Route path="/quiz/climatequiz" element={<ClimateChangeQuiz/>} />
//             <Route path="/quiz/cleanenergy" element={<CleanEnergyQuiz/>} />
//             <Route path="/quiz/environment" element={<EnvironmentalLiteracyQuiz/>} />
//             <Route path="/quiz/plasticsquiz" element={<PlasticsImpactsQuiz/>} />
//             <Route path="/chatbot" element={<Chatbot/>} />
//           </Route>
//         </Routes>

//         <button
//           type="button"
//           className="theme-toggle-btn"
//           onClick={toggleTheme}
//         >
//           <img
//             className="theme-icon"
//             src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
//           />
//         </button>
//       </Router>
//     </>
//   );
// }


// export default App;



// import React, { useState, useContext, useEffect } from "react";
// import "./App.scss";
// import { ThemeContext } from "./context/ThemeContext";
// import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MoonIcon from "./assets/icons/moon.svg";
// import SunIcon from "./assets/icons/sun.svg";
// import BaseLayout from "./layout/BaseLayout";
// import { Dashboard, PageNotFound } from "./screens";
// import Chart from './components/Charts/Chart'
// import Login from './components/Login/Login'
// import Signup from './components/SignUp/Signup'
// import Calender from './components/calender/Calender'
// import LandingPage from "./components/Landing/Landing-page";
// import DonationForm from "./components/donation/DonationForm";
// import Payment from './components/payment/Payment'
// import Quiz from './components/Quiz/Quiz'
// import ClimateChangeQuiz from "./components/Quizes/ClimateChange";
// import PlasticsImpactsQuiz from "./components/Quizes/PlasticsImpact";
// import EnvironmentalLiteracyQuiz from "./components/Quizes/EnviromentalLiteracy";
// import CleanEnergyQuiz from "./components/Quizes/CleanEnergy";
// import HomeQuiz from './components/Landing/Components/HomeQuiz'
// import Chatbot from './components/Chatbot/Chatbot'
// import Map from './components/Landing/Components/Map'
// import EventsMap from "./components/Map/EventsMap";
// import Analytics from "./components/Charts/Analytics";
// import Protected from "./Protected"; // Import the Protected component

// function App() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Maintain state for user authentication status

//   // Function to update isLoggedIn state when the user logs in
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   // adding dark-mode class if the dark mode is set on to the body tag
//   useEffect(() => {
//     if (theme === DARK_THEME) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [theme]);

//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<LandingPage/>} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass handleLogin function to Login component */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/climatequiz" element={<ClimateChangeQuiz/>} />
//           <Route path="/cleanenergy" element={<CleanEnergyQuiz/>} />
//           <Route path="/environment" element={<EnvironmentalLiteracyQuiz/>} />
//           <Route path="/plasticsquiz" element={<PlasticsImpactsQuiz/>} />

//           {/* Protected routes */}
//           <Route element={<BaseLayout />}>
//             <Route path="/dashboard" element={<Protected isLoggedIn={isLoggedIn}><Dashboard /></Protected>} />
//             <Route path="*" element={<PageNotFound />} />
//             <Route path="/charts" element={<Protected isLoggedIn={isLoggedIn}><Chart /></Protected>} />
//             <Route path="/analytics" element={<Protected isLoggedIn={isLoggedIn}><Analytics /></Protected>} />
//             <Route path="/calender" element={<Protected isLoggedIn={isLoggedIn}><Calender/></Protected>} />
//             <Route path="/donation" element={<Protected isLoggedIn={isLoggedIn}><DonationForm/></Protected>} />
//             <Route path="/eventsmap" element={<Protected isLoggedIn={isLoggedIn}><EventsMap /></Protected>} />
//             <Route path="/quiz" element={<Protected isLoggedIn={isLoggedIn}><HomeQuiz/></Protected>} />
//             <Route path="/quiz/climatequiz" element={<Protected isLoggedIn={isLoggedIn}><ClimateChangeQuiz/></Protected>} />
//             <Route path="/quiz/cleanenergy" element={<Protected isLoggedIn={isLoggedIn}><CleanEnergyQuiz/></Protected>} />
//             <Route path="/quiz/environment" element={<Protected isLoggedIn={isLoggedIn}><EnvironmentalLiteracyQuiz/></Protected>} />
//             <Route path="/quiz/plasticsquiz" element={<Protected isLoggedIn={isLoggedIn}><PlasticsImpactsQuiz/></Protected>} />
//             <Route path="/chatbot" element={<Protected isLoggedIn={isLoggedIn}><Chatbot/></Protected>} />
//           </Route>
//         </Routes>

//         <button
//           type="button"
//           className="theme-toggle-btn"
//           onClick={toggleTheme}
//         >
//           <img
//             className="theme-icon"
//             src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
//           />
//         </button>
//       </Router>
//     </>
//   );
// }

// export default App;




import { useContext, useEffect } from "react";
import "./App.scss";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import Chart from './components/Charts/Chart'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import Calender from './components/calender/Calender'
import LandingPage from "./components/Landing/Landing-page";
import DonationForm from "./components/donation/DonationForm";
import Payment from './components/payment/Payment'
import Quiz from './components/Quiz/Quiz'
import ClimateChangeQuiz from "./components/Quizes/ClimateChange";
import PlasticsImpactsQuiz from "./components/Quizes/PlasticsImpact";
import EnvironmentalLiteracyQuiz from "./components/Quizes/EnviromentalLiteracy";
import CleanEnergyQuiz from "./components/Quizes/CleanEnergy";
// import QuizRoute from './components/Quizes/QuizRoute'
import HomeQuiz from './components/Landing/Components/HomeQuiz'
import Chatbot from './components/Chatbot/Chatbot'
import Map from './components/Landing/Components/Map'
import EventsMap from "./components/Map/EventsMap";
import Analytics from "./components/Charts/Analytics";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  // if (isFetching) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          {/* <Route path="/testpayment" element={<Testpayment />} /> */}
          <Route path="/climatequiz" element={<ClimateChangeQuiz/>} />
          <Route path="/cleanenergy" element={<CleanEnergyQuiz/>} />
          <Route path="/environment" element={<EnvironmentalLiteracyQuiz/>} />
          <Route path="/plasticsquiz" element={<PlasticsImpactsQuiz/>} />

          <Route element={<BaseLayout />}>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/dashboard" element={<ProtectedRoute user={user}>
              <Dashboard/>
            </ProtectedRoute>} />
            <Route path="*" element={<ProtectedRoute user={user}>
            <PageNotFound />
            </ProtectedRoute>} />
            <Route path="/charts" element={<ProtectedRoute user={user}>
              <Chart/>
            </ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute user={user}>
              <Analytics/>
            </ProtectedRoute>} />
            <Route path="/calender" element={<ProtectedRoute user={user}>
              <Calender/>
            </ProtectedRoute>} />
            <Route path="/donation" element={<ProtectedRoute user={user}>
              <DonationForm/>
            </ProtectedRoute>} />
            {/* <Route path="/map" element={<Map />} /> */}
            <Route path="/eventsmap" element={<ProtectedRoute user={user}>
            <EventsMap />
            </ProtectedRoute>} />
            <Route path="/quiz" element={<ProtectedRoute user={user}>
              <HomeQuiz/>
            </ProtectedRoute>} />
            <Route path="/quiz/climatequiz" element={<ProtectedRoute user={user}>
              <ClimateChangeQuiz/>
            </ProtectedRoute>} />
            <Route path="/quiz/cleanenergy" element={<ProtectedRoute user={user}>
              <CleanEnergyQuiz/>
            </ProtectedRoute>} />
            <Route path="/quiz/environment" element={<ProtectedRoute user={user}>
              <EnvironmentalLiteracyQuiz/>
            </ProtectedRoute>} />
            <Route path="/quiz/plasticsquiz" element={<ProtectedRoute user={user}>
              <PlasticsImpactsQuiz/>
            </ProtectedRoute>} />
            <Route path="/chatbot" element={<ProtectedRoute user={user}>
              <Chatbot/>
            </ProtectedRoute>} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}


export default App;
