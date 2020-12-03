
window.onload=function(){
    const ham = document.getElementById ('hamburger');
    const nav1 = document.getElementById('navigation');    
        ham.addEventListener('click', () =>{
            nav1.classList.toggle('show');
        });


        var modal = document.getElementById("myModal");
        var modal2 = document.getElementById("myModal2");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var highlight = document.getElementById("snow");
var soundimg = document.getElementById("soundeffect");
var stopmotionbts = document.getElementById("stopmotionbts");
var modalImg = document.getElementById("modalimage");
var captionText = document.getElementById("caption");
var modalImg2 = document.getElementById("modalimage2");
var captionText2 = document.getElementById("caption2");
if(highlight){
  highlight.onclick = function(){
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = "Snow Effect in APIC 2018 Reel Project";
      }
      soundimg.onclick = function(){
          modal.style.display = "flex";
          modalImg.src = this.src;
          captionText.innerHTML = "Crowd Cheer Sound Effect in APIC 2018 Reel Project";

        }
        modal.onclick = function() { 
            modal.style.display = "none";
          }
}
   if(stopmotionbts){
    stopmotionbts.onclick = function(){
        modal2.style.display = "flex";
        modalImg2.src = this.src;
        captionText2.innerHTML = "Stop Motion Behind the Scene";
      }
      modal2.onclick = function() { 
        modal2.style.display = "none";
      }
   }
   

 




}


function changeIcon(t){
    t.classList.toggle('fa-caret-up');


}


//   Learned from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
//   Learned from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
//  Learned from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_like_dislike