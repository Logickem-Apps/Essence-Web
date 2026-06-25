import React from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AdminAuthProvider } from './contexts/AdminAuthContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Public Pages
import HomePage from './pages/HomePage.jsx';
import ExplorarPage from './pages/ExplorarPage.jsx';
import ToursPage from './pages/ToursPage.jsx';
import SobreNosotrosPage from './pages/SobreNosotrosPage.jsx';
import GaleriaPage from './pages/GaleriaPage.jsx';
import ServiciosPage from './pages/ServiciosPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';

// Admin Components & Pages
import ProtectedAdminRoute from './components/ProtectedAdminRoute.jsx';
import AdminLoginPage from './pages/admin/AdminLoginPage.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminReservationsPage from './pages/admin/AdminReservationsPage.jsx';
import AdminClientsPage from './pages/admin/AdminClientsPage.jsx';
import AdminToursPage from './pages/admin/AdminToursPage.jsx';
import AdminLogisticsPage from './pages/admin/AdminLogisticsPage.jsx';
import AdminPaymentsPage from './pages/admin/AdminPaymentsPage.jsx';
import AdminCalendarPage from './pages/admin/AdminCalendarPage.jsx';

// Layout wrapper for public pages to include Header and Footer
const PublicLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 flex flex-col">
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <AdminAuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes wrapped in Layout (ToursPage handles its own Header/Footer to support clean architecture) */}
          <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
          <Route path="/explorar" element={<PublicLayout><ExplorarPage /></PublicLayout>} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/sobre-nosotros" element={<PublicLayout><SobreNosotrosPage /></PublicLayout>} />
          <Route path="/galeria" element={<PublicLayout><GaleriaPage /></PublicLayout>} />
          <Route path="/servicios" element={<PublicLayout><ServiciosPage /></PublicLayout>} />
          <Route path="/contacto" element={<PublicLayout><ContactoPage /></PublicLayout>} />

          {/* Admin Redirect */}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

          {/* Admin Login (Unprotected) */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Admin Protected Routes */}
          <Route path="/admin/dashboard" element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          } />
          <Route path="/admin/reservas" element={
            <ProtectedAdminRoute>
              <AdminReservationsPage />
            </ProtectedAdminRoute>
          } />
          <Route path="/admin/clientes" element={
            <ProtectedAdminRoute>
              <AdminClientsPage />
            </ProtectedAdminRoute>
          } />
          <Route path="/admin/tours" element={
            <ProtectedAdminRoute>
              <AdminToursPage />
            </ProtectedAdminRoute>
          } />
          <Route path="/admin/logistica" element={
            <ProtectedAdminRoute>
              <AdminLogisticsPage />
            </ProtectedAdminRoute>
          } />
          <Route path="/admin/pagos" element={
            <ProtectedAdminRoute>
              <AdminPaymentsPage />
            </ProtectedAdminRoute>
          } />
          <Route path="/admin/calendario" element={
            <ProtectedAdminRoute>
              <AdminCalendarPage />
            </ProtectedAdminRoute>
          } />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </Router>
    </AdminAuthProvider>
  );
}

export default App;
