import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LandingPage } from './components/landing/LandingPage';
import { HomePage } from './pages/HomePage';
import { GovernancePage } from './pages/GovernancePage';
import { ShortsPage } from './pages/ShortsPage';
import { ProtestPage } from './pages/ProtestPage';
import { ProfilePage } from './pages/ProfilePage';
import { ChatPage } from './pages/ChatPage';
import { TrendingPage } from './pages/TrendingPage';
import { FilterPage } from './pages/FilterPage';
// import { AuthFlow } from './components/AuthFlow';
// import React, { useState, useEffect } from 'react';


function App() {
  // const [showAuth, setShowAuth] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowAuth(true);
  //   }, 7000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (showAuth) {
  //   return <AuthFlow />;
  // }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="governance" element={<GovernancePage />} />
          <Route path="shorts" element={<ShortsPage />} />
          <Route path="protest" element={<ProtestPage />} />
          <Route path="profile" element={<ProfilePage />} />
        <Route path="chat/*" element={<ChatPage />} />
          <Route path="trending" element={<TrendingPage />} />
          <Route path="filter" element={<FilterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
