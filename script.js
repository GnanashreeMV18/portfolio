document.querySelectorAll('.copy').forEach(function(b){
  b.addEventListener('click',function(){
    var t=b.getAttribute('data-copy');
    var ok=function(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1500)};
    var fail=function(){
      var s=b.previousElementSibling,r=document.createRange();r.selectNodeContents(s);
      var sel=getSelection();sel.removeAllRanges();sel.addRange(r);b.textContent='Selected'};
    try{navigator.clipboard.writeText(t).then(ok,fail)}catch(e){fail()}
  });
});
document.getElementById('theme').addEventListener('click',function(){
  var r=document.documentElement,d=r.getAttribute('data-theme');
  var light=d?d==='light':matchMedia('(prefers-color-scheme: light)').matches;
  r.setAttribute('data-theme',light?'dark':'light');
});
