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
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="memberships" element={<MembershipsPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="portal" element={<PortalPage />} />
          <Route path="hiring" element={<TeamPage />} />
          <Route path="team" element={<Navigate to="/hiring" replace />} />
          <Route path="owner/feedback" element={<OwnerFeedback />} />
          <Route path="join" element={<Navigate to="/memberships" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
