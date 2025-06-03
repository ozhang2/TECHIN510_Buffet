import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import AIGenerate from './components/AIGenerate';
import CustomizedServices from './components/CustomizedServices';
import TemplateReference from './components/TemplateReference';
import Footer from './components/Footer';
import { FiCamera } from 'react-icons/fi';
import CategoryPicker from './components/CategoryPicker';
import ImageGeneration from './components/ImageGeneration';
import CustomizeBuffetPage from './components/CustomizeBuffetPage';

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

const SearchBarContainer = styled.div`
  width: 100vw;
  background: #F8F5F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 40px;
`;
const SearchTitle = styled.h1`
  color: #000;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 12px;
`;
const SearchDesc = styled.p`
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-self: stretch;
  margin-bottom: 48px;
  text-align: center;
`;
const SearchBarRow = styled.div`
  display: flex;
  align-items: center;
  width: 60vw;
  max-width: 900px;
  background: #ECE5DF;
  border-radius: 100px;
  padding: 0 32px;
  height: 64px;
  margin-bottom: 48px;
`;
const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 20px;
  color: #745E58;
  outline: none;
  font-family: 'Poppins', sans-serif;
`;
const CameraButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: #745E58;
  display: flex;
  align-items: center;
`;
const ContinueBtn = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #D9CBBF;
  color: #000;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  cursor: pointer;
  margin-top: 0;
  transition: background 0.2s;
  &:hover {
    background: #a39382;
  }
`;

function SearchBarPage({ onContinue }: { onContinue: () => void }) {
  const [keyword, setKeyword] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const keywordOptions = [
    'flower', 'romantic', 'cold food', 'hot food', 'celebration', 'fancy', 'futuristic', 'dessert'
  ];

  const handleSelect = (word: string) => {
    if (!selected.includes(word)) {
      setSelected([...selected, word]);
    }
    setShowDropdown(false);
    setInputValue('');
  };

  const handleRemove = (word: string) => {
    setSelected(selected.filter(w => w !== word));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSelect(inputValue.trim());
    }
  };

  const handleClear = () => {
    setSelected([]);
    setInputValue('');
  };

  return (
    <SearchBarContainer>
      <SearchTitle>Pick your category</SearchTitle>
      <SearchDesc>Knowing the category will help us pick color, style, and more.</SearchDesc>
      {!showDropdown && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
          <img src={process.env.PUBLIC_URL + '/images/ai-pick-category.jpg'} alt="AI Pick Category" style={{ maxWidth: '100%', borderRadius: '20px' }} />
        </div>
      )}
      <div style={{ width: '60vw', maxWidth: 900, background: '#ECE5DF', borderRadius: 32, padding: 32, marginBottom: 48 }}>
        <div style={{ border: '2px solid #B8A89A', borderRadius: 40, padding: '12px 24px', marginBottom: 16, background: '#F7F0EA', fontWeight: 500, fontSize: 20, color: '#745E58' }}>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => setShowDropdown(true)}
          >
            Select keywords
          </div>
        </div>
        {showDropdown && (
          <>
            <div style={{ marginBottom: 12, fontSize: 16, color: '#7C6F65', fontWeight: 500 }}>Start selecting keywords</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
              {keywordOptions.map(word => (
                <button
                  key={word}
                  onClick={() => handleSelect(word)}
                  style={{
                    border: selected.includes(word) ? '2px solid #745E58' : '1.5px solid #B8A89A',
                    background: selected.includes(word) ? '#745E58' : '#F7F0EA',
                    color: selected.includes(word) ? '#fff' : '#745E58',
                    borderRadius: 100,
                    padding: '6px 18px',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    cursor: 'pointer',
                    fontWeight: 500,
                    transition: 'all 0.2s',
                  }}
                >
                  {word}
                </button>
              ))}
            </div>
            <div style={{ marginBottom: 8, fontSize: 16, color: '#7C6F65', fontWeight: 500 }}>or</div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              <input
                style={{
                  flex: 1,
                  border: '1.5px solid #B8A89A',
                  borderRadius: 100,
                  padding: '8px 18px',
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  outline: 'none',
                  background: '#fff',
                  color: '#745E58',
                }}
                placeholder="enter the words"
                value={inputValue}
                onChange={handleInput}
                onFocus={() => setShowDropdown(true)}
                onKeyDown={handleInputKeyDown}
              />
              {inputValue && (
                <button onClick={() => handleSelect(inputValue)} style={{ border: 'none', background: '#B8A89A', color: '#fff', borderRadius: 100, padding: '8px 18px', fontSize: 16, fontFamily: 'Poppins', cursor: 'pointer' }}>Add</button>
              )}
            </div>
            {selected.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
                {selected.map(word => (
                  <span key={word} style={{ background: '#ECE5DF', borderRadius: 100, padding: '6px 16px', fontSize: 16, color: '#745E58', border: '1.5px solid #B8A89A', display: 'flex', alignItems: 'center', gap: 6 }}>
                    {word}
                    <span style={{ cursor: 'pointer', marginLeft: 4 }} onClick={() => handleRemove(word)}>×</span>
                  </span>
                ))}
              </div>
            )}
            <div style={{ marginTop: 8 }}>
              <button onClick={handleClear} style={{ background: 'none', border: 'none', color: '#745E58', textDecoration: 'underline', fontSize: 16, cursor: 'pointer' }}>Clear</button>
            </div>
          </>
        )}
      </div>
      <ContinueBtn onClick={onContinue}>Done</ContinueBtn>
    </SearchBarContainer>
  );
}

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
          <Route path="/ai-generate/category" element={
            <CategoryPicker onContinue={() => window.location.href='/ai-generate/next-step'} />
          } />
          <Route path="/ai-generate/generate" element={
            <ImageGeneration />
          } />
          <Route path="/customize-buffet" element={
            <CustomizeBuffetPage />
          } />
          <Route path="/ai-generate/detail" element={
            <MainContent>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
                <img src={process.env.PUBLIC_URL + '/images/ai-pick-category.jpg'} alt="AI Pick Category" style={{ maxWidth: '100%', borderRadius: '20px' }} />
              </div>
            </MainContent>
          } />
          <Route path="/ai-generate/next-step" element={
            <MainContent>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px 0', minHeight: '70vh' }}>
                <h1 style={{ fontSize: '36px', fontWeight: '500', color: '#000', marginBottom: '20px', fontFamily: "'Poppins', sans-serif" }}>
                  Great! Your selections are saved.
                </h1>
                <p style={{ fontSize: '18px', color: '#745E58', fontWeight: '400', fontFamily: "'Poppins', sans-serif", textAlign: 'center' }}>
                  We'll use your preferences to create the perfect layout for your buffet.
                </p>
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
