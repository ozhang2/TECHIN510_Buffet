# Google Gemini AI Integration Setup Guide

## Overview
The buffet layout generator now uses Google Gemini AI to generate custom buffet layout designs based on your selected keywords and color preferences.

## Setup Instructions

### 1. Get Google Gemini API Key
1. Visit [Google AI Studio](https://ai.google.dev/)
2. Sign in with your Google account
3. Click "Get API key" or "Create API key"
4. Create a new project if needed
5. Copy the generated API key

### 2. Configure Environment Variables
1. Create a `.env` file in the project root directory
2. Add your Gemini API key:
```
REACT_APP_GEMINI_API_KEY=your-actual-api-key-here
```
3. Save the file

### 3. Important Notes
- **API Key Security**: Never commit your `.env` file to version control
- **Costs**: Gemini API has usage-based pricing - check [Google AI pricing](https://ai.google.dev/pricing)
- **Rate Limits**: Google AI has rate limits, so don't generate too many images quickly
- **Image Quality**: Using Gemini 2.0 Flash model with fallback text generation

### 4. Testing
1. Start the development server: `npm start`
2. Navigate to the AI Generate section
3. Select keywords and colors
4. Click "Generate AI Buffet Layout"
5. The system will use real AI to create a custom buffet layout

### 5. Error Handling
If you see errors:
- **"Gemini API key not found"**: Make sure your `.env` file is configured correctly
- **"API request failed"**: Check your API key validity and account quota
- **"Image generation not available"**: The system will fallback to text-based layout suggestions
- **Network errors**: Ensure you have internet connection

### 6. Image Generation Support
**Note**: As of current implementation, Google Gemini's image generation capabilities may be limited or require special access. The system includes:
- **Primary**: Attempts to use Gemini's image generation API
- **Fallback**: Creates text-based layout descriptions with visual presentation
- **Graceful degradation**: Always provides useful output even if image generation fails

### 7. Fallback Behavior
If image generation is not available, the system will:
1. Generate detailed text descriptions of your buffet layout
2. Create a visual text-based response image
3. Provide specific suggestions based on your selected keywords and colors
4. Maintain the same user experience with download functionality

## API Details
- **Model**: Gemini 2.0 Flash (primary)
- **Fallback**: Text generation with visual formatting
- **Response Format**: Base64 encoded images or generated canvas images
- **Features**: Download functionality, regeneration, error handling, graceful fallbacks

## Cost Estimation
- Gemini API pricing varies by usage
- Check current pricing at [Google AI Pricing](https://ai.google.dev/pricing)
- Images are generated only when user clicks the generate button
- No background or automatic generations

## Troubleshooting

### Common Issues
1. **"Failed to generate image"**
   - This is normal - the system will provide text-based alternatives
   - Your layout suggestions will still be generated

2. **API Key Issues**
   - Ensure the key is correctly formatted in `.env`
   - Make sure there are no extra spaces
   - Restart the development server after adding the key

3. **Network Problems**
   - Check your internet connection
   - Try generating again after a few moments
   - The system has built-in retry logic

### Getting Help
- Check the browser console for detailed error messages
- Review the network tab for API call details
- Ensure your Google AI account has sufficient quota 