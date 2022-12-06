<template>
  <div class="tambah-pesanan-container">
    <textarea class="tambah-pesanan-textarea textarea"></textarea>
    <h1 class="tambah-pesanan-text">Pedas</h1>
    <h1 class="tambah-pesanan-text01">Pedas/Tidak</h1>
    <h1 class="tambah-pesanan-text02">Tidak</h1>
    <h1 class="tambah-pesanan-text03">Ya</h1>
    <h1 class="tambah-pesanan-text04">Tidak</h1>
    <h1 class="tambah-pesanan-text05">Ekstra Kentang(+10000)</h1>
    <h1 class="tambah-pesanan-text06">
      <span>CheeseBurger</span>
      <br />
      <span>Rp. 70.000</span>
      <br />
    </h1>
    <button class="tambah-pesanan-button button">Tambah Ke Pesanan</button>
    <span class="tambah-pesanan-text11">Daftar Menu</span>
    <span class="tambah-pesanan-text12">Daftar Menu</span>
    <router-link to="/profile" class="tambah-pesanan-navlink">
      <span>Makanan</span>
      <br />
      <br />
    </router-link>
    <span class="tambah-pesanan-text16">
      <span>Minuman</span>
      <br />
    </span>
    <span class="tambah-pesanan-text19">
      <span>Snack</span>
      <br />
    </span>
    <span class="tambah-pesanan-text22">
      <span>Snack</span>
      <br />
    </span>
    <span class="tambah-pesanan-text25">Daftar Menu</span>
    <router-link to="/profile" class="tambah-pesanan-navlink1">
      <span>Makanan</span>
      <br />
      <br />
    </router-link>
    <span class="tambah-pesanan-text29">
      <span>Minuman</span>
      <br />
    </span>
    <img
      alt="pastedImage"
      src="/playground_assets/pastedimage-3dva-500h.png"
      class="tambah-pesanan-pasted-image"
    />
    <span class="tambah-pesanan-text32">Daftar Menu</span>
    <span class="tambah-pesanan-text33">Daftar Menu</span>
    <router-link to="/profile" class="tambah-pesanan-navlink2">
      <span>Makanan</span>
      <br />
      <br />
    </router-link>
    <span class="tambah-pesanan-text37">
      <span>Minuman</span>
      <br />
    </span>
    <span class="tambah-pesanan-text40">
      <span>Snack</span>
      <br />
    </span>
    <router-link to="/check-out" class="tambah-pesanan-navlink3 button">
      Check Out
    </router-link>
    <span class="tambah-pesanan-text43">
      <span>Snack</span>
      <br />
    </span>
  </div>
</template>

<script>
export default {
  name: 'TambahPesanan',
  metaInfo: {
    title: 'tambahPesanan - Soft UI Pro',
    meta: [
      {
        property: 'og:title',
        content: 'tambahPesanan - Soft UI Pro',
      },
    ],
  },
}
</script>

