<template>
    <ion-grid>
        <form @submit.prevent="onSubmit">
            <ion-col>
                <ion-item>
                    <ion-label>Enter Zipcode: </ion-label>
                    <ion-input name="zip" :value="zip" @input="zip = $event.target.value"></ion-input>
                </ion-item>
            </ion-col>
            <ion-col>
                <ion-button type="submit" color="primary" expand="block">Find</ion-button>
            </ion-col>
        </form>
    </ion-grid>
</template>

<script>
export default {
    name: "ZipSearch",
    data(){
        return {
            zip: null
        }
    },
    methods: {
        onSubmit(){
            // console.log(this.zip)
            const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.zip)
            if(!isValidZip){
                this.showAlert()
                this.zip = null
            }else{
                this.$emit('get-zip', this.zip)
                this.zip = null
            }
        },
        showAlert(){
            return this.$ionic.alertController.create({
                header: "Enter Zipcode",
                message: "Please enter a valid US zipcode",
                buttons: ["Ok"]
            }).then(a => a.present())
        }
    }
}
</script>


