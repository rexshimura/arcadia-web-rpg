import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage'
import UpdatesPage from './pages/UpdatesPage'
import CommunityPage from './pages/CommunityPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/news" element={<UpdatesPage />} />
        <Route path="/hub" element={<CommunityPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
