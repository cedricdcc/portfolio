/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Cedric's Portfolio",
  description:
    "I'm a bio-informatics graduate turned full stack developer with expertise in data analysis and interpretation. I build open source environmental applications using Python, JavaScript, React, and Node.js. Passionate about collaboration and making a positive impact, I use technology to tackle real-world problems.",
  og: {
    title: "Cedric Decruws Portfolio",
    type: "website",
    url: "https://cedricdcc.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Cedric Decruw",
  logo_name: "CedricDecruw",
  nickname: "Alain_Provist",
  subTitle:
  "I'm a bio-informatics graduate turned full stack developer with expertise in data analysis and interpretation. I build open source environmental applications using Python, JavaScript, React, and Node.js. Passionate about collaboration and making a positive impact, I use technology to tackle real-world problems.",
  resumeLink:
    "https://resume.io/r/JMmwKxZlO",
  portfolio_repository: "https://github.com/cedricdcc/portfolio",
  githubProfile: "https://github.com/cedricdcc",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/cedricdcc",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/cedric-decruw-974793180/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:cedricdecruw@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Strong skills in data cleaning, data wrangling, and statistical analysis to draw insights from data.",
        "⚡ Proficiency in programming languages such as Python, R, and SQL",
        "⚡ Skilled in creating compelling data visualizations and dashboards that convey complex information in a clear and concise manner.",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            backgroundColor: "white",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & Flask"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vue-dot-js",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "Sfelte",
          fontAwesomeClassname: "simple-icons:svelte",
          style: {
            color: "#FF3E00",
          },
        },
        {
          skillName: "redwoodJS",
          fontAwesomeClassname: "simple-icons:redwoodjs",
          style: {
            color: "#FF3E00",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563D7C",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        }
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Proficiency in containerization with Kubernetes and Docker.",
        "⚡ Strong understanding of Kubernetes architecture and components, and advanced knowledge of the Docker CLI.",
        "⚡ Experience deploying and managing scalable applications on the Kubernetes platform and building custom solutions with Kubernetes APIs.",
        "⚡ Proficiency in creating and managing workflows with GitHub Actions to automate software development processes, including building, testing, and deploying code.",

      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
      ],
    },
    {
      title: "Open Science",
      fileName: "OpenScienceImg",
      skills: [
        "⚡ Strong understanding of the principles and practices of open science, including open access, open data, and open source.",
        "⚡ Experience working with open science tools and platforms, such as the Open Science Framework (OSF) and Zenodo, for data management, sharing, and collaboration.",
        "⚡ Proficiency in using open science practices to improve transparency, reproducibility, and the overall quality of scientific research.",
        "⚡ Ability to effectively communicate open science principles and practices to diverse audiences, including researchers, policymakers, and the public.",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "mdi:git",
          style: {
            color: "#F05032",
          }
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "fa:github",
          style: {
            color: "#181717",
          }
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#FCA121",
          },
        },
        {
          skillName: "Zenodo",
          fontAwesomeClassname: "simple-icons:zenodo",
          style: {
            color: "#3C8EBB",
          },
        },
        {
          skillName: "ROCrate",
          fontAwesomeClassname: "game-icons:materials-science",
          style: {
            color: "#000000",
          },
        },
      ],
    }
    /*
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    */
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/cedricdcc/",
    }
    */
  ],
};

