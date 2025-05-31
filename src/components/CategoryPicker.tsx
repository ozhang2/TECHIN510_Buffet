import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryPicker = ({ onContinue = () => {} }) => {
  const navigate = useNavigate();
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSettingsSelection, setShowSettingsSelection] = useState(false);
  const [showColorSelection, setShowColorSelection] = useState(false);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const keywordOptions = [
    'flower', 'romantic', 'cold food', 'hot food', 
    'celebration', 'fancy', 'futuristic', 'dessert'
  ];

  // 真实图片数组
  const settingImages = [
    { id: 1, src: process.env.PUBLIC_URL + '/images/setting-image1.jpg', alt: 'Setting 1' },
    { id: 2, src: process.env.PUBLIC_URL + '/images/setting-image2.jpg', alt: 'Setting 2' },
    { id: 3, src: process.env.PUBLIC_URL + '/images/setting-image3.jpg', alt: 'Setting 3' },
    { id: 4, src: process.env.PUBLIC_URL + '/images/setting-image4.jpg', alt: 'Setting 4' },
    { id: 5, src: process.env.PUBLIC_URL + '/images/setting-image5.jpg', alt: 'Setting 5' },
    { id: 6, src: process.env.PUBLIC_URL + '/images/setting-image6.jpg', alt: 'Setting 6' },
    { id: 7, src: process.env.PUBLIC_URL + '/images/setting-image7.jpg', alt: 'Setting 7' },
    { id: 8, src: process.env.PUBLIC_URL + '/images/setting-image8.jpg', alt: 'Setting 8' },
    { id: 9, src: process.env.PUBLIC_URL + '/images/setting-image9.jpg', alt: 'Setting 9' }
  ];

  // 颜色选项数组
  const colorOptions = [
    { name: 'Red', color: '#F28B82' },
    { name: 'Yellow', color: '#FDD663' },
    { name: 'Orange', color: '#FCAB64' },
    { name: 'Blue', color: '#8AB4F8' },
    { name: 'Teal', color: '#86FFE2' },
    { name: 'Green', color: '#C8E6C9' },
    { name: 'Purple', color: '#B39DDB' },
    { name: 'Pink', color: '#F8BBD9' },
    { name: 'Grey', color: '#DADCE0' }
  ];

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const handleKeywordSelect = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  const handleCustomInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && customInput.trim()) {
      const value = customInput.trim();
      if (!selectedKeywords.includes(value)) {
        setSelectedKeywords([...selectedKeywords, value]);
        setCustomInput('');
      }
    }
  };

  const handleAddCustom = () => {
    const value = customInput.trim();
    if (value && !selectedKeywords.includes(value)) {
      setSelectedKeywords([...selectedKeywords, value]);
      setCustomInput('');
    }
  };

  const handleClear = () => {
    setSelectedKeywords([]);
    setCustomInput('');
  };

  const handleDone = () => {
    if (selectedKeywords.length === 0) {
      alert('Please select at least one keyword!');
      return;
    }
    setShowConfirmation(true);
  };

  const handleContinue = () => {
    console.log('handleContinue called, setting showSettingsSelection to true');
    setShowConfirmation(false);
    setShowSettingsSelection(true);
  };

  const handleImageSelect = (imageId: number) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter(id => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const handleColorSelect = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      setSelectedColors(selectedColors.filter(c => c !== colorName));
    } else {
      setSelectedColors([...selectedColors, colorName]);
    }
  };

  const handleSettingsContinue = () => {
    console.log('handleSettingsContinue called, going to color selection');
    console.log('Selected images:', selectedImages);
    setShowSettingsSelection(false);
    setShowColorSelection(true);
  };

  const handleColorContinue = () => {
    console.log('handleColorContinue called');
    console.log('Selected colors:', selectedColors);
    navigate('/ai-generate/next-step');
  };

  const goBack = () => {
    if (showColorSelection) {
      setShowColorSelection(false);
      setShowSettingsSelection(true);
      return;
    }
    if (showSettingsSelection) {
      setShowSettingsSelection(false);
      return;
    }
    if (showConfirmation) {
      setShowConfirmation(false);
      return;
    }
    if (selectedKeywords.length > 0) {
      if (window.confirm('Are you sure you want to go back? Your selections will be lost.')) {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  };

  const handleSearchBarClick = () => {
    setShowDropdown(true);
  };

  // Step 4: 确认页面 - 显示已选择的keywords
  if (showConfirmation) {
    return (
      <div style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        {/* 返回按钮 */}
        <button
          onClick={goBack}
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            width: '40px',
            height: '40px',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#745E58',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 1)';
            (e.target as HTMLButtonElement).style.transform = 'translateX(-2px)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.9)';
            (e.target as HTMLButtonElement).style.transform = 'translateX(0)';
          }}
        >
          ←
        </button>

        {/* 确认页面内容 */}
        <div style={{
          background: '#F7F4F1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}>
          <div style={{
            display: 'flex',
            width: '1512px',
            height: '610px',
            padding: '128px 316px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0
          }}>
            {/* 标题区域 */}
            <div style={{
              textAlign: 'center',
              marginBottom: '60px'
            }}>
              <h1 style={{
                fontSize: '48px',
                fontWeight: '500',
                color: '#000',
                marginBottom: '16px',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Pick your category
              </h1>
              <p style={{
                fontSize: '20px',
                color: '#745E58',
                fontWeight: '500',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Knowing the category will help us pick color, style, and more.
              </p>
            </div>

            {/* 显示已选择keywords的搜索框 */}
            <div style={{
              width: '100%',
              maxWidth: '700px',
              background: '#ECE5DF',
              borderRadius: '32px',
              padding: '40px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              marginBottom: '40px'
            }}>
              <div style={{
                border: '2px solid #B8A89A',
                borderRadius: '40px',
                padding: '12px 24px',
                background: '#F7F0EA',
                fontWeight: '500',
                fontSize: '18px',
                color: '#745E58',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {selectedKeywords.map(keyword => (
                  <span
                    key={keyword}
                    style={{
                      background: '#D9CBBF',
                      borderRadius: '20px',
                      padding: '4px 12px',
                      fontSize: '14px',
                      color: '#745E58',
                      border: '1px solid #C4B5A8',
                      fontWeight: '500'
                    }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Continue button */}
            <div>
              <button
                onClick={handleContinue}
                style={{
                  background: '#D9CBBF',
                  color: '#000',
                  border: 'none',
                  padding: '12px 32px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(217, 203, 191, 0.4)'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#C4B5A8';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(217, 203, 191, 0.6)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#D9CBBF';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(217, 203, 191, 0.4)';
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: 简单的 search bar + 图片
  if (!showDropdown) {
    return (
      <div style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        {/* 返回按钮 */}
        <button
          onClick={goBack}
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            width: '40px',
            height: '40px',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#745E58',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 1)';
            (e.target as HTMLButtonElement).style.transform = 'translateX(-2px)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.9)';
            (e.target as HTMLButtonElement).style.transform = 'translateX(0)';
          }}
        >
          ←
        </button>

        {/* 上半部分：标题和搜索框 */}
        <div style={{
          background: '#F7F4F1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            width: '1512px',
            height: '610px',
            padding: '128px 316px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0
          }}>
            {/* 标题区域 */}
            <div style={{
              textAlign: 'center',
              marginBottom: '60px',
              opacity: showAnimation ? 1 : 0,
              transform: showAnimation ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease'
            }}>
              <h1 style={{
                fontSize: '48px',
                fontWeight: '500',
                color: '#000',
                marginBottom: '16px',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Pick your category
              </h1>
              <p style={{
                fontSize: '20px',
                color: '#745E58',
                fontWeight: '500',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Knowing the category will help us pick color, style, and more.
              </p>
            </div>

            {/* 简单的搜索框 */}
            <div style={{
              width: '100%',
              maxWidth: '700px',
              background: '#ECE5DF',
              borderRadius: '32px',
              padding: '40px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              opacity: showAnimation ? 1 : 0,
              transform: showAnimation ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.2s'
            }}>
              <div 
                onClick={handleSearchBarClick}
                style={{
                  border: '2px solid #B8A89A',
                  borderRadius: '40px',
                  padding: '12px 24px',
                  background: '#F7F0EA',
                  fontWeight: '500',
                  fontSize: '18px',
                  color: '#A09590',
                  minHeight: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLDivElement).style.borderColor = '#745E58';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLDivElement).style.borderColor = '#B8A89A';
                }}
              >
                Select keywords
              </div>
            </div>

            {/* Continue button */}
            <div style={{
              opacity: showAnimation ? 1 : 0,
              transform: showAnimation ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.4s',
              marginTop: '40px'
            }}>
              <button
                style={{
                  background: '#D9CBBF',
                  color: '#000',
                  border: 'none',
                  padding: '12px 32px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(217, 203, 191, 0.4)'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#C4B5A8';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(217, 203, 191, 0.6)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#D9CBBF';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(217, 203, 191, 0.4)';
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* 下半部分：图片 */}
        <div style={{
          background: '#FDFCFB',
          padding: '40px 20px',
          display: 'flex',
          justifyContent: 'center',
          flex: 1
        }}>
          <div style={{
            opacity: showAnimation ? 1 : 0,
            transform: showAnimation ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.4s'
          }}>
            <img 
              src={process.env.PUBLIC_URL + '/images/intro-pick-category.jpg'} 
              alt="Pick Category Intro" 
              style={{ 
                width: '1512px',
                height: '2212px',
                objectFit: 'cover'
              }} 
            />
          </div>
        </div>
      </div>
    );
  }

  // Step 5: Settings Selection Page
  if (showSettingsSelection) {
    console.log('Rendering showSettingsSelection page');
    return (
      <div style={{
        fontFamily: "'Poppins', sans-serif",
        background: '#F7F4F1',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        {/* 返回按钮 */}
        <button
          onClick={goBack}
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            width: '40px',
            height: '40px',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#745E58',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 1)';
            (e.target as HTMLButtonElement).style.transform = 'translateX(-2px)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.9)';
            (e.target as HTMLButtonElement).style.transform = 'translateX(0)';
          }}
        >
          ←
        </button>

        {/* 主内容 */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '100px 20px 60px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* 标题区域 */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '500',
              color: '#000',
              marginBottom: '16px',
              fontFamily: "'Poppins', sans-serif"
            }}>
              Pick some settings you like
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#745E58',
              fontWeight: '400',
              fontFamily: "'Poppins', sans-serif"
            }}>
              We'll use these as inspiration. These were all made with NUNU.
            </p>
          </div>

          {/* Continue按钮 */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <button
              onClick={handleSettingsContinue}
              style={{
                background: '#D9CBBF',
                color: '#000',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(217, 203, 191, 0.4)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = '#C4B5A8';
                (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(217, 203, 191, 0.6)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = '#D9CBBF';
                (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(217, 203, 191, 0.4)';
              }}
            >
              Continue
            </button>
          </div>

          {/* 图片网格 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 446px)',
            gap: '20px',
            justifyContent: 'center',
            width: '100%'
          }}>
            {settingImages.map((image) => (
              <div
                key={image.id}
                onClick={() => handleImageSelect(image.id)}
                style={{
                  position: 'relative',
                  width: '446px',
                  height: '294px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: selectedImages.includes(image.id) ? '4px solid #745E58' : '4px solid transparent',
                  transition: 'all 0.3s ease',
                  transform: selectedImages.includes(image.id) ? 'scale(0.95)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  if (!selectedImages.includes(image.id)) {
                    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!selectedImages.includes(image.id)) {
                    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                  }
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                {selectedImages.includes(image.id) && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '24px',
                    height: '24px',
                    background: '#745E58',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }

  // Step 6: Color Selection Page
  if (showColorSelection) {
    console.log('Rendering showColorSelection page');
    return (
      <div style={{
        fontFamily: "'Poppins', sans-serif",
        background: '#F7F4F1',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        {/* 返回按钮 */}
        <button
          onClick={goBack}
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            width: '40px',
            height: '40px',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#745E58',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 1)';
            (e.target as HTMLButtonElement).style.transform = 'translateX(-2px)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.9)';
            (e.target as HTMLButtonElement).style.transform = 'translateX(0)';
          }}
        >
          ←
        </button>

        {/* 主内容 */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '100px 20px 60px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* 标题区域 */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '500',
              color: '#000',
              marginBottom: '16px',
              fontFamily: "'Poppins', sans-serif"
            }}>
              Pick some colors you like
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#745E58',
              fontWeight: '400',
              fontFamily: "'Poppins', sans-serif"
            }}>
              Colors help convey stylistic in your buffet settings
            </p>
          </div>

          {/* Continue按钮 */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <button
              onClick={handleColorContinue}
              style={{
                background: '#D9CBBF',
                color: '#000',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(217, 203, 191, 0.4)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = '#C4B5A8';
                (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(217, 203, 191, 0.6)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = '#D9CBBF';
                (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(217, 203, 191, 0.4)';
              }}
            >
              Continue
            </button>
          </div>

          {/* 颜色网格 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 417px)',
            gap: '20px',
            justifyContent: 'center',
            width: '100%'
          }}>
            {colorOptions.map((color) => (
              <div
                key={color.name}
                onClick={() => handleColorSelect(color.name)}
                style={{
                  position: 'relative',
                  width: '417px',
                  height: '172px',
                  flexShrink: 0,
                  backgroundColor: color.color,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  border: selectedColors.includes(color.name) ? '4px solid #745E58' : '4px solid transparent',
                  transition: 'all 0.3s ease',
                  transform: selectedColors.includes(color.name) ? 'scale(0.95)' : 'scale(1)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px'
                }}
                onMouseEnter={(e) => {
                  if (!selectedColors.includes(color.name)) {
                    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!selectedColors.includes(color.name)) {
                    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                  }
                }}
              >
                {/* 颜色名称 */}
                <span style={{
                  fontSize: '24px',
                  fontWeight: '500',
                  color: '#000',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {color.name}
                </span>

                {/* 选中标记 */}
                {selectedColors.includes(color.name) && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '24px',
                    height: '24px',
                    background: '#745E58',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Dropdown menu (原来的完整界面)
  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: '#F8F5F2',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      position: 'relative'
    }}>
      {/* 返回按钮 */}
      <button
        onClick={() => setShowDropdown(false)}
        style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
          width: '40px',
          height: '40px',
          border: 'none',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          color: '#745E58',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 1)';
          (e.target as HTMLButtonElement).style.transform = 'translateX(-2px)';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.9)';
          (e.target as HTMLButtonElement).style.transform = 'translateX(0)';
        }}
      >
        ←
      </button>

      {/* 主容器 */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        paddingTop: '80px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* 标题区域 */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '500',
            color: '#000',
            marginBottom: '16px',
            fontFamily: "'Poppins', sans-serif"
          }}>
            Pick your category
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#745E58',
            fontWeight: '500',
            fontFamily: "'Poppins', sans-serif"
          }}>
            Knowing the category will help us pick color, style, and more.
          </p>
        </div>

        {/* 选择区域 */}
        <div style={{
          width: '100%',
          maxWidth: '700px',
          background: '#ECE5DF',
          borderRadius: '32px',
          padding: '40px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          {/* 搜索输入框显示 */}
          <div style={{
            border: '2px solid #B8A89A',
            borderRadius: '40px',
            padding: '12px 24px',
            marginBottom: '24px',
            background: '#F7F0EA',
            fontWeight: '500',
            fontSize: '18px',
            color: '#745E58',
            minHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            {selectedKeywords.length > 0 ? (
              selectedKeywords.map(keyword => (
                <span
                  key={keyword}
                  style={{
                    background: '#D9CBBF',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '14px',
                    color: '#745E58',
                    border: '1px solid #C4B5A8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: '500'
                  }}
                >
                  {keyword}
                  <span
                    onClick={() => setSelectedKeywords(selectedKeywords.filter(k => k !== keyword))}
                    style={{
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#745E58',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'rgba(116, 94, 88, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      lineHeight: '1'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLSpanElement).style.background = 'rgba(116, 94, 88, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLSpanElement).style.background = 'rgba(116, 94, 88, 0.2)';
                    }}
                  >
                    ×
                  </span>
                </span>
              ))
            ) : (
              <span style={{ color: '#A09590' }}>Select keywords</span>
            )}
          </div>

          {/* 关键词选择区域 */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{
              fontSize: '16px',
              color: '#7C6F65',
              fontWeight: '500',
              marginBottom: '16px'
            }}>
              Start selecting keywords
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '20px'
            }}>
              {keywordOptions.map(keyword => (
                <button
                  key={keyword}
                  onClick={() => handleKeywordSelect(keyword)}
                  style={{
                    border: selectedKeywords.includes(keyword) ? '2px solid #745E58' : '1.5px solid #B8A89A',
                    background: selectedKeywords.includes(keyword) ? '#745E58' : '#F7F0EA',
                    color: selectedKeywords.includes(keyword) ? '#fff' : '#745E58',
                    borderRadius: '25px',
                    padding: '10px 18px',
                    fontSize: '14px',
                    fontFamily: "'Poppins', sans-serif",
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    userSelect: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedKeywords.includes(keyword)) {
                      (e.target as HTMLButtonElement).style.background = '#E6D7C8';
                      (e.target as HTMLButtonElement).style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedKeywords.includes(keyword)) {
                      (e.target as HTMLButtonElement).style.background = '#F7F0EA';
                      (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          {/* 分隔线 */}
          <div style={{
            margin: '24px 0',
            color: '#9A8A7E',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            or
          </div>

          {/* 自定义输入 */}
          <div style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '24px'
          }}>
            <input
              type="text"
              placeholder="enter the words"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyPress={handleCustomInputKeyPress}
              style={{
                flex: 1,
                border: '1.5px solid #B8A89A',
                borderRadius: '25px',
                padding: '10px 20px',
                fontSize: '14px',
                fontFamily: "'Poppins', sans-serif",
                outline: 'none',
                background: '#fff',
                color: '#745E58',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#745E58'}
              onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#B8A89A'}
            />
            {customInput && (
              <button
                onClick={handleAddCustom}
                style={{
                  border: 'none',
                  background: '#B8A89A',
                  color: '#fff',
                  borderRadius: '25px',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontFamily: "'Poppins', sans-serif",
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.background = '#A39382'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.background = '#B8A89A'}
              >
                Add
              </button>
            )}
          </div>

          {/* 控制按钮 */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px'
          }}>
            <button
              onClick={handleClear}
              style={{
                background: 'none',
                border: 'none',
                color: '#745E58',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontFamily: "'Poppins', sans-serif",
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#D93025'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = '#745E58'}
            >
              Clear
            </button>
            <button
              onClick={handleDone}
              style={{
                background: '#D9CBBF',
                color: '#000',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(217, 203, 191, 0.4)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = '#C4B5A8';
                (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(217, 203, 191, 0.6)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = '#D9CBBF';
                (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(217, 203, 191, 0.4)';
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPicker; 