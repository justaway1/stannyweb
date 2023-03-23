<script setup>
import Nav from "../components/Nav.vue";
import image from "../assets/profile.png";
import logo from "../assets/logo.png";
import spotifyImage from "../assets/Spotifypage.jpg";
import commerce from "../assets/tele.jpg";
import rps from "../assets/ROCK.jpg";
</script>

<template>
  <div class="left_content">
    <img :src="logo" alt="logo" class="logo_brand" />
    <div class="profile_image">
      <img :src="image" alt="profile" class="myImage" />
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
            <button>VIEW</button>
          </div>
          <div class="project">
            <span>2.</span>
            <p>E Commerce WebSite</p>
            <img :src="commerce" class="hidden" />
            <button>VIEW</button>
          </div>
          <div class="project">
            <span>3.</span>
            <p>ROCK/PAPER/SCISSOR Game</p>
            <img :src="rps" class="hidden" />
            <button>VIEW</button>
          </div>
        </div>
        <div class="unfinished">
          <h2>Concepts / Unfinished Projects</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  margin-bottom: 10px;
}

p:hover + .hidden {
  display: block;
  width: 500px;
  height: 200px;
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
}

.project p {
  margin-left: 30px;
  font-size: 2rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.756);
  text-decoration: underline;
}
.project button {
  margin-left: auto;
  background-color: var(--background);
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
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
