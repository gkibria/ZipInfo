<template>
  <div class="ion-page">
    <ion-header>
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
      info: null
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
    }
  }
}
</script>
