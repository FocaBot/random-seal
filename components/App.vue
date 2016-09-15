<template>
  <center class="wrapper">
    <h1 class="main-header">Random Seal</h1>
    <seal-container :seal="seal"></seal-container>
    <br><br>
    <material-button ripple :size="24" bg-color="#2196f3" v-on:click="newSeal">More seals!</material-button>
    <br>
    <material-button ripple href="https://github.com/TheBITLINK">
      Made by TheBITLINK
      <img class="av" src="https://www.gravatar.com/avatar/93f31b88845bcdca6bcfa908ebeef4ab.jpg?s=32"></img>
    </material-button>
  </center>
</template>
<script>
  import SealContainer from './SealContainer.vue';
  import MaterialButton from './MaterialButton.vue';

  export default {
    components: {
      SealContainer,
      MaterialButton,
    },
    data() {
      return {
        seal: undefined,
      };
    },
    methods: {
      newSeal() {
        // Replace with the available number of seals
        const availableSeals = 83;
        const sealId = Math.floor(Math.random() * availableSeals) + 1;
        const idStr = ('0000' + sealId).substring(sealId.toString().length);
        this.seal = `./seals/${idStr}.jpg`;
      },
    },
    ready() {
      this.newSeal();
    },
  };
</script>
<style lang="stylus">
  body
    background: #333333
    min-height: 100vh
    margin: 0
    color: #FFFFFF
    font-family: 'Dosis', sans-serif
    user-select: none
    margin-top: -44px
    padding-top: 40px

  h1, h2, h3, h4, h5
    font-weight: 200

  img.av
    border-radius: 50%
    margin-top: -1em
    margin-bottom: -0.75em
    margin-left: 4px
  
  .main-header
    font-size: 48px
</style>
