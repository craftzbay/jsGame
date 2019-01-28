window.addEventListener('load',toglo);

//togloomiin uy
const togloomUy = {
  hongon : 8,
  dund: 5,
  hetsuu: 3
}
//uy solih
const odoogiinUy = togloomUy.hongon;
//globals
let tsag = odoogiinUy;
let onoo = 0;
let toglojBn;

//dom elements
const bichigdsenUg = document.querySelector('#bichigdsen-ug');
const soligddogUg = document.querySelector('#soligddog-ug');
const onooDisplay = document.querySelector('#onoo');
const tsagDisplay = document.querySelector('#tsag');
const urDun = document.querySelector('#ur-dun');
const seconds = document.querySelector('#seconds');

const ugnuud = [
  'муур', 'бахь', 'монгол', 'дарга', 'зулзага', 'тэжээвэр', 'амьтан', 'амьдрал', 'нохой', 'ямаа', 'үйлдвэр', 'кино', 'авьяас'
];



//togloom
function toglo(){
  seconds.innerHTML = odoogiinUy;
  //ugnuudees haruulah
  ugHaruulah(ugnuud);
  //ug oruulwal shalgah
  bichigdsenUg.addEventListener('input', ugTohiruuljEhleh);
  //tsag tohiruulah
  setInterval(tsagTooloh, 1000);
  //
  setInterval(shalgah, 50);
}

function ugTohiruuljEhleh(){
  if(ugZow()){
    toglojBn = true;
    tsag = odoogiinUy + 1;
    ugHaruulah(ugnuud);
    bichigdsenUg.value = '';
    onoo++;
  }
  if(onoo === -1){
    onooDisplay.innerHTML = 0;
  }else  onooDisplay.innerHTML = onoo;
}
 // bichsen ug zowuu
function ugZow(){
  if(bichigdsenUg.value === soligddogUg.innerHTML){
    urDun.innerHTML = 'Зөв!';
    return true;
  }else{
    urDun.innerHTML = '';
    return false;
  }
}

// duriin ug songoj haruulah
function ugHaruulah(ugnuud){
  //ugnuuded sanamsargui hayg ogoh
  const randToo = Math.floor(Math.random() * ugnuud.length);

  //sanamsargui ug butsaah
  soligddogUg.innerHTML = ugnuud[randToo];
}

function tsagTooloh(){
  if(tsag > 0){
    tsag--;
  }else if(tsag === 0){
    toglojBn = false
  }
  //tsag haruulah
  tsagDisplay.innerHTML = tsag;
}

function shalgah(){
  if(!toglojBn && tsag === 0){
    urDun.innerHTML = 'Тоглоом дууслаа!';
    onoo = -1;
  }
}

