import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { z } from "zod";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X, User, Award } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harsh Kumar — Electronics & Communication Student Portfolio" },
      { name: "description", content: "Portfolio of Harsh Kumar, a first-year B.Tech student in Electronics and Communication at JECRC University, Jaipur. Projects, skills, education and contact." },
      { property: "og:title", content: "Harsh Kumar — Electronics & Communication Student Portfolio" },
      { property: "og:description", content: "Projects, skills and education of Harsh Kumar, a first-year B.Tech student at JECRC University, Jaipur." },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/your-username";
const LINKEDIN = "https://www.linkedin.com/in/your-username";
const EMAIL = "yourname@example.com";

const nav = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="opacity-80 transition-opacity hover:opacity-100"><Github size={18} /></a>
      <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="opacity-80 transition-opacity hover:opacity-100"><Linkedin size={18} /></a>
    </div>
  );
}

function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return <p className="label-num mb-3">{n} / {children}</p>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy-border bg-navy text-navy-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">Harsh Kumar</a>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm md:flex">
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} className="nav-link text-navy-muted hover:text-navy-foreground">{n.label}</a>)}
          <span className="h-4 w-px bg-navy-border" aria-hidden />
          <SocialIcons />
        </nav>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-navy-border px-5 pb-5 md:hidden">
          <ul className="flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-2 text-navy-muted hover:text-navy-foreground">{n.label}</a></li>
            ))}
          </ul>
          <SocialIcons />
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-7">
          <p className="mb-6 font-display text-sm text-navy-muted">Hi, I'm</p>
          <h1 className="text-5xl font-bold md:text-7xl">Harsh Kumar</h1>
          <p className="mt-5 font-display text-lg text-accent md:text-xl">B.Tech Student | Electronics and Communication</p>
          <p className="mt-6 max-w-lg text-navy-muted">
            First-year student at JECRC University, Jaipur. I write small programs in C and Python, build simple web pages, and spend most evenings figuring out why my code doesn't compile.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-sm border border-navy-border px-5 py-3 text-sm font-medium transition-colors hover:border-navy-muted">
              Contact Me
            </a>
          </div>
        </div>
        <aside className="self-end border-l border-navy-border pl-6 text-sm md:col-span-4 md:col-start-9">
          <p className="label-num text-navy-muted">Currently learning</p>
          <p className="mt-2">Data structures in C — linked lists right now, stacks next.</p>
          <p className="label-num mt-8 text-navy-muted">Based in</p>
          <p className="mt-2">Jaipur, India</p>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="reveal grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-md border border-border bg-secondary" role="img" aria-label="Profile photo placeholder">
            <User size={56} strokeWidth={1.2} className="text-muted-foreground" />
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <SectionLabel n="01">About</SectionLabel>
          <h2 className="text-3xl font-semibold md:text-4xl">A bit about me</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>I'm in my first semester of B.Tech in Electronics and Communication at JECRC University. Before college I had only written a few lines of HTML. Now I'm writing C programs for labs and Python scripts for fun.</p>
            <p>I like understanding how things work under the hood — how memory is laid out, how a browser turns HTML into a page. I also enjoy chess and reading about space missions.</p>
            <p>Over the next few years I want to get good at backend development, contribute to an open-source project, and land a summer internship by my third year.</p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm sm:grid-cols-3">
            <div><dt className="label-num">Interests</dt><dd className="mt-1">Web dev, systems</dd></div>
            <div><dt className="label-num">Outside code</dt><dd className="mt-1">Chess, reading</dd></div>
            <div><dt className="label-num">Goal</dt><dd className="mt-1">Backend engineering</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

const education = [
  { period: "2026 — Present", title: "B.Tech, Electronics and Communication", place: "JECRC University, Jaipur", note: "1st semester. Courses: Programming in C, Engineering Maths, Physics." },
  { period: "2024 — 2026", title: "Class 12 (Science, PCM)", place: "[School Name], [Board]", note: "Scored [XX]%. Took Computer Science as an elective." },
  { period: "2024", title: "Class 10", place: "[School Name], [Board]", note: "Scored [XX]%." },
];

