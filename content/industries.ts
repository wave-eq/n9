export interface Industry {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  challenges: string[]
  relevantProducts: string[]
  relevantServices: string[]
  caseStudy: {
    title: string
    challenge: string
    solution: string
    outcome: string
  }
}

export const industries: Industry[] = [
  {
    id: 'law-enforcement-defense',
    name: 'Law Enforcement & Defense',
    slug: 'law-enforcement-defense',
    tagline: 'Mission-critical solutions for national security and public safety',
    description: 'Engineered for defense agencies, law enforcement, and intelligence organizations requiring the highest levels of security, reliability, and operational capability.',
    challenges: [
      'Securing sensitive operations against sophisticated adversaries',
      'Rapid intelligence gathering in contested or hostile environments',
      'Maintaining operational security and chain of custody',
      'Adapting to evolving threats and attack vectors'
    ],
    relevantProducts: [
      'Combat Drones',
      'Disaster Response Drones',
      'Drone QKD Devices',
      'Anti-Drone Devices',
      'FR-Data Recovery & Forensics Kit',
      'IoT-Field Test Kit'
    ],
    relevantServices: [
      'Takedown Services',
      'Corporate Due Diligence'
    ],
    caseStudy: {
      title: 'Border Security Enhancement',
      challenge: 'A national border security agency needed to monitor vast, remote terrain for unauthorized crossings and smuggling activities.',
      solution: 'Deployed Critical Infrastructure Surveillance Drones with thermal imaging and automated patrol capabilities, integrated with existing command and control systems.',
      outcome: 'Achieved 24/7 monitoring coverage with 60% reduction in response time to border incidents and significant decrease in unauthorized activities.'
    }
  },
  {
    id: 'bfsi-compliance',
    name: 'BFSI & Compliance',
    slug: 'bfsi-compliance',
    tagline: 'Secure, compliant solutions for financial institutions',
    description: 'Designed for banks, financial institutions, and compliance teams requiring robust fraud detection, AML compliance, and risk management capabilities.',
    challenges: [
      'Detecting sophisticated financial crimes and money laundering',
      'Meeting evolving regulatory compliance requirements',
      'Assessing counterparty and transaction risks',
      'Protecting against cyber threats and data breaches'
    ],
    relevantProducts: [
      'AML Analyzer',
      'CogniVest',
      'Mahadwar'
    ],
    relevantServices: [
      'Trade & Transaction Due Diligence',
      'Corporate Due Diligence',
      'Takedown Services'
    ],
    caseStudy: {
      title: 'AML Compliance Transformation',
      challenge: 'A regional bank struggled with high false positive rates in transaction monitoring, overwhelming compliance teams and delaying legitimate transactions.',
      solution: 'Implemented AML Analyzer with custom-trained models based on the bank\'s historical data and regional transaction patterns.',
      outcome: 'Reduced false positives by 75% while improving detection of actual suspicious activity, saving 1000+ compliance hours monthly.'
    }
  },
  {
    id: 'telecommunications-network-operators',
    name: 'Telecommunications & Network Operators',
    slug: 'telecommunications-network-operators',
    tagline: 'Infrastructure protection and intelligent operations',
    description: 'Built for telecom operators and network infrastructure providers requiring continuous monitoring, security, and operational intelligence.',
    challenges: [
      'Protecting vast, distributed network infrastructure',
      'Detecting and responding to network security threats',
      'Maintaining service availability and performance',
      'Managing AI workloads and data privacy'
    ],
    relevantProducts: [
      'Critical Infrastructure Surveillance Drones',
      'Anti-Drone Devices',
      'IoT-Field Test Kit',
      'Mahadwar'
    ],
    relevantServices: [
      'Dataset Noise Reduction & Annotation',
      'Prompt Engineering & Training'
    ],
    caseStudy: {
      title: 'Tower Infrastructure Monitoring',
      challenge: 'A national telecom operator needed to inspect thousands of remote cell towers for damage, theft, and unauthorized modifications.',
      solution: 'Deployed autonomous Critical Infrastructure Surveillance Drones with automated inspection routes and anomaly detection.',
      outcome: 'Reduced inspection costs by 70%, identified issues 5x faster, and prevented multiple theft incidents through early detection.'
    }
  },
  {
    id: 'critical-infrastructure-industrial',
    name: 'Critical Infrastructure & Industrial',
    slug: 'critical-infrastructure-industrial',
    tagline: 'Continuous protection for essential services',
    description: 'Engineered for operators of power grids, pipelines, manufacturing facilities, and other critical infrastructure requiring 24/7 monitoring and security.',
    challenges: [
      'Monitoring vast, geographically distributed assets',
      'Preventing physical and cyber security breaches',
      'Ensuring operational continuity and safety',
      'Responding rapidly to incidents and anomalies'
    ],
    relevantProducts: [
      'Critical Infrastructure Surveillance Drones',
      'Anti-Drone Devices',
      'IoT-Field Test Kit',
      'Disaster Response Drones'
    ],
    relevantServices: [
      'Corporate Due Diligence'
    ],
    caseStudy: {
      title: 'Power Grid Protection',
      challenge: 'An energy utility needed to protect substations and transmission infrastructure from drone-based reconnaissance and potential attacks.',
      solution: 'Installed Anti-Drone Devices at critical substations with 360-degree coverage and integration with security operations center.',
      outcome: 'Detected and neutralized 15+ unauthorized drone incursions in first year, preventing potential reconnaissance and sabotage.'
    }
  },
  {
    id: 'corporate-enterprises',
    name: 'Corporate Enterprises',
    slug: 'corporate-enterprises',
    tagline: 'Enterprise security and intelligent operations',
    description: 'Designed for large corporations requiring comprehensive cybersecurity, AI governance, and risk management across their operations.',
    challenges: [
      'Managing cyber risks across complex organizations',
      'Governing AI deployment and preventing misuse',
      'Conducting secure M&A and partnership due diligence',
      'Protecting facilities and intellectual property'
    ],
    relevantProducts: [
      'Mahadwar',
      'CogniVest',
      'Anti-Drone Devices',
      'AML Analyzer'
    ],
    relevantServices: [
      'Corporate Due Diligence',
      'Trade & Transaction Due Diligence',
      'Takedown Services',
      'Prompt Engineering & Training',
      'Dataset Noise Reduction & Annotation'
    ],
    caseStudy: {
      title: 'AI Governance Implementation',
      challenge: 'A Fortune 500 company needed to enable AI adoption across business units while maintaining data privacy and preventing misuse.',
      solution: 'Deployed Mahadwar as central AI gateway with policy enforcement, usage monitoring, and data residency controls.',
      outcome: 'Enabled safe AI adoption across 50+ business units, prevented 200+ policy violations, and achieved compliance with data regulations.'
    }
  }
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug)
}
