import { useState } from 'react'
import TransNavbar from '../components/transactions/TransNavbar'
import TransHero from '../components/transactions/TransHero'
import TransFeatures from '../components/transactions/TransFeatures'
import TransHowItWorks from '../components/transactions/TransHowItWorks'
import TransFooter from '../components/transactions/TransFooter'
import TrialModal from '../components/TrialModal'
import DemoModal from '../components/DemoModal'
import SEO from '../components/SEO'

export default function TransactionsPage() {
  const [modal, setModal] = useState(null)

  const openTrial = () => setModal('trial')
  const openDemo  = () => setModal('demo')
  const close     = () => setModal(null)

  return (
    <div className="min-h-screen">
      <SEO
        title="Transaction Management for ISPs"
        description="Track every subscriber payment, credit, and transaction in real time. Filter by router, admin, or date. Full transaction history and export tools for your ISP."
        path="/transactions"
      />
      <TransNavbar onTrial={openTrial} />
      <TransHero onDemo={openDemo} />
      <TransFeatures />
      <TransHowItWorks />
      <TransFooter />

      {modal === 'trial' && <TrialModal onClose={close} onSwitchToDemo={() => setModal('demo')} />}
      {modal === 'demo'  && <DemoModal  onClose={close} onSwitchToTrial={() => setModal('trial')} />}
    </div>
  )
}
