/* ── Cozy secret-garden layer (injected by build_comm.py at GARDEN_JS) ──
   Welcome banner, page companions, garden almanac (live Ottawa forecast from
   Open-Meteo; monthly jobs from content/hub.json → "almanac"), incident form. */
const G_ART={about:'bluebird',article:'armchair',find:'rabbit',start:'watering-can',coordinators:'hedgehog',guides:'carrots',faq:'snail','ws-upcoming':'chair-tools','ws-past':'greenhouse','ws-slides':'dragonfly',resources:'shed-scene',contact:'door',incident:'lighthouse'};
/* Hand-drawn icon set in CGN colours (brick bowl, leaf green, straw, wood). Used in the sidebar, page titles and home tiles. */
const G_ICO={
 home:`<path d="M4 15 16 5l12 10z" fill="#F38DB5"/><path d="M7 15v12h18V15" fill="#E9C592"/><path d="M13.5 27v-7.5h5V27" fill="#8A5A30"/><circle cx="22" cy="19.5" r="1.9" fill="#CFE6F7"/>`,
 about:`<path d="M5.5 16.5h21c0 6-4.6 10.5-10.5 10.5S5.5 22.5 5.5 16.5z" fill="#A94A22"/><path d="M16 16.5V8.5"/><path d="M16 12.5c-3.6 0-5.4-2.2-5.4-5 3.4 0 5.4 2 5.4 5z" fill="#5E9E49"/><path d="M16 10.5c3.6 0 5.4-2.2 5.4-5-3.4 0-5.4 2-5.4 5z" fill="#5E9E49"/>`,
 article:`<path d="M8 5h12.5L25 9.5V27H8z" fill="#FFF8EA"/><path d="M20.5 5v4.5H25"/><path d="M11.5 14h9.5M11.5 18h9.5M11.5 22h5"/><path d="M24.5 25c0-3.4-2.2-5-4.8-5 0 3.4 2 5 4.8 5z" fill="#5E9E49"/>`,
 find:`<path d="M16 28S7 19.6 7 12.6C7 7.8 11 4 16 4s9 3.8 9 8.6C25 19.6 16 28 16 28z" fill="#D9534A"/><circle cx="16" cy="12.5" r="3.6" fill="#FFF8EA"/>`,
 start:`<path d="M5 20h22v7.5H5z" fill="#D2A066"/><path d="M5 23.7h22"/><path d="M16 20v-8"/><path d="M16 15.5c-3.4 0-5-2-5-4.6 3.2 0 5 1.8 5 4.6z" fill="#5E9E49"/><path d="M16 13.5c3.4 0 5-2 5-4.6-3.2 0-5 1.8-5 4.6z" fill="#5E9E49"/><path d="M9.5 20v-2.6M22.5 20v-2.6"/>`,
 coordinators:`<ellipse cx="16" cy="20.5" rx="12" ry="4.6" fill="#F6CE5F"/><path d="M9.6 19.6C9.6 12.5 12 8 16 8s6.4 4.5 6.4 11.6" fill="#F6CE5F"/><path d="M9.8 17.6c2.4 1.6 10 1.6 12.4 0" stroke="#C0477C" stroke-width="2.6"/>`,
 guides:`<path d="M16 13c-3-2-7-2-11-1v14c4-1 8-1 11 1 3-2 7-2 11-1V12c-4-1-8-1-11 1z" fill="#FFF8EA"/><path d="M16 13v14"/><path d="M16 13V6.5"/><path d="M16 9.5c-2.6 0-3.8-1.5-3.8-3.5 2.5 0 3.8 1.4 3.8 3.5z" fill="#5E9E49"/><path d="M16 8.3c2.6 0 3.8-1.5 3.8-3.5-2.5 0-3.8 1.4-3.8 3.5z" fill="#5E9E49"/>`,
 'ws-upcoming':`<rect x="5" y="7" width="22" height="20" rx="3" fill="#FFF8EA"/><path d="M5 12.5V10a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2.5z" fill="#5E9E49"/><path d="M11 4.5v5M21 4.5v5"/><g fill="#F38DB5" stroke-width="1.2"><circle cx="16" cy="16.6" r="2.1"/><circle cx="16" cy="23" r="2.1"/><circle cx="12.8" cy="19.8" r="2.1"/><circle cx="19.2" cy="19.8" r="2.1"/></g><circle cx="16" cy="19.8" r="1.7" fill="#F6CE5F" stroke-width="1.2"/>`,
 'ws-past':`<rect x="4.5" y="6.5" width="23" height="19" rx="2.5" fill="#D2A066"/><rect x="8" y="10" width="16" height="12" fill="#CFE6F7"/><path d="M8 22l5-6.5 3.8 4 2.8-2.4L24 22z" fill="#5E9E49"/><circle cx="20.4" cy="13.4" r="1.6" fill="#F6CE5F" stroke-width="1.2"/>`,
 'ws-slides':`<rect x="5" y="5.5" width="22" height="15.5" rx="2" fill="#FFF8EA"/><path d="M16 21v3.5M10.5 28l5.5-3.5 5.5 3.5"/><path d="M9 10.5h6M9 14h4"/><path d="M23 16.8c0-3.6-2.4-5.2-5-5.2 0 3.6 2.2 5.2 5 5.2z" fill="#5E9E49"/>`,
 resources:`<rect x="6" y="20.5" width="20" height="5.5" rx="1.3" fill="#1A6B54"/><rect x="8" y="15" width="18" height="5.5" rx="1.3" fill="#F6CE5F"/><rect x="6.5" y="9.5" width="17" height="5.5" rx="1.3" fill="#D9534A"/><path d="M19.5 9.5c0-3 1.9-4.6 4.4-4.6 0 3-1.7 4.6-4.4 4.6z" fill="#5E9E49"/>`,
 faq:`<path d="M6 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-8l-5 5v-5H9a3 3 0 0 1-3-3z" fill="#CFE6F7"/><path d="M13.4 10.8c0-1.5 1.1-2.5 2.6-2.5s2.6 1 2.6 2.4c0 1.9-2.6 2-2.6 4"/><circle cx="16" cy="17.6" r=".7" fill="#4A3426"/>`,
 contact:`<rect x="5" y="8.5" width="22" height="16" rx="2.5" fill="#FFF8EA"/><path d="M5.5 10l10.5 8 10.5-8"/><path d="M16 23.4c-2.6-1.9-3.2-3.1-2.3-4 .7-.8 1.8-.5 2.3.3.5-.8 1.6-1.1 2.3-.3.9.9.3 2.1-2.3 4z" fill="#F38DB5" stroke-width="1.2"/>`,
 incident:`<rect x="5" y="10" width="22" height="16.5" rx="3" fill="#FFF8EA"/><path d="M12 10V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M16 14v8.5M11.8 18.2h8.4" stroke="#D9534A" stroke-width="3.2"/>`,
 signpost:`<path d="M16 4.5V28"/><path d="M8 7.5h14l3 3-3 3H8z" fill="#E9C592"/><path d="M24 16.5H10l-3 3 3 3h14z" fill="#A9D9A0"/>`,
 barn:`<path d="M5 15l4.5-6.5h13L27 15z" fill="#B37B46"/><path d="M7 15h18v12H7z" fill="#D9534A"/><path d="M12.5 27v-8h7v8" fill="#FFF8EA"/><path d="M12.5 19l7 8M19.5 19l-7 8" stroke-width="1.2"/>`,
 leaf:`<path d="M6 26C6 13 14 6 27 5c0 13-7 21-21 21z" fill="#A9D9A0"/><path d="M6 26C11 19 17 13 23 9"/><path d="M12.5 19.5V14M17 15h5" stroke-width="1.3"/>`
};
const gIco=k=>G_ICO[k]?`<svg class="g-ico" viewBox="0 0 32 32" fill="none" stroke="#4A3426" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${G_ICO[k]}</svg>`:'';
const gImg=(n,c)=>`<img class="${c}" src="assets/garden/${n}.webp" alt="" aria-hidden="true">`;
function head(title,sub,key){const a=G_ART[key];return `<div class="page-head${a?' has-art':''}"><h1 class="page-title">${gIco(key)}${title}</h1>${sub?`<p class="page-sub">${sub}</p>`:''}${a?gImg(a,a.endsWith('-scene')?'page-critter scene':'page-critter'):''}</div><div class="tulips" aria-hidden="true"></div>`}
function gardenSideArt(){return `<div class="sidebar-art">${gImg('shed','side-shed')}</div>`}
function gardenHero(){
  return `<div class="hero">${gImg('wisteria','hero-wisteria')}${gImg('wisteria','hero-wisteria r')}
    <div class="hero-text"><img class="hero-logo" src="assets/garden/cgn-logo.png" width="842" height="280" alt="Community Gardening Network of Ottawa — Réseau de jardinage communautaire d’Ottawa">
      <span class="welcome" id="heroTitle"></span><p class="tag" id="heroTag"></p></div>
    <div class="hero-scene">${gImg('garden-scene','land')}
      <div class="hero-bee">${gImg('bee','bee')}<div class="g-bubble"><span id="dayGreeting"></span></div></div></div></div>`;
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
