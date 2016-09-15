import Vue from 'vue';
import App from './components/App.vue';

// Polyfills, yay!
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

new Vue({
  el: 'body',
  components: {
    app: App,
  },
});
