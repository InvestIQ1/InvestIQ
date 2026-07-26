import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const HomePage = lazy(() => 
  import('./pages/HomePage/HomePage')
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

function App() {
return(
  <Suspense fallback={<div>Завантаження</div>}>
    <Routes>
        <Route path="/" element={<AuthPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/report" element={<ReportPage />}/>
        <Route path="*" element={<ErrorPage />}/>
    </Routes>
  </Suspense>
)
}

export default App
