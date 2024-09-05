import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignUp from "./landing_page/signUp/SignUp";
import AboutPage from "./landing_page/about/AboutPage";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import PricingPage from "./landing_page/pricing/Pricing";
import NotFound from "./landing_page/NotFound"
import SignupPage from './landing_page/signUp/SignupPage';
import 'react-toastify/ReactToastify.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter> 
 <Navbar />
 <Routes>
  <Route path="/" element = {<HomePage />}/>
  <Route path="/signup/*" element = {<SignupPage />}/>
  <Route path="/about" element = {<AboutPage />}/>
  <Route path="/product" element = {<ProductPage />}/>
  <Route path="/pricing" element = {<PricingPage />}/> 
  <Route path="/support" element = {<SupportPage />}/>
  <Route path="*" element = {<NotFound />}/>
 </Routes>
 <Footer />
 </BrowserRouter>
);


