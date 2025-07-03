

<div align="center">
  <img src="https://img.shields.io/badge/Privacy-First-brightgreen" alt="Privacy First" />
  <img src="https://img.shields.io/badge/AI%2FML-TensorFlow.js-blue" alt="TensorFlow.js" />
  <img src="https://img.shields.io/badge/Serverless-100%25%20Frontend-orange" alt="Serverless" />
</div>

# 🤖 Agentic PDF QnA React SPA

<p align="center">
  <img src="https://user-images.githubusercontent.com/768052/273420011-2e2e7b7e-2e2e-4e2e-8e2e-2e2e7b7e2e2e.png" width="320" alt="PDF QnA Chat UI"/>
</p>

Welcome to the next generation of privacy-first, agentic web applications!<br>
<b>Agentic PDF QnA React SPA</b> lets you chat with your own PDF files using AI/ML—all in your browser, with zero data ever leaving your device.

---

## ✨ Features

🚀 **Agentic AI/ML QnA**<br>
Ask questions about your PDF using a real AI agent powered by TensorFlow.js and the `@tensorflow-models/qna` model. No backend, no cloud, no compromise.

📄 **PDF Upload & Extraction**<br>
Upload any PDF (up to 4MB), instantly extract its text, and start chatting with the content.

💬 **ChatGPT-like UI**<br>
Enjoy a beautiful, modern chat interface that feels just like ChatGPT—responsive, intuitive, and mobile-friendly.

🔒 **Privacy by Design**<br>
All processing happens in your browser. No data collection, no analytics, no cookies, no tracking. Your files and questions never leave your device.

🌍 **Serverless & Easy Deployment**<br>
Deploy to Vercel, Netlify, GitHub Pages, or any static host. No backend or server setup required.

📱 **Mobile Ready**<br>
Fully responsive for all device sizes.

---

## 🖼️ Demo

<p align="center">
  <img src="https://user-images.githubusercontent.com/768052/273420011-2e2e7b7e-2e2e-4e2e-8e2e-2e2e7b7e2e2e.png" width="500" alt="PDF QnA Chat Demo"/>
</p>

---

## 🗂️ Project Structure

```text
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

---

## 🚀 Getting Started

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

---

## 🧠 How It Works

1. **Upload a PDF**: Click the file input to select a PDF (max 4MB). The file is never uploaded to a server.
2. **Text Extraction**: The app extracts text from your PDF in the browser using a custom React hook.
3. **Ask Questions**: Type questions about the PDF content. The TensorFlow QnA model answers your questions, all locally.
4. **Privacy**: No data is sent to any server. All processing is done in your browser for maximum privacy.

---

## ☁️ Serverless Deployment

Deploy to any static host (Vercel, Netlify, GitHub Pages, etc.)—no backend needed. All AI/ML runs in the browser.

---

## 🔐 Privacy & Security

- **No Data Collection**: Your PDFs and questions never leave your device.
- **No Analytics**: No tracking, analytics, or cookies.
- **Open Source**: Review the code to verify privacy claims.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📄 License

MIT License