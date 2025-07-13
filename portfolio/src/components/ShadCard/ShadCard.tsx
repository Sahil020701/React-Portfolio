import { Card, CardHeader, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import './ShadCard.css'
import { ReactNOBoxSVG } from "@/assets/Svg";

interface ShadCardProps {
  cardHeader: React.ReactNode;
  cardTimeline?: React.ReactNode;
  cardContent: React.ReactNode;
  techLogos?: React.ReactNode[];
}

function ShadCard({ cardHeader, cardTimeline, cardContent }: ShadCardProps) {
  return (
    <div className="w-full min-w-[300px] max-w-[500px] mx-auto">
      <Card className="
        relative backdrop-blur-md bg-slate-700/35 border border-slate-600/40 
        hover:bg-slate-700/85 hover:border-slate-500/60 
        hover:-translate-y-2 hover:scale-[1.02] 
        transition-all duration-500 ease-out
        hover:shadow-2xl hover:shadow-black/50
        cursor-pointer group
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-600/15 before:to-transparent before:rounded-lg before:pointer-events-none
        hover:before:from-slate-500/25 hover:before:to-slate-600/10
      ">
        <CardHeader className="space-y-2 pb-4 relative z-10">
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-all duration-300 group-hover:tracking-wide">
            {cardHeader}
          </h3>
          <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-all duration-300 italic group-hover:translate-x-1">
            {cardTimeline}
          </p>
        </CardHeader>
        <CardContent className="pt-0 relative z-10">
          <div className="text-slate-200 leading-relaxed group-hover:text-slate-50 transition-all duration-300">
            {cardContent}
          </div>
          <Button variant="outline" size="sm" className="bg-slate-800/50 backdrop-blur-sm border-slate-600/40 text-slate-200 hover:bg-slate-700/85 hover:border-slate-500/60 hover:text-slate-50 hover:shadow-lg hover:shadow-black/20 transition-all duration-300">
            <ReactNOBoxSVG style={{ width: 20, height: 20}} /> React
          </Button>
        </CardContent>
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent rounded-lg opacity-70 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
        
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-cyan-500/25 group-hover:via-blue-500/25 group-hover:to-violet-500/25 transition-all duration-700 pointer-events-none" />
      </Card>
    </div>
  );
}


export default ShadCard;