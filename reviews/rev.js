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



// FOR THE FOOTER
let s1=0;
let u1 = document.querySelector('.s-1 ul');
document.querySelector('.s-1').addEventListener('click', () => {
    if(s1==1){
        u1.innerHTML='';
        s1=0;
        return;

    }
    u1.innerHTML = `
        <li>About us</li>
        <li>Contact us</li>
        <li>Offer</li>
        <li>FAQs</li>
    `;
    s1=1;
});


let s2=0;
let u2 = document.querySelector('.s-2 ul');
document.querySelector('.s-2').addEventListener('click', () => {
    if(s2==1){
        u2.innerHTML='';
        s2=0;
        return;

    }
    u2.innerHTML = `
                    <li>My orders</li>
                    <li>Wishlist</li>
                    <li>Shopping Cart</li>
                    <li>Saved Address</li>
    `;
    s2=1;
});
let s3=0;
let u3 = document.querySelector('.s-3 ul');
document.querySelector('.s-3').addEventListener('click', () => {
    if(s3==1){
        u3.innerHTML='';
        s3=0;
        return;

    }
    u3.innerHTML = `
                    <li>Blogs</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Profile</li>
                    <li>Settings</li>

    `;
    s3=1;
});
let s4=0;
let u4 = document.querySelector('.s-4 ul');
document.querySelector('.s-4').addEventListener('click', () => {
    if(s4==1){
        u4.innerHTML='';
        s4=0;
        return;

    }
    u4.innerHTML = `
          
                           <li>PizzaBoy</li>
                    <li>Saladish</li>
                    <li>IcePops</li>
                    <li>Maxican Hoy</li>
                    <li>La Foodie</li>

    `;
    s4=1;
});
