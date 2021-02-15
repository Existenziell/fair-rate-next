import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-center border-t bg-gray-50 p-8">
        <div className="content text-xs">
          <p className="flex flex-row items-center">
            <span className="text-lg h-8 mr-1">&copy;</span>{' '}
            <span className="block h-6"><Link href="/"><a>FairRate</a></Link></span>
          </p>
          <p className="mb-2">Disclaimer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at mauris pretium, consectetur libero in, consectetur augue. Sed nec pharetra turpis. Etiam diam nunc, euismod sit amet ornare ac, convallis in ante. Quisque leo lorem, vestibulum non lorem et, imperdiet molestie est. Duis posuere, nunc sit amet porta pharetra, mauris sapien malesuada lacus, at vestibulum urna dui vitae sem. Sed blandit laoreet mauris. Cras semper fermentum nunc, in varius eros ultricies in. In vel lorem sed lectus eleifend dignissim. Nullam vulputate augue non imperdiet efficitur.</p>
          <p><Link href="/privacy-policy"><a>Privacy Policy</a></Link></p>
        </div>
      </footer>
    </>
  )
}
