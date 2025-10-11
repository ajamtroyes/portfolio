import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Projet React Showcase",
    link: "https://react.dev",
    description: "Un projet fictif pour démontrer mes compétences en React.",
    preview: "https://i.postimg.cc/59jL2nJt/react-preview.jpg",
  },
  {
    title: "Site Vitrine PHP/SQL",
    link: "https://example.com",
    description: "Application CRUD construite avec PHP natif et base de données.",
    preview: "https://i.postimg.cc/DwKP5gFg/php-preview.jpg",
  },
  {
    title: "My Princess Shasha",
    link: "https://my-princess-shasha.netlify.app/",
    description: "Un site web esthétique interactif avec puzzle et animation.",
    preview: "formyprincess.png",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Portfolio() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative text-white">
      {/* Fond avec effet parallax */}
      <div
        className="fixed top-0 left-0 w-full [height:180vh] -z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
        style={{
          minHeight: "200vh",
          transform: `translateY(${-offsetY * 0.3}px)`,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      />

      {/* Hero */}
      <section className="text-center px-6 md:px-20 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 flex flex-wrap gap-4 justify-center"
        >
          <a href="mailto:sawnn.grandin@epitech.eu">
            <Button className="flex gap-2">
              <Mail size={18} /> Me contacter
            </Button>
          </a>

          <a
            href="https://github.com/ajamtroyes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex gap-2 bg-gray-800 hover:bg-gray-700">
              <Github size={18} /> GitHub
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/swann-grandin-6296932b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex gap-2 bg-blue-700 hover:bg-blue-600">
              <Linkedin size={18} /> LinkedIn
            </Button>
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mt-10"
        >
          Swann Grandin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl mt-4"
        >
          Je suis le développeur web que vous cherchez.
        </motion.p>
      </section>

      {/* Compétences */}
      <section className="mb-20 flex justify-center relative z-10">
        <div className="w-full max-w-md px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Compétences
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-5 justify-items-center"
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "PHP",
              "SQL",
              "Flutter",
              "PostgreSQL",
              "MongoDB",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white text-gray-900 px-6 py-3 rounded-xl shadow-lg w-48 text-center"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projets */}
      <section className="relative z-10">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={itemVariants}
            className="min-h-screen flex items-center justify-center px-6"
          >
            <div
              className="relative max-w-4xl w-full rounded-xl overflow-hidden shadow-xl cursor-pointer group"
              onClick={() => window.open(project.link, "_blank")}
            >
              <img
                src={project.preview}
                alt={project.title}
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center transition-opacity duration-300 group-hover:bg-opacity-70">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="mt-4 text-lg">{project.description}</p>
                <span className="mt-6 px-6 py-2 bg-white text-black rounded-full font-semibold">
                  Voir le projet
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
