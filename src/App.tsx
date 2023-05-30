import { createContext, useEffect, useState } from "react";
import "./App.css";

import Banner from "./components/Banner";
import Header from "./components/HeaderCV";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Skills from "./components/Skills";
import "./index.css";
import httpMethod from "./services/httpMethod";
import Archivement from "./components/Archivement";
import Experiences from "./components/Experiences";
import { message } from "antd";
import SuspenseLoader from "./components/SuspenseLoader";
import { isEmpty } from "lodash";

const App = () => {
  const URL = "https://f3f7-103-238-72-45.ngrok-free.app/detect/json";

  //! state
  const [fileCV, setFileCV] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  //! function
  const getInfo = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("cv_file", fileCV[0]);
    try {
      const response = await httpMethod.post(URL, formData, {
        headers: {
          "x-auth-secret-key": "833cc050348f60efef7ae7c48c42037ca6f74dd7",
        },
      });
      if (response.status === 200) {
        setData(response.data.data);
        setLoading(false);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  //! useEffect
  useEffect(() => {
    getInfo();
  }, [fileCV]);

  useEffect(() => {
    if (!isEmpty(data)) {
      document
        .getElementById("profile")
        ?.scrollIntoView({block:'center', behavior: "smooth" });
      message.success("Extract CV Success!");
    }
  }, [data]);

  //! render
  return (
    <div>
      {loading && <SuspenseLoader />}
      <Header data={data} />
      <Banner setFileCV={setFileCV} />
      <Profile data={data} />
      <Experiences data={data} />
      <Archivement data={data} />
      <Skills data={data} />
    </div>
  );
};

export default App;
