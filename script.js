(function(){
  var bg=document.getElementById('bg'),nav=document.getElementById('nav');
  bg.addEventListener('click',function(){var o=!nav.classList.contains('open');nav.classList.toggle('open',o);bg.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');bg.setAttribute('aria-expanded','false')}});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  var links=[].slice.call(document.querySelectorAll('nav a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
  function spy(){var y=scrollY+120,i=0;secs.forEach(function(s,k){if(s&&s.offsetTop<=y)i=k});links.forEach(function(a,k){a.classList.toggle('on',k===i)})}
  addEventListener('scroll',spy,{passive:true});spy();
})();
