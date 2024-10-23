

let darko = document.getElementById('dark_mode');
let current = localStorage.getItem("MODE") || "LIGHT"; 

function enable_mod() {
    let styleSheet = document.getElementById('dark-mode-styles');

    if (current === "LIGHT") {
        styleSheet.innerHTML = ''; 
        darko.innerText = 'DARK'; 
        document.documentElement.style.setProperty('--icon-content', '"\\f186"'); 
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
            .invert{
                filter: invert();
            }
        `; 
        darko.innerText = 'LIGHT';
        document.documentElement.style.setProperty('--icon-content', '"\\f185"'); 
        localStorage.setItem("MODE", "DARK"); 
    }
}

darko.addEventListener('click', function () {
    current = current === "LIGHT" ? "DARK" : "LIGHT"; 
    enable_mod(); 
});

enable_mod();






function searchRecipes() {
    const query = document.getElementById('searchInput').value;
    window.location.href = `results.html?query=${encodeURIComponent(query)}`;
}