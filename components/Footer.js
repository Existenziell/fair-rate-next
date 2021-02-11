import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-center border-t bg-gray-50 p-8">
        <div className="content">
          <p className="mb-4"><strong><span>&copy;</span>FairRate</strong></p>
          <p className="mb-2">25ᵃ Avenida Nte. 473, Centro, 77600 San Miguel de Cozumel, Quintana Roo, Mexico</p>
          <p>Disclaimer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at mauris pretium, consectetur libero in, consectetur augue. Sed nec pharetra turpis. Etiam diam nunc, euismod sit amet ornare ac, convallis in ante. Quisque leo lorem, vestibulum non lorem et, imperdiet molestie est. Duis posuere, nunc sit amet porta pharetra, mauris sapien malesuada lacus, at vestibulum urna dui vitae sem. Sed blandit laoreet mauris. Cras semper fermentum nunc, in varius eros ultricies in. In vel lorem sed lectus eleifend dignissim. Nullam vulputate augue non imperdiet efficitur.</p>
        </div>
      </footer>
      <style jsx>{`
        p {
          font-size: 0.75rem;
        }
        span {
          position: relative;
          top: 2px;
          margin-right: 4px;
        }
      `}</style>
    </>
  )
}
