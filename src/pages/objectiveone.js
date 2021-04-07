import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { PortfolioProvider } from '../context/context';
import { contactData, footerData } from '../mock/data';
import { Container } from 'react-bootstrap';
import Title from '../components/Title/Title';

export default () => {
  const { title, lang, description } = headData;
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
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

      <PortfolioProvider value={{ contact, footer }}>
        
        <Project/>


        <Contact />
        <Footer />
      </PortfolioProvider>
  
      
    </>
  );
};

function Project(){
    return(
        <section id="objectives" className="jumbotron">
            <Container>
                <div className="objectives-wrapper">
                    <h1 className="objectives-title">OBJECTIVES 1</h1>
                    <row>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--hero"
                            href={'./index'}
                        >
                            Home
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--objectives"
                            href={'#!'}
                        >
                            Objectives
                        </a>

                    </row>
                    
                
            




                </div>
            </Container>
        </section>
    )
}