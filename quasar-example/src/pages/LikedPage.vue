<template>

<div class="q-pa-md bg-red-2">
    <q-infinite-scroll @load="onLoad" :offset="250">
        <div v-for="(item, index) in items" :key="index" class="caption full-width column wrap justify-start items-start content-center">
 <q-card class="my-card q-mt-sm" flat bordered index="">
 <q-item>
                
 <q-item-section>
   <div class=" items-center full-width row wrap justify-between content-between">
<q-item-label>Recept namn härr</q-item-label>
    <q-btn-toggle v-model="model" push glossy toggle-color="primary" :options="[
          {label: 'Like', value: 'one'}, ]" />
        </div>
</q-item-section>
 </q-item>
                
<q-separator />
                
<q-card-section horizontal>
<q-card-section class="col-5 items-center content-center">
Recept bild här
</q-card-section>
                
<q-separator vertical />
                
<q-card-section class="col-4">
   Beskrivning eller recept länk ska vara här, möjligtvis länk och kort beskrivning
</q-card-section>
</q-card-section>
</q-card>
        </div>
        <template v-slot:loading>
            <div class="row justify-center q-my-md">
                <q-spinner-dots color="deep-orange-10" size="50px" />
            </div>
        </template>
    </q-infinite-scroll>
</div>
</template>

<script>
export default {
data () {
    return {
        items: [{}, {}, {}, {}, {}, {}, {}]
        
    }
},

methods: {
    onLoad (index, done) {
        setTimeout(() => {
            if (this.items) {
                this.items.push({}, {}, {}, {}, {}, {}, {})
                done()
            }
        }, 2000)
    }
}
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px

</style>





<!-- <q-item-section avatar>
<q-avatar>
    <img src="https://cdn.quasar.dev/img/avatar.png">
</q-avatar>
</q-item-section> -->

<!-- <q-item-label caption>
    Subhead
</q-item-label> -->