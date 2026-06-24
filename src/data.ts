import { Project, Achievement } from "./types";

export const PROJECT_CATEGORIES: (
  | "All"
  | "Film"
  | "3D & Animation"
  | "Motion & Ads"
  | "Graphic & Brand"
  | "UI/UX"
  | "Content & Media"
)[] = [
  "All",
  "Film",
  "3D & Animation",
  "Motion & Ads",
  "Graphic & Brand",
  "UI/UX",
  "Content & Media"
];

export const PROJECTS: Project[] = [
  {
    id: "i-wish-i",
    title: "I Wish I...",
    categories: ["Film"],
    subtitle: "Myanmar Drama Short Film",
    year: "2025",
    image: "/src/assets/images/i_wish_i_still_1781761918452---Copy_result.webp",
    poster: "/src/assets/images/i_wish_i_poster_result.webp",
    youtube: "https://www.youtube.com/watch?v=XH9s04qktWM",
    role: "Director · Colorist · Producer",
    description: "Shot on location in Chiang Rai, Thailand. Kenneth Naing's first film as a director and producer. He produced this film under his Something Studio.",
    details: {
      overview:
        "A departed short film about two brothers studying abroad in Thailand, where one goes missing. Lift-Off Global Network Sessions 2026 Official Selection.",
      specs: "Sony FX3 · 70mm GM Lens · 24fps",
      tools: ["DaVinci Resolve Studio", "Premiere Pro", "After Effects"],
      credits: [
        { role: "Director / Writer", name: "Kenneth Naing" },
        { role: "Director of Photography", name: "Kenneth Naing" },
        { role: "Cast", name: "Thee Thant Tun, Freddi" },
        { role: "Theme Song", name: "Mark Tang" }
      ]
    },
    imageSections: [
      {
        title: "Production Stills",
        description: "Selected frames from the film.",
        images: [
          { src: "/src/assets/images/i_wish_i_still_1781761918452---Copy_result.webp", caption: "Still 01", aspect: "landscape" },
          { src: "/src/assets/images/i_wish_i_still_2_result.webp", caption: "Still 02", aspect: "landscape" }
        ]
      },
      {
        title: "Set Photos",
        description: "Behind-the-scenes moments from set.",
        images: [
          { src: "/src/assets/images/i_wish_i_set_1_result.webp", caption: "Set 01", aspect: "portrait" },
          { src: "/src/assets/images/i_wish_i_set_3_result.webp", caption: "Set 02", aspect: "square" }
        ]
      },
      {
        title: "Color Grading Stills",
        description: "Before/after grading references and final look frames.",
        images: [
          {
            src: "/src/assets/images/i_wish_i_set_4_result.webp",
            caption: "Grade Still 01",
            aspect: "portrait"
          }
        ]
      },
      {
        title: "Workflow Breakdown",
        description: "Storyboard to screen, development and test footage",
        images: [
          { src: "/src/assets/images/i_wish_i_set_2_result.webp", caption: "Set 01", aspect: "square" },
          { src: "/src/assets/images/i_wish_i_set_5_result.webp", caption: "Set 01", aspect: "portrait" }
        ]
      }
      
    ]
  },
  {
    id: "saltwater",
    title: "Saltwater",
    categories: ["Film"],
    subtitle: "Horror Short Film",
    year: "2026",
    image: "/src/assets/images/Saltwater_Still_1_result.webp",
    role: "Director · Producer · Writer",
    description: "Kenneth's second film as a director and producer.",
    watchNote: "Currently in post-production. Coming soon.",
    details: {
      overview:
        "A psychological horror short film following a girl who moves into a haunted house, unknowingly filling it with ghosts through her. Currently in post-production.",
      specs: "Sony FX3 · 70mm GM Lens · Ronin Gimbal",
      tools: ["DaVinci Resolve Studio", "Premiere Pro", "After Effects"],
      credits: [
        { role: "Director / Writer", name: "Kenneth Naing, Thee Thant Tun" },
        { role: "Cast", name: "Summer Paw, Augusta Thant" },
        { role: "Production Designer", name: "Theingar Htut" }
      ]
    },
    imageSections: [
      {
        title: "Production Stills",
        description: "Placeholder image slots.",
        images: [
          { src: "/src/assets/images/placeholder-dark.svg", caption: "Still 01", aspect: "landscape" },
          { src: "/src/assets/images/placeholder-dark.svg", caption: "Still 02", aspect: "landscape" },
          { src: "/src/assets/images/placeholder-dark.svg", caption: "Still 03", aspect: "landscape" }
        ]
      },
      {
        title: "Set Photos",
        description: "Placeholder image slots.",
        images: [
          { src: "/src/assets/images/placeholder-dark.svg", caption: "Set 01", aspect: "portrait" },
          { src: "/src/assets/images/placeholder-dark.svg", caption: "Set 02", aspect: "portrait" },
          { src: "/src/assets/images/placeholder-dark.svg", caption: "Set 03", aspect: "portrait" }
        ]
      }
    ]
  },
  {
    id: "before-da-coffee",
    title: "Before Da Coffee",
    categories: ["Film"],
    subtitle: "Romantic Short Film",
    year: "2026",
    image: "/src/assets/images/coffee_still_1781761984370_result.webp",
    role: "Producer · Colorist · Writer",
    details: {
      overview:
        "A quiet romantic short film set in a small rainy room in Chiang Rai, exploring micro-moments and warm chance encounters. Produced in 10 days, inspired by Before the Coffee Gets Cold.",
      specs: "Sony FX3 · 70mm GM Lens",
      tools: ["DaVinci Resolve Studio", "Premiere Pro", "After Effects"],
      credits: [
        { role: "Director", name: "Thee Thant Tun" },
        { role: "Producer / Writer", name: "Kenneth Naing" },
        { role: "Colorist", name: "Kenneth Naing" }
      ]
    },
    imageSections: [
      {
        title: "Production Stills",
        description: "Still images from the film.",
        images: [
          { src: "/src/assets/images/bfc_1_result.webp", caption: "Still 01", aspect: "landscape" },
          { src: "/src/assets/images/bfc_2_result.webp", caption: "Still 02", aspect: "landscape", size: "large" },
          { src: "/src/assets/images/bfc_3_result.webp", caption: "Still 03", aspect: "landscape" },
          { src: "/src/assets/images/bfc_7_result.webp", caption: "Still 07", aspect: "landscape" }
        ]
      },
      {
        title: "Set Photos",
        description: "Behind-the-scenes moments from set.",
        images: [
          { src: "/src/assets/images/bfc_bts_1_result.webp", caption: "Set 01", aspect: "landscape" },          
          { src: "/src/assets/images/bfc_bts_4_result.webp", caption: "Set 04", aspect: "landscape" },
          { src: "/src/assets/images/bfc_bts_5_result.webp", caption: "Set 05", aspect: "landscape" },
          { src: "/src/assets/images/bfc_bts_6_result.webp", caption: "Set 06", aspect: "landscape" },
          { src: "/src/assets/images/bfc_bts_7_result.webp", caption: "Set 07", aspect: "landscape" },
          { src: "/src/assets/images/bfc_bts_8_result.webp", caption: "Set 08", aspect: "landscape" },
          { src: "/src/assets/images/bfc_bts_2_result.webp", caption: "Set 02", aspect: "portrait" },
        ]
      }
    ]
  },
  {
    id: "imagine",
    title: "IM MIND GINE",
    categories: ["Film", "3D & Animation"],
    subtitle: "VR Short Film",
    year: "2026",
    image: "/src/assets/images/imagine_vr_still_1781761967681_result.webp",
    role: "3D Lead · Assistant Director",
    description: "VR short film blending live action and immersive 3D environments.",
    details: {
      overview:
        "Bridging physical cinema with interactive environments, Im Mind Gine transports viewers into a reflective landscape of memory. Kenneth served as 3D Lead and Assistant Director.",
      specs: "Insta360 · Unreal Engine 5 · Maya",
      tools: ["Insta360", "Unreal Engine 5", "Maya"],
      credits: [{ role: "Director", name: "Wirada Saensrichaophan" },
        { role: "3D Lead / Assistant Director", name: "Kenneth Naing" },
        { role: "Editor", name: "Weeraphat Pongjan" },
      ]
    },
    imageSections: [
      {
        title: "Environment Renders",
        description: "Render and workflow images.",
        images: [
          { src: "https://youtu.be/2vaLhBt8NhE", caption: "Render 01"  },
          { src: "https://youtu.be/qcLR4jJ3ISM", caption: "Render 02" },
          { src: "/src/assets/images/vr_s_1_result.webp", caption: "workflow 01", aspect: "landscape" },
          { src: "/src/assets/images/vr_s_2_result.webp", caption: "workflow 02", aspect: "landscape" }
        ]
      },
      {
        title: "Behind The Scenes",
        description: "Behind-the-scenes moments from set.",
        images: [
          { src: "/src/assets/images/vr_1_result.webp", caption: "BTS 01", aspect: "portrait" },
          { src: "/src/assets/images/vr_2_result.webp", caption: "BTS 02", aspect: "portrait" },
          { src: "/src/assets/images/vr_3_result.webp", caption: "BTS 03", aspect: "portrait" },
          { src: "/src/assets/images/vr_4_result.webp", caption: "BTS 04", aspect: "portrait" }
        ]
      }
    ]
  },
  {
    id: "character-pipeline",
    title: "Character Pipeline",
    categories: ["3D & Animation"],
    subtitle: "Complete Character Production Pipeline",
    year: "2026",
    image: "/src/assets/images/cha_thumb_result.webp",
    role: "3D Artist · Rigger · Texture Artist",
    description: "End-to-end character pipeline from sculpt to cinematic final render.",
    details: {
      overview:
        "A complete character production pipeline from concept to final render, Nomad Sculpt for block out and sculpting, Maya for retopology and IK/RK rigging, Substance Painter for PBR texturing, and Unreal Engine 5 Sequencer for cinematic final render. A personal milestone marking the completion of a full character pipeline.",
      specs: "Nomad Sculpt · Maya · Substance Painter · Unreal Engine 5",
      tools: ["Nomad Sculpt", "Maya", "Substance Painter", "Unreal Engine 5"],
      credits: [{ role: "Character Pipeline Artist", name: "Kenneth Naing" }]
    },
    imageSections: [
      {
        title: "Sculpt",
        description: "Block out and sculpting with Nomad Sculpt.",
        images: [
          { src: "/src/assets/images/sculpt_1_result.webp", caption: "Sculpt 01", aspect: "portrait" },
          { src: "/src/assets/images/sculpt_2_result.webp", caption: "Sculpt 02", aspect: "portrait" }
        ]
      },
      {
        title: "Retopology",
        description: "Retopology with Maya.",
        images: [
          { src: "/src/assets/images/reto_1_result.webp", caption: "Retopo 01", aspect: "portrait" },
          { src: "/src/assets/images/reto_2_result.webp", caption: "Retopo 02", aspect: "portrait" },
        ]
      },
      {
        title: "Texture Breakdown",
          description: "Texture breakdown with Substance Painter.",
          images: [
          { src: "/src/assets/images/tex_1_result.webp", caption: "Texture 01", aspect: "landscape" },
          { src: "/src/assets/images/tex_2_result.webp", caption: "Texture 02", aspect: "landscape" }
        ]
      },
      {
        title: "Final Render",
        description: "Final render in Maya.",
        images: [
          { src: "/src/assets/images/FinalRender_1_result.webp", caption: "Render 01", aspect: "portrait" }
        ]
      },
      {
        title: "Rigging",
        description: "Rigging and animation test",
        images: [
          { src: "https://youtu.be/TKjDK0qNiI0", caption: "Rigging", aspect: "landscape" },
          { src: "https://youtu.be/JL7zlxMglWM", caption: "Animation Test", aspect: "landscape"},
        ]
      },
      {
        title: "Texturing",
        description: "Texturing and Lighting",
        images: [
          { src: "/src/assets/images/viewport_result.webp", caption: "Corpse Bride Texturing", aspect: "landscape" },
          { src: "https://youtu.be/nfyaZw6GbfA", caption: "Corpse Bride Rigging" },
          { src: "/src/assets/images/bob_render.webp", caption: "Corpse Bride 3point lighting", aspect: "landscape" },
          { src: "/src/assets/images/photo_2025-10-26_23-41-10_result.webp", caption: "Workflow Breakdown", aspect: "landscape" },
          { src: "/src/assets/images/Monsters_Material_result.webp", caption: "Workflow Breakdown", aspect: "landscape" },
          { src: "/src/assets/images/Monsters_result.webp", caption: "Workflow Breakdown", aspect: "landscape" }
        ]
      },      
    ]
  },
  {
    id: "3d-animation",
    title: "3D Animation Projects",
    categories: ["3D & Animation"],
    subtitle: "Animation & Visualization Collection",
    year: "2024-2026",
    image: "/src/assets/images/animation_thumb_result.webp",
    role: "3D Animator · Artist",
    description: "Character animation, product visualization, and game asset workflow collection.",
    details: {
      overview:
        "A collection of 3D animation and visualization work of character animation, product visualization, and game asset work developed in Unity.",
      specs: "Maya · Blender · Unreal Engine 5 · Unity · Substance Painter",
      tools: ["Maya", "Blender", "Unreal Engine 5", "Unity", "Substance Painter"],
      credits: [{ role: "3D Animator / Artist", name: "Kenneth Naing" }]
    },
    imageSections: [
      {
        title: "Character Animation",
        description: "Character animation Demo Reel.",
        images: [
          { src: "https://youtu.be/GXAQmk3cdqk", caption: "Animation Assignment" },
          { src: "https://youtu.be/Cqtcr6_vlRo", caption: "Rotomation Practice" },
          { src: "https://youtu.be/kEE7XqqEplM", caption: "Animation Practice"}
        ]
      },
      {
        title: "Product Visualization",
        description: "3D modeling works with Maya and Blender.",
        images: [
          { src: "/src/assets/images/headphone_3D_result.webp", caption: "Product 01", aspect: "landscape" },
          { src: "/src/assets/images/cream_3D_result.webp", caption: "Product 02", aspect: "landscape" },
          { src: "/src/assets/images/hand_3d_result.webp", caption: "Product 03", aspect: "landscape" },
          { src: "/src/assets/images/cos_3D_result.webp", caption: "Product 04", aspect: "landscape" },
          { src: "/src/assets/images/bottle_3D_result.webp", caption: "Product 05", aspect: "landscape" },
          { src: "/src/assets/images/vis_3d_result.webp", caption: "Props Modeling", aspect: "landscape" },
          { src: "/src/assets/images/lego_3d_result.webp", caption: "Lego Character Modeling", aspect: "portrait" },
          { src: "https://youtube.com/shorts/QiYSjtpx6jY", caption: "Augmented Reality Demo",  }
        ]
      },
      {
        title: "Sculpting in Zbrush",
        description: "Sculpting and Modeling",
        images: [
          { src: "https://youtu.be/fFZciuHJHOU", caption: "Modeling Practice Ongoing" },
          { src: "https://youtu.be/2m5C0tXe9qw", caption: "Monster Sculpting" },
          { src: "https://youtu.be/3zG5ADskHOI", caption: "Octopus Sculpting" }
        ]
      }
    ]
  },
  {
    id: "drk-campaign",
    title: "Dr. K Aesthetic Clinic Campaign",
    categories: ["Motion & Ads"],
    subtitle: "Communication Strategy & Execution",
    year: "2026",
    image: "/src/assets/images/drk_still_result.webp",
    role: "Creative Director · Motion Designer · Strategist",
    description: "Full-funnel campaign direction, content strategy, and motion execution.",
    details: {
      overview:
        "A full creative campaign built from concept to execution with strategy, content direction, motion graphics, and social design. Handled as both creative director and designer.",
      specs: "After Effects · Photoshop",
      tools: ["After Effects", "Photoshop"],
      credits: [{ role: "Creative Director", name: "Kenneth Naing" }]
    },
    imageSections: [
      {
        title: "Campaign Strategy",
        description: "Built the full campaign deck with big idea, content pillars, audience personas, and phased rollout plan.",
        images: [
          { src: "/src/assets/images/drk_still_result.webp", caption: "Strategy 01", aspect: "landscape" , size: "large"},
          { src: "https://youtube.com/shorts/-d475yXCqf0", caption: "Motion Graphics" },
          { src: "https://youtube.com/shorts/ufkhm8rMrJQ?feature=share", caption: "Ask Dr. K" }
        ]
      },
      {
        title: "Package booklet",
        description: "Designed the multi-page package booklet for both print and social media use.",
        images: [
          { src: "/src/assets/images/dkkk_result.webp", caption: "booklet cover", aspect: "landscape" },
          { src: "/src/assets/images/P4JQWR1_result.webp", caption: "booklet page 1", aspect: "landscape" }
        ]
      },
      {
        title: "Social Content",
        description: "Designed social media assets and print collateral including event invitations, gift vouchers, and promotional graphics.",
        images: [
          { src: "/src/assets/images/dk_print_result.webp", caption: "Print collateral", aspect: "landscape", size: "large" },
          { src: "/src/assets/images/dk_social_result.webp", caption: "Social Ads", aspect: "landscape", size: "large" }
        ]
      }
    ]
  },
  {
    id: "ads-designs",
    title: "Ads & Social Media Designs",
    categories: ["Motion & Ads"],
    subtitle: "Commercial Advertising Collection",
    year: "2023-2026",
    image: "/src/assets/images/ads_still_result.webp",
    role: "Designer · Art Director",
    description: "Commercial ad and social campaign visuals across Thailand and Myanmar.",
    details: {
      overview:
        "Commercial advertising and social media design work spanning food, beauty, and lifestyle brands",
      specs: "Photoshop · Illustrator · After Effects",
      tools: ["Photoshop", "Illustrator", "After Effects"],
      credits: [{ role: "Designer / Art Director", name: "Kenneth Naing" }]
    },
    imageSections: [
      {
        title: "Social Ads",
        description: "I have over 5 years of ecperience in making designs that visually stunning and catches viewers eyes across multiple famous brands like J'Donuts, Sony Myanmar and SME Brands.",
        images: [
          { src: "/src/assets/images/jDonuts_result.webp", caption: "J'Donuts", aspect: "landscape", size: "large" },
          { src: "/src/assets/images/sony_result.webp", caption: "Sony Myanmar", aspect: "landscape", size: "large" },
          { src: "/src/assets/images/social_1_result.webp", caption: "Social Ad 03", aspect: "landscape", size: "large" },
          { src: "/src/assets/images/social_2_result.webp", caption: "Social Ad 04", aspect: "landscape", size: "large" }
        ]
      },
      {
        title: "social media application & content visual frame",
        description: "I built a visual frame and social media designs guidelines for my clients to follow.",
        images: [          
          { src: "/src/assets/images/cb_2_result.webp", caption: "Social Media Design 02", aspect: "square", size: "large" },
          { src: "/src/assets/images/cb_3_result.webp", caption: "Social Media Design 03", aspect: "landscape", size: "large" },
          { src: "/src/assets/images/cb_1_result.webp", caption: "Social Media Design 01", aspect: "portrait", size: "large" },
        ]
      }
    ]
  },
  {
    id: "branding",
    title: "Branding & Logo Projects",
    categories: ["Graphic & Brand"],
    subtitle: "Identity Systems Collection",
    year: "2022-2026",
    image: "/src/assets/images/branding_still_result.webp",
    role: "Brand Designer · Creative Director",
    description: "Identity systems from discovery to final brand delivery.",
    details: {
      overview:
        "Logo and brand identity work of full visual systems covering typography, color, and brand guidelines.",
      specs: "Illustrator · Figma · Photoshop",
      tools: ["Illustrator", "Figma", "Photoshop"],
      credits: [{ role: "Brand Designer / Creative Director", name: "Kenneth Naing" }]
    },
    imageSections: [
      {
        title: "Logo Systems",
        description: "Full brand identity system with logo design, typography selection, color palette, and brand application across digital and print touchpoints.",
        images: [
          { src: "/src/assets/images/GoNow_result.webp", caption: "GoNow Logo", aspect: "landscape", size: "large" },
          { src: "/src/assets/images/logo_1_result.webp", caption: "Visionary Logo", aspect: "square"},
          { src: "/src/assets/images/logo_2_result.webp", caption: "Zawgyi Logo", aspect: "square" },
          { src: "/src/assets/images/logo_3_result.webp", caption: "Vita-Cura logo", aspect: "portrait"},
          { src: "/src/assets/images/placeholder-dark.svg", caption: "Shwe Kha Yar logo", aspect: "portrait"},
          { src: "/src/assets/images/logo_4_result.webp", caption: "Farmland Logo", aspect: "landscape" , size: "large"},
        ]
      },
      {
        title: "Brand Guidelines",
        description: "Brand guidelines documenting logo usage, typography, color systems, and design principles for consistent brand application.",
        images: [
          { src: "/src/assets/images/brand_1_result.webp", caption: "Guideline 01", aspect: "landscape", size: "large"},
          { src: "/src/assets/images/brand_2_result.webp", caption: "Guideline 04", aspect: "landscape", size: "large"},
          { src: "/src/assets/images/brand_3_result.webp", caption: "Guideline 05", aspect: "landscape", size: "large"},
        ]
      },
      {
        title: "Applications",
        description: "Brand identity applied across industries from food and hospitality to retail and distribution. Each mark designed to work across digital and physical touchpoints.",
        images: [          
          { src: "/src/assets/images/logo_5_result.webp", caption: "Logo collection", aspect: "landscape" , size: "large"}
        ]
      }
    ]
  },
  {
    id: "packaging",
    title: "Packaging Design",
    categories: ["Graphic & Brand"],
    subtitle: "Packaging Work Collection",
    year: "2023-2026",
    image: "/src/assets/images/packaging_still_result.webp",
    role: "Designer",
    details: {
      overview:
        "Packaging design for food, beverage, lifestyle products and music album packaging.",
      specs: "Illustrator · Photoshop · Dimension",
      tools: ["Illustrator", "Photoshop", "Dimension"],
      credits: [{ role: "Packaging Designer", name: "Kenneth Naing" }]
    },
    imageSections: [
      {
        title: "Coffee Burma",
        description: "Coffee Burma Package Design",
        images: [
          { src: "/src/assets/images/Packaging_1_result.webp", caption: "Final Design", aspect: "landscape", size: "large" },
          { src: "/src/assets/images/coffee_1_result.webp", caption: "Digital Sketch", aspect: "portrait"},
            { src: "/src/assets/images/coffee_2_result.webp", caption: "Design Development", aspect: "portrait" }
        ]
      },
      {
        title: "Other Packaging Designs",
        images: [
          { src: "/src/assets/images/packaging_2_result.webp", caption: "Packaging Designs", aspect: "landscape", size: "large" },
          { src: "/src/assets/images/packaging_3_result.webp", caption: "Packaging Designs", aspect: "square", size: "large" }
        ]
      },
      {
        title: "Music Album Packaging",
        description: "Music album packaging designs for local artists",
        images: [
          { src: "/src/assets/images/cd_1_result.webp", caption: "Packaging Designs", aspect: "square", size: "large" },
          { src: "/src/assets/images/cd_2_result.webp", caption: "Packaging Designs", aspect: "square", size: "large" }
        ]
      }
    ]
  },
  {
    id: "uiux",
    title: "UI/UX Projects",
    categories: ["UI/UX"],
    subtitle: "Interface Design Collection",
    year: "2023-2026",
    image: "/src/assets/images/uiux_Still_result.webp",
    role: "UI/UX Designer · Frontend Prototype",
    description: "Web and game interface projects from Figma to coded prototypes.",
    details: {
      overview:
        "A collection of interface design work spanning web and game UI — from Figma prototypes to HTML/CSS implementations. Includes website designs and game interface systems.",
      specs: "Figma · HTML · CSS · Unity UI",
      tools: ["Figma", "HTML", "CSS", "Unity UI"],
      credits: [{ role: "UX Researcher & Designer", name: "Kenneth Naing" }]
    },
    imageSections: [
      {
        title: "Multure App UI",
        description: "Multure is a mobile application concept designed to help university students manage academic workloads, financial stress, and career planning through a user-centered design approach.",
        images: [
          { src: "/src/assets/images/ui_1_result.webp", caption: "Multure App", aspect: "landscape" },
          { src: "/src/assets/images/multure_1_result.webp", caption: "Login Page", aspect: "landscape" },
          { src: "/src/assets/images/multure_2_result.webp", caption: "Setting Up Profile", aspect: "landscape" },
          { src: "/src/assets/images/multure_3_result.webp", caption: "Main Pagea", aspect: "landscape" },
          { src: "/src/assets/images/multure_4_result.webp", caption: "Mentorship Program", aspect: "landscape" },
          { src: "/src/assets/images/multure_5_result.webp", caption: "Personal Assistant", aspect: "landscape" },
          { src: "/src/assets/images/multure_6_result.webp", caption: "Prototype", aspect: "landscape", size: "large" },
        ]
      },
      {
        title: "Game UI",
        description: "Nom Nom Adventure Game UI",
        images: [
          { src: "/src/assets/images/nomnom_1_result.webp", caption: "Game UI 01", aspect: "landscape" },
          { src: "/src/assets/images/nomnom_2_result.webp", caption: "Game UI 02", aspect: "landscape" },
          { src: "/src/assets/images/nomnom_3_result.webp", caption: "Game UI 03", aspect: "landscape", size: "large" },
        ]
      },
      {
        title: "Webdesign",
        description: "This is my award wining website design assignment for my portfolio at Fairway Technology",
        images: [
          { src: "/src/assets/images/ui_2_result.webp", caption: "Portfolio Website", aspect: "square", size: "large" }
        ]
      }
    ]
  },
  {
    id: "the-nerds",
    title: "The Nerds Creative",
    categories: ["Content & Media"],
    subtitle: "YouTube Creative Channel",
    year: "2025-Current",
    image: "/src/assets/images/nerds_Still_result.webp",
    role: "Creator · Editor · Host",
    description: "YouTube channel featuring Multimedia, Career Path, and BTS content.",
    youtubeVideos: [
      { url: "https://www.youtube.com/watch?v=0a-osejOJwk", title: "The Nerds Video 01" },
      { url: "https://www.youtube.com/watch?v=cCwLdyqNaM4&t=116s", title: "The Nerds Video 02" },
      { url: "https://www.youtube.com/watch?v=BsqTYtqT-h4", title: "The Nerds Video 03" }
    ],
    watchLink: "https://www.youtube.com/watch?v=0a-osejOJwk",
    watchLabel: "Visit YouTube Channel",
    details: {
      overview:
        "A YouTube channel covering Multimedia, Career Path, and behind-the-scenes content. Built as a platform for sharing knowledge and documenting the creative process.",
      specs: "DaVinci Resolve · After Effects · Premiere Pro",
      tools: ["DaVinci Resolve", "After Effects", "Premiere Pro"],
      credits: [{ role: "Creator / Editor / Host", name: "Kenneth Naing" }]
    },
    imageSections: [
      {
        title: "Visual Storytelling",
        description: "Our Vision and Instagram Feed.",
        images: [
          { src: "/src/assets/images/nerd_vis_result.webp", caption: "Our Vision", aspect: "square", size: "large" },
          { src: "/src/assets/images/nerd_ig_result.webp", caption: "Thumbnail 01", aspect: "landscape" },
        ]
      }
    ]
  },
  {
    id: "media-production",
    title: "Media Production & Events",
    categories: ["Content & Media"],
    subtitle: "Event & Educational Media Work",
    year: "2023-2026",
    image: "/src/assets/images/media_still_result.webp",
    role: "Videographer · Creative Lead · Instructor",
    description: "Event videography and creative media production across Myanmar and Thailand.",
    details: {
      overview:
        "Videography and media production work spanning events, knowledge-sharing sessions, and educational content. Includes coverage of hackathons and creative industry events across Myanmar and Thailand.",
      specs: "Sony FX3 · Creative Studies Instructor",
      tools: ["Sony FX3", "Creative Studies Instructor"],
      credits: [{ role: "Videographer / Creative Lead / Instructor", name: "Kenneth Naing" }]
    },
    imageSections: [
      {
        title: "Videography Work",
        description: "Media Production and Event Coverage.",
        images: [
          { src: "/src/assets/images/media_1_result.webp", caption: "Videographer at Hackathon 2026, MFU", aspect: "landscape" },
          { src: "/src/assets/images/media_2_result.webp", caption: "Videographer at Hackathon 2026, MFU", aspect: "landscape" },
        ]
      },
      {
        title: "Knowledge Sharing Sessions",
        description: "Placeholder image slots.",
        images: [
          { src: "/src/assets/images/media_3_result.webp", caption: "Webinar with MM Project", aspect: "square" },
          { src: "/src/assets/images/media_4_result.webp", caption: "photographer at the MFU", aspect: "large" },
          { src: "/src/assets/images/media_5_result.webp", caption: "Event 03", aspect: "square" },
          { src: "/src/assets/images/media_6_result.webp", caption: "Event 04", aspect: "landscape" },
        ]
      },
      {
        title: "Part-time instructor",
        description: "I participated in a part-time Creative Studies instructor program at the Uniprep Academy, and I taught camera operation workshops at MFU.",
        images: [
          { src: "/src/assets/images/instruct_2_result.webp", caption: "instructor at UniPrep Academy", aspect: "square" },
          { src: "/src/assets/images/instruct_1_result.webp", caption: "instructor at Uniprep Academy", aspect: "landscape" },
          { src: "/src/assets/images/instruct_3_result.webp", caption: "Teaching assistant at MFU", aspect: "portrait" },
          { src: "/src/assets/images/instruct_4_result.webp", caption: "Teaching assistant at MFU", aspect: "portrait" }
        ]
      }
      
    ]
  }
];

