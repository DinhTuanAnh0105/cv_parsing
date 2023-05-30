import { Col, Row } from "antd";
import { isEmpty } from "lodash";
import Avatar from "../../assets/images/img-profile.webp";
import IconFacebook from "../icons/ic_facebook";
import IconGithub from "../icons/ic_github";

const Profile = ({ data }) => {
  const candidateProfile = data.candidate_profile;
  const educations = data.educations;

  return (
    <div id="profile">
      {(!isEmpty(candidateProfile) || educations?.length > 0) && (
        <>
          <div className="profile">
            <div className="profile-text">PROFILE</div>

            <div className="profile-detail">
              <div>
                {educations?.map((el) => {
                  return (
                    <div>
                      <h2>Education</h2>
                      <Row>
                        <Col span={8} className="label-profile">
                          Organization:
                        </Col>
                        <Col span={16} className="profile-right__item">
                          {el?.edu_org}
                        </Col>
                      </Row>
                      <Row>
                        <Col span={8} className="label-profile">
                          Major:
                        </Col>
                        <Col span={16} className="profile-right__item">
                          {el?.major}
                        </Col>
                      </Row>
                      <Row>
                        <Col span={8} className="label-profile">
                          Degree:
                        </Col>
                        <Col span={16} className="profile-right__item">
                          {el?.edu_degree}
                        </Col>
                      </Row>
                      <Row>
                        <Col span={8} className="label-profile">
                          GPA:
                        </Col>
                        <Col span={16} className="profile-right__item">
                          {el?.edu_gpa}
                        </Col>
                      </Row>
                      <Row>
                        <Col span={3} className="label-profile">
                          From:
                        </Col>
                        <Col span={8} className="profile-right__item">
                          {el?.start_time}
                        </Col>
                        <Col span={3} className="label-profile">
                          To:
                        </Col>
                        <Col span={8} className="profile-right__item">
                          {el?.end_time}
                        </Col>
                      </Row>
                    </div>
                  );
                })}
              </div>

              <img className="profile-avatar" src={Avatar} alt="" />
              <div className="profile-right">
                <h2>Details</h2>
                <Row>
                  <Col span={8} className="label-profile">
                    Name:
                  </Col>
                  <Col span={16} className="profile-right__item">
                    {candidateProfile?.name}
                  </Col>
                </Row>
                <Row>
                  <Col span={8} className="label-profile">
                    Phone Number:
                  </Col>
                  <Col span={8} className="profile-right__item">
                    {candidateProfile?.phone_number}
                  </Col>
                </Row>
                <Row>
                  <Col span={8} className="label-profile">
                    Email:
                  </Col>
                  <Col span={8} className="profile-right__item">
                    {candidateProfile?.email}
                  </Col>
                </Row>
                <Row>
                  <Col span={8} className="label-profile">
                    Ngày sinh:
                  </Col>
                  <Col span={8} className="profile-right__item">
                    {candidateProfile?.dob}
                  </Col>
                </Row>
                <Row>
                  <Col span={8} className="label-profile">
                    Giới tính:
                  </Col>
                  <Col span={8} className="profile-right__item">
                    {candidateProfile?.sex}
                  </Col>
                </Row>

                <Row>
                  <Col span={8} className="label-profile">
                    ID Number:
                  </Col>
                  <Col span={8} className="profile-right__item">
                    {candidateProfile?.id_numb}
                  </Col>
                </Row>
                <div className="profile-contact">
                  {candidateProfile?.facebook && (
                    <div
                      className="box-white"
                      onClick={() => {
                        window.open(candidateProfile?.facebook);
                      }}
                    >
                      <IconFacebook />
                    </div>
                  )}
                  {candidateProfile?.linkedin && (
                    <div
                      className="box-white"
                      onClick={() => {
                        window.open(candidateProfile?.facebook);
                      }}
                    >
                      <IconGithub />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
