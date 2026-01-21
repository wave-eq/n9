export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about'
    },
    { 
      name: 'Products', 
      href: '/products',
      submenu: [
        {
          category: 'Cyber Security',
          items: [
            { name: 'IoT-Field Test Kit', href: '/products/cyber-security/iot-field-test-kit' },
            { name: 'FR-Data Recovery & Forensics Kit', href: '/products/cyber-security/fr-data-recovery-forensics-kit' },
            { name: 'AML Analyzer', href: '/products/cyber-security/aml-analyzer' },
          ]
        },
        {
          category: 'Artificial Intelligence',
          items: [
            { name: 'Mahadwar', href: '/products/artificial-intelligence/mahadwar' },
            { name: 'CogniVest', href: '/products/artificial-intelligence/cognivest' },
          ]
        },
        {
          category: 'Drones',
          items: [
            { name: 'Combat Drones', href: '/products/drones/combat-drones' },
            { name: 'Disaster Response Drones', href: '/products/drones/disaster-response-drones' },
            { name: 'Critical Infrastructure Surveillance Drones', href: '/products/drones/critical-infrastructure-surveillance-drones' },
            { name: 'Drone QKD Devices', href: '/products/drones/drone-qkd-devices' },
          ]
        },
        {
          category: 'Anti-Drone Systems',
          items: [
            { name: 'Anti-Drone Devices', href: '/products/anti-drone/anti-drone-devices' },
          ]
        }
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        {
          category: 'Cyber Security Services',
          items: [
            { name: 'Takedown Services', href: '/services/cyber-security/takedown-services' },
            { name: 'Corporate Due Diligence', href: '/services/cyber-security/corporate-due-diligence' },
            { name: 'Trade & Transaction Due Diligence', href: '/services/cyber-security/trade-transaction-due-diligence' },
          ]
        },
        {
          category: 'Artificial Intelligence Services',
          items: [
            { name: 'Dataset Noise Reduction & Annotation', href: '/services/artificial-intelligence/dataset-noise-reduction-annotation' },
            { name: 'Prompt Engineering & Training', href: '/services/artificial-intelligence/prompt-engineering-training' },
          ]
        }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      submenu: [
        {
          category: 'Industries',
          items: [
            { name: 'Law Enforcement & Defense', href: '/industries/law-enforcement-defense' },
            { name: 'BFSI & Compliance', href: '/industries/bfsi-compliance' },
            { name: 'Telecommunications & Network Operators', href: '/industries/telecommunications-network-operators' },
            { name: 'Critical Infrastructure & Industrial', href: '/industries/critical-infrastructure-industrial' },
            { name: 'Corporate Enterprises', href: '/industries/corporate-enterprises' },
          ]
        }
      ]
    },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  footer: {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    solutions: [
      { name: 'Products', href: '/products' },
      { name: 'Services', href: '/services' },
      { name: 'Industries', href: '/industries' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy-policy' },
      { name: 'Terms of Use', href: '/legal/terms-of-use' },
    ]
  }
}
