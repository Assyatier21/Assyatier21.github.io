// gitprofile.config.js

const config = {
  github: {
    username: 'Assyatier21', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'muhammad-sholeh11',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '16801454/assyatier11', // format: userid/username
    website: 'Assyatier21.github.io',
    phone: '',
    email: 'muhammadsholeh.dev@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1neeup4oZNciSYGT4X4tEqT62kYchvHBL/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Go',
    'Java',
    'PHP',
    'Node.js',
    'Echo-Framework',
    'Laravel',
    'Bootstrap',
    'React.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Elasticsearch',
    'Redis',
    'MongoDB',
    'GraphQL',
    'Amazon Web Services (AWS)',
    'Jenkins',
    'Git',
    'GitHub',
    'GitLab',
    'Docker',
    'Unit Testing',
    'Sonarqube',
  ],
  experiences: [
    {
      company: 'BuddyKu (MNC Group)',
      position: 'Software Engineer',
      from: 'Januari 2023',
      to: 'Present',
      companyLink: 'https://buddyku.com/',
    },
    {
      company: 'Tokopedia',
      position: 'Software Engineer',
      from: 'September 2022',
      to: 'December 2022',
      companyLink: 'https://seller.tokopedia.com/edu',
    },
    {
      company: 'Kisel Indonesia',
      position: 'Website Developer',
      from: 'January 2022',
      to: 'September 2022',
      companyLink: 'https://kiselindonesia.com/',
    },
    {
      company: 'RSUD Siti Fatimah Prov. Sumsel',
      position: 'Frontend Developer Internship',
      from: 'September 2021',
      to: 'December 2022',
      companyLink: 'https://sifalib.sifa.co.id/',
    },
    {
      company: 'Huawei Tech Investment',
      position: 'Backend Developer Internship',
      from: 'September 2021',
      to: 'December 2022',
      companyLink: 'https://www.huawei.com/en/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Sriwijaya University',
      degree: 'Computer Science',
      from: '2018',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Election BuddyKu',
      description:
        'Election BuddyKu is a collaborative effort between BuddyKu and MNC Media. This web-based application allows the public to participate in open voting for the president and vice president from among 16 popular candidates. This project allows the public to access the results of the voting process, ensuring transparency and accountability.',
      imageUrl: '',
      link: 'https://election.buddyku.com/',
    },
    {
      title: 'Aplikasi Lelang Aset (ALEA)',
      description:
        'An application for asset auctions belonging to the Koperasi Telekomunikasi Seluler (Kisel) which is spread across various regions in Indonesia. This application is intended for Telkomsel and Kisel employees and general users outside of the company.',
      imageUrl: '',
      link: 'http://alea.kiselindonesia.com:8083/',
    },
    {
      title: 'Siti Fatimah Digital Library (SIFALIB)',
      description:
        'An application that aims to be a Digital Library belonging to the RSUD Siti Fatimah Provinsi Sumatera Selatan. This digital library will be a place for digital documents regarding research that has been carried out in the hospital environment as well as research conducted by researchers from the hospital.',
      imageUrl: '',
      link: 'https://sifalib.sifa.co.id/',
    },
    {
      title: 'Mitra Layanan Dunia Maya (MILEA)',
      description:
        'An application that accommodates training activities and human resource development at RSUD Siti Fatimah Provinsi Sumatera Selatan. This application focuses on developing the quality of human resources by conducting training both internally and externally from RSUD Siti Fatimah Provinsi Sumatera Selatan.',
      imageUrl: '',
      link: 'https://milea.sifa.co.id/',
    },
    {
      title: 'Sistem Informasi Pendidikan Berkelanjutan (SI-DILAN)',
      description:
        'An application is used to apply for study permits or study assignments for civil servants in hospitals. This application also provides institutional information for employees who want to continue their studies as well as scholarship information in it. This application is connected through a centralized gateway called sifa.co.id.',
      imageUrl: '',
      link: 'https://dilan.sifa.co.id/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Muhammad Sholeh © 2023`,
};

export default config;
