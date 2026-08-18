import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AdminLayout from "./components/layout/AdminLayout";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import JobsPage from "./pages/JobsPage";
import BlogPage from "./pages/BlogPage";
import CategoriesPage from "./pages/CategoriesPage";
import Analytics from "./pages/Analytics";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="jobs" element={<JobsPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
