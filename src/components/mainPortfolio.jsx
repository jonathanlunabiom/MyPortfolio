import { useState } from 'react';
import Header from './Header';
import Aboutme from './pages/About-me';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

export default function PortfolioContainer() {
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
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header handleChange={handleChange}/>
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="mx-3">{renderPage()}</div>
    </div>
  );
}
