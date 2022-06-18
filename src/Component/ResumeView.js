import React from "react";
import { useLocation } from "react-router-dom";
import "./Resumeview.css";
import moment from "moment";

const ResumeView = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <div className="mainDivResume">
          <div>
            <div
              className="titleFormResume"
              style={{
                color: "purple",
              }}
            >
              {location?.state?.dataOfForm?.fullName}
            </div>
            <div className="formDataResume">
              <div style={{ display: "flex" }}>
                <div
                  className="baseProfile"
                  style={{ marginRight: "20px", width: "33.33%" }}
                >
                  <div
                    style={{
                      padding: "10px",
                      marginBottom: "5px",
                      borderBottom: "5px dotted purple",
                    }}
                  >
                    Birth Date:{"  "}
                    <span style={{ color: "purple", fontWeight: "bold" }}>
                      {moment(location?.state?.dataOfForm?.birthDay).format(
                        "MMM Do YY"
                      )}
                    </span>
                  </div>
                  <div
                    className=""
                    style={{
                      padding: "10px",
                      marginBottom: "5px",
                      borderBottom: "5px dotted purple",
                    }}
                  >
                    Email:{"  "}
                    <span style={{ color: "purple", fontWeight: "bold" }}>
                      {location?.state.dataOfForm?.email}
                    </span>
                  </div>
                  <div
                    className=""
                    style={{
                      padding: "10px",
                      marginBottom: "5px",
                      borderBottom: "5px dotted purple",
                    }}
                  >
                    Languages:{"  "}
                    <span style={{ color: "purple", fontWeight: "bold" }}>
                      {location?.state?.dataOfForm?.languages}
                    </span>
                  </div>
                </div>
                <div
                  className="baseProfile"
                  style={{ marginRight: "20px", width: "33.33%" }}
                >
                  <div
                    style={{
                      padding: "10px",
                      marginBottom: "5px",
                      borderBottom: "5px dotted purple",
                    }}
                  >
                    About:
                  </div>
                  <div
                    className=""
                    style={{
                      padding: "10px",
                      color: "purple",
                      fontWeight: "bold",
                    }}
                  >
                    {location?.state?.dataOfForm?.about}
                  </div>
                </div>
                <div className="baseProfile" style={{ width: "33.33%" }}>
                  <div
                    style={{
                      padding: "10px",
                      marginBottom: "5px",
                      borderBottom: "5px dotted purple",
                    }}
                  >
                    Skills:
                  </div>
                  <div
                    className=""
                    style={{
                      padding: "10px",
                      color: "purple",
                      fontWeight: "bold",
                    }}
                  >
                    {location?.state?.dataOfForm?.skill}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "30px" }}>
                <div
                  className="baseProfile"
                  style={{ marginRight: "20px", width: "50%" }}
                >
                  <div
                    style={{
                      padding: "10px",
                      marginBottom: "5px",
                      borderBottom: "5px dotted purple",
                    }}
                  >
                    Experience:
                  </div>
                  {location?.state?.experience?.map((val) => {
                    return (
                      <div
                        className=""
                        style={{
                          padding: "10px",
                          color: "purple",
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", marginBottom: "10px" }}
                        >
                          {val.jobPost}
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                          {`${val.companyName} - ${val.location}`}
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                          {`${moment(val.fromTo.startDate).format(
                            "MMM Do YY"
                          )} - ${
                            val.isCurrent
                              ? "Now"
                              : moment(val.fromTo.endDate).format("MMM Do YY")
                          }`}
                        </div>
                        <div style={{}}>{val.description}</div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="baseProfile"
                  style={{ marginRight: "20px", width: "50%" }}
                >
                  <div
                    style={{
                      padding: "10px",
                      marginBottom: "5px",
                      borderBottom: "5px dotted purple",
                    }}
                  >
                    Education:
                  </div>
                  {location?.state?.education?.map((val) => {
                    return (
                      <div
                        className=""
                        style={{
                          padding: "10px",
                          color: "purple",
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", marginBottom: "10px" }}
                        >
                          {val.name}
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                          {val.location}
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                          {`${moment(val.fromTo.startDate).format(
                            "MMM Do YY"
                          )} - ${
                            val.isCurrent
                              ? "Now"
                              : moment(val.fromTo.endDate).format("MMM Do YY")
                          }`}
                        </div>
                        <div style={{}}>{val.about}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="baseProfile"
                style={{ marginRight: "20px", marginTop: "30px", width: "50%" }}
              >
                <div
                  style={{
                    padding: "10px",
                    marginBottom: "5px",
                    borderBottom: "5px dotted purple",
                  }}
                >
                  Experience:
                </div>
                {location?.state?.experience?.map((val) => {
                  return (
                    <div
                      className=""
                      style={{
                        padding: "10px",
                        color: "purple",
                      }}
                    >
                      <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
                        {val.name}
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        {val.projectRole}
                      </div>
                      <div style={{}}>{val.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeView;
