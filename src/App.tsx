import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { useAppSelector } from "./redux/dispatchHook";
import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { authFireBase } from "./firebase/firebase";
import { useAppDispatch } from "./redux/dispatchHook";
import { checkAuth } from "./redux/Auth/authOperation";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import type { Theme } from "./context/ThemeContext";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const PrivateRoute = lazy(() => import("./PrivateRoute"));

const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));

const ReportPage = lazy(() => import("./pages/ReportPage/ReportPage"));

const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

function AuthRedirect() {
  const user = useAppSelector((state) => state.auth.user);

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return <AuthPage />;
}

function App() {
const [theme, setTheme] = useState<Theme>(() => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
});


  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);


  const toggleTheme = () => {
    setTheme((current:string) => (current === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
  <ThemeContext.Provider value={{theme,toggleTheme}}>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      closeOnClick
      pauseOnHover
      theme={theme}
    />

    <Suspense fallback={<div>Завантаження</div>}>
      <Routes>
        <Route path="/" element={<AuthRedirect />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/report"
          element={
            <PrivateRoute>
              <ReportPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  </ThemeContext.Provider>
);
}

export default App;
