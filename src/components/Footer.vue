<template>
  <footer id="footer" role="contentinfo">
    <div class="footer__inner">
      <div class="footer__vue">Made with Vue.js</div>
      <div class="footer__right">© 2023 Jin Park</div>
    </div>
  </footer>
</template>

<style lang="scss">
#footer {
  font-family: var(--mainKor-font);
}
.footer__inner {
  padding: 16px;
  .footer__vue {
    text-align: center;
    text-transform: uppercase;
    font-size: 10px;
  }
  .footer__right {
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 20px;
  }
}
</style>
