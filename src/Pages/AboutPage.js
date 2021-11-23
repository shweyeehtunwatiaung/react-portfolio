import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
import ServicesSection from "../Components/ServicesSection";
import ReviewsSection from "../Components/ReviewsSetion";
import { emit } from "../store/emit.action";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Components/Modal";

const AboutPage = () => {
  const { isModal, modalApi_data } = useSelector((state) => state.emitReducer);
  const dispatch = useDispatch();

  // const handleClickOpen = () => {
  //   dispatch(emit("IS_MODAL", true));
  // };

  const handleClose = () => {
    dispatch(emit("IS_MODAL", !isModal));
  };

  const handleApi = (check) => {
    console.log("check", check);

    check &&
      fetch("https://jsonplaceholder.typicode.com/todos/2")
        .then((response) => response.json())
        .then((data) => dispatch(emit("IS_MODAL_API", data)));
  };

  return (
    <MainLayout>
      <AboutStyled>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          About
        </Button> */}
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
      <Modal
        open={isModal}
        handleClose={handleClose}
        handleApi={handleApi}
        modalValue={modalApi_data}
      />
    </MainLayout>
  );
};

const AboutStyled = styled.section``;

export default AboutPage;
