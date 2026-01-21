export interface Service {
  id: string
  name: string
  category: 'cyber-security' | 'artificial-intelligence'
  categoryLabel: string
  slug: string
  tagline: string
  description: string
  whatYouGet: string[]
  engagementModel: { phase: string; description: string }[]
  whoItsFor: string[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    id: 'takedown-services',
    name: 'Takedown Services',
    category: 'cyber-security',
    categoryLabel: 'Cyber Security Services',
    slug: 'takedown-services',
    tagline: 'Rapid response to remove malicious digital content and infrastructure',
    description: 'Specialized service designed to identify, document, and remove malicious websites, phishing campaigns, brand impersonation, and other harmful digital content threatening your organization.',
    whatYouGet: [
      'Comprehensive threat identification and documentation',
      'Legal and technical takedown coordination',
      'Communication with hosting providers and registrars',
      'Evidence preservation for legal proceedings',
      'Post-takedown monitoring and verification',
      'Detailed incident reports and recommendations'
    ],
    engagementModel: [
      { phase: 'Intake', description: 'Receive threat details and assess scope of malicious activity' },
      { phase: 'Investigation', description: 'Document infrastructure, collect evidence, identify responsible parties' },
      { phase: 'Takedown Execution', description: 'Coordinate with providers, registrars, and platforms to remove content' },
      { phase: 'Verification & Reporting', description: 'Confirm removal, provide comprehensive documentation' }
    ],
    whoItsFor: ['BFSI & Compliance', 'Corporate Enterprises', 'Law Enforcement & Defense'],
    faqs: [
      { question: 'How quickly can content be taken down?', answer: 'Timeline varies based on hosting provider and jurisdiction, typically 24-72 hours for cooperative providers.' },
      { question: 'Do you handle international takedowns?', answer: 'Yes, we coordinate takedowns globally across multiple jurisdictions and hosting providers.' },
      { question: 'Is evidence preserved for legal action?', answer: 'Yes, all evidence is collected and preserved following forensic best practices for potential legal proceedings.' }
    ]
  },
  {
    id: 'corporate-due-diligence',
    name: 'Corporate Due Diligence',
    category: 'cyber-security',
    categoryLabel: 'Cyber Security Services',
    slug: 'corporate-due-diligence',
    tagline: 'Comprehensive cyber risk assessment for M&A and partnerships',
    description: 'In-depth cybersecurity assessment service designed for organizations evaluating mergers, acquisitions, partnerships, or vendor relationships to identify hidden cyber risks.',
    whatYouGet: [
      'Comprehensive security posture assessment',
      'Infrastructure and architecture review',
      'Data protection and privacy compliance evaluation',
      'Incident history and breach analysis',
      'Third-party risk assessment',
      'Executive summary with risk scoring and recommendations'
    ],
    engagementModel: [
      { phase: 'Scoping', description: 'Define assessment scope, access requirements, and timeline' },
      { phase: 'Assessment', description: 'Conduct technical reviews, interviews, and documentation analysis' },
      { phase: 'Analysis', description: 'Evaluate findings, quantify risks, and develop recommendations' },
      { phase: 'Reporting', description: 'Deliver comprehensive report with executive summary and technical details' }
    ],
    whoItsFor: ['Corporate Enterprises', 'BFSI & Compliance'],
    faqs: [
      { question: 'How long does an assessment take?', answer: 'Typical engagements range from 2-6 weeks depending on organization size and complexity.' },
      { question: 'Is this confidential?', answer: 'Yes, all assessments are conducted under strict NDA with secure handling of sensitive information.' },
      { question: 'What if critical issues are found?', answer: 'We provide immediate notification of critical findings with recommended mitigation strategies.' }
    ]
  },
  {
    id: 'trade-transaction-due-diligence',
    name: 'Trade & Transaction Due Diligence',
    category: 'cyber-security',
    categoryLabel: 'Cyber Security Services',
    slug: 'trade-transaction-due-diligence',
    tagline: 'Fraud detection and verification for high-value transactions',
    description: 'Specialized investigation service designed for financial institutions and corporations to verify legitimacy of trade transactions and identify potential fraud.',
    whatYouGet: [
      'Entity verification and background investigation',
      'Document authenticity assessment',
      'Financial trail analysis',
      'Sanctions and watchlist screening',
      'Counterparty risk assessment',
      'Detailed investigation report with risk rating'
    ],
    engagementModel: [
      { phase: 'Intake', description: 'Receive transaction details and identify verification requirements' },
      { phase: 'Investigation', description: 'Conduct multi-source investigation and verification' },
      { phase: 'Analysis', description: 'Assess findings, identify red flags, and quantify risk' },
      { phase: 'Reporting', description: 'Deliver comprehensive report with clear recommendation' }
    ],
    whoItsFor: ['BFSI & Compliance', 'Corporate Enterprises'],
    faqs: [
      { question: 'What types of transactions do you investigate?', answer: 'We investigate trade finance, large B2B transactions, international deals, and high-value contracts.' },
      { question: 'How quickly can you complete an investigation?', answer: 'Rush investigations can be completed in 48-72 hours, standard engagements within 1-2 weeks.' },
      { question: 'Do you operate internationally?', answer: 'Yes, we conduct investigations globally with local expertise in major markets.' }
    ]
  },
  {
    id: 'dataset-noise-reduction-annotation',
    name: 'Dataset Noise Reduction & Annotation',
    category: 'artificial-intelligence',
    categoryLabel: 'Artificial Intelligence Services',
    slug: 'dataset-noise-reduction-annotation',
    tagline: 'High-quality data preparation for AI model training',
    description: 'Professional data curation service designed to clean, annotate, and prepare datasets for machine learning model training with enterprise-grade quality.',
    whatYouGet: [
      'Automated and manual noise detection and removal',
      'Multi-format data annotation (images, text, audio, video)',
      'Quality assurance with multiple validation passes',
      'Custom annotation guidelines and taxonomy',
      'Secure data handling with confidentiality',
      'Delivery in standard ML formats'
    ],
    engagementModel: [
      { phase: 'Requirements', description: 'Define annotation requirements, quality standards, and taxonomy' },
      { phase: 'Pilot', description: 'Process sample dataset to validate approach and quality' },
      { phase: 'Production', description: 'Scale annotation with quality monitoring and feedback loops' },
      { phase: 'Delivery', description: 'Deliver cleaned, annotated dataset with quality metrics' }
    ],
    whoItsFor: ['Corporate Enterprises', 'BFSI & Compliance', 'Telecommunications & Network Operators'],
    faqs: [
      { question: 'What types of data can you annotate?', answer: 'We handle images, video, text, audio, sensor data, and specialized formats for various ML tasks.' },
      { question: 'How do you ensure quality?', answer: 'Multi-pass validation, inter-annotator agreement metrics, and quality audits ensure high-quality output.' },
      { question: 'Can you handle sensitive data?', answer: 'Yes, we operate under strict security protocols with on-premises options for highly sensitive datasets.' }
    ]
  },
  {
    id: 'prompt-engineering-training',
    name: 'Prompt Engineering & Training',
    category: 'artificial-intelligence',
    categoryLabel: 'Artificial Intelligence Services',
    slug: 'prompt-engineering-training',
    tagline: 'Expert guidance for effective AI model deployment and use',
    description: 'Specialized consulting and training service designed to help organizations maximize value from AI models through effective prompt engineering and best practices.',
    whatYouGet: [
      'Custom prompt templates for your use cases',
      'Hands-on training for technical and business teams',
      'Best practices documentation and guidelines',
      'Evaluation frameworks for prompt effectiveness',
      'Integration strategies for existing workflows',
      'Ongoing support and optimization'
    ],
    engagementModel: [
      { phase: 'Discovery', description: 'Understand your use cases, goals, and current AI usage' },
      { phase: 'Development', description: 'Create custom prompts, templates, and guidelines' },
      { phase: 'Training', description: 'Deliver hands-on training sessions for your teams' },
      { phase: 'Support', description: 'Provide ongoing optimization and best practice updates' }
    ],
    whoItsFor: ['Corporate Enterprises', 'BFSI & Compliance', 'Telecommunications & Network Operators'],
    faqs: [
      { question: 'Who should attend the training?', answer: 'Training is designed for technical teams, product managers, and business users working with AI models.' },
      { question: 'What AI models do you support?', answer: 'We work with major LLMs including GPT, Claude, Gemini, and open-source models.' },
      { question: 'Is this a one-time engagement?', answer: 'We offer both one-time training and ongoing support packages based on your needs.' }
    ]
  }
]

export function getServiceBySlug(category: string, slug: string): Service | undefined {
  return services.find(s => s.category === category && s.slug === slug)
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(s => s.category === category)
}
