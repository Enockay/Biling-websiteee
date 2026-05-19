import { useState } from 'react'
import RoutersNavbar from '../components/routers/RoutersNavbar'
import RoutersHero from '../components/routers/RoutersHero'
import RoutersSteps from '../components/routers/RoutersSteps'
import RoutersFeatures from '../components/routers/RoutersFeatures'
import RoutersIPPools from '../components/routers/RoutersIPPools'
import TrialModal from '../components/TrialModal'
import DemoModal from '../components/DemoModal'
import SEO from '../components/SEO'

export default function RoutersPage() {
  const [modal, setModal] = useState(null)
  const openTrial = () => setModal('trial')
  const close = () => setModal(null)

  return (
    <div className="min-h-screen">
      <SEO
        title="MikroTik Auto-Configure &amp; Router Management"
        description="Add any MikroTik router in under 5 minutes with one auto-generated command. Manage hotspot, PPPoE, IP pools, and DHCP across all your sites from one dashboard."
        path="/routers"
      />
      <RoutersNavbar onTrial={openTrial} />
      <RoutersHero onTrial={openTrial} />
      <RoutersSteps />
      <RoutersFeatures />
      <RoutersIPPools />

      {modal === 'trial' && <TrialModal onClose={close} onSwitchToDemo={() => setModal('demo')} />}
      {modal === 'demo'  && <DemoModal  onClose={close} onSwitchToTrial={() => setModal('trial')} />}
    </div>
  )
}
