import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  ArrowDown,
  Check,
} from "lucide-react";
import pizzaImg from "@/assets/projects/pizza.png";
import movieImg from "@/assets/projects/movie.png";
import weatherImg from "@/assets/projects/weather.png";
import BankistImg from "@/assets/projects/Bankist.png";
import forkifyImg from "@/assets/projects/forkify.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eman Mazhar — Front-End Developer Portfolio" },
      {
        name: "description",
        content:
          "Eman Mazhar is a front-end developer building fast, responsive and beautifully animated web experiences with React, Tailwind and modern tooling. Available for Upwork & Fiverr projects.",
      },
      { property: "og:title", content: "Eman Mazhar — Front-End Developer" },
      {
        property: "og:description",
        content: "Front-end developer crafting clean, responsive, animated UIs.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "Fast React Pizza",
    desc: "A responsive pizza ordering app built with React and Redux Toolkit....",
    tags: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
    features: ["Cart management", "Dynamic routing", "Redux state handling", "Responsive design"],
    github: "https://github.com/emanmazhar7890/pizza-ordering-app",
    live: "https://eman-fast-react-pizza.netlify.app/",
    image: pizzaImg,
  },
  {
    title: "Movie App",
    desc: "Movie discovery app with search and API-based listings.",
    tags: ["React", "REST API", "React Router", "Tailwind CSS"],
    features: ["Movie search", "API integration", "Detail pages", "Responsive layout"],
    github: "https://github.com/emanmazhar7890/movieapp",
    live: "https://eman-movie-app.netlify.app/",
    image: movieImg,
  },
  {
    title: "Real-Time Weather App",
    desc: "Weather app showing live forecasts using API integration.",
    tags: ["JavaScript", "REST API", "CSS", "Responsive"],
    features: [
      "Real-time weather data",
      "Location-based search",
      "API integration",
      "Mobile-friendly UI",
    ],
    github: "https://github.com/emanmazhar7890/real-time-weather-app",
    live: "https://eman-weather-app.netlify.app/",
    image: weatherImg,
  },
  {
    title: "Bankist App",
    desc: "Interactive banking app with transfers, loans and transactions.",
    tags: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    features: ["Money transfers", "Loan requests", "Transaction history", "Interactive banking UI"],
    github: "https://github.com/emanmazhar7890/Bankist-App",
    live: "https://bankistapp-eman.netlify.app/",
    image: BankistImg,
  },
  {
    title: "Forkify App",
    desc: "Recipe search app with bookmarking and API integration.",
    tags: ["JavaScript", "REST API", "MVC Architecture", "Parcel"],
    features: ["Recipe search", "Bookmark recipes", "API integration", "Dynamic recipe details"],
    github: "https://github.com/emanmazhar7890/forkifyApp",
    live: "https://eman-forkify.netlify.app/",
    image: forkifyImg,
  },
];

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    items: "React, JavaScript (ES6+), HTML5, CSS3",
  },
  {
    icon: Palette,
    title: "UI / Styling",
    items: "Tailwind CSS, Bootstrap, ",
  },
  {
    icon: Sparkles,
    title: "Tools & More",
    items: "Git, GitHub, Vite,  REST APIs, Responsive Design",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-bold tracking-tight text-lg">
            <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
              Eman Mazhar
            </span>
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">Hire me</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative pt-36 pb-24 px-6 overflow-hidden"
        style={{ background: "var(--gradient-soft)" }}
      >
        {/* Animated blobs */}
        <div
          aria-hidden
          className="absolute -top-32 -left-20 size-[420px] rounded-full opacity-40 blur-3xl animate-blob"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div
          aria-hidden
          className="absolute top-20 right-0 size-[380px] rounded-full opacity-30 blur-3xl animate-blob"
          style={{ background: "var(--gradient-hero)", animationDelay: "-7s" }}
        />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <Badge variant="secondary" className="mb-5 rounded-full text-primary bg-accent">
              <span className="size-1.5 rounded-full bg-primary mr-2 animate-pulse" />
              Front-End Developer
            </Badge>
            <p className="text-2xl text-muted-foreground font-medium">Hello, I'm</p>
            <h1 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
                Eman Mazhar
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Front-End Developer crafting clean, responsive and beautifully animated web
              experiences with{" "}
              <span className="text-foreground font-medium">React, Tailwind & JavaScript</span>.
              Software Engineering graduate, passionate about pixel-perfect UI.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild className="rounded-full shadow-[var(--shadow-soft)]">
                <a href="#projects">
                  View my work <ArrowRight className="ml-1 size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full">
                <a href="#contact">Contact me</a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a
                href="https://github.com/emanmazhar7890"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-transform hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emanmazhar7890"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-transform hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="mailto:eman7890@example.com"
                className="hover:text-primary transition-transform hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          {/* Decorative card */}
          <div className="relative flex justify-center md:justify-end animate-fade-in">
            <div
              className="relative w-[320px] sm:w-[380px] aspect-square rounded-3xl shadow-[var(--shadow-soft)] animate-float overflow-hidden"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div className="absolute inset-[3px] rounded-3xl bg-card flex items-center justify-center">
                <div className="text-center px-8">
                  <div
                    className="mx-auto size-28 rounded-full mb-5 flex items-center justify-center text-4xl font-bold text-primary-foreground"
                    style={{ background: "var(--gradient-hero)" }}
                  >
                    EM
                  </div>
                  <p className="font-semibold text-xl">Eman Mazhar</p>
                  <p className="text-sm text-muted-foreground mt-1">Front-End Developer</p>
                  <div className="mt-5 flex justify-center gap-2 flex-wrap">
                    {["React", "Tailwind", "JavaScript"].map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <div
              className="absolute -top-4 -left-4 sm:left-0 bg-card border border-border rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] animate-float"
              style={{ animationDelay: "-2s" }}
            >
              <p className="text-xs text-muted-foreground">Years coding</p>
              <p className="font-bold">2+</p>
            </div>
            <div
              className="absolute -bottom-4 right-0 bg-card border border-border rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] animate-float"
              style={{ animationDelay: "-4s" }}
            >
              <p className="text-xs text-muted-foreground">Projects</p>
              <p className="font-bold">10+</p>
            </div>
          </div>
        </div>

        <div className="relative mt-16 flex justify-center text-muted-foreground">
          <ArrowDown className="size-5 animate-bounce" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 border-t border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight">
            About{" "}
            <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
              me
            </span>
          </h2>
          <div className="md:col-span-2 text-muted-foreground leading-relaxed space-y-4 text-base">
            <p>
              I'm <span className="text-foreground font-medium">Eman Mazhar</span>, a front-end
              developer focused on building modern, responsive and user-friendly web applications. I
              am currently pursuing my Bachelor's degree in Software Engineering and building my
              skills through real-world projects and hands-on practice.
            </p>
            <p>
              I have experience working as a Front-End Developer intern at{" "}
              <span className="text-foreground font-medium">Engmatix</span>, where I learned how to
              build responsive interfaces, collaborate in a team and improve real project workflows.
            </p>
            <p>
              I enjoy turning UI designs into clean, interactive and accessible web applications
              using React and modern frontend tools. My focus is on writing clean code, reusable
              components and creating smooth user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Experience / Education */}
      <section id="experience" className="px-6 py-24 border-t border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 max-w-2xl animate-fade-up">
            <h2 className="text-4xl font-bold tracking-tight">Experience & Education</h2>
            <p className="mt-3 text-muted-foreground">A quick look at my journey so far.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-7 hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-11 rounded-xl flex items-center justify-center bg-accent text-primary">
                  <Briefcase className="size-5" />
                </div>
                <Badge variant="secondary" className="rounded-full">
                  Internship
                </Badge>
              </div>
              <h3 className="text-xl font-semibold">Front-End Developer Intern</h3>
              <p className="text-primary font-medium">Engmatix</p>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Built and improved responsive UI components, collaborated with designers and
                back-end developers, and shipped real features using React and modern CSS.
              </p>
            </Card>

            <Card
              className="p-7 hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="size-11 rounded-xl flex items-center justify-center bg-accent text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <Badge variant="secondary" className="rounded-full">
                  Education
                </Badge>
              </div>
              <h3 className="text-xl font-semibold">Bachelor's in Software Engineering</h3>
              <p className="text-primary font-medium">University Graduate</p>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Studied software design, data structures, web development, databases and modern
                engineering practices.
              </p>
            </Card>

            <Card
              className="p-7 hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="size-11 rounded-xl flex items-center justify-center bg-accent text-primary">
                  <Award className="size-5" />
                </div>
                <Badge variant="secondary" className="rounded-full">
                  Certificate
                </Badge>
              </div>
              <h3 className="text-xl font-semibold">Web Development Certificate</h3>
              <p className="text-primary font-medium">NexSkill</p>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Completed a comprehensive web development program at NexSkill, covering HTML, CSS,
                JavaScript and modern frontend frameworks with hands-on projects.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-2xl animate-fade-up">
            <h2 className="text-4xl font-bold tracking-tight">What I do</h2>
            <p className="mt-3 text-muted-foreground">The tools and stacks I use every day.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map(({ icon: Icon, title, items }, i) => (
              <Card
                key={title}
                className="p-7 hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="size-12 rounded-xl flex items-center justify-center mb-5 text-primary-foreground"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{items}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 border-t border-border bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-2xl animate-fade-up">
            <h2 className="text-4xl font-bold tracking-tight">Selected projects</h2>
            <p className="mt-3 text-muted-foreground">
              Some projects I've built using React, JavaScript and modern frontend technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Card
                key={p.title}
                className="group flex flex-col overflow-hidden p-0 hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="block relative overflow-hidden border-b border-border aspect-video bg-muted"
                  aria-label={`${p.title} live demo`}
                >
                  <img
                    src={p.image}
                    alt={`${p.title} img`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {p.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="size-3.5 mt-0.5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 pt-2 mt-auto">
                    <Button asChild size="sm" className="rounded-full">
                      <a href={p.live} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 size-4" /> Live Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="rounded-full">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 size-4" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative px-6 py-32 border-t border-border overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 100%, var(--primary) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let's build something{" "}
            <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? I'm available for freelance work on Upwork and Fiverr — or just
            say hi.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild className="rounded-full shadow-[var(--shadow-soft)]">
              <a href="mailto:eman@example.com">
                <Mail className="mr-2 size-4" /> emanmazhar7890@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full">
              <a href="https://github.com/emanmazhar7890" target="_blank" rel="noreferrer">
                <Github className="mr-2 size-4" /> GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full">
              <a href="https://www.linkedin.com/in/emanmazhar7890" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 size-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Eman Mazhar — Front-End Developer. Crafted with care.
      </footer>
    </div>
  );
}
