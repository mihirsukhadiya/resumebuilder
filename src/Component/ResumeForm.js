import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "./resumeform.css";
import { useNavigate } from "react-router-dom";

const ResumeForm = () => {
  const navigate = useNavigate();
  const [expValue, setExpValue] = useState([new Date(), new Date()]);
  const [value, onChange] = useState([new Date(), new Date()]);
  const [dataOfForm, setDataOfForm] = useState({
    fullName: "",
    birthDay: "",
    email: "",
    about: "",
    skill: "",
    languages: "",
  });
  const [experience, setExperience] = useState({
    companyName: "",
    jobPost: "",
    location: "",
    description: "",
    isCurrent: false,
    fromTo: { startDate: expValue[0], endDate: expValue[1] },
  });

  const [education, setEducation] = useState({
    name: "",
    location: "",
    about: "",
    fromTo: { startYear: value[0], endYear: value[1] },
  });

  const [projects, setProjects] = useState({
    name: "",
    description: "",
    projectRole: "",
  });

  const handleSubmitForm = () => {
    let experienceData = [];
    experienceData.push(experience);
    let educationData = [];
    educationData.push(education);
    let projectsData = [];
    projectsData.push(projects);

    let mainData = {
      dataOfForm,
      experience,
      experience: experienceData,
      education: educationData,
      projects: projectsData,
    };
    navigate("/resume", { state: mainData });
  };

  return (
    <>
      <div>
        <div className="mainDiv">
          <div>
            <div className="titleForm">Resume Builder</div>
            <div className="formData">
              <div className="formGroup">
                <div className="labelForm">Full Name:-</div>
                <div className="">
                  <input
                    className="inputValue"
                    type="text"
                    name="fullName"
                    onChange={(e) =>
                      setDataOfForm({
                        ...dataOfForm,
                        fullName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="formGroup">
                <div className="labelForm">Birth Date:-</div>
                <div className="">
                  <input
                    className="inputValue"
                    type="date"
                    name="birthdate"
                    onChange={(e) =>
                      setDataOfForm({
                        ...dataOfForm,
                        birthDay: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="formGroup">
                <div className="labelForm">Email Address:-</div>
                <div className="">
                  <input
                    className="inputValue"
                    type="text"
                    name="email"
                    onChange={(e) =>
                      setDataOfForm({
                        ...dataOfForm,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="formGroup">
                <div className="labelForm">About:-</div>
                <div className="">
                  <textarea
                    className="textArea"
                    name="about"
                    onChange={(e) =>
                      setDataOfForm({
                        ...dataOfForm,
                        about: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="formGroup">
                <div className="labelForm">Experience:-</div>
                <div className="">
                  <div className="insideDivLabelForm">Company Name:-</div>
                  <input
                    className="inputValue"
                    type="text"
                    name="companyName"
                    onChange={(e) =>
                      setExperience({
                        ...experience,
                        companyName: e.target.value,
                      })
                    }
                  />
                  <div className="insideDivLabelForm">Job Post:-</div>
                  <input
                    className="inputValue"
                    type="text"
                    name="jobPost"
                    onChange={(e) =>
                      setExperience({ ...experience, jobPost: e.target.value })
                    }
                  />
                  <div className="insideDivLabelForm">Location:-</div>
                  <input
                    className="inputValue"
                    type="text"
                    name="location"
                    onChange={(e) =>
                      setExperience({ ...experience, location: e.target.value })
                    }
                  />
                  <div className="insideDivLabelForm">Description:-</div>
                  <input
                    className="inputValue"
                    type="text"
                    name="description"
                    onChange={(e) =>
                      setExperience({
                        ...experience,
                        description: e.target.value,
                      })
                    }
                  />
                  <div className="insideDivLabelForm">isCurrent:-</div>
                  <div className="container">
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="switches"
                        id="switches"
                        onChange={(e) =>
                          setExperience({
                            ...experience,
                            isCurrent: e.target.checked,
                          })
                        }
                      />
                      <label className="label" htmlFor="switches">
                        <span className="inner" />
                        <span className="switch" />
                      </label>
                    </div>
                  </div>
                  <div className="insideDivLabelForm">From - To:-</div>
                  <DateRangePicker
                    className="inputValueDateRange"
                    onChange={setExpValue}
                    value={expValue}
                  />
                </div>
              </div>
              <div className="formGroup">
                <div className="labelForm">Education:-</div>
                <div className="">
                  <div className="insideDivLabelForm">Name:-</div>
                  <input
                    className="inputValue"
                    type="text"
                    name="eduName"
                    onChange={(e) =>
                      setEducation({
                        ...education,
                        name: e.target.value,
                      })
                    }
                  />
                  <div className="insideDivLabelForm">Location:-</div>
                  <input
                    className="inputValue"
                    type="text"
                    name="eduLocation"
                    onChange={(e) =>
                      setEducation({
                        ...education,
                        location: e.target.value,
                      })
                    }
                  />
                  <div className="insideDivLabelForm">About:-</div>
                  <textarea
                    className="textArea"
                    name="eduabout"
                    onChange={(e) =>
                      setEducation({
                        ...education,
                        about: e.target.value,
                      })
                    }
                  />
                  <div className="insideDivLabelForm">From - To:-</div>
                  <DateRangePicker
                    className="inputValueDateRange"
                    onChange={onChange}
                    value={value}
                    format="y"
                  />
                </div>
              </div>
              <div className="formGroup">
                <div className="labelForm">Skills:-</div>
                <div className="">
                  <input
                    className="inputValue"
                    type="select"
                    name="fullName"
                    onChange={(e) =>
                      setDataOfForm({
                        ...dataOfForm,
                        skill: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="formGroup">
                <div className="labelForm">Languages:-</div>
                <div className="">
                  <input
                    className="inputValue"
                    type="select"
                    name="fullName"
                    onChange={(e) =>
                      setDataOfForm({
                        ...dataOfForm,
                        languages: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="formGroup">
                <div className="labelForm">Projects:-</div>
                <div className="">
                  <div className="insideDivLabelForm">Name:-</div>
                  <input
                    className="inputValue"
                    type="text"
                    name="fullName"
                    onChange={(e) =>
                      setProjects({
                        ...projects,
                        name: e.target.value,
                      })
                    }
                  />
                  <div className="insideDivLabelForm">Description:-</div>
                  <textarea
                    className="textArea"
                    name="fullName"
                    onChange={(e) =>
                      setProjects({
                        ...projects,
                        description: e.target.value,
                      })
                    }
                  />
                  <div className="insideDivLabelForm">Project Role:-</div>
                  <input
                    className="inputValue"
                    type="text"
                    name="fullName"
                    onChange={(e) =>
                      setProjects({
                        ...projects,
                        projectRole: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="formGroup">
                <button className="buttonSubmit" onClick={handleSubmitForm}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeForm;
