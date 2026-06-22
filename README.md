# Saif Romdhane — Developer Portfolio

A personalized developer portfolio built from the DeveloperFolio React template and customized to present my résumé, projects, skills, education, internships, certifications, and contact information.

> This repository is my fork of `saadpasta/developerFolio`, updated with my own Software Engineering profile and résumé data.

## About Me

Hi, I’m **Saif Romdhane**, a Software Engineering student specializing in **Software Architecture**. I have a strong foundation in **full-stack web development**, **mobile application development**, and **AI integration**.

My work focuses on building clean, responsive, and useful software solutions using modern technologies such as **React**, **ASP.NET Core**, **Laravel**, **Flutter**, **Python**, **Java**, **Firebase**, and SQL databases.

## Portfolio Highlights

- Responsive React portfolio website
- Personal résumé and contact section
- Education timeline
- Work experience and internships
- Skills and technology stack
- GitHub profile integration
- Certifications and achievements
- Splash animation and customizable theme

## Tech Stack

### Frontend

- ReactJS
- JavaScript
- SCSS / Sass
- Responsive UI design

### Backend

- ASP.NET Core
- Laravel
- Django
- Symfony
- Spring Boot
- REST APIs

### Mobile

- Flutter
- Firebase integration
- Cross-platform mobile development

### AI & Data

- Python
- Machine Learning
- Computer Vision
- CNNs
- ResNet50
- SQL databases

### Tools

- Git / GitHub
- npm
- GitHub Pages
- Environment variables with `.env`

## What I Do

- Build interactive and responsive full-stack applications using **React + Laravel** or **ASP.NET Core + React**.
- Develop cross-platform mobile applications with **Flutter**, secure backends, and REST APIs.
- Create server-side systems and microservices using **Laravel**, **Django**, **Symfony**, and **Spring Boot**.
- Implement Machine Learning and Computer Vision solutions for real-world automation.

## Education

### Higher Institute of Applied Science and Technology of Sousse — ISSAT Sousse

**National Engineering Degree in Software Engineering**  
September 2024 – September 2026

- Member of **NATEG ISSAT Sousse** — North American Tunisian Engineers Group.

### Higher Institute of Applied Sciences and Technology of Mahdia — ISSAT Mahdia

**Master’s Degree in Artificial Intelligence and Internet of Things**  
September 2023 – June 2024

- Completed one year before applying for the national engineering program entrance examination in Tunisia.
- Accepted into the Software Engineering program at ISSAT Sousse.
- Active member of **ATAST ISSAT Mahdia** — Tunisian Association for the Future of Sciences and Technology.

### Higher Institute of Technological Studies of Sousse — ISET Sousse

**Bachelor’s Degree in Information Technology — Information Systems Development**  
September 2020 – July 2023

- Member and Lead in **GDSC**, currently known as **GDG on Campus**.

## Work Experience

### Software Engineer Intern — Wifak Bank International

**January 2026 – Present**

Developing **Wifak-Imatch**, a full-stack web application for customer and transaction compliance monitoring using **ASP.NET Core**.

- Final-year engineering project internship for the National Engineering Degree in Software Engineering at ISSAT Sousse.
- Designed to streamline compliance monitoring and improve operational efficiency.
- Remote internship with collaboration across a professional team.

### Software Engineering Intern — SW-Consulting

**August 2025 – September 2025**

Developed a dynamic data management mini-service for importing and exporting data from and into a database.

- Built an interactive and responsive frontend using **React**.
- Designed and implemented backend logic using **Laravel**.
- Focused on clean UI/UX and efficient data manipulation.

### Software Engineering Intern — Carthage Solutions

**January 2023 – June 2023**

Created **Food Doctor**, an agricultural mobile application that scans consumable products and analyzes their compatibility with user preferences.

- End-of-studies project for my Bachelor’s Degree in Information Technology at ISET Sousse.
- Developed a cross-platform mobile application using **Flutter**.
- Integrated **Firebase** for secure user management and real-time data handling.
- Connected multiple external REST APIs for real-time product analysis.

## Certifications & Achievements

### Machine Learning Summer School 2025

Completed the **Cohere Labs Open Science Community Machine Learning Summer School**, focused on modern machine learning, foundation models, retrieval, multimodal learning, and AI research topics.

- [View Certification](https://credsverse.com/credentials/70ebef01-2d93-48d7-9f11-fd4aac1fbb6e)
- [Program Page](https://labscommunity.cohere.com/community-programs/archive/summer-school)

### Foundations of User Experience Design

Completed Google’s **Foundations of User Experience Design** certificate, covering user-centered design, UX research, wireframes, prototypes, and accessible digital product experiences.

- [View Certification](https://www.coursera.org/account/accomplishments/verify/XS92R332XTTM)

### Certificate of English Level — CEFR C1

Earned a **CEFR C1 English level certificate** from Imperial English UK, demonstrating advanced English communication skills for academic and professional environments.

- [Verification Page](https://digital-english-test.com/verification)
- Verification ID: `7036911`

## Proficiency

| Area | Level |
| --- | --- |
| Web Development | 90% |
| Mobile App Development | 80% |
| Machine Learning and AI | 60% |

## Getting Started

### Prerequisites

Make sure you have the following installed:

```bash
node
npm
git
```

### Installation

```bash
# Clone this repository
git clone https://github.com/SaifRomdhaneTN/developerFolio.git

# Move into the project folder
cd developerFolio

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run locally at:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm start
```

Runs the app in development mode.

```bash
npm run build
```

Builds the app for production.

```bash
npm run deploy
```

Deploys the production build using GitHub Pages.

```bash
npm run format
```

Formats supported project files with Prettier.

```bash
npm run check-format
```

Checks formatting without modifying files.

## Environment Variables

Create a `.env` file in the root directory if you want to enable GitHub profile/project data.

```env
REACT_APP_GITHUB_TOKEN="YOUR_GITHUB_TOKEN"
GITHUB_USERNAME="SaifRomdhaneTN"
USE_GITHUB_DATA="true"
```

Keep your token private and never commit your `.env` file.

## Main Customization Files

| File | Purpose |
| --- | --- |
| `src/portfolio.js` | Main résumé, profile, skills, education, work experience, certifications, and contact data |
| `src/_globalColor.scss` | Global theme colors |
| `src/assets/images/` | Images, logos, profile assets, and certification graphics |
| `src/assets/lottie/` | Splash and animation files |
| `public/` | Static public assets |
| `package.json` | Scripts, dependencies, and deployment configuration |

## Deployment

This project supports deployment through **GitHub Pages** using the `gh-pages` package.

Before deployment, update the `homepage` field in `package.json` to match your GitHub Pages URL. For example:

```json
"homepage": "https://SaifRomdhaneTN.github.io/developerFolio"
```

Then run:

```bash
npm run deploy
```

## Contact

- **GitHub:** [SaifRomdhaneTN](https://github.com/SaifRomdhaneTN)
- **LinkedIn:** [Saif Eddine Romdhane](https://linkedin.com/in/saif-eddine-romdhane-879a8b21a)
- **Email:** [saif.romtn@gmail.com](mailto:saif.romtn@gmail.com)
- **Phone:** +216 55 540 893

## Credits

This portfolio is based on the open-source **DeveloperFolio** template by [saadpasta](https://github.com/saadpasta/developerFolio).

## License

This project follows the license provided by the original DeveloperFolio repository.