const degrees = {
  degrees: [
    {
      title: "Howest, de Hogeschool West-Vlaanderen",
      subtitle: "BANABA in Bio-informatics",
      logo_path: "Howest.png",
      alt_name: "HOWEST",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ Advanced computational skills, including proficiency in programming languages such as Python, R, and PHP, and experience working with bioinformatics tools and databases.",
        "⚡ Handle, analyze, and interpret large and complex biological data sets, including genomic, proteomic, and metabolomic data.",
        "⚡ Advanced knowledge on topics related to genomics, including genome sequencing, assembly, annotation, and comparative genomics.",
        "⚡ Analyze and visualize biological networks, including metabolic and regulatory networks, to gain insights into biological processes.",
        "⚡ Machine learning and artificial intelligence techniques to analyze biological data and make predictions about biological systems.",
      ],
      website_link: "https://www.howest.be/nl/opleidingen/bachelor-na-bachelor/advanced-bachelor-of-bioinformatics",
    },
    {
      title: "Howest, de Hogeschool West-Vlaanderen",
      subtitle: "Bachelor in  biomedical laboratory sciences/technology (farmaceutical)",
      logo_path: "Howest.png",
      alt_name: "HOWEST",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ Proficiency in performing a wide range of farmaceutical laboratory tests and techniques.",
        "⚡ Design and conduct scientific experiments, analyze data, and interpret results, which are valuable skills in many research-related fields.",
        "⚡ Strong understanding of quality assurance and regulatory compliance in laboratory settings, which is essential for ensuring accurate test results and maintaining compliance with industry regulations.",
        "⚡ Ability to effectively communicate scientific findings to diverse audiences, including researchers, policymakers, and the public.",
        "⚡ critical thinking and problem-solving skills, which are essential for identifying and addressing complex laboratory issues and improving laboratory processes and procedures."
      ],
      website_link: "https://www.howest.be/nl/opleidingen/bachelor/biomedische-laboratoriumtechnologie/farmaceutische-en-biologische",
    },
    
  ],
};

const certifications = {
  certifications: [
    {
      title: "Linked Data and Solid",
      subtitle: "- University of Gent",
      logo_path: "UGent.png",
      certificate_link:
        "./certificaat_linked_data.png",
      alt_name: "univiversity here",
      color_code: "#8C151599",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have been worked in a Non-Profit Organization and also have done some freelancing projects. I have also worked as a volunteer in various organizations. I love to explore new technologies and leverage them to solve real-life problems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Open Science Developer",
          company: "Vlaams Instituut voor de zee (VLIZ)",
          company_url: "https://www.vliz.be/en",
          logo_path: "vliz_logo.png",
          duration: "Jul 2019 - Present",
          location: "Oostende, Belgium",
          description:
            "I am working on the development in the Open Science Team of the datacenter department. I am also involved in the development of the Open Science Data Catalogue, a data catalogue for marine research data. The catalogue is built on top of the Open Data for Research (OD4R) data catalogue software.",
          color: "#0879bf",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Bio-informatics Intern",
          company: "Vlaams Instituut voor de zee (VLIZ)",
          company_url: "https://www.vliz.be/en",
          logo_path: "vliz_logo.png",
          duration: "Apr 2019 - Jun 2019",  
          location: "Oostende, Belgium",
          description:
            "Connecting APHIA database to NCBI taxonomy browser. APHIA is a database of marine metagenomic data. The goal of the project is to make the APHIA database searchable through the NCBI taxonomy browser. The project is done in collaboration with the HOWEST.",
          color: "#0879bf",
        },
        {
          title: "Laboratory technician Intern",
          company: "UBO - Université de Bretagne Occidentale",
          company_url: "https://www.univ-brest.fr/en",
          logo_path: "ubo_logo.jpg",
          duration: "Jan 2018 - Jun 2018",
          location: "Brest, France",
          description:"Screening on inhibition of key cosmetic enzymes and adhesion/growth inhibition of biofilm microorganisms by natural products. The project is done in collaboration with the technical core facility BIODIMAR/LEMAR UMR 6553/UBO.",
          color: "#0879bf",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        /*
        {
          title: "title",
          company: "company",
          company_url: "cpurl",
          logo_path: "path to image",
          duration: "MM YYYY - MM YYYY",
          location: "location",
          description:
            "description",
          color: "#4285F4"
        }
        */
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*
    {
      id: "uuidv4().pub",
      name: "Name of the publication",
      createdAt: "Date of publication",
      description: "Description of the publication",
      url:
        "url to the publication",
    }
    */
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "cedric_decruw.png",
    description:
      "Thank you for visiting my portfolio. If you have any questions or would like to discuss a potential project or collaboration, please don't hesitate to get in touch. You can find a link to my resume right here.",
  },
  /*
  blogSection: {
    title: "Blogs",
    subtitle:
      "short description about blogs",
    link: "url to your blogs",
    avatar_image_path: "blogs_image.svg",
  },
  */
  addressSection: {
    title: "Address",
    subtitle:
      "Vlaams Instituut voor de Zee (VLIZ), Jacobsenstraat 1, 8400 Oostende",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/VHuc4jrZgvr8hwus5",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
