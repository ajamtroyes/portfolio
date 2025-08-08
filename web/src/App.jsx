import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "My Princess Shasha",
    link: "https://my-princess-shasha.netlify.app/",
    description: "Un site web esthétique interactif avec puzzle et animation.",
    preview: "formyprincess.png",
  },
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
];

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Portfolio() {
  return (
    <div
      className="text-white min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #111827, #1f2937, #374151)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero */}
      <section className="text-center px-6 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6"
        >
          <a href="mailto:sawnn.grandin@epitech.eu">
            <Button className="flex gap-2">
              <Mail size={18} /> Me contacter
            </Button>
          </a>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
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
      <section className="mb-20 flex justify-center">
        <div className="w-full max-w-md px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Compétences
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-5 justify-items-center"
          >
            {["HTML", "CSS", "JavaScript", "React", "PHP", "SQL"].map((skill) => (
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

      {/* Projets avec preview + overlay */}
      <section>
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
              {/* Image de preview */}
              <img
                src={project.preview}
                alt={project.title}
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
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
