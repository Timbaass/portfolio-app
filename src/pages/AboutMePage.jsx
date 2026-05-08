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
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto px-12 text-white">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-48 h-48 flex-shrink-0">
            <img
              src={profilePicture}
              alt="Özgür Meşe"
              className="rounded-full w-full h-full object-cover border-4 border-stone-700"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-stone-300 text-lg leading-relaxed">
              I am a Computer Engineering student at Marmara University
              with a passion for software development. I specialize in{" "}
              <span className="text-white font-medium">web development</span>{" "}
              and{" "}
              <span className="text-white font-medium">machine learning</span>.
              I enjoy building full-stack applications and exploring AI
              technologies to create innovative solutions.
            </p>
            <div className="flex gap-3 mt-6">
              {contactData.map((contact) => (
                <Contact key={contact.name} contactData={contact} />
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">🎓</span> Education
          </h2>
          <div className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
              <div>
                <h3 className="text-xl font-semibold">{education.school}</h3>
                <p className="text-stone-400">{education.degree}</p>
              </div>
              <div className="text-right">
                <p className="text-stone-300 font-medium">{education.date}</p>
                <p className="text-stone-400">GPA: {education.gpa}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">📜</span> Certificates
          </h2>
          <div className="grid gap-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700 hover:border-stone-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <p className="text-stone-400">{cert.issuer}</p>
                  </div>
                  <p className="text-stone-300 font-medium">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Do Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">💻</span> What I Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700">
              <h3 className="text-xl font-semibold mb-3">
                Full Stack Development
              </h3>
              <p className="text-stone-400">
                Building modern web applications with React, Node.js, Express,
                and MongoDB. Creating responsive and user-friendly interfaces
                with TailwindCSS.
              </p>
            </div>
            <div className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700">
              <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
              <p className="text-stone-400">
                Exploring AI and ML technologies, implementing supervised
                learning models, and applying data-driven solutions to
                real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
