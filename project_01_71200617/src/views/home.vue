<template>
  <div class="home-container">
    <h1 class="home-text">
      <span>Selamat Datang Di Aplikasi MacDonal,</span>
      <br />
      <span>SIlakan Pesan Makanan Anda</span>
      <br />
    </h1>
    <textarea class="home-textarea textarea"></textarea>
    <span class="home-text05">Daftar Menu</span>
    <span class="home-text06">Daftar Menu</span>
    <router-link to="/profile" class="home-navlink">
      <span>Makanan</span>
      <br />
      <br />
    </router-link>
    <span class="home-text10">
      <span>Minuman</span>
      <br />
    </span>
    <span class="home-text13">
      <span>Snack</span>
      <br />
    </span>
    <button class="home-button button">Check Out</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Soft UI Pro',
    meta: [
      {
        property: 'og:title',
        content: 'Soft UI Pro',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text {
  top: 404px;
  left: 832px;
  color: var(--dl-color-gray-black);
  position: absolute;
  text-align: center;
}
.home-textarea {
  color: #677a8e;
  width: 397px;
  height: 988px;
  align-self: flex-start;
  padding-top: 17px;
  padding-bottom: 0px;
  background-color: #e06565;
}
.home-text05 {
  top: 36px;
  left: 24px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-weight: 700;
}
.home-text06 {
  top: 36px;
  left: 24px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-weight: 700;
}
.home-navlink {
  top: 98px;
  left: 29px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.home-text10 {
  top: 130px;
  left: 27px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.home-text13 {
  top: 161px;
  left: 31px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.home-button {
  left: 76px;
  color: var(--dl-color-gray-black);
  width: 225px;
  bottom: 80px;
  height: 69px;
  position: absolute;
  text-align: right;
  font-weight: 700;
  padding-right: 73px;
  background-color: rgb(221, 233, 127);
}
@media(max-width: 1200px) {
  .home-text {
    top: 396px;
    left: 425px;
    width: 626px;
    margin: auto;
  }
  .home-button {
    left: 41px;
    width: 227px;
    bottom: 69px;
    height: 60px;
    margin: auto;
    text-align: right;
  }
}
</style>
