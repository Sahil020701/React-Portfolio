import ShadCard from "@/components/ShadCard/ShadCard";
import './ExperienceBody.css'

function ExperienceBody() {
  return (
    <div className="experienceBodyWrapper">
      <h2 style={{ color: "#3e86cb" }}>Experience</h2>
      <div className="experienceListWrapper">
        <ShadCard
          cardHeader={<p>FinIQ Consulting - Technical Consultant</p>}
          cardTimeline={<p>Jun 2024 - Till Date</p>}
          cardContent={
            <p>Worked on various projects utilizing Angular and C#.</p>
          }
          techStack = {['Angular', 'CSharp', 'TypeScript', 'SQL']}
          onClick={() => window.open('https://www.finiq.com/HomePage/home.html', '_blank')}
        />
        <ShadCard
          cardHeader={<p>FinIQ Consulting - Graduate Engineer Trainee</p>}
          cardTimeline={<p>Jan 2024 - Jun 2024</p>}
          cardContent={
            <p>Worked on various projects utilizing Angular and C#.</p>
          }
          techStack = {['Angular', 'CSharp', 'SQL']}
          onClick={() => window.open('https://www.finiq.com/HomePage/home.html', '_blank')}
        />
      </div>
    </div>
  );
}

export default ExperienceBody;
