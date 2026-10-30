const cases = {
 shelter: {tag:'01 / WEB DEVELOPMENT',title:'Shelter Gaze',description:'A collaborative project connecting migrants in New York City with shelter information.',evidence:'The repository README lists React, React Map GL, Mapbox, and AWS services including Lambda, API Gateway, DynamoDB, S3, and Amazon Translate. It describes geolocation, multilingual support, and shelter search.',scope:'James (jtwray) is credited among five contributors. This portfolio does not attribute the whole platform to one person. Features and architecture are documented by the repository; current production availability and individual feature ownership have not been independently verified.',url:'https://github.com/jtwray/Shelter-Gaze'},
 life: {tag:'02 / CREATIVE CODING',title:'Game of Life',description:"A JavaScript exploration of Conway's Game of Life: simple local rules that create complex patterns.",evidence:'The public jtwray/gol repository is pinned on the GitHub profile. Its README links to the Game of Life reference and includes a Figma design draft.',scope:'The cover is an original illustration of cellular patterns, not a screenshot of the project. Explore the repository to inspect the implementation.',url:'https://github.com/jtwray/gol'},
 portfolio: {tag:'03 / HUMAN + AI',title:'Portfolio Experiments',description:'A branch-based collection exploring different ways to present the same person. This first experiment takes interface inspiration from Rockstar Games.',evidence:'The repository contains the implementation, source provenance, design decisions, and a validation record. The human supplied the brief and reference; an AI coding assistant researched and implemented this version.',scope:'This is evidence of the current AI-assisted development collaboration. Human review of the completed design is still pending. It is not evidence of prior employment, certification, or a measured productivity gain.',url:'https://github.com/jtwray/portfolio-experiments/tree/codex/rockstar-portfolio'}
};
const dialog = document.querySelector('#case-dialog');
let opener;
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
 const item=cases[button.dataset.project];opener=button;
 for(const [id,key] of [['case-tag','tag'],['case-title','title'],['case-description','description'],['case-evidence','evidence'],['case-scope','scope']]) document.getElementById(id).textContent=item[key];
 document.querySelector('#case-link').href=item.url;dialog.showModal();
}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>opener?.focus());
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 let count=0;document.querySelectorAll('[data-project]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});
 document.querySelector('#filter-status').textContent=`${count} ${count===1?'project':'projects'} shown`;
}));
const menu=document.querySelector('#menu'),nav=document.querySelector('#mobile-nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav.hidden=open;});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!nav.hidden){nav.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.focus();}});
for(let i=0;i<196;i++){const cell=document.createElement('i');if(((i*7+i%14*3)%19)<8)cell.style.opacity='0';document.querySelector('#life-art').append(cell);}
