# Machine Forgetting

**Traces of programmed decay and the upheavals of entropy**

An interactive drawing application exploring the poetics of computational forgetting, autoregressive processes, and the necessity of forgetting in machine learning systems. The work embodies its own subject matter: form emerges through drawing, grows with gesture, decays as letters fade, and dissipates into nothingness. Draw with AI-generated text that fades over time, creating ephemeral traces of language and memory.

Powered by OpenAI (GPT-4, TTS-1) and p5.js.

Concept and programming by [Marlon Barrios Solano](https://marlonbarrios.github.io/)

## Concept

**Machine Forgetting** is an interactive installation that explores forgetting as a computational necessity. The work generates texts sparse, minimal, repetitive, existential—about computational forgetting, context windows, autoregressive sequences, token limits, memory constraints, and preprogrammed dissipation.

The work itself embodies the processes it describes: form emerges through drawing, grows with gesture and speed, decays as letters fade over time, and dissipates into nothingness. Each trace is temporary, each mark destined to disappear, mirroring the computational forgetting it contemplates.

Users draw by clicking and dragging, which plays the generated text as speech while rendering letters that fade over time. The drawing speed affects both font size and audio playback rate, creating a dynamic relationship between gesture, sound, and visual trace. Letters disappear after 15 seconds, leaving only ephemeral marks of what was once there.

## Features

### Multi-Language Support
- **30 Languages Available**: English, Spanish, French, German, Chinese, Japanese, Arabic, Portuguese, Russian, Hindi, Italian, Korean, Turkish, Polish, Dutch, Swedish, Norwegian, Danish, Finnish, Greek, Czech, Romanian, Hungarian, Bulgarian, Croatian, Serbian, Hebrew, Vietnamese, Indonesian, Thai, Malay
- **Language Menu**: Dropdown menu on the home page (top right) to select your preferred language
- **Fully Translated Interface**: All UI elements, instructions, status indicators, and system prompts adapt to the selected language
- **Language-Specific Text Generation**: Each language uses native system prompts in Beckett's style, ensuring culturally and linguistically appropriate content

### Text Generation
- **AI-Generated Text**: Uses GPT-4 to generate short texts (100-150 characters) about computational forgetting, autoregressive processes, and preprogrammed dissipation
- **Beckett-Style Writing**: Texts are sparse, minimal, repetitive, and existential, focusing on computational themes
- **Automatic Generation**: New text is automatically generated every 60 seconds
- **Manual Generation**: Press SPACEBAR to generate new text at any time
- **Status Indicators**: Visual feedback shows when text is generating, audio is generating, or when everything is ready to draw

### Drawing Experience
- **Click and Drag to Draw**: Click and drag to draw letters from the generated text
- **Dynamic Font Size**: Font size increases with drawing speed
- **Fading Letters**: Letters fade over 15 seconds, creating ephemeral traces
- **Cross Cursor**: Cursor changes to a cross for drawing, and hides when clicking and dragging
- **Speed-Based Playback**: Audio playback rate adjusts based on drawing speed

### Audio Experience
- **Text-to-Speech**: Generated texts are converted to speech using OpenAI TTS-1
- **Volume Control**: Vertical mouse position controls audio volume (lower = louder)
- **Playback Speed**: Drawing speed affects audio playback rate
- **Audio Pre-generation**: Audio is generated automatically when text is ready, ensuring immediate playback when drawing starts
- **Looping**: Audio loops while mouse is pressed and drawing

### Visual Elements
- **Home Page**: Landing page with title, subtitle, instructions, and credits
- **Dark/Light Mode**: Toggle between light and dark color schemes (top left button)
- **Minimal UI**: Clean, minimal interface with icon-only buttons
- **Status Indicators**: Bottom-center status messages show generation progress
- **Fading Traces**: Letters fade over time, emphasizing the ephemeral nature of memory

### Interaction
- **SPACEBAR**: Press to generate new text and start drawing (hides home page)
- **Click and Drag**: Draw letters while audio plays
- **Home Button**: Return to home page (appears after spacebar is pressed, top right)
- **Language Selection**: Use dropdown menu on home page (top right) to select language
- **Dark/Light Mode**: Toggle color scheme using button in top left
- **Vertical Movement**: Move mouse vertically to control audio volume
- **Drawing Speed**: Drawing speed affects font size and audio playback rate

## Setup

### Prerequisites
- Node.js (version 16 or later recommended)
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd entropic2_haiku-mondrian
```

2. Install dependencies:
```bash
npm install
```

3. Set your OpenAI API key:
   - Create a `.env` file in the root directory
   - Add your OpenAI API key: `VITE_OPENAI_KEY=your_api_key_here`

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173/`

## How to Use

### Getting Started
1. **Select Language**: Use the dropdown menu on the top right of the home page to select your preferred language
2. **Toggle Theme** (optional): Use the dark/light mode button in the top left to switch color schemes
3. **Generate Text**: Press the **SPACEBAR** to generate text and start drawing
4. **Draw**: Click and drag to draw letters while audio plays

### During Drawing
- **Volume Control**: Move mouse vertically to control audio volume
- **Speed Control**: Drawing speed affects font size and audio playback rate
- **Fading Letters**: Letters fade over 15 seconds, creating ephemeral traces
- **Status Indicator**: Bottom-center shows generation status

### Interaction Tips
- **Generate New Text**: Press SPACEBAR to generate new text
- **Return Home**: Click the home button (top right) to return to the home page
- **Change Language**: Use the language dropdown on the home page
- **Automatic Generation**: New text is automatically generated every 60 seconds

## Technologies Used

- **p5.js**: Creative coding framework for drawing and interaction
- **OpenAI GPT-4**: Advanced language model for text generation
- **OpenAI TTS-1**: Text-to-speech API for natural voice synthesis
- **Vite**: Development server and build tool

## Technical Details

### Text Generation
- Uses GPT-4 with temperature 0.5 for consistent, focused output
- System prompts are language-specific and request Beckett-style writing
- Texts focus on computational forgetting, autoregressive processes, context windows, token limits, and preprogrammed dissipation
- Generated texts are 100-150 characters, optimized for drawing

### Drawing System
- Letters are stored with position, angle, size, and creation timestamp
- Letters fade over 15 seconds using opacity mapping
- Font size is calculated based on drawing speed (distance between mouse positions)
- Drawing angle follows mouse movement direction with optional distortion

### Audio System
- Audio is pre-generated when text is ready, ensuring immediate playback
- Volume is controlled by vertical mouse position (inverted: lower Y = higher volume)
- Playback speed is calculated from mouse movement speed
- Audio loops while mouse is pressed and drawing

### Language Support
- **30 Languages**: Full support for major world languages
- **Complete Translations**: All UI elements, instructions, status messages, and system prompts are translated
- **Native System Prompts**: Each language uses culturally appropriate prompts in Beckett's style
- **Language-Aware Generation**: Text generation adapts to selected language

## Customization

You can customize various aspects of the installation:

- **System Prompts**: Modify the `systemPrompt` in the `translations` object for each language to change the style and focus of generated texts
- **Letter Lifespan**: Adjust `letterLifespan` (currently 15000ms) to change how long letters remain visible
- **Font Settings**: Modify `fontSizeMin` and font calculations to change letter sizes
- **Auto-Generation Interval**: Change the `setInterval` duration (currently 60000ms) to adjust automatic text generation frequency
- **Visual Styling**: Modify colors, fonts, sizes, and animation parameters throughout the code

## Credits

**Concept and programming by** [Marlon Barrios Solano](https://marlonbarrios.github.io/)

**Powered by** OpenAI (GPT-4, TTS-1) • p5.js

## License

MIT License

Copyright (c) 2024 Marlon Barrios Solano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
