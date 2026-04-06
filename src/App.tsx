import React from "react";
import { motion } from "framer-motion";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const sectionIds = {
  home: "home",
  about: "about",
  experience: "experience",
  projects: "projects",
  skills: "skills",
  education: "education",
  certifications: "certifications",
  contact: "contact",
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-soft text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="section py-3 flex items-center justify-between">
        <button
          onClick={() => scrollToId(sectionIds.home)}
          className="font-heading text-lg font-semibold tracking-tight text-slate-900"
        >
          Jinit <span className="text-slate-500">Patel</span>
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <NavLink label="About" target={sectionIds.about} />
          <NavLink label="Experience" target={sectionIds.experience} />
          <NavLink label="Projects" target={sectionIds.projects} />
          <NavLink label="Skills" target={sectionIds.skills} />
          <NavLink label="Education" target={sectionIds.education} />
          <NavLink label="Contact" target={sectionIds.contact} />
        </nav>

      <div className="flex items-center gap-3 text-xs">
        <a
          href="https://drive.google.com/file/d/1lzr6ixGDsrIzMBbd23HK4T8xKmHICPgR/view?usp=sharing"
          target="_blank"
          className="hidden md:inline-flex px-3 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
        >
          Resume
        </a>

        <a
          href="https://www.linkedin.com/in/jinitpatel04"
          target="_blank"
          className="hidden sm:inline-flex px-3 py-1.5 rounded-full border border-slate-300 hover:border-slate-400 hover:bg-white transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/jinit2000"
          target="_blank"
          className="inline-flex px-3 py-1.5 rounded-full border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition"
        >
          GitHub
        </a>
      </div>

      </div>
    </header>
  );
};

const NavLink: React.FC<{ label: string; target: string }> = ({
  label,
  target,
}) => (
  <button
    onClick={() => scrollToId(target)}
    className="hover:text-primary transition-colors"
  >
    {label}
  </button>
);