export const BIOGRAPHY = {
  text: "Kenneth Naing is a Multimedia Designer, Filmmaker, and 3D Artist based in Thailand. Working across brand identity, motion graphics, 3D, and film. His work has reached international audiences alongside narrative projects that have screened at international film festivals. He is currently looking for a team worth joining.",
  skills: [
    "Graphic Design",
    "Cinematography",
    "3D Visualization",
    "3D Character Pipeline",
    "Motion Graphics",
    "Brand Systems",
    "UI/UX Design",
    "Media Production"
  ],
  softwareSkills: [
    { name: "Adobe Creative Suite", category: "Design" },
    { name: "Autodesk Maya", category: "3D" },
    { name: "Blender", category: "3D" },
    { name: "DaVinci Resolve", category: "Film" },
    { name: "Unreal Engine 5", category: "3D" },
    { name: "Figma", category: "Design" },
    { name: "Frontend Development & Design", category: "Code" },
    { name: "Camera Operation", category: "Film" }
  ],
  education: [
    {
      degree: "Bachelor of Science in Multimedia Technology and Animation",
      institution: "Mae Fah Luang University",
      location: "Chiang Rai, Thailand",
      year: "2022 – 2027"
    },
    {degree: "Bachelor of Arts in English Language and Literature",
      institution: "Yadanarbon University",
      location: "Mandalay, Myanmar",
      year: "2018 – 2020"
    }
  ],
  info: {
    nationality: "Myanmar",
    basedIn: "Bangkok, Thailand",
    languages: ["English", "Myanmar", "Thai (Basic)"],
    availability: "Available for studio roles & agency work",
    studios: ["Something Studio", "The Nerds Creative"],
    cvLink: "/kenneth-cv.png"
  }
};

export const RECOGNITIONS: Achievement[] = [
  {
    title: "Official Selection",
    award: "Lift-Off Global Network Sessions 2026",
    project: "I Wish I...",
    year: "2026"
  }
];

export const SOCIAL_LINKS = {
  email: "kennethnaingdesign@gmail.com",
  phone: "+660836105481",
  linkedin: "https://www.linkedin.com/in/kaung-htet-naing-3233581aa/?skipRedirect=true",
  behance: "https://www.behance.net/kennethnaingdesign",
  youtube: "https://www.youtube.com/@KennethNai",
  location: "Bangkok, Thailand"
};
