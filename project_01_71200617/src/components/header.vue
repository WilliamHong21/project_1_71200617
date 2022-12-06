<template>
  <div data-role="Header" class="header-header">
    <div data-role="MobileMenu" class="header-mobile-menu">
      <div class="header-top">
        <router-link to="/" class="header-navlink Large">
          Soft UI Design System
        </router-link>
        <div data-role="CloseMobileMenu" class="header-close-menu">
          <svg viewBox="0 0 1024 1024" class="header-icon">
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="header-mid">
        <div class="header-menu">
          <router-link to="/" class="header-navlink1 Large">Home</router-link>
          <router-link to="/profile" class="header-navlink2 Large">
            Profile
          </router-link>
          <span class="header-text Large">Coming Soon</span>
        </div>
      </div>
      <div class="header-bot">
        <primary-pink-button button="buy now"></primary-pink-button>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryPinkButton from './primary-pink-button'

export default {
  name: 'Header',
  props: {},
  components: {
    PrimaryPinkButton,
  },
}
</script>

<style scoped>
.header-header {
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  bottom: auto;
  display: flex;
  z-index: 3;
  position: fixed;
  max-width: 1320px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.header-mobile-menu {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-space-space-unitandahalfunit);
  z-index: 100;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.header-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-navlink {
  color: var(--dl-color-secondary-700);
  font-weight: 600;
  text-decoration: none;
}
.header-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-icon {
  width: 24px;
  height: 24px;
}
.header-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-navlink1 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink1:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink2 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink2:hover {
  color: var(--dl-color-gray-500);
}
.header-text {
  transition: 0.3s;
  text-decoration: none;
}
.header-text:hover {
  color: var(--dl-color-gray-500);
}
.header-bot {
  flex: 0 0 auto;
  display: flex;
  margin-top: auto;
  flex-direction: column;
}
</style>
