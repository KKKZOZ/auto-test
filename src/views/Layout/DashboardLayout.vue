<template>
<div class="wrapper">
    <notifications></notifications>
    <side-bar>
        <template slot="links">
            <sidebar-item :link="{
            name: '风电行业大数据报告',
            path: '/dataReport',
            icon: 'ni ni-tv-2 text-primary',
          }">
            </sidebar-item>

            <sidebar-item :link="{
              name: '实时功率预测',
              path: '/realTimePre',
              icon: 'ni ni-planet text-blue'
              }">
            </sidebar-item>

            <sidebar-item :link="{
                    name: '地图定点预测',
                    path: '/locationPre',
                    icon: 'ni ni-pin-3 text-orange'
                  }">
            </sidebar-item>
            <sidebar-item :link="{
                    name: '历史数据分析',
                    path: '/historyData',
                    icon: 'ni ni-calendar-grid-58 text-purple'
                  }">
            </sidebar-item>
            <sidebar-item :link="{
                name: '给小朋友的风电读物',
                path: '/guideForKid',
                icon: 'ni ni-key-25 text-pink'
              }">
              </sidebar-item>
            <!-- <sidebar-item :link="{
              name: 'Login',
              path: '/login',
              icon: 'ni ni-key-25 text-info'
            }">
            </sidebar-item>
            <sidebar-item :link="{
              name: 'Register',
              path: '/register',
              icon: 'ni ni-circle-08 text-pink'
            }">
            </sidebar-item> -->
        </template>

        <template slot="links-after">
            <hr class="my-3">
            <h6 class="navbar-heading p-0 text-muted">友情链接</h6>

            <b-nav class="navbar-nav mb-md-3">
                <b-nav-item href="https://www.in-en.com/">
                    <i class="ni ni-spaceship"></i>
                    <b-nav-text class="p-0">国际能源网</b-nav-text>
                </b-nav-item>
                <b-nav-item href="https://wind.in-en.com/">
                    <i class="ni ni-palette"></i>
                    <b-nav-text class="p-0">国际风力发电网</b-nav-text>
                </b-nav-item>
                <b-nav-item href="https://power.in-en.com/">
                    <i class="ni ni-ui-04"></i>
                    <b-nav-text class="p-0">国际电力网</b-nav-text>
                </b-nav-item>
            </b-nav>
        </template>
    </side-bar>
    <div class="main-content">
        <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

        <div @click="$sidebar.displaySidebar(false)">
            <!-- <fade-transition :duration="200" origin="center top" mode="out-in"></fade-transition> -->
            <!-- <slideXLeftTransition origin="center top" mode="out-in"> -->
                <!-- your content here -->
                <router-view></router-view>
            <!-- </slideXLeftTransition> -->
        </div>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
</div>
</template>

<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
    if (hasElement(className)) {
        new PerfectScrollbar(`.${className}`);
    } else {
        // try to init it later in case this component is loaded async
        setTimeout(() => {
            initScrollbar(className);
        }, 100);
    }
}

import DashboardNavbar from './DashboardNavbar.vue';
import ContentFooter from './ContentFooter.vue';
import DashboardContent from './Content.vue';
import {
    SlideXLeftTransition,
} from 'vue2-transitions';

export default {
    components: {
        DashboardNavbar,
        ContentFooter,
        DashboardContent,
        SlideXLeftTransition,
    },
    methods: {
        initScrollbar() {
            let isWindows = navigator.platform.startsWith('Win');
            if (isWindows) {
                initScrollbar('sidenav');
            }
        }
    },
    mounted() {
        this.initScrollbar()
    }
};
</script>

<style lang="scss">
</style>
