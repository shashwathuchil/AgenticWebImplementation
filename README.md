
# Agentic PDF QnA React SPA

This is a privacy-first, agentic single-page application (SPA) built with React.js. It enables users to upload PDF files and interact with their content using AI-powered question answering, all running locally in the browser. No data is ever sent to a server, ensuring complete privacy.

## Key Features

- **Agentic AI/ML QnA**: Uses TensorFlow.js and the `@tensorflow-models/qna` model to answer questions about your uploaded PDF. All AI/ML runs in your browser—no backend or cloud required.
- **PDF Upload & Extraction**: Upload a PDF (up to 4MB), extract its text, and chat with an AI agent about its content.
- **ChatGPT-like UI**: Modern, responsive chat interface for a seamless QnA experience.
- **Serverless & Private**: 100% serverless deployment—no data leaves your device. There is no data collection, tracking, or analytics.
- **Mobile Friendly**: Responsive design for all device sizes.

## Project Structure

```
AgenticWebImplementation
├── public
│   └── index.html
├── src
│   ├── App.jsx
│   ├── index.jsx
│   ├── customHooks
│   │   ├── pdfToText.js      # PDF text extraction hook
│   │   └── aiLogic.js        # TensorFlow QnA hook
│   ├── pages
│   │   └── Home.jsx          # Main chat UI
│   └── pages
│       └── Home.css          # ChatGPT-like styles
├── package.json
└── README.md
```

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd AgenticWebImplementation
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the application locally:**
   ```sh
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`.

## How It Works

1. **Upload a PDF**: Click the file input to select a PDF (max 4MB). The file is never uploaded to a server.
2. **Text Extraction**: The app extracts text from your PDF in the browser using a custom React hook.
3. **Ask Questions**: Type questions about the PDF content. The TensorFlow QnA model answers your questions, all locally.
4. **Privacy**: No data is sent to any server. All processing is done in your browser for maximum privacy.

## Serverless Deployment

This app is designed for static, serverless deployment. You can deploy it to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.) with zero backend configuration. All AI/ML runs in the browser.

## Privacy & Security

- **No Data Collection**: Your PDFs and questions never leave your device.
- **No Analytics**: No tracking, analytics, or cookies.
- **Open Source**: Review the code to verify privacy claims.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

MIT License