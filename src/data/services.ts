import type { Service } from '@/lib/types';

// Individual Services
export const individualServices: Service[] = [
  {
    id: '1',
    slug: 'tax-planning',
    category: 'individual',
    title: 'Tax Planning & Advisory',
    shortDescription:
      'Strategic tax planning to minimize your tax liability and maximize savings year-round',
    longDescription:
      'At Jacob Tax Solutions, our comprehensive tax planning services help you make informed financial decisions throughout the year. We provide strategic guidance tailored to Indian-American families to minimize your tax liability while ensuring full compliance with all regulations.',
    icon: 'calculator',
    features: [
      'Year-round tax strategy consultation',
      'Income tax optimization for H-1B and green card holders',
      'Deduction maximization strategies',
      'Investment tax planning',
      'Retirement planning guidance (401k, IRA, NPS)',
      'Estate and gift tax planning',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Initial Consultation',
        description:
          'We review your financial situation, income sources, and tax goals to understand your unique needs.',
      },
      {
        step: 2,
        title: 'Strategy Development',
        description:
          'Our experts at Jacob Tax Solutions create a customized tax plan tailored to your specific circumstances.',
      },
      {
        step: 3,
        title: 'Implementation',
        description:
          'We guide you through implementing the tax strategies and provide ongoing support.',
      },
      {
        step: 4,
        title: 'Monitoring & Adjustment',
        description:
          'Regular reviews ensure your tax plan remains optimized as your situation evolves.',
      },
    ],
  },
  {
    id: '2',
    slug: 'tax-returns',
    category: 'individual',
    title: 'Tax Return Services',
    shortDescription:
      'Professional evaluation and processing of individual tax returns with accuracy guarantee',
    longDescription:
      'Jacob Tax Solutions provides expert tax return preparation ensuring accuracy, compliance, and maximum refunds. Our IRS-certified professionals handle complex tax situations including multi-state filing, foreign income, and investment reporting with precision and care.',
    icon: 'file-text',
    features: [
      'Complete tax return preparation',
      'Federal and all 50 state tax filing',
      'Accuracy guarantee with audit support',
      'E-filing for faster refunds',
      'Form 1040 and all schedules',
      'Prior year amendments (up to 3 years)',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Document Collection',
        description:
          'Securely upload your W-2s, 1099s, and other tax documents through our encrypted portal.',
      },
      {
        step: 2,
        title: 'Return Preparation',
        description:
          'Our tax professionals at Jacob Tax Solutions prepare your return with meticulous attention to detail.',
      },
      {
        step: 3,
        title: 'Free Draft Review',
        description:
          'Review your completed draft within 24 hours and ask questions before final submission.',
      },
      {
        step: 4,
        title: 'E-Filing & Tracking',
        description:
          'We electronically file your return and provide real-time refund status tracking.',
      },
    ],
  },
  {
    id: '3',
    slug: 'itin-application',
    category: 'individual',
    title: 'ITIN Application Processing',
    shortDescription:
      'Individual Tax Identification Number processing by IRS-certified acceptance agents',
    longDescription:
      'Jacob Tax Solutions is an IRS-approved Certifying Acceptance Agent (CAA) specializing in obtaining US Individual Taxpayer Identification Numbers (ITINs) for all qualifying applicants. We help spouses, dependents, and individuals without SSNs get their ITIN quickly and hassle-free.',
    icon: 'user-check',
    features: [
      'ITIN application preparation (Form W-7)',
      'Document certification without mailing originals',
      'Dependent ITIN for spouse and children',
      'ITIN renewal services',
      'Family ITIN processing packages',
      'Expedited processing options available',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Eligibility Review',
        description:
          'We determine your eligibility and gather required documentation for your ITIN application.',
      },
      {
        step: 2,
        title: 'Application Preparation',
        description:
          'Complete Form W-7 preparation with all supporting documents.',
      },
      {
        step: 3,
        title: 'Document Certification',
        description:
          'As IRS-certified CAAs, Jacob Tax Solutions certifies your documents - no need to send originals to IRS.',
      },
      {
        step: 4,
        title: 'Submission & Follow-up',
        description:
          'We submit your application directly to IRS and track it until you receive your ITIN.',
      },
    ],
  },
  {
    id: '4',
    slug: 'fbar-fatca',
    category: 'individual',
    title: 'FBAR & FATCA Compliance',
    shortDescription:
      'Foreign account reporting compliance for NRIs and US residents with overseas accounts',
    longDescription:
      'Jacob Tax Solutions provides expert guidance on Foreign Bank Account Report (FBAR) and Foreign Account Tax Compliance Act (FATCA) requirements. Essential for Indian-Americans with NRE/NRO accounts, PPF, or other foreign financial accounts exceeding reporting thresholds.',
    icon: 'globe',
    features: [
      'FBAR filing (FinCEN 114) for accounts over $10,000',
      'FATCA Form 8938 preparation',
      'NRE/NRO account reporting',
      'PPF and Indian investment disclosure',
      'Penalty abatement assistance',
      'Streamlined filing procedures for late filers',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Account Assessment',
        description:
          'Review all foreign financial accounts including Indian bank accounts and investments.',
      },
      {
        step: 2,
        title: 'Data Collection',
        description:
          'Gather account statements and maximum balance information for the reporting year.',
      },
      {
        step: 3,
        title: 'Form Preparation',
        description:
          'Jacob Tax Solutions prepares FinCEN 114 and Form 8938 with accurate account details.',
      },
      {
        step: 4,
        title: 'Filing & Confirmation',
        description:
          'Submit reports electronically and provide confirmation receipts for your records.',
      },
    ],
  },
  {
    id: '5',
    slug: 'tax-extensions',
    category: 'individual',
    title: 'Tax Extension Filing',
    shortDescription:
      'Tax deadline extension assistance with proper estimated payment calculation',
    longDescription:
      'Need more time to file? Jacob Tax Solutions handles Form 4868 extensions giving you up to six additional months while ensuring compliance. We calculate any required estimated payments to help you avoid late filing penalties.',
    icon: 'clock',
    features: [
      'Form 4868 preparation and filing',
      'Federal extension (automatic 6-month)',
      'State extension coordination',
      'Estimated tax payment calculation',
      'Deadline tracking and reminders',
      'Penalty avoidance guidance',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Extension Request',
        description:
          'Contact Jacob Tax Solutions to determine extension needs and estimate tax liability.',
      },
      {
        step: 2,
        title: 'Form Filing',
        description:
          'We prepare and electronically file Form 4868 before the April deadline.',
      },
      {
        step: 3,
        title: 'Payment Processing',
        description:
          'Calculate and submit any required estimated tax payments to avoid penalties.',
      },
    ],
  },
  {
    id: '6',
    slug: 'tax-preparation',
    category: 'individual',
    title: 'Full Tax Preparation',
    shortDescription:
      'Comprehensive tax preparation and filing support for all income types',
    longDescription:
      'Jacob Tax Solutions provides complete tax preparation services from document collection to final filing. Perfect for salaried employees, self-employed individuals, rental property owners, and investors. Our experts handle complex situations with ease.',
    icon: 'briefcase',
    features: [
      'All income types (W-2, 1099, K-1, rental)',
      'Itemized vs standard deduction analysis',
      'Self-employment tax (Schedule C/SE)',
      'Rental property reporting (Schedule E)',
      'Investment income (stocks, crypto, dividends)',
      'Credits and deductions maximization',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Information Gathering',
        description:
          'Collect all tax documents including income statements, deduction receipts, and prior returns.',
      },
      {
        step: 2,
        title: 'Tax Interview',
        description:
          'Discuss life changes, new income sources, and deduction opportunities with our experts.',
      },
      {
        step: 3,
        title: 'Preparation & Review',
        description:
          'Jacob Tax Solutions prepares your return and provides a free draft within 24 hours.',
      },
      {
        step: 4,
        title: 'Filing & Support',
        description:
          'File electronically and receive year-round support for any tax questions.',
      },
    ],
  },
];

