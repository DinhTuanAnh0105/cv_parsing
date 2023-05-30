import React from "react";
import IconArrowRight from "../icons/ic_arrow_right";
import { Card } from "antd";

const dataStep = [
  {
    title: "Add resume",
    des: "Select the resume from your computer, or just drag and drop into the upload box. We also suppport images of resumes!",
  },
  {
    title: "Extract CV information",
    des: "After selecting file, our converter automatically recognises all the data in your resume regardless of its format, then displays on the webpage",
  },
  {
    title: "View JSON data",
    des: "Also you can view the CV data as Json format and download it within seconds",
  },
];

const Banner = ({ setFileCV }) => {
  return (
    <div className="banner">
      <div className="banner-left">
        <div className="banner-left__name">CVs Extractor</div>
        <div className="banner-left__title">
          Please choose a <span className="txt-rotate text-color">CV</span> {" "}
          file to proceed
        </div>

        <input
          type="file"
          accept=".pdf,.docx"
          className="file-input__input"
          id="file-input__input"
          onChange={(e) => {
            setFileCV(e.target.files);
          }}
        />
        <label className="file-input__label" htmlFor="file-input__input">
          <div className="banner-left__button">
            Choose a file (.pdf, .docx)
            <IconArrowRight />
          </div>
        </label>
      </div>
      <div
        className="banner-right"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {dataStep.map((item, index) => {
          return (
            <Card
              title={
                <div className="title-card">
                  <div className="order-number">{index + 1}</div> {item.title}
                </div>
              }
              style={{ width: "50%", margin: "20px auto", cursor:'pointer' }}
            >
              {item.des}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
