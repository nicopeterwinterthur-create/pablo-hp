(function(){
  var STORAGE_KEY = 'photographyp_cookie_consent';
  var scriptEl = document.currentScript;
  var DATENSCHUTZ_HREF = scriptEl ? new URL('datenschutz.html', scriptEl.src).href : 'datenschutz.html';

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
      + 'display:flex;justify-content:center;'
      + 'transform:translateY(110%);transition:transform .5s cubic-bezier(.19,.55,.18,1);}'
      + '#pp-cookie-banner.pp-show{transform:translateY(0);}'
      + '#pp-cookie-card{width:100%;max-width:1040px;margin:0 20px;'
      + 'background:rgba(250,246,238,.96);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);'
      + 'border:1px solid #e6d7bd;border-bottom:none;border-radius:16px 16px 0 0;'
      + 'padding:26px 32px 24px;display:flex;gap:28px;align-items:center;justify-content:space-between;flex-wrap:wrap;'
      + 'font-family:"Inter",sans-serif;color:#2c2f33;'
      + 'box-shadow:0 -14px 40px rgba(22,15,10,.14);}'
      + '#pp-cookie-copy{max-width:560px;}'
      + '#pp-cookie-eyebrow{font-family:"Space Grotesk",sans-serif;font-size:11px;letter-spacing:.2em;'
      + 'text-transform:uppercase;color:#b3714f;margin-bottom:6px;}'
      + '#pp-cookie-heading{font-family:"Cormorant Garamond",serif;font-weight:600;color:#16233d;'
      + 'font-size:21px;line-height:1.2;margin-bottom:8px;}'
      + '#pp-cookie-card p{margin:0;font-size:13px;line-height:1.65;font-weight:300;color:#726a5e;}'
      + '#pp-cookie-card p a{color:#b3714f;text-decoration:underline;text-decoration-color:transparent;transition:text-decoration-color .2s ease;}'
      + '#pp-cookie-card p a:hover{text-decoration-color:#b3714f;}'
      + '#pp-cookie-actions{display:flex;gap:14px;flex-wrap:wrap;flex-shrink:0;}'
      + '#pp-cookie-actions button{font-family:"Space Grotesk",sans-serif;font-size:12px;letter-spacing:.07em;'
      + 'text-transform:uppercase;padding:13px 26px;border-radius:8px;cursor:pointer;'
      + 'transition:background .25s ease,border-color .25s ease,color .25s ease,transform .25s ease,box-shadow .25s ease;}'
      + '#pp-cookie-accept{background:#16233d;border:1px solid #16233d;color:#faf6ee;'
      + 'box-shadow:0 6px 18px rgba(22,15,10,.2);}'
      + '#pp-cookie-accept:hover{background:#b3714f;border-color:#b3714f;transform:translateY(-2px);'
      + 'box-shadow:0 10px 24px rgba(22,15,10,.26);}'
      + '#pp-cookie-necessary{background:transparent;border:1px solid #16233d;color:#16233d;}'
      + '#pp-cookie-necessary:hover{background:#16233d;color:#faf6ee;transform:translateY(-2px);'
      + 'box-shadow:0 10px 24px rgba(22,15,10,.18);}'
      + '@media(max-width:640px){#pp-cookie-card{padding:24px 20px 22px;text-align:center;justify-content:center;border-radius:14px 14px 0 0;}'
      + '#pp-cookie-copy{max-width:none;}'
      + '#pp-cookie-actions{width:100%;justify-content:center;}'
      + '#pp-cookie-actions button{flex:1;min-width:140px;}}';
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
      '<div id="pp-cookie-card">'
      + '<div id="pp-cookie-copy">'
      + '<div id="pp-cookie-eyebrow">Cookies</div>'
      + '<div id="pp-cookie-heading">Deine Privatsphäre ist uns wichtig</div>'
      + '<p>Diese Website verwendet aktuell nur technisch notwendige Speicherung (z. B. für diese Cookie-Auswahl). '
      + 'Mehr dazu in der <a href="' + DATENSCHUTZ_HREF + '">Datenschutzerklärung</a>.</p>'
      + '</div>'
      + '<div id="pp-cookie-actions">'
      + '<button type="button" id="pp-cookie-necessary">Nur notwendige</button>'
      + '<button type="button" id="pp-cookie-accept">Alle akzeptieren</button>'
      + '</div>'
      + '</div>';
    document.body.appendChild(el);
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ el.classList.add('pp-show'); });
    });
    el.querySelector('#pp-cookie-accept').addEventListener('click', function(){
      setConsent('all');
      hideBanner();
    });
    el.querySelector('#pp-cookie-necessary').addEventListener('click', function(){
      setConsent('necessary');
      hideBanner();
    });
  }

  function hideBanner(){
    var el = document.getElementById('pp-cookie-banner');
    if(!el) return;
    el.classList.remove('pp-show');
    setTimeout(function(){ el.remove(); }, 500);
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
