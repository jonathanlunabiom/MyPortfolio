import { useState } from 'react';
import Header from './Header';
import Aboutme from './pages/About-me';
import Portfolio from './pages/Portfolio'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('/');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === '/') {
      return <Aboutme/>;
    }
    if (currentPage === '/MyPortfolio') {
      return <Portfolio/>;
    }
  };

  const handleChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header handlePageChange={handleChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="mx-3">{renderPage()}</div>
    </div>
  );
}
