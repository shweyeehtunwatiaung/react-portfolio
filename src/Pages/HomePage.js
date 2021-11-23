import React, { useState } from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
// import Particle from '../Components/Particle';
import business from "../img/vd/marketing.mp4";
import Modal from "../Components/Modal";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { emit } from "../store/emit.action";

const HomePage = () => {
  const [modalValue, setModalValue] = useState();
  const { isModal, modalApi_data } = useSelector((state) => state.emitReducer);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(emit("IS_MODAL", true));
  };

  const handleClose = () => {
    dispatch(emit("IS_MODAL", !isModal));
  };

  const handleApi = (check) => {
    console.log("check", check);

    check &&
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => dispatch(emit("IS_MODAL_API", data)));
  };

  return (
    <>
      <HomePageStyled>
        <div className="particle-con">
          {/* <video src={business} muted playsInline autoPlay loop></video> */}
        </div>
        <div className="typography">
          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Home
          </Button> */}
          <h1>
            <span>Welcome from my site</span>
          </h1>
          <div className="icons">
            <a href="https://github.com/shweyeehtunwatiaung/" target="_blank" rel="noreferrer" className="icon i-github">
              <GithubIcon />
            </a>
          </div>
        </div>
      </HomePageStyled>
      <Modal
        open={isModal}
        handleClose={handleClose}
        handleApi={handleApi}
        modalValue={modalApi_data}
      />
    </>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
