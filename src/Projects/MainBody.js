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
              title="Movies for everyone out there"
              text="TMDB API used to create site for searching movies, check it out..."
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a
              rel="opener"
              href="https://markobeg.github.io/MoviesMark-React-Movie-App/"
              target="_blank"
            >
              <Card
                picture=""
                color="#fff"
                background="var(--moviesmark-color)"
                info="Technologies used in project"
                text="Build with React.js, Firebase, Material-UI, Redux, TMDB"
                title="MoviesMark build"
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
              title="Search for you favorite Apartment"
              text="You can search for you favorite Apartment with few clicks is that easy check it out..."
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a
              rel="opener"
              href="https://markobeg.github.io/Tailwind-CSS-React-Apartments-site/"
              target="_blank"
            >
              <Card
                background="var(--markapart-color)"
                color="#fff"
                info="Technologies used in project"
                text="Build with React.js, Firebase, Material-UI, Tailwind CSS"
                title="MarkApart build"
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
              title="InstaMark is here"
              text="Post your Pictures and comment them, also you have a little forum where you can send messages..."
            ></PictureInfo>
          </div>
        </div>
        <div className="right-side">
          <div className="space">
            <a
              rel="opener"
              href="https://instamark-me.web.app/"
              target="_blank"
            >
              <Card
                color="#fff"
                background="var(--instamark-color)"
                info="Technologies used in project"
                text="Build with React.js, Firebase, Material-UI, Redux"
                title="Instamark build"
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
              title="Whatsapp"
              text="Send messages and create various channels for other people, connect to it via email... check it out... "
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
    </>
  );
}
