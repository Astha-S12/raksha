import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLayout from "../components/layout/PageLayout";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contacts from "../pages/Contacts/Contacts";
import Journey from "../pages/Journey/Journey";
import SOS from "../pages/SOS/SOS";
import Reports from "../pages/Reports/Reports";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Landing />
            </PageLayout>
          }
        />

        <Route
          path="/login"
          element={
            <PageLayout>
              <Login />
            </PageLayout>
          }
        />

        <Route
          path="/register"
          element={
            <PageLayout>
              <Register />
            </PageLayout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PageLayout>
              <Dashboard />
            </PageLayout>
          }
        />

        <Route
          path="/contacts"
          element={
            <PageLayout>
              <Contacts />
            </PageLayout>
          }
        />

        <Route
          path="/journey"
          element={
            <PageLayout>
              <Journey />
            </PageLayout>
          }
        />

        <Route
          path="/sos"
          element={
            <PageLayout>
              <SOS />
            </PageLayout>
          }
        />

        <Route
          path="/reports"
          element={
            <PageLayout>
              <Reports />
            </PageLayout>
          }
        />

        <Route
          path="/profile"
          element={
            <PageLayout>
              <Profile />
            </PageLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <PageLayout>
              <Settings />
            </PageLayout>
          }
        />

        <Route
          path="*"
          element={
            <PageLayout>
              <NotFound />
            </PageLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;