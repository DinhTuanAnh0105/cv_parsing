import { Image } from "antd";
import { useState } from "react";
import logo from "../../assets/images/logo-sphinx.svg";
import ModalJson from "../ModalJson";

const Header = ({ data }) => {
  //! state
  const [openModal, setOpenModal] = useState(false);

  //! render
  return (
    <div className="header">
      <div className="header-logo" onClick={() => (window.location.href = "/")}>
        <Image
          src={logo}
          preview={false}
          height={160}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="header-options">
        <div
          className="header-options__viewJson"
          onClick={() => setOpenModal(true)}
        >
          View JSON Data
        </div>

        <div
          className="header-options__item"
          onClick={() => {
            document
              .getElementById("profile")
              .scrollIntoView({ block: "center", behavior: "smooth" }, true);
          }}
        >
          Profile
        </div>
        <div
          className="header-options__item"
          onClick={() => {
            document
              .getElementById("experiences")
              .scrollIntoView({ block: "center", behavior: "smooth" }, true);
          }}
        >
          Experiences
        </div>
        <div
          className="header-options__item"
          onClick={() => {
            document
              .getElementById("archivement")
              .scrollIntoView({ block: "center", behavior: "smooth" }, true);
          }}
        >
          Archivement
        </div>
        <div
          className="header-options__item"
          onClick={() => {
            document
              .getElementById("skills")
              .scrollIntoView({ block: "center", behavior: "smooth" }, true);
          }}
        >
          Skills
        </div>
      </div>
      {openModal && (
        <ModalJson
          open={openModal}
          onCancel={() => setOpenModal(false)}
          data={data}
        />
      )}
    </div>
  );
};

export default Header;