<style scoped>
.tambah-pesanan-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.tambah-pesanan-textarea {
  top: 2px;
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
.tambah-pesanan-text {
  top: 112px;
  left: 504px;
  color: var(--dl-color-gray-700);
  position: absolute;
}
.tambah-pesanan-text01 {
  top: 65px;
  left: 507px;
  color: var(--dl-color-gray-black);
  position: absolute;
}
.tambah-pesanan-text02 {
  top: 311px;
  left: 694px;
  color: var(--dl-color-gray-700);
  position: absolute;
}
.tambah-pesanan-text03 {
  top: 315px;
  left: 500px;
  color: var(--dl-color-gray-black);
  position: absolute;
}
.tambah-pesanan-text04 {
  top: 110px;
  left: 692px;
  color: var(--dl-color-gray-black);
  position: absolute;
}
.tambah-pesanan-text05 {
  top: 252px;
  left: 500px;
  color: var(--dl-color-gray-black);
  position: absolute;
}
.tambah-pesanan-text06 {
  top: 509px;
  left: 1422px;
  color: var(--dl-color-gray-black);
  position: absolute;
}
.tambah-pesanan-button {
  color: var(--dl-color-gray-black);
  right: 151px;
  width: 315px;
  bottom: 91px;
  height: 104px;
  position: absolute;
  text-align: right;
  font-weight: 700;
  padding-right: 73px;
  background-color: rgb(233, 135, 127);
}
.tambah-pesanan-text11 {
  top: 36px;
  left: 24px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-weight: 700;
}
.tambah-pesanan-text12 {
  top: 36px;
  left: 24px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-weight: 700;
}
.tambah-pesanan-navlink {
  top: 98px;
  left: 29px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.tambah-pesanan-text16 {
  top: 130px;
  left: 27px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.tambah-pesanan-text19 {
  top: 161px;
  left: 31px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.tambah-pesanan-text22 {
  top: 161px;
  left: 31px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.tambah-pesanan-text25 {
  top: 36px;
  left: 24px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-weight: 700;
}
.tambah-pesanan-navlink1 {
  top: 98px;
  left: 29px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.tambah-pesanan-text29 {
  top: 130px;
  left: 27px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.tambah-pesanan-pasted-image {
  top: 38px;
  right: 164px;
  width: 416px;
  height: 456px;
  position: absolute;
}
.tambah-pesanan-text32 {
  top: 36px;
  left: 24px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-weight: 700;
}
.tambah-pesanan-text33 {
  top: 36px;
  left: 24px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-weight: 700;
}
.tambah-pesanan-navlink2 {
  top: 98px;
  left: 29px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.tambah-pesanan-text37 {
  top: 130px;
  left: 27px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.tambah-pesanan-text40 {
  top: 161px;
  left: 31px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
.tambah-pesanan-navlink3 {
  left: 86px;
  color: var(--dl-color-gray-black);
  width: 233px;
  bottom: 66px;
  position: absolute;
  text-align: right;
  font-weight: 700;
  padding-right: 73px;
  text-decoration: none;
  background-color: rgb(221, 233, 127);
}
.tambah-pesanan-text43 {
  top: 161px;
  left: 31px;
  color: var(--dl-color-gray-white);
  position: absolute;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
}
@media(max-width: 1200px) {
  .tambah-pesanan-text {
    top: 124px;
    left: 433px;
    color: var(--dl-color-gray-700);
    position: absolute;
    padding-bottom: 0px;
  }
  .tambah-pesanan-text01 {
    top: 68px;
    left: 434px;
    color: var(--dl-color-gray-black);
    position: absolute;
  }
  .tambah-pesanan-text02 {
    top: 296px;
    left: 613px;
    color: var(--dl-color-gray-700);
    position: absolute;
    padding-bottom: 0px;
  }
  .tambah-pesanan-text03 {
    top: 300px;
    left: 432px;
    color: var(--dl-color-gray-black);
    position: absolute;
    padding-bottom: 0px;
  }
  .tambah-pesanan-text04 {
    top: 118px;
    left: 619px;
    color: var(--dl-color-gray-black);
    position: absolute;
    padding-bottom: 0px;
  }
  .tambah-pesanan-text05 {
    top: 246px;
    left: 432px;
    color: var(--dl-color-gray-black);
    position: absolute;
  }
  .tambah-pesanan-text06 {
    top: 398px;
    color: var(--dl-color-gray-black);
    right: 55px;
    position: absolute;
    text-align: center;
  }
  .tambah-pesanan-button {
    right: -787px;
    width: 305px;
    bottom: 66px;
    height: 60px;
    margin: auto;
    text-align: center;
    padding-right: 0px;
  }
  .tambah-pesanan-text29 {
    top: 142px;
    left: 30px;
  }
  .tambah-pesanan-pasted-image {
    top: 57px;
    right: -178px;
    width: 304px;
    height: 322px;
    margin: auto;
  }
  .tambah-pesanan-navlink3 {
    left: 41px;
    width: 227px;
    bottom: 69px;
    height: 60px;
    margin: auto;
    text-align: right;
  }
}
</style>
