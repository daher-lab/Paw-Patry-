import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import FaqPage from "./pages/FaqPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomeView";
import MembershipsPage from "./pages/MembershipsPage";
import OwnerFeedback from "./pages/OwnerFeedback";
import PortalPage from "./pages/PortalPage";
import RulesPage from "./pages/RulesPage";
import TeamPage from "./pages/TeamPage";
import LegalPage from "./pages/LegalPage";
import ReviewPage from "./pages/ReviewPage";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="memberships" element={<MembershipsPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="portal" element={<PortalPage />} />
          <Route path="careers" element={<TeamPage />} />
          <Route path="hiring" element={<Navigate to="/careers" replace />} />
          <Route path="team" element={<Navigate to="/careers" replace />} />
          <Route path="owner/feedback" element={<OwnerFeedback />} />
          <Route path="feedback" element={<ReviewPage />} />
          <Route path="review" element={<Navigate to="/feedback" replace />} />
          <Route path="join" element={<Navigate to="/memberships" replace />} />
          <Route path="privacy" element={<Navigate to="/legal/privacy" replace />} />
          <Route path="terms" element={<Navigate to="/legal/terms" replace />} />
          <Route path="copyright" element={<Navigate to="/legal/copyright" replace />} />
          <Route path="cancellation" element={<Navigate to="/legal/cancellation" replace />} />
          <Route path="legal/:slug" element={<LegalPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
