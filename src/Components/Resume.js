import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"Jun 2016"}
            title={"Diploma in IT"}
            subTitle={"National Management College"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"Nov 2017"}
            title={"Bachelor of Technology - B.Tech (IT)"}
            subTitle={"Thanlyin Technology University (TTU)"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"Nov 2019"}
            title={"Bachelor of Engineering - B.E (IT)"}
            subTitle={"Thanlyin Technology University (TTU)"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2017 - 2019"}
            title={"Junior Web Developer"}
            subTitle={"-"}
            text={
              "HTML5, CSS3, JavaScript, JQuery, Bootstrap, JQuery,Symfony, Wordpress, PHP,  Familiarity with Redux  & Vuejs"
            }
          />
          <ResumeItem
            year={"2019 - 2020"}
            title={"Full Stack Developer "}
            subTitle={"Myanmar Marketing Research & Development Ltd"}
            text={
              " HTML5, CSS3, JavaScript, JQuery, Styled component, Material UI, PHP, Laravel, Symfony, React Js , RESTful API"
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
