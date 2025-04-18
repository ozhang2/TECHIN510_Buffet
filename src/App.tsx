import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import AIGenerate from './components/AIGenerate';
import CustomizedServices from './components/CustomizedServices';
import TemplateReference from './components/TemplateReference';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #000000;
  background-color: #FDFCFB;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <AIGenerate />
                <CustomizedServices />
                <TemplateReference />
                <FAQ />
              </>
            } />
            <Route path="/ai-generate" element={<div>AI Generate 页面</div>} />
            <Route path="/customized-services" element={<div>Customized Services 页面</div>} />
            <Route path="/template-reference" element={<div>Template Reference 页面</div>} />
            <Route path="/community" element={<div>Community 页面</div>} />
            <Route path="/login" element={<div>登录页面</div>} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
