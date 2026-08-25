import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { ResumeCTA } from "@/components/ResumeCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Sanjay N | Full Stack Developer";
const description =
  "Portfolio of Sanjay N — Computer Science & Engineering graduate (2026) and full stack developer working with JavaScript, Node.js, MongoDB and Python, with four internships and full stack project experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sanjay N",
          jobTitle: "Full Stack Developer",
          email: "mailto:Sanjaynatrajsivam@gmail.com",
          telephone: "+91-9894839498",
          address: { "@type": "PostalAddress", addressLocality: "Pollachi", addressRegion: "Tamil Nadu", addressCountry: "IN" },
          alumniOf: "Nehru Institute of Engineering and Technology, Coimbatore",
          sameAs: ["https://www.linkedin.com/in/Sanjay-n-2b65b43663"],
          knowsAbout: ["Full Stack Development", "JavaScript", "Node.js", "MongoDB", "Python", "Data Science"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
