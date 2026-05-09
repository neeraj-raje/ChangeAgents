import Image from 'next/image'

const logos = [
  { src: '/assets/Clients/Accops.png',                                  alt: 'Accops' },
  { src: '/assets/Clients/Allied Telesis.png',                          alt: 'Allied Telesis' },
  { src: '/assets/Clients/Arcserve.png',                                alt: 'Arcserve' },
  { src: '/assets/Clients/Array Networks.png',                          alt: 'Array Networks' },
  { src: '/assets/Clients/Commvault.png',                               alt: 'Commvault' },
  { src: '/assets/Clients/Crayon New Logo Unit.png',                    alt: 'Crayon' },
  { src: '/assets/Clients/Eightfold.png',                               alt: 'Eightfold' },
  { src: '/assets/Clients/EverestIMS logo.png',                         alt: 'EverestIMS' },
  { src: '/assets/Clients/Forcepoint.png',                              alt: 'Forcepoint' },
  { src: '/assets/Clients/Hitachi Systems India Private Limited.png',   alt: 'Hitachi Systems' },
  { src: '/assets/Clients/iValue.png',                                  alt: 'iValue' },
  { src: '/assets/Clients/MAIT.png',                                    alt: 'MAIT' },
  { src: '/assets/Clients/Milestone.png',                               alt: 'Milestone' },
  { src: '/assets/Clients/R&M.png',                                     alt: 'R&M' },
  { src: '/assets/Clients/RAH New Logo.png',                            alt: 'RAH Infotech' },
  { src: '/assets/Clients/RARITAN.png',                                 alt: 'Raritan' },
  { src: '/assets/Clients/Radware.png',                                 alt: 'Radware' },
  { src: '/assets/Clients/Suse.png',                                    alt: 'SUSE' },
  { src: '/assets/Clients/TECHNOBIND.png',                              alt: 'Technobind' },
  { src: '/assets/Clients/Tenable.png',                                 alt: 'Tenable' },
  { src: '/assets/Clients/WatchGaurd.png',                              alt: 'WatchGuard' },
  { src: '/assets/Clients/WinMagic.png',                                alt: 'WinMagic' },
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
