import { useState } from 'react'
import SupportNavbar from '../components/support/SupportNavbar'
import SupportHero from '../components/support/SupportHero'
import SupportFeatures from '../components/support/SupportFeatures'
import SupportActions from '../components/support/SupportActions'
import SupportFooter from '../components/support/SupportFooter'
import TrialModal from '../components/TrialModal'
import DemoModal from '../components/DemoModal'
import SEO from '../components/SEO'

export default function SupportPage() {
  const [modal, setModal] = useState(null)
  const openTrial = () => setModal('trial')
  const openDemo  = () => setModal('demo')
  const close     = () => setModal(null)

  return (
    <div className="min-h-screen">
      <SEO
        title="Customer Support Tools for ISPs"
        description="Handle subscriber support tickets, live chat, and issue tracking built directly into your ISP billing platform. Never miss a customer request."
        path="/support"
      />
      <SupportNavbar onTrial={openTrial} />
      <SupportHero onDemo={openDemo} />
      <SupportFeatures />
      <SupportActions />
      <SupportFooter />

      {modal === 'trial' && <TrialModal onClose={close} onSwitchToDemo={() => setModal('demo')} />}
      {modal === 'demo'  && <DemoModal  onClose={close} onSwitchToTrial={() => setModal('trial')} />}
    </div>
  )
}
