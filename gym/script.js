let toggleMenuIcon = document.getElementById ('togglemenuicon');
let mid = document.getElementById ('mid');

toggleMenuIcon.addEventListener ('click',function()
{
    mid.classList.toggle ('open menu');

});