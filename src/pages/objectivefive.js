import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Objectives from '../components/Objectives/Objectives'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import  { PortfolioProvider } from '../context/context';
import { contactData, footerData, headData, objectiveFiveData } from '../mock/data';

export default () => {
  const { title, lang, description } = headData;
  const [objectives, setObjectives] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setObjectives({ ...objectiveFiveData});
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>

      <PortfolioProvider value={{ objectives, contact, footer }}>
        <Objectives />
        <Contact />
        <Footer />
      </PortfolioProvider>
  
      
    </>
  );
};
