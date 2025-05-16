# TECHIN510 Buffet Table Setting Design Project

## Overview
Buffet chefs in China's new first-tier or second-tier cities often struggle to meet the manager's standards for table settings. The absence of standardized references leads to time-consuming and costly trial-and-error iterations. Chefs may also lack formal design training or access to international design exposure.

This project aims to create a web platform that helps buffet chefs and managers quickly generate aesthetically pleasing buffet table layouts using AI, minimizing both food waste and effort.

## Target Users
- Buffet chefs seeking design guidance to improve table aesthetics.
- Buffet managers who need consistent and efficient buffet setups.
- Chefs without design training who want structured support to improve visual presentation.

## Features
- **AI Buffet Layout Generator**  
  Customize layout by selecting cuisine type, color palette, and event theme.
- **Download & Save**  
  Export generated buffet layouts for printing or reuse.
- **Beginner-Friendly Interface**  
  No design experience needed.
- **Responsive Design**  
  Usable on desktop and mobile devices.

## Setup Instructions
### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
git clone https://github.com/your-username/buffet-ai.git
cd buffet-ai
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

## Usage
1. Open browser at http://localhost:3000
2. Go to the AI Generator section.
3. Choose:
   - Cuisine type (e.g., Chinese, Western)
   - Color palette
   - Event theme (e.g., seasonal)
4. Click **Generate Layout**
5. Click **Download** to save the layout

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

