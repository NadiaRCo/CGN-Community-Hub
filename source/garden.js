/* ── Cozy secret-garden layer (injected by build_comm.py at GARDEN_JS) ──
   Welcome banner, page companions, garden almanac (live Ottawa forecast from
   Open-Meteo; monthly jobs from content/hub.json → "almanac"), incident form. */
const G_ART={about:'bluebird',article:'armchair',find:'rabbit',start:'watering-can',coordinators:'hedgehog',guides:'carrots',faq:'snail','ws-upcoming':'chair-tools','ws-past':'greenhouse','ws-slides':'dragonfly',resources:'plant-shelf',contact:'door',incident:'lighthouse'};
const gImg=(n,c)=>`<img class="${c}" src="assets/garden/${n}.webp" alt="" aria-hidden="true">`;
function head(title,sub,key){const a=G_ART[key];return `<div class="page-head${a?' has-art':''}"><h1 class="page-title">${title}</h1>${sub?`<p class="page-sub">${sub}</p>`:''}${a?gImg(a,'page-critter'):''}</div><div class="tulips" aria-hidden="true"></div>`}
function gardenSideArt(){return `<div class="sidebar-art">${gImg('shed','side-shed')}</div>`}
function gardenHero(){
  return `<div class="hero">${gImg('wisteria','hero-wisteria')}
    <div class="hero-text"><img class="hero-logo" src="assets/garden/cgn-logo.png" width="842" height="280" alt="Community Gardening Network of Ottawa — Réseau de jardinage communautaire d’Ottawa">
      <span class="welcome" id="heroTitle"></span><p class="tag" id="heroTag"></p></div>
    <div class="hero-scene">${gImg('barn-landscape','land')}
      <div class="hero-bee">${gImg('bee','bee')}<div class="g-bubble"><span id="dayGreeting"></span></div></div>${gImg('butterfly','hero-fly')}</div></div>`;
}

/* ── Almanac ── */
let G_WX=null; /* null = loading, false = unavailable, object = Open-Meteo "daily" block */
function gSeason(d){const m=d.getMonth()+1;
  if(m===12||m<=2) return {ico:'❄️',en:'Winter',fr:'Hiver',sen:'Rest, dream and plan',sfr:'Repos, rêves et plans'};
  if(m<=4) return {ico:'🌱',en:'Early spring',fr:'Début du printemps',sen:'Seed-starting time',sfr:'Le temps des semis'};
  if(m===5) return {ico:'🌷',en:'Planting time',fr:'Temps des plantations',sen:'Watch for the last frost',sfr:'Surveillez le dernier gel'};
  if(m<=8) return {ico:'☀️',en:'Summer',fr:'Été',sen:'Grow, water and harvest',sfr:'Cultiver, arroser, récolter'};
  if(m<=10) return {ico:'🍂',en:'Fall harvest',fr:'Récoltes d’automne',sen:'Harvest, save seed, plant garlic',sfr:'Récolter, garder des semences, planter l’ail'};
  return {ico:'🍁',en:'Late fall',fr:'Fin d’automne',sen:'Putting the garden to bed',sfr:'Le jardin se prépare pour l’hiver'}}
