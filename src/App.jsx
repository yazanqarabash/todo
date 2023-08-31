import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import PrivateRoutes from "./components/PrivateRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<Layout handleDrawerToggle={handleDrawerToggle} />}
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoutes />}>
              <Route
                index
                element={
                  <Home
                    handleDrawerToggle={handleDrawerToggle}
                    mobileOpen={mobileOpen}
                  />
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
