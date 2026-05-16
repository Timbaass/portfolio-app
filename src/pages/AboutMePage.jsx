import { contactData } from "../../data.js";
import Contact from "../components/ui/Contact.jsx";
import profilePicture from "../assets/profile-picture.png";

function AboutMePage() {
  const education = {
    school: "Marmara University",
    degree: "Bachelor of Science in Computer Engineering",
    date: "2023 - 2027",
    gpa: "3.37 / 4.00",
  };

  const certificates = [
    {
      name: "Professional Data Analytics Certificate",
      issuer: "Google (Coursera)",
      date: "2025",
    },
    {
      name: "The Complete SQL Bootcamp: Go from Zero to Hero",
      issuer: "Udemy",
      date: "2024",
    },
    {
      name: "Python (Basic & Intermediate)",
      issuer: "HackerRank",
      date: "2024",
    },
  ];

  return (
    <div className="w-full py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-5 sm:px-12 text-text-primary">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-6 sm:gap-10 items-center mb-12 sm:mb-20">
          <div className="flex-shrink-0">
            <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full ring-2 ring-white/10 ring-offset-3 sm:ring-offset-4 ring-offset-surface overflow-hidden">
              <img
                src={profilePicture}
                alt="Özgür Meşe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4">About Me</h1>
            <p className="text-text-secondary text-sm sm:text-lg leading-relaxed">
              I am a Computer Engineering student at Marmara University
              with a passion for software development. I specialize in{" "}
              <span className="text-text-primary font-medium">web development</span>{" "}
              and{" "}
              <span className="text-text-primary font-medium">machine learning</span>.
              I enjoy building full-stack applications and exploring AI
              technologies to create innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 sm:mt-6">
              {contactData.map((contact) => (
                <Contact key={contact.name} contactData={contact} />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-lg sm:text-2xl font-semibold tracking-tight mb-4 sm:mb-6 flex items-center gap-2">
            <span className="text-lg">🎓</span> Education
          </h2>
          <div className="bg-surface-raised rounded-xl p-4 sm:p-6 border border-surface-border">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-1.5">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">{education.school}</h3>
                <p className="text-text-muted text-sm sm:text-base">{education.degree}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-text-secondary text-sm font-medium">{education.date}</p>
                <p className="text-text-muted text-sm">GPA: {education.gpa}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-lg sm:text-2xl font-semibold tracking-tight mb-4 sm:mb-6 flex items-center gap-2">
            <span className="text-lg">📜</span> Certificates
          </h2>
          <div className="grid gap-3">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-surface-raised rounded-xl p-4 sm:p-5 border border-surface-border hover:border-surface-border-hover transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-1.5">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold">{cert.name}</h3>
                    <p className="text-text-muted text-sm">{cert.issuer}</p>
                  </div>
                  <p className="text-text-secondary text-sm font-medium">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I Do Section */}
        <section>
          <h2 className="text-lg sm:text-2xl font-semibold tracking-tight mb-4 sm:mb-6 flex items-center gap-2">
            <span className="text-lg">💻</span> What I Do
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-surface-raised rounded-xl p-5 sm:p-6 border border-surface-border">
              <h3 className="text-base sm:text-lg font-semibold mb-2.5">
                Full Stack Development
              </h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                Building modern web applications with React, Node.js, Express,
                and MongoDB. Creating responsive and user-friendly interfaces
                with TailwindCSS.
              </p>
            </div>
            <div className="bg-surface-raised rounded-xl p-5 sm:p-6 border border-surface-border">
              <h3 className="text-base sm:text-lg font-semibold mb-2.5">Machine Learning</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                Exploring AI and ML technologies, implementing supervised
                learning models, and applying data-driven solutions to
                real-world problems.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutMePage;