function gJob(key,i,on){try{let a=JSON.parse(localStorage.getItem(key)||'[]');a=a.filter(x=>x!==i);if(on)a.push(i);localStorage.setItem(key,JSON.stringify(a))}catch(e){}}
function gardenAlmanac(){
  const fr=lang==='fr',now=new Date(),s=gSeason(now),m=String(now.getMonth()+1),A=HUB.almanac||{},mo=(A.months||{})[m]||{};
  const L=o=>o?(o[lang]||o.en||[]):[];
  const key='cgn-jobs-'+now.getFullYear()+'-'+m;let done=[];try{done=JSON.parse(localStorage.getItem(key)||'[]')}catch(e){}
  const jobs=L(mo.jobs).map((j,i)=>`<li><label><input type="checkbox" class="g-check" ${done.includes(i)?'checked':''} onchange="gJob('${key}',${i},this.checked)"><span>${esc(j)}</span></label></li>`).join('');
  const veg=L(mo.veg).map(v=>`<li>${esc(v)}</li>`).join('');
  const month=now.toLocaleDateString(fr?'fr-CA':'en-CA',{month:'long'});
  return `<div class="card almanac" id="almanac"><span class="corner-tag green">${fr?'Almanach':'Almanac'} 🌦️</span>
    <h3>${gImg('frog','alm-frog')} ${fr?'Almanach du jardin · Ottawa':'Garden almanac · Ottawa'}</h3>
    <div class="alm-tiles">
      <div class="alm-tile"><div class="alm-lbl">${fr?'Saison':'Season'}</div><div class="alm-val alm-txt">${s.ico} ${fr?s.fr:s.en}</div><div class="alm-sub">${fr?s.sfr:s.sen}</div></div>
      <div class="alm-tile"><div class="alm-lbl">${fr?'Gel':'Frost'}</div><div class="alm-val" id="almFrost">…</div><div class="alm-sub" id="almFrostSub">${fr?'Chargement des prévisions…':'Loading the forecast…'}</div></div>
      <div class="alm-tile"><div class="alm-lbl">${fr?'Pluie et neige':'Rain &amp; snow'}</div><div class="alm-val" id="almRain">…</div><div class="alm-sub" id="almRainSub"></div></div>
      <div class="alm-tile"><div class="alm-lbl">${fr?'Journée la plus douce':'Warmest day'}</div><div class="alm-val" id="almWarm">…</div><div class="alm-sub" id="almWarmSub"></div></div>
    </div>
    <div class="alm-week" id="almWeek" role="list" aria-label="${fr?'Prévisions sur 7 jours':'7-day forecast'}"></div>
    <div class="alm-cols">
      <div><h4 class="block-label" style="margin-top:0">${fr?'À faire au jardin en '+month:'Garden jobs for '+month}</h4><ul class="g-jobs">${jobs}</ul></div>
      <div class="alm-note"><h4 class="block-label">${fr?'Notes sur les légumes':'Veggie notes'}</h4><ul>${veg}</ul><p class="alm-frostline">${esc(T2(A.frost))}</p></div>
    </div>
    <p class="alm-src">${fr?t('draft_fr')+' ':''}${esc(T2(A.source_note))} <a href="#" onclick="go('guides');return false">${fr?'Guides de jardinage →':'Gardening Guides →'}</a> · ${fr?'Prévisions':'Forecast'}: <a href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo.com</a></p></div>`;
}
function gWxIcon(c){return c===0?'☀️':c<=2?'🌤️':c===3?'☁️':c<=48?'🌫️':c<=67?'🌧️':c<=77?'🌨️':c<=82?'🌦️':c<=86?'🌨️':'⛈️'}
function almanacFill(){
  const E=id=>document.getElementById(id); if(!E('almFrost')||G_WX===null) return;
  const fr=lang==='fr',loc=fr?'fr-CA':'en-CA';
  if(!G_WX||!G_WX.time){['almFrost','almRain','almWarm'].forEach(i=>E(i).textContent='—');
    E('almFrostSub').textContent=fr?'Prévisions non disponibles pour l’instant.':'Forecast unavailable right now.';
    E('almRainSub').innerHTML=`<a href="https://weather.gc.ca/" target="_blank" rel="noopener">${fr?'Météo Canada ↗':'Environment Canada ↗'}</a>`;E('almWarmSub').textContent='';return}
  const d=G_WX,n=d.time.length,lo=d.temperature_2m_min,hi=d.temperature_2m_max,pr=d.precipitation_sum,R=v=>Math.round(v);
  const day=(i,o)=>new Date(d.time[i]+'T12:00:00').toLocaleDateString(loc,o);
  let iMin=0,iMax=0;for(let i=1;i<n;i++){if(lo[i]<lo[iMin])iMin=i;if(hi[i]>hi[iMax])iMax=i}
  const frost=lo.filter(v=>v!==null&&v<=0).length,total=pr.reduce((a,b)=>a+(b||0),0);
  E('almFrost').innerHTML=`${frost}<span class="unit"> ${fr?(frost>1?'nuits':'nuit'):(frost===1?'night':'nights')}</span>`;
  E('almFrostSub').textContent=(fr?'de gel d’ici 7 jours · minimum ':'of frost in the next 7 days · coldest ')+R(lo[iMin])+'° ('+day(iMin,{weekday:'short'})+')';
  E('almRain').innerHTML=`${total>0&&total<10?total.toFixed(1):R(total)}<span class="unit"> mm</span>`;
  E('almRainSub').textContent=fr?'prévus d’ici 7 jours':'expected in the next 7 days';
  E('almWarm').innerHTML=`${R(hi[iMax])}<span class="unit">°C</span>`;
  E('almWarmSub').textContent=day(iMax,{weekday:'long'});
  E('almWeek').innerHTML=d.time.map((x,i)=>`<div class="alm-day${lo[i]<=0?' frost':''}" role="listitem" title="${day(i,{weekday:'long',month:'long',day:'numeric'})}"><div class="d">${day(i,{weekday:'short'})}</div><div class="i" aria-hidden="true">${gWxIcon(d.weather_code[i])}</div><div class="t">${R(hi[i])}°<small> ${R(lo[i])}°</small></div></div>`).join('');
}
function gLoadWx(){
  try{const c=JSON.parse(sessionStorage.getItem('cgn-wx')||'null');if(c&&Date.now()-c.t<3600e3){G_WX=c.d;almanacFill();return}}catch(e){}
  fetch('https://api.open-meteo.com/v1/forecast?latitude=45.4215&longitude=-75.6972&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America%2FToronto&forecast_days=7')
    .then(r=>r.ok?r.json():Promise.reject(r.status))
    .then(j=>{G_WX=j.daily;try{sessionStorage.setItem('cgn-wx',JSON.stringify({t:Date.now(),d:G_WX}))}catch(e){}almanacFill()})
    .catch(()=>{G_WX=false;almanacFill()});
}
function gardenInit(){
  const q=new URLSearchParams(location.search).get('sky'),h=new Date().getHours();
  document.body.dataset.sky=['dawn','day','dusk','night'].includes(q)?q:(h>=5&&h<8?'dawn':h<17?'day':h<20?'dusk':'night');
  gLoadWx();
}

