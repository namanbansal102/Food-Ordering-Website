document.getElementById('openFileDiv-1').addEventListener('click', function() {
    
    var filePath = 'reviews/review_1.html';
    
    
    window.location.href = filePath;
});

document.getElementById('openFileDiv-2').addEventListener('click', function() {
    
    var filePath = 'reviews/review_2.html';
    
    
    window.location.href = filePath;
});
document.getElementById('openFileDiv-3').addEventListener('click', function() {
   
    var filePath = 'reviews/review_3.html';
    
   
    window.location.href = filePath;
});
document.getElementById('openFileDiv-4').addEventListener('click', function() {
    
    var filePath = 'reviews/review_4.html';
    
    
    window.location.href = filePath;
});
document.getElementById('openFileDiv-5').addEventListener('click', function() {
 
    var filePath = 'reviews/review_5.html';
    
  
    window.location.href = filePath;
});
document.getElementById('openFileDiv-6').addEventListener('click', function() {
   
    var filePath = 'reviews/review_6.html';
    
   
    window.location.href = filePath;
});

let menu_state=0;

document.querySelector('.more').addEventListener('click',()=>{
    if(menu_state===0){

        document.querySelector('#side-menu').style.left='0';
        menu_state=1;
        console.log("open");
        return;
    }
})

document.querySelector('#close-btn').addEventListener('click',()=>{
    if(menu_state===1){
        document.querySelector('#side-menu').style.left='-100%';
        menu_state=0;
        console.log("close");
    }
})

