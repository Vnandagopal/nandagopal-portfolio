
import {
  Code2,
  Database,
  ShieldCheck,
  GitBranch,
  Terminal,
  Atom,
  Cpu,
  Trophy,
  CookingPot,
  Plane,
  Sparkles,
  House,
} from "lucide-react";

import "./HeroDecorations.css";

function HeroDecorations() {
  return (
    <div className="hero-decorations" aria-hidden="true">

      {/* Floating abstract blocks */}
      <div className="floating-shape shape-one" />
      <div className="floating-shape shape-two" />
      <div className="floating-shape shape-three" />
      <div className="floating-shape shape-four" />
      <div className="floating-shape shape-five" />
      <div className="floating-shape shape-six" />
      <div className="floating-shape shape-seven" />
      <div className="floating-shape shape-eight" />
      <div className="floating-shape shape-nine" />
      <div className="floating-shape shape-ten" />
      <div className="floating-shape shape-eleven" />
      <div className="floating-shape shape-twelve" />
      <div className="floating-shape shape-thirteen" />
      <div className="floating-shape shape-fourteen" />
      <div className="floating-shape shape-fifteen" />
      <div className="floating-shape shape-sixteen" />

      {/* Technology stickers */}
      <div className="hero-sticker sticker-code">
        <Code2 size={34} strokeWidth={2.2} />
      </div>

      <div className="hero-sticker sticker-react">
        <Atom size={34} strokeWidth={2} />
        <span>REACT</span>
      </div>

      <div className="hero-sticker sticker-database">
        <Database size={34} strokeWidth={2} />
        <span>POSTGRESQL</span>
      </div>

      <div className="hero-sticker sticker-git">
        <GitBranch size={32} strokeWidth={2.2} />
      </div>

      <div className="hero-sticker sticker-terminal">
        <Terminal size={20} />
        <span>npm run dev</span>
      </div>

      <div className="hero-sticker sticker-security">
        <ShieldCheck size={38} strokeWidth={2} />
      </div>

      <div className="hero-sticker sticker-cpu">
        <Cpu size={42} strokeWidth={1.8} />
      </div>

      {/* Personal interests */}
      <div className="hero-sticker sticker-sports">
        <Trophy size={19} />
        <span>GAME ON!</span>
      </div>

      <div className="hero-sticker sticker-cooking">
        <CookingPot size={29} />
      </div>

      <div className="hero-sticker sticker-travel">
        <Plane size={21} />
        <span>EXPLORE</span>
      </div>

      <div className="hero-sticker sticker-airbnb">
        <House size={25} />
        <span>AIRBNB</span>
      </div>

      {/* Decorative sparkles */}
      <Sparkles className="hero-sparkle sparkle-one" size={30} />
      <Sparkles className="hero-sparkle sparkle-two" size={24} />

      {/* Decorative line art */}
      <svg
        className="hero-line-art hero-line-top"
        viewBox="0 0 150 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 85 C35 10 75 10 145 45"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 7"
        />
        <circle cx="145" cy="45" r="4" fill="currentColor" />
      </svg>

      <svg
        className="hero-line-art hero-line-bottom"
        viewBox="0 0 150 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 20 C45 90 95 90 145 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 7"
        />
        <circle cx="5" cy="20" r="4" fill="currentColor" />
      </svg>

    </div>
  );
}

export default HeroDecorations;
