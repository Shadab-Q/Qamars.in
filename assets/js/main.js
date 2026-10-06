document.addEventListener('DOMContentLoaded',()=>{const t=document.querySelector('.menu-toggle'),n=document.querySelector('.site-nav');if(t&&n){t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false')});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');t.setAttribute('aria-expanded','false')}))}const p=new URLSearchParams(location.search),topic=p.get('topic'),s=document.querySelector('#service');if(topic&&s){const m={gst:'GST Services',accounting:'Accounting & Bookkeeping',setup:'Business Consultancy',cfo:'Virtual CFO Services'};if(m[topic])s.value=m[topic]}});


// Social profiles are intentionally placeholders until the QAMARS pages are live.
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.social-placeholder').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));});
