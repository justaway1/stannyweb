<script setup>
import { ref } from "vue";
import Nav from "../components/Nav.vue";
import image from "../assets/profile.png";
import logo from "../assets/logo.png";
import spotifyImage from "../assets/Spotifypage.jpg";
import commerce from "../assets/tele.jpg";
import rps from "../assets/ROCK.jpg";
import quiz from "../assets/Who wants to be.jpg";
import cloud from "../assets/first-website.png";
import documentation from "../assets/JS Documentation.jpg";
import page from "../assets/landingpage.jpg";
import drum from "../assets/drumkit.jpg";
import note from "../assets/note.png";
import math from "../assets/math.png";

const show = ref(false);
</script>

<template>
  <div class="left_content">
    <img :src="logo" alt="logo" class="logo_brand" />
    <div class="profile_image">
      <img :src="image" alt="profile" class="myImage" />
    </div>
    <div class="contact_info">
      <code>stannyweb@gmail.com</code>
    </div>
  </div>
  <div class="right_content">
    <div class="box_content">
      <Nav />
      <div class="projects">
        <div class="finished">
          <h2>Finished Projects</h2>
          <div class="project">
            <span>1.</span>
            <p>Spotify Page</p>
            <img :src="spotifyImage" class="hidden" />
            <a
              href="https://justaway1.github.io/Spotify-Artist-Page/"
              target="_blank"
            >
              VIEW
            </a>
          </div>
          <div class="project">
            <span>2.</span>
            <p>E Commerce WebSite</p>
            <img :src="commerce" class="hidden" />
            <a href="https://justaway1.github.io/Telescopy/" target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>3.</span>
            <p>ROCK/PAPER/SCISSOR Game</p>
            <img :src="rps" class="hidden" />
            <a
              href="https://justaway1.github.io/RockPaperScissor/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>4.</span>
            <p>Quiz Game</p>
            <img :src="quiz" class="hidden" />
            <a
              href="https://justaway1.github.io/WhoWantsToBeAProgrammer/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>5.</span>
            <p>Notebook</p>
            <img :src="note" class="hidden" />
            <a href="https://justaway1.github.io/Notes/" target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>6.</span>
            <p>Another Quiz Game</p>
            <img :src="math" class="hidden" />
            <a href="https://justaway1.github.io/Quiz/" target="_blank">VIEW</a>
          </div>

          <div v-if="show" class="project">
            <span>5.</span>
            <p>Cloud WebSite</p>
            <img :src="cloud" class="hidden" />
            <a
              href="https://justaway1.github.io/stanny-website/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div v-if="show" class="project">
            <span>6.</span>
            <p>JS Documentation</p>
            <img :src="documentation" class="hidden" />
            <a
              href="https://justaway1.github.io/JS-Technical-Documentation-Page/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div v-if="show" class="project">
            <span>7.</span>
            <p>Landing Page</p>
            <img :src="page" class="hidden" />
            <a href="https://justaway1.github.io/Landing-Page/" target="_blank"
              >VIEW</a
            >
          </div>
          <div v-if="show" class="project">
            <span>8.</span>
            <p>Drumkit</p>
            <img :src="drum" class="hidden" />
            <a href="https://justaway1.github.io/DrumKit/" target="_blank"
              >VIEW</a
            >
          </div>
          <button class="showAll" @click="show = !show">
            {{ show ? "Hide" : "Show" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.showAll {
  border: none;
  padding: 5px 20px;
  background-color: var(--background);
  color: white;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
}
span {
  font-weight: normal;
}
.box_content {
  overflow: auto;
  padding-bottom: 20px;
}
.hidden {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
}
.projects {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 30px;
  margin-left: 50px;
}

.project {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgba(53, 52, 52, 0.095);
  margin-bottom: 5px;
}

p:hover + .hidden {
  display: block;
  width: 500px;
  height: 200px;
  z-index: 999;
}

.project img {
  object-fit: contain;
}

p:hover {
  text-decoration: underline;
  cursor: pointer;
}

.project span {
  font-size: 2rem;
  font-weight: normal;
}

.project p {
  margin-left: 30px;
  font-size: 2rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.756);
  text-decoration: underline;
}
.project a {
  margin-left: auto;
  font-size: 1.5rem;
  background-color: var(--background);
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
}

.project a:hover {
  opacity: 0.8;
}

.finished h2,
.unfinished h2 {
  background-color: var(--background);
  border-left: 7px solid var(--secondary);
  box-shadow: -3px 1px 0 rgba(0, 0, 0, 0.204);
  border-radius: 5px;
  color: white;
  margin-bottom: 10px;
  padding: 5px 10px;
  text-transform: uppercase;
  font-weight: bold;
  width: 60%;
}
</style>
