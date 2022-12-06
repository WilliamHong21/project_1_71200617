<template>
  <div class="check-out-container">
    <textarea class="check-out-textarea textarea"></textarea>
    <button class="check-out-button button">Check Out</button>
    <span class="check-out-text">
      <span>Snack</span>
      <br />
    </span>
    <span class="check-out-text03">
      <span>Minuman</span>
      <br />
    </span>
    <router-link to="/profile" class="check-out-navlink">
      <span>Makanan</span>
      <br />
      <br />
    </router-link>
    <span class="check-out-text09">Daftar Menu</span>
    <img
      alt="pastedImage"
      src="/playground_assets/pastedimage-svd-400w.png"
      class="check-out-pasted-image"
    />
    <img
      alt="pastedImage"
      src="/playground_assets/pastedimage-3dva-400h.png"
      class="check-out-pasted-image1"
    />
    <h1 class="check-out-text10">
      <span>CheeseBurger</span>
      <br />
      <br />
    </h1>
    <h1 class="check-out-text14">
      <span>Catatan</span>
      <br />
      <span>Pedas</span>
      <br />
      <span>Ekstra Kentang</span>
      <br />
    </h1>
    <h1 class="check-out-text21">
      <span>Rp. 80.000</span>
      <br />
    </h1>
    <h1 class="check-out-text24">
      <span>Rp. 12.000</span>
      <br />
    </h1>
    <h1 class="check-out-text27">
      <span>Total Pesanan Anda Rp.92.000</span>
      <br />
    </h1>
    <h1 class="check-out-text30">
      <span>Thursday Ice Cream</span>
      <br />
    </h1>
  </div>
</template>

<script>
export default {
  name: 'CheckOut',
  metaInfo: {
    title: 'checkOut - Soft UI Pro',
    meta: [
      {
        property: 'og:title',
        content: 'checkOut - Soft UI Pro',
      },
    ],
  },
}
</script>

<style scoped>
.check-out-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.check-out-textarea {
  top: -5px;
  left: 1px;
  color: #677a8e;
  width: 427px;
  height: 988px;
  position: absolute;
  align-self: flex-start;
  padding-top: 17px;
  padding-bottom: 0px;
  background-color: #e06565;
}
.check-out-button {
  left: 86px;
  color: var(--dl-color-gray-black);
  bottom: 66px;
  position: absolute;
  text-align: left;
  font-weight: 700;
  padding-right: 73px;
  background-color: rgb(221, 233, 127);
}
.check-out-text {
  top: 161px;
  left: 31px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.check-out-text03 {
  top: 130px;
  left: 27px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.check-out-navlink {
  top: 98px;
  left: 29px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.check-out-text09 {
  top: 36px;
  left: 24px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-weight: 700;
}
.check-out-pasted-image {
  top: 521px;
  left: 581px;
  width: 305px;
  height: 280px;
  position: absolute;
}
.check-out-pasted-image1 {
  top: 74px;
  left: 580px;
  width: 301px;
  height: 315px;
  position: absolute;
}
.check-out-text10 {
  top: 402px;
  left: 590px;
  color: var(--dl-color-gray-black);
  position: absolute;
}
.check-out-text14 {
  top: 187px;
  left: 906px;
  color: var(--dl-color-gray-700);
  position: absolute;
}
.check-out-text21 {
  top: 266px;
  color: var(--dl-color-gray-black);
  right: 90px;
  position: absolute;
}
.check-out-text24 {
  color: var(--dl-color-gray-black);
  right: 88px;
  bottom: 173px;
  position: absolute;
}
.check-out-text27 {
  color: var(--dl-color-gray-black);
  right: 120px;
  bottom: 44px;
  position: absolute;
}
.check-out-text30 {
  left: 580px;
  color: var(--dl-color-gray-black);
  bottom: 122px;
  position: absolute;
}
@media(max-width: 1200px) {
  .check-out-button {
    left: 41px;
    width: 227px;
    bottom: 69px;
    height: 60px;
    margin: auto;
    text-align: right;
  }
  .check-out-pasted-image1 {
    top: 57px;
    right: -178px;
    width: 304px;
    height: 322px;
    margin: auto;
  }
  .check-out-text10 {
    top: 398px;
    color: var(--dl-color-gray-black);
    right: 55px;
    position: absolute;
    text-align: center;
  }
  .check-out-text14 {
    top: 398px;
    color: var(--dl-color-gray-black);
    right: 55px;
    position: absolute;
    text-align: center;
  }
  .check-out-text21 {
    top: 398px;
    color: var(--dl-color-gray-black);
    right: 55px;
    position: absolute;
    text-align: center;
  }
  .check-out-text24 {
    top: 398px;
    color: var(--dl-color-gray-black);
    right: 55px;
    position: absolute;
    text-align: center;
  }
  .check-out-text27 {
    top: 398px;
    color: var(--dl-color-gray-black);
    right: 55px;
    position: absolute;
    text-align: center;
  }
  .check-out-text30 {
    top: 398px;
    color: var(--dl-color-gray-black);
    right: 55px;
    position: absolute;
    text-align: center;
  }
}
</style>
