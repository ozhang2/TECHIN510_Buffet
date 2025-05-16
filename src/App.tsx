import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import AIGenerate from './components/AIGenerate';
import CustomizedServices from './components/CustomizedServices';
import TemplateReference from './components/TemplateReference';
import Footer from './components/Footer';

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #000000;
  background-color: #FDFCFB;
`;

const MainContent = styled.main`
  width: 100vw;
  padding: 0;
`;

const MainContentInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={
            <MainContent>
              <MainContentInner>
                <Hero />
              </MainContentInner>
              <AIGenerate />
              <MainContentInner>
                <CustomizedServices />
                <TemplateReference />
              </MainContentInner>
            </MainContent>
          } />
          <Route path="/ai-generate-detail" element={
            <MainContent>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
                <img src={process.env.PUBLIC_URL + '/images/ai-pick-category.jpg'} alt="AI Pick Category" style={{ maxWidth: '100%', borderRadius: '20px' }} />
              </div>
            </MainContent>
          } />
          <Route path="/customized-services" element={<div>Customized Services 页面</div>} />
          <Route path="/template-reference" element={<div>Template Reference 页面</div>} />
          <Route path="/community" element={<div>Community 页面</div>} />
          <Route path="/login" element={<div>登录页面</div>} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
