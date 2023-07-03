<template>
  <footer class="footer px-4">
    <b-row align-v="center" class="justify-content-lg-between">
      <b-col lg="6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} <a href="https://www.scu.edu.cn/" class="font-weight-bold ml-1" target="_blank">WindComing</a>
        </div>
      </b-col>
      <b-col lg="6">
        <h6 class="text-uppercase text-muted ls-1 mb-1 text-center">本网站内容版权由 噢对的对的噢不对不队 团队所有</h6>
        <!-- <b-nav align="center" class="nav-footer justify-content-lg-end">
          <b-nav-item href="https://www.creative-tim.com"  target="_blank">
            Creative Tim
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/presentation" target="_blank">
           About Us
          </b-nav-item>
          <b-nav-item href="http://blog.creative-tim.com" target="_blank">
            Blog
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/license" target="_blank">
            License
          </b-nav-item>
        </b-nav> -->
      </b-col>
    </b-row>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
