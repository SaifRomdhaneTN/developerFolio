/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saif Romdhane",
  title: "Hi all, I'm Saif",
  subTitle: emoji(
    "a Software Engineering student specializing in Software Architecture, with a solid foundation built across web development, mobile applications, and AI integration. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Bhe8Fa3gvBV8VTEbwn1ghvp7yKL5I4TG/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SaifRomdhaneTN",
  linkedin: "https://linkedin.com/in/saif-eddine-romdhane-879a8b21a",
  gmail: "saif.romtn@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SOFTWARE ENGINEER EXPLORING FULL STACK DEVELOPMENT AND ARTIFICIAL INTELLIGENCE",
  skills: [
    emoji(
      "⚡ Building interactive and responsive Full stack applications using React + Laravel or ASP.net Core + React, with a focus on clean code and efficient architecture"
    ),
    emoji(
      "⚡ Developing cross-platform mobile apps with Flutter, integrated with secure back-ends and REST APIs"
    ),
    emoji(
      "⚡ Crafting robust server-side systems and dynamic microservices using Laravel, Django, Symfony, and Spring Boot"
    ),
    emoji(
      "⚡ Implementing Machine Learning models and Computer Vision solutions like CNNs and ResNet50 for real-world automation"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "ASP.NET Core",
      fontAwesomeClassname: "fas fa-code" // FontAwesome 5 doesn't have a dedicated free .NET/ASP.NET brand icon, "fas fa-code" or "fas fa-cubes" works perfectly as a fallback
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt" // Exact match for your Flutter brand icon!
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Higher Institute of Applied Science and Technology of Sousse (ISSAT Sousse)",
      logo: require("./assets/images/issatso.jpg"),
      subHeader: "National Engineering Degree in Software Engineering",
      duration: "September 2024 - september 2026",
      
      descBullets: [
        "Currently a member of NATEG ISSAT Sousse (North American Tunisian Engineers Group) ",
      ]
    },
    {
      schoolName: "Higher Institute of Applied Sciences and Technology of Mahdia (ISSAT Mahdia)",
      logo: require("./assets/images/issatm.jpg"),
      subHeader: " Master’s Degree in Artificial Intelligence and Internet of Things    ",
      duration: "September 2023 - June 2024",
      desc: "Spent only 1 year before applying in the examination for engineering programs in Tunisia and got accepted in ISSAT Sousse",
      descBullets: ["Was an active memeber in Atast Issat Mahdia ( Tunisian Association for the Future of Sciences and Technology ) "]
    },
    {
      schoolName: "Higher Institute of Technological Studies of Sousse (ISET Sousse)",
      logo: require("./assets/images/isetso.jpg"),
      subHeader: " Bachelor’s Degree, Information Technology, specializing in Information Systems Development      ",
      duration: "September 2020 - july 2023",
      descBullets: ["Was a member & Lead in GDSC (currently known as GDG on Campus) "]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile App Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning and AI",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Wifak Bank International",
      companylogo: require("./assets/images/wifak.png"),
      date: "january 2026 – present",
      desc: "Developing a Fullstack Web application wifak-Imatch for customer and transaction compliance monitoring  using ASP.NET Core. The application is designed to streamline the compliance process and enhance operational efficiency.",
      descBullets: [
        "This Internship is part of the National Engineering Degree program in Software Engineering at ISSAT Sousse, acting as a final project to apply theoretical knowledge in a real-world setting. (PFE)",
        "This internship was done remotely, allowing for flexible work arrangements and the opportunity to collaborate with a diverse team of professionals."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "SW-Consulting",
      companylogo: require("./assets/images/sw_consulting.jpg"), // Update path if needed
      date: "August 2025 – September 2025",
      desc: "Developed a dynamic data management mini-service designed to seamlessly import and export data from and into a database. The application featured a user-friendly UI/UX to ensure a clean and intuitive user experience.",
      descBullets: [
        "Built an interactive and highly responsive front-end interface using React.",
        "Designed and implemented robust back-end server logic using the Laravel framework to handle dynamic data manipulation."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Carthage Solutions",
      companylogo: require("./assets/images/carthage_solutions.jpg"), // Update path if needed
      date: "January 2023 – June 2023",
      desc: "Created 'Food Doctor', an agricultural mobile application designed to scan consumable products and analyze them to determine compatibility with individual user preferences.",
      descBullets: [
        "Served as the End-of-Studies Project (PFE) for my Bachelor's Degree in Information Technology from ISET-Sousse.",
        "Developed a cross-platform mobile application using Flutter, delivering a smooth experience across devices.",
        "Integrated Firebase for secure user management and authenticated real-time data handling.",
        "Connected multiple external REST APIs to source and deliver real-time data analysis efficiently."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc


const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Certifications, learning milestones, and professional achievements that reflect my growth in software engineering, AI, UX design, and communication.",

  achievementsCards: [
    {
      title: "Machine Learning Summer School 2025",
      subtitle:
        "Completed the Cohere Labs Open Science Community Machine Learning Summer School, a learning program focused on modern machine learning, foundation models, retrieval, multimodal learning, and AI research topics.",
      image: require("./assets/images/cohere.jpg"),
      imageAlt: "Cohere Labs Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://credsverse.com/credentials/70ebef01-2d93-48d7-9f11-fd4aac1fbb6e"
        },
        {
          name: "Program Page",
          url: "https://labscommunity.cohere.com/community-programs/archive/summer-school"
        }
      ]
    },
    {
      title: "Foundations of User Experience (UX) Design",
      subtitle:
        "Completed Google's Foundations of User Experience (UX) Design certificate, covering the basics of user-centered design, UX research, wireframes, prototypes, and accessible digital product experiences.",
      image: require("./assets/images/google.jpg"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/XS92R332XTTM"
        },
        {
          name: "Issuer",
          url: "https://www.coursera.org/"
        }
      ]
    },
    {
      title: "Certificate of English Level — CEFR C1",
      subtitle:
        "Earned a CEFR C1 English level certificate from Imperial English UK, demonstrating advanced English communication skills for academic and professional environments. \n When viewing the certtificate on the issuer's website, enter this id 7036911",
      image: require("./assets/images/imperial.png"),
      imageAlt: "Imperial English UK Logo",
      footerLink: [
        {
          name: "View Certification ",
          url: "https://digital-english-test.com/verification"
        },
        {
          name: "Issuer Website",
          url: "https://imperial-english.com/"
        }
      ]
    }
  ],

  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216 55 540 893",
  email_address: "saif.romtn@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
