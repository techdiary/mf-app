import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./index.css";

const Home = React.lazy( () => import('home/HomePage'));
const About = React.lazy( () => import('common/AboutPage'));
const Error = React.lazy( () => import('common/ErrorPage'));



const Shell = (props) => {
  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback={'Loading'}>
          <Routes>
            <Route path="home/*" element={<Home/>} />
            <Route path="about/*" element={<About />} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
};

export default Shell;
