import { isEmpty } from "lodash";

const Skills = ({ data }) => {
  const skills = data.skills;

  return (
    <div>
      {skills && (
        <div>
          <div className="experiences-text" id="skills">
            SKILLS
          </div>
          <div
            className={
              isEmpty(data) ? "experiences-detail-loading" : "experiences-detail"
            }
          >
            <div className="skills-detail">{skills}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
