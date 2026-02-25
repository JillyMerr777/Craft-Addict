// Animate finder diamond pop-in when scrolled into view
document.addEventListener('DOMContentLoaded',()=>{
  const finderDiamond = document.querySelector('.finder-diamond');
  if(finderDiamond){
    function onScroll(){
      const rect = finderDiamond.getBoundingClientRect();
      if(rect.top < window.innerHeight * 0.7){
        finderDiamond.classList.add('pop-in');
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
  }
});
// Basic interactions for Craft Addict
document.addEventListener('DOMContentLoaded',()=>{
  const heroLogo = document.getElementById('hero-logo');
  const finder = document.getElementById('finder');
  const inspo = document.getElementById('inspo');
  const wizard = document.getElementById('wizard');
  const result = document.getElementById('result');
  const btnInspo = document.getElementById('btn-inspo');
  const btnWizard = document.getElementById('btn-wizard');

  // Parallax: move logo slower than scroll
  window.addEventListener('scroll',()=>{
    const sc = window.scrollY;
    heroLogo.style.transform = `translateY(${sc* -0.08}px) scale(${1 - Math.min(sc/3000,0.06)})`;
  });

  // Show sections
  btnInspo.addEventListener('click',()=>{inspo.classList.remove('hidden');wizard.classList.add('hidden');result.classList.add('hidden');scrollInto(inspo)});
  btnWizard.addEventListener('click',()=>{wizard.classList.remove('hidden');inspo.classList.add('hidden');result.classList.add('hidden');scrollInto(wizard)});

  function scrollInto(el){el.scrollIntoView({behavior:'smooth',block:'start'})}

  // Inspiration grid: try to fetch real Pinterest pins via AllOrigins CORS proxy,
  // fallback to bundled sample images if that fails.
  const inspoGrid = document.getElementById('inspo-grid');
  const sampleImgs = [
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1000',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000',
    'https://images.unsplash.com/photo-1541976076758-3d7b1b6cf4b1?w=1000',
    'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1000',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1000',
    'https://images.unsplash.com/photo-1520975682223-3d6cc2d4f2c6?w=1000',
    'https://images.unsplash.com/photo-1526178612108-7a146b5a0b09?w=1000',
    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1000'
  ];

  async function fetchPinterestSearch(q){
    const searchUrl = `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(q)}`;
    const proxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(searchUrl);
    try{
      const res = await fetch(proxy);
      if(!res.ok) throw new Error('Network response not ok');
      const text = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text,'text/html');
      // find anchor elements that link to pins
      const anchors = Array.from(doc.querySelectorAll('a[href*="/pin/"]'));
      const pins = [];
      for(const a of anchors){
        const img = a.querySelector('img');
        if(img){
          // prefer highest-res image from srcset when available
          let srcUrl = img.src || '';
          if(img.srcset){
            try{
              const parts = img.srcset.split(',').map(p=>p.trim());
              const last = parts[parts.length-1] || parts[0];
              const m = last.match(/(https?:.*)\s+\d+w$/);
              if(m && m[1]) srcUrl = m[1]; else srcUrl = last.split(' ')[0];
            }catch(e){/* ignore and fallback to img.src */}
          }
          const href = a.getAttribute('href');
          const full = href && href.startsWith('http')?href:`https://www.pinterest.com${href}`;
          pins.push({src:srcUrl, href:full});
        }
        if(pins.length>=30) break;
      }
      return pins;
    }catch(err){
      console.warn('Pinterest fetch failed, using fallback images',err);
      return null;
    }
  }

  async function buildInspo(){
    inspoGrid.innerHTML='';
    const loader = document.getElementById('inspo-loader');
    if(loader) loader.classList.remove('hidden');
    const pins = await fetchPinterestSearch('craft ideas');
    if(pins && pins.length){
      pins.forEach((p,i)=>{
        const a = document.createElement('a');
        a.href = p.href; // default to pin page
        a.target = '_blank';
        a.className='tile';
        a.dataset.pin = p.href;
        const img = document.createElement('img');
        img.src = p.src;
        img.alt = 'craft idea';
        a.appendChild(img);
        // intercept click to try to resolve external destination (original source)
        a.addEventListener('click', async function(e){
          // allow ctrl/meta clicks to open in new tab normally
          if(e.metaKey||e.ctrlKey||e.shiftKey||e.button===1) return;
          e.preventDefault();
          const pinUrl = this.dataset.pin;
          const dest = await resolvePinDestination(pinUrl);
          window.open(dest || pinUrl, '_blank');
        });
        inspoGrid.appendChild(a);
      });
      if(loader) loader.classList.add('hidden');
    } else {
      sampleImgs.forEach((src,i)=>{
        const a = document.createElement('a');
        a.href = 'https://www.pinterest.com/search/pins/?q=craft%20ideas';
        a.target = '_blank';
        a.className='tile';
        const img = document.createElement('img');
        img.src = src;
        img.alt='craft idea';
        a.appendChild(img);
        inspoGrid.appendChild(a);
      });
      if(loader) loader.classList.add('hidden');
    }
  }
  buildInspo();

  // Try to resolve a Pinterest pin's external destination by fetching the pin page
  // and looking for the first external link. Fall back to the pin page itself.
  async function resolvePinDestination(pinPageUrl){
    try{
      const proxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(pinPageUrl);
      const res = await fetch(proxy);
      if(!res.ok) throw new Error('Failed to fetch pin page');
      const txt = await res.text();
      const doc = new DOMParser().parseFromString(txt,'text/html');
      // prefer known destination anchors (non-pinterest hosts)
      const anchors = Array.from(doc.querySelectorAll('a[href^="http"]'));
      for(const a of anchors){
        const href = a.getAttribute('href');
        if(!href) continue;
        try{ const u = new URL(href); if(u.hostname && !u.hostname.includes('pinterest.com')) return href; }catch(e){}
      }
      // fallback: look for meta property pointing to site or external url
      const metaOg = doc.querySelector('meta[property="og:url"])') || doc.querySelector('meta[name="og:url"]');
      if(metaOg && metaOg.content && !metaOg.content.includes('pinterest.com')) return metaOg.content;
      return null;
    }catch(err){
      console.warn('Could not resolve pin destination',err);
      return null;
    }
  }

  // Wizard logic
  const crafts = [
    'Crocheting','Knitting','Watercolor','Acrylic painting','Needle felting','Stained glass','Embroidery','Sewing','Quilting','Paper crafting','Calligraphy','Woodworking','Macramé','Candle making','Soap making','Resin art','Beading','Leatherworking'
  ];
  const craftList = document.getElementById('craft-list');
  const craftSearch = document.getElementById('craft-search');
  const experienceWrap = document.getElementById('experience-wrap');
  const experienceList = document.getElementById('experience-list');

  function renderCrafts(filter=''){
    craftList.innerHTML='';
    crafts.filter(c=>c.toLowerCase().includes(filter.toLowerCase())).forEach(c=>{
      const id = 'c-'+c.replace(/\s+/g,'-');
      const label = document.createElement('label');
      label.innerHTML = `<input type="checkbox" value="${c}" name="craft"> ${c}`;
      craftList.appendChild(label);
    });
  }
  renderCrafts();

  craftSearch.addEventListener('input',(e)=>renderCrafts(e.target.value));

  // show experience controls when crafts selected
  craftList.addEventListener('change',()=>{
    const selected = Array.from(craftList.querySelectorAll('input[type=checkbox]:checked')).map(i=>i.value);
    if(selected.length){
      experienceWrap.classList.remove('hidden');
    } else experienceWrap.classList.add('hidden');
    experienceList.innerHTML='';
    selected.forEach(s=>{
      const wrap = document.createElement('div');
      wrap.className='exp-row';
      wrap.innerHTML = `<strong>${s}</strong><div class="exp-options">`+
        `<label><input type="radio" name="exp-${s}" value="Beginner"> Beginner</label>`+
        `<label><input type="radio" name="exp-${s}" value="Intermediate"> Intermediate</label>`+
        `<label><input type="radio" name="exp-${s}" value="Expert"> Expert</label>`+
        `</div>`;
      experienceList.appendChild(wrap);
    });
  });

  // Wizard navigation
  const steps = Array.from(document.querySelectorAll('.step'));
  let cur = 0;
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  const submitBtn = document.getElementById('submit-wizard');

  function showStep(i){
    steps.forEach(s=>s.classList.add('hidden'));
    steps[i].classList.remove('hidden');
    prevBtn.classList.toggle('hidden', i===0);
    nextBtn.classList.toggle('hidden', i===steps.length-1);
    submitBtn.classList.toggle('hidden', i!==steps.length-1);
  }
  showStep(cur);
  prevBtn.addEventListener('click',()=>{cur=Math.max(0,cur-1);showStep(cur)});
  nextBtn.addEventListener('click',()=>{cur=Math.min(steps.length-1,cur+1);showStep(cur)});

  // Submit wizard -> generate suggestion
  submitBtn.addEventListener('click',()=>{
    const data = {};
    data.time = (document.querySelector('input[name=time]:checked')||{}).value||'';
    data.crafts = Array.from(document.querySelectorAll('#craft-list input[type=checkbox]:checked')).map(i=>i.value);
    data.exp = {};
    data.crafts.forEach(c=>{const val = (document.querySelector(`input[name=exp-${c}]:checked`)||{}).value||'Beginner'; data.exp[c]=val});
    data.promptSame = document.getElementById('prompt-same').checked;
    data.methods = Array.from(document.querySelectorAll('input[name=method]:checked')).map(i=>i.value);
    showResultFor(data);
  });

  // Build result
  function showResultFor(data){
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('wizard').classList.add('hidden');
    scrollInto(document.getElementById('result'));
    // choose craft
    let choice = '';
    if(data.crafts && data.crafts.length) choice = data.crafts[Math.floor(Math.random()*data.crafts.length)];
    else choice = crafts[Math.floor(Math.random()*crafts.length)];

    const title = `Try: ${generateCraftSuggestion(choice)}`;
    document.getElementById('result-title').textContent = title;
    const tags = [data.time || 'Any time'].concat(data.crafts.length?data.crafts:[]).concat(data.methods.length?data.methods:[]);
    const tagWrap = document.getElementById('result-tags'); tagWrap.innerHTML='';
    tags.forEach(t=>{const s=document.createElement('span');s.className='tag';s.textContent=t;tagWrap.appendChild(s)});

    document.getElementById('result-desc').textContent = `We suggest ${choice.toLowerCase()} based on your choices. This suggestion is tailored to ${data.time||'your availability'} and preferred learning methods.`;

    // resources
    const rlist = document.getElementById('resource-list'); rlist.innerHTML='';
    // basic overview
    const overview = document.createElement('div'); overview.innerHTML = `<h4>Overview</h4><p>Quick intro to ${choice.toLowerCase()}.</p>`;
    rlist.appendChild(overview);
    if(data.methods.includes('Video tutorial')||data.methods.length===0){
      const v = document.createElement('div'); v.innerHTML = `<a href="https://www.youtube.com/results?search_query=${encodeURIComponent(choice+' tutorial')}">Video tutorial for ${choice}</a>`; rlist.appendChild(v);
    }
    if(data.methods.includes('Photos or diagrams')||data.methods.length===0){
      const p = document.createElement('div'); p.innerHTML = `<a href="https://www.pinterest.com/search/pins/?q=${encodeURIComponent(choice)}">Image references on Pinterest</a>`; rlist.appendChild(p);
    }
    const buy = document.createElement('div'); buy.innerHTML = `<a href="https://www.google.com/search?q=${encodeURIComponent(choice+' beginner supplies')}">Where to buy beginner supplies for ${choice}</a>`; rlist.appendChild(buy);

    // tips by experience
    const tips = document.createElement('div'); tips.innerHTML = `<h4>Tips</h4><p>${generateTips(choice,(data.exp[choice]||'Beginner'))}</p>`; rlist.appendChild(tips);

    // shuffle link
    const shuffle = document.getElementById('shuffle'); shuffle.onclick = (e)=>{e.preventDefault(); showResultFor(data)};

    // crafted button
    document.getElementById('crafted-btn').onclick = ()=>{
      runConfetti();
      setTimeout(()=>showCelebrateModal(),600);
    };
  }

  function generateCraftSuggestion(choice){
    // simple mapping to make the result readable
    const verbs = {Crocheting:'crochet a cozy coaster',Knitting:'knit a simple scarf',Watercolor:'paint a loose floral watercolor',"Acrylic painting":'paint a small acrylic portrait',"Needle felting":'make a small felted animal',"Stained glass":'craft a suncatcher'};
    return verbs[choice]||`make a ${choice.toLowerCase()} project`;
  }
  function generateTips(choice,level){
    if(level==='Beginner') return `Start small: use beginner kits, follow step-by-step videos, and give yourself small goals.`;
    if(level==='Intermediate') return `Try a slightly bigger pattern and experiment with color palettes.`;
    return `Challenge yourself with advanced patterns and teach someone else.`;
  }

  // confetti using emojis of craft items
  function runConfetti(){
    const conf = document.getElementById('confetti'); conf.classList.remove('hidden');
    conf.innerHTML = '';
    const emojis = ['🧶','✂️','🎨','🪡','🧵','🖌️','📐','🧩'];
    for(let i=0;i<40;i++){
      const el = document.createElement('div'); el.className='c-item'; el.style.position='fixed'; el.style.left = Math.random()*100+'%'; el.style.top='-10px'; el.style.fontSize = (12+Math.random()*28)+'px'; el.style.opacity=0.95; el.style.transform = `rotate(${Math.random()*360}deg)`;
      el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
      document.getElementById('confetti').appendChild(el);
      // animate
      const dur = 3000 + Math.random()*2000;
      el.animate([{transform:el.style.transform, top:'-10px'},{transform:el.style.transform, top:(60+Math.random()*80)+'vh'}],{duration:dur,iterations:1,easing:'cubic-bezier(.2,.8,.2,1)'});
      setTimeout(()=>el.remove(),3500);
    }
    setTimeout(()=>conf.classList.add('hidden'),3800);
  }

  function showCelebrateModal(){
    const keep = confirm('Congrats, you crafty thing you!\nHow do you want to celebrate?\nPress OK to "Share my craft" or Cancel to "Keep crafting".');
    if(keep){alert('Share flow will be implemented later.');}
  }

});
