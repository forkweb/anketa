<template>
  <div class="container">
    <div class="personnel_file">

      <div class="content_file">

        <div class="item_personal_data">
          
          <!-- <div class="input_data">
            <label>Полное ФИО</label><input id="" value="Атаманов Алексей Анатольевич">
          </div>
          <div class="input_data">
            <label>Год рождения</label><input id="" value="Атаманов Алексей Анатольевич">
          </div>
          <div class="input_data">
            <label>Почта</label><input id="" value="Атаманов Алексей Анатольевич">
          </div> -->

          <label>Полное ФИО <div><input type="text" value="Атаманов Алексей Анатольевич"></div> </label> 
          <label>Год рождения <div><input type="text" value="1992"></div> </label> 
          <label>Место жительства <div><input type="text" value="г. Димитровград, Россия"></div> </label> 
          <label>Скайп <div><input type="text" value="nerondevil"></div> </label> 
          <label>Почта <div><input type="text" value="leshadgrad@mail.ru (info@forkweb.ru)"></div> </label> 
        </div>

        <div class="item_personal_skill">
          <form >
            <h3>Расскажите о себе чекбоксами</h3>
            <p>Отметьте чекбоксами пункты, которые соответствуют вашим скиллам. Кстати, отсутствие опыта не означает, что у вас меньше шансов стать одним из наших товарищей. Это   означает, что вы будете получать те задачи, с которыми гарантировано будете справляться.</p>
            <p><input type="checkbox" id="check1"><label for="check1">Lorem</label>
            <input type="checkbox" id="check2"><label for="check2">Ipsum</label>
            <input type="checkbox" id="check3"><label for="check3">Dolor</label>
            <input type="checkbox" id="check4"><label for="check4">Sit amet</label></p>
          </form> 
        </div>

      </div>

    </div>
  </div>  
</template>

<script>
export default {
  name: 'anketa',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&subset=cyrillic');

body {
  font-family: 'PT Sans', sans-serif;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


.personnel_file {
  background-image: url("../assets/img/bg.jpg");
  width: 1000px;
  height: 1900px;
  margin: 0 auto;
  position: relative;
} 

.personnel_file::before {
    content: "";
    position: absolute;
    background-image: url("../assets/img/del.png");
    width: 221px;
    height: 118px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 160px;
}

.personnel_file::after {
    content: "";
    position: absolute;
    background-image: url("../assets/img/topsecret.png");
    width: 252px;
    height: 106px;
    margin: 0 auto;
    top: 47px;
    right: 54px;
}

.content_file {
    padding: 330px 110px 75px 110px;
    text-align: left;
}

/* item_personal_data */

.item_personal_data {
    display: flex;
    flex-flow: column;
    justify-content: start;
    position: relative;
}

.item_personal_data label {
    display: flex;
    white-space: nowrap;
    font-weight: 600;
    font-size: 22px;
    line-height: 2.8;
}

.item_personal_data input{
    font-family: "couriernew";
    font-size: 30px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    padding-left: 10px;
    outline: none;
}

.item_personal_data div {
    margin-left: 20px;
    width: 100%;
    position: relative;
    margin-top: -12px;
}

.item_personal_data div::after {
  content: "";
  position: absolute;
  background-image: url("../assets/img/border.png");
  width: 100%;
  height: 3px;
  background-repeat: round;
  left: 0;
  bottom: 18px;
}

/* item_personal_data */


/* item_personal_skill */
.item_personal_skill {
    padding-top: 8px;
}

.item_personal_skill h3 {
  font-size: 24px;
}
/* item_personal_skill */


</style>
