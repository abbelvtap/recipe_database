<template>
  <q-page>
    <h1 class="title">
      recept
    </h1>
     <div class="backgroundbox">
      <div class="receptlista">
        <div class="recept">
          <img src="https://www.max.se/contentassets/3daf60aa9d4842118151983c02eb1bba/product_hamburgare.png" alt="" class="receptimg">
          <div class="textinrecept">
            Max orginal mål
          </div>
        </div>
        <div class="recept">
          <img src="https://www.max.se/contentassets/7283b5a0bf324ba99d7fa7e0caf5ae7f/product_max-original.png" alt="" class="receptimg">
          <div class="textinrecept">
            Max orginal mål
          </div>
        </div>
        <div class="recept">
          <img src="https://www.max.se/contentassets/1fdf0ed6657c4de8a5a89751b81bb875/product_hamburgare.png" alt="" class="receptimg">
          <div class="textinrecept">
            Max orginal mål
          </div>
        </div>
        <div class="recept">
          <img src="https://www.max.se/contentassets/b8d9bc5331cd45119b808de0967351da/product_spicy-chicken-mal2.png?width=1160&sharpen=5&sigma=1,4&threshold=0" alt="" class="receptimg">
          <div class="textinrecept">
            Max Spicy chicken
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {

}
</script>

<style>
.receptlista{
  display: flex;
	flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;

}
.recept{
  width: 50%;
  border: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 2%;
  text-align: center;
}
.receptimg{
  width: 100%;
  border-bottom: 2px;
  border-bottom-style: solid;


}
.title{
  display: flex;
  justify-content: center;
  color: white;
}
.textinrecept{
  padding: 5%;
  font-size: 50px;


}
.recept:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
}

body{

background: rgb(251,76,31);
}

</style>
