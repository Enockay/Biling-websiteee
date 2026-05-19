import { useState, useRef } from 'react'
import CreditsNavbar from '../components/credits/CreditsNavbar'
import CreditsHero from '../components/credits/CreditsHero'
import CreditsHowItWorks from '../components/credits/CreditsHowItWorks'
import CreditsWhyItMatters from '../components/credits/CreditsWhyItMatters'
import CreditsFooter from '../components/credits/CreditsFooter'
import TrialModal from '../components/TrialModal'
import DemoModal from '../components/DemoModal'
import SEO from '../components/SEO'

export default function CreditsPage() {
  const [modal, setModal] = useState(null)
  const howItWorksRef = useRef(null)

  const openTrial = () => setModal('trial')
  const close     = () => setModal(null)

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="Credit &amp; Balance Management for ISPs"
        description="Manage subscriber credits, top-ups, and package activations from one dashboard. Sub-admin credit controls with full audit trails built for African ISPs."
        path="/credits"
      />
      <CreditsNavbar onTrial={openTrial} />
      <CreditsHero onHowItWorks={scrollToHowItWorks} />
      <div ref={howItWorksRef}>
        <CreditsHowItWorks />
      </div>
      <CreditsWhyItMatters />
      <CreditsFooter />

      {modal === 'trial' && <TrialModal onClose={close} onSwitchToDemo={() => setModal('demo')} />}
      {modal === 'demo'  && <DemoModal  onClose={close} onSwitchToTrial={() => setModal('trial')} />}
    </div>
  )
}
