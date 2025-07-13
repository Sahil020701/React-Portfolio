import './PersonalProjects.css'
import ShadCard from "@/components/ShadCard/ShadCard";

function PersonalProjectsBody() {
  return (
    <div className="PersonalProjectsBodyWrapper">
      <h2 style={{ color: "#3e86cb" }}>Personal Projects</h2>
      <div className="PersonalProjectsListWrapper">
        <ShadCard
          cardHeader={<p>Personal Project - Portfolio Website</p>}
          cardContent={
            <p>Built using React.</p>
          }
        />
        <ShadCard
          cardHeader={<p>OPStackk</p>}
          cardContent={
            <p>Backend focused project using nodeJS.</p>
          }
        />
      </div>
    </div>
  );
}

export default PersonalProjectsBody;
