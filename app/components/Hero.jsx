"use client";
import styled from "styled-components";
import Image from "next/image";
import homeImage from "../assets/heroBk.jpg";

export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <Image src={homeImage} alt="homeImage" style={imageStyle} />
      </div>
      <div className="content">
        <div className="title">
          <h1>BUILDING TRUST</h1>
          <p>ONE PART AT A TIME</p>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .title {
      color: white;
      h1 {
        font-size: 4rem;
        letter-spacing: 0.2rem;
        color: darkorange;
        @media (max-width: 1024px) {        
          font-size: 1.8rem;
}
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 2.2rem;
        color: darkorange;
        margin-top: 50px;
        @media (max-width: 1024px) {        
          font-size: 1rem;
}
      }
     
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    width: 100%;

    .background {
      background-color: palegreen;
    }
    .content {
      
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

const imageStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px",
};
