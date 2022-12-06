<template>
  <div class="profile-container">
    <span class="profile-text">
      <span>Snack</span>
      <br />
    </span>
    <img
      alt="pastedImage"
      src="/playground_assets/pastedimage-3dva-400h.png"
      class="profile-pasted-image"
    />
    <router-link to="/tambah-pesanan" class="profile-navlink">
      <img
        alt="pastedImage"
        src="/playground_assets/pastedimage-tr4p-400h.png"
        class="profile-pasted-image1"
      />
    </router-link>
    <h1 class="profile-text03">GigaMac</h1>
    <h1 class="profile-text04">CheeseBurger</h1>
    <h1 class="profile-text05">MacNugget</h1>
    <img
      alt="pastedImage"
      src="/playground_assets/pastedimage-sxp9-500h.png"
      class="profile-pasted-image2"
    />
    <button class="profile-button button">Check Out</button>
    <span class="profile-text06">
      <span>Snack</span>
      <br />
    </span>
    <span class="profile-text09">
      <span>Minuman</span>
      <br />
    </span>
    <router-link to="/profile" class="profile-navlink1">
      <span>Makanan</span>
      <br />
      <br />
    </router-link>
    <span class="profile-text15">Daftar Menu</span>
    <span class="profile-text16">Daftar Menu</span>
    <textarea class="profile-textarea textarea"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  metaInfo: {
    title: 'Profile - Soft UI Pro',
    meta: [
      {
        property: 'og:title',
        content: 'Profile - Soft UI Pro',
      },
    ],
  },
}
</script>

<style scoped>
.profile-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.profile-text {
  top: 161px;
  left: 31px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.profile-pasted-image {
  top: 46px;
  left: 961px;
  width: 272px;
  height: 305px;
  position: absolute;
}
.profile-navlink {
  display: contents;
}
.profile-pasted-image1 {
  top: 42px;
  left: 471px;
  width: 285px;
  height: 302px;
  position: absolute;
  text-decoration: none;
}
.profile-text03 {
  top: 371px;
  left: 541px;
  color: var(--dl-color-gray-black);
  position: absolute;
  padding-right: 129px;
}
.profile-text04 {
  top: 373px;
  left: 981px;
  color: var(--dl-color-gray-black);
  position: absolute;
  padding-right: 129px;
}
.profile-text05 {
  top: 373px;
  color: var(--dl-color-gray-black);
  right: 98px;
  position: absolute;
  padding-right: 129px;
}
.profile-pasted-image2 {
  top: -9px;
  right: 57px;
  height: 431px;
  position: absolute;
}
.profile-button {
  left: 86px;
  color: var(--dl-color-gray-black);
  bottom: 66px;
  position: absolute;
  text-align: left;
  font-weight: 700;
  padding-right: 73px;
  background-color: rgb(221, 233, 127);
}
.profile-text06 {
  top: 161px;
  left: 31px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.profile-text09 {
  top: 130px;
  left: 27px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.profile-navlink1 {
  top: 98px;
  left: 29px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.profile-text15 {
  top: 36px;
  left: 24px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-weight: 700;
}
.profile-text16 {
  top: 36px;
  left: 24px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-weight: 700;
}
.profile-textarea {
  color: #677a8e;
  width: 397px;
  height: 988px;
  align-self: flex-start;
  padding-top: 17px;
  padding-bottom: 0px;
  background-color: #e06565;
}
@media(max-width: 1200px) {
  .profile-pasted-image {
    top: 32px;
    left: 663px;
  }
  .profile-pasted-image1 {
    top: 33px;
    left: 380px;
  }
  .profile-pasted-image2 {
    top: -20px;
    right: 23px;
    width: 273px;
    height: 298px;
    position: absolute;
  }
  .profile-button {
    left: 41px;
    width: 227px;
    bottom: 69px;
    height: 60px;
    margin: auto;
    text-align: right;
  }
}
</style>
