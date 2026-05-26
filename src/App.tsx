import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/src/contexts/AuthContext";
import { Sidebar, GlobalHeader } from "@/src/components/Navigation";
import { useAuth } from "@/src/contexts/AuthContext";
import Loading from "@/src/components/ui/Loading";

// Pages
import { LandingPage } from "@/src/pages/LandingPage";
import { Login } from "@/src/pages/Login";
import { Booking } from "@/src/pages/Booking";
import { BookingSuccess } from "@/src/pages/BookingSuccess";
import { Dashboard } from "@/src/pages/Dashboards";
import { JobList } from "@/src/pages/JobList";
import { JobDetail } from "@/src/pages/JobDetail";
import { NewJob } from "@/src/pages/NewJob";
import { ScheduleManager } from "@/src/pages/ScheduleManager";
import { ClientList } from "@/src/pages/ClientList";
import { ClientDetail } from "@/src/pages/ClientDetail";
import { InvoiceList } from "@/src/pages/InvoiceList";
import { InvoicePayment } from "@/src/pages/InvoicePayment";
import { CalendarPage } from "@/src/pages/CalendarPage";
import { Packages } from "@/src/pages/Packages";

// Admin Pages
import { PricingManagement } from "@/src/pages/admin/PricingManagement";
import { AdminAccess } from "@/src/pages/admin/AdminAccess";
import { StaffList } from "@/src/pages/admin/StaffList";
import { MediaManager } from "@/src/pages/admin/MediaManager";

const AdminSettings = React.lazy(() =>
  import("@/src/pages/admin/AdminSettings").then(m => ({ default: m.default }))
);

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { profile } = useAuth();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} variant="sidebar" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <GlobalHeader onMenuClick={() => setSidebarOpen(true)} profile={profile} />
        <div className="flex-1 overflow-auto">
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/welcome" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />

              {/* Booking Routes */}
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking/success" element={<BookingSuccess />} />
              <Route path="/payment" element={<InvoicePayment />} />

              {/* Dashboard & Calendar */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/schedule" element={<ScheduleManager />} />

              {/* Job Routes */}
              <Route path="/jobs" element={<JobList />} />
              <Route path="/jobs/new" element={<NewJob />} />
              <Route path="/jobs/:id" element={<JobDetail />} />

              {/* Client Routes */}
              <Route path="/clients" element={<ClientList />} />
              <Route path="/clients/:id" element={<ClientDetail />} />

              {/* Invoice Routes */}
              <Route path="/invoices" element={<InvoiceList />} />

              {/* Packages */}
              <Route path="/packages" element={<Packages />} />

              {/* Admin Routes */}
              <Route path="/admin/pricing" element={<PricingManagement />} />
              <Route path="/admin/access" element={<AdminAccess />} />
              <Route path="/admin/staff" element={<StaffList />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
              <Route path="/admin/media" element={<MediaManager />} />

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;