import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AdminAuthProvider } from './contexts/AdminAuthContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/immersive/FloatingActions.jsx';
import ProtectedAdminRoute from './components/ProtectedAdminRoute.jsx';

// HomePage is the landing route — kept eager for fast first paint.
import HomePage from './pages/HomePage.jsx';

// Everything else is code-split (loaded on demand) to keep the initial
// bundle small — admin pages especially (recharts/etc.) stay out of it.
const ExplorarPage = lazy(() => import('./pages/ExplorarPage.jsx'));
const ToursPage = lazy(() => import('./pages/ToursPage.jsx'));
const SobreNosotrosPage = lazy(() => import('./pages/SobreNosotrosPage.jsx'));
const GaleriaPage = lazy(() => import('./pages/GaleriaPage.jsx'));
const ServiciosPage = lazy(() => import('./pages/ServiciosPage.jsx'));
const CalendarioPage = lazy(() => import('./pages/CalendarioPage.jsx'));
const ContactoPage = lazy(() => import('./pages/ContactoPage.jsx'));

const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage.jsx'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard.jsx'));
const AdminReservationsPage = lazy(() => import('./pages/admin/AdminReservationsPage.jsx'));
const AdminClientsPage = lazy(() => import('./pages/admin/AdminClientsPage.jsx'));
const AdminToursPage = lazy(() => import('./pages/admin/AdminToursPage.jsx'));
const AdminLogisticsPage = lazy(() => import('./pages/admin/AdminLogisticsPage.jsx'));
const AdminPaymentsPage = lazy(() => import('./pages/admin/AdminPaymentsPage.jsx'));
const AdminCalendarPage = lazy(() => import('./pages/admin/AdminCalendarPage.jsx'));

// Lightweight fallback shown while a lazy route chunk loads.
const RouteFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-ink">
    <div className="h-9 w-9 animate-spin rounded-full border-2 border-white/15 border-t-gold" />
  </div>
);

// Layout wrapper that provides Header/Footer for pages that don't render them
// themselves (currently the HomePage). The inner pages already include their
// own Header/Footer, so they are routed directly to avoid duplication.
const PublicLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 flex flex-col">
      {children}
    </main>
    <Footer />
  </div>
);

// Floating WhatsApp / scroll-top — shown on every public page, hidden on admin.
const PublicFloating = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith('/admin')) return null;
  return <FloatingActions />;
};

function App() {
  return (
    <AdminAuthProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
        <Routes>
          {/* Home uses the layout (it has no Header/Footer of its own). The
              inner pages render their own Header/Footer, so route them directly. */}
          <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
          <Route path="/explorar" element={<ExplorarPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/calendario" element={<CalendarioPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />

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
        </Suspense>
        <PublicFloating />
        <Toaster position="top-right" richColors />
      </Router>
    </AdminAuthProvider>
  );
}

export default App;
