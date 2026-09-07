const navToggle=document.querySelector('.nav-toggle');
const navMenu=document.querySelector('#nav-menu');
if(navToggle&&navMenu){navToggle.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));});}
const themeToggle=document.querySelector('#theme-toggle');
const savedTheme=localStorage.getItem('clearpay-theme');
if(savedTheme==='dark')document.body.classList.add('dark');
function updateThemeLabel(){if(themeToggle)themeToggle.setAttribute('aria-label',document.body.classList.contains('dark')?'Switch to light mode':'Switch to dark mode');}
updateThemeLabel();
themeToggle?.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('clearpay-theme',document.body.classList.contains('dark')?'dark':'light');updateThemeLabel();});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
