<template>
  <div class="ion-page">
    <ion-header>
      <!-- <ion-toolbar color="dark" v-if="installToolbar">
        <ion-title>Install this App?</ion-title>
        <ion-buttons slot="primary">
          <ion-button color="light" fill="solid" @click="showA2hp">YES</ion-button>
        </ion-buttons>
      </ion-toolbar> -->
      <ion-toolbar color="primary">
        <ion-title>Zip Information</ion-title>
        <ion-buttons slot="primary">
          <ion-button @click='showModal'>
            <ion-icon slot="icon-only" name="help-circle"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="">
      <ZipSearch @get-zip='getZipInfo'/>
      <ZipInfo :info='info' @clear-info='clearInfo' />
    </ion-content>
  </div>
</template>

<script>
import ZipSearch from '../components/ZipSearch'
import ZipInfo from '../components/ZipInfo'
import About from '../components/AboutModal'
export default {
  name: 'home',
  components: {
    ZipSearch, ZipInfo
  },
  data(){
    return {
      info: null,
      installToolbar: false,
      deferredPrompt: null
    }
  },
  methods: {
    async getZipInfo(form){
      // console.log(form)
      this.showLoading()
      const res = await fetch(`https://api.zippopotam.us/${form.country}/${form.zip}`)
      if(res.status == 404){
        this.showAlert()
      }
      this.info = await res.json()
      this.hideLoading()
    },
    clearInfo(){
      this.info = null
    },
    showAlert(){
        return this.$ionic.alertController.create({
            header: "Not Valid",
            message: "Please enter a valid zipcode",
            buttons: ["Ok"]
        }).then(a => a.present())
    },
    showLoading(){
      return this.$ionic.loadingController.create({
            message: "Please Wait...",
            duration: 2000
        }).then(a => a.present())
    },
    hideLoading(){
      this.$ionic.loadingController.dismiss()
    },
    showModal(){
      return this.$ionic.modalController.create({
        component: About
      }).then(m => m.present())
    },
    showA2hp(){
      // Show the prompt
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      })
    },
    a2hp(){
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        this.installToolbar = true;
      })
    }
  },
  mounted(){
    this.a2hp()
  }
}
</script>
