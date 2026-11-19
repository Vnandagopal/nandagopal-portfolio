
import {
  Code2,
  Database,
  ShieldCheck,
  GitBranch,
  Cpu,
  Atom,
  Sparkles,
  Terminal,
  Plane,
  Trophy,
} from "lucide-react";

import "./BackgroundDecorations.css";

const blocks = [
  { left: "5%", delay: "-2s", duration: "19s", size: "large", color: "peach" },
  { left: "15%", delay: "-12s", duration: "24s", size: "small", color: "grey" },
  { left: "27%", delay: "-7s", duration: "21s", size: "medium", color: "yellow" },
  { left: "39%", delay: "-17s", duration: "26s", size: "small", color: "teal" },
  { left: "51%", delay: "-5s", duration: "20s", size: "large", color: "peach" },
  { left: "64%", delay: "-14s", duration: "23s", size: "medium", color: "grey" },
  { left: "76%", delay: "-9s", duration: "22s", size: "small", color: "yellow" },
  { left: "88%", delay: "-19s", duration: "25s", size: "large", color: "teal" },
  { left: "95%", delay: "-4s", duration: "21s", size: "medium", color: "peach" },
  { left: "10%", delay: "-16s", duration: "27s", size: "medium", color: "teal" },
  { left: "34%", delay: "-10s", duration: "24s", size: "large", color: "grey" },
  { left: "58%", delay: "-21s", duration: "26s", size: "small", color: "peach" },
  { left: "82%", delay: "-6s", duration: "23s", size: "medium", color: "yellow" },
];

const stickers = [
  { Icon: Code2, left: "8%", delay: "-8s", duration: "25s", rotate: "-12deg" },
  { Icon: Database, left: "23%", delay: "-18s", duration: "29s", rotate: "10deg" },
  { Icon: Atom, left: "42%", delay: "-4s", duration: "27s", rotate: "-8deg" },
  { Icon: ShieldCheck, left: "58%", delay: "-14s", duration: "30s", rotate: "12deg" },
  { Icon: GitBranch, left: "73%", delay: "-22s", duration: "26s", rotate: "-10deg" },
  { Icon: Cpu, left: "91%", delay: "-10s", duration: "28s", rotate: "8deg" },
  { Icon: Terminal, left: "17%", delay: "-25s", duration: "31s", rotate: "8deg" },
  { Icon: Plane, left: "83%", delay: "-3s", duration: "29s", rotate: "-12deg" },
  { Icon: Trophy, left: "49%", delay: "-19s", duration: "27s", rotate: "10deg" },
  { Icon: Sparkles, left: "67%", delay: "-7s", duration: "24s", rotate: "-8deg" },
];

function BackgroundDecorations() {
  return (
    <div className="global-background-decorations" aria-hidden="true">

      <div className="background-blocks">
        {blocks.map((block, index) => (
          <div
            key={index}
            className={`floating-block block-${block.size} block-${block.color}`}
            style={{
              left: block.left,
              animationDelay: block.delay,
              animationDuration: block.duration,
            }}
          />
        ))}
      </div>

      <div className="background-stickers">
        {stickers.map(({ Icon, ...sticker }, index) => (
          <div
            key={index}
            className="floating-sticker"
            style={{
              left: sticker.left,
              animationDelay: sticker.delay,
              animationDuration: sticker.duration,
              "--sticker-rotation": sticker.rotate,
            } as React.CSSProperties}
          >
            <Icon size={30} strokeWidth={1.8} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default BackgroundDecorations;
