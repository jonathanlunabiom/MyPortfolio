import { useState } from 'react';
import Header from './components/Header';
import Aboutme from './components/pages/About-me';
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'home') {
      return <Aboutme/>;
    }
    else if(currentPage === 'myportfolio') {
      return <Portfolio/>;
    }
    else{
      return <Contact/>
    }
  };

  const handleChange = (page) => setCurrentPage(page);

  return (
    <div id='main-containerdiv'>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header handleChange={handleChange} currentPage={currentPage}/>
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="m-container">{renderPage()}</div>
      <Footer/>
    </div>
  );
}