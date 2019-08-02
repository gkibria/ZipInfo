<template>
    <div>
        <ion-header>
            <ion-toolbar>
                <ion-title>Data Source</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="dismissModal">Close</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <img src="https://zippopotam.us/static/lilz.png" alt="">
                <ion-card-header>
                    <ion-card-subtitle>API Provider</ion-card-subtitle>
                    <ion-card-title>Zippopotam.us</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <p>This Zippopotam.us API is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/. Any rights in individual contents of the database are licensed under the Database Contents License: http://opendatacommons.org/licenses/dbcl/1.0/</p>
                    <hr>
                    <p>Developed By: Kibria</p>
                    <p>Source Code: github.com/gkibria/ZipInfo</p>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </div>
</template>

<script>
export default {
    name: 'AboutModal',
    methods: {
        dismissModal(){
            this.$ionic.modalController.dismiss()
        }
    }
}
</script>
