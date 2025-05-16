# TECHIN510 Buffet Table Setting Design Project

## Overview
Buffet chefs in China's new first-tier or second-tier cities often struggle to meet the manager's standards for table settings. The absence of standardized references leads to time-consuming and costly trial-and-error iterations. Chefs may also lack formal design training or access to international design exposure.

This project aims to create a web platform that helps buffet chefs and managers quickly generate aesthetically pleasing buffet table layouts using AI, minimizing both food waste and effort.

## Target Users
- Buffet chefs seeking design guidance to improve table aesthetics.
- Buffet managers who need consistent and efficient buffet setups.
- Chefs without design training who want structured support to improve visual presentation.

## Key Features
**AI Buffet Layout Generator:** Customize buffet setup images by selecting:
- Cuisine type (e.g., Chinese, Western)
- Color palette
- Event theme (e.g., seasonal, holiday)

**Download & Save:** Users can export generated layouts for reference or print.

**Beginner-Friendly Interface:** No design experience required.

**Responsive Design:** Usable on desktop and mobile devices.

## Setup Instructions
### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- VS Code (optional, for development)

### Installation
Clone the repository:
```bash
git clone https://github.com/your-username/buffet-ai.git
cd buffet-ai
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
The app will be running at http://localhost:3000.

(Optional) To build for production:
```bash
npm run build
```

## Usage
1. Open the web app in a browser.
2. Navigate to the AI Generator section.
3. Input preferences:
   - Select cuisine type
   - Choose a color palette
   - Select a theme or event type
4. Click **Generate Layout** to preview image.
5. Click **Download** to save the output.

## UI & Layout Notes
### AI Generate Section
- Title, description, and CTA button aligned left.
- Hero image (`chef-image.jpg`) offset to the left for staggered layout.
- Banner background: `#EFEFEF`, full-width responsive design.

## Project Timeline & Progress
| Week | Progress Summary |
|------|-----------------|
| 2    | UI framework established; integrated initial AI model |
| 3–4  | Improved prompt input; enhanced image generation pipeline |
| 5    | User testing underway; interface refinements in progress |
| 6    | Preparing final demo; polishing layout, responsiveness, and visuals |

## Meeting Notes & Updates
### Client Meeting – April 18, 2025
**Attendees:** Xinyu Wang (Client), Oulu Zhang (Developer)

**Key Points:**
- Ensure consistent Auto Layout in all components.
- Optimize image loading and placement (AI-generated or stock).
- Discussed gated features for AI generation (e.g., export, history).
- Next: finalize visual polish and propose subscription feature set.

## Known Issues
- AI-generated images may occasionally lack layout precision for complex event types.
- Image download on some mobile devices may not trigger automatically.
- Exported images are currently rasterized (non-editable).
- No backend authentication – all features are open-access for now.
- Subscription model under consideration, not yet implemented.

## Contact
Name: Oulu Zhang  
Email: ouluzhang66@gmail.com



