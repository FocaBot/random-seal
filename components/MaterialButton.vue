<!--
  From https://codepen.io/Craigtut/pen/dIfzv, but without jQuery
-->
<template>
  <a :class="{ ripple: ripple }" :href="href" v-on:click="rippleEffect" :style="{
    backgroundColor: bgColor,
    color: fgColor,
    fontSize: size + 'px',
    padding: (size/2) + 'px ' + size + 'px'
  }">
    <slot></slot>
  </a>
</template>
<script>
  export default {
    name: 'MaterialButton',
    props: {
      ripple: Boolean,
      href: String,
      bgColor: {
        type: String,
        default: 'transparent',
      },
      fgColor: {
        type: String,
        default: 'white',
      },
      rippleColor: {
        type: String,
        default: 'white',
      },
      size: {
        type: Number,
        default: 14,
      },
    },
    methods: {
      rippleEffect(e) {
        if (!this.ripple) return;

        const rippleDiv = document.createElement('div');
        rippleDiv.className = 'ripple-effect'
        rippleDiv.style.width = `${e.target.clientWidth/2}px`;
        rippleDiv.style.height = `${e.target.clientWidth/2}px`;
        rippleDiv.style.position = 'absolute';
        rippleDiv.style.borderRadius = '50%';
        rippleDiv.style.animation = 'ripple-animation 2s';
        rippleDiv.style.left = `${e.layerX - e.target.clientWidth/4}px`;
        rippleDiv.style.top = `${e.layerY - e.target.clientWidth/4}px`;
        rippleDiv.style.background = this.rippleColor;

        e.target.appendChild(rippleDiv);
        setTimeout(()=> rippleDiv.remove(), 2000);
      }
    }
  };
</script>
<style lang="stylus" scoped>
  a
    position: relative
    border: none
    outline:none
    cursor: pointer
    display: inline-block
    text-decoration: none
    padding: 14px 40px
    border-radius: 2px
    font-size: 16px
    &::-moz-focus-inner
      border: 0
    &.ripple
      overflow:hidden

  @keyframes ripple-animation
    from
      transform: scale(1)
      opacity: 0.4
    to
      transform: scale(100)
      opacity: 0
</style>