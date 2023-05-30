import { Spin } from "antd";
import iconSpincus from "../../assets/icon/icon_loading.svg";
import IconLoading from "../icons/icon_loading";

const SuspenseLoader = () => {

  return (
    <section style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255 255 255 / 50%)",
        }}
      >
      
        <Spin
          size="default"
          indicator={<IconLoading />}
          className="custom_spin"
        />
      </div>
    </section>
  );
};

export default SuspenseLoader;
