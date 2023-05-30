import { Timeline } from "antd";
import { isEmpty } from "lodash";

const Experiences = ({ data }) => {
  const experiences = data?.experiences;
  const custom = experiences?.map((el) => {
    return {
      label: (
        <span className="exp-time">
          {el?.start_date} - {el.end_date}
        </span>
      ),
      children: (
        <>
          <div>
            <span className="exp-label">Company Name:</span>
            <span className="exp-detail">{el.company_name}</span>
          </div>
          <div>
            <span className="exp-label">Position:</span>
            <span className="exp-detail">{el.position}</span>
          </div>
          <div>
            <span className="exp-label">Descreption:</span>
            <span className="exp-detail">{el.description}</span>
          </div>
        </>
      ),
    };
  });

  return (
    <>
      {experiences?.length > 0 && (
        <>
          <div className="experiences-text" id="experiences">
            EXPERIENCES
          </div>
          <div
            className={
              isEmpty(data)
                ? "experiences-detail-loading"
                : "experiences-detail"
            }
          >
            <div className="experiences">
              <Timeline mode="alternate" items={custom} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Experiences;
