import { Navigate, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import { useAppSelector } from "./redux/dispatchHook"
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authFireBase } from "./firebase/firebase";
import { useAppDispatch } from "./redux/dispatchHook";
import { checkAuth } from "./redux/Auth/authOperation";


const HomePage = lazy(() => 
  import('./pages/HomePage/HomePage')
)

const PrivateRoute = lazy(() => 
  import('./PrivateRoute')
)


const AuthPage = lazy(() => 
  import('./pages/AuthPage/AuthPage')
)

const ReportPage = lazy(() => 
  import('./pages/ReportPage/ReportPage')
)

const ErrorPage = lazy(() => 
  import('./pages/ErrorPage/ErrorPage')
)

function AuthRedirect() {
  const user = useAppSelector((state) => state.auth.user);

  if(user){
    return <Navigate to="/home" replace />;
  }

  return <AuthPage />;
}



function App() {
  const dispatch = useAppDispatch()
useEffect(()=>{
  dispatch(checkAuth());
},[]);
return(
  <Suspense fallback={<div>Завантаження</div>}>
    <Routes>
        <Route path="/" element={<AuthRedirect />}/>
        <Route path="/home" element={ 
            <PrivateRoute>
              <HomePage />
            </PrivateRoute> 
          }
          />
        <Route path="/report" element={
          <PrivateRoute>
          <ReportPage />
          </PrivateRoute>
          }
          />
        <Route path="*" element={<ErrorPage />}/>
    </Routes>
  </Suspense>
)
}

export default App
