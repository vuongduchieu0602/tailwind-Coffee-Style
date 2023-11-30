const topMenu = document.getElementById('vgh-top-menu');
const toggleTopMenuIcon = document.getElementById('vgh-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    if(toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('vgh-topmenu-expanded');
    } else {
        topMenu.classList.remove('vgh-topmenu-expanded');
        topMenu.classList.add('hidden');
    };
})