const HeroSection: React.FC = () => {
  return (
    <section
      id={sectionIds.home}
      className="section pt-28 lg:pt-32 pb-20 flex flex-col lg:flex-row items-center gap-14"
    >
      {/* Left side text */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center px-3 py-1 text-[11px] font-medium rounded-full bg-white border border-slate-200 shadow-sm text-slate-600">
          Software Developer • Python • Full-Stack
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
          I build{" "}
          <span className="text-primary">scalable</span> and{" "}
          <span className="text-primary">reliable</span> software.
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
          I’m a Software Developer skilled in Python, Java, SQL, REST API
          development, and full-stack engineering. I focus on building
          distributed systems, internal tools, and data-driven applications with
          clean architecture and automated CI/CD pipelines.
        </p>

        <div className="flex flex-wrap gap-3">
        <button
          onClick={() => scrollToId(sectionIds.projects)}
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full bg-slate-900 text-white hover:bg-black transition shadow-sm"
        >
          View Projects
        </button>

        <button
          onClick={() => scrollToId(sectionIds.contact)}
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full border border-slate-300 text-slate-800 hover:bg-white hover:shadow-sm transition"
        >
          Contact Me
        </button>

        
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1lzr6ixGDsrIzMBbd23HK4T8xKmHICPgR/view?usp=sharing",
              "_blank"
            )
          }
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
        >
          View Resume
        </button>
      </div>


        <div className="flex flex-wrap gap-2 text-[11px] mt-2">
          {[
            "Python",
            "Java",
            "Flask",
            "Django",
            "React",
            "REST APIs",
            "SQL",
            "Docker",
            "Jenkins",
            "Azure",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="relative w-72 h-auto sm:w-80 rounded-3xl bg-white border border-slate-200 shadow-soft flex flex-col items-center py-10 px-6 overflow-hidden">

          {/* JP circle with animation */}
          <motion.div
            className="w-24 h-24 rounded-full bg-slate-900/5 border border-slate-300 flex items-center justify-center text-slate-900 font-heading text-3xl"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            JP
          </motion.div>

          {/* Name */}
          <p className="mt-4 font-heading text-lg font-semibold text-slate-900">
            Jinit Patel
          </p>

          {/* Title */}
          <p className="text-xs text-slate-500">
            Software Developer • Full-Stack Engineer
          </p>

          {/* Education box */}
          <div className="mt-6 w-full px-3 py-3 rounded-2xl bg-soft border border-slate-200 text-center">
            <p className="text-[12px] font-medium text-slate-700">
              Master’s in Software Engineering
            </p>
            <p className="text-[10px] text-slate-500 mt-1">
              Carleton University · Completed Jan 2026
            </p>
          </div>

        </div>
      </motion.div>

    </section>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id={sectionIds.about} className="bg-white py-20">
      <div className="section max-w-3xl mx-auto">
        
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-2">
            About Me
          </h2>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            I’m a Software Developer with experience in Python, Java, SQL, REST
            APIs, and full-stack engineering. I’ve developed internal tools,
            web applications, distributed systems, and machine-learning–based
            solutions across academic and industry environments. I’ve also worked 
            as a Teaching Assistant, helping students understand programming 
            fundamentals, debugging, and software best practices.
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            I enjoy designing clean architectures, writing maintainable code,
            and using CI/CD pipelines to ship reliable features. My work includes 
            real-time stock analysis tools, socket-based distributed systems, and 
            a face mask detection system with high accuracy. I’m comfortable with 
            Agile teamwork, Git workflows, CI/CD automation, Docker, and cloud-ready 
            development.
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            I completed my Master of Engineering in Engineering Practice (Software) 
            at Carleton University in January 2026 with a GPA of 3.47/4.0. My graduate 
            work strengthened my foundation in scalable backend services, modern 
            JavaScript frameworks, and cloud-ready software development.
          </p>
        </motion.div>

      </div>
    </section>
  );
};



const ExperienceSection: React.FC = () => {
  const jobs = [
  {
    title: "Teaching Assistant — COMP 3007 Programming Paradigms",
    company: "Carleton University · Part-time · Ottawa, ON · Hybrid",
    date: "Jan 2025 – May 2025",
    points: [
      "Supported 30+ graduate students in functional programming (Scheme) and logic programming (Prolog), holding weekly office hours, grading 100+ assignments, and delivering structured, actionable feedback that improved submission quality over the semester.",
      "Developed supplementary study resources and worked 1-on-1 with students on debugging strategies, Git workflows, and software engineering best practices, contributing to stronger student performance across core assessment criteria.",
      "Collaborated with the course instructor to streamline grading workflows and maintain consistent evaluation standards, helping deliver a smooth course experience for a class of 30+ over a 5-month term.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Nivaan Infotech Complete IT Solutions · Full-time · Visnagar, India",
    date: "Jan 2023 – Mar 2024",
    points: [
      "Designed and built RESTful APIs using Django REST Framework and PostgreSQL for core product features across 3+ client-facing applications, optimizing ORM queries and indexed lookups to reduce page load times by ~35% and keep response times under 200ms.",
      "Delivered production-ready full-stack Python/Django applications end-to-end, from database schema design and API development to frontend integration using HTML, CSS, Bootstrap, and JavaScript, across a 15-month client engagement.",
      "Implemented CI/CD pipelines using Git and automated deployment workflows, reducing manual release effort and cutting deployment time from several hours to under 15 minutes per release cycle.",
    ],
  },
  {
    title: "Python Developer",
    company: "Nivaan Infotech Complete IT Solutions · Full-time · Visnagar, India",
    date: "Jul 2022 – Dec 2022",
    points: [
      "Built and tested Python scripts and backend modules to automate 2 recurring internal business workflows, reducing manual processing time by ~40% and improving operational consistency across the team.",
      "Debugged and resolved software defects across existing Python codebases, improving application stability and reducing reported error frequency within the first 3 months of joining.",
      "Contributed to code reviews and Git version control workflows across a 4-person development team, maintaining a clean commit history and supporting team-wide coding standards.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "AppBits Technologies · Internship · Ahmedabad, India",
    date: "Jan 2022 – May 2022",
    points: [
      "Developed and optimized web applications using HTML, JavaScript, jQuery, Java, and MySQL, while managing 500+ records with Python and MongoDB in a production data pipeline.",
      "Collaborated with a cross-functional team to implement responsive UI components and backend integrations, shipping features across multiple client projects within tight sprint timelines.",
      "Gained hands-on experience with full-stack web architecture, REST integrations, and Agile workflows in a professional software consultancy environment.",
    ],
  },
  {
    title: "Data Science & Business Analytics Intern",
    company: "The Sparks Foundation · Internship · Remote",
    date: "Apr 2021 – May 2021",
    points: [
      "Applied supervised and unsupervised machine learning techniques, including classification and clustering, on datasets of 10,000+ data points using Python, scikit-learn, and Pandas.",
      "Built and evaluated models including decision trees, K-means clustering, and linear regression, documenting findings and presenting results as part of a structured internship programme.",
      "Strengthened applied data science skills across the full pipeline: data cleaning, feature selection, model training, evaluation metrics, and visualisation using Matplotlib and Seaborn.",
    ],
  },
];

  return (
    <section id={sectionIds.experience} className="bg-soft py-16">
      <div className="section">
        <motion.h2
          className="font-heading text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-slate-200 pl-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              className="mb-10 relative"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              {/* timeline dot */}
              <div className="absolute -left-3 w-2.5 h-2.5 rounded-full bg-slate-900 border border-white shadow" />

              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-slate-900">
                      {job.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {job.date}
                  </p>
                </div>
                <ul className="mt-3 text-xs sm:text-sm text-slate-700 space-y-1.5">
                  {job.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "ML-Powered Stock Analyzer",
      year: "2024–Present",
      tech: ["Python", "scikit-learn", "Pandas", "yFinance", "Flask", "Feature Engineering", "Machine Learning"],
      desc: "Python web app generating explainable BUY/HOLD/SELL probability signals across short-term (~2 weeks) and swing (~3 months) time windows using a full machine learning pipeline built on historical OHLCV data.",
      bullets: [
        "Built v1 as a rule-based scoring engine using 6 technical and fundamental indicators including RSI, 50/200-day SMA, pivot support/resistance, P/E Ratio, EPS, and ROE, producing human-readable BUY/HOLD/SELL recommendations through a Tkinter desktop GUI.",
        "Rebuilt the system as a full ML pipeline with feature engineering, scikit-learn model training on historical OHLCV data, evaluation on unseen market data, and explainable prediction output showing the top features driving each signal.",
        "Integrated real-time stock data with yfinance and graceful error handling for missing fundamentals and incomplete API responses, testing end-to-end on AAPL, MSFT, TSLA, NVDA, AMZN, and GOOGL.",
      ],
      githubv1: "https://github.com/jinit2000/stock-analyzer",
      githubv2: "https://github.com/jinit2000/stock-analyzer-ml-v2"
    },
    {
      title: "Distributed System — Server-Client Communication",
      year: "2024",
      tech: ["Python", "Sockets", "Threading", "Distributed Systems", "System Design"],
      desc: "Python-based distributed system where nodes act as both servers and clients simultaneously, with fault-tolerant communication, real-time monitoring, and automatic recovery mechanisms.",
      bullets: [
        "Implemented a multi-node architecture using Python sockets and threading, allowing each node to function as both a server and client for peer-to-peer distributed communication without a central coordinator.",
        "Built heartbeat monitoring and data-loss prevention mechanisms to detect node failures in real time, automatically trigger reconnection logic, and maintain availability during partial outages.",
        "Designed and tested fault-tolerant message delivery with sequence tracking and acknowledgement protocols to ensure no data loss during node disconnections or network interruptions.",
      ],
      github: "",
    },
    {
      title: "Django Real-Time Chat Application",
      year: "2020",
      tech: ["Django", "Python", "JavaScript", "HTML & CSS", "PostgreSQL", "REST APIs"],
      desc: "Topic-based chat room web application where users can register, create rooms, and discuss in real time, built end-to-end with Django backend and vanilla JavaScript frontend.",
      bullets: [
        "Implemented full user authentication, room-based messaging with topic categorisation, and session management using Django’s built-in auth framework and ORM.",
        "Built a responsive frontend using HTML, CSS, and vanilla JavaScript, handling dynamic UI updates without a heavy JavaScript framework.",
        "Deployed and tested the application end-to-end, validating concurrent user sessions, cross-browser compatibility, and message persistence across room sessions.",
      ],
      github: "https://github.com/jinit2000/django-real-time-chat-application",
    },
    {
      title: "Face Mask Detection System",
      year: "2020",
      tech: ["Python", "Keras", "TensorFlow", "OpenCV", "Computer Vision", "CNN", "Machine Learning"],
      desc: "Real-time face mask detection system using convolutional neural networks and live video processing, built to support public health compliance during COVID-19.",
      bullets: [
        "Trained a CNN model using Keras and TensorFlow on a preprocessed image dataset with augmentation, resizing, and normalisation, achieving ~95% classification accuracy on the held-out test set.",
        "Integrated the trained model with OpenCV for real-time webcam video processing, detecting and classifying faces as masked or unmasked at 20+ FPS on standard consumer hardware.",
        "Packaged the solution as a standalone Python application with a clean real-time video overlay, making results easy to interpret for non-technical users.",
      ],
      github: "",
    },
  ];

  return (
    <section id={sectionIds.projects} className="bg-white py-16">
      <div className="section">
        <motion.h2
          className="font-heading text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              className="bg-soft border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <span className="text-[11px] text-slate-500 border border-slate-200 rounded-full px-2 py-0.5">
                  {project.year}
                </span>
              </div>
              <p className="text-sm text-slate-700 mb-2">{project.desc}</p>
              <ul className="text-xs text-slate-700 space-y-1 mb-3">
                {project.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-2">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] rounded-full bg-white border border-slate-200 text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-medium text-primary hover:underline"
                  >
                    View Code
                  </a>
                )}

                {project.githubv1 && (
                  <a
                    href={project.githubv1}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-medium text-primary hover:underline"
                  >
                    Rule-Based v1
                  </a>
                )}

                {project.githubv2 && (
                  <a
                    href={project.githubv2}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-medium text-primary hover:underline"
                  >
                    ML-Based v2
                  </a>
                )}
              </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection: React.FC = () => {
  const columns = [
    {
      title: "Languages",
      items: ["Python", "Java", "C++", "R", "PHP"],
    },
    {
      title: "Web & Frameworks",
      items: [
        "HTML & CSS",
        "JavaScript",
        "Bootstrap",
        "jQuery",
        "Flask",
        "Django",
        "Spring MVC",
        "React",
        "Angular",
      ],
    },
    {
      title: "Databases & Libraries",
      items: [
        "Oracle",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "DB2",
        "kdb+ (basic)",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      title: "Tools & Concepts",
      items: [
        "Git & GitHub",
        "Bitbucket",
        "Jira",
        "Docker",
        "Jenkins Pipelines",
        "Azure",
        "CI/CD",
        "Microservices",
        "Unit Testing",
        "Agile & Waterfall",
      ],
    },
  ];

  return (
    <section id={sectionIds.skills} className="bg-soft py-16">
      <div className="section">
        <motion.h2
          className="font-heading text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-5">
          {columns.map((col, idx) => (
            <motion.div
              key={col.title}
              className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <h3 className="font-heading text-sm font-semibold mb-2 text-slate-900">
                {col.title}
              </h3>
              <ul className="text-xs text-slate-700 space-y-1.5">
                {col.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection: React.FC = () => {
  return (
    <section id={sectionIds.education} className="bg-white py-16">
      <div className="section">
        <motion.h2
          className="font-heading text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-soft border border-slate-200 rounded-2xl p-5 shadow-sm"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="font-heading text-base sm:text-lg font-semibold text-slate-900">
              Master of Engineering in Engineering Practice (Software) (GPA: 3.47/4.0)
            </h3>
            <p className="text-sm text-slate-600">
              Carleton University, Ottawa, Canada
            </p>
            <p className="text-xs text-slate-500 mt-1">May 202 - Jan 2026</p>
          </motion.div>

          <motion.div
            className="bg-soft border border-slate-200 rounded-2xl p-5 shadow-sm"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h3 className="font-heading text-base sm:text-lg font-semibold text-slate-900">
              Bachelor of Computer Engineering (CGPA: 9.07)
            </h3>
            <p className="text-sm text-slate-600">
              Gujarat Technological University, Ahmedabad, India
            </p>
            <p className="text-xs text-slate-500 mt-1">Jun 2018 – May 2022</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CertificationsSection: React.FC = () => {
  const certs = [
    "AWS Cloud Practitioner (course)",
    "Complete Web Development Bootcamp",
    "Selenium WebDriver with Java – Basics to Advanced",
    "100 Days of Code: Python Pro Bootcamp",
  ];

  return (
    <section id={sectionIds.certifications} className="bg-soft py-16">
      <div className="section">
        <motion.h2
          className="font-heading text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications & Courses
        </motion.h2>
        <motion.ul
          className="grid md:grid-cols-2 gap-4 text-sm text-slate-700"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {certs.map((c) => (
            <li
              key={c}
              className="bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm"
            >
              • {c}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section id={sectionIds.contact} className="bg-white py-20">
      <div className="section max-w-4xl mx-auto text-center space-y-10">

        <motion.h2
          className="font-heading text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-base text-slate-700 leading-relaxed mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          I’m open to Software Developer, Python Developer, and Full-Stack
          opportunities — as well as collaborations on interesting technical
          projects.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-10 text-left mx-auto max-w-3xl">
          
          <div className="space-y-4">
            <p className="text-sm">
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              <a
                href="mailto:jinitpatel041120@gmail.com"
                className="text-primary hover:underline"
              >
                jinitpatel041120@gmail.com
              </a>
            </p>

            <p className="text-sm">
              <span className="font-semibold text-slate-900">Location:</span>{" "}
              Ottawa, ON, Canada
            </p>
          </div>

          
          <div className="space-y-4">
            <p className="text-sm">
              <span className="font-semibold text-slate-900">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/jinitpatel04"
                target="_blank"
                className="text-primary hover:underline"
              >
                linkedin.com/in/jinitpatel04
              </a>
            </p>

            <p className="text-sm">
              <span className="font-semibold text-slate-900">GitHub:</span>{" "}
              <a
                href="https://github.com/jinit2000"
                target="_blank"
                className="text-primary hover:underline"
              >
                github.com/jinit2000
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


const Footer: React.FC = () => {
  return (
    <footer className="bg-soft border-t border-slate-200 py-6 mt-4">
      <div className="section flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Jinit Patel. All rights reserved.</p>
        <p>Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
};

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-slate-900 text-white w-10 h-10 flex items-center justify-center text-lg shadow-lg hover:bg-black transition"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default App;
