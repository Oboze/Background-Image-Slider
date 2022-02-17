// array of picture names
const pictures=[5,6,7,8,9];
const button=document.querySelectorAll('button');
const pictureArea=document.querySelector('.picture-area');

// select the first picture in the array
let pictureSelector=0;

/*pictureArea.style.backgroundImage=`url("img/5.jpg")`;*/

button.forEach(function(btn){
    btn.addEventListener('click',function(e){
       if (btn.classList.contains('button-left')){
           pictureSelector--;
           if(pictureSelector<0){
               pictureSelector=pictures.length-1;
           }
           pictureArea.style.backgroundImage=`url("img/${pictures[pictureSelector]}.jpg")`;
           console.log(pictures[pictureSelector]);
       }

       if (btn.classList.contains('button-right')){
           pictureSelector++;
           if(pictureSelector>pictures.length-1){
               pictureSelector=0;
           }
           pictureArea.style.backgroundImage=`url("img/${pictures[pictureSelector]}.jpg")`;
       }
    },false);
});
