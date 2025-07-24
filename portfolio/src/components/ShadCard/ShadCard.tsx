import { Card, CardHeader, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import "./ShadCard.css";
import {
  ReactNOBoxSVG,
  AngularNOBoxSVG,
  JavaScriptNOBoxSVG,
  TypeScriptNOBoxSVG,
  CSharpNOBoxSVG,
  ShadCnNOBoxSVG,
  NodeNOBoxSVG,
  WorkInProgressSVG,
  WorkCompleteSVG,
  SQLSVG,
} from "@/assets/Svg";

interface ShadCardProps {
  cardHeader: React.ReactNode;
  cardTimeline?: React.ReactNode;
  cardContent: React.ReactNode;
  techStack?: string[];
  onClick?: any;
  progressStatus?: string[];
}

function ShadCard({
  cardHeader,
  cardTimeline,
  cardContent,
  techStack = [],
  onClick,
  progressStatus = [],
}: ShadCardProps) {
  const [isPressed, setIsPressed] = useState(false);

  // Tech stack configuration mapping
  const techConfig: Record<
    string,
    {
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      label: string;
      color: string;
    }
  > = {
    react: {
      icon: ReactNOBoxSVG,
      label: "React",
      color:
        "hover:border-blue-400/60 hover:text-blue-200 active:border-blue-400/60 active:text-blue-200",
    },
    angular: {
      icon: AngularNOBoxSVG,
      label: "Angular",
      color:
        "hover:border-red-400/60 hover:text-red-200 active:border-red-400/60 active:text-red-200",
    },
    javascript: {
      icon: JavaScriptNOBoxSVG,
      label: "JavaScript",
      color:
        "hover:border-yellow-400/60 hover:text-yellow-200 active:border-yellow-400/60 active:text-yellow-200",
    },
    typescript: {
      icon: TypeScriptNOBoxSVG,
      label: "TypeScript",
      color:
        "hover:border-blue-400/60 hover:text-blue-200 active:border-blue-400/60 active:text-blue-200",
    },
    csharp: {
      icon: CSharpNOBoxSVG,
      label: "CSharp",
      color:
        "hover:border-violet-400/60 hover:text-violet-200 active:border-violet-400/60 active:text-violet-200",
    },
    shadcn: {
      icon: ShadCnNOBoxSVG,
      label: "ShadCn",
      color:
        "hover:border-blue-400/60 hover:text-blue-200 active:border-blue-400/60 active:text-blue-200",
    },
    node: {
      icon: NodeNOBoxSVG,
      label: "Node",
      color:
        "hover:border-green-400/60 hover:text-green-200 active:border-green-400/60 active:text-green-200",
    },
    sql: {
      icon: SQLSVG,
      label: "SQL",
      color:
        "hover:border-green-400/60 hover:text-green-200 active:border-green-400/60 active:text-green-200",
    },
  };


  const StatusConfig: Record<
    string,
    {
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      label: string;
      color: string;
    }
  > = {
    ongoing: {
      icon: WorkInProgressSVG,
      label: "Ongoing",
      color:
        "hover:border-blue-400/60 hover:text-blue-200 active:border-blue-400/60 active:text-blue-200",
    },
    complete: {
      icon: WorkCompleteSVG,
      label: "Complete",
      color:
        "hover:border-blue-400/60 hover:text-blue-200 active:border-blue-400/60 active:text-blue-200",
    },
  };

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
    // Keep the pressed state for a short duration to show the effect
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <div className="w-full min-w-[300px] max-w-[500px] mx-auto">
      <Card
        onClick={onClick}
        className={`
          relative backdrop-blur-md bg-slate-900/10 border border-slate-100/30 
          hover:bg-gradient-to-br hover:from-purple-950 hover:to-blue-950
          hover:border-slate-900/50 
          hover:-translate-y-1 hover:scale-[1.01] 
          active:bg-gradient-to-br active:from-purple-950 active:to-blue-950
          active:border-slate-900/50 
          active:-translate-y-1 active:scale-[1.01] 
          transition-all duration-300 ease-out
          hover:shadow-2xl hover:shadow-black/60
          active:shadow-2xl active:shadow-black/60
          cursor-pointer group
          before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-900/25 before:to-transparent before:rounded-lg before:pointer-events-none
          hover:before:from-slate-900/35 hover:before:to-slate-900/20
          active:before:from-slate-900/35 active:before:to-slate-900/20
          ${
            isPressed
              ? "bg-gradient-to-br from-purple-950 to-blue-950 border-slate-900/50 -translate-y-1 scale-[1.01] shadow-2xl shadow-black/60"
              : ""
          }
        `}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <CardHeader className="space-y-2 pb-4 relative z-10">
          <div className="flex items-center justify-between">
            <h3
              className={`
              text-lg font-semibold text-slate-100 
              group-hover:text-white group-active:text-white 
              transition-all duration-300 
              group-hover:tracking-wide group-active:tracking-wide
              ${isPressed ? "text-white tracking-wide" : ""}
            `}
            >
              {cardHeader}
            </h3>
            <div>
              <div className="flex flex-wrap gap-2">
                {progressStatus.map((status, index) => {
                  const StatusInfo = StatusConfig[status.toLowerCase()];

                  if (!StatusInfo) return null;

                  const IconComponent = StatusInfo.icon;

                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className={`
                        bg-slate-800/50 backdrop-blur-sm border-slate-600/40 text-slate-200 
                        hover:bg-slate-700/85 hover:shadow-lg hover:shadow-black/20 
                        active:bg-slate-700/85 active:shadow-lg active:shadow-black/20 
                        transition-all duration-300 gap-2 text-xs
                        ${StatusInfo.color}
                      `}
                    >
                      <IconComponent style={{ width: 16, height: 16 }} />
                      {StatusInfo.label}
                    </Button>
                  );
                })}
              </div>
            </div>

          </div>
          {cardTimeline && (
            <span
              className={`
              text-sm text-slate-400 
              group-hover:text-slate-200 group-active:text-slate-200 
              transition-all duration-300 italic 
              group-hover:translate-x-1 group-active:translate-x-1
              ${isPressed ? "text-slate-200 translate-x-1" : ""}
            `}
            >
              {cardTimeline}
            </span>
          )}
        </CardHeader>
        <CardContent className="pt-0 relative z-10 space-y-4">
          <div
            className={`
            text-slate-200 leading-relaxed 
            group-hover:text-slate-50 group-active:text-slate-50 
            transition-all duration-300
            ${isPressed ? "text-slate-50" : ""}
          `}
          >
            {cardContent}
          </div>

          {/* Tech Stack Buttons */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => {
                const techInfo = techConfig[tech.toLowerCase()];

                if (!techInfo) return null;

                const IconComponent = techInfo.icon;

                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={`
                      bg-slate-800/50 backdrop-blur-sm border-slate-600/40 text-slate-200 
                      hover:bg-slate-700/85 hover:shadow-lg hover:shadow-black/20 
                      active:bg-slate-700/85 active:shadow-lg active:shadow-black/20 
                      transition-all duration-300 gap-2 text-xs
                      ${techInfo.color}
                    `}
                  >
                    <IconComponent style={{ width: 16, height: 16 }} />
                    {techInfo.label}
                  </Button>
                );
              })}
            </div>
          )}
        </CardContent>

        {/* Glassmorphism overlay */}
        <div
          className={`
          absolute inset-0 bg-gradient-to-br from-white/8 to-transparent rounded-lg 
          opacity-70 group-hover:opacity-30 group-active:opacity-30 
          transition-opacity duration-500 pointer-events-none
          ${isPressed ? "opacity-30" : ""}
        `}
        />

        {/* Animated border glow */}
        <div
          className={`
            absolute inset-0 rounded-lg bg-gradient-to-r from-slate-400/15 via-slate-300/15 to-slate-400/15 
            group-hover:from-slate-400/8 group-hover:via-slate-300/8 group-hover:to-slate-400/8 
            group-active:from-slate-400/8 group-active:via-slate-300/8 group-active:to-slate-400/8 
            transition-all duration-700 pointer-events-none
            ${
              isPressed ? "from-slate-400/8 via-slate-300/8 to-slate-400/8" : ""
            }
          `}
        />
      </Card>
    </div>
  );
}

export default ShadCard;