// Business Services
export const businessServices: Service[] = [
  {
    id: '7',
    slug: 'tax-return-planning',
    category: 'business',
    title: 'Business Tax Planning & Preparation',
    shortDescription:
      'Comprehensive business tax planning, preparation, and filing for all entity types',
    longDescription:
      'Jacob Tax Solutions provides expert business tax services for S-Corporations, LLCs, partnerships, and sole proprietorships. We handle complex tax situations including multi-state filing, payroll taxes, Form 1099 generation, and quarterly estimated payments to keep your business compliant.',
    icon: 'building',
    features: [
      'S-Corporation tax returns (Form 1120-S)',
      'LLC and Partnership returns (Form 1065)',
      'Corporate tax planning strategies',
      'Multi-state business filing',
      'Form 1099 preparation for contractors',
      'Quarterly estimated tax payments',
      'Payroll tax compliance',
      'Business expense deduction optimization',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Business Analysis',
        description:
          'Review your business structure, income, expenses, and current tax situation.',
      },
      {
        step: 2,
        title: 'Strategic Planning',
        description:
          'Jacob Tax Solutions develops tax-saving strategies specific to your business type and industry.',
      },
      {
        step: 3,
        title: 'Return Preparation',
        description:
          'Prepare accurate business tax returns with all required forms and schedules.',
      },
      {
        step: 4,
        title: 'Filing & Compliance',
        description:
          'File returns on time and ensure ongoing compliance with federal and state tax regulations.',
      },
      {
        step: 5,
        title: 'Year-Round Support',
        description:
          'Provide ongoing advisory services and represent you before the IRS if needed.',
      },
    ],
  },
  {
    id: '8',
    slug: 'bookkeeping',
    category: 'business',
    title: 'Bookkeeping Services',
    shortDescription:
      'Professional bookkeeping and financial record management for small businesses',
    longDescription:
      'Jacob Tax Solutions offers comprehensive bookkeeping services to keep your business finances organized year-round. Accurate books make tax time easier and help you make informed business decisions.',
    icon: 'book-open',
    features: [
      'Monthly bookkeeping and reconciliation',
      'QuickBooks setup and training',
      'Accounts payable/receivable management',
      'Bank and credit card reconciliation',
      'Financial statement preparation',
      'Year-end closing and adjustments',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Setup & Assessment',
        description:
          'Review your current bookkeeping system and set up organized processes.',
      },
      {
        step: 2,
        title: 'Monthly Processing',
        description:
          'Record transactions, reconcile accounts, and maintain accurate financial records.',
      },
      {
        step: 3,
        title: 'Reporting',
        description:
          'Provide monthly financial reports including P&L and balance sheet.',
      },
      {
        step: 4,
        title: 'Tax Preparation',
        description:
          'Year-end closing and preparation of books for tax filing.',
      },
    ],
  },
  {
    id: '9',
    slug: 'business-formation',
    category: 'business',
    title: 'Business Formation',
    shortDescription:
      'LLC, S-Corp, and business entity formation with tax optimization guidance',
    longDescription:
      'Starting a business? Jacob Tax Solutions helps you choose the right entity structure (LLC, S-Corp, C-Corp) and handles all formation paperwork. We provide tax optimization guidance to set your business up for success from day one.',
    icon: 'briefcase',
    features: [
      'Entity type selection guidance',
      'LLC formation and operating agreements',
      'S-Corporation election (Form 2553)',
      'EIN application',
      'State registration and compliance',
      'Initial tax planning and setup',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation',
        description:
          'Discuss your business goals and recommend the optimal entity structure.',
      },
      {
        step: 2,
        title: 'Formation',
        description:
          'Prepare and file all necessary formation documents with state authorities.',
      },
      {
        step: 3,
        title: 'Tax Setup',
        description:
          'Obtain EIN, make S-Corp election if applicable, and set up tax accounts.',
      },
      {
        step: 4,
        title: 'Ongoing Support',
        description:
          'Provide compliance guidance and ongoing tax advisory services.',
      },
    ],
  },
  {
    id: '10',
    slug: 'payroll-services',
    category: 'business',
    title: 'Payroll Services',
    shortDescription:
      'Complete payroll processing and tax filing for small businesses',
    longDescription:
      'Jacob Tax Solutions provides reliable payroll services for small businesses. We handle paycheck processing, tax withholdings, quarterly filings, and year-end W-2 preparation so you can focus on running your business.',
    icon: 'users',
    features: [
      'Weekly/bi-weekly/monthly payroll processing',
      'Direct deposit setup',
      'Federal and state tax withholdings',
      'Quarterly payroll tax filings (941, 940)',
      'State unemployment tax filings',
      'Year-end W-2 and 1099 preparation',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Payroll Setup',
        description:
          'Set up your payroll system with employee information and tax withholdings.',
      },
      {
        step: 2,
        title: 'Processing',
        description:
          'Process payroll on your schedule with accurate calculations and direct deposit.',
      },
      {
        step: 3,
        title: 'Tax Filing',
        description:
          'File quarterly payroll tax returns and make timely tax deposits.',
      },
      {
        step: 4,
        title: 'Year-End',
        description:
          'Prepare and distribute W-2s and file annual reconciliation forms.',
      },
    ],
  },
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return [...individualServices, ...businessServices].find(
    (service) => service.slug === slug
  );
};

// Helper function to get services by category
export const getServicesByCategory = (
  category: 'individual' | 'business'
): Service[] => {
  return category === 'individual' ? individualServices : businessServices;
};
