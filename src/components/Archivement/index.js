import { isEmpty } from "lodash";

const Archivement = ({ data }) => {
  const archivement = data?.certificates;
  return (
    <>
      {archivement && (
        <div className="archivement" id="archivement">
          <div className="profile-text">ARCHIVEMENT/CERTIFICATION</div>
          <div className="archivement-detail">{archivement}</div>
        </div>
      )}
    </>
  );
};

export default Archivement;
