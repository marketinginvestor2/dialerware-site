# DialerWare Platform

The ultimate AI-powered dialing solution for high-velocity sales teams.

## Features

- **Conversational AI Agents**: Hyper-realistic voice bots for automated outreach.
- **Script Architect**: Generative AI tool to create high-conversion sales scripts using Google's Gemini API.
- **Real-Time Telemetry**: Advanced analytics for call volume and connection rates.
- **CRM Integration**: Seamless sync with major CRM platforms.

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **AI Integration**: Google GenAI SDK (Gemini 2.5 Flash, Gemini TTS)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A Google AI Studio API Key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dialerware.git
   cd dialerware
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API Key:
   ```
   API_KEY=your_google_ai_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

The artifacts will be generated in the `dist` directory.
