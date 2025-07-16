# Kaizen Assignment Frontend App

A pixel-perfect, responsive React application featuring a modern two-column layout with glassmorphism, a badge, and a claim form. This app is visually stunning, mobile-friendly, and easy to maintain.

## ✨ Features

- **Two-Column Responsive Layout**: Desktop and mobile optimized, with a glassmorphic left card and a claim form on the right.
- **Glassmorphism Effect**: The left panel uses a strong glass effect with blur and transparency.
- **SVG Badge**: A curved-text badge ("ONLY 6 SLOTS LEFT") overlapping the card.
- **Feature List**: Custom SVG icons and a list of key features (100% Confidential, No Win No Fee, Free Case Evaluation).
- **Claim Form**: Modern, accessible form with validation, styled inputs, and checkboxes for privacy and consent.


## 🖼️ Preview

![Screenshot](public/vite.svg) 

## 🚀 Tech Stack

- **React 18+** (Vite-powered)
- **CSS Modules** (CustomLayout.css, with CSS variables)
- **SVG for icons and badges**
- **Tailwind CSS** (for global resets and utility classes)

## 📁 Project Structure

```
kaizen-frontendApp/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ClaimForm.jsx
│   │   └── TwoColumnLayout.jsx
│   ├── CustomLayout.css
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🛠️ Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## 📝 Customization
- **Colors & Glass Effect:** Easily adjust colors and glassmorphism via CSS variables in `CustomLayout.css`.
- **Form Fields:** Edit `ClaimForm.jsx` to add or remove fields as needed.
- **Feature List & Badge:** Update the SVG or feature list in `TwoColumnLayout.jsx` for your campaign.

## 📦 Build for Production

```bash
npm run build
```

## 🙏 Credits
- Figma design inspiration and assets provided by the client.
- Built with ❤️ by the Kaizen Assignment team.

---

For questions or support, please open an issue or contact the maintainer.
