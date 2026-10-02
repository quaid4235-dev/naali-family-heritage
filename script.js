(function(){
  var hd=document.getElementById('hd'),bg=document.getElementById('bg'),m=document.getElementById('menu');
  var pg=document.getElementById('pg');
  function s(){hd.classList.toggle('solid',window.scrollY>40);var m=document.documentElement.scrollHeight-innerHeight;pg.style.transform='scaleX('+(m>0?scrollY/m:0)+')'}
  s();window.addEventListener('scroll',s,{passive:true});
  function t(o){m.classList.toggle('open',o);bg.setAttribute('aria-expanded',o);bg.textContent=o?'Close':'Menu'}
  bg.addEventListener('click',function(){t(!m.classList.contains('open'))});
  m.addEventListener('click',function(e){if(e.target.tagName==='A')t(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')t(false)});
})();
