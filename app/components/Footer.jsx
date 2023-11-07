"use client";
import Image from "next/image";
import styled from "styled-components";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import location from "../assets/location.png";
import Copyrights from "./Copyrights";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <MainContainer>
        <FirstDiv>
          <Link href="#navbar">
            <Image src={logo} alt="logo" className="logo" width={218} />
          </Link>
        </FirstDiv>

        <div className="containerLeft">
          <div className="containerLeftSecond">
            <div className="containerLeftThird">
              <p width={12}>
                <Image
                  src={location}
                  alt="location"
                  className="locationPicture"
                  style={LocationImg}
                />
              </p>
            </div>
            <div className="containerLeftFourth">
              <p>STR. MEHEDINTI, NR. 47-49</p>
              <p>Cluj Napoca</p>
              <p>Jud. Cluj</p>
            </div>
          </div>

          <div className="containerLeftSecond">
            <div className="containerLeftThird">
              <p>
                <Image
                  src={phone}
                  alt="phone"
                  className="locationPicture"
                  style={LocationImg}
                />
              </p>
            </div>
            <div className="containerLeftFourth">
              Working hours: 8:00-17:00
              <p>(luni-vineri)</p>
              <p>Mobile: 0758876968</p>
              <p>Fix: 0758876968</p>
            </div>
          </div>

          <div className="containerLeftSecondEmail">
            <p>
              <Image src={email} alt="email" style={IconImg} />
            </p>
            <p>vladtrifan@smartconfex.ro</p>
          </div>
        </div>
        <ThirdContainer>
          <UnorderedList>
            <li>
              <Link href="/contact">Contacts</Link>
            </li>
            <li>
              <Link href="/terms">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/cookies">Cookies</Link>
            </li>
            <li>
              <Link href="https://anpc.ro">ANPC</Link>
            </li>
          </UnorderedList>
        </ThirdContainer>

        <Copyrights />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.footer`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 4fr);
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,49,89,1) 0%, rgba(60,116,255,1) 100%);
  border-radius: 0.5rem;
  padding-top: 2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  .containerLeft {
    color: white;

    .containerLeftSecond {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
    }

    .locationPicture {
      margin-top: 20px;
      height: 20px;
    }
    .imgContainer {
      height: 20px;
    }
    .containerLeftFourth {
      margin-left: 20px;
    }
  }

  .containerLeftSecondEmail {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    p:nth-child(2) {
      margin-left: 13px;
    }
  }

  .containerLeftFifth {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

  .logo {
    height: 200px;
  }

  .anpc {
    height: 45px;
  }

  span {
    color: white;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    color: white;
    li {   
      a {
        text-decoration: none;
        color: white;
        transition: 0.3s ease-in-out;
        padding: 0.4em;
        &:hover {
          color: blue;
        }
      }
      svg {
        font-size: 1.9rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          color: blue;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    ul {
      flex-direction: row;
      gap: 3rem;
      margin: 0.5em auto;
    
    }
    .social__links {
      flex-direction: row;
    }
  }
  .
`;

const ThirdContainer = styled.div`
  list-style-type: none;
  gap: 2rem;
  color: white;
  margin-left: -150px;


  @media (max-width: 1024px) {
    list-style-type: none;
    gap: 2rem;
    color: white;
    margin-left: 0;
  }

  @media screen and (min-width: 1025px) and (max-width: 1270px) {
    list-style-type: none;
    gap: 2rem;
    color: white;
    margin-left: 110px;
  }
  li {
    a {
      text-decoration: none;
      color: white;
      transition: 0.3s ease-in-out;
      &:hover {
        color: red;
      }
    }
    svg {
      font-size: 1.9rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
`;

const UnorderedList = styled.div`

li {
  display: block; 
  padding: 0.4rem;   
  a {
    text-decoration: none;
    color: white;
    transition: 0.3s ease-in-out;
    p
    &:hover {
      color: red;
    }
  }
  @media (max-width: 1024px) {
    margin-top: 15px;
    font-size: 25px;
    text-align: left;
  }
`;

const FirstDiv = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: 25px;
`;

const IconImg = {
  width: 20,
  height: 20,
};

const LocationImg = {
  width: 12.5,
  height: 20,
};
