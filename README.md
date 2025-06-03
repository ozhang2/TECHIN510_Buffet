# TECHIN510 Buffet Table Setting Design Project

## Overview
Buffet chefs in China's new first-tier or second-tier cities often struggle to meet the manager's standards for table settings. The absence of standardized references leads to time-consuming and costly trial-and-error iterations. Chefs may also lack formal design training or access to international design exposure.

This project aims to create a web platform that helps buffet chefs and managers quickly generate aesthetically pleasing buffet table layouts using **real AI technology (Google Gemini)**, minimizing both food waste and effort.

## Target Users
- Buffet chefs seeking design guidance to improve table aesthetics.
- Buffet managers who need consistent and efficient buffet setups.
- Chefs without design training who want structured support to improve visual presentation.

## Features
- **🎨 Real AI Buffet Layout Generator**  
  Uses Google Gemini AI to generate custom buffet layouts based on your selected keywords and color preferences.
- **🔄 Multi-Step Selection Process**  
  Choose style keywords (flower, romantic, cold food, etc.) and color palettes through an intuitive interface.
- **📥 Download & Save**  
  Export AI-generated buffet layouts as high-quality PNG files.
- **🎯 Beginner-Friendly Interface**  
  No design experience needed - just select preferences and let AI do the work.
- **📱 Responsive Design**  
  Usable on desktop and mobile devices.
- **⚡ Real-time Generation**  
  Generate unique layouts in 10-30 seconds using advanced AI.

## Setup Instructions
### Prerequisites
- Node.js (v18+)
- npm or yarn
- Google Gemini API Key (for AI image generation)

### Installation
```bash
git clone https://github.com/ozhang2/TECHIN510_Buffet.git
cd buffet-project-clean
npm install
```

### Google Gemini API Configuration
1. Get your API key from [Google AI Studio](https://ai.google.dev/)
2. Create a `.env` file in the project root:
```
REACT_APP_GEMINI_API_KEY=your-actual-api-key-here
```
3. Save the file and restart the development server

For detailed setup instructions, see [GEMINI_SETUP.md](./GEMINI_SETUP.md)

### Development
```bash
npm start
# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
```

## Usage
1. Open browser at http://localhost:3000
2. Navigate to **"Start AI Generate"**
3. Follow the multi-step process:
   - **Step 1**: Click search bar to see keyword options
   - **Step 2**: Select style keywords (flower, romantic, cold food, etc.)
   - **Step 3**: Choose from 9 different setting styles
   - **Step 4**: Pick your preferred color palette
   - **Step 5**: Click **"Generate AI Buffet Layout"**
4. Wait 10-30 seconds for Gemini to create your custom layout
5. **Download** the generated image or **Generate New** for variations

## Technical Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Styled-components + CSS-in-JS
- **Routing**: React Router v6
- **AI Integration**: Google Gemini AI API
- **Build Tool**: Create React App
- **Deployment**: Netlify

## AI Integration Details
- **Model**: Google Gemini 2.0 Flash
- **Image Generation**: Text-to-image with fallback support
- **Generation Time**: 10-30 seconds
- **Cost**: Usage-based pricing (check Google AI pricing)
- **Features**: Custom prompts, error handling, regeneration

## Project Progress
| Week | Progress |
|------|----------|
| 2    | Initial UI and AI model integration |
| 3–4  | Enhanced prompt inputs and generation logic |
| 5    | User testing and UI refinement |
| 6    | Final polish, mobile responsiveness, layout fixes |

## Known Issues
- Some AI images may lack detail for complex layouts
- Mobile downloads may occasionally fail
- Exported files are raster-only
- No login/authentication yet
- Subscription features are under consideration

## Client Code Review
**Client Meeting – May 16, 2025**  
Attendees: Xinyu Wang (Client), Oulu Zhang (Developer)
- Client reviewed UI and feature flow
- Suggested export gating and image optimization
- Approved current build with notes for future work

## Bug Fixes & Feedback Handling
- Fixed layout issues on mobile
- Improved image loading time
- Added consistent spacing across UI
- Reduced AI image generation delay

## Contact
**Developer:** Oulu Zhang  
📧 ouluzhang66@gmail.com

