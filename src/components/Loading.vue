<template>
    <transition name="fade">
        <div class="lwrapper" v-if="loading">
            <div class="lcontainer">
                <svg viewBox="0 -87 463.83425 463" xmlns="http://www.w3.org/2000/svg">
                    <path d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0" fill="#a3d4f7"></path>
                </svg>
                <svg viewBox="0 -87 463.83425 463" xmlns="http://www.w3.org/2000/svg">
                    <path d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0" fill="#b3e4ff"></path>
                </svg>
                <svg viewBox="0 -87 463.83425 463" xmlns="http://www.w3.org/2000/svg">
                    <path d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0" fill="#fff"></path>
                </svg>
            </div>
            <p>Loading...</p>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Loading',
    data() {
        return {
            loading: true
        }
    },
    methods: {
        show() {
            this.loading = true
        },
        hide() {
            this.loading = false
        }
    }
}
</script>

<style>
.map {
    width: 100%;
    height: 400px;
}
.lwrapper {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, .6);
    backdrop-filter: blur(20px);
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .lwrapper p {
    color: #0006;
    font-weight: 600;
    font-size: 24px;
    margin: 0;
  }

  .lcontainer {
    position: relative;
    width: 200px;
    height: 200px;
  }
  .lcontainer svg {
    filter: drop-shadow(2px 2px 3px #0002);
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all;
    animation-name: fluffy;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  .lcontainer svg:nth-of-type(1) {
    width: 100%;
    height: 100%;
    transform: translate(-60%, -50%);
  }
  .lcontainer svg:nth-of-type(2) {
    width: 75%;
    height: 75%;
    animation-delay: -0.2s;
    transform: translate(-30%, -30%);
  }
  .lcontainer svg:nth-of-type(3) {
    width: 60%;
    height: 60%;
    animation-delay: -0.4s;
    transform: translate(-100%, -20%);
  }
</style>