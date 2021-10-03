import React from "react";
import Card from "./Card";
import PictureInfo from "./PictureInfo";
import "./MainBody.css";

export default function MainBody({ selected }) {
  return (
    <>
      <div className={`main-body ${selected && `reverse`}`}>
        <div className="left-side">
          <div className="space">
            <PictureInfo
              title="Join the app with a simple click is that easy"
              text="App created for sending messages, connect to it via email and send messages to added users... check it out..."
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a
              rel="opener"
              href="https://whatsapp-e1158.web.app/"
              target="_blank"
            >
              <Card
                picture=""
                color="#fff"
                background="var(--whatsapp-color)"
                info="Technologies used in project"
                text="Build with React.js, Firebase, Material-UI, Redux"
                title="Whatsapp build"
                img=""
              ></Card>
            </a>
          </div>
        </div>
      </div>
      <div className="reversed-body">
        <div className="left-side">
          <div className="space">
            <PictureInfo
              title="LinkedIn search for a lot of opportunities..."
              text="App created for posting text messages, connect to it via email and share some helpful tips check it out..."
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a rel="opener" href="https://linkedin-me.web.app/" target="_blank">
              <Card
                background="var(--linkedin-color)"
                color="#fff"
                info="Technologies used in project"
                text="Build with React.js, Firebase, Material-UI, Redux"
                title="LinkedIn build"
                img=""
              ></Card>
            </a>
          </div>
        </div>
      </div>
      <div className={`main-body ${selected && `reverse`}`}>
        <div className="left-side">
          <div className="space">
            <PictureInfo
              title="One and only Gmail"
              text="App for sending gmails with a simple click hosted by powerful Firebase... check it out..."
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a rel="opener" href="https://me-f4341.web.app/" target="_blank">
              <Card
                color="#fff"
                background="var(--gmail-color)"
                info="Technologies used in project"
                text="Build with React.js, Firebase, Material-UI, Redux"
                title="Gmail build"
                img=""
              ></Card>
            </a>
          </div>
        </div>
      </div>
      <div className="reversed-body">
        <div className="left-side">
          <div className="space">
            <PictureInfo
              title="Facebook, one and only social-media-app"
              text="App created for posting text messages, connect to it via email, share some nice images, hosted by Firebase...  check it out..."
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a
              rel="opener"
              href="https://facebook-me-7ce43.web.app/"
              target="_blank"
            >
              <Card
                color="#fff"
                background="var(--facebook-color)"
                info="Technologies used in project"
                text="Build with React.js, Firebase, Material-UI, Redux"
                title="Facebook build"
                img=""
              ></Card>
            </a>
          </div>
        </div>
      </div>
      <div className={`main-body ${selected && `reverse`}`}>
        <div className="left-side">
          <div className="space">
            <PictureInfo
              title="Slack is here"
              text="Send messages and create various rooms for other people check it out..."
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a
              rel="opener"
              href="https://slack-me-f26c4.web.app/"
              target="_blank"
            >
              <Card
                color="#fff"
                background="var(--slack-color)"
                info="Technologies used in project"
                text="Build with React.js, Firebase, Material-UI, Redux, Styled Components"
                title="Slack build"
                img=""
              ></Card>
            </a>
          </div>
        </div>
      </div>
      <div className="reversed-body">
        <div className="left-side">
          <div className="space">
            <PictureInfo
              title="Make your favorite todo list"
              text="Simple Todo build,  add, deleted and updated the list... check it out..."
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a
              rel="opener"
              href="https://todo-me-59494.web.app/"
              target="_blank"
            >
              <Card
                color="#fff"
                background="var(--todo-color)"
                info="Technologies used in project"
                text="Build with React.js, Firebase, Material-UI"
                title="Todo app build"
              ></Card>
            </a>
          </div>
        </div>
      </div>
      <div className={`main-body ${selected && `reverse`}`}>
        <div className="left-side">
          <div className="space">
            <PictureInfo
              title="Weather app"
              text="If you wanna now the weather in your city your are in the right place..."
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a
              rel="opener"
              href="https://markobeg.github.io/React-weather-app/"
              target="_blank"
            >
              <Card
                background="var(--weatherapp-color)"
                info="Technologies used in project"
                text="Build with React.js, Material-UI,"
                title="Weather app build"
                color="#fff"
              ></Card>
            </a>
          </div>
        </div>
      </div>
      <div className="reversed-body">
        <div className="left-side">
          <div className="space">
            <PictureInfo
              title="Discord app "
              text="Send messages and create various channels for other people, connect to it via email... check it out... "
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a
              rel="opener"
              href="https://discord-1336e.web.app/"
              target="_blank"
            >
              <Card
                color="#fff"
                background="var(--discord-color)"
                info="Technologies used in project"
                text="Build with React.js, Firebase, Material-UI, Redux"
                title="Discord build"
                img=""
              ></Card>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
