<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="medium">
        <ion-title>Zip Information</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ZipSearch @get-zip='getZipInfo'/>
      <ZipInfo :info='info' @clear-info='clearInfo' />
    </ion-content>
  </div>
</template>

<script>
import ZipSearch from '../components/ZipSearch'
import ZipInfo from '../components/ZipInfo'
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
    async getZipInfo(zip){
      // console.log(zip)
      const res = await fetch(`https://api.zippopotam.us/us/${zip}`)
      if(res.status == 404){
        this.showAlert()
      }
      this.info = await res.json()
    },
    clearInfo(){
      this.info = null
    },
    showAlert(){
        return this.$ionic.alertController.create({
            header: "Not Valid",
            message: "Please enter a valid US zipcode",
            buttons: ["Ok"]
        }).then(a => a.present())
    }
  }
}
</script>
