import React, { useState } from 'react';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Alert from './components/alert/Alert';

const alertPortfolioMsg = 'Sorry! This Feature Is Currently Not In Service';
const alertContactMsg = 'Thank You! Your Message Was Sent Successfully';
const App = () => {
  const [alert, setAlert] = useState(false);
  const [alertContact, setAlertContact] = useState(false);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      {alert ? <Alert msg={alertPortfolioMsg} /> : ''}
      <Portfolio setAlert={setAlert} />
      {alertContact ? <Alert msg={alertContactMsg} /> : ''}
      <Contact setAlertContact={setAlertContact} />
      <Footer />
    </>
  );
};

export default App;
export { alertPortfolioMsg };
