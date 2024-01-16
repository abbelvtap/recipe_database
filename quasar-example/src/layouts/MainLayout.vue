<template>

  <q-layout view="lHh Lpr lFf" >
    <!-- <Popup
            v-if="popupTriggers.buttonTrigger"
            :TogglePopup="() => TogglePopup('buttonTrigger')">
            <h2>Login page</h2>
          </Popup> -->
    <q-header elevated >
      <q-toolbar color="deep-orange">


        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

          <div class="headerbutton">
            <q-btn
              to="/login"
              label="login"
              text-color="white"
              size="10px"
              color="deep-orange"
            />
          </div>


          <div class="headerbutton">
            <q-btn
              to="/signup"
              label="signup"
              text-color="white"
              size="10px"
              color="deep-orange"
            />
          </div>

      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import Popup from 'components/login.vue';


const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const popupTriggers = ref({
      buttonTrigger: false
    })

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }

    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value

      },
      Popup,
      popupTriggers,
      TogglePopup

    }
  }
})
</script>

<style>
.headerbutton{
  padding-right: 9px;
}
</style>
