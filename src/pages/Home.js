import React from "react";
// import ReactRoundedImage from "react-rounded-image";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import TelegramIcon from "@material-ui/icons/Telegram";
import "../styles/Home.css";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.webp";
import planguages from "../assets/planguages.webp";
import me from "../assets/me.jpg";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img
          src={me}
          alt="MyPicture"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            padding: "1px",
            border: "8px solid transparent",
          }}
        />
        <h2> Hi, My Name is Chera,</h2>
        <br /> <br />
        <div className="prompt">
          <p>A software developer who loves learning and developing.</p>
          <a href="https://linkedin.com/in/cara-walteji-6a700b197">
            <LinkedInIcon />
          </a>
          <a href="https://t.me/Chance_stage">
            <TelegramIcon />
          </a>
          <a href="https://github.com/carraa99/">
            <GithubIcon />
          </a>
        </div>
      </div>
      <br /> <br />
      <Container>
        <div className="cards">
          <Container>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img className="card-img" variant="top" src={frontend} />

                <Card.Body>
                  <Card.Title>
                    <h3>
                      <b>FRONTEND</b>
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      HTML CSS ReactJS BootStrap MaterialUI React-Bootstrap
                      Flutter
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Container>
          <Container>
            <div className="card2">
              <Card style={{ width: "18rem" }}>
                <Card.Img className="card-img" variant="top" src={backend} />
                <Card.Body>
                  <br />
                  <Card.Title>
                    <h3>
                      <b>BACKEND</b>
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    <p>NodeJS ExpressJS MySQL MongoDB PHP</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Container>
          <Container>
            <div className="card3">
              <Card style={{ width: "18rem" }}>
                <Card.Img className="card-img" variant="top" src={planguages} />
                <Card.Body>
                  <br />
                  <br />

                  <Card.Title>
                    <h3>
                      <b>LANGUAGES</b>
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    <p>JavaScript Java Python C C++</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Home;
