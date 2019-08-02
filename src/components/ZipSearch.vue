<template>
    <ion-grid>
        <form @submit.prevent="onSubmit">
            <ion-col>
                <ion-item>
                    <ion-label>Country: </ion-label>
                    <ion-select @ionChange="form.country = $event.target.value" :value="form.country">
                        <ion-select-option 
                            v-for="item in country" 
                            :key="item.code" 
                            :value="item.code">{{item.name}}</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label>Enter Zipcode: </ion-label>
                    <ion-input name="zip" :value="form.zip" @input="form.zip = $event.target.value" placeholder="eg. 84347"></ion-input>
                </ion-item>
            </ion-col>
            <ion-col>
                <ion-button type="submit" color="success" expand="block">Find</ion-button>
            </ion-col>
        </form>
    </ion-grid>
</template>

<script>
import country from '../country'
export default {
    name: "ZipSearch",
    data(){
        return {
            zip: null,
            form: {
                country: 'DE',
                zip: null
            },
            country: country.countries
        }
    },
    methods: {
        onSubmit(){
            // console.log(this.zip)
            // const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.form.zip)
            if(!this.form.country || !this.form.zip){
                this.showAlert()
                this.form.zip = null
            }else{
                this.$emit('get-zip', this.form)
                this.form.zip = null
            }
        },
        showAlert(){
            return this.$ionic.alertController.create({
                header: "Invalid Form",
                message: "Please enter a valid zipcode and country",
                buttons: ["Ok"]
            }).then(a => a.present())
        },
        select(){
            console.log(this.form)
        }
    }
}
</script>


