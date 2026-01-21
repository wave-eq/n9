export interface Product {
  id: string
  name: string
  category: 'cyber-security' | 'artificial-intelligence' | 'drones' | 'anti-drone'
  categoryLabel: string
  slug: string
  tagline: string
  description: string
  problemSolved: string[]
  keyCapabilities: string[]
  howItWorks: { step: string; description: string }[]
  deployment: string[]
  industries: string[]
  faqs: { question: string; answer: string }[]
}

export const products: Product[] = [
  {
    id: 'iot-field-test-kit',
    name: 'IoT-Field Test Kit',
    category: 'cyber-security',
    categoryLabel: 'Cyber Security',
    slug: 'iot-field-test-kit',
    tagline: 'Field-deployable IoT security assessment platform',
    description: 'Comprehensive field testing solution designed for security professionals to assess, audit, and validate IoT device security in operational environments.',
    problemSolved: [
      'Identifies vulnerabilities in deployed IoT devices and networks',
      'Validates security posture of connected infrastructure',
      'Enables rapid security assessment without disrupting operations'
    ],
    keyCapabilities: [
      'Multi-protocol IoT device discovery and enumeration',
      'Real-time vulnerability scanning and assessment',
      'Network traffic analysis and anomaly detection',
      'Firmware extraction and analysis capabilities',
      'Automated security compliance checking',
      'Portable ruggedized hardware for field deployment'
    ],
    howItWorks: [
      { step: 'Discovery', description: 'Automatically identifies and maps all IoT devices within the target environment' },
      { step: 'Assessment', description: 'Performs comprehensive security testing across multiple attack vectors' },
      { step: 'Reporting', description: 'Generates detailed findings with remediation recommendations' }
    ],
    deployment: ['Field kit with ruggedized hardware', 'Air-gapped operation supported', 'On-premises deployment'],
    industries: ['Law Enforcement & Defense', 'Critical Infrastructure & Industrial', 'Telecommunications & Network Operators'],
    faqs: [
      { question: 'Can this be used in air-gapped environments?', answer: 'Yes, the IoT-Field Test Kit is designed for fully air-gapped operation with no external connectivity required.' },
      { question: 'What IoT protocols are supported?', answer: 'The kit supports major IoT protocols including MQTT, CoAP, Zigbee, BLE, LoRaWAN, and proprietary industrial protocols.' },
      { question: 'How long does a typical assessment take?', answer: 'Assessment duration varies based on environment size, typically ranging from 2-8 hours for comprehensive testing.' }
    ]
  },
  {
    id: 'fr-data-recovery-forensics-kit',
    name: 'FR-Data Recovery & Forensics Kit',
    category: 'cyber-security',
    categoryLabel: 'Cyber Security',
    slug: 'fr-data-recovery-forensics-kit',
    tagline: 'Mission-critical digital forensics and data recovery platform',
    description: 'Advanced forensic toolkit engineered for law enforcement and defense agencies to recover, preserve, and analyze digital evidence from diverse storage media.',
    problemSolved: [
      'Recovers data from damaged, encrypted, or deliberately wiped storage devices',
      'Maintains chain of custody and forensic integrity',
      'Accelerates investigation timelines with rapid analysis'
    ],
    keyCapabilities: [
      'Multi-format data recovery from HDD, SSD, mobile devices, and cloud storage',
      'Forensically sound imaging and preservation',
      'Advanced encryption breaking and password recovery',
      'Timeline analysis and artifact correlation',
      'Automated evidence cataloging and reporting',
      'Court-admissible documentation generation'
    ],
    howItWorks: [
      { step: 'Acquisition', description: 'Creates forensically sound images of target storage media' },
      { step: 'Analysis', description: 'Employs advanced algorithms to recover and analyze data artifacts' },
      { step: 'Documentation', description: 'Generates comprehensive reports maintaining chain of custody' }
    ],
    deployment: ['Portable field kit', 'Air-gapped secure environment', 'Lab-grade workstation configuration'],
    industries: ['Law Enforcement & Defense', 'Corporate Enterprises', 'BFSI & Compliance'],
    faqs: [
      { question: 'Is this admissible in court?', answer: 'Yes, all processes follow forensic best practices and generate documentation that meets legal admissibility standards.' },
      { question: 'Can it recover data from physically damaged devices?', answer: 'The kit includes specialized hardware and techniques for recovering data from physically damaged storage media.' },
      { question: 'What file systems are supported?', answer: 'Supports all major file systems including NTFS, ext4, APFS, HFS+, FAT, and proprietary embedded systems.' }
    ]
  },
  {
    id: 'aml-analyzer',
    name: 'AML Analyzer',
    category: 'cyber-security',
    categoryLabel: 'Cyber Security',
    slug: 'aml-analyzer',
    tagline: 'AI-powered anti-money laundering and financial crime detection',
    description: 'Intelligent platform designed for financial institutions to detect, investigate, and report suspicious financial activities and money laundering patterns.',
    problemSolved: [
      'Identifies complex money laundering schemes across multiple transactions',
      'Reduces false positives in transaction monitoring',
      'Ensures regulatory compliance with evolving AML requirements'
    ],
    keyCapabilities: [
      'Real-time transaction monitoring and pattern recognition',
      'AI-driven risk scoring and anomaly detection',
      'Network analysis for identifying criminal networks',
      'Automated suspicious activity report (SAR) generation',
      'Integration with core banking and payment systems',
      'Regulatory compliance tracking and audit trails'
    ],
    howItWorks: [
      { step: 'Ingestion', description: 'Continuously monitors transaction streams from multiple sources' },
      { step: 'Analysis', description: 'Applies machine learning models to identify suspicious patterns' },
      { step: 'Action', description: 'Alerts compliance teams and generates regulatory reports' }
    ],
    deployment: ['On-premises secure deployment', 'Private cloud option', 'API integration with existing systems'],
    industries: ['BFSI & Compliance', 'Corporate Enterprises'],
    faqs: [
      { question: 'How does it reduce false positives?', answer: 'Advanced machine learning models learn from historical data and analyst feedback to continuously improve detection accuracy.' },
      { question: 'What regulations does it support?', answer: 'Supports global AML regulations including FATF, FinCEN, EU AMLD, and regional compliance requirements.' },
      { question: 'Can it integrate with our existing systems?', answer: 'Yes, the platform offers flexible APIs and connectors for integration with core banking, payment, and compliance systems.' }
    ]
  },
  {
    id: 'mahadwar',
    name: 'Mahadwar',
    category: 'artificial-intelligence',
    categoryLabel: 'Artificial Intelligence',
    slug: 'mahadwar',
    tagline: 'Enterprise-grade AI gateway and orchestration platform',
    description: 'Secure AI gateway designed for enterprises to deploy, manage, and govern AI models across their organization with complete control and compliance.',
    problemSolved: [
      'Centralizes AI model deployment and access control',
      'Ensures data privacy and regulatory compliance for AI workloads',
      'Prevents AI model abuse and unauthorized access'
    ],
    keyCapabilities: [
      'Multi-model orchestration and load balancing',
      'Fine-grained access control and authentication',
      'Data residency and privacy enforcement',
      'Usage monitoring and cost allocation',
      'Prompt injection and abuse prevention',
      'Audit logging and compliance reporting'
    ],
    howItWorks: [
      { step: 'Gateway', description: 'Routes AI requests through secure, policy-enforced gateway' },
      { step: 'Governance', description: 'Applies security policies, data filters, and compliance rules' },
      { step: 'Monitoring', description: 'Tracks usage, costs, and potential security issues' }
    ],
    deployment: ['On-premises deployment', 'Private cloud', 'Hybrid configuration'],
    industries: ['Corporate Enterprises', 'BFSI & Compliance', 'Telecommunications & Network Operators'],
    faqs: [
      { question: 'Which AI models does it support?', answer: 'Mahadwar supports major LLMs including OpenAI, Anthropic, open-source models, and custom enterprise models.' },
      { question: 'How does it ensure data privacy?', answer: 'Data residency controls, PII filtering, and encryption ensure sensitive data never leaves your infrastructure.' },
      { question: 'Can it prevent prompt injection attacks?', answer: 'Yes, built-in security filters detect and block common prompt injection and jailbreak attempts.' }
    ]
  },
  {
    id: 'cognivest',
    name: 'CogniVest',
    category: 'artificial-intelligence',
    categoryLabel: 'Artificial Intelligence',
    slug: 'cognivest',
    tagline: 'AI-powered investment intelligence and risk assessment',
    description: 'Advanced AI platform engineered for financial institutions to analyze investment opportunities, assess risks, and generate actionable intelligence.',
    problemSolved: [
      'Processes vast amounts of financial data for investment insights',
      'Identifies hidden risks and market signals',
      'Accelerates due diligence and decision-making'
    ],
    keyCapabilities: [
      'Multi-source data aggregation and analysis',
      'Predictive risk modeling and scenario analysis',
      'Sentiment analysis from news and social media',
      'Portfolio optimization recommendations',
      'Regulatory and compliance risk assessment',
      'Automated research report generation'
    ],
    howItWorks: [
      { step: 'Data Collection', description: 'Aggregates data from financial markets, news, filings, and alternative sources' },
      { step: 'AI Analysis', description: 'Applies machine learning models to identify patterns and generate insights' },
      { step: 'Intelligence', description: 'Delivers actionable recommendations and risk assessments' }
    ],
    deployment: ['Secure on-premises deployment', 'Private cloud', 'API integration'],
    industries: ['BFSI & Compliance', 'Corporate Enterprises'],
    faqs: [
      { question: 'What data sources does it analyze?', answer: 'CogniVest analyzes market data, financial statements, news, regulatory filings, social media, and alternative data sources.' },
      { question: 'How accurate are the predictions?', answer: 'Models are continuously trained on historical data and validated against market outcomes, with transparent confidence scoring.' },
      { question: 'Is it suitable for institutional investors?', answer: 'Yes, designed specifically for institutional investors, hedge funds, and asset managers with enterprise-grade requirements.' }
    ]
  },
  {
    id: 'combat-drones',
    name: 'Combat Drones',
    category: 'drones',
    categoryLabel: 'Defense & Industrial UAV Systems',
    slug: 'combat-drones',
    tagline: 'Mission-critical tactical UAV systems for defense operations',
    description: 'Military-grade unmanned aerial systems engineered for reconnaissance, surveillance, and tactical operations in contested environments.',
    problemSolved: [
      'Provides real-time intelligence in high-risk operational areas',
      'Reduces personnel exposure to hostile environments',
      'Enables precision operations with minimal collateral impact'
    ],
    keyCapabilities: [
      'Long-endurance flight with extended operational range',
      'Advanced ISR (Intelligence, Surveillance, Reconnaissance) payloads',
      'Encrypted communication and anti-jamming capabilities',
      'Autonomous navigation and target tracking',
      'Modular payload integration',
      'Ruggedized design for harsh environments'
    ],
    howItWorks: [
      { step: 'Deployment', description: 'Rapid field deployment with minimal setup requirements' },
      { step: 'Mission Execution', description: 'Autonomous or operator-controlled mission execution with real-time data relay' },
      { step: 'Intelligence', description: 'Delivers actionable intelligence to command centers' }
    ],
    deployment: ['Field-deployable system', 'Mobile command and control unit', 'Training and support package'],
    industries: ['Law Enforcement & Defense'],
    faqs: [
      { question: 'What is the operational range?', answer: 'Operational parameters are mission-specific and provided under appropriate procurement channels.' },
      { question: 'Is training provided?', answer: 'Yes, comprehensive operator training and ongoing support are included with procurement.' },
      { question: 'What payloads are supported?', answer: 'Modular design supports various ISR payloads, sensors, and mission-specific equipment.' }
    ]
  },
  {
    id: 'disaster-response-drones',
    name: 'Disaster Response Drones',
    category: 'drones',
    categoryLabel: 'Defense & Industrial UAV Systems',
    slug: 'disaster-response-drones',
    tagline: 'Rapid deployment UAV systems for emergency response',
    description: 'Specialized unmanned aerial systems designed for search and rescue, disaster assessment, and emergency response operations.',
    problemSolved: [
      'Provides rapid situational awareness in disaster zones',
      'Locates survivors in inaccessible or hazardous areas',
      'Enables coordinated emergency response with real-time data'
    ],
    keyCapabilities: [
      'Thermal imaging and night vision capabilities',
      'Real-time video streaming to command centers',
      'Payload delivery for emergency supplies',
      'Rapid deployment in adverse weather conditions',
      'Autonomous search pattern execution',
      'Integration with emergency management systems'
    ],
    howItWorks: [
      { step: 'Rapid Deployment', description: 'Quick setup and launch in emergency scenarios' },
      { step: 'Search & Assessment', description: 'Autonomous or guided search with multi-sensor data collection' },
      { step: 'Coordination', description: 'Real-time data sharing with emergency response teams' }
    ],
    deployment: ['Portable field kit', 'Mobile command unit', 'Training for emergency personnel'],
    industries: ['Law Enforcement & Defense', 'Critical Infrastructure & Industrial'],
    faqs: [
      { question: 'Can it operate in severe weather?', answer: 'Designed for operation in challenging conditions including rain, wind, and low visibility scenarios.' },
      { question: 'What is the flight time?', answer: 'Extended flight time optimized for search operations, with hot-swappable battery systems for continuous coverage.' },
      { question: 'Does it integrate with existing emergency systems?', answer: 'Yes, compatible with standard emergency management and communication systems.' }
    ]
  },
  {
    id: 'critical-infrastructure-surveillance-drones',
    name: 'Critical Infrastructure Surveillance Drones',
    category: 'drones',
    categoryLabel: 'Defense & Industrial UAV Systems',
    slug: 'critical-infrastructure-surveillance-drones',
    tagline: 'Autonomous surveillance for critical infrastructure protection',
    description: 'Industrial-grade UAV systems engineered for continuous monitoring and security of critical infrastructure including power grids, pipelines, and facilities.',
    problemSolved: [
      'Enables continuous monitoring of vast infrastructure networks',
      'Detects security threats and infrastructure anomalies',
      'Reduces operational costs compared to manned patrols'
    ],
    keyCapabilities: [
      'Autonomous patrol route execution',
      'Multi-sensor inspection (visual, thermal, LiDAR)',
      'Anomaly detection and automated alerting',
      'Integration with existing security systems',
      'Long-endurance operation with automated charging',
      'Weather-resistant industrial design'
    ],
    howItWorks: [
      { step: 'Automated Patrol', description: 'Executes pre-programmed inspection routes autonomously' },
      { step: 'Detection', description: 'Identifies anomalies, intrusions, or infrastructure issues' },
      { step: 'Alert & Response', description: 'Notifies security teams with real-time data and location' }
    ],
    deployment: ['Fixed installation with automated charging', 'Mobile deployment option', 'Integration with security operations center'],
    industries: ['Critical Infrastructure & Industrial', 'Telecommunications & Network Operators'],
    faqs: [
      { question: 'How often does it need maintenance?', answer: 'Designed for minimal maintenance with automated diagnostics and scheduled service intervals.' },
      { question: 'Can it operate autonomously 24/7?', answer: 'Yes, with automated charging stations and redundant systems for continuous operation.' },
      { question: 'What types of infrastructure can it monitor?', answer: 'Suitable for power plants, substations, pipelines, telecom towers, industrial facilities, and perimeter security.' }
    ]
  },
  {
    id: 'drone-qkd-devices',
    name: 'Drone QKD Devices',
    category: 'drones',
    categoryLabel: 'Defense & Industrial UAV Systems',
    slug: 'drone-qkd-devices',
    tagline: 'Quantum-secure communication for UAV operations',
    description: 'Advanced quantum key distribution devices designed for UAV platforms to enable unhackable, quantum-secure communication channels.',
    problemSolved: [
      'Eliminates risk of communication interception or jamming',
      'Provides quantum-level security for sensitive operations',
      'Future-proofs UAV communications against emerging threats'
    ],
    keyCapabilities: [
      'Quantum key distribution for UAV-to-ground communication',
      'Integration with existing UAV platforms',
      'Real-time quantum-secure data transmission',
      'Lightweight and power-efficient design',
      'Resistance to electronic warfare and jamming',
      'Compliance with quantum security standards'
    ],
    howItWorks: [
      { step: 'Key Generation', description: 'Generates quantum encryption keys using QKD protocols' },
      { step: 'Secure Channel', description: 'Establishes quantum-secure communication link' },
      { step: 'Protected Transmission', description: 'All data transmitted with quantum-level encryption' }
    ],
    deployment: ['Modular integration with UAV platforms', 'Ground station equipment', 'Training and certification'],
    industries: ['Law Enforcement & Defense', 'Critical Infrastructure & Industrial'],
    faqs: [
      { question: 'What is quantum key distribution?', answer: 'QKD uses quantum mechanics principles to generate encryption keys that are theoretically impossible to intercept without detection.' },
      { question: 'Is it compatible with existing drones?', answer: 'Designed as a modular add-on compatible with major UAV platforms, subject to integration requirements.' },
      { question: 'What is the secure communication range?', answer: 'Range varies based on atmospheric conditions and platform specifications, detailed in technical documentation.' }
    ]
  },
  {
    id: 'anti-drone-devices',
    name: 'Anti-Drone Devices',
    category: 'anti-drone',
    categoryLabel: 'Anti-Drone Protection Technologies',
    slug: 'anti-drone-devices',
    tagline: 'Advanced counter-UAV systems for airspace protection',
    description: 'Comprehensive counter-drone platform designed to detect, identify, track, and neutralize unauthorized UAV threats in protected airspace.',
    problemSolved: [
      'Protects critical facilities from drone-based threats',
      'Detects and neutralizes unauthorized UAV activity',
      'Prevents espionage, smuggling, and attack scenarios'
    ],
    keyCapabilities: [
      'Multi-sensor detection (radar, RF, optical)',
      'Automated threat classification and tracking',
      'Multiple countermeasure options (jamming, takeover, kinetic)',
      'Integration with existing security infrastructure',
      '360-degree coverage with scalable deployment',
      'Minimal false positives with AI-driven identification'
    ],
    howItWorks: [
      { step: 'Detection', description: 'Multi-sensor array detects UAV presence in protected airspace' },
      { step: 'Classification', description: 'AI identifies threat level and UAV characteristics' },
      { step: 'Neutralization', description: 'Deploys appropriate countermeasure to neutralize threat' }
    ],
    deployment: ['Fixed installation for facility protection', 'Mobile deployment for temporary security', 'Integration with security operations center'],
    industries: ['Law Enforcement & Defense', 'Critical Infrastructure & Industrial', 'Corporate Enterprises'],
    faqs: [
      { question: 'What types of drones can it detect?', answer: 'Detects all classes of UAVs from small consumer drones to larger commercial and military platforms.' },
      { question: 'Is it legal to use?', answer: 'Deployment is subject to local regulations. We provide guidance on legal compliance for your jurisdiction.' },
      { question: 'What countermeasures are available?', answer: 'Multiple options including RF jamming, GPS spoofing, protocol takeover, and kinetic solutions based on threat and regulatory environment.' }
    ]
  }
]

export function getProductBySlug(category: string, slug: string): Product | undefined {
  return products.find(p => p.category === category && p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}
