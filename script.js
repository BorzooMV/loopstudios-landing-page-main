const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("dropDownMenu");
const btnClose = document.getElementById("btnClose");

btnMenu.addEventListener('click',()=>{
    menu.className="menuActive";
    document.documentElement.style.overflowY="hidden";
});

btnClose.addEventListener('click', ()=>{
    menu.className="menuDisable";
    document.documentElement.style.overflowY="auto";
});
