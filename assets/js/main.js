// Accessible dropdown menus
if(href === here){ a.setAttribute('aria-current','page'); }
});
}


// Theme toggle (light/dark)
function setupTheme(){
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved){ root.classList.toggle('light', saved==='light'); }
const toggle = document.getElementById('theme-toggle');
if(toggle){ toggle.addEventListener('click', ()=>{
root.classList.toggle('light');
localStorage.setItem('theme', root.classList.contains('light')? 'light' : 'dark');
});}
}


// Simple client-side search (projects page)
function setupSearch(){
const input = document.getElementById('search');
if(!input) return;
const cards = Array.from(document.querySelectorAll('[data-project]'));
input.addEventListener('input', ()=>{
const q = input.value.toLowerCase();
cards.forEach(card=>{
const text = card.textContent.toLowerCase();
card.style.display = text.includes(q) ? '' : 'none';
});
});
}


// Year
function setYear(){
const y = document.getElementById('year');
if(y) y.textContent = new Date().getFullYear();
}


// Optional: Google Analytics (uncomment & add your ID)
// function analytics(){
// const GA_ID = '';// e.g., G-XXXXXXXXXX
// if(!GA_ID) return;
// const s = document.createElement('script');
// s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
// s.async = true; document.head.appendChild(s);
// window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', GA_ID);
// }


window.addEventListener('DOMContentLoaded', ()=>{
setupMenus();
markActive();
setupTheme();
setupSearch();
setYear();
// analytics();
});