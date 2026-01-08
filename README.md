# Satisfaction Survey Application (ระบบประเมินความพึงพอใจ)

Applications for collecting user satisfaction data regarding the Remote Rolling Shutter Door System. Built with **React** and **Vite**, featuring a modern, clean UI and a real-time statistical dashboard.

## 🌟 Features

- **Multi-Step Survey**: A user-friendly, paginated survey form covering General Info, Design, System Quality, Usability, and Usefulness.
- **Modern UI**: Clean, minimalist design using a Slate/Indigo color palette (`#f8fafc` background, `#4f46e5` primary color).
- **Dashboard**: A comprehensive dashboard displaying:
  - Total respondents
  - Mean and Standard Deviation (S.D.) for overall satisfaction and specific categories.
  - Detailed breakdown per question.
- **Integration**: Fetches and submits data to Google Sheets via a custom API script.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile screens.

## 🛠 Technologies Used

- **Frontend**: React.js, Vite
- **Styling**: Vanilla CSS (Modular Architecture)
  - Global styles in `App.css`
  - Component-specific styles in `src/components/*.css`
- **Icons**: `react-icons` (FontAwesome)
- **Data Visualization**: Custom statistical components.

## 📂 Project Structure

```
src/
├── assets/             # Images (Screenshots, QR Codes)
├── components/         # React Components
│   ├── Dashboard.jsx   # Statistics Dashboard
│   ├── Header.jsx      # App Header
│   ├── Section*.jsx    # Survey Step Components
│   └── ...
├── services/           # API Handling (Google Sheets)
├── App.css             # Global Styles
└── main.jsx            # Entry Point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd satisfaction-survey
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📊 Dashboard Access

On the initial screen (Section 0), click the **"ดูสรุปผลการประเมิน (Dashboard)"** button to view real-time statistics of the survey results.

---

**Note**: This is a Demo version. The data shown in the dashboard may be fetched from a test Google Sheet.
