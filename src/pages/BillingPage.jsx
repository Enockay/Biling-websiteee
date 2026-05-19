import { useState } from 'react'
import BillingNavbar from '../components/billing/BillingNavbar'
import BillingHero from '../components/billing/BillingHero'
import BillingFeatures from '../components/billing/BillingFeatures'
import BillingStkPush from '../components/billing/BillingStkPush'
import BillingCTAFooter from '../components/billing/BillingCTAFooter'
import TrialModal from '../components/TrialModal'
import DemoModal from '../components/DemoModal'
import SEO from '../components/SEO'

export default function BillingPage() {
  const [modal, setModal] = useState(null)
  const openTrial = () => setModal('trial')
  const close = () => setModal(null)

  return (
    <div className="min-h-screen">
      <SEO
        title="Vendor Billing &amp; M-Pesa STK Push"
        description="Monthly invoicing, M-Pesa STK push payments via Safaricom Daraja API, and sub-account financial separation. Platform billing that never surprises you."
        path="/billing"
      />
      <BillingNavbar onTrial={openTrial} />
      <BillingHero onTrial={openTrial} />
      <BillingFeatures />
      <BillingStkPush />
      <BillingCTAFooter onTrial={openTrial} />

      {modal === 'trial' && <TrialModal onClose={close} onSwitchToDemo={() => setModal('demo')} />}
      {modal === 'demo'  && <DemoModal  onClose={close} onSwitchToTrial={() => setModal('trial')} />}
    </div>
  )
}
