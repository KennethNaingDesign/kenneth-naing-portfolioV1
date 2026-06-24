/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  ArrowDown, 
  X, 
  Mail, 
  Phone,
  Linkedin, 
  ExternalLink, 
  Award, 
  Info, 
  Eye, 
  Cpu, 
  Film, 
  Rotate3d, 
  Sparkle,
  Bookmark
} from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES, BIOGRAPHY, RECOGNITIONS, SOCIAL_LINKS } from "./data";
import { Project, ProjectCategory } from "./types";
import ProjectDetail from "./components/ProjectDetail";
import { resolveAssetPath } from "./utils/resolveAssetPath";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [bangkokTime, setBangkokTime] = useState<string>("");
  const highlightedBiographyParts = BIOGRAPHY.text.split(/(The Nerds Creative|Something Studio)/g);

  const openProject = (projectId: string) => {
    const project = PROJECTS.find((item) => item.id === projectId);
    if (!project) return;
    window.history.pushState({}, "", `/projects/${projectId}`);
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Live Bangkok / ICT Clock (UTC +7)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Calculate UTC +7
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const bkk = new Date(utc + 3600000 * 7);
      
      const hours = bkk.getHours().toString().padStart(2, "0");
      const minutes = bkk.getMinutes().toString().padStart(2, "0");
      const seconds = bkk.getSeconds().toString().padStart(2, "0");
      
      setBangkokTime(`${hours}:${minutes}:${seconds} ICT`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Listen for URL changes to support deep linking/routing to project pages
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path.startsWith("/projects/")) {
        const id = path.replace("/projects/", "");
        const project = PROJECTS.find((p) => p.id === id);
        if (project) {
          setActiveProject(project);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      }

      const hash = window.location.hash;
      if (hash.startsWith("#project/")) {
        const id = hash.replace("#project/", "");
        const project = PROJECTS.find((p) => p.id === id);
        if (project) {
          setActiveProject(project);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setActiveProject(null);
        }
      } else {
        setActiveProject(null);
      }
    };

    handleLocationChange();
    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const handleNextProject = () => {
    if (!activeProject) return;

    const orderedCategories = PROJECT_CATEGORIES.filter((category) => category !== "All") as ProjectCategory[];
    const currentCategory =
      orderedCategories.find((category) => activeProject.categories.includes(category)) || activeProject.categories[0];

    const currentCategoryProjects = PROJECTS.filter((project) => project.categories.includes(currentCategory));
    const currentCategoryIndex = currentCategoryProjects.findIndex((project) => project.id === activeProject.id);

    if (currentCategoryIndex !== -1 && currentCategoryIndex < currentCategoryProjects.length - 1) {
      openProject(currentCategoryProjects[currentCategoryIndex + 1].id);
      return;
    }

    const categoryIndex = orderedCategories.indexOf(currentCategory);
    for (let step = 1; step <= orderedCategories.length; step += 1) {
      const nextCategory = orderedCategories[(categoryIndex + step) % orderedCategories.length];
      const nextProject = PROJECTS.find(
        (project) => project.id !== activeProject.id && project.categories.includes(nextCategory)
      );
      if (nextProject) {
        openProject(nextProject.id);
        return;
      }
    }
  };

  const handleBackToGallery = () => {
    window.history.pushState({}, "", "/#work");
    window.location.hash = "#work";
    setActiveProject(null);
  };

  // Filtered project list
  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.categories.includes(selectedCategory as ProjectCategory);
  });

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#e8e4df] overflow-hidden relative selection:bg-[#8c6b5d] selection:text-[#0c0c0c] font-sans antialiased">
      
      {/* Decorative Atmospheric Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8c6b5d]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neutral-950/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#0c0c0c]/80 backdrop-blur-md border-b border-[#ffffff15] px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center space-x-3">
          <a 
            href="#hero" 
            onClick={() => {
              window.location.hash = "hero";
              setActiveProject(null);
            }}
            className="font-serif text-lg tracking-wider font-semibold hover:text-[#8c6b5d] transition-colors duration-300"
          >
            KENNETH NAING
          </a>
          <span className="hidden sm:inline text-[10px] text-[#252528] font-mono">|</span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest text-[#a1a1aa] bg-[#252528]/30 uppercase">
            Designer & Director
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-xs tracking-widest font-mono text-[#a1a1aa]">
          <a 
            href="#about" 
            onClick={() => {
              window.location.hash = "about";
              setActiveProject(null);
            }}
            className="hover:text-[#e8e4df] hover:underline underline-offset-4 transition-all"
          >
            01 / BIOGRAPHY
          </a>
          <a 
            href="#work" 
            onClick={() => {
              window.location.hash = "work";
              setActiveProject(null);
            }}
            className="hover:text-[#e8e4df] hover:underline underline-offset-4 transition-all"
          >
            02 / WORKS
          </a>
          <a 
            href="#recognition" 
            onClick={() => {
              window.location.hash = "recognition";
              setActiveProject(null);
            }}
            className="hover:text-[#e8e4df] hover:underline underline-offset-4 transition-all"
          >
            03 / SELECTION
          </a>
          <a 
            href="#contact" 
            onClick={() => {
              window.location.hash = "contact";
              setActiveProject(null);
            }}
            className="hover:text-[#e8e4df] hover:underline underline-offset-4 transition-all"
          >
            04 / CONNECT
          </a>
        </nav>

        {/* Live Status Clocks */}
        <div className="flex items-center space-x-4 font-mono text-[11px] text-[#a1a1aa] bg-[#252528]/20 px-3.5 py-1.5 rounded border border-[#252528]/40">
          <span className="inline-block w-2 h-2 rounded-full bg-[#8c6b5d] animate-pulse" />
          <span className="font-medium tracking-wider">{bangkokTime || "12:00:00 ICT"}</span>
          <span className="text-neutral-700">·</span>
          <span className="hidden sm:inline text-[10px] uppercase text-[#a1a1aa]">BKK, TH</span>
        </div>
      </header>

      {activeProject ? (
        <ProjectDetail 
          project={activeProject} 
          onBack={handleBackToGallery} 
          onNextProject={handleNextProject} 
        />
      ) : (
        <>
          {/* Hero Section */}
          <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center select-none overflow-hidden pt-16">
        
        {/* Subtle textural/abstract grid backdrop */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#1c1b1f_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        
        {/* Big atmospheric background watermark */}
        <div className="absolute font-serif italic text-[#8c6b5d]/2 text-[15vw] pointer-events-none select-none tracking-tighter whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Multidisciplinary
        </div>

        {/* Hero Copy */}
        <div className="z-10 max-w-4xl space-y-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#8c6b5d] uppercase block">
              PORTFOLIO OF MULTIMEDIA DESIGN
            </span>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-normal tracking-tight leading-none text-[#e8e4df]">
              Kenneth Naing
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="h-[1px] w-24 bg-[#8c6b5d]/30"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5 font-mono text-xs sm:text-sm tracking-widest text-[#a1a1aa]"
          >
            <span className="text-white hover:text-[#8c6b5d] transition-colors duration-300">MULTIMEDIA DESIGNER</span>
            <span className="text-[#8c6b5d]/50">•</span>
            <span className="text-white hover:text-[#8c6b5d] transition-colors duration-300">FILMMAKER</span>
            <span className="text-[#8c6b5d]/50">•</span>
            <span className="text-white hover:text-[#8c6b5d] transition-colors duration-300">3D ARTIST</span>
          </motion.div>
        </div>

        {/* Scroll Anchor */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2">
          <a 
            href="#about" 
            className="group flex flex-col items-center text-[10px] font-mono tracking-[0.4em] text-[#a1a1aa] uppercase hover:text-[#8c6b5d] transition-colors duration-300"
          >
            <span>VIEW WORK</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mt-3 text-[#8c6b5d] group-hover:scale-120 transition-transform duration-300"
            >
              <ArrowDown size={14} />
            </motion.div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-[#0c0c0c] border-t border-[#ffffff15] px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Indicator */}
          <div className="mb-16 flex items-center space-x-4">
            <span className="text-xs font-mono text-[#8c6b5d] tracking-widest">01 / BIOGRAPHY</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#252528] to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Minimal Portrait Placeholder Left */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm lg:max-w-full w-full">
                
                {/* Decorative Frame Line */}
                <div className="absolute -inset-3 border border-[#8c6b5d]/15 pointer-events-none group-hover:border-[#8c6b5d]/30 transition-colors duration-500 rounded" />
                
                <div className="overflow-hidden aspect-[3/4] bg-[#1a1a1a] rounded relative shadow-2xl filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={resolveAssetPath("/src/assets/images/kenneth_portrait_1781761899695_result.webp")} 
                    alt="Kenneth Naing" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-90" />
                  
                  {/* Subtle caption overlaid on physical portrait */}
                  <div className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest text-[#a1a1aa] uppercase bg-[#0c0c0c]/80 px-2.5 py-1 rounded">
                    Creative Director (Bangkok)
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Text Right */}
            <div className="lg:col-span-7 space-y-8 lg:pt-4">
              <div className="space-y-6">
                <h3 className="font-serif text-3xl sm:text-4xl text-[#e8e4df] leading-snug font-light">
                Multimedia designer building work across film, motion, <span className="italic text-[#8c6b5d]">and digital space.</span>.
                </h3>
                <p className="font-sans text-[#a1a1aa] text-base leading-relaxed font-light">
                  {highlightedBiographyParts.map((part, index) =>
                    part === "The Nerds Creative" || part === "Something Studio" ? (
                      <span key={index} className="font-mono font-semibold text-[#8c6b5d]">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>
              </div>

              {/* Skills Tags Area */}
              <div className="space-y-4 pt-4 border-t border-[#252528]/40">
                <h4 className="text-xs font-mono tracking-widest text-[#8c6b5d] uppercase">
                  Selected Disciplinary Focus
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {BIOGRAPHY.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3.5 py-1.5 rounded bg-[#252528]/30 hover:bg-[#8c6b5d]/10 hover:text-[#8c6b5d] border border-[#252528]/50 hover:border-[#8c6b5d]/20 text-xs text-[#d1d1d6] font-mono transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software & Tools Panel */}
              <div className="space-y-4 pt-4 border-t border-[#252528]/40">
                <h4 className="text-xs font-mono tracking-widest text-[#8c6b5d] uppercase">
                  Software & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {BIOGRAPHY.softwareSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#252528]/30 border border-[#252528]/50 hover:border-[#8c6b5d]/30 hover:bg-[#8c6b5d]/5 transition-all duration-300 cursor-default"
                    >
                      <span className="text-[9px] font-mono uppercase tracking-wider text-[#8c6b5d]/60 group-hover:text-[#8c6b5d] transition-colors">
                        {skill.category}
                      </span>
                      <span className="text-[#252528]/60 text-[9px]">·</span>
                      <span className="text-xs text-[#d1d1d6] font-sans group-hover:text-[#e8e4df] transition-colors">
                        {skill.name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Education Panel */}
              <div className="space-y-4 pt-4 border-t border-[#252528]/40">
                <h4 className="text-xs font-mono tracking-widest text-[#8c6b5d] uppercase">
                  Education
                </h4>
                <div className="space-y-4">
                  {BIOGRAPHY.education.map((entry, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center pt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8c6b5d] shrink-0" />
                        <div className="w-px flex-1 bg-[#252528]/60 mt-1" />
                      </div>
                      <div className="pb-4 space-y-1">
                        <p className="text-sm text-[#e8e4df] font-sans font-medium leading-snug">
                          {entry.degree}
                        </p>
                        <p className="text-xs font-mono text-[#8c6b5d]">{entry.institution}</p>
                        <p className="text-[11px] font-mono text-[#a1a1aa]">
                          {entry.location} · {entry.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Panel */}
              <div className="pt-4 border-t border-[#252528]/40">
                <h4 className="text-xs font-mono tracking-widest text-[#8c6b5d] uppercase mb-4">
                  About
                </h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs font-mono">
                  <div>
                    <span className="text-neutral-600 block uppercase tracking-wider mb-0.5">Nationality</span>
                    <span className="text-[#d1d1d6]">{BIOGRAPHY.info.nationality}</span>
                  </div>
                  <div>
                    <span className="text-neutral-600 block uppercase tracking-wider mb-0.5">Based In</span>
                    <span className="text-[#d1d1d6]">{BIOGRAPHY.info.basedIn}</span>
                  </div>
                  <div>
                    <span className="text-neutral-600 block uppercase tracking-wider mb-0.5">Languages</span>
                    <span className="text-[#d1d1d6]">{BIOGRAPHY.info.languages.join(" · ")}</span>
                  </div>
                  <div>
                    <span className="text-neutral-600 block uppercase tracking-wider mb-0.5">Studios</span>
                    <span className="text-[#d1d1d6]">{BIOGRAPHY.info.studios.join(", ")}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-neutral-600 block uppercase tracking-wider mb-0.5">Status</span>
                    <span className="text-emerald-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      {BIOGRAPHY.info.availability}
                    </span>
                  </div>
                  {BIOGRAPHY.info.cvLink && (
                    <div className="col-span-2 pt-4 mt-1 border-t border-[#252528]/40">
                      <a
                        href={BIOGRAPHY.info.cvLink}
                        download="Kenneth_Naing_CV.png"
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#8c6b5d] hover:text-[#e8e4df] transition-colors group"
                      >
                        <ExternalLink size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        Download Kenneth CV here
                      </a>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#8c6b5d] tracking-widest block">02 / PORTFOLIO WORKS</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-[#e8e4df]">
                Digital Gallery
              </h2>
            </div>

            {/* Categorization Tabs Filter */}
            <div className="flex flex-wrap gap-2 bg-[#0e0d0f] border border-[#252528]/40 p-1.5 rounded-lg z-10 self-start">
              {PROJECT_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#8c6b5d] text-[#0c0c0c] font-semibold shadow-lg"
                      : "text-[#a1a1aa] hover:text-[#e8e4df] hover:bg-[#252528]/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Uniform Project Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => openProject(project.id)}
                    className="group bg-[#121113] border border-[#252528]/50 hover:border-[#8c6b5d]/30 rounded overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-black/60 transition-all duration-500 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Media Frame */}
                    <div className="relative overflow-hidden aspect-[16/10] md:aspect-[16/9] bg-[#141315]">
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/50 z-10 transition-colors duration-500" />
                      
                      {/* Interactive Eye Icon Reveal on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <span className="flex items-center space-x-2 bg-[#0c0c0c]/95 border border-[#8c6b5d]/30 px-4 py-2.5 rounded font-mono text-xs text-[#8c6b5d] tracking-widest backdrop-blur-sm shadow-xl scale-95 group-hover:scale-100 transition-all duration-500">
                          <Eye size={13} />
                          <span>EXPAND STILL</span>
                        </span>
                      </div>

                      {/* Project Image */}
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Corner Meta Tags */}
                      <div className="absolute top-4 left-4 z-20 flex space-x-2">
                        {project.categories.map((cat, id) => (
                          <span key={id} className="font-mono text-[9px] tracking-widest uppercase bg-[#0c0c0c]/85 text-[#8c6b5d] border border-[#8c6b5d]/15 px-2.5 py-1 rounded backdrop-blur-xs">
                            {cat}
                          </span>
                        ))}
                      </div>

                      <div className="absolute top-4 right-4 z-20">
                        <span className="font-mono text-[9px] tracking-wider text-[#a1a1aa] bg-[#0c0c0c]/85 border border-[#252528]/30 px-2.5 py-1 rounded">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Content Block */}
                    <div className="p-6 md:p-8 space-y-4">
                      <div className="flex justify-between items-baseline gap-4 border-b border-[#252528]/40 pb-3">
                        <h3 className="font-serif text-xl sm:text-2xl text-[#e8e4df] group-hover:text-[#8c6b5d] transition-colors duration-300 font-normal">
                          {project.title}
                        </h3>
                        <span className="font-mono text-[10px] text-[#a1a1aa] tracking-widest text-[#8c6b5d]/70 group-hover:text-[#8c6b5d] transition-colors duration-300">
                          VIEW DETAILS ↗
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="text-[11px] font-mono text-[#a1a1aa] tracking-wide flex items-center">
                          <span className="text-neutral-500 mr-2 font-light">Role</span>
                          <span className="text-[#e8e4df]/85 font-medium">{project.role}</span>
                        </div>
                        <p className="text-xs text-[#a1a1aa] leading-relaxed font-light line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Recognition / Awards Section */}
      <section id="recognition" className="py-16 bg-[#0c0c0c] border-y border-[#ffffff15] px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Label left */}
          <div className="flex items-center space-x-3 text-[#8c6b5d]">
            <Award size={20} className="animate-pulse" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase block">
              ACCOLADES & RECOGNITION
            </span>
          </div>

          {/* Central message band */}
          <div className="flex-1 flex flex-col items-center md:items-start space-y-1 my-2">
            <p className="text-base font-serif italic text-[#e8e4df] text-center md:text-left">
              "Official Selection — Lift-Off Global Network Sessions 2026"
            </p>
            <p className="font-mono text-[11px] text-[#a1a1aa] tracking-wide uppercase">
              Project: "I Wish I..." — Short Film Drama · Director, Colorist & Producer
            </p>
          </div>

          {/* Badge indicator */}
          <div className="bg-[#252528]/30 border border-[#8c6b5d]/20 text-[#8c6b5d] text-[10px] font-mono tracking-widest uppercase px-3.5 py-1.5 rounded">
            Selected Artist 2026
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#121113] to-[#0c0c0c]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#8c6b5d] tracking-[0.4em] uppercase block">
              04 / GET IN TOUCH
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-[#e8e4df]">
            Ready to Create Something?
            </h2>
          </div>

          <div className="h-[1px] w-12 bg-[#8c6b5d]/30 mx-auto" />

          {/* Human Bio Notice */}
          <p className="text-base text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed font-light">
            "Open to studio roles, freelance projects, and creative collaborations. Let's talk."
          </p>

          {/* Clean Editorial Mail Anchor */}
          <div className="py-6 flex flex-col items-center space-y-4">
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="group inline-flex items-center space-x-3 border border-[#8c6b5d]/25 bg-[#121113] hover:bg-[#8c6b5d] hover:text-[#0c0c0c] px-8 py-4 rounded-full text-base sm:text-lg tracking-wider font-mono transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1"
            >
              <Mail size={18} className="text-[#8c6b5d] group-hover:text-[#0c0c0c] transition-colors animate-pulse" />
              <span>{SOCIAL_LINKS.email}</span>
            </a>

            <a
              href={`tel:${SOCIAL_LINKS.phone}`}
              className="group inline-flex items-center space-x-3 border border-[#252528] bg-[#121113] hover:border-[#8c6b5d]/40 px-6 py-3 rounded-full text-sm tracking-wider font-mono transition-all duration-300 text-[#a1a1aa] hover:text-[#e8e4df]"
            >
              <Phone size={14} className="text-[#8c6b5d]" />
              <span>{SOCIAL_LINKS.phone}</span>
            </a>

            {/* Social links */}
            <div className="flex flex-wrap justify-center items-center gap-5 pt-4 text-xs font-mono tracking-widest text-[#a1a1aa]">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8c6b5d] flex items-center space-x-2 transition-colors"
              >
                <Linkedin size={13} />
                <span>LINKEDIN</span>
                <ArrowUpRight size={9} className="text-[#a1a1aa]/50" />
              </a>

              <span className="text-neutral-800">|</span>

              <a
                href={SOCIAL_LINKS.behance}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8c6b5d] flex items-center space-x-2 transition-colors"
              >
                <ExternalLink size={13} />
                <span>BEHANCE</span>
                <ArrowUpRight size={9} className="text-[#a1a1aa]/50" />
              </a>

              <span className="text-neutral-800">|</span>

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8c6b5d] flex items-center space-x-2 transition-colors"
              >
                <Film size={13} />
                <span>YOUTUBE</span>
                <ArrowUpRight size={9} className="text-[#a1a1aa]/50" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ffffff10] py-10 px-6 md:px-12 bg-[#0c0c0c] text-center md:text-left animate-fade-in">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs font-mono text-[#a1a1aa] tracking-widest">
            © 2026 KENNETH NAING · SOMETHING STUDIO · THE NERDS
          </div>
          <div className="text-[11px] font-mono text-[#a1a1aa] tracking-widest flex items-center space-x-3">
          <span>ALL RIGHTS RESERVED KENNETH NAING</span>
            <span className="text-neutral-800">•</span>
            <span className="text-[#8c6b5d]">BANGKOK, THAILAND</span>
          </div>
        </div>
      </footer>
        </>
      )}

    </div>
  );
}

