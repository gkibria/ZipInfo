<template>
    <ion-card v-if="info">
        <ion-card-header>
            <ion-card-subtitle>{{info['post code']}}</ion-card-subtitle>
            <ion-card-title>{{info['places'][0]['place name']}}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item>
                    <ion-label>
                        <strong>State: </strong>
                        {{ info['places'][0]['state'] }}
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <strong>Latitude: </strong>
                        {{ info['places'][0]['latitude'] }}
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <strong>Longitude: </strong>
                        {{ info['places'][0]['longitude'] }}
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <strong>Country: </strong>
                        {{ info['country'] }}
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-card-content>
        <ion-button expand="block" color="light" @click="$emit('clear-info')">Clear</ion-button>
    </ion-card>
</template>

<script>
export default {
    name: 'ZipInfo',
    props: ['info']
}
</script>

