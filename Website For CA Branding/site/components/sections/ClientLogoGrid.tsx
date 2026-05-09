import Image from 'next/image'

const logos = [
  { src: '/assets/clients/Accops.png',                                  alt: 'Accops' },
  { src: '/assets/clients/Allied Telesis.png',                          alt: 'Allied Telesis' },
  { src: '/assets/clients/Arcserve.png',                                alt: 'Arcserve' },
  { src: '/assets/clients/Array Networks.png',                          alt: 'Array Networks' },
  { src: '/assets/clients/Commvault.png',                               alt: 'Commvault' },
  { src: '/assets/clients/Crayon New Logo Unit.png',                    alt: 'Crayon' },
  { src: '/assets/clients/Eightfold.png',                               alt: 'Eightfold' },
  { src: '/assets/clients/EverestIMS logo.png',                         alt: 'EverestIMS' },
  { src: '/assets/clients/Forcepoint.png',                              alt: 'Forcepoint' },
  { src: '/assets/clients/Hitachi Systems India Private Limited.png',   alt: 'Hitachi Systems' },
  { src: '/assets/clients/iValue.png',                                  alt: 'iValue' },
  { src: '/assets/clients/MAIT.png',                                    alt: 'MAIT' },
  { src: '/assets/clients/Milestone.png',                               alt: 'Milestone' },
  { src: '/assets/clients/R&M.png',                                     alt: 'R&M' },
  { src: '/assets/clients/RAH New Logo.png',                            alt: 'RAH Infotech' },
  { src: '/assets/clients/RARITAN.png',                                 alt: 'Raritan' },
  { src: '/assets/clients/Radware.png',                                 alt: 'Radware' },
  { src: '/assets/clients/Suse.png',                                    alt: 'SUSE' },
  { src: '/assets/clients/TECHNOBIND.png',                              alt: 'Technobind' },
  { src: '/assets/clients/Tenable.png',                                 alt: 'Tenable' },
  { src: '/assets/clients/WatchGaurd.png',                              alt: 'WatchGuard' },
  { src: '/assets/clients/WinMagic.png',                                alt: 'WinMagic' },
]

export default function ClientLogoGrid() {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-8 mt-10">
      {logos.map((logo) => (
        <div key={logo.alt} className="flex items-center justify-center h-10">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={40}
            className="h-10 w-auto object-contain grayscale opacity-50 hover:opacity-90 transition-opacity duration-300"
            unoptimized
          />
        </div>
      ))}
    </div>
  )
}
