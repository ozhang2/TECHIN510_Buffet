import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleGenAI, Modality } from "@google/genai";

interface LocationState {
  selectedKeywords: string[];
  selectedImages: number[];
  selectedColors: string[];
  selectedCountries: string[];
}

const ImageGeneration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 如果没有状态数据，重定向回开始页面
  useEffect(() => {
    if (!state || !state.selectedKeywords || !state.selectedColors) {
      navigate('/ai-generate/category');
    }
  }, [state, navigate]);

  const generatePrompt = () => {
    const keywords = state?.selectedKeywords?.join(', ') || '';
    const colors = state?.selectedColors?.join(', ') || '';
    const countries = state?.selectedCountries?.join(', ') || '';
    
    return `Create a beautiful, professional buffet table layout design. 
    Style keywords: ${keywords}. 
    Color scheme: ${colors}. 
    Cuisine types: ${countries}. 
    The image should show an elegant buffet table setting with food displays, plates, utensils, and decorative elements. 
    Make it aesthetically pleasing and restaurant-quality. 
    Top-down view of the buffet table layout. 
    High-quality, realistic, professional food photography style.`;
  };

  const generateImage = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      // Check if API key is available
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('Gemini API key not found. Please add REACT_APP_GEMINI_API_KEY to your .env file.');
      }

      const prompt = generatePrompt();
      console.log('Generated prompt:', prompt);
      
      // Initialize Gemini AI with correct structure
      const ai = new GoogleGenAI({ apiKey: apiKey });
      
      console.log('Generating content with Gemini...');
      
      // Prepare the content parts
      const contents = [
        { text: prompt }
      ];

      // Generate content using the correct API format
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-preview-image-generation",
        contents: contents,
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      console.log('Gemini response:', response);
      
      // Process the response parts
      if (response.candidates && response.candidates[0] && response.candidates[0].content && response.candidates[0].content.parts) {
        const parts = response.candidates[0].content.parts;
        
        for (const part of parts) {
          // Check if this part contains an image
          if (part.inlineData && part.inlineData.data) {
            const imageData = part.inlineData.data;
            const dataUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${imageData}`;
            setGeneratedImage(dataUrl);
            console.log('Image generated successfully');
            return;
          }
          
          // If there's text, log it for debugging
          if (part.text) {
            console.log('Generated text:', part.text);
          }
        }
        
        // If we get here, no image was found in the response
        throw new Error('No image data received from Gemini. The model may not support image generation or your account may need special access.');
      } else {
        throw new Error('Invalid response structure from Gemini API');
      }
      
    } catch (err) {
      let errorMessage = 'An error occurred';
      
      if (err instanceof Error) {
        errorMessage = err.message;
        
        // Check for specific API errors
        if (errorMessage.includes('403')) {
          errorMessage = 'API access forbidden. Please check your API key and account permissions.';
        } else if (errorMessage.includes('429')) {
          errorMessage = 'Rate limit exceeded. Please wait a moment and try again.';
        } else if (errorMessage.includes('400')) {
          errorMessage = 'Bad request. The image generation model may not be available for your account.';
        } else if (errorMessage.includes('model')) {
          errorMessage = 'The image generation model is not available. Please check if your API key has access to image generation features.';
        }
      }
      
      setError(errorMessage);
      console.error('Image generation error:', err);
      
      // Fallback: Create a text-based response image with error info
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');
        
        if (ctx) {
          // Fill background
          ctx.fillStyle = '#F7F4F1';
          ctx.fillRect(0, 0, 800, 600);
          
          // Add border
          ctx.strokeStyle = '#745E58';
          ctx.lineWidth = 4;
          ctx.strokeRect(10, 10, 780, 580);
          
          // Add title
          ctx.fillStyle = '#745E58';
          ctx.font = 'bold 24px Poppins, Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('AI Buffet Layout Generator', 400, 60);
          
          // Add error message
          ctx.font = '16px Poppins, Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#D32F2F';
          ctx.fillText('Image generation temporarily unavailable', 400, 120);
          
          // Add layout description based on user selections
          ctx.fillStyle = '#745E58';
          ctx.font = '14px Poppins, Arial, sans-serif';
          ctx.textAlign = 'left';
          
          const selectedInfo = [
            `Selected Keywords: ${state?.selectedKeywords?.join(', ') || 'None'}`,
            `Selected Colors: ${state?.selectedColors?.join(', ') || 'None'}`,
            `Selected Countries: ${state?.selectedCountries?.join(', ') || 'None'}`,
            '',
            'Suggested Buffet Layout:',
            '• Arrange serving dishes in order of cuisine type',
            '• Place cold items on the left, warm items on the right',
            '• Use the selected color scheme for table linens',
            '• Incorporate decorative elements matching your keywords',
            '• Ensure proper spacing between serving stations',
            '• Add appropriate lighting to highlight food presentation'
          ];
          
          let y = 180;
          selectedInfo.forEach(line => {
            ctx.fillText(line, 30, y);
            y += 20;
          });
          
          // Convert canvas to data URL
          const dataUrl = canvas.toDataURL('image/png');
          setGeneratedImage(dataUrl);
        }
      } catch (canvasError) {
        console.error('Failed to create fallback image:', canvasError);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = async () => {
    if (!generatedImage) return;

    try {
      let downloadUrl = generatedImage;
      
      // If it's a data URL (base64), convert it to blob
      if (generatedImage.startsWith('data:')) {
        const response = await fetch(generatedImage);
        const blob = await response.blob();
        downloadUrl = window.URL.createObjectURL(blob);
      }
      
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'gemini-buffet-layout.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up object URL if we created one
      if (downloadUrl !== generatedImage) {
        window.URL.revokeObjectURL(downloadUrl);
      }
    } catch (err) {
      console.error('Download error:', err);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const startOver = () => {
    navigate('/ai-generate/category');
  };

  if (!state) {
    return <div>Loading...</div>;
  }

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
            AI Generated Buffet Layout
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#745E58',
            fontWeight: '400',
            fontFamily: "'Poppins', sans-serif"
          }}>
            Based on your selections: {state.selectedKeywords?.join(', ')} • {state.selectedColors?.join(', ')} • {state.selectedCountries?.join(', ')}
          </p>
        </div>

        {/* 选择总结 */}
        <div style={{
          background: '#ECE5DF',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '40px',
          maxWidth: '600px',
          width: '100%'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <strong style={{ color: '#745E58' }}>Keywords: </strong>
            {state.selectedKeywords?.map(keyword => (
              <span key={keyword} style={{
                background: '#D9CBBF',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '12px',
                color: '#745E58',
                marginRight: '8px'
              }}>
                {keyword}
              </span>
            ))}
          </div>
          <div>
            <strong style={{ color: '#745E58' }}>Colors: </strong>
            {state.selectedColors?.map(color => (
              <span key={color} style={{
                background: '#D9CBBF',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '12px',
                color: '#745E58',
                marginRight: '8px'
              }}>
                {color}
              </span>
            ))}
          </div>
          <div>
            <strong style={{ color: '#745E58' }}>Countries: </strong>
            {state.selectedCountries?.map(country => (
              <span key={country} style={{
                background: '#D9CBBF',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '12px',
                color: '#745E58',
                marginRight: '8px'
              }}>
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* 生成按钮或结果 */}
        {!generatedImage && !isGenerating && (
          <button
            onClick={generateImage}
            style={{
              background: '#745E58',
              color: '#FFFFFF',
              border: 'none',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: '500',
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(116, 94, 88, 0.4)',
              marginBottom: '40px'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = '#8B6F69';
              (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
              (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(116, 94, 88, 0.6)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = '#745E58';
              (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
              (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(116, 94, 88, 0.4)';
            }}
          >
            🎨 Generate AI Buffet Layout
          </button>
        )}

        {/* 加载状态 */}
        {isGenerating && (
          <div style={{
            textAlign: 'center',
            padding: '60px',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            marginBottom: '40px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              border: '4px solid #ECE5DF',
              borderTop: '4px solid #745E58',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px auto'
            }}></div>
            <p style={{
              fontSize: '18px',
              color: '#745E58',
              fontWeight: '500'
            }}>
              AI is creating your perfect buffet layout...
            </p>
            <p style={{
              fontSize: '14px',
              color: '#A09590',
              marginTop: '8px'
            }}>
              Using Google Gemini • This may take 10-30 seconds
            </p>
          </div>
        )}

        {/* 错误状态 */}
        {error && (
          <div style={{
            background: '#FFE6E6',
            border: '1px solid #FF9999',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '40px',
            maxWidth: '600px',
            width: '100%',
            textAlign: 'center'
          }}>
            <p style={{ color: '#D32F2F', fontWeight: '500' }}>
              ❌ Generation failed: {error}
            </p>
            <button
              onClick={generateImage}
              style={{
                background: '#745E58',
                color: '#FFFFFF',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                cursor: 'pointer',
                marginTop: '12px'
              }}
            >
              Try Again
            </button>
          </div>
        )}

        {/* 生成的图片 */}
        {generatedImage && (
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              marginBottom: '24px'
            }}>
              <img
                src={generatedImage}
                alt="Generated buffet layout"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
            
            {/* 操作按钮 */}
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={downloadImage}
                style={{
                  background: '#4CAF50',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#45A049';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#4CAF50';
                }}
              >
                📥 Download Image
              </button>
              
              <button
                onClick={generateImage}
                style={{
                  background: '#D9CBBF',
                  color: '#000',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#C4B5A8';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#D9CBBF';
                }}
              >
                🔄 Generate New
              </button>
              
              <button
                onClick={startOver}
                style={{
                  background: 'transparent',
                  color: '#745E58',
                  border: '2px solid #745E58',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#745E58';
                  (e.target as HTMLButtonElement).style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = 'transparent';
                  (e.target as HTMLButtonElement).style.color = '#745E58';
                }}
              >
                🏠 Start Over
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CSS动画 */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ImageGeneration; 