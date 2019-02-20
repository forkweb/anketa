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

          <label>Полное ФИО <div><input type="text" value="Атаманов Алексей Анатольевич" placeholder="Введите ФИО"></div> </label> 
          <!-- <label>Год рождения <div><input type="number" min="1900" max="2099" step="1" value="1992" placeholder="Укажите год рождения"></div> </label>  -->
          <label>Год рождения <div class="" >
            <!-- <input type="text" placeholder="Укажите год рождения" value="1992"> -->
              <el-date-picker
                v-model="value5"
                type="year"
                placeholder="Укажите год рождения">
              </el-date-picker>
            </div> </label> 



          <label>Место жительства <div><input type="text" value="г. Димитровград, Россия" placeholder="Введите место жительства"></div> </label> 
          <label>Скайп <div><input type="text" value="nerondevil" placeholder="Введите id skype"></div> </label> 
          <label>Почта <div><input type="email" value="leshadgrad@mail.ru (info@forkweb.ru)" placeholder="Введите Email"></div> </label> 
        </div>

        <div class="item_personal_skill">
          <h3>Расскажите о себе чекбоксами</h3>
          <p>Отметьте чекбоксами пункты, которые соответствуют вашим скиллам. Кстати, отсутствие опыта не означает, что у вас меньше шансов стать одним из наших товарищей. Это   означает, что вы будете получать те задачи, с которыми гарантировано будете справляться.</p>

          <div class="items_form_skils">

            <form class="form_skils">
              <input class="hide_checkbox" id="check1" name="check1" value="БЭМ/OOCSS" type="checkbox">
              <label for="check1"><div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>БЭМ/OOCSS</label>

              <input class="hide_checkbox" id="check2" name="check2" value="Pug (Jade)" type="checkbox">
              <label for="check2"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Pug (Jade)</label>

              <input class="hide_checkbox" id="check3" name="check3" value="Stylus/LESS/SASS" type="checkbox" checked="checked">
              <label for="check3"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Stylus/LESS/SASS</label>

              <input class="hide_checkbox" id="check4" name="check4" value="Работаю с SVG" type="checkbox">
              <label for="check4"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Работаю с SVG</label>

              <input class="hide_checkbox" id="check5" name="check5" value="Верстаю семантично" type="checkbox" checked="checked">
              <label for="check5"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Верстаю семантично</label>      
              
              <input class="hide_checkbox" id="check6" name="check6" value="Accessibility (A11Y)" type="checkbox">
              <label for="check6"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Accessibility (A11Y)</label>              

              <input class="hide_checkbox" id="check7" name="check7" value="ES2015/ES2016" type="checkbox">
              <label for="check7"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>ES2015/ES2016</label>
            </form>

            <form class="form_skils">
              <input class="hide_checkbox" id="check8" name="check8" value="Gulp/GRUNT" type="checkbox" checked="checked">
              <label for="check8"><div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Gulp/GRUNT</label>

              <input class="hide_checkbox" id="check9" name="check9" value="Webpack" type="checkbox" checked="checked">
              <label for="check9"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Webpack</label>

              <input class="hide_checkbox" id="check10" name="check10" value="Дружу с WebGL" type="checkbox">
              <label for="check10"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Дружу с WebGL</label>

              <input class="hide_checkbox" id="check11" name="check11" value="jQuery" type="checkbox" checked="checked">
              <label for="check11"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>jQuery</label>

              <input class="hide_checkbox" id="check12" name="check12" value="Знаю/изучаю VUE" type="checkbox" checked="checked">
              <label for="check12"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Знаю/изучаю VUE</label>      
              
              <input class="hide_checkbox" id="check13" name="check13" value="Знаю/изучаю React" type="checkbox">
              <label for="check13"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Знаю/изучаю React</label>              

              <input class="hide_checkbox" id="check14" name="check14" value="Знаю/изучаю Node.js" type="checkbox">
              <label for="check14"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Знаю/изучаю Node.js</label>
            </form>

            <form class="form_skils">
              <input class="hide_checkbox" id="check15" name="check15" value="Использую Git" type="checkbox" checked="checked">
              <label for="check15"><div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Использую Git</label>

              <input class="hide_checkbox" id="check16" name="check16" value="С глазомером всё ок" type="checkbox" checked="checked">
              <label for="check16"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>С глазомером всё <span class="easter_egg">ок</span></label>

              <input class="hide_checkbox" id="check17" name="check17" value="Читаю habr.com" type="checkbox" checked="checked">
              <label for="check17"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Читаю habr.com</label>

              <input class="hide_checkbox" id="check18" name="check18" value="Я ленивый(-ая)" type="checkbox">
              <label for="check18"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>Я ленивый(-ая)</label>

              <input class="hide_checkbox" id="check19" name="check19" value="У меня хороший английский" type="checkbox">
              <label for="check19" class="line_h_fix"> <div class="checkbox_custom"> <img src="../assets/img/checkbox_ok.png" alt=""> </div>У меня хороший английский</label>      
            </form>            
          </div>
        </div>

        <div class="item_javascript">

          <h3>Уровень владения JavaScript</h3>

          <div class="range-slider">
	          <template>
            <div class="slide_custom">
              <VueSlideBar
                v-model="slider.value"
                :data="slider.data"
                :range="slider.range"
                :lineHeight="0"
                :labelStyles="{ color: '#4a4a4a', backgroundColor: '#4a4a4a' }"
                :processStyle="{ backgroundColor: 'red' }"
                @callbackRange="callbackRange">
                <template slot="tooltip" slot-scope="tooltip">
                  <img src="../assets/img/slider_triangle.png">
                  <!-- <div class="line_test">adasd</div> -->
                </template>
              </VueSlideBar>
            </div>
            </template>
          </div>

        </div>


        <div class="about_me">
          <h3>Расскажите о себе словами</h3>
          <p>Напишите пару предложений, чем вас привлекла наша вакансия и чего вы ожидаете от работы. Кстати, будет здорово, если при нехватке места для текста строки будут добавляться автоматически.</p>

          <textarea placeholder="Расскажите о себе">В вакансии привлекли условия. Занимаюсь версткой, изучаю JS и фреймворки </textarea>
        </div>

        <div class="future_plans">
          <h3>Какие у вас планы на будущее?</h3>
          <p>Этот ответ ни на что не повлияет. Не беда, если в будущем ваши планы поменяются.</p>

          <form class="form_future_plans">

              <div class="item_plans">
                <input class="hide_radio" id="check1" name="future_plans" value="Верстать" type="radio">
                <label for="check1"> <div class="radio_custom"> <img src="../assets/img/radio_ok.png" alt=""> </div>Верстать</label>
              </div>

              <div class="item_plans">
                <input class="hide_radio" id="check2" name="future_plans" value="Прокачиваться в JS" type="radio" checked="checked">
                <label for="check2"> <div class="radio_custom"> <img src="../assets/img/radio_ok.png" alt=""> </div>Прокачиваться в JS</label>
              </div>

              <div class="item_plans">
                <input class="hide_radio" id="check3" name="future_plans" value="Менеджерство" type="radio">
                <label for="check3"> <div class="radio_custom"> <img src="../assets/img/radio_ok.png" alt=""> </div>Менеджерство</label>
              </div>

              <div class="item_plans">
                <input class="hide_radio" id="check2" name="future_plans" value="Другое" type="radio">
                <label for="check2"> <div class="radio_custom"> <img src="../assets/img/radio_ok.png" alt=""> </div>Другое</label>
              </div>
  
          </form>
        </div>

        <div class="date_completion">
          <!-- <label>Дата заполнения <div><input type="text" value="18.02.2019"></div> </label>  -->
          <label for="date_comp">Дата заполнения:</label><input id="date_comp" type="date" value="2019-02-18">

        </div>


      </div>

    </div>
  </div>  
</template>

<script>
import VueSlideBar from 'vue-slide-bar'





export default {
  name: 'anketa',
  props: {
    msg: String
  },
  data () {
    return {
      value5: '1992',
      rangeValue: {},
      slider: {
        value: 2,
        data: [
          1,
          2,
          3,
          4
        ],
        range: [
          {
            label: 'Не владею'
          },
          {
            label: 'Использую готовые решения'
          },
          {
            label: 'Использую готовые решения и умею их переделывать'
          },
          {
            label: 'Пишу сложный JS с нуля'
          }
        ]
      },
    }
  },
  methods: {
    callbackRange (val) {
      this.rangeValue = val
      // this.sliderWithLabel.rangeValue = val
    }
  },
  components: {
    VueSlideBar
  },
  mounted(){
    var textarea = document.querySelector('textarea');
    var initialHeight = 60;

    var resize = function resize() {
      textarea.style.height = initialHeight + 'px';
      var height = textarea.scrollHeight;
      textarea.style.height = height + initialHeight + 'px';
    };
  resize();
  textarea.addEventListener('input', resize);


$('#example8').calendar({
  type: 'year'
});





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
  font-size: 24px;
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
  height: auto;
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
/* 
.item_personal_skill h3 {
  font-size: 24px;
} */

.items_form_skils {
    display: flex;
    position: relative;
}

.form_skils {
    /* width: 222px; */
    display: flex;
    flex-flow: row wrap;
    margin-top: 12px;
    position: relative;
}

.items_form_skils label {
    width: 100%;
    cursor: pointer;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.70;
    display: flex;
    margin-left: 3px;
}

.items_form_skils input {
  position: absolute;
  opacity: 0;
}



/*CHECKBOX custom*/

.checkbox_custom {
	/* border: 1px solid rgb(109, 109, 109) !important; */
	transition-duration: 0.3s;
  width: 19px;
  height: 18px;
	display: inline-block;
	text-align: center;
	line-height: 20px;
	margin-right: 6px;
	border-radius: 3px;
  cursor: pointer;
  margin-top: 9px;
}

.checkbox_custom::before {
  content: '';
  position: absolute;
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  width: 19px;
  height: 18px;
  background-image: url("../assets/img/checkbox.png");
  margin-left: -3px;
}

.hide_checkbox {
	display: none;
}

label img {
	font-size: 16px;
	opacity: 0;
}

input:checked+label img {
	opacity: 1;
}

.form_skils label img {
    margin-top: -10px;
    margin-left: 0px;
    transition-duration: 0.3s;
}

/*CHECKBOX custom*/

.items_form_skils label .easter_egg {
    padding-top: 1px;
    padding-left: 5px;
}

.content_file p {
    color: rgb(61, 61, 61);
    font-size: 15px;
    margin-top: 10px;
    line-height: 1.3;
}

.slide_custom {
    position: relative;
    margin-top: 13px;
    cursor: pointer;
}

.slide_custom::before {
  content: "";
  position: absolute;
  background-image: url("../assets/img/slider_line.png");
  width: 101.1%;
  height: 3px;
  background-repeat: round;
  left: -3px;
  bottom: 57px;
  z-index: 3;
}


  .about_me textarea {
    width: 100%;
    display: block;
    font-size: 30px;
    font-family: "couriernew";
    color: #231f20;
    overflow: hidden;
    line-height: 2.0;
    background-image: url("../assets/img/about_me_line4.png");
    background-size: auto;
    background-repeat: repeat-y;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    resize: none;
    background-position: 0 0px;
    padding-left: 6px;
}

textarea:focus {
  outline: none;
}


label.line_h_fix {
    line-height: 1.2 !important;
}

/* radio */
/*CHECKBOX custom*/
.hide_radio {
    width: 100%;
    height: 26px;
    position: absolute;
    z-index: 28;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    margin-left: 0px;
    margin-top: 0px;
}

.radio_custom {
	transition-duration: 0.3s;
  width: 19px;
  height: 18px;
	display: inline-block;
	text-align: center;
	line-height: 20px;
	margin-right: 6px;
	border-radius: 3px;
  cursor: pointer;
  margin-top: 9px;
  padding-right: 7px;
}

.radio_custom::before {
    content: '';
    position: absolute;
    display: inline-block;
    vertical-align: text-top;
    width: 41px;
    height: 45px;
    background-image: url("../assets/img/radio.png");
    margin-top: -18px;
    margin-left: -8px;
}

/* .hide_radio {
	display: none;
}  */

.form_future_plans input:checked+label img {
	opacity: 1;
}

.form_future_plans label img {
    margin-top: -5px;
    margin-left: 1px;
    transition-duration: 0.3s;
}

.form_future_plans label {
  display: flex;
  color: black;
  font-size: 20px;
  font-weight: 600;
  padding-right: 25px;
}

form.form_future_plans {
    display: flex;
}

/* radio */

.future_plans {
    padding-top: 9px;
}

::-webkit-datetime-edit { padding: 0.2em; }
::-webkit-datetime-edit-fields-wrapper { background: rgba(255, 255, 255, 0); }
::-webkit-datetime-edit-text { color: balck; padding: .2em; }
::-webkit-datetime-edit-month-field { color: #333; }
::-webkit-datetime-edit-day-field { color: #333; }
::-webkit-datetime-edit-year-field { color: #333; }
::-webkit-inner-spin-button { display: none; }
::-webkit-calendar-picker-indicator { background: rgba(255, 255, 255, 0); padding-left: 5px }

.date_completion label {
    font-size: 22px;
    font-weight: 600;
    padding-top: 20px;
}

#date_comp {
    background-color: rgba(249, 249, 249, 0);
    border: none;
    font-family: "couriernew";
    font-size: 30px;
    outline: none;
    position: relative;
    margin-left: 20px;
}

#date_comp::after {
  content: "";
  position: absolute;
  background-image: url("../assets/img/border.png");
  width: 230px;
  height: 3px;
  background-repeat: round;
  left: 0;
  bottom: 0px;
}

.date_completion {
    margin-top: 75px;
    display: flex;
}

.item_plans {
    position: relative;
}

@media screen and (max-width:1020px) {
	.personnel_file {
		width: 100%
	}
}

</style>
