import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import TransactionStamps from './components/TransactionStamps'
import CreditsManagement from './components/CreditsManagement'
import AdminRoles from './components/AdminRoles'
import ChatSupport from './components/ChatSupport'
import RouterDashboard from './components/RouterDashboard'
import VendorManagement from './components/VendorManagement'
import CTA from './components/CTA'
import Footer from './components/Footer'
import TrialModal from './components/TrialModal'
import DemoModal from './components/DemoModal'
import TransactionsPage from './pages/TransactionsPage'
import CreditsPage from './pages/CreditsPage'
import SupportPage from './pages/SupportPage'
import RoutersPage from './pages/RoutersPage'
import BillingPage from './pages/BillingPage'
import NotFoundPage from './pages/NotFoundPage'
import SEO from './components/SEO'

function HomePage() {
  const [modal, setModal] = useState(null)
  const openTrial = () => setModal('trial')
  const openDemo  = () => setModal('demo')
  const close     = () => setModal(null)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Blackie Networks',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Complete ISP billing platform for African ISPs — MikroTik management, M-Pesa payments, and subscriber tools.',
    url: 'https://blackienetworks.com',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KES', description: 'Free trial available' },
    featureList: ['MikroTik auto-configuration', 'M-Pesa STK push', 'Transaction tracking', 'Credit management', 'Hotspot & PPPoE billing'],
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="ISP Billing &amp; MikroTik Management for African ISPs"
        description="Blackie Networks is a complete ISP billing platform. Manage MikroTik routers, process M-Pesa payments, track transactions, and handle subscriber accounts — built for African ISPs."
        path="/"
        jsonLd={jsonLd}
      />
      <Navbar onTrial={openTrial} />
      <Hero onTrial={openTrial} onDemo={openDemo} />
      <Features />
      <TransactionStamps />
      <CreditsManagement />
      <AdminRoles />
      <ChatSupport />
      <RouterDashboard />
      <VendorManagement />
      <CTA onTrial={openTrial} onDemo={openDemo} />
      <Footer />

      {modal === 'trial' && <TrialModal onClose={close} onSwitchToDemo={() => setModal('demo')} />}
      {modal === 'demo'  && <DemoModal  onClose={close} onSwitchToTrial={() => setModal('trial')} />}
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/credits" element={<CreditsPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/routers" element={<RoutersPage />} />
      <Route path="/billing" element={<BillingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
