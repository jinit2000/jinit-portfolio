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

        {/* ⭐ NEW RESUME BUTTON ⭐ */}
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

      {/* Right side card */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-white border border-slate-200 shadow-soft flex flex-col items-center justify-center overflow-hidden">
          <motion.div
            className="w-24 h-24 rounded-full bg-slate-900/5 border border-slate-300 flex items-center justify-center text-slate-900 font-heading text-3xl"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            JP
          </motion.div>
          <p className="mt-4 font-heading text-lg font-semibold text-slate-900">
            Jinit Patel
          </p>
          <p className="text-xs text-slate-500">
            Software Developer • Full-Stack Engineer
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
            <div className="px-3 py-2 rounded-2xl bg-soft border border-slate-200">
              <p>Master of Engineering</p>
              <p className="text-[10px] text-slate-500">Carleton University</p>
            </div>
            <div className="px-3 py-2 rounded-2xl bg-soft border border-slate-200">
              <p>3+ Internships</p>
              <p className="text-[10px] text-slate-500">Python / Web / DS</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id={sectionIds.about} className="bg-white py-16">
      <div className="section grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          className="md:col-span-3 space-y-4"
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
            APIs, and full-stack engineering. I’ve developed internal tools, web
            applications, distributed systems, and machine-learning–based
            solutions across academic and industry environments.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            I enjoy designing clean architectures, writing maintainable code, and
            using CI/CD pipelines to ship reliable features. My work includes
            real-time stock analysis tools, socket-based distributed systems,
            and a face mask detection system with high accuracy.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Currently, I’m pursuing a Master of Engineering in Engineering
            Practice (Software) at Carleton University and focusing on scalable
            backend services, modern JavaScript frameworks, and cloud-ready
            solutions.
          </p>
        </motion.div>

        <motion.div
          className="md:col-span-2 space-y-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-heading text-sm font-semibold text-slate-900 tracking-wide">
            Snapshot
          </h3>
          <ul className="text-sm text-slate-700 space-y-2">
            <li>• Master’s in Engineering Practice (Software) at Carleton.</li>
            <li>• Experience as Full-Stack, Python Developer, and TA.</li>
            <li>• Built ML, web, and distributed system projects.</li>
            <li>• Comfortable with Agile, Git, CI/CD, Docker, and cloud.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceSection: React.FC = () => {
  const jobs = [
    {
      title: "Teaching Assistant (Programming Paradigm)",
      company: "Carleton University, Ottawa",
      date: "Jan 2025 – May 2025",
      points: [
        "Proctored quizzes and evaluated 30+ hours of assignments.",
        "Assisted 50+ students with debugging, testing strategies, and Git.",
        "Explained complex programming concepts during office hours.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Nivaan Infotech, Visnagar, India",
      date: "Jan 2023 – Mar 2024",
      points: [
        "Developed internal web apps using Python (Flask), HTML, CSS, Bootstrap.",
        "Improved system architecture patterns for maintainability and performance.",
      ],
    },
    {
      title: "Python Developer",
      company: "Nivaan Infotech, Visnagar, India",
      date: "Jul 2022 – Dec 2022",
      points: [
        "Wrote reusable, testable, and scalable code for multiple Python apps.",
        "Integrated applications with databases and collaborated with UI/UX teams.",
        "Used Agile, pair programming, continuous integration, and scrum events.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "AppBits Technologies, Ahmedabad, India",
      date: "Jan 2022 – May 2022",
      points: [
        "Developed and optimized web apps using HTML, JavaScript, jQuery, Java, and MySQL.",
        "Managed 500+ records using Python and MongoDB.",
      ],
    },
    {
      title: "Android / Flutter Developer Intern",
      company: "AppBits Technologies, Ahmedabad, India",
      date: "May 2021 – Jun 2021",
      points: [
        "Built cross-platform apps with MVC architecture, APIs, and cloud storage.",
        "Used Git and GitHub to collaborate with multiple team members.",
      ],
    },
    {
      title: "Data Science & Business Analytics Intern",
      company: "The Sparks Foundation",
      date: "Apr 2021 – May 2021",
      points: [
        "Worked on ML classification and clustering with 10K+ data points.",
        "Applied supervised and unsupervised learning in Python.",
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
      title: "Stock Analyzer",
      year: "2025",
      tech: ["Python", "yFinance", "TA-Lib", "Tkinter"],
      desc: "Real-time stock analysis tool with technical indicators, pivot-based support/resistance, and BUY/HOLD/SELL scoring.",
      bullets: [
        "Processed 250+ trading days of historical data.",
        "Improved decision clarity by ~40% during back-tests.",
        "Tkinter GUI with 10+ financial metrics.",
      ],
      github: "", // fill GitHub link later if you have it
    },
    {
      title: "Distributed System with Server-Client Communication",
      year: "2024",
      tech: ["Python", "Sockets"],
      desc: "Python-based distributed system with nodes acting as both servers and clients.",
      bullets: [
        "Implemented heartbeat monitoring and data loss prevention.",
        "Designed fault-tolerant mechanisms and real-time connectivity.",
      ],
      github: "",
    },
    {
      title: "Face Mask Detection System",
      year: "2020",
      tech: ["Python", "OpenCV", "Keras"],
      desc: "Real-time face mask detection system using CNNs and live video processing.",
      bullets: [
        "Achieved ~95% model accuracy.",
        "Processed thousands of frames in real time.",
      ],
      github: "",
    },
    {
      title: "E-Commerce Watch Website",
      year: "2024",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      desc: "Full-stack e-commerce site with add-to-cart, dynamic product pages, and responsive UI.",
      bullets: [
        "Built complete frontend + backend stack.",
        "Designed responsive layout for multiple devices.",
      ],
      github: "",
    },
    {
      title: "MyDiscord",
      year: "2020",
      tech: ["Django", "HTML", "CSS", "JavaScript"],
      desc: "Topic-based chat rooms where users can create rooms and discuss in real time.",
      bullets: [
        "Implemented authentication and room-based messaging.",
      ],
      github: "",
    },
    {
      title: "Journey Planner",
      year: "2019",
      tech: ["HTML", "CSS", "JavaScript", "J2EE", "MySQL"],
      desc: "Travel planning web app with sign-up, login, and basic journey management using JSP/Servlets.",
      bullets: [
        "Used JSP for server-side rendering.",
        "Sparked interest in SEO and web performance.",
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-[11px] font-medium text-primary hover:underline"
                  >
                    View Code
                  </a>
                )}
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
      title: "Databases & Data",
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
          Tech Stack
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
              Master of Engineering in Engineering Practice (Software)
            </h3>
            <p className="text-sm text-slate-600">
              Carleton University, Canada
            </p>
            <p className="text-xs text-slate-500 mt-1">Expected Dec 2025</p>
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
          {/* Left column */}
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

          {/* Right column */}
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
