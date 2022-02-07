<template>
<div class="flex flex-col items-left pl-32 pt-16 pb-16 space-y-7 bg-blue-50">

  <div class="flex flex-col w-2/5">
      <label for="company">Nome del condominio</label>
      <input id="company" type="text" placeholder="inserire condominio"  class="outline-none border-2 px-2 rounded-lg py-1 border-orange-400">
  </div>

  <div class="flex flex-col w-2/5">
      <label for="foto">Foto </label>
      <input id="foto" type="text" placeholder="inserire foto" class="outline-none border-2 px-2 rounded-lg py-1 border-orange-400">
    </div>

  <div class="flex flex-col w-2/5">
      <label for="company">Comune</label>
      <input id="company" type="text" placeholder="inserire Comune" class="outline-none border-2 px-2 rounded-lg py-1 border-orange-400">
  </div>

  <div class="flex flex-col w-2/5">
      <label for="exp">Provincia</label>
      <input id="exp" type="text" placeholder="inserire provincia"  class="outline-none border-2 px-2 rounded-lg py-1 border-orange-400">
  </div>

    <div class="flex flex-col w-2/5">
      <label for="exp">Indirizzo</label>
      <input id="exp" type="text" placeholder="inserire indirizzo"  class="outline-none border-2 px-2 rounded-lg py-1 border-orange-400">
  </div>

  <div class="flex flex-col w-2/5">
      <label for="exp">CAP</label>
      <input id="exp" type="text" placeholder="inserire CAP"  class="outline-none border-2 px-2 rounded-lg py-1 border-orange-400">
  </div>

    <div class="flex flex-col w-2/5">
      <label for="ral">Numero appartamenti</label>
      <input
      id="ral"
      type="number"
      placeholder="inserire numero degli appartamenti"
      class="outline-none border-2 px-2 rounded-lg py-1 border-orange-400">
  </div>

  <div class="flex flex-col w-2/5">
      <label for="exp">Consumo complessivo dell'ultimo anno</label>
      <input id="exp" type="text" placeholder="inserire consumo annuale"  class="outline-none border-2 px-2 rounded-lg py-1 border-orange-400">
  </div>

  <div class=" flex justify-left w-2/5">
    <button class="bg-orange-700 px-4 py-2 rounded-lg text-white hover:bg-red-600" @click="create()">Crea scheda</button>
  </div>

</div>
</template>

<script>
export default {
    name:'create',

    data (){
        return{
            house: {},
            isEdit: false
        }
    },

    async mounted() {
        if(this.$route.name == 'edit'){
          this.isEdit = true
        }

    },
};
</script>