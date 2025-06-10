import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/1-homepage/Home';
import AboutMe from './pages/2-aboutMe/AboutMe';
import MarketingWorks from './pages/3-marketingWorks/MarketingWorks';
import WebProjects from './pages/4-webProjects/WebProjects';
import DesignPortfolio from './pages/5-designPortfolio/DesignPortfolio';
import HireMe from './pages/6-hireMe/HireMe';
import NotFound from './pages/7-404page/NotFound';
import Footer from './components/Footer';
import EECWebProject from './pages/4-webProjects/subpages/1-eec-web-project/EECWebProject';
import TVEWebProject from './pages/4-webProjects/subpages/2-tve-web-project/TVEWebProject';
import BSWebProject from './pages/4-webProjects/subpages/3-bs-web-project/BSWebProject';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/marketing-portfolio" element={<MarketingWorks />} />
          <Route path="/uxui-project-portfolio" element={<WebProjects />} />
          {/* web project case studies */}
          <Route
            path="/uxui-project-portfolio/full-website-redesign-for-european-eye-center"
            element={<EECWebProject />}
          />
          <Route
            path="/uxui-project-portfolio/top-vision-eyewear-hybrid-ecommerce-website"
            element={<TVEWebProject />}
          />
          <Route
            path="/uxui-project-portfolio/blincq-solutions-medical-tech-site"
            element={<BSWebProject />}
          />
          {/*end of  web project case studies */}
          <Route
            path="/graphic-design-portfolio"
            element={<DesignPortfolio />}
          />
          <Route path="/hire-full-stack-marketer" element={<HireMe />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