/* ── Incident report (wording from Just Food's own EN + FR incident templates). Demo only: sends and stores nothing. ── */
function incidentHtml(){
  const fr=lang==='fr',L=(e,f)=>fr?f:e,req='<span class="req" aria-hidden="true">*</span>';
  const where=fr?['Maison de la ferme/bureau','Grange','Garage','Champ']:['Farmhouse/office','Barn','Garage','Field'];
  const types=fr?['Premiers soins','Accident avec blessures','Problème de santé','Violence ou harcèlement','Risque potentiel','Accident sans blessure (y compris les quasi-accidents et les dommages matériels)','Exclusion/interdiction d’un membre de la communauté, d’un participant au programme ou d’un membre du personnel','Activité anormale']
    :['First aid','Accident with injuries','Ill health','Violence or harassment','Potential risk','Non-injury accident (including near misses and property damage)','Community member or program participant/staff removal/ban','Abnormal activity'];
  const opt=(name,type,list,r)=>list.map((o,i)=>`<label><input type="${type}" name="${name}" value="${esc(o)}"${r&&i===0?' required':''}><span>${esc(o)}</span></label>`).join('')
    +`<label class="other"><input type="${type}" name="${name}" value="other"><span>${L('Other:','Autre :')}</span><input type="text" name="${name}Other" aria-label="${L('Other','Autre')}"></label>`;
  return head(L('Just Food: Incident Report','Just Food : Rapport d’incident'),'','incident')+`<div class="card"><span class="corner-tag yellow">${L('Example for review','Exemple pour révision')}</span>
    <div class="g-911" role="note"><strong>${L('In an emergency, call 911 first.','En cas d’urgence, composez d’abord le 911.')}</strong> ${L('This form is for reporting what happened afterwards.','Ce formulaire sert à signaler l’incident par la suite.')}</div>
    <div class="g-demo" role="note">${L('<strong>Example only:</strong> this form does not send or save anything yet. It is here for Kate to review.','<strong>Exemple seulement :</strong> ce formulaire n’envoie et n’enregistre rien pour l’instant. Il est ici pour la révision de Kate.')}</div>
    <p class="body-text">${L('Please complete this form and submit it to the JF Team as soon as possible after the incident.','Veuillez remplir ce formulaire et le soumettre à l’équipe de JF dès que possible après l’incident.')}</p>
    <p class="body-text"><strong>${L('This form should be used to report the following:','Ce formulaire doit servir à signaler ce qui suit :')}</strong> ${L('all injuries and first aid incidents, work-related accidents and ill health, violence or harassment, potential risk, community member or participant needing to be removed/prevented from future participation, abnormal activity (i.e. large dead animal), and non-injury accidents that could be dangerous (including near misses, property damage).','toutes les blessures et tous les incidents nécessitant des premiers soins, les accidents de travail et les problèmes de santé liés au travail, la violence ou le harcèlement, les risques potentiels, tout membre de la communauté ou participant devant être exclu ou empêché de participer à l’avenir, les activités anormales (p. ex. un gros animal mort) et les accidents sans blessure qui pourraient être dangereux (y compris les quasi-accidents et les dommages matériels).')}</p>
    <p class="body-text">${L('Any additional information should be emailed to director@justfood.ca and farm@justfood.ca','Tout renseignement supplémentaire doit être envoyé par courriel à director@justfood.ca et farm@justfood.ca')}</p>
    <p class="body-text" style="color:var(--ink-soft)">${L('* Indicates required question','* Indique une question obligatoire')}</p>
    <form class="g-form" id="incForm" onsubmit="return incidentSubmit(event)">
      <div><label class="cm-lab" for="incEmail">${L('Email','Courriel')}${req}</label><input class="cm-in" id="incEmail" type="email" required autocomplete="email"></div>
      <div><label class="cm-lab" for="incName">${L('Full Name (person reporting)','Nom complet (personne qui fait le signalement)')}${req}</label><input class="cm-in" id="incName" type="text" required autocomplete="name"></div>
      <div><label class="cm-lab" for="incDate">${L('Date of incident','Date de l’incident')}${req}</label><input class="cm-in" id="incDate" type="date" required style="max-width:240px"></div>
      <fieldset><legend>${L('Where did the incident occur?','Où l’incident s’est-il produit?')}${req}</legend><div class="g-opts">${opt('incWhere','radio',where,true)}</div></fieldset>
      <fieldset><legend>${L('Type of incident','Type d’incident')}${req}</legend><div class="g-opts">${opt('incType','checkbox',types,false)}</div><p class="g-err" id="incTypeErr" role="alert">${L('Please choose at least one type of incident.','Veuillez choisir au moins un type d’incident.')}</p></fieldset>
      <div><label class="cm-lab" for="incWhat">${L('What happened? (ex: what was being done, who was involved, what was said, equipment used, etc.) Please provide as much detail as possible.','Que s’est-il passé? (p. ex. : ce qui était en cours, les personnes impliquées, ce qui a été dit, l’équipement utilisé, etc.) Veuillez fournir autant de détails que possible.')}${req}</label><textarea class="cm-in" id="incWhat" rows="5" required></textarea></div>
      <div><label class="cm-lab" for="incAction">${L('What was the immediate action taken to make the situation safe? (ex: information given, description of first aid given, were Just Food staff alerted, etc.)','Quelle mesure immédiate a été prise pour sécuriser la situation? (p. ex. : renseignements communiqués, description des premiers soins prodigués, le personnel de Just Food a-t-il été alerté, etc.)')}${req}</label><textarea class="cm-in" id="incAction" rows="4" required></textarea></div>
      <div><label class="cm-lab" for="incMore">${L('Additional information (optional)','Renseignements supplémentaires (facultatif)')}</label>
        <p class="body-text" style="margin:4px 0 0;font-size:14.5px;color:var(--ink-soft)">${L('Please email any additional information you have collected (photos, videos, documents, etc) to director@justfood.ca with the subject line “Just Food Incident Report - Additional Information”. Please include any other details that may help us understand the incident, including contributing factors, prior concerns, etc.','Veuillez envoyer par courriel tout renseignement supplémentaire que vous avez recueilli (photos, vidéos, documents, etc.) à director@justfood.ca avec l’objet « Just Food Incident Report - Additional Information ». Veuillez inclure tout autre détail pouvant nous aider à comprendre l’incident, y compris les facteurs contributifs, les préoccupations antérieures, etc.')}</p>
        <textarea class="cm-in" id="incMore" rows="3"></textarea></div>
      <div class="wk-btns"><button class="send-btn" type="submit">${L('Submit report (example)','Soumettre le rapport (exemple)')}</button><button class="send-btn ghost" type="button" onclick="window.print()">${L('Print or save a copy','Imprimer ou enregistrer une copie')}</button></div>
      <div class="cm-ok" id="incOk" role="status">${L('Thank you. This is an example, so nothing was sent or saved. In the live version, this report would go to the Just Food team.','Merci. Ceci est un exemple : rien n’a été envoyé ni enregistré. Dans la version finale, ce rapport serait transmis à l’équipe de Just Food.')}</div>
    </form></div>`;
}
function incidentSubmit(ev){
  ev.preventDefault();const f=ev.target,err=document.getElementById('incTypeErr'),ok=document.getElementById('incOk');
  const any=f.querySelectorAll('input[name=incType]:checked').length>0;err.style.display=any?'none':'block';
  if(!any){err.scrollIntoView({block:'center'});return false}
  ok.style.display='block';ok.scrollIntoView({block:'center'});track('view','incident form example','incident');return false;
}
