import { useState, useEffect, useRef, ReactNode } from 'react';
import {
  personalInfo,
  researchExperiences,
  educations,
  projects,
  publications,
  skills,
  honorsAndAwards,
  leadershipActivities,
  workshops,
  snapshots,
  editorialActivities,
  professionalServices
} from './data';
import {
  BookOpen,
  GraduationCap,
  Award,
  FileText,
  ExternalLink,
  ChevronRight,
  Search,
  Bookmark,
  Calendar,
  Layers,
  User,
  CheckCircle,
  Briefcase,
  Compass,
  FileBadge,
  ChevronDown,
  ChevronUp,
  Info,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Printer,
  X,
  Smile
} from 'lucide-react';
import FauxTerminal from './components/FauxTerminal';
import { DeveloperAvatar } from './components/DeveloperAvatar';
import Marquee from './components/Marquee';
import SectionHeader from './components/SectionHeader';
import ContactForm from './components/ContactForm';

// Scroll reveal tracker for subtle clinical fade-ups
function ScrollReveal({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.04, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [pubSearchQuery, setPubSearchQuery] = useState('');
  const [showAllConferences, setShowAllConferences] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [utcTime, setUtcTime] = useState('');

  // Clock state
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);


  // Filter and split publications dynamically by section
  const matchesSearch = (pub: typeof publications[0], query: string) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      pub.title.toLowerCase().includes(q) ||
      pub.source.toLowerCase().includes(q) ||
      pub.authors.toLowerCase().includes(q)
    );
  };

  const matchedJournals = publications.filter(pub => pub.type === 'journal' && matchesSearch(pub, pubSearchQuery));
  const matchedConferences = publications.filter(pub => pub.type === 'conference' && matchesSearch(pub, pubSearchQuery));
  const matchedIPs = publications.filter(pub => pub.type === 'intellectual_property' && matchesSearch(pub, pubSearchQuery));

  // Author Bold Renderer
  const renderAuthors = (authorsStr: string) => {
    const namesToBold = ["Arif, A.", "Amaan Arif", "Arif, A"];
    let parts: (string | ReactNode)[] = [authorsStr];

    namesToBold.forEach(name => {
      const nextParts: (string | ReactNode)[] = [];
      parts.forEach(part => {
        if (typeof part !== 'string') {
          nextParts.push(part);
          return;
        }

        const regex = new RegExp(`(${name.replace('.', '\\.')})`, 'g');
        const splits = part.split(regex);
        splits.forEach((split, idx) => {
          if (split === name) {
            nextParts.push(<strong key={`${name}-${idx}`} className="font-semibold text-neutral-900">{name}</strong>);
          } else if (split) {
            nextParts.push(split);
          }
        });
      });
      parts = nextParts;
    });

    return <>{parts}</>;
  };

  return (
    <div className="min-h-screen bg-neutral-50/70 text-clinical-text-main font-sans selection:bg-neutral-900 selection:text-white antialiased overflow-x-hidden">
      {/* Persistent Technical Header Navigation */}
      <nav id="nav-navbar" className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-clinical-border z-40 px-4 md:px-8 py-3.5 flex items-center justify-between select-none">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 bg-neutral-900 rounded-sm animate-pulse shrink-0" />
          <a href="#" className="font-mono text-sm uppercase tracking-wider font-bold">
            AMAAN_ARIF // PORTFOLIO
          </a>
        </div>

        {/* Navigation Quick Anchors */}
        <div className="hidden lg:flex items-center space-x-5 font-mono text-[10px] uppercase tracking-wider">
          <a href="#about" className="text-clinical-text-muted hover:text-clinical-text-main transition-colors">[01/ ABOUT]</a>
          <a href="#experience" className="text-clinical-text-muted hover:text-clinical-text-main transition-colors">[02/ EXPERIENCE]</a>
          <a href="#education" className="text-clinical-text-muted hover:text-clinical-text-main transition-colors">[03/ EDUCATION]</a>
          <a href="#research" className="text-clinical-text-muted hover:text-clinical-text-main transition-colors">[04/ PROJECTS]</a>
          <a href="#skills" className="text-clinical-text-muted hover:text-clinical-text-main transition-colors">[05/ SKILLS]</a>
          <a href="#publications" className="text-clinical-text-muted hover:text-clinical-text-main transition-colors">[06/ PUBLICATIONS]</a>
          <a href="#service" className="text-clinical-text-muted hover:text-clinical-text-main transition-colors">[07/ SERVICE]</a>
          <a href="#contact" className="text-clinical-text-muted hover:text-clinical-text-main transition-colors">[08/ COLLAB]</a>
        </div>

        <div className="flex items-center space-x-4 font-mono text-[10px] text-clinical-text-muted">
          <span className="hidden sm:inline-flex items-center gap-1">
            <Clock className="w-3 h-3 text-neutral-400" />
            {utcTime}
          </span>
          <a
            href="#contact"
            id="btn-nav-contact"
            className="px-3 py-1.5 bg-neutral-900 text-white rounded font-mono uppercase tracking-widest text-[9px] hover:bg-neutral-800 transition-all cursor-pointer"
          >
            COLLABORATE
          </a>
        </div>
      </nav>

      {/* Extra Top Space */}
      <div className="h-16" />

      {/* Grid Overlay for Visual Premium Finish */}
      <div className="absolute top-16 left-0 w-full h-[500px] clinical-grid opacity-30 pointer-events-none z-0" />

      {/* Main Structural Framework */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-24">

        {/* ========================================================
            1. HERO SECTION (Abstract & Biological Terminal Aesthetic)
            ======================================================== */}
        <section id="about" className="flex flex-col space-y-8 pt-6 scroll-mt-24">
          <ScrollReveal>
            <div className="border-b border-clinical-border pb-6 mb-2">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-clinical-text-main">
                01 - About Me
              </h2>
            </div>
          </ScrollReveal>

          {/* Upper Zone: Name and Bio details (Split-Grid on desktop) */}
          <div className="w-full bg-white border border-clinical-border rounded-xl p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-100 rounded-full blur-3xl opacity-40 z-0 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Complete Text Flow & Metrics below header */}
              <div className="lg:col-span-8 space-y-6">

                {/* Name Header & Sub-headers */}
                <div>
                  <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-clinical-text-main leading-tight mb-2.5">
                    Amaan Arif
                  </h1>
                  <p className="font-sans text-md sm:text-lg md:text-xl font-semibold tracking-tight text-neutral-800">
                    Computational Biology Researcher
                  </p>
                  <p className="font-mono text-[11px] sm:text-xs text-clinical-text-muted mt-2 uppercase tracking-wider font-semibold">
                    Multi-Omics Analysis &middot; Computational Drug Discovery &middot; Cancer Genomics &middot; Artificial Intelligence
                  </p>
                </div>

                {/* Professional Statement */}
                <p className="font-sans text-neutral-600 text-sm md:text-base text-justify leading-relaxed border-l-2 border-neutral-300 pl-4 max-w-2xl">
                  I am an M.Tech Bioinformatics student with research interests in computational biology, bioinformatics, and artificial intelligence for healthcare. My work focuses on multi-omics data analysis, cancer genomics, single-cell transcriptomics, computational drug discovery, and machine learning. I have contributed to projects involving RNA-seq analysis, metagenomics, toxicity prediction, medical AI, and drug repurposing, resulting in publications, conference presentations, and intellectual property. I enjoy developing computational methods that help translate complex biological data into meaningful insights for disease understanding, precision medicine, and healthcare innovation.
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap gap-3.5 pt-2">
                  <a
                    href="#research"
                    id="btn-hero-explore"
                    className="px-5 py-2.5 bg-clinical-text-main text-white font-mono text-[11px] uppercase tracking-wider hover:bg-neutral-800 rounded transition-colors inline-flex items-center space-x-2 cursor-pointer shadow-xs"
                  >
                    <span>EXPLORE PROJECTS</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Right Column: High-fidelity Vector Avatar of Amaan (Perfect size circle next to content) */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end items-center py-4 lg:py-0">
                <DeveloperAvatar className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 xl:w-72 xl:h-72" />
              </div>
            </div>
          </div>

          {/* Lower Zone: Complete Wide VS Code IDE Workspace (Fits beautifully under the header, full width desktop view) */}
          <div className="w-full">
            <FauxTerminal />
          </div>
        </section>

        {/* ========================================================
            2. ABOUT & LEADERSHIP (Aesthetic timeline of progression)
            ======================================================== */}
        <section id="experience" className="scroll-mt-24">
          <ScrollReveal>
            <div className="border-b border-clinical-border pb-6 mb-10">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-clinical-text-main">
                02 - Experience
              </h2>
            </div>
          </ScrollReveal>

          <div className="w-full mt-6">
            {/* Timeline Column - Now expanded to full width */}
            <div className="w-full space-y-6">
              <div className="bg-white border border-clinical-border rounded-lg p-6 shadow-sm">

                <div className="relative border-l border-neutral-200 pl-4 md:pl-6 ml-2 space-y-8">
                  {researchExperiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="relative bg-white p-4 border border-clinical-border rounded-lg group transition-all duration-200"
                    >
                      {/* Timeline dot */}
                      <span className="absolute -left-[27px] md:-left-[35px] top-6 w-4 h-4 bg-white border border-clinical-text-main rounded-full flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
                        <span className="w-1.5 h-1.5 bg-clinical-text-main rounded-full group-hover:bg-white" />
                      </span>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                        <span className="font-mono text-[10px] text-[#007acc] font-bold">{exp.period}</span>
                        <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">{exp.location}</span>
                      </div>

                      <h3 className="font-sans font-bold text-base text-clinical-text-main mt-1 flex flex-wrap items-center gap-1.5">
                        {exp.role}
                        <span className="text-clinical-text-muted font-normal text-xs md:text-sm">@ {exp.institution}</span>
                      </h3>

                      {exp.summary && (
                        <p className="font-sans text-xs text-neutral-700 mt-2 font-medium leading-relaxed text-justify">
                          {exp.summary}
                        </p>
                      )}

                      {exp.tags && exp.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="font-mono text-[9.5px] bg-neutral-100/80 text-neutral-600 border border-neutral-200 px-2 py-0.5 rounded font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}


                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. EDUCATION (Self-contained)
            ======================================================== */}
        <section id="education" className="scroll-mt-24">
          <ScrollReveal>
            <div className="border-b border-clinical-border pb-6 mb-10">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-clinical-text-main">
                03 - Education
              </h2>
            </div>
          </ScrollReveal>

          <div className="bg-white border border-clinical-border rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educations.map((edu) => (
                <div key={edu.id} className="p-4 border border-clinical-border rounded bg-neutral-50/30">
                  <div className="flex items-center justify-between text-[10px] font-mono text-clinical-text-muted mb-1">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  <h4 className="font-sans font-bold text-sm text-neutral-900 leading-tight">{edu.degree}</h4>
                  <p className="font-mono text-[11px] text-neutral-500 mt-1">{edu.institution}</p>
                  <div className="mt-2 text-[10px] font-mono inline-block px-1.5 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-800 font-semibold uppercase rounded">
                    {edu.gpa}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            4. RESEARCH & PROJECTS (Grid with Tech Tags & Insights)
            ======================================================= */}
        <section id="research" className="scroll-mt-24 space-y-6">
          <ScrollReveal>
            <div className="border-b border-clinical-border pb-6 mb-10">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-clinical-text-main">
                04 - Research Projects
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="interactive-card bg-white border border-clinical-border rounded-xl p-5 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative group"
                id={`card-${project.id}`}
              >
                <div>
                  {project.imageUrl && (
                    <div className="overflow-hidden rounded-lg aspect-video w-full mb-4 relative bg-neutral-100 border border-clinical-border">
                      <img
                        src={project.imageUrl.startsWith('/') ? '.' + project.imageUrl : project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs border border-clinical-border px-2 py-0.5 rounded font-mono text-[9px] text-[#007acc] font-black shadow-3xs">
                        Project / {project.projectNum}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-dashed border-clinical-border font-mono text-[9px] text-clinical-text-muted">
                    <span className="font-bold uppercase tracking-wider text-[#007acc]">{project.category}</span>
                    <span className={`font-bold block ${project.status === 'PATENTED' || project.status === 'PUBLISHED' ? 'text-emerald-600' : project.status === 'THESIS' ? 'text-[#007acc]' : 'text-amber-600'}`}>
                      {project.status || 'UNDER PUBLICATION'}
                    </span>
                  </div>

                  <h3 className="font-sans text-base font-black tracking-tight text-clinical-text-main group-hover:text-black transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs text-neutral-600 mt-2.5 leading-relaxed font-normal text-justify">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-clinical-text-muted mb-1.5 font-bold select-none">[Highlights]</span>
                    <ul className="space-y-1.5 text-[11px] font-sans text-neutral-600 pl-4 list-disc marker:text-neutral-900 leading-normal text-justify">
                      {project.highlights.map((hl, i) => (
                        <li key={i}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-dashed border-clinical-border flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] bg-neutral-100 text-neutral-600 border border-neutral-200 px-1.5 py-0.5 rounded select-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.linkUrl && (
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-neutral-50 hover:bg-[#007acc] border border-clinical-border hover:border-[#007acc] text-neutral-500 hover:text-white rounded-md transition-all shadow-3xs shrink-0"
                      title="Open Publication Link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. SKILLS & TECHNOLOGIES (Scroller & Interactive Grid)
            ======================================================== */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <ScrollReveal>
            <div className="border-b border-clinical-border pb-6 mb-10">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-clinical-text-main">
                05 - Technical Skills
              </h2>
            </div>
          </ScrollReveal>

          {/* Double-layered Infinite Marquee Banner */}
          <Marquee />

          {/* High-Fidelity Structured Skills Directory */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skills.map((category, index) => (
                <div key={category.category} className="bg-white border border-clinical-border rounded-lg p-5 shadow-sm hover:border-neutral-800 transition-colors duration-300">
                  <div className="flex items-center justify-between border-b border-clinical-border pb-3 mb-4 font-mono">
                    <span className="text-[10px] text-clinical-text-muted uppercase tracking-widest font-bold">Cat. [{index + 1 < 10 ? `0${index + 1}` : index + 1}]</span>
                    <Layers className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  </div>
                  <h3 className="font-sans font-bold text-sm text-clinical-text-main tracking-tight uppercase mb-3">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[10px] bg-neutral-100 text-neutral-700 border border-neutral-200 px-2 py-0.5 rounded cursor-default hover:bg-neutral-900 hover:text-white transition-colors duration-150"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ========================================================
            5. PUBLICATIONS & ACADEMIC ACHIEVEMENTS (With filters & search)
            ======================================================== */}
        <section id="publications" className="scroll-mt-24 space-y-6">
          <ScrollReveal>
            <div className="border-b border-clinical-border pb-6 mb-10">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-clinical-text-main">
                06 - Publications, Conference & IP
              </h2>
            </div>
          </ScrollReveal>

          {/* Interactive Scientific Database Toolbar */}
          <div className="bg-white border border-clinical-border rounded-lg p-4 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              {/* Category Quick Jumps instead of active filters */}
              <div className="flex flex-wrap gap-2 font-mono text-[10px] tracking-wider uppercase select-none items-center">
                <span className="text-clinical-text-muted mr-1">QUICK JUMP:</span>
                <a
                  href="#journals-section"
                  className="px-2.5 py-1 bg-neutral-50 hover:bg-neutral-100 border border-clinical-border text-clinical-text-muted rounded-md transition-all font-semibold"
                >
                  Journals & Chapters ({matchedJournals.length})
                </a>
                <a
                  href="#conferences-section"
                  className="px-2.5 py-1 bg-neutral-50 hover:bg-neutral-100 border border-clinical-border text-clinical-text-muted rounded-md transition-all font-semibold"
                >
                  Conferences ({matchedConferences.length})
                </a>
                <a
                  href="#ip-section"
                  className="px-2.5 py-1 bg-neutral-50 hover:bg-neutral-100 border border-clinical-border text-clinical-text-muted rounded-md transition-all font-semibold"
                >
                  Intellectual Property ({matchedIPs.length})
                </a>
              </div>

              {/* Real-time search query tool */}
              <div className="relative max-w-sm w-full font-mono text-xs">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-400">
                  <Search className="w-3.5 h-3.5" />
                </span>
                <input
                  type="text"
                  value={pubSearchQuery}
                  onChange={(e) => setPubSearchQuery(e.target.value)}
                  placeholder="FILTER RESEARCH ITEMS (e.g. DEMENTIA / AI)..."
                  className="w-full bg-neutral-50/50 border border-clinical-border rounded-md pl-9 pr-4 py-2 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-800 transition-all font-mono"
                />
              </div>
            </div>

            <div className="text-[10px] font-mono text-clinical-text-muted flex items-center justify-between border-t border-dashed border-clinical-border pt-3">
              <span>ACTIVE CORRELATION HITS: {matchedJournals.length + matchedConferences.length + matchedIPs.length} OF {publications.length} RECORDS</span>
            </div>
          </div>

          {/* Subsections list rendering */}
          <div className="space-y-12">

            {/* SUBSECTION 1: JOURNAL ARTICLES & BOOK CHAPTERS */}
            <div id="journals-section" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-clinical-border pb-2.5">
                <BookOpen className="w-4 h-4 text-neutral-500 shrink-0" />
                <h3 className="font-sans font-bold text-lg text-neutral-900 tracking-tight">
                  Journal Articles & Book Chapters
                </h3>
                <span className="bg-neutral-100 text-neutral-600 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full ml-auto">
                  {matchedJournals.length}
                </span>
              </div>

              <div className="bg-white border border-clinical-border rounded-lg overflow-hidden shadow-sm divide-y divide-clinical-border">
                {matchedJournals.length > 0 ? (
                  matchedJournals.map((pub) => {
                    const isPreprint = pub.status.toLowerCase().includes('preprint');
                    const isInPress = pub.status.toLowerCase().includes('press') || pub.status.toLowerCase().includes('accept');

                    // Button Label helper
                    const buttonLabel = isPreprint ? "Read Preprint" : isInPress ? "View Forthcoming Page" : "Read Paper";

                    return (
                      <div key={pub.id} className="p-4 md:p-6 hover:bg-neutral-50/30 transition-colors duration-150">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 text-[10px] font-mono mb-2 text-neutral-400">
                          <span className="bg-neutral-100 text-neutral-600 font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider text-[9px]">
                            {pub.status}
                          </span>
                          <span>{pub.date}</span>
                        </div>

                        <h4 className="font-sans font-semibold text-sm md:text-base text-neutral-900 leading-snug">
                          {pub.title}
                        </h4>

                        <p className="font-sans text-xs text-neutral-500 mt-2.5 leading-relaxed">
                          <span className="font-semibold text-neutral-700">Authors:</span> {renderAuthors(pub.authors)} | <span className="font-semibold text-neutral-700">Source:</span> {pub.source}
                        </p>

                        {pub.doi && (
                          <div className="mt-4 flex">
                            <a
                              href={pub.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded text-[10px] font-mono font-bold tracking-wider uppercase transition-colors shrink-0"
                            >
                              <span>{buttonLabel}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-8 text-center text-clinical-text-muted font-mono text-xs">
                    NO JOURNAL ARTICLES MATCHING CRITERIA: "{pubSearchQuery}"
                  </div>
                )}
              </div>
            </div>

            {/* SUBSECTION 2: CONFERENCE PRESENTATIONS */}
            <div id="conferences-section" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-clinical-border pb-2.5">
                <FileBadge className="w-4 h-4 text-neutral-500 shrink-0" />
                <h3 className="font-sans font-bold text-lg text-neutral-900 tracking-tight">
                  Conference Presentations
                </h3>
                <span className="bg-neutral-100 text-neutral-600 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full ml-auto">
                  {matchedConferences.length}
                </span>
              </div>

              <div className="bg-white border border-clinical-border rounded-lg overflow-hidden shadow-sm divide-y divide-clinical-border">
                {matchedConferences.length > 0 ? (
                  (() => {
                    const featuredIds = ['pub_c1', 'pub_c2', 'pub_c3', 'pub_c4'];
                    const featured = matchedConferences.filter(c => featuredIds.includes(c.id));
                    const fallbackOther = matchedConferences.filter(c => !featuredIds.includes(c.id));

                    const displayedFeatured = featured;
                    const displayedOther = showAllConferences ? fallbackOther : [];

                    const countOfHidden = fallbackOther.length;

                    return (
                      <>
                        {/* Display Top/Featured Conferences first */}
                        {displayedFeatured.map((pub) => (
                          <div key={pub.id} className="p-4 md:p-6 hover:bg-neutral-50/30 transition-colors duration-150">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 text-[10px] font-mono mb-2 text-neutral-400">
                              <span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider text-[9px]">
                                {pub.status}
                              </span>
                              <span>{pub.date}</span>
                            </div>

                            <h4 className="font-sans font-semibold text-sm md:text-base text-neutral-900 leading-snug">
                              {pub.title}
                            </h4>

                            <p className="font-sans text-xs text-neutral-500 mt-2 leading-relaxed">
                              <span className="font-semibold text-neutral-700">Authors:</span> {renderAuthors(pub.authors)} | <span className="font-semibold text-neutral-700">Source:</span> <span className="italic">{pub.source}</span>
                            </p>

                            {pub.description && (
                              <p className="font-sans text-xs text-neutral-600 mt-2 leading-relaxed text-justify">
                                {pub.description}
                              </p>
                            )}
                          </div>
                        ))}

                        {/* Show expanded conferences smoothly */}
                        {showAllConferences && displayedOther.map((pub) => (
                          <div key={pub.id} className="p-4 md:p-6 bg-neutral-50/10 hover:bg-neutral-50/35 transition-colors duration-150 border-t border-clinical-border first:border-t-0">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 text-[10px] font-mono mb-2 text-neutral-400">
                              <span className="bg-[#f0f4f8] text-neutral-600 font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider text-[9px]">
                                {pub.status}
                              </span>
                              <span>{pub.date}</span>
                            </div>

                            <h4 className="font-sans font-semibold text-sm text-neutral-800 leading-snug">
                              {pub.title}
                            </h4>

                            <p className="font-sans text-[11px] text-neutral-500 mt-1.5 leading-relaxed">
                              <span className="font-semibold text-neutral-600">Authors:</span> {renderAuthors(pub.authors)} | <span className="font-semibold text-neutral-600">Source:</span> <span className="italic text-neutral-600">{pub.source}</span>
                            </p>

                            {pub.description && (
                              <p className="font-sans text-xs text-neutral-600 mt-2 leading-relaxed text-justify">
                                {pub.description}
                              </p>
                            )}
                          </div>
                        ))}

                        {/* Expand accordion trigger pattern */}
                        {countOfHidden > 0 && (
                          <div className="p-4 bg-neutral-50/50 flex justify-center border-t border-clinical-border">
                            <button
                              onClick={() => setShowAllConferences(!showAllConferences)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-clinical-border hover:bg-neutral-50 text-neutral-800 rounded-md text-[10.5px] font-mono font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer hover:border-neutral-400 active:bg-neutral-100"
                            >
                              <span>
                                {showAllConferences
                                  ? "Hide Full Conference Record"
                                  : `View Full Conference Record (+${countOfHidden})`
                                }
                              </span>
                              {showAllConferences ? (
                                <ChevronUp className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                              ) : (
                                <ChevronDown className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                              )}
                            </button>
                          </div>
                        )}
                      </>
                    );
                  })()
                ) : (
                  <div className="p-8 text-center text-clinical-text-muted font-mono text-xs">
                    NO CONFERENCES MATCHING CRITERIA: "{pubSearchQuery}"
                  </div>
                )}
              </div>
            </div>

            {/* SUBSECTION 3: INTELLECTUAL PROPERTY & PATENTS */}
            <div id="ip-section" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-clinical-border pb-2.5">
                <Layers className="w-4 h-4 text-neutral-500 shrink-0" />
                <h3 className="font-sans font-bold text-lg text-neutral-900 tracking-tight">
                  Intellectual Property & Patents
                </h3>
                <span className="bg-neutral-100 text-neutral-600 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full ml-auto">
                  {matchedIPs.length}
                </span>
              </div>

              <div className="space-y-6">
                {matchedIPs.length > 0 ? (
                  matchedIPs.map((pub) => (
                    <div key={pub.id} className="bg-white border border-clinical-border rounded-lg p-5 md:p-6 shadow-sm hover:border-neutral-400 transition-all duration-150 space-y-4">
                      {/* Top Header Row with status & date */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-clinical-border pb-3">
                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded font-mono text-[10px] font-bold uppercase tracking-wider">
                          {pub.status.split('-')[0].trim()} | {pub.date}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 shrink-0 uppercase">
                          Record verified
                        </span>
                      </div>

                      {/* Main Title & Subtitle */}
                      <div>
                        <h4 className="font-sans font-black text-xl text-neutral-900 leading-tight tracking-tight uppercase">
                          {pub.title}
                        </h4>
                        {pub.subtitle && (
                          <p className="font-sans font-semibold text-xs text-neutral-500 hover:text-neutral-700 transition-colors mt-1 font-medium italic">
                            {pub.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Description Block */}
                      {pub.description && (
                        <p className="font-sans text-xs text-neutral-650 leading-relaxed max-w-3xl">
                          {pub.description}
                        </p>
                      )}

                      {/* Tech Stacks */}
                      {pub.technology && (
                        <div className="space-y-1.5 pt-1">
                          <span className="block font-mono text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
                            Technology:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {pub.technology.split('•').map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-neutral-50 border border-clinical-border hover:border-neutral-300 text-clinical-text-muted rounded text-[10px] font-mono transition-colors">
                                {tech.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Footer Details: Status and Creators */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-dashed border-clinical-border text-[10px] font-mono text-neutral-400">
                        <div>
                          <span className="font-bold text-neutral-500">Status:</span>{' '}
                          <span className="text-neutral-900 font-semibold">{pub.status}</span>
                        </div>
                        <div>
                          <span className="font-bold text-neutral-500">Creators:</span>{' '}
                          <span className="text-neutral-700">{renderAuthors(pub.authors)}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white border border-clinical-border rounded-lg p-8 text-center text-clinical-text-muted font-mono text-xs shadow-sm">
                    NO PATENTS OR INTELLECTUAL PROPERTY RECORDS FOUND MATCHING CRITERIA: "{pubSearchQuery}"
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            7. PROFESSIONAL SERVICE (Peer Review, Editorial & Working Groups)
            ======================================================== */}
        <section id="service" className="scroll-mt-24 space-y-6">
          <ScrollReveal>
            <div className="border-b border-clinical-border pb-6 mb-10">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-clinical-text-main">
                07 - Professional Service
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {professionalServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-clinical-border rounded-lg p-5 shadow-sm hover:border-neutral-800 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-dashed border-clinical-border pb-2.5 mb-3 font-mono text-[10px]">
                    <span className="bg-neutral-100 text-neutral-700 font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider text-[9px]">
                      {service.category || 'Service'}
                    </span>
                    {service.period && (
                      <span className={`font-mono font-semibold text-[9.5px] px-2 py-0.5 rounded ${service.period.includes('Present') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/70' : 'bg-neutral-100 text-neutral-600'}`}>
                        {service.period}
                      </span>
                    )}
                  </div>

                  <h3 className="font-sans font-bold text-base text-neutral-900 leading-snug">
                    {service.role}
                    <span className="text-neutral-500 font-normal text-xs block sm:inline sm:ml-1.5">
                      @ {service.organization}
                    </span>
                  </h3>

                  <p className="font-sans text-xs text-neutral-600 mt-2.5 leading-relaxed text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            8. CONTACT & FOOTER (Sterile form with mesh background)
            ======================================================== */}
        <section id="contact" className="scroll-mt-24 space-y-6 pb-12">
          <ScrollReveal>
            <div className="border-b border-clinical-border pb-6 mb-10">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-clinical-text-main">
                08 - Contact
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-6">
            {/* Contact Information Cards */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="bg-white border border-clinical-border rounded-lg p-6 shadow-sm flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 font-mono text-xs pr-2 border-b border-clinical-border pb-3 mb-4 text-neutral-500">
                    <Compass className="w-4 h-4" />
                    <span className="font-bold">Let's Connect!</span>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3 text-xs">
                      <MapPin className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-mono text-[9px] text-neutral-400 uppercase">Location</span>
                        <span className="block font-sans text-neutral-700">{personalInfo.location}</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 text-xs">
                      <FileText className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-mono text-[9px] text-neutral-400 uppercase">Mail</span>
                        <a href={`mailto:${personalInfo.email}`} className="block font-mono text-neutral-700 hover:underline">{personalInfo.email}</a>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 text-xs">
                      <Clock className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-mono text-[9px] text-neutral-400 uppercase">Standard GMT Latency</span>
                        <span className="block font-sans text-neutral-700">UTC + 05:30 (IST Indian Standard Time)</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-dashed border-clinical-border pt-4 mt-6">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-clinical-text-muted mb-2.5 font-bold">Scientific Repositories</span>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-clinical-border hover:bg-neutral-50 hover:border-neutral-800 transition-colors rounded text-xs text-neutral-700 cursor-pointer"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-3.5 h-3.5" />
                      <span className="font-mono text-[9px]">GITHUB</span>
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-clinical-border hover:bg-neutral-50 hover:border-blue-500 transition-colors rounded text-xs text-neutral-700 cursor-pointer"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-3.5 h-3.5" />
                      <span className="font-mono text-[9px]">LINKEDIN</span>
                    </a>
                    {personalInfo.huggingface && (
                      <a
                        href={personalInfo.huggingface}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-clinical-border hover:bg-neutral-50 rounded text-xs text-neutral-700 cursor-pointer hover:border-amber-400 transition-colors"
                        title="Hugging Face Repository"
                      >
                        <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" className="w-3.5 h-3.5" />
                        <span className="font-mono text-[9px]">HUGGING FACE</span>
                      </a>
                    )}
                    {personalInfo.googleScholar && (
                      <a
                        href={personalInfo.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-clinical-border hover:bg-neutral-50 rounded text-xs text-neutral-700 cursor-pointer hover:border-blue-400 transition-colors"
                        title="Google Scholar Profile"
                      >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" alt="Google Scholar" className="w-3.5 h-3.5" />
                        <span className="font-mono text-[9px]">GOOGLE SCHOLAR</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Inbound Form Card */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </section>

      </main>

      {/* Structured Sterile Footer */}
      <footer id="footer" className="bg-white border-t border-clinical-border py-8 mt-12 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-clinical-text-muted">
          <p className="font-sans text-[11px]">
            &copy; 2026 Amaan Arif.
          </p>
        </div>
      </footer>





      {/* ========================================================
          MODAL 3: CREDENTIALS SUMMARY / COMPLETE RESUME
          ======================================================== */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-neutral-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-clinical-border rounded-lg max-w-4xl w-full p-6 md:p-8 shadow-2xl relative my-8 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-4 right-4 text-clinical-text-muted hover:text-black transition-colors cursor-pointer"
              title="Close System CV Panel"
            >
              <X className="w-5 h-5 animate-spin-hover" />
            </button>

            {/* Resume Toolbar controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-clinical-border mb-6 font-mono text-[10px] text-clinical-text-muted gap-4">
              <span>AMAAN_ARIF_CREDENTIALS_MANIFEST // STATIC READOUT</span>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1 border border-clinical-border hover:bg-neutral-50 rounded flex items-center gap-1.5 text-neutral-800 cursor-pointer"
                >
                  <Printer className="w-3 h-3" />
                  <span>PRINT RESUME PROTOCOL (PDF)</span>
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="px-3 py-1 bg-neutral-950 text-white rounded cursor-pointer"
                >
                  DISMISS
                </button>
              </div>
            </div>

            {/* Sterile Print-Compliant Layout Container */}
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-3 font-sans text-xs scrollbar-thin print:max-h-none print:overflow-visible">

              {/* Header Box */}
              <div className="text-center md:text-left border-b border-clinical-border pb-4">
                <h2 className="text-2xl font-extrabold text-clinical-text-main">Amaan Arif</h2>
                <p className="font-mono text-[10px] text-clinical-text-muted uppercase mt-0.5 tracking-wider">
                  M.Tech Bioinformatics Student &bull; Gold Medalist &bull; Advanced AI/ML Researcher
                </p>
                <div className="mt-2.5 font-mono text-[9px] text-neutral-500 flex flex-wrap justify-center md:justify-start gap-4">
                  <span>EMAIL: arif.amaan25lko@gmail.com</span>
                  <span>LOCATION: Lucknow, India</span>
                  <span>GITHUB: github.com/AmaanArif25</span>
                  <span>LINKEDIN: linkedin.com/in/amaanarif/</span>
                  <span>HUGGINGFACE: huggingface.co/arifamaan25lko</span>
                  <span>SCHOLAR: scholar.google.com/citations?user=i2xR3TwAAAAJ</span>
                </div>
              </div>

              {/* Grid 2 column */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Left Column: Education & Skills */}
                <div className="md:col-span-5 space-y-6">
                  {/* Education */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase text-clinical-text-muted border-b border-clinical-border block pb-1.5 font-bold">Education Sequence</span>
                    {educations.map(edu => (
                      <div key={edu.id} className="pb-2 border-b border-neutral-100 last:border-0 last:pb-0">
                        <span className="font-mono text-[9px] text-clinical-text-muted block">{edu.period} &middot; {edu.location}</span>
                        <h4 className="font-bold text-neutral-800">{edu.degree}</h4>
                        <p className="text-neutral-500 font-mono text-[9px]">{edu.institution}</p>
                        <span className="font-mono text-[9px] text-neutral-800 font-semibold">{edu.gpa}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills flat lists */}
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] uppercase text-clinical-text-muted border-b border-clinical-border block pb-1.5 font-bold">Theoretical Stack</span>
                    {skills.map(sc => (
                      <div key={sc.category}>
                        <span className="block font-sans font-bold text-[10px] text-neutral-700 uppercase mb-1">{sc.category}</span>
                        <div className="flex flex-wrap gap-1">
                          {sc.skills.slice(0, 7).map(sk => (
                            <span key={sk} className="font-mono text-[8px] bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 rounded">
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Experience Summary & Honors */}
                <div className="md:col-span-7 space-y-6">

                  {/* Research Experience summary */}
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] uppercase text-clinical-text-muted border-b border-clinical-border block pb-1.5 font-bold">Research Experience Chronology</span>
                    {researchExperiences.slice(0, 4).map(exp => (
                      <div key={exp.id}>
                        <div className="flex justify-between font-mono text-[9px] text-clinical-text-muted mb-0.5">
                          <span>{exp.period}</span>
                          <span>{exp.location}</span>
                        </div>
                        <h4 className="font-semibold text-neutral-900">{exp.role} <span className="font-normal text-neutral-600">@ {exp.institution}</span></h4>
                        {exp.details && (
                          <p className="font-sans text-[11px] text-neutral-500 leading-normal pl-2 border-l border-neutral-200 mt-1 text-justify">
                            {exp.details[0]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Key Scholastic Honors */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase text-clinical-text-muted border-b border-clinical-border block pb-1.5 font-bold">Scholastic Laurels & Wins</span>
                    {honorsAndAwards.slice(0, 4).map(honor => (
                      <div key={honor.id} className="text-[11px] leading-tight">
                        <span className="font-mono text-[9px] text-clinical-text-muted block">{honor.date} &middot; {honor.issuer.split('–')[0]}</span>
                        <strong className="text-neutral-800">{honor.title}</strong>
                        {honor.description && <span className="block text-neutral-500 text-[10px]">{honor.description}</span>}
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Intel Properties & Copyrights */}
              <div className="pt-2 border-t border-clinical-border">
                <span className="font-mono text-[10px] uppercase text-clinical-text-muted border-b border-clinical-border block pb-1.5 font-bold">Intellectual Properties & Patent Filings</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {publications.filter(p => p.type === 'intellectual_property').map(ip => (
                    <div key={ip.id} className="p-2.5 border border-clinical-border rounded bg-neutral-50/50">
                      <span className="font-mono text-[9px] bg-neutral-900 text-white font-bold px-1.5 py-0.5 rounded uppercase">{ip.key}</span>
                      <h5 className="font-bold text-neutral-800 mt-1.5">{ip.title}</h5>
                      <span className="font-mono text-[9px] text-neutral-500">{ip.source} &bull; {ip.status}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="border-t border-clinical-border pt-4 mt-6 text-center text-clinical-text-muted font-mono text-[9px]">
              DOCUMENT_COMPLIANCE_ENCRYPTION: SHBALJIT_REF_A_2026 // GENERATED VIA WEB PORTFOLIO INTELLIGENT ROUTER
            </div>
          </div>
        </div>
      )}

    </div>
  );
}