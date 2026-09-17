(function(){
  var STORAGE_KEY = 'photographyp_cookie_consent';

  function getConsent(){
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); }
    catch(e){ return null; }
  }
  function setConsent(value){
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ value: value, date: new Date().toISOString() })); }
    catch(e){}
  }

  function injectStyles(){
    if(document.getElementById('pp-cookie-style')) return;
    var css = ''
      + '#pp-cookie-banner{position:fixed;left:0;right:0;bottom:0;z-index:9999;'
      + 'background:rgba(240,228,208,.97);border-top:1px solid #e6d7bd;'
      + 'padding:20px 24px;display:flex;gap:24px;align-items:center;justify-content:center;flex-wrap:wrap;'
      + 'font-family:"Inter",sans-serif;color:#2c2f33;'
      + 'transform:translateY(110%);transition:transform .45s cubic-bezier(.19,.55,.18,1);'
      + 'box-shadow:0 -8px 30px rgba(22,15,10,.12);}'
      + '#pp-cookie-banner.pp-show{transform:translateY(0);}'
      + '#pp-cookie-banner p{margin:0;font-size:13px;line-height:1.6;max-width:520px;font-weight:300;}'
      + '#pp-cookie-banner p a{color:#c1682f;text-decoration:underline;}'
      + '#pp-cookie-banner .pp-actions{display:flex;gap:12px;flex-wrap:wrap;flex-shrink:0;}'
      + '#pp-cookie-banner button{font-family:"Space Grotesk",sans-serif;font-size:12px;letter-spacing:.06em;'
      + 'text-transform:uppercase;padding:11px 22px;border-radius:8px;cursor:pointer;transition:all .2s ease;}'
      + '#pp-cookie-banner .pp-accept{background:#16233d;border:1px solid #16233d;color:#faf6ee;}'
      + '#pp-cookie-banner .pp-accept:hover{background:#c1682f;border-color:#c1682f;}'
      + '#pp-cookie-banner .pp-necessary{background:transparent;border:1px solid #16233d;color:#16233d;}'
      + '#pp-cookie-banner .pp-necessary:hover{background:#16233d;color:#faf6ee;}'
      + '@media(max-width:640px){#pp-cookie-banner{padding:18px 20px;text-align:center;justify-content:center;}'
      + '#pp-cookie-banner .pp-actions{width:100%;justify-content:center;}}';
    var style = document.createElement('style');
    style.id = 'pp-cookie-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function showBanner(){
    injectStyles();
    if(document.getElementById('pp-cookie-banner')) return;
    var el = document.createElement('div');
    el.id = 'pp-cookie-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Cookie-Einstellungen');
    el.innerHTML =
      '<p>Diese Website verwendet aktuell nur technisch notwendige Speicherung (z. B. für diese Cookie-Auswahl). '
      + 'Mehr dazu in der <a href="datenschutz.html">Datenschutzerklärung</a>.</p>'
      + '<div class="pp-actions">'
      + '<button type="button" class="pp-necessary">Nur notwendige</button>'
      + '<button type="button" class="pp-accept">Alle akzeptieren</button>'
      + '</div>';
    document.body.appendChild(el);
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ el.classList.add('pp-show'); });
    });
    el.querySelector('.pp-accept').addEventListener('click', function(){
      setConsent('all');
      hideBanner();
    });
    el.querySelector('.pp-necessary').addEventListener('click', function(){
      setConsent('necessary');
      hideBanner();
    });
  }

  function hideBanner(){
    var el = document.getElementById('pp-cookie-banner');
    if(!el) return;
    el.classList.remove('pp-show');
    setTimeout(function(){ el.remove(); }, 450);
  }

  window.ppOpenCookieSettings = function(){
    var el = document.getElementById('pp-cookie-banner');
    if(el){ el.classList.add('pp-show'); return; }
    showBanner();
  };

  document.addEventListener('DOMContentLoaded', function(){
    if(!getConsent()) showBanner();
  });
})();
