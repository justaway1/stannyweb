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

import Nav from "../components/Nav.vue";
import image from "../assets/profile.png";
import logo from "../assets/logo.png";
import commerce from "../assets/tele.jpg";
import rps from "../assets/ROCK.jpg";


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
            <a
              href="https://justaway1.github.io/Spotify-Artist-Page/"
              target="_blank"
            >
              <p>Spotify Page</p>
            </a>
            <img :src="spotifyImage" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/Spotify-Artist-Page/"
              target="_blank"
            >
              VIEW
            </a>
          </div>
          <div class="project">
            <span>2.</span>
            <a href="https://justaway1.github.io/Telescopy/" target="_blank"
              ><p>E Commerce WebSite</p></a
            >
            <img :src="commerce" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/Telescopy/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>3.</span>
            <a
              href="https://justaway1.github.io/RockPaperScissor/"
              target="_blank"
              ><p>ROCK/PAPER/SCISSOR Game</p></a
            >
            <img :src="rps" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/RockPaperScissor/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>4.</span>
            <a
              href="https://justaway1.github.io/WhoWantsToBeAProgrammer/"
              target="_blank"
              ><p>Quiz Game</p></a
            >
            <img :src="quiz" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/WhoWantsToBeAProgrammer/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>5.</span>
            <a href="https://justaway1.github.io/Notes/" target="_blank"
              ><p>Notebook</p></a
            >
            <img :src="note" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/Notes/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>6.</span>
            <a href="https://justaway1.github.io/Quiz/" target="_blank"
              ><p>Another Quiz Game</p></a
            >
            <img :src="math" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/Quiz/"
              target="_blank"
              >VIEW</a
            >
          </div>

          <div v-if="show" class="project">
            <span>5.</span>
            <a
              href="https://justaway1.github.io/stanny-website/"
              target="_blank"
              ><p>Cloud WebSite</p></a
            >

            <img :src="cloud" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/stanny-website/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div v-if="show" class="project">
            <span>6.</span>
            <a
              href="https://justaway1.github.io/JS-Technical-Documentation-Page/"
              target="_blank"
              ><p>JS Documentation</p></a
            >

            <img :src="documentation" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/JS-Technical-Documentation-Page/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div v-if="show" class="project">
            <span>7.</span>
            <a href="https://justaway1.github.io/Landing-Page/" target="_blank"
              ><p>Landing Page</p></a
            >
            <img :src="page" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/Landing-Page/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div v-if="show" class="project">
            <span>8.</span>
            <a href="https://justaway1.github.io/DrumKit/" target="_blank"
              ><p>Drumkit</p></a
            >
            <img :src="drum" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/DrumKit/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <button class="showAll" @click="show = !show">
            {{ show ? "HIDE THEM" : "SHOW REST" }}
          </button>
        </div>
      </div>
            <p>Spotify Page</p>
            <img :src="spotifyImage" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/Spotify-Artist-Page/"
              target="_blank"
            >
              VIEW
            </a>
          </div>
          <div class="project">
            <span>2.</span>
            <a href="https://justaway1.github.io/Telescopy/" target="_blank"
              ><p>E Commerce WebSite</p></a
            >
            <img :src="commerce" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/Telescopy/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>3.</span>
            <a
              href="https://justaway1.github.io/RockPaperScissor/"
              target="_blank"
              ><p>ROCK/PAPER/SCISSOR Game</p></a
            >
            <img :src="rps" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/RockPaperScissor/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>4.</span>
            <a
              href="https://justaway1.github.io/WhoWantsToBeAProgrammer/"
              target="_blank"
              ><p>Quiz Game</p></a
            >
            <img :src="quiz" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/WhoWantsToBeAProgrammer/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>5.</span>
            <a href="https://justaway1.github.io/Notes/" target="_blank"
              ><p>Notebook</p></a
            >
            <img :src="note" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/Notes/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div class="project">
            <span>6.</span>
            <a href="https://justaway1.github.io/Quiz/" target="_blank"
              ><p>Another Quiz Game</p></a
            >
            <img :src="math" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/Quiz/"
              target="_blank"
              >VIEW</a
            >
          </div>

          <div v-if="show" class="project">
            <span>5.</span>
            <a
              href="https://justaway1.github.io/stanny-website/"
              target="_blank"
              ><p>Cloud WebSite</p></a
            >

            <img :src="cloud" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/stanny-website/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div v-if="show" class="project">
            <span>6.</span>
            <a
              href="https://justaway1.github.io/JS-Technical-Documentation-Page/"
              target="_blank"
              ><p>JS Documentation</p></a
            >

            <img :src="documentation" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/JS-Technical-Documentation-Page/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div v-if="show" class="project">
            <span>7.</span>
            <a href="https://justaway1.github.io/Landing-Page/" target="_blank"
              ><p>Landing Page</p></a
            >
            <img :src="page" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/Landing-Page/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <div v-if="show" class="project">
            <span>8.</span>
            <a href="https://justaway1.github.io/DrumKit/" target="_blank"
              ><p>Drumkit</p></a
            >
            <img :src="drum" class="hidden" />
            <a
              class="view"
              href="https://justaway1.github.io/DrumKit/"
              target="_blank"
              >VIEW</a
            >
          </div>
          <button class="showAll" @click="show = !show">
            {{ show ? "HIDE THEM" : "SHOW REST" }}
          </button>
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
  cursor: pointer;

}
span {
  font-weight: normal;
}
.box_content {
  overflow: auto;
  padding-bottom: 20px;
}
.box_content {
  overflow: auto;
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

.project a:hover + .hidden {
  display: block;
  width: 500px;
  height: 200px;
  z-index: 999;
}

.project img {
  object-fit: contain;

  margin-bottom: 10px;
}

p:hover + .hidden {
  display: block;
  width: 100%;
  height: 300px;
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

  font-weight: normal;

}

.project p {
  margin-left: 30px;
  font-size: 2rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.756);

  text-decoration: underline;
}

.view {
  margin-left: auto;
  font-size: 1.5rem;

  text-decoration: underline;

}
.project button {
  margin-left: auto;

}

.view {

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
  font-size: 1.7rem;
  letter-spacing: 0.1rem;
}
</style>
