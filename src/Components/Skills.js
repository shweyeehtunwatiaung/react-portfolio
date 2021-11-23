import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"70%"} text={"70%"} />
          <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"75%"} text={"75%"} />
          <ProgressBar title={"Jquery"} width={"95%"} text={"95%"} />

          <ProgressBar title={"React JS"} width={"75%"} text={"75%"} />
          <ProgressBar title={"Next Js"} width={"75%"} text={"75%"} />
          <ProgressBar title={"Express Js"} width={"60%"} text={"60%"} />
          <ProgressBar title={"SEO"} width={"60%"} text={"60%"} />

          <ProgressBar title={"Laravel"} width={"75%"} text={"75%"} />
          <ProgressBar title={"Vue"} width={"75%"} text={"75%"} />

          <ProgressBar title={"MongoDB"} width={"60%"} text={"60%"} />
          <ProgressBar title={"Firebase"} width={"60%"} text={"60%"} />

          <ProgressBar title={"BlueHost Web Hosting"} width={"75%"} text={"75%"} />

        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