function Education() {
  return (
    <section id="education" className="border-y border-border bg-secondary">
      <div className="reveal mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <SectionLabel n="02">Education</SectionLabel>
          <h2 className="text-3xl font-semibold md:text-4xl">Where I've studied</h2>
        </div>
        <ol className="relative border-l border-input md:col-span-7 md:col-start-6">
          {education.map((e) => (
            <li key={e.title} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border border-primary bg-background" aria-hidden />
              <p className="label-num">{e.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.place}</p>
              <p className="mt-2 text-muted-foreground">{e.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const tech = ["C", "Python", "HTML", "CSS", "Git & GitHub", "Linux basics"];
const soft = ["Communication", "Teamwork", "Time management", "Asking good questions"];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="reveal">
        <SectionLabel n="03">Skills</SectionLabel>
        <h2 className="max-w-xl text-3xl font-semibold md:text-4xl">What I can work with</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[{ t: "Technical", items: tech, note: "Comfortable with the basics; still learning the rest." }, { t: "Soft skills", items: soft, note: "Mostly picked up from group projects and school events." }].map((g) => (
            <div key={g.t} className="card-lift rounded-md border border-border bg-card p-7">
              <h3 className="text-lg font-semibold">{g.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.note}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="rounded-sm border border-input px-3 py-1 text-sm">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  { title: "Student Grade Calculator", desc: "A command-line program that reads marks for a class, calculates averages and grades, and saves a report to a text file.", tools: ["C", "File I/O"], link: GITHUB },
  { title: "Expense Tracker Script", desc: "A small Python script I use to log daily spending in a CSV and print a weekly summary by category.", tools: ["Python", "CSV"], link: GITHUB },
  { title: "This Portfolio", desc: "The site you're looking at. Built to practise layout, responsive design and basic accessibility.", tools: ["HTML", "CSS", "React"], link: GITHUB },

  {
    title: "AI Chatbot",
    desc: "An interactive AI chatbot built using Botpress. Try it out and explore its conversational capabilities.",
    tools: ["Botpress", "AI", "Webchat"],
    link: "https://cdn.botpress.cloud/webchat/v5.0/shareable.html?configUrl=https://files.bpcontent.cloud/2026/10/14/13/20261014134420-OJS2KXFF.json",
  },

];

function Projects() {
  return (
    <section id="projects" className="bg-navy text-navy-foreground">
      <div className="reveal mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label-num mb-3 text-navy-muted">04 / Projects</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Things I've built</h2>
          </div>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="nav-link text-sm text-navy-muted hover:text-navy-foreground">All repositories on GitHub</a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article key={p.title} className="card-lift flex flex-col rounded-md border border-navy-border p-6">
              <p className="label-num text-navy-muted">0{i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm text-navy-muted">{p.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
                {p.tools.map((t) => <li key={t} className="text-xs text-accent">{t}</li>)}
              </ul>
              <a href={p.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1.5 self-start border-t border-navy-border pt-4 text-sm hover:text-accent">
                <Github size={15} /> View on GitHub <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const certs = [
  { name: "Programming for Everybody (Python)", org: "Coursera — University of Michigan", year: "2026" },
  { name: "Responsive Web Design", org: "freeCodeCamp", year: "2026" },
  { name: "Introduction to C Programming", org: "NPTEL", year: "2026" },
  { name: "Participant, college coding contest", org: "JECRC University Coding Club", year: "2026" },
];

function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="reveal grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel n="05">Certificates</SectionLabel>
          <h2 className="text-3xl font-semibold md:text-4xl">Courses & achievements</h2>
        </div>
        <ul className="divide-y divide-border border-y border-border md:col-span-8">
          {certs.map((c) => (
            <li key={c.name} className="flex items-start gap-4 py-5">
              <Award size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-accent" aria-hidden />
              <div className="flex-1">
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-muted-foreground">{c.org}</p>
              </div>
              <span className="label-num">{c.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, email, message } = r.data;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    setSent(true);
  }

  const field = "mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary";

  return (
    <section id="contact" className="border-t border-border bg-secondary">
      <div className="reveal mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <SectionLabel n="06">Contact</SectionLabel>
          <h2 className="text-3xl font-semibold md:text-4xl">Get in touch</h2>
          <p className="mt-4 text-muted-foreground">Open to study groups, hackathon teams and internship advice. I usually reply within a day or two.</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><Mail size={17} className="text-accent" aria-hidden /><a href={`mailto:${EMAIL}`} className="nav-link">{EMAIL}</a></li>
            <li className="flex items-center gap-3"><MapPin size={17} className="text-accent" aria-hidden />Jaipur, India</li>
          </ul>
        </div>
        <form onSubmit={onSubmit} noValidate className="space-y-5 md:col-span-6 md:col-start-7">
          {(["name", "email"] as const).map((f) => (
            <div key={f}>
              <label htmlFor={f} className="text-sm font-medium capitalize">{f}</label>
              <input id={f} name={f} type={f === "email" ? "email" : "text"} maxLength={f === "email" ? 255 : 100} className={field} aria-invalid={!!errors[f]} />
              {errors[f] && <p className="mt-1 text-xs text-destructive">{errors[f]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} maxLength={1000} className={field} aria-invalid={!!errors["message"]} />
            {errors["message"] && <p className="mt-1 text-xs text-destructive">{errors["message"]}</p>}
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Send message <ArrowRight size={16} />
          </button>
          {sent && <p className="text-sm text-muted-foreground">Your email app should open with the message ready to send.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-navy-muted">© 2026 Harsh Kumar. Built by hand during my first semester.</p>
        <SocialIcons />
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
