
export interface AppMaker {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tagline: string;
  url: string;
  category: 'Open Source' | 'SaaS' | 'Educational' | 'Enterprise-Grade';
  bestFor: string;
  unlimitedAspect: string;
  pros: string[];
  cons: string[];
  pricingModel: string;
}

export const APP_MAKERS: AppMaker[] = [
  {
    id: 'appsmith',
    name: 'Appsmith',
    tagline: 'The open-source framework for internal tools.',
    description: 'Build powerful admin panels, dashboards, and workflows by dragging and dropping components.',
    longDescription: 'Appsmith is a developer-first open-source platform to build internal tools. It connects to any database or API and allows you to write custom logic with JavaScript.',
    url: 'https://www.appsmith.com',
    category: 'Open Source',
    bestFor: 'Developers building internal business tools and admin panels.',
    unlimitedAspect: 'Open-source and self-hostable with no limits on the number of apps or developers.',
    pricingModel: 'Free Forever (Self-hosted or Cloud Community), Paid plans for advanced features.',
    pros: ['15+ databases/APIs supported', 'Custom JS everywhere', 'Responsive layout'],
    cons: ['Steeper learning curve than no-code', 'Mainly for internal use']
  },
  {
    id: 'budibase',
    name: 'Budibase',
    tagline: 'Modern open-source low-code platform.',
    description: 'An all-in-one low-code platform for building modern internal applications.',
    longDescription: 'Budibase is designed for speed. It includes its own built-in database but also connects to external sources. It’s highly focused on UI consistency and workflow automation.',
    url: 'https://www.budibase.com',
    category: 'Open Source',
    bestFor: 'Fast development of CRUD applications and forms.',
    unlimitedAspect: 'Unlimited apps and users on the self-hosted version.',
    pricingModel: 'Open-source core is free forever.',
    pros: ['Built-in DB', 'Native automations', 'Excellent UI components'],
    cons: ['Cloud version has user limits', 'More rigid than Appsmith']
  },
  {
    id: 'flutterflow',
    name: 'FlutterFlow',
    tagline: 'Build apps fast with Flutter.',
    description: 'A visual builder for native mobile and web apps using the Google Flutter framework.',
    longDescription: 'FlutterFlow allows you to build sophisticated native apps with high-quality animations and performance. It generates real code (Dart) that can be exported.',
    url: 'https://flutterflow.io',
    category: 'SaaS',
    bestFor: 'Creating high-performance native mobile apps (iOS & Android).',
    unlimitedAspect: 'Unlimited projects on the free tier (you can build as much as you want).',
    pricingModel: 'Free to build; Paid to export code or publish to stores.',
    pros: ['Native Performance', 'Custom Code support', 'Firebase Integration'],
    cons: ['Exporting code requires subscription']
  },
  {
    id: 'mit-app-inventor',
    name: 'MIT App Inventor',
    tagline: 'The pioneer of block-based app building.',
    description: 'A completely free, block-based programming tool for creating Android and iOS apps.',
    longDescription: 'Started by Google and now maintained by MIT, this tool is the gold standard for learning. It uses a drag-and-drop visual programming language.',
    url: 'https://appinventor.mit.edu',
    category: 'Educational',
    bestFor: 'Learning, prototyping, and educational projects.',
    unlimitedAspect: '100% free and open-source. Unlimited projects with no hidden costs.',
    pricingModel: 'Completely Free.',
    pros: ['Truly Free', 'Great for beginners', 'Direct Hardware access'],
    cons: ['Interface looks dated', 'Limited to relatively simple apps']
  },
  {
    id: 'tooljet',
    name: 'ToolJet',
    tagline: 'Low-code framework for internal tools.',
    description: 'Build and deploy internal tools with minimum engineering effort.',
    longDescription: 'ToolJet is an open-source low-code platform that allows team members to build complex internal tools quickly using a drag-and-drop builder.',
    url: 'https://www.tooljet.com',
    category: 'Open Source',
    bestFor: 'Internal tools with heavy database interactions.',
    unlimitedAspect: 'Open-source self-hosting allows unlimited apps and users.',
    pricingModel: 'Free Open Source Edition.',
    pros: ['Extensible with JS', 'Numerous connectors', 'Docker support'],
    cons: ['Community version lacks some enterprise features']
  },
  {
    id: 'glide',
    name: 'Glide',
    tagline: 'Create apps from Google Sheets.',
    description: 'Turn your spreadsheets into beautiful, easy-to-use apps in minutes.',
    longDescription: 'Glide is famous for its speed. If you have data in a spreadsheet, Glide can create a functional app around it automatically.',
    url: 'https://www.glideapps.com',
    category: 'SaaS',
    bestFor: 'Business apps driven by spreadsheet data.',
    unlimitedAspect: 'You can create an unlimited number of "draft" or personal apps.',
    pricingModel: 'Generous Free Tier (limited rows/users per app).',
    pros: ['Instant setup', 'Beautiful default UI', 'Excellent templates'],
    cons: ['Strict data row limits on free plan', 'Limited customization']
  },
  {
    id: 'softr',
    name: 'Softr',
    tagline: 'Build apps from Airtable or Google Sheets.',
    description: 'The easiest way to build custom internal tools, client portals, or directories.',
    longDescription: 'Softr handles the heavy lifting of user authentication, payments, and data syncing. It’s perfect for turning your data into a professional interface.',
    url: 'https://www.softr.io',
    category: 'SaaS',
    bestFor: 'Client portals, internal sites, and directory apps.',
    unlimitedAspect: 'Create unlimited apps on the free plan.',
    pricingModel: 'Free tier includes unlimited apps, limited data records/users.',
    pros: ['Built-in Auth', 'Stripe integration', 'SEO friendly'],
    cons: ['limited to 5 users on free plan', 'Watermark on free plan']
  },
  {
    id: 'kodular',
    name: 'Kodular',
    tagline: 'Advanced block-based app creation.',
    description: 'An advanced distribution of App Inventor with modern components and monetization options.',
    longDescription: 'Kodular provides a more modern UI and more features than MIT App Inventor while keeping the easy logic blocks.',
    url: 'https://www.kodular.io',
    category: 'Educational',
    bestFor: 'Hobbyists wanting to monetize Android apps.',
    unlimitedAspect: 'Unlimited projects. Revenue sharing model instead of upfront costs.',
    pricingModel: 'Mostly Free (Commission on ad revenue).',
    pros: ['Modern material design', 'Extension support', 'Monetization built-in'],
    cons: ['Android focused', 'Requires approval for some features']
  }
];
