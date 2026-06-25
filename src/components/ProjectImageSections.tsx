import { ProjectImage, ProjectImageSection } from "../types";

function aspectClass(aspect?: ProjectImage["aspect"]) {
  switch (aspect) {
    case "portrait":
      return "aspect-[2/3]";
    case "square":
      return "aspect-square";
    default:
      return "aspect-[16/10]";
  }
}

function isVideoFile(src: string) {
  return /\.(mp4|webm|ogg|mov|m4v|avi)$/i.test(src);
}

function isYouTubeUrl(src: string) {
  return /youtu\.be\/|youtube\.com\/(watch|shorts)/.test(src);
}

function isYouTubeShorts(src: string) {
  return /youtube\.com\/shorts\//.test(src);
}

function toYouTubeEmbedUrl(src: string) {
  // youtu.be/ID
  const shortLink = src.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortLink) return `https://www.youtube.com/embed/${shortLink[1]}`;
  // youtube.com/shorts/ID
  const shorts = src.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shorts) return `https://www.youtube.com/embed/${shorts[1]}`;
  // youtube.com/watch?v=ID
  const watch = src.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watch) return `https://www.youtube.com/embed/${watch[1]}`;
  return src;
}

interface ProjectImageSectionsProps {
  sections: ProjectImageSection[];
}

export default function ProjectImageSections({ sections }: ProjectImageSectionsProps) {
  const visibleSections = sections.filter((section) => section.images.length > 0);

  if (visibleSections.length === 0) return null;

  return (
    <div className="space-y-12 pt-10">
      {visibleSections.map((section) => (
        <section key={section.title} className="space-y-6 border-t border-white/10 pt-10">
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8c6b5d]">
              {section.title}
            </h3>
            {section.description && (
              <p className="text-sm text-[#a1a1aa]/80 leading-relaxed font-light italic">
                {section.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {section.images.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className={`bg-[#121113] border border-white/5 rounded overflow-hidden relative group ${
                  image.size === "large" ? "sm:col-span-2" : ""
                } ${
                  image.aspect === "portrait" ? "sm:max-w-xs" : ""
                }`}
              >
                {isYouTubeUrl(image.src) ? (
                  <div className={`w-full ${isYouTubeShorts(image.src) ? "aspect-[9/16]" : "aspect-video"}`}>
                    <iframe
                      src={toYouTubeEmbedUrl(image.src)}
                      title={image.caption || section.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : isVideoFile(image.src) ? (
                  <video
                    src={image.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto block"
                  />
                ) : (
                  <div className={`${aspectClass(image.aspect)} relative`}>
                    <img
                      src={image.src}
                      alt={image.alt || section.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                  </div>
                )}
                {image.caption && (
                  <div className="px-4 py-3 border-t border-white/5 font-mono text-[9px] tracking-wider text-[#a1a1aa] uppercase bg-[#0c0c0c]/90">
                    {image.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
