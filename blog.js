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





// FOR THE DARK MODE
let darko = document.getElementById('dark_mode');
let current = localStorage.getItem("MODE") || "LIGHT"; // Get the current mode from local storage or default to LIGHT

function enable_mod() {
    let styleSheet = document.getElementById('dark-mode-styles');

    if (current === "LIGHT") {
        styleSheet.innerHTML = '';
        darko.innerText = 'DARK'; 
        localStorage.setItem("MODE", "LIGHT"); 
    } else {
        styleSheet.innerHTML = `
            .dark_back {
                background-color: #282828;
            }
            .dark_color {
                color: white;
            }
            #dark_color {
                color: white;
            }
            .dark_icon {
                background-color: #3c3c3c;
            }
        `;
        darko.innerText = 'LIGHT'; 
        localStorage.setItem("MODE", "DARK"); 
    }
}


darko.addEventListener('click', function () {
    current = current === "LIGHT" ? "DARK" : "LIGHT"; 
    enable_mod(); 
});

enable_mod();
