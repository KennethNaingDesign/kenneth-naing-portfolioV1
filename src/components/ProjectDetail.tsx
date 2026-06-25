import React from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  Camera, 
  Clock, 
  Play,
  ExternalLink 
} from "lucide-react";
import { Project } from "../types";
import ProjectImageSections from "./ProjectImageSections";
import { resolveAssetPath } from "../utils/resolveAssetPath";

function getYoutubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

function buildCommissionEmailLink(projectTitle: string): string {
  const subject = `Commission Inquiry - ${projectTitle}`;
  const body = [
    "Hi Kenneth,",
    "",
    `I would like to discuss a commission for "${projectTitle}".`,
    "",
    "Project details:",
    "- Timeline:",
    "- Budget:",
    "- Deliverables:",
    "",
    "Thank you."
  ].join("\n");

  return `mailto:kennethnaingdesign@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNextProject: () => void;
}

export default function ProjectDetail({ project, onBack, onNextProject }: ProjectDetailProps) {
  const youtubeEmbedUrls =
    project.youtubeVideos
      ?.map((video) => ({
        url: video.url,
        title: video.title,
        embedUrl: getYoutubeEmbedUrl(video.url)
      }))
      .filter((video): video is { url: string; title?: string; embedUrl: string } => Boolean(video.embedUrl)) || [];
  const singleYoutubeEmbedUrl =
    youtubeEmbedUrls.length === 0 && project.youtube ? getYoutubeEmbedUrl(project.youtube) : null;
  const hasWatchSection = Boolean(singleYoutubeEmbedUrl || youtubeEmbedUrls.length || project.watchLink || project.watchNote);
  const primaryWatchLink = project.watchLink || youtubeEmbedUrls[0]?.url || project.youtube;
  const handleInitiateCommission = () => {
    window.location.href = buildCommissionEmailLink(project.title);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-[#0c0c0c] text-[#e8e4df] pt-24 pb-32 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Navigation Breadcrumbs / Actions */}
        <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <button 
            onClick={onBack}
            className="group flex items-center space-x-3 text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa] hover:text-[#8c6b5d] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span>Back to digital gallery</span>
          </button>

          <span className="text-[10px] uppercase font-mono tracking-widest text-[#a1a1aa]/50 hidden sm:inline">
            Project Index / {project.id.toUpperCase()}
          </span>
        </div>

        {/* Cinematic Main Hero Presentation */}
        <div className="relative aspect-[21/9] w-full rounded-lg overflow-hidden bg-[#141315] border border-white/5 mb-16 shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-80" />
          
          {/* Subtle Accent Tag */}
          <div className="absolute top-6 left-6 flex gap-2">
            {project.categories.map((cat, idx) => (
              <span key={idx} className="font-mono text-[9px] uppercase tracking-widest bg-[#0c0c0c]/90 text-[#8c6b5d] px-3.5 py-1 rounded border border-[#8c6b5d]/20">
                {cat}
              </span>
            ))}
          </div>

          <div className="absolute top-6 right-6">
            <span className="font-mono text-[10px] text-[#a1a1aa] tracking-widest bg-[#0c0c0c]/95 px-3.5 py-1.5 rounded border border-white/10">
              YEAR · {project.year}
            </span>
          </div>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Large Column (Story, Context, Aesthetic Details) */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#8c6b5d] block">
                {project.subtitle}
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-[#e8e4df] leading-tight">
                {project.title}
              </h1>
              {["i-wish-i", "before-da-coffee", "saltwater", "drk-campaign"].includes(project.id) && (
                <div className="inline-flex items-center gap-2.5 border border-white/10 bg-[#121113] px-3 py-1.5 rounded">
                  <img
                    src={resolveAssetPath("/src/assets/images/SomethingStudio-Logo_result.webp")}
                    alt="Something Studio logo"
                    referrerPolicy="no-referrer"
                    className="h-4 w-auto object-contain opacity-90"
                  />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa]">
                    Produced by Something Studio
                  </span>
                </div>
              )}
            </div>

            {/* Narrative Area */}
            {project.details && (
              <div className="space-y-6 pt-6 border-t border-white/10">
                <h3 className="font-serif text-2xl text-[#8c6b5d] font-normal italic">
                  Creative Context
                </h3>
                <p className="text-base text-[#a1a1aa] leading-relaxed font-light font-sans text-justify">
                  {project.details.overview}
                </p>
                <p className="text-sm text-[#a1a1aa]/80 leading-relaxed font-light italic">
                  {project.description}
                </p>
              </div>
            )}

            {hasWatchSection && (
              <div className="space-y-5 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[#8c6b5d]">
                    Watch
                  </h3>
                  <p className="text-sm text-[#a1a1aa]/80 leading-relaxed font-light italic">
                    {project.watchNote || "Press play to experience the complete short film."}
                  </p>
                </div>

                {youtubeEmbedUrls.length > 0 && (
                  <div className="space-y-5">
                    {youtubeEmbedUrls.map((video, index) => (
                      <div key={`${video.url}-${index}`} className="space-y-2">
                        <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/5 shadow-2xl bg-[#121113]">
                          <iframe
                            src={video.embedUrl}
                            title={video.title || `${project.title} video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                        {video.title && (
                          <p className="text-[11px] font-mono uppercase tracking-widest text-[#a1a1aa]">
                            {video.title}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {singleYoutubeEmbedUrl && (
                  <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/5 shadow-2xl bg-[#121113]">
                    <iframe
                      src={singleYoutubeEmbedUrl}
                      title={`${project.title} full film`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}

                {primaryWatchLink && (
                  <a
                    href={primaryWatchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 font-mono text-[11px] uppercase tracking-widest text-[#8c6b5d] hover:text-[#e8e4df] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    <Play size={12} />
                    <span>{project.watchLabel || "Open on YouTube"}</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            )}

            {project.poster && (
              <div className="pt-10 space-y-6 border-t border-white/10">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#8c6b5d]">
                  Official Film Poster
                </h3>
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group w-full max-w-[280px]">
                    <div className="absolute -inset-3 border border-[#8c6b5d]/15 pointer-events-none group-hover:border-[#8c6b5d]/30 transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] rounded" />
                    <div className="aspect-[2/3] bg-[#121113] border border-white/5 rounded overflow-hidden relative shadow-2xl">
                      <img 
                        src={project.poster} 
                        alt={`${project.title} film poster`} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-[#0c0c0c]/90 px-4 py-3 border-t border-white/5 font-mono text-[9px] tracking-wider text-[#a1a1aa] uppercase">
                        OFFICIAL FILM POSTER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.imageSections && (
              <ProjectImageSections sections={project.imageSections} />
            )}

          </div>

          {/* Right Column (Specifications, Tech Stack, Credit Index) */}
          <aside className="lg:col-span-4 space-y-8 bg-[#121113] border border-white/5 p-8 rounded-lg self-start">
            
            {/* Meta specification */}
            <div className="space-y-5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8c6b5d] block border-b border-white/10 pb-2">
                PROJECT HIGHLIGHTS
              </span>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5 text-xs text-[#a1a1aa]">
                  <Camera size={15} className="text-[#8c6b5d] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Medium / Capture specs</span>
                    <span className="text-[#e8e4df] font-mono text-[11px] font-medium block">
                      {project.details?.specs || "High-Fidelity 3D Assets Production"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-xs text-[#a1a1aa] pt-3 border-t border-white/5">
                  <Cpu size={15} className="text-[#8c6b5d] shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Systems & Tools</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.details?.tools.map((tool, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-[#0c0c0c]/80 text-[10px] text-[#8c6b5d] font-mono border border-white/5">
                          {tool}
                        </span>
                      )) || <span className="font-mono text-[11px] text-[#e8e4df]">Blender, After Effects</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-xs text-[#a1a1aa] pt-3 border-t border-white/5">
                  <Clock size={15} className="text-[#8c6b5d] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Selected Role</span>
                    <span className="text-[#e8e4df] font-serif italic text-sm font-medium">{project.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Crew/Production Cast Table */}
            {project.details?.credits && (
              <div className="space-y-4 pt-6 mt-6 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#8c6b5d] block">
                  CREATIVE TEAM INDEX
                </span>
                
                <div className="border border-white/5 rounded overflow-hidden divide-y divide-white/5">
                  {project.details.credits.map((credit, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2.5 px-3.5 text-xs font-mono bg-[#0c0c0c]/20 hover:bg-[#0c0c0c]/50 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <span className="text-neutral-500 uppercase text-[9px] tracking-wider">{credit.role}</span>
                      <span className="text-[#e8e4df] font-medium text-right text-[11px]">{credit.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Live studio commissioning CTA */}
            <div className="bg-[#0c0c0c]/45 border border-dashed border-[#8c6b5d]/30 p-5 rounded font-mono text-[11px] text-[#a1a1aa] space-y-3">
              <p className="text-justify leading-relaxed">
              Open to studio roles, freelance projects, and creative collaborations.
              </p>
              <button
                onClick={handleInitiateCommission}
                className="inline-flex items-center space-x-2 text-[#8c6b5d] hover:text-[#e8e4df] font-semibold transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <span>GET IN TOUCH</span>
                <ExternalLink size={12} />
              </button>
            </div>

          </aside>

        </div>

        {/* Footer Next Project Cycle Loop */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#121113]/30 p-8 rounded-lg">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              Finished reviewing this?
            </span>
            <p className="font-serif text-lg text-[#e8e4df] font-light">
            Continue exploring the works
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="px-6 py-3 border border-white/10 hover:border-white/30 rounded font-mono text-xs tracking-widest uppercase hover:bg-white/5 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
            >
              Gallery Home
            </button>
            <button 
              onClick={onNextProject}
              className="flex items-center space-x-2 px-6 py-3 bg-[#8c6b5d] text-[#0c0c0c] font-semibold rounded font-mono text-xs tracking-widest uppercase hover:bg-[#8c6b5d]/90 hover:shadow-lg hover:shadow-[#8c6b5d]/10 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer group"
            >
              <span>Next Project</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
