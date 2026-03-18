const PortfolioData = {

  // ──────────────────────────────────────────────
  //  PROJECTS
  // ──────────────────────────────────────────────
  projects: {
    'idlc-customer-app': {
      id: 'idlc-customer-app',
      title: 'IDLC Customer App',
      subtitle: 'AI-Powered Centralized Customer Service Platform',
      icon: 'building-columns',
      color: '#22D3EE',
      category: 'Professional Project',
      period: 'Jan 2025 \u2013 Sep 2025',
      role: 'Software Engineer',
      company: 'IDLC Finance PLC',
      status: 'Deployed',
      description: 'A centralized customer service platform built for IDLC Finance PLC that consolidates services across all 4 subsidiaries into a single AI-powered hub. Advanced AI features using Model Context Protocol (MCP) and Retrieval-Augmented Generation (RAG) streamline customer workflows and reduce branch visits by 80%.',
      challenge: 'IDLC had fragmented services scattered across 4 subsidiaries with no unified customer touchpoint. Legacy database schemas could not handle growing cross-platform data volume and velocity, causing slow query response times.',
      solution: 'Built a unified React.js + Node.js full-stack application with AI-powered features using MCP and RAG. Completely redesigned the database schema for scalability and optimized queries, reducing response time by 40%.',
      images: [],
      videoUrl: '', // Add YouTube/Vimeo embed URL here e.g. 'https://www.youtube.com/embed/...'
      tags: ['React.js', 'Node.js', 'RAG', 'MCP'],
      stack: [
        { name: 'React.js',      category: 'Frontend'  },
        { name: 'Node.js',       category: 'Backend'   },
        { name: 'RAG',           category: 'AI'        },
        { name: 'MCP',           category: 'AI'        },
        { name: 'MS SQL Server', category: 'Database'  },
        { name: 'Tailwind CSS',  category: 'Styling'   },
        { name: 'Docker',        category: 'DevOps'    },
        { name: 'Power BI',      category: 'Analytics' }
      ],
      metrics: [
        { value: '80%',  label: 'Reduction in Branch Visits'     },
        { value: '40%',  label: 'Faster Query Response Time'     },
        { value: '4+',   label: 'Subsidiaries Integrated'        },
        { value: '100%', label: 'Mobile Responsive'              }
      ],
      features: [
        'Centralized customer service hub for all IDLC subsidiaries',
        'AI-powered chatbot using Model Context Protocol (MCP)',
        'Retrieval-Augmented Generation for intelligent document queries',
        'Cross-platform mobile app with real-time data synchronization',
        'Redesigned scalable database schema for high-volume data',
        'Power BI analytics dashboard for business intelligence'
      ],
      timeline: [
        { phase: 'Architecture & Planning',    date: 'Jan 2025', desc: 'System design, database schema planning, tech stack selection' },
        { phase: 'Core Backend Development',   date: 'Mar 2025', desc: 'Node.js API, database migration, MS SQL optimization'         },
        { phase: 'Frontend Development',       date: 'May 2025', desc: 'React.js UI, mobile-responsive design, Power BI integration'  },
        { phase: 'AI Feature Integration',     date: 'Jul 2025', desc: 'MCP & RAG implementation, testing and performance tuning'     },
        { phase: 'Deployment & Launch',        date: 'Sep 2025', desc: 'Production deployment across all subsidiaries, zero downtime' }
      ],
      links: { github: '', live: '' }
    },

    'mobile-recharge': {
      id: 'mobile-recharge',
      title: 'Mobile Recharge & Utility Payment',
      subtitle: 'Seamless Bill Payment Web Platform',
      icon: 'mobile-screen',
      color: '#F472B6',
      category: 'Personal Project',
      period: 'Nov 2024 \u2013 Feb 2025',
      role: 'Software Engineer',
      company: 'Freelance Project',
      status: 'Deployed',
      description: 'A full-scale web solution enabling customers to perform mobile recharges and utility bill payments in one unified place. Features both a client-facing dashboard and a secure admin monitoring dashboard, achieving a 25% surge in user retention.',
      challenge: 'Customers were forced to visit multiple separate platforms for different payments. There was no centralized admin view for monitoring transaction integrity across the system.',
      solution: 'Built a unified React.js + ASP.NET Core platform with third-party API integrations. Developed a dual-dashboard architecture with comprehensive transaction monitoring and 100% mobile-responsive UI.',
      images: [],
      videoUrl: '',
      tags: ['React.js', 'ASP.NET Core', 'API Integration'],
      stack: [
        { name: 'React.js',      category: 'Frontend'     },
        { name: 'ASP.NET Core',  category: 'Backend'      },
        { name: 'MS SQL Server', category: 'Database'     },
        { name: 'REST APIs',     category: 'Integration'  },
        { name: 'Tailwind CSS',  category: 'Styling'      },
        { name: 'TypeScript',    category: 'Language'     },
        { name: 'Jest',          category: 'Testing'      }
      ],
      metrics: [
        { value: '25%',  label: 'Surge in User Retention'     },
        { value: '100%', label: 'Mobile Responsive'           },
        { value: '2x',   label: 'Faster Transactions'         },
        { value: '0',    label: 'Post-Launch Critical Issues' }
      ],
      features: [
        'Mobile recharge for all major network operators',
        'Utility bill payment (electricity, gas, water, internet)',
        'Secure payment gateway with end-to-end encryption',
        'Client dashboard with full transaction history and receipts',
        'Admin monitoring panel with fraud detection alerts',
        '100% mobile-responsive design'
      ],
      timeline: [
        { phase: 'Requirements & UI Design', date: 'Nov 2024', desc: 'Wireframes, API contract definition with third-party providers' },
        { phase: 'Backend Development',      date: 'Dec 2024', desc: 'ASP.NET Core API, payment gateway integration, security layer' },
        { phase: 'Frontend & Dashboards',    date: 'Jan 2025', desc: 'React.js client and admin dashboard with real-time data'       },
        { phase: 'Testing & Deployment',     date: 'Feb 2025', desc: 'Integration testing, security audit, production deployment'    }
      ],
      links: { github: '', live: '' }
    },

    'capital-market': {
      id: 'capital-market',
      title: 'Capital Market Back Office',
      subtitle: 'Enterprise Financial Operations System',
      icon: 'chart-line',
      color: '#4ADE80',
      category: 'Professional Project',
      period: 'Aug 2022 \u2013 Dec 2024',
      role: 'Software Engineer',
      company: 'IDLC Finance PLC',
      status: 'Deployed',
      description: 'A robust back-office system for capital market operations facilitating critical financial transactions, lending services, and equity sales and trading. Includes a comprehensive Power BI reporting infrastructure that doubled report generation speed.',
      challenge: 'The legacy system had slow report generation, fragmented workflows, and poor data visualization. Task completion times for financial operations were too high across 4 subsidiaries.',
      solution: 'Built a modern React.js + ASP.NET Core system with MS SQL Server, migrated reporting infrastructure to Power BI Report Builder, and optimized database queries — resulting in 50% faster task completion.',
      images: [],
      videoUrl: '',
      tags: ['React.js', 'ASP.NET Core', 'MS SQL Server', 'Power BI'],
      stack: [
        { name: 'React.js',      category: 'Frontend'  },
        { name: 'ASP.NET Core',  category: 'Backend'   },
        { name: 'MS SQL Server', category: 'Database'  },
        { name: 'Power BI',      category: 'Analytics' },
        { name: 'TypeScript',    category: 'Language'  },
        { name: 'Docker',        category: 'DevOps'    },
        { name: 'Redis',         category: 'Cache'     },
        { name: 'Playwright',    category: 'Testing'   }
      ],
      metrics: [
        { value: '50%',  label: 'Faster Task Completion'    },
        { value: '40%',  label: 'Reduction in Query Time'   },
        { value: '2x',   label: 'Report Generation Speed'   },
        { value: '4',    label: 'Subsidiaries Served'       }
      ],
      features: [
        'Financial transaction management (lending, equity, trading)',
        'Power BI integrated reporting with drill-down dashboards',
        'Optimized SQL stored procedures for high-volume operations',
        'Role-based access control (RBAC) across 4 subsidiaries',
        'Real-time financial data visualization and KPI tracking',
        'Automated compliance and regulatory reporting'
      ],
      timeline: [
        { phase: 'Legacy System Audit',  date: 'Aug 2022', desc: 'Bottleneck identification, migration planning and architecture design' },
        { phase: 'Core System Build',    date: 'Jan 2023', desc: 'ASP.NET Core APIs, database optimization, React.js frontend'          },
        { phase: 'Power BI Migration',   date: 'Jun 2023', desc: 'Migrated legacy reporting to Power BI Report Builder'                 },
        { phase: 'Feature Expansion',    date: 'Jan 2024', desc: 'New financial modules: lending, equity trading workflows'             },
        { phase: 'Final Deployment',     date: 'Dec 2024', desc: 'Full production rollout across all IDLC subsidiaries'                 }
      ],
      links: { github: '', live: '' }
    },

    'hospital-cabin': {
      id: 'hospital-cabin',
      title: 'Hospital Cabin Management',
      subtitle: 'IoT + Deep Learning Healthcare System',
      icon: 'hospital',
      color: '#8B5CF6',
      category: 'Research / B.Sc. Thesis',
      company: 'Military Institute of Science and Technology (MIST)',
      period: 'Feb 2020 \u2013 Apr 2021',
      role: 'Lead Researcher & Developer',
      status: 'Published (Q1)',
      description: 'Bachelor\'s thesis: a deep learning and IoT-based hospital cabin management system enabling bedridden and immobile patients to control their environment using hand gestures, nose-teeth movements, and voice commands. Published in BMC Health Services Research (Q1, Springer). Achieved 100% task success rate in clinical evaluation with 12 hospital patients.',
      challenge: 'Bedridden patients cannot operate room appliances or emergency systems. Existing systems support only single modalities, excluding patients at different levels of the disability spectrum, and were not validated in real hospital settings.',
      solution: 'Designed and built a multimodal system using CNN + YOLO models running on Raspberry Pi IoT edge units. Three interaction modes: hand gesture tracking, nose-teeth cursor control, and Google Voice API commands — all accessible via a unified Tkinter GUI.',
      images: [
        'assets/Projects/HCMS/1.png', 
        'assets/Projects/HCMS/2.png', 
        'assets/Projects/HCMS/3.png', 
        'assets/Projects/HCMS/4.png', 
        'assets/Projects/HCMS/5.png', 
        'assets/Projects/HCMS/6.png', 
        'assets/Projects/HCMS/7.png',
        'assets/Projects/HCMS/8.png',
        'assets/Projects/HCMS/9.png',
        'assets/Projects/HCMS/10.png',
        'assets/Projects/HCMS/11.png',
        'assets/Projects/HCMS/12.png',
        'assets/Projects/HCMS/13.png',
        'assets/Projects/HCMS/14.png',
        'assets/Projects/HCMS/15.png',
      ],
      videoUrl: '',
      tags: ['Deep Learning', 'IoT', 'CNN', 'YOLO', 'Python'],
      stack: [
        { name: 'Python',           category: 'Language'     },
        { name: 'YOLO',             category: 'ML Model'     },
        { name: 'CNN',              category: 'ML Model'     },
        { name: 'TensorFlow',       category: 'ML Framework' },
        { name: 'OpenCV',           category: 'Vision'       },
        { name: 'Raspberry Pi',     category: 'IoT'          },
        { name: 'Tkinter',          category: 'GUI'          },
        { name: 'Google Voice API', category: 'Voice'        }
      ],
      metrics: [
        { value: '100%', label: 'Task Success Rate'         },
        { value: '99.3%',label: 'Hand Detection Precision'  },
        { value: '85.4%',label: 'Face Detection mAP'        },
        { value: '12',   label: 'Patients in Clinical Trial'}
      ],
      features: [
        'Hand gesture cursor control with YOLO real-time detection',
        'Nose tracking via Lucas-Kanade optical flow + Viola-Jones',
        'Teeth-click detection using Haar cascade classifiers',
        'Voice command system powered by Google Voice API',
        'Edge deployment on Raspberry Pi for real-time processing',
        'Prototype hospital bed with hardware control integration'
      ],
      timeline: [
        { phase: 'Literature Review',        date: 'Feb 2020', desc: 'Reviewed 50+ papers on BCI, HCI, gesture systems for healthcare'                },
        { phase: 'Requirements Elicitation', date: 'Apr 2020', desc: '18 stakeholder interviews: patients, doctors, nurses in Dhaka hospitals'         },
        { phase: 'ML Training',              date: 'Aug 2020', desc: 'YOLO + CNN training on 1200+ images per class, dataset preparation'              },
        { phase: 'System Development',       date: 'Dec 2020', desc: 'All three interaction modules built and integrated with Tkinter GUI'              },
        { phase: 'Clinical Evaluation',      date: 'Apr 2021', desc: '12 real hospital patients evaluated — 100% success rate. Published in BMC (Q1).' }
      ],
      links: { github: '', live: 'https://doi.org/10.1186/s12913-022-08095-y' }
    },

    'autoby24': {
      id: 'autoby24',
      title: 'Autoby24',
      subtitle: 'E-Commerce & Ride Sharing Platform for Cars and Bikes',
      icon: 'car',
      color: '#F59E0B',
      category: 'Professional Project',
      period: 'Feb 2022 – Jun 2022',
      role: 'Frontend Developer',
      company: 'Autoby24 GmbH',
      status: 'Deployed',
      description: 'Autoby24 is an e-commerce based platform where anyone can buy or sell cars and bikes. Both new and old model vehicles are available. It also features a ride-sharing service where a user can be a rider or passenger, book a ride, or share a ride. Tourist services allow tourists to book rides to specific tourist spots.',
      challenge: 'Building a unified platform that handles three distinct domains — vehicle marketplace, dynamic ride sharing, and tourist booking — while keeping the user experience seamless across all modules with a single backend.',
      solution: 'Architected a multi-module Django REST backend serving a React.js frontend. Used PostgreSQL for relational vehicle/ride data. Implemented separate booking flows for ride-sharing and tourist packages with real-time seat availability and Google Maps integration.',
      images: [
        'assets/Projects/Autoby24/0.png',
        'assets/Projects/Autoby24/1.png',
        'assets/Projects/Autoby24/2.png',
        'assets/Projects/Autoby24/3.png',
        'assets/Projects/Autoby24/4.png',
        'assets/Projects/Autoby24/5.png',
        'assets/Projects/Autoby24/6.png',
        'assets/Projects/Autoby24/7.png',
        'assets/Projects/Autoby24/8.png',
        'assets/Projects/Autoby24/9.png'
      ],
      videoUrl: '',
      tags: ['React.js', 'Django', 'PostgreSQL', 'Ride Sharing'],
      stack: [
        { name: 'React.js',    category: 'Frontend'  },
        { name: 'Django',      category: 'Backend'   },
        { name: 'PostgreSQL',  category: 'Database'  },
        { name: 'Python',      category: 'Language'  },
        { name: 'REST API',    category: 'Integration' },
        { name: 'Bootstrap',   category: 'Styling'   }
      ],
      metrics: [
        { value: '3',    label: 'Core Modules Built'      },
        { value: '2',    label: 'User Roles (Rider/Passenger)' },
        { value: '100%', label: 'Module Integration Rate' },
        { value: '4mo',  label: 'Development Duration'    }
      ],
      features: [
        'Buy and sell new and old cars and bikes with detailed listings',
        'Ride sharing: book or offer rides as rider or passenger',
        'Tourist packages: book rides to popular tourist destinations',
        'User authentication with Google and Facebook OAuth',
        'Car brand showcase with model browsing and filtering',
        'Admin panel for listing management and user moderation'
      ],
      timeline: [
        { phase: 'Planning & UI Design',   date: 'Feb 2022', desc: 'Requirements, wireframes and database schema design' },
        { phase: 'Backend Development',    date: 'Mar 2022', desc: 'Django REST API, PostgreSQL models, authentication' },
        { phase: 'Marketplace Module',     date: 'Apr 2022', desc: 'Buy/sell listings, search, filter, car brand pages' },
        { phase: 'Ride & Tourist Modules', date: 'May 2022', desc: 'Ride-sharing booking engine, tourist package booking' },
        { phase: 'Testing & Deployment',   date: 'Jun 2022', desc: 'End-to-end testing, bug fixes, production deployment' }
      ],
      links: { github: '', live: '' }
    },

    'goby24': {
      id: 'goby24',
      title: 'Goby24',
      subtitle: 'Ride Sharing & Tourist Package Web Platform',
      icon: 'route',
      color: '#22D3EE',
      category: 'Professional Project',
      period: 'Apr 2021 – Oct 2021',
      role: 'Frontend Developer',
      company: 'Autoby24 GmbH',
      status: 'Deployed',
      description: 'Goby24 is a ride sharing web application where users can be a rider or passenger, book or share rides, and also access tourist services where a tourist can book a ride for a specific tourist spot. Built with React.js and Django with a fully featured dashboard.',
      challenge: 'Creating a reliable real-time ride matching and booking system with separate user roles (rider and passenger) while also integrating a tourist package module — all within a single cohesive web application.',
      solution: 'Built a React.js single-page application with a Django backend and Django REST Framework. Implemented real-time ride-offer/request matching, an interactive map for pick-up and drop-off, and a separate tourist package management system with an admin dashboard.',
      images: [
        'assets/Projects/Goby24/0.JPG',
        'assets/Projects/Goby24/1.JPG',
        'assets/Projects/Goby24/2.JPG',
        'assets/Projects/Goby24/3.JPG',
        'assets/Projects/Goby24/4.JPG',
        'assets/Projects/Goby24/5.JPG',
        'assets/Projects/Goby24/6.JPG',
        'assets/Projects/Goby24/7.jpg',
      ],
      videoUrl: '',
      tags: ['React.js', 'Django', 'Ride Sharing', 'Tourist'],
      stack: [
        { name: 'React.js',             category: 'Frontend'  },
        { name: 'Django',               category: 'Backend'   },
        { name: 'Django REST Framework',category: 'Backend'   },
        { name: 'PostgreSQL',           category: 'Database'  },
        { name: 'Python',               category: 'Language'  },
        { name: 'Bootstrap',            category: 'Styling'   }
      ],
      metrics: [
        { value: '2',   label: 'User Roles Supported'    },
        { value: '3',   label: 'Core Feature Modules'    },
        { value: '1',   label: 'Unified Dashboard'       },
        { value: '6mo', label: 'Development Duration'    }
      ],
      features: [
        'Dual-role system: register and operate as Rider or Passenger',
        'Ride booking with pick-up/drop-off location selection',
        'Offer a ride with seat count and real-time request management',
        'Tourist package browsing and ride booking to tourist spots',
        'Comprehensive dashboard with journey history and status',
        'Admin panel for managing users, rides, and packages'
      ],
      timeline: [
        { phase: 'Concept & Architecture', date: 'Apr 2021', desc: 'System design, role-based data model, API planning' },
        { phase: 'Core Ride Module',       date: 'May 2021', desc: 'Ride booking, offer a ride, real-time matching logic' },
        { phase: 'Tourist Module',         date: 'Jul 2021', desc: 'Tourist package management and ride booking integration' },
        { phase: 'Dashboard & Polish',     date: 'Aug 2021', desc: 'Full dashboard, journey history, UI refinements' },
        { phase: 'Deployment',             date: 'Oct 2021', desc: 'Production deployment, testing and bug fixes' }
      ],
      links: { github: '', live: '' }
    },

    'goby24-mobile': {
      id: 'goby24-mobile',
      title: 'Goby24 Mobile',
      subtitle: 'Cross-Platform Ride Sharing Mobile Application',
      icon: 'mobile-screen',
      color: '#4ADE80',
      category: 'Professional Project',
      period: 'Oct 2021 – Feb 2022',
      role: 'Frontend Developer',
      company: 'Autoby24 GmbH',
      status: 'Deployed',
      description: 'Goby24 Mobile is the React Native mobile version of the Goby24 ride sharing platform. Users can be a rider or passenger, book or share rides, and access tourist services. The app supports multilingual UI (English) and provides a native mobile experience for the full Goby24 ecosystem.',
      challenge: 'Translating the full Goby24 web platform experience to a native mobile environment while maintaining feature parity across ride booking, ride offering, and tourist packages — with a smooth, responsive UI on both iOS and Android.',
      solution: 'Built with React Native for cross-platform compatibility. Reused the existing Goby24 Django REST backend with mobile-optimized API endpoints. Implemented native-feeling navigation flows, date/time pickers, and passenger/ride management screens.',
      images: [
        'assets/Projects/Goby24Mobile/0.jpg', 
        'assets/Projects/Goby24Mobile/1.jpg', 
        'assets/Projects/Goby24Mobile/2.jpg', 
        'assets/Projects/Goby24Mobile/3.jpg', 
        'assets/Projects/Goby24Mobile/4.jpg', 
        'assets/Projects/Goby24Mobile/5.jpg', 
        'assets/Projects/Goby24Mobile/6.jpg', 
        'assets/Projects/Goby24Mobile/7.jpg', 
        'assets/Projects/Goby24Mobile/8.jpg', 
        'assets/Projects/Goby24Mobile/9.jpg', 
        'assets/Projects/Goby24Mobile/10.jpg', 
        'assets/Projects/Goby24Mobile/11.jpg', 
        'assets/Projects/Goby24Mobile/12.jpg', 
        'assets/Projects/Goby24Mobile/13.jpg', 
        'assets/Projects/Goby24Mobile/14.jpg'],
      videoUrl: '',
      tags: ['React Native', 'Django', 'Cross-Platform', 'Mobile'],
      stack: [
        { name: 'React Native',          category: 'Frontend'  },
        { name: 'Django REST Framework', category: 'Backend'   },
        { name: 'PostgreSQL',            category: 'Database'  },
        { name: 'JavaScript',            category: 'Language'  },
        { name: 'Android Studio',        category: 'DevOps'    },
        { name: 'Xcode',                 category: 'DevOps'    }
      ],
      metrics: [
        { value: '2',      label: 'Platforms (iOS & Android)' },
        { value: '100%',   label: 'Feature Parity with Web'   },
        { value: 'Native', label: 'UI Experience'             },
        { value: '4mo',    label: 'Development Duration'      }
      ],
      features: [
        'Cross-platform: runs natively on both Android and iOS',
        'Ride booking with departure/destination and date selection',
        'Passenger count management and advanced search options',
        'Offer a ride: set journey details, manage passenger requests',
        'Tourist package booking with location-based ride scheduling',
        'Multilingual support (English) with smooth native navigation'
      ],
      timeline: [
        { phase: 'Mobile Architecture',    date: 'Oct 2021', desc: 'React Native setup, navigation structure, API integration planning' },
        { phase: 'Ride Booking Screen',    date: 'Nov 2021', desc: 'Search, booking form, date picker, passenger count UI' },
        { phase: 'Offer & Manage Rides',   date: 'Dec 2021', desc: 'Driver flow: offer ride, manage requests, journey status' },
        { phase: 'Tourist Module',         date: 'Jan 2022', desc: 'Tourist package list and ride booking integration' },
        { phase: 'Testing & Launch',       date: 'Feb 2022', desc: 'Device testing on Android & iOS, bug fixes, store submission' }
      ],
      links: { github: '', live: '' }
    },

    'nose-interaction': {
      id: 'nose-interaction',
      title: 'Nose Mobile Interaction',
      subtitle: 'Hands-Free Android App for Disabled Users via Nose & Teeth',
      icon: 'hand',
      color: '#F472B6',
      category: 'Research / Academic',
      period: 'Nov 2020',
      role: 'Researcher & Android Developer',
      company: 'Military Institute of Science and Technology (MIST)',
      status: 'Published (Q1)',
      description: 'An Android application that enables disabled or handless people to interact with their smartphone using only nose and teeth movements. Machine learning algorithms track the nose using the front camera to control cursor movement, while showing teeth triggers click operations. Developed in Android Studio and directly led to a Q1 IEEE Access publication.',
      challenge: 'People with hand disabilities cannot use conventional touchscreen smartphones. Existing assistive apps require partial hand mobility. The system needed to work in real-time on a phone camera without external hardware.',
      solution: 'Used Viola-Jones algorithm for face detection and Lucas-Kanade optical flow for real-time nose tracking to control cursor movement. Haar cascade classifiers detect teeth exposure for click events. A score-timer prevents accidental clicks. All interactions (tap, scroll, long press, drag) implemented programmatically in Android.',
      images: ['assets/Publications/NTCC/0.jpg', 'assets/Publications/NTCC/1.png', 'assets/Publications/NTCC/2.png', 'assets/Publications/NTCC/2.5.png', 'assets/Publications/NTCC/3.png', 'assets/Publications/NTCC/4.png', 'assets/Publications/NTCC/5.png', 'assets/Publications/NTCC/6.png'],
      videoUrl: '',
      tags: ['Android', 'Machine Learning', 'Accessibility', 'Computer Vision', 'OpenCV'],
      stack: [
        { name: 'Android Studio', category: 'DevOps'      },
        { name: 'Java',           category: 'Language'    },
        { name: 'OpenCV',         category: 'Vision'      },
        { name: 'Viola-Jones',    category: 'ML Model'    },
        { name: 'Lucas-Kanade',   category: 'ML Model'    },
        { name: 'Haar Cascade',   category: 'ML Model'    }
      ],
      metrics: [
        { value: '4',    label: 'Gesture Types Supported' },
        { value: '3',    label: 'Device Types Tested'     },
        { value: '4.03s',label: 'Mean Click Execution Time' },
        { value: 'Q1',   label: 'IEEE Access Publication'  }
      ],
      features: [
        'Real-time nose tracking via front camera for cursor control',
        'Three-region speed control: cursor speed adapts to nose displacement from center',
        'Teeth detection using Haar cascade classifier for click events',
        'Score-timer mechanism prevents accidental clicks during normal speech',
        'All Android touch events: tap, scroll, long-press, drag — hands-free',
        'No external hardware required — works on any Android smartphone'
      ],
      timeline: [
        { phase: 'Research & Algorithm Study', date: 'Sep 2020', desc: 'Literature review on face tracking, optical flow, Viola-Jones' },
        { phase: 'Face & Nose Tracking',       date: 'Oct 2020', desc: 'Implemented Viola-Jones + Lucas-Kanade for real-time nose cursor' },
        { phase: 'Teeth Click Detection',      date: 'Oct 2020', desc: 'Haar cascade teeth detector with score-timer anti-misclick' },
        { phase: 'Gesture Implementation',     date: 'Nov 2020', desc: 'All 4 gesture types programmatically mapped in Android' },
        { phase: 'Evaluation & Publication',   date: 'Nov 2020', desc: 'Tested on 3 devices, 7 trials each; published in IEEE Access Q1' }
      ],
      links: { github: '', live: 'https://ieeexplore.ieee.org/abstract/document/9399435' }
    },
  },

  // ──────────────────────────────────────────────
  //  PUBLICATIONS
  // ──────────────────────────────────────────────
  publications: {

    'bmc-2022': {
      id: 'bmc-2022',
      title: 'A Deep Learning Based Multimodal Interaction System for Bedridden and Immobile Hospital Admitted Patients: Design, Development and Evaluation',
      shortTitle: 'Multimodal Hospital Cabin Management System',
      icon: 'hospital',
      images: ['assets/Publications/HCMS/1.png', 'assets/Publications/HCMS/2.png', 'assets/Publications/HCMS/3.png', 'assets/Publications/HCMS/4.png', 'assets/Publications/HCMS/5.png', 'assets/Publications/HCMS/6.png', 'assets/Publications/HCMS/7.png'],
      color: '#8B5CF6',
      authors: 'Muhammad Nazrul Islam, Md Shadman Aadeeb, Md. Mahadi Hassan Munna, Md. Raqibur Rahman',
      journal: 'BMC Health Services Research',
      publisher: 'BioMed Central (Springer Nature)',
      volume: 'Vol. 22, Article 803',
      year: '2022',
      quartile: 'Q1',
      doi: 'https://link.springer.com/article/10.1186/s12913-022-08095-y',
      tags: ['Deep Learning', 'HCI', 'Healthcare', 'IoT', 'Multimodal Interaction', 'CNN', 'YOLO', 'Computer Vision'],
      abstract: 'Hospital cabins are a part and parcel of the healthcare system. Most patients admitted in hospital cabins reside in bedridden and immobile conditions. Though different kinds of systems exist to aid such patients, most focus on specific tasks like calling for emergencies while ignoring the patients\' interaction limitations. Using computer vision and deep learning technologies, a hospital cabin control system with multimodal interaction was designed and developed for bedridden and immobile patients. The system supports: (a) hand gesture based interaction, (b) nose-teeth based interaction where nose controls the cursor and teeth perform clicks, and (c) voice based interaction using specific commands. The system was evaluated with 12 real hospital patients achieving a 100% success rate with reasonable task completion times.',
      methodology: 'Research conducted in three phases: (1) Requirements elicitation through semi-structured interviews with 18 stakeholders (patients, doctors, nurses) in Dhaka, Bangladesh. (2) System development using CNN + YOLO deep learning — TeethClassifier achieved 0.993 training accuracy / 0.940 test accuracy; YoloNetForFace achieved 0.854 mAP. Real-time processing on Raspberry Pi IoT edge units. (3) Empirical evaluation with 12 real hospital patients measuring effectiveness, efficiency, and usability via SUS questionnaire.',
      contribution: [
        'Novel multimodal interaction framework supporting hand gesture, nose-teeth, and voice interaction for immobile patients',
        'CNN + YOLO deep learning pipeline for real-time gesture and facial feature detection achieving 99.3% hand detection precision',
        'End-to-end IoT deployment on Raspberry Pi edge computing in a real hospital cabin environment',
        'Rigorous clinical evaluation with 12 real hospital patients achieving 100% task success rate across all interaction modes'
      ],
      citation: 'Islam, M.N., Aadeeb, M.S., Hassan Munna, M.M., Rahman, M.R. "A deep learning based multimodal interaction system for bedridden and immobile hospital admitted patients: design, development and evaluation." BMC Health Services Research 22, 803 (2022). https://doi.org/10.1186/s12913-022-08095-y'
    },

    'ieee-2021': {
      id: 'ieee-2021',
      title: 'Developing a Novel Hands-Free Interaction Technique Based on Nose and Teeth Movements for Using Mobile Devices',
      shortTitle: 'Hands-Free Mobile Interaction via Nose & Teeth',
      icon: 'mobile-screen',
      images: ['assets/Publications/NTCC/1.png', 'assets/Publications/NTCC/2.png', 'assets/Publications/NTCC/2.5.png', 'assets/Publications/NTCC/3.png', 'assets/Publications/NTCC/4.png', 'assets/Publications/NTCC/5.png', 'assets/Publications/NTCC/6.png'],
      color: '#22D3EE',
      authors: 'Muhammad Nazrul Islam, Md Shadman Aadeeb, Rafiur Rahman Khan, Md. Mahadi Hassan Munna, Mahmud Sarwar, Shamima Nasrin, A. K. M. Najmul Islam',
      journal: 'IEEE Access',
      publisher: 'IEEE',
      volume: 'Vol. 9, pp. 58127\u201358141',
      year: '2021',
      quartile: 'Q1',
      doi: 'https://ieeexplore.ieee.org/abstract/document/9399435',
      tags: ['HCI', 'Accessibility', 'Computer Vision', 'Mobile', 'Gesture Recognition', 'Viola-Jones', 'Lucas-Kanade'],
      abstract: 'Human-mobile interaction is aimed at facilitating interaction with smartphone devices. The conventional approach assumes the end user has full control over hand movements — excluding people with disabilities. This paper proposes a nose and teeth based interaction system allowing complete hands-free smartphone control. The system uses the front-facing camera to track the nose for cursor control via Viola-Jones algorithm and Lucas-Kanade optical flow estimation. Teeth are detected using Haar cascade classifiers for performing all touch screen events: tap, scroll, long press, and drag. The system was evaluated on 3 devices by 3 users with 7 trials each, showing a mean click execution time of 4.03 seconds and only 0.72s average variation across different device types (validated by ANOVA).',
      methodology: 'Developed a Nose-Mobile Interaction (NMI) system in two phases: (1) Cursor movement via nose tracking using Viola-Jones for face detection (re-applied every 10 frames) and Lucas-Kanade optical flow for continuous tracking. A 3-region speed control mechanism adjusts cursor speed based on nose displacement from screen center. (2) Teeth detection using Haar cascade classifiers with a score-timer mechanism (score 0-50) to prevent accidental clicks. All Android gesture events (tap, scroll, long press, drag) implemented programmatically. Evaluated by ANOVA one-way analysis for device-type effect.',
      contribution: [
        'First comprehensive hands-free nose-teeth interaction system for Android smartphones implementing all basic touch screen operations',
        'Novel three-region cursor speed control mechanism based on nose displacement from screen center',
        'Score-timer teeth detection mechanism using Haar cascade preventing accidental clicks',
        'Empirical ANOVA-validated evaluation: 0.72s average execution time variation across 3 device types, 7 trials each'
      ],
      citation: 'Islam, M.N., Aadeeb, M.S., Khan, R.R., Munna, M.M.H., Sarwar, M., Nasrin, S., Islam, A.K.M.N. "Developing a Novel Hands-Free Interaction Technique Based on Nose and Teeth Movements for Using Mobile Devices." IEEE Access, Vol. 9, pp. 58127-58141, 2021. DOI: 10.1109/ACCESS.2021.3072195'
    },

    'isda-2020': {
      id: 'isda-2020',
      title: 'Towards Developing a Hospital Cabin Management System using Brain Computer Interaction',
      shortTitle: 'Hospital Cabin Management via BCI',
      icon: 'brain',
      images: ['assets/Publications/BCI/1.png', 'assets/Publications/BCI/2.png', 'assets/Publications/BCI/3.png', 'assets/Publications/BCI/4.png', 'assets/Publications/BCI/5.png'],
      color: '#F472B6',
      authors: 'Md Shadman Aadeeb, Md. Mahadi Hassan Munna, Md. Raqibur Rahman, Muhammad Nazrul Islam',
      journal: 'ISDA 2020 \u2013 20th Intl. Conference on Intelligent Systems Design and Applications',
      publisher: 'Springer',
      volume: 'ISDA 2020 Proceedings',
      year: '2020',
      quartile: 'Conference',
      doi: 'https://link.springer.com/chapter/10.1007/978-3-030-71187-0_20',
      tags: ['BCI', 'EEG', 'Neural Networks', 'Healthcare', 'Accessibility', 'HCI', 'ANN'],
      abstract: 'This paper proposes a conceptual framework for a hospital cabin management system where severely ill or disabled patients can control their surroundings using only their thoughts. A Brain Computer Interface (BCI) headset collects Electroencephalographic (EEG) data from the brain and an Artificial Neural Network (ANN) processes and classifies the signals to predict the patient\'s intended action. The system is particularly beneficial in developing countries where the doctor-to-patient ratio is critically low (Bangladesh: 5000:1:13:2.5 population:nurse:bed:doctor). Requirements were elicited through structured interviews with patients, doctors, and nurses.',
      methodology: 'Requirements elicitation conducted via structured interviews with 8 ex-patients, 3 nurses, and 2 doctors across 2 hospitals in Dhaka. Conceptual framework uses NeuroSky Mindwave EEG headset acquiring 16 feature signals (delta, theta, alpha, beta, gamma waves etc.). A softmax ANN classifies 7 thought categories: left, right, up, down, back, emergency, and other thoughts. A hierarchical directory-structure GUI enables navigation by thought alone. ANOVA-based device dependency testing and end-user feedback planned for future validation.',
      contribution: [
        'Requirements elicitation with 13 healthcare stakeholders identifying critical functional needs for disabled hospital patients',
        'Novel 7-class EEG thought classification framework (left, right, up, down, back, emergency, other) using ANN with softmax layer',
        'Hierarchical GUI navigation system controllable entirely by thought using BCI headset',
        'Comprehensive proposed testing methodology: accuracy testing, ANOVA device-dependency, and clinical end-user evaluation'
      ],
      citation: 'Aadeeb, M.S., Munna, M.M.H., Rahman, M.R., Islam, M.N. "Towards Developing a Hospital Cabin Management System using Brain Computer Interaction." 20th International Conference on Intelligent Systems Design and Applications (ISDA 2020), Springer, 2020.'
    }
  }
};
