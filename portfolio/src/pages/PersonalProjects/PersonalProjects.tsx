import './PersonalProjects.css'
import ShadCard from "@/components/ShadCard/ShadCard";

function PersonalProjectsBody() {
  return (
    <div className="PersonalProjectsBodyWrapper">
      <h2 style={{ color: "#3e86cb" }}>Personal Projects</h2>
      <div className="PersonalProjectsListWrapper">
        <ShadCard
          cardHeader={<p>Personal Project - Portfolio Website</p>}
          cardTimeline={<p>July 2025</p>}
          cardContent={
            <p>Built using React.</p>
          }
          techStack = {['React', 'ShadCn']}
          onClick={() => window.open('https://github.com/Sahil020701/React-Portfolio/tree/main/portfolio', '_blank')}
          progressStatus={['Ongoing']}
        />
        <ShadCard
          cardHeader={<p>OPStackk</p>}
          cardTimeline={<p>June 2025</p>}
          cardContent={
            <p>Backend focused project using nodeJS.</p>
          }
          techStack={['Node', 'React']}
          onClick={() => window.open('https://github.com/orgs/OPStackk/repositories', '_blank')}
          progressStatus={['Complete']}
        />
      </div>
    </div>
  );
}

export default PersonalProjectsBody;
