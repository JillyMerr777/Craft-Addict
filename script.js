function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let frameId = 0;
  let lastTime = 0;
  let verticalOffset = 0;

  const tileW = 140;
  const tileH = 180;
  const starCells = new Set();

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
  }

  function buildStarField() {
    starCells.clear();
    for (let x = -tileW; x < canvas.width + tileW; x += tileW) {
      for (let y = -tileH; y < canvas.height + tileH * 2; y += tileH) {
        if (Math.random() < 0.3) {
          starCells.add(`${x},${y}`);
        }
      }
    }
  }

  function drawStar(centerX, centerY, outerRadius, innerRadius, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#f5a623';
    ctx.beginPath();

    for (let i = 0; i < 16; i += 1) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI / 8) * i - Math.PI / 2;
      const px = centerX + Math.cos(angle) * radius;
      const py = centerY + Math.sin(angle) * radius;
      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }

    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawFrame(offsetY, timeMs) {
    const palette = ['#e76f30', '#f5a623', '#4a9e9e', '#838f4a', '#d66d75'];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = -tileW; x < canvas.width + tileW; x += tileW) {
      for (let y = -tileH; y < canvas.height + tileH * 2; y += tileH) {
        const colorIndex = Math.abs(Math.floor(x / tileW + y / tileH)) % palette.length;
        const py = y + offsetY;

        ctx.fillStyle = palette[colorIndex];
        ctx.globalAlpha = 0.18;
        ctx.beginPath();
        ctx.moveTo(x + tileW / 2, py);
        ctx.lineTo(x + tileW, py + tileH / 2);
        ctx.lineTo(x + tileW / 2, py + tileH);
        ctx.lineTo(x, py + tileH / 2);
        ctx.closePath();
        ctx.fill();

        const cellKey = `${x},${y}`;
        if (starCells.has(cellKey)) {
          const cx = x + tileW / 2;
          const cy = py + tileH / 2;
          const pulse = Math.sin(timeMs * 0.001 + x + y) * 0.3 + 0.7;
          const outer = 18 * pulse;
          const inner = outer * 0.4;
          const alpha = 0.4 + pulse * 0.3;
          drawStar(cx, cy, outer, inner, alpha);
        }
      }
    }

    ctx.globalAlpha = 1;
  }

  function tick(now) {
    const delta = now - lastTime;
    lastTime = now;

    const speed = 0.02;
    verticalOffset = (verticalOffset + delta * speed) % tileH;
    drawFrame(verticalOffset, now);

    frameId = requestAnimationFrame(tick);
  }

  resizeCanvas();
  buildStarField();

  const mutationObserver = new MutationObserver(() => {
    resizeCanvas();
    buildStarField();
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });

  window.addEventListener('resize', () => {
    resizeCanvas();
    buildStarField();
  });

  frameId = requestAnimationFrame(tick);

  return () => {
    mutationObserver.disconnect();
    cancelAnimationFrame(frameId);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();

  const choicesSection = document.getElementById('choices-section');
  const choicesContent = document.getElementById('choices-content');
  const scrollToChoicesBtn = document.getElementById('scroll-to-choices');

  function smoothScrollTo(element) {
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (scrollToChoicesBtn && choicesSection) {
    scrollToChoicesBtn.addEventListener('click', () => smoothScrollTo(choicesSection));
  }

  function updateChoicesMotion() {
    if (!choicesSection || !choicesContent) return;

    const rect = choicesSection.getBoundingClientRect();
    const viewport = window.innerHeight;
    const rawProgress = (viewport - rect.top) / (viewport + rect.height);
    const progress = Math.max(0, Math.min(1, rawProgress));

    const y = 100 - 200 * progress;
    let opacity = 0;
    if (progress < 0.3) {
      opacity = progress / 0.3;
    } else if (progress < 0.7) {
      opacity = 1;
    } else {
      opacity = Math.max(0, 1 - (progress - 0.7) / 0.3);
    }

    choicesContent.style.transform = `translateY(${y}px)`;
    choicesContent.style.opacity = String(opacity);
  }

  window.addEventListener('scroll', updateChoicesMotion, { passive: true });
  updateChoicesMotion();

  const inspo = document.getElementById('inspo');
  const wizard = document.getElementById('wizard');
  const result = document.getElementById('result');
  const btnInspo = document.getElementById('btn-inspo');
  const btnWizard = document.getElementById('btn-wizard');

  if (btnInspo) {
    btnInspo.addEventListener('click', () => {
      if (inspo) inspo.classList.remove('hidden');
      if (wizard) wizard.classList.add('hidden');
      if (result) result.classList.add('hidden');
      smoothScrollTo(inspo);
    });
  }

  if (btnWizard) {
    btnWizard.addEventListener('click', () => {
      if (wizard) wizard.classList.remove('hidden');
      if (inspo) inspo.classList.add('hidden');
      if (result) result.classList.add('hidden');
      smoothScrollTo(wizard);
    });
  }

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

  async function fetchPinterestSearch(query) {
    const searchUrl = `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}`;
    const proxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(searchUrl);

    try {
      const response = await fetch(proxy);
      if (!response.ok) throw new Error('Network response not ok');

      const text = await response.text();
      const doc = new DOMParser().parseFromString(text, 'text/html');
      const anchors = Array.from(doc.querySelectorAll('a[href*="/pin/"]'));
      const pins = [];

      for (const anchor of anchors) {
        const image = anchor.querySelector('img');
        if (!image) continue;

        let srcUrl = image.src || '';
        if (image.srcset) {
          try {
            const parts = image.srcset.split(',').map((part) => part.trim());
            const last = parts[parts.length - 1] || parts[0];
            const match = last.match(/(https?:.*)\s+\d+w$/);
            srcUrl = match && match[1] ? match[1] : last.split(' ')[0];
          } catch (_error) {
            srcUrl = image.src || srcUrl;
          }
        }

        const href = anchor.getAttribute('href') || '';
        const full = href.startsWith('http') ? href : `https://www.pinterest.com${href}`;
        pins.push({ src: srcUrl, href: full });

        if (pins.length >= 30) break;
      }

      return pins;
    } catch (error) {
      console.warn('Pinterest fetch failed, using fallback images', error);
      return null;
    }
  }

  async function resolvePinDestination(pinPageUrl) {
    try {
      const proxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(pinPageUrl);
      const response = await fetch(proxy);
      if (!response.ok) throw new Error('Failed to fetch pin page');

      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const anchors = Array.from(doc.querySelectorAll('a[href^="http"]'));

      for (const anchor of anchors) {
        const href = anchor.getAttribute('href');
        if (!href) continue;
        try {
          const url = new URL(href);
          if (url.hostname && !url.hostname.includes('pinterest.com')) {
            return href;
          }
        } catch (_error) {
          continue;
        }
      }

      const metaOg = doc.querySelector('meta[property="og:url"]') || doc.querySelector('meta[name="og:url"]');
      if (metaOg && metaOg.content && !metaOg.content.includes('pinterest.com')) {
        return metaOg.content;
      }

      return null;
    } catch (error) {
      console.warn('Could not resolve pin destination', error);
      return null;
    }
  }

  async function buildInspo() {
    if (!inspoGrid) return;

    inspoGrid.innerHTML = '';
    const loader = document.getElementById('inspo-loader');
    if (loader) loader.classList.remove('hidden');

    const pins = await fetchPinterestSearch('craft ideas');
    const sourcePins = pins && pins.length ? pins : sampleImgs.map((src) => ({
      src,
      href: 'https://www.pinterest.com/search/pins/?q=craft%20ideas'
    }));

    sourcePins.forEach((pin) => {
      const link = document.createElement('a');
      link.href = pin.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'tile';
      link.dataset.pin = pin.href;

      const image = document.createElement('img');
      image.src = pin.src;
      image.alt = 'craft idea';
      link.appendChild(image);

      if (pins && pins.length) {
        link.addEventListener('click', async function onPinClick(event) {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
          event.preventDefault();
          const pinUrl = this.dataset.pin || '';
          const destination = await resolvePinDestination(pinUrl);
          window.open(destination || pinUrl, '_blank');
        });
      }

      inspoGrid.appendChild(link);
    });

    if (loader) loader.classList.add('hidden');
  }

  buildInspo();

  const crafts = [
    'Crocheting',
    'Knitting',
    'Watercolor',
    'Acrylic painting',
    'Needle felting',
    'Stained glass',
    'Embroidery',
    'Sewing',
    'Quilting',
    'Paper crafting',
    'Calligraphy',
    'Woodworking',
    'Macrame',
    'Candle making',
    'Soap making',
    'Resin art',
    'Beading',
    'Leatherworking'
  ];

  const craftList = document.getElementById('craft-list');
  const craftSearch = document.getElementById('craft-search');
  const experienceWrap = document.getElementById('experience-wrap');
  const experienceList = document.getElementById('experience-list');

  function renderCrafts(filter = '') {
    if (!craftList) return;
    craftList.innerHTML = '';

    crafts
      .filter((craft) => craft.toLowerCase().includes(filter.toLowerCase()))
      .forEach((craft) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" value="${craft}" name="craft"> ${craft}`;
        craftList.appendChild(label);
      });
  }

  renderCrafts();

  if (craftSearch) {
    craftSearch.addEventListener('input', (event) => renderCrafts(event.target.value));
  }

  if (craftList) {
    craftList.addEventListener('change', () => {
      const selected = Array.from(craftList.querySelectorAll('input[type=checkbox]:checked')).map((item) => item.value);
      if (experienceWrap) {
        experienceWrap.classList.toggle('hidden', selected.length === 0);
      }

      if (!experienceList) return;
      experienceList.innerHTML = '';
      selected.forEach((craft) => {
        const wrap = document.createElement('div');
        wrap.className = 'exp-row';
        wrap.innerHTML = `<strong>${craft}</strong><div class="exp-options">`
          + `<label><input type="radio" name="exp-${craft}" value="Beginner"> Beginner</label>`
          + `<label><input type="radio" name="exp-${craft}" value="Intermediate"> Intermediate</label>`
          + `<label><input type="radio" name="exp-${craft}" value="Expert"> Expert</label>`
          + '</div>';
        experienceList.appendChild(wrap);
      });
    });
  }

  const steps = Array.from(document.querySelectorAll('.step'));
  let currentStep = 0;
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  const submitBtn = document.getElementById('submit-wizard');

  function showStep(index) {
    if (steps.length === 0) return;
    steps.forEach((step) => step.classList.add('hidden'));
    steps[index].classList.remove('hidden');

    if (prevBtn) prevBtn.classList.toggle('hidden', index === 0);
    if (nextBtn) nextBtn.classList.toggle('hidden', index === steps.length - 1);
    if (submitBtn) submitBtn.classList.toggle('hidden', index !== steps.length - 1);
  }

  showStep(currentStep);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentStep = Math.max(0, currentStep - 1);
      showStep(currentStep);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentStep = Math.min(steps.length - 1, currentStep + 1);
      showStep(currentStep);
    });
  }

  function generateCraftSuggestion(choice) {
    const verbs = {
      Crocheting: 'crochet a cozy coaster',
      Knitting: 'knit a simple scarf',
      Watercolor: 'paint a loose floral watercolor',
      'Acrylic painting': 'paint a small acrylic portrait',
      'Needle felting': 'make a small felted animal',
      'Stained glass': 'craft a suncatcher'
    };
    return verbs[choice] || `make a ${choice.toLowerCase()} project`;
  }

  function generateTips(_choice, level) {
    if (level === 'Beginner') {
      return 'Start small: use beginner kits, follow step-by-step videos, and give yourself small goals.';
    }
    if (level === 'Intermediate') {
      return 'Try a slightly bigger pattern and experiment with color palettes.';
    }
    return 'Challenge yourself with advanced patterns and teach someone else.';
  }

  function runConfetti() {
    const conf = document.getElementById('confetti');
    if (!conf) return;
    conf.classList.remove('hidden');
    conf.innerHTML = '';

    const emojis = ['🧶', '✂️', '🎨', '🪡', '🧵', '🖌️', '📐', '🧩'];
    for (let i = 0; i < 40; i += 1) {
      const el = document.createElement('div');
      el.className = 'c-item';
      el.style.position = 'fixed';
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = '-10px';
      el.style.fontSize = `${12 + Math.random() * 28}px`;
      el.style.opacity = '0.95';
      el.style.transform = `rotate(${Math.random() * 360}deg)`;
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      conf.appendChild(el);

      const duration = 3000 + Math.random() * 2000;
      el.animate(
        [
          { transform: el.style.transform, top: '-10px' },
          { transform: el.style.transform, top: `${60 + Math.random() * 80}vh` }
        ],
        { duration, iterations: 1, easing: 'cubic-bezier(.2,.8,.2,1)' }
      );

      setTimeout(() => el.remove(), 3500);
    }

    setTimeout(() => conf.classList.add('hidden'), 3800);
  }

  function showCelebrateModal() {
    const keep = confirm('Congrats, you crafty thing you!\nHow do you want to celebrate?\nPress OK to "Share my craft" or Cancel to "Keep crafting".');
    if (keep) {
      alert('Share flow will be implemented later.');
    }
  }

  function showResultFor(data) {
    if (result) result.classList.remove('hidden');
    if (wizard) wizard.classList.add('hidden');
    smoothScrollTo(result);

    const choice = data.crafts && data.crafts.length
      ? data.crafts[Math.floor(Math.random() * data.crafts.length)]
      : crafts[Math.floor(Math.random() * crafts.length)];

    const title = `Try: ${generateCraftSuggestion(choice)}`;
    const resultTitle = document.getElementById('result-title');
    if (resultTitle) resultTitle.textContent = title;

    const tags = [data.time || 'Any time']
      .concat(data.crafts.length ? data.crafts : [])
      .concat(data.methods.length ? data.methods : []);

    const tagWrap = document.getElementById('result-tags');
    if (tagWrap) {
      tagWrap.innerHTML = '';
      tags.forEach((tag) => {
        const chip = document.createElement('span');
        chip.className = 'tag';
        chip.textContent = tag;
        tagWrap.appendChild(chip);
      });
    }

    const desc = document.getElementById('result-desc');
    if (desc) {
      desc.textContent = `We suggest ${choice.toLowerCase()} based on your choices. This suggestion is tailored to ${data.time || 'your availability'} and preferred learning methods.`;
    }

    const resourceList = document.getElementById('resource-list');
    if (resourceList) {
      resourceList.innerHTML = '';

      const overview = document.createElement('div');
      overview.innerHTML = `<h4>Overview</h4><p>Quick intro to ${choice.toLowerCase()}.</p>`;
      resourceList.appendChild(overview);

      if (data.methods.includes('Video tutorial') || data.methods.length === 0) {
        const video = document.createElement('div');
        video.innerHTML = `<a href="https://www.youtube.com/results?search_query=${encodeURIComponent(`${choice} tutorial`)}">Video tutorial for ${choice}</a>`;
        resourceList.appendChild(video);
      }

      if (data.methods.includes('Photos or diagrams') || data.methods.length === 0) {
        const photos = document.createElement('div');
        photos.innerHTML = `<a href="https://www.pinterest.com/search/pins/?q=${encodeURIComponent(choice)}">Image references on Pinterest</a>`;
        resourceList.appendChild(photos);
      }

      const buy = document.createElement('div');
      buy.innerHTML = `<a href="https://www.google.com/search?q=${encodeURIComponent(`${choice} beginner supplies`)}">Where to buy beginner supplies for ${choice}</a>`;
      resourceList.appendChild(buy);

      const tips = document.createElement('div');
      tips.innerHTML = `<h4>Tips</h4><p>${generateTips(choice, data.exp[choice] || 'Beginner')}</p>`;
      resourceList.appendChild(tips);
    }

    const shuffle = document.getElementById('shuffle');
    if (shuffle) {
      shuffle.onclick = (event) => {
        event.preventDefault();
        showResultFor(data);
      };
    }

    const craftedBtn = document.getElementById('crafted-btn');
    if (craftedBtn) {
      craftedBtn.onclick = () => {
        runConfetti();
        setTimeout(showCelebrateModal, 600);
      };
    }
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const timeInput = document.querySelector('input[name=time]:checked');
      const checkedCrafts = Array.from(document.querySelectorAll('#craft-list input[type=checkbox]:checked')).map((item) => item.value);
      const checkedMethods = Array.from(document.querySelectorAll('input[name=method]:checked')).map((item) => item.value);

      const data = {
        time: timeInput ? timeInput.value : '',
        crafts: checkedCrafts,
        exp: {},
        promptSame: !!document.getElementById('prompt-same')?.checked,
        methods: checkedMethods
      };

      checkedCrafts.forEach((craft) => {
        const expInput = document.querySelector(`input[name=exp-${craft}]:checked`);
        data.exp[craft] = expInput ? expInput.value : 'Beginner';
      });

      showResultFor(data);
    });
  }
});
