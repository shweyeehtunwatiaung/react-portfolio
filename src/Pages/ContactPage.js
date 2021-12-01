import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name is required!"),
    email: yup.string().email("Invalid Email").required("Email is required!"),
    subject: yup.string().required("Subject is required!"),
    message: yup.string().required("Message is required!"),
  })
  .required();

const ContactPage = () => {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input {...register("name", { required: true })} />
                <ErrorMsg>{errors.name?.message}</ErrorMsg>
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input {...register("email", { required: true })} />
                <ErrorMsg>{errors.email?.message}</ErrorMsg>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input {...register("subject", { required: true })} />
                <ErrorMsg>{errors.subject?.message}</ErrorMsg>
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                  {...register("message", { required: true })}
                ></textarea>
                <ErrorMsg>{errors.message?.message}</ErrorMsg>
              </div>
              <div className="form-field f-button">
                <Button type="submit">Save</Button>
              </div>
            </form>
          </div>

          <div className="right-content">
            <ContactItem title={"Phone"} icon={phone} phone={"+66-789675637"} />
            <ContactItem
              title={"Email"}
              icon={email}
              email={"shweyeehtunwatiaung@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              contact={"27 Aldrich Road, London, England"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;

const Button = styled.button`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;

const ErrorMsg = styled.p`
  color: var(--error-msg-color);
  margin-left: 10px;
  font-size: 16px;
`;