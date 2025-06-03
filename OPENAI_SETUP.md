# OpenAI DALL-E Integration Setup Guide

## Overview
The buffet layout generator now uses real OpenAI DALL-E API to generate custom buffet layout images based on your selected keywords and color preferences.

## Setup Instructions

### 1. Get OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com)
2. Sign up or log in to your account
3. Go to [API Keys](https://platform.openai.com/api-keys)
4. Click "Create new secret key"
5. Copy the generated API key (starts with `sk-`)

### 2. Configure Environment Variables
1. Create a `.env` file in the project root directory
2. Add your OpenAI API key:
```
REACT_APP_OPENAI_API_KEY=sk-your-actual-api-key-here
```
3. Save the file

### 3. Important Notes
- **API Key Security**: Never commit your `.env` file to version control
- **Costs**: DALL-E API charges per image generation (~$0.040 per image for DALL-E 3)
- **Rate Limits**: OpenAI has rate limits, so don't generate too many images quickly
- **Image Quality**: Using DALL-E 3 model with 1024x1024 resolution for best results

### 4. Testing
1. Start the development server: `npm start`
2. Navigate to the AI Generate section
3. Select keywords and colors
4. Click "Generate AI Buffet Layout"
5. The system will use real AI to create a custom buffet layout image

### 5. Error Handling
If you see errors:
- **"OpenAI API key not found"**: Make sure your `.env` file is configured correctly
- **"API request failed"**: Check your API key validity and account credits
- **Network errors**: Ensure you have internet connection

### 6. Backup Option
If you don't want to use OpenAI API (to avoid costs), you can revert to the previous Unsplash image selection by commenting out the OpenAI API code and uncommenting the Unsplash placeholder code in `src/components/ImageGeneration.tsx`.

## API Details
- **Model**: DALL-E 3
- **Image Size**: 1024x1024 pixels
- **Quality**: Standard
- **Response Format**: URL (image hosted by OpenAI temporarily)
- **Features**: Download functionality, regeneration, error handling

## Cost Estimation
- Each image generation costs approximately $0.040
- Images are generated only when user clicks the generate button
- No background or automatic generations 