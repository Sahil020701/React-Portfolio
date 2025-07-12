import Experience from "@/components/Experience/Experience";
import './ExperienceBody.css'

function ExperienceBody() {
  return (
    <div className="experienceBodyWrapper">
      <h2>Experience</h2>
      <div className="experienceListWrapper">
        <Experience
          cardHeader={<p>FinIQ Consulting - Technical Consultant</p>}
          cardExperience={<p>Jun 2024 - Till Date</p>}
          cardContent={
            <p>Worked on various projects utilizing Angular and C#.</p>
          }
        />
        <Experience
          cardHeader={<p>FinIQ Consulting - Graduate Engineer Trainee</p>}
          cardExperience={<p>Jan 2024 - Jun 2024</p>}
          cardContent={
            <p>Worked on various projects utilizing Angular and C#.</p>
          }
        />
        <Experience
          cardHeader={<p>FinIQ Consulting - Graduate Engineer Trainee</p>}
          cardExperience={<p>Jan 2024 - Jun 2024</p>}
          cardContent={
            <p>Worked on various projects utilizing Angular and C#.</p>
          }
        />
        <Experience
          cardHeader={<p>FinIQ Consulting - Graduate Engineer Trainee</p>}
          cardExperience={<p>Jan 2024 - Jun 2024</p>}
          cardContent={
            <p>Worked on various projects utilizing Angular and C#.</p>
          }
        />
      </div>
    </div>
  );
}

export default ExperienceBody;
