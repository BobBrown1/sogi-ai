import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Intro, Footer} from './App';
import Questions from './Questions';
import {Result, GenderResult} from './Questions';
import results0 from './AI';
import results1 from './GenderAI';
import LearnSexualities from './Learn';
import {LearnGender} from './Learn'

const root = ReactDOM.createRoot(document.getElementById('root'));

const params = new URLSearchParams(window.location.search);
if (params.has('pathway') && params.has('nickname')) {
  if (params.get('nickname').length < 21) {
    if (params.get('pathway') === "sexuality") {
      questions(params.get('nickname'), 2, {"pathway": 0})
    } else if (params.get('pathway') === "gender") {
      questions(params.get('nickname'), 3, {"pathway": 1})
    }
  }
} else {
  root.render(
    <React.StrictMode>
      <App />
      <Footer />
    </React.StrictMode>
  );
}

export function begin(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let processUsername = username.replace(/\s/g, "")
  if (processUsername.length < 1) {
      document.getElementById("username").style.border = "1.5px solid red";
  } else {
      root.render(
        <React.StrictMode>
          <Intro user={username} info={{}} page={0}/>
        </React.StrictMode>
      );
  }
}

export function home() {
  root.render(
    <React.StrictMode>
      <App />
      <Footer />
    </React.StrictMode>
  );
}

export function previous(username, goTo, info) {
  root.render (
    <React.StrictMode>
      <Questions user={username} page={goTo} info={info}/>
    </React.StrictMode>
  )
}

export function learn(username, info, part, previous) {
  if (part === 0) {
    root.render (
      <LearnSexualities user={username} info={info} previous={previous} />
    );
  }
  if (part === 1) {
    root.render (
      <LearnGender user={username} info={info} previous={previous} />
    );
  }
}

export function questions(username, page, info) {
  if (page === 0) {
    page = 1;
  }
  if (page === 13 || page === 23) {
    if (info['pathway'] === 0) {
      var results = results0(info);
      root.render (
        <React.StrictMode>
          <Result user={username} page={page} info={info} results={results} />
        </React.StrictMode>
      )
    } else if (info['pathway'] === 1) {
      var genderResults = results1(info);
      root.render (
        <React.StrictMode>
          <GenderResult user={username} page={page} info={info} results={genderResults} />
        </React.StrictMode>
      )
    }
    return false;
  }
  root.render (
    <React.StrictMode>
      <Questions user={username} page={page} info={info}/>
    </React.StrictMode>
  )
}