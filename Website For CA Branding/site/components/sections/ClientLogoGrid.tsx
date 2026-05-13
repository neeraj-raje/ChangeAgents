import Image from 'next/image'

const logos = [
  { src: '/assets/Clients/Accops.webp',                                  alt: 'Accops — Client of Change Agents' },
  { src: '/assets/Clients/Allied Telesis.webp',                          alt: 'Allied Telesis — Client of Change Agents' },
  { src: '/assets/Clients/Arcserve.webp',                                alt: 'Arcserve — Client of Change Agents' },
  { src: '/assets/Clients/Array Networks.webp',                          alt: 'Array Networks — Client of Change Agents' },
  { src: '/assets/Clients/Commvault.webp',                               alt: 'Commvault — Client of Change Agents' },
  { src: '/assets/Clients/Crayon New Logo Unit.webp',                    alt: 'Crayon — Client of Change Agents' },
  { src: '/assets/Clients/Eightfold.webp',                               alt: 'Eightfold — Client of Change Agents' },
  { src: '/assets/Clients/EverestIMS logo.webp',                         alt: 'EverestIMS — Client of Change Agents' },
  { src: '/assets/Clients/Forcepoint.webp',                              alt: 'Forcepoint — Client of Change Agents' },
  { src: '/assets/Clients/Hitachi Systems India Private Limited.webp',   alt: 'Hitachi Systems India — Client of Change Agents' },
  { src: '/assets/Clients/iValue.webp',                                  alt: 'iValue — Client of Change Agents' },
  { src: '/assets/Clients/MAIT.webp',                                    alt: 'MAIT — Client of Change Agents' },
  { src: '/assets/Clients/Milestone.webp',                               alt: 'Milestone — Client of Change Agents' },
  { src: '/assets/Clients/R&M.webp',                                     alt: 'R&M — Client of Change Agents' },
  { src: '/assets/Clients/RAH New Logo.webp',                            alt: 'RAH Infotech — Client of Change Agents' },
  { src: '/assets/Clients/RARITAN.webp',                                 alt: 'Raritan — Client of Change Agents' },
  { src: '/assets/Clients/Radware.webp',                                 alt: 'Radware — Client of Change Agents' },
  { src: '/assets/Clients/Suse.webp',                                    alt: 'SUSE — Client of Change Agents' },
  { src: '/assets/Clients/TECHNOBIND.webp',                              alt: 'Technobind — Client of Change Agents' },
  { src: '/assets/Clients/Tenable.webp',                                 alt: 'Tenable — Client of Change Agents' },
  { src: '/assets/Clients/WatchGaurd.webp',                              alt: 'WatchGuard — Client of Change Agents' },
  { src: '/assets/Clients/WinMagic.webp',                                alt: 'WinMagic — Client of Change Agents' },
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
          />
        </div>
      ))}
    </div>
  )
}
