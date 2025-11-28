import "./App.css";
import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LegalNoticePage from "./pages/legal-notice";
import CookiesPolicyPage from "./pages/cookies-policy";
import PrivacyPolicyPage from "./pages/privacy-policy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aviso-legal" element={<LegalNoticePage />} />
        <Route path="/politica-cookies" element={<CookiesPolicyPage />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
