
window.onload=function(){
    const ham = document.getElementById ('hamburger');
    const nav1 = document.getElementById('navigation');    
        ham.addEventListener('click', () =>{
            nav1.classList.toggle('show');
        });

}


function changeIcon(t){
    t.classList.toggle('fa-caret-up');


}

//   Learned from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
//  Learned from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_like_dislike