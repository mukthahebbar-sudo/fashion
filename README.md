<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Smart Outfit Suggestion

✨ **AI-Powered Fashion Assistant**

Crafting the perfect look for your mood, the weather, and every special moment. Tell us how you feel and where you're going, and we'll handle the style.

## 🌟 Features

- **Personalized Recommendations:** Generates entire outfits based on your current vibe, the occasion, and the outside world.
- **Detailed Styling:** Provides suggestions for attire (top & bottom), footwear, accents (accessories), and color palettes.
- **AI-Powered:** Utilizes Google's Gemini AI to deliver smart, trendy, and cohesive fashion choices.
- **Beautiful UI:** Built with an interactive, modern, and sleek user interface featuring Framer Motion and Tailwind CSS.
- **Stylist Notes:** Each suggestion comes with customized stylist tips and daily style wisdom.

## 🛠 Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide React
- **Build Tool:** Vite
- **AI Integration:** Google Gemini API (`@google/genai`)

## 🚀 Run Locally

**Prerequisites:** Node.js

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd smart-outfit-suggestion
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Copy `.env.example` to `.env` (or `.env.local`) and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the app:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```
