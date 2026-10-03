"use strict";
/* ===== Icons ===== */
const I={
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6"/></svg>',
 plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M12 5v14M5 12h14"/></svg>',
 minus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M5 12h14"/></svg>',
 back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M15 19l-7-7 7-7"/></svg>',
 chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"/></svg>',
 edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>',
 trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m2 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg>',
 pdf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>',
 gps:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
 tree:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.7 2 6 4.9 6 8.4c0 2.6 1.6 4.9 3.9 5.9V19a2.1 2.1 0 004.2 0v-4.7c2.3-1 3.9-3.3 3.9-5.9C18 4.9 15.3 2 12 2z"/></svg>',
 trees:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 10a4 4 0 10-7 2.5V16h6v-3.5A4 4 0 0010 10z"/><path d="M18 8a4 4 0 10-6 3.5V20h5v-8.5A4 4 0 0018 8z"/></svg>',
 users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path d="M2 20a7 7 0 0114 0"/><circle cx="17" cy="8" r="2.5"/><path d="M16 13a6 6 0 016 6"/></svg>',
 helmet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 14a8 8 0 0116 0M2 14h20M9 14V8a2 2 0 012-2h0a2 2 0 012 2"/></svg>',
 calc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h2M12 10h2M16 10h0M8 14h2M12 14h2M8 18h6"/></svg>',
 climb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="14" cy="5" r="2"/><path d="M14 8l-3 4 3 2v6M11 12l-4 1M14 14l3 3M8 22l3-4"/></svg>',
 arbor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2"/></svg>',
 warn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/><path d="M12 9v4M12 17h0"/></svg>',
 doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',
 saw:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 14l11-3 7 2v3a2 2 0 01-2 2H6a3 3 0 01-3-3z"/><path d="M3 14l2-2 2 1 2-2 2 1 2-2"/></svg>',
 offer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M9 9h4M9 13h6M9 17h6"/></svg>',
 cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
 cam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>',
 pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
 dl:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
 up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>',
 copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>',
 eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>',
 folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>',
};
/* ===== Storage ===== */
const DB={get(k,d){try{const v=localStorage.getItem('bw_'+k);return v===null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('bw_'+k,JSON.stringify(v))}catch(e){toast('Speicher voll – Fotos reduzieren')}}};
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const esc=s=>(s==null?'':String(s)).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmtDate=iso=>{if(!iso)return '–';const d=new Date(iso);return isNaN(d)?iso:d.toLocaleDateString('de-DE')};
const todayISO=()=>new Date().toISOString().slice(0,10);
const eur=n=>(Number(n)||0).toLocaleString('de-DE',{minimumFractionDigits:2,maximumFractionDigits:2})+' €';
function val(id){const e=document.getElementById(id);return e?e.value:''}
function num(id){return parseFloat(val(id))||0}
const IDB={
 open(){return IDB._p||(IDB._p=new Promise((res,rej)=>{const r=indexedDB.open('baumwerk',2);r.onupgradeneeded=e=>{const d=e.target.result;if(!d.objectStoreNames.contains('docs'))d.createObjectStore('docs',{keyPath:'id'});if(!d.objectStoreNames.contains('fotos'))d.createObjectStore('fotos',{keyPath:'id'})};r.onsuccess=e=>res(e.target.result);r.onerror=e=>rej(e)}))},
 all(s){return IDB.open().then(db=>new Promise((res,rej)=>{const t=db.transaction(s,'readonly').objectStore(s).getAll();t.onsuccess=()=>res(t.result||[]);t.onerror=()=>rej(t.error)}))},
 get(s,id){return IDB.open().then(db=>new Promise((res,rej)=>{const t=db.transaction(s,'readonly').objectStore(s).get(id);t.onsuccess=()=>res(t.result);t.onerror=()=>rej(t.error)}))},
 put(s,o){return IDB.open().then(db=>new Promise((res,rej)=>{const t=db.transaction(s,'readwrite').objectStore(s).put(o);t.onsuccess=()=>res();t.onerror=()=>rej(t.error)}))},
 del(s,id){return IDB.open().then(db=>new Promise((res,rej)=>{const t=db.transaction(s,'readwrite').objectStore(s).delete(id);t.onsuccess=()=>res();t.onerror=()=>rej(t.error)}))},
};
const DOK_KAT=['Gewerbeanmeldung','Versicherungsnachweis','Schulung / Zertifikat','Ärztliche Eignung (G25/G41)','Führerschein','Sachkundenachweis','Wartung / Prüfung','Sonstiges'];

let meineDaten=Object.assign({typ:'firma',name:'Baumdienst Hagen',adresse:'',plz:'',stadt:'Hamburg',email:'info@beetlefortech.com',telefon:'',idnr:'',bankName:'',iban:'',logo:'',logoInDocs:false,fussnote:''},DB.get('meineDaten',{}));
let settings=Object.assign({units:'metric',ust:19,preisModus:'inkl'},DB.get('settings',{}));
const saveMD=()=>DB.set('meineDaten',meineDaten); const saveSettings=()=>DB.set('settings',settings);

/* ===== Baumarten (DE + Latein) ===== */
const TREES=[
 {de:'Ahorn, Berg-',la:'Acer pseudoplatanus',cat:'laub',d:870},{de:'Ahorn, Spitz-',la:'Acer platanoides',cat:'laub',d:870},{de:'Ahorn, Feld-',la:'Acer campestre',cat:'laub',d:900},
 {de:'Apfel, Wild-',la:'Malus sylvestris',cat:'laub',d:900},{de:'Birke, Hänge-',la:'Betula pendula',cat:'laub',d:900},{de:'Birke, Moor-',la:'Betula pubescens',cat:'laub',d:900},
 {de:'Birne, Wild-',la:'Pyrus pyraster',cat:'laub',d:900},{de:'Buche, Rot-',la:'Fagus sylvatica',cat:'laub',d:1000},{de:'Eberesche / Vogelbeere',la:'Sorbus aucuparia',cat:'laub',d:850},
 {de:'Eiche, Stiel-',la:'Quercus robur',cat:'laub',d:1080},{de:'Eiche, Trauben-',la:'Quercus petraea',cat:'laub',d:1080},{de:'Eiche, Rot-',la:'Quercus rubra',cat:'laub',d:1000},
 {de:'Elsbeere',la:'Sorbus torminalis',cat:'laub',d:950},{de:'Erle, Schwarz-',la:'Alnus glutinosa',cat:'laub',d:690},{de:'Erle, Grau-',la:'Alnus incana',cat:'laub',d:690},
 {de:'Esche, Gemeine',la:'Fraxinus excelsior',cat:'laub',d:950},{de:'Götterbaum',la:'Ailanthus altissima',cat:'laub',d:700},{de:'Hainbuche / Weißbuche',la:'Carpinus betulus',cat:'laub',d:1080},
 {de:'Kastanie, Ross-',la:'Aesculus hippocastanum',cat:'laub',d:760},{de:'Kastanie, Edel-',la:'Castanea sativa',cat:'laub',d:900},{de:'Kirsche, Vogel-',la:'Prunus avium',cat:'laub',d:890},
 {de:'Linde, Sommer-',la:'Tilia platyphyllos',cat:'laub',d:730},{de:'Linde, Winter-',la:'Tilia cordata',cat:'laub',d:730},{de:'Mehlbeere',la:'Sorbus aria',cat:'laub',d:900},
 {de:'Pappel, Schwarz-',la:'Populus nigra',cat:'laub',d:760},{de:'Pappel, Silber-',la:'Populus alba',cat:'laub',d:700},{de:'Pappel, Zitter- / Espe',la:'Populus tremula',cat:'laub',d:700},
 {de:'Platane',la:'Platanus × hispanica',cat:'laub',d:870},{de:'Robinie / Scheinakazie',la:'Robinia pseudoacacia',cat:'laub',d:880},{de:'Speierling',la:'Sorbus domestica',cat:'laub',d:950},
 {de:'Trompetenbaum',la:'Catalpa bignonioides',cat:'laub',d:600},{de:'Tulpenbaum',la:'Liriodendron tulipifera',cat:'laub',d:650},{de:'Ulme, Berg-',la:'Ulmus glabra',cat:'laub',d:950},
 {de:'Ulme, Feld-',la:'Ulmus minor',cat:'laub',d:950},{de:'Ulme, Flatter-',la:'Ulmus laevis',cat:'laub',d:950},{de:'Walnuss',la:'Juglans regia',cat:'laub',d:900},
 {de:'Weide, Sal-',la:'Salix caprea',cat:'laub',d:750},{de:'Weide, Silber-',la:'Salix alba',cat:'laub',d:750},{de:'Weide, Bruch-',la:'Salix fragilis',cat:'laub',d:750},
 {de:'Douglasie',la:'Pseudotsuga menziesii',cat:'nadel',d:700},{de:'Eibe',la:'Taxus baccata',cat:'nadel',d:900},{de:'Fichte, Gemeine',la:'Picea abies',cat:'nadel',d:800},
 {de:'Kiefer, Wald-',la:'Pinus sylvestris',cat:'nadel',d:850},{de:'Kiefer, Schwarz-',la:'Pinus nigra',cat:'nadel',d:850},{de:'Lärche, Europäische',la:'Larix decidua',cat:'nadel',d:840},
 {de:'Lebensbaum / Thuja',la:'Thuja occidentalis',cat:'nadel',d:600},{de:'Mammutbaum, Berg-',la:'Sequoiadendron giganteum',cat:'nadel',d:700},{de:'Scheinzypresse',la:'Chamaecyparis',cat:'nadel',d:600},
 {de:'Tanne, Weiß-',la:'Abies alba',cat:'nadel',d:870},{de:'Wacholder, Gemeiner',la:'Juniperus communis',cat:'nadel',d:800},{de:'Zeder',la:'Cedrus',cat:'nadel',d:700},
 {de:'Berberitze',la:'Berberis vulgaris',cat:'strauch'},{de:'Brombeere',la:'Rubus fruticosus',cat:'strauch'},{de:'Buchsbaum',la:'Buxus sempervirens',cat:'strauch'},
 {de:'Faulbaum',la:'Frangula alnus',cat:'strauch'},{de:'Flieder',la:'Syringa vulgaris',cat:'strauch'},{de:'Forsythie',la:'Forsythia',cat:'strauch'},
 {de:'Hartriegel, Roter',la:'Cornus sanguinea',cat:'strauch'},{de:'Hasel, Gemeine',la:'Corylus avellana',cat:'strauch'},{de:'Holunder, Schwarzer',la:'Sambucus nigra',cat:'strauch'},
 {de:'Hundsrose / Heckenrose',la:'Rosa canina',cat:'strauch'},{de:'Kornelkirsche',la:'Cornus mas',cat:'strauch'},{de:'Liguster, Gemeiner',la:'Ligustrum vulgare',cat:'strauch'},
 {de:'Pfaffenhütchen',la:'Euonymus europaeus',cat:'strauch'},{de:'Sanddorn',la:'Hippophae rhamnoides',cat:'strauch'},{de:'Schlehe / Schwarzdorn',la:'Prunus spinosa',cat:'strauch'},
 {de:'Schneeball, Gemeiner',la:'Viburnum opulus',cat:'strauch'},{de:'Weißdorn, Eingriffliger',la:'Crataegus monogyna',cat:'strauch'},{de:'Weißdorn, Zweigriffliger',la:'Crataegus laevigata',cat:'strauch'},
];
function treeFind(f){const L=(window.ALLTREES&&window.ALLTREES.length)?window.ALLTREES:[];return TREES.find(f)||L.find(f)}
const CATLABEL={laub:'Laubbaum',nadel:'Nadelbaum',strauch:'Strauch'};
function treeOptions(sel){const L=(window.ALLTREES&&window.ALLTREES.length)?window.ALLTREES:TREES;return '<option value="">— Baumart wählen —</option>'+L.slice().sort((a,b)=>a.de.localeCompare(b.de,'de')).map(t=>'<option value="'+esc(t.de)+'" '+(sel===t.de?'selected':'')+'>'+esc(t.de)+' ('+esc(t.la)+')</option>').join('')}

/* ===== Dienstleistungen (Leistungskatalog) ===== */
const DURCH_MIT=['SKT','Hubarbeitsbühne','Kran','vom Boden aus'];
const DIENSTE=[
 {key:'baumschnitt',titel:'Baumschnitt',pos:['Notfall-Baumschnitt','Totholzentfernung','Kronenauslichtung','Kronenhebung','Kronenreduzierung','Kopfschnitt','Anleitung für Jungbäume','Wiederherstellung der Krone','Entfernung von Zapfen']},
 {key:'faellung',titel:'Baumfällung und Baumentfernung',pos:['Baumfällung am Boden','Baumentfernung','Baumentfernung mit Seiltechnik']},
 {key:'kronensicherung',titel:'Kronensicherung (statisch / dynamisch)',pos:['Dynamische Kronensicherung','Statische Kronensicherung','Stahlstäbe und/oder Kabel','Andere Hardware']},
 {key:'entsorgung',titel:'Entsorgung von Abfällen',pos:['Komplette Entsorgung von Baumstamm und Ästen','Entsorgung von Ästen','Abschnittsweise Zerlegung des Stamms','Häckseln vor Ort']},
 {key:'stumpf',titel:'Entfernung von Baumstümpfen / Stumpffräsen',pos:['Entfernung von Baumstümpfen','Stumpffräsen']},
 {key:'untersuchung',titel:'Baumuntersuchung',pos:['Ortsbesichtigung und Voruntersuchung','VTA – Visuelle Baumkontrolle','Penetrometrische Untersuchung','Schalltomographie','Zugversuch (Pulling Test)','Messung des Chlorophyllgehalts']},
];
/* ===== App / Router ===== */
const App={
 state:{view:'start',beleg:null,belegTyp:'angebot',baumFilter:'alle',baumQuery:'',gb:null,gbStep:0,calMonth:null},
 go(v,o={}){this.state.view=v;Object.assign(this.state,o);this.drawer(false);
  if(v!=='karte'&&this._map){try{this._map.remove()}catch(e){}this._map=null}
  document.querySelectorAll('.nbtn').forEach(b=>b.classList.toggle('on',b.dataset.nav===v));
  window.scrollTo(0,0);this.render();},
 render(){const m={start:rStart,mearbeit:rMeArbeit,kunden:rKunden,baeume:rBaeume,belege:rBelege,beleg:rBeleg,rechner:rRechner,gb:rGB,ausruestung:rAusr,arboristik:rArbor,climbing:rClimb,kalender:rKalender,dokumente:rDokumente,meinedaten:rMeineDaten,einstellungen:rEinst,karte:rKarte,artikel:rArtikel,preise:rPreise,baumarten:rBaumarten,steckbrief:rSteckbrief,psa:rPsa,pruefung:rPruefung};
  document.getElementById('view').innerHTML='<div class="view">'+((m[this.state.view]||rStart)())+'</div>';
  if(this.state.view==='karte')initMap();if(this.state.view==='dokumente')App.loadDocs();},
 drawer(open){document.getElementById('drawer').classList.toggle('show',open);document.getElementById('scrim').classList.toggle('show',open);if(open)buildDrawer();},
 fab(){fabSheet();},
};
window.App=App;
/* ===== Fotos (IndexedDB 'fotos', komprimiert) ===== */
function imgCompress(file,maxPx,q){return new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>{const im=new Image();im.onload=()=>{let w=im.naturalWidth,h=im.naturalHeight;const s=Math.min(1,maxPx/Math.max(w,h));w=Math.round(w*s);h=Math.round(h*s);const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,w,h);x.drawImage(im,0,0,w,h);res(c.toDataURL('image/jpeg',q||0.75))};im.onerror=rej;im.src=fr.result};fr.onerror=rej;fr.readAsDataURL(file)})}
function fotoObj(ctx){return ctx==='beleg'?App.state.beleg:App.state.gb}
function fotoBlock(ctx,title){const o=fotoObj(ctx);o.fotos=o.fotos||[];
 let h='<div class="card"><h3>'+(title||'Fotos')+'</h3>';
 h+=o.fotos.length?'<div class="fgrid" id="fg_'+ctx+'">'+o.fotos.map(id=>'<div class="fthumb" data-fid="'+id+'"><img alt=""><button class="fdel" onclick="App.fotoDel(\''+ctx+'\',\''+id+'\')">×</button></div>').join('')+'</div>':'<div style="color:var(--muted);font-size:13px;margin-bottom:10px">Noch keine Fotos.</div>';
 h+='<div class="btn-row"><button class="btn sec sm" onclick="document.getElementById(\'fc_'+ctx+'\').click()">'+I.cam+' Foto aufnehmen</button><button class="btn sec sm" onclick="document.getElementById(\'fu_'+ctx+'\').click()">'+I.up+' Bilder hochladen</button></div>';
 h+='<input type="file" id="fc_'+ctx+'" accept="image/*" capture="environment" style="display:none" onchange="App.fotoAdd(\''+ctx+'\',this)"><input type="file" id="fu_'+ctx+'" accept="image/*" multiple style="display:none" onchange="App.fotoAdd(\''+ctx+'\',this)">';
 h+='</div>';setTimeout(()=>fotoThumbs(ctx),20);return h}
function fotoThumbs(ctx){document.querySelectorAll('#fg_'+ctx+' .fthumb').forEach(el=>{const id=el.dataset.fid;IDB.get('fotos',id).then(f=>{if(!f){el.remove();return}const im=el.querySelector('img');im.src=f.data;im.onclick=()=>App.fotoView(id)}).catch(()=>{})})}
function fotosLoad(ids){return Promise.all((ids||[]).map(id=>IDB.get('fotos',id).catch(()=>null))).then(a=>a.filter(Boolean))}
function fotosDelAll(ids){(ids||[]).forEach(id=>IDB.del('fotos',id).catch(()=>{}))}
App.fotoAdd=async function(ctx,input){const files=[...input.files];input.value='';if(!files.length)return;if(ctx==='beleg')App.beCollect();else gbCollect();const o=fotoObj(ctx);o.fotos=o.fotos||[];toast('Foto wird gespeichert…');let n=0;
 for(const f of files){try{const data=await imgCompress(f,1600,0.72);const id=uid();await IDB.put('fotos',{id,owner:ctx+':'+o.id,data,name:f.name,dateAdded:new Date().toISOString()});o.fotos.push(id);n++}catch(e){toast('Foto konnte nicht gespeichert werden')}}
 App.render();if(n)toast(n+' Foto(s) hinzugefügt – Speichern nicht vergessen')};
App.fotoDel=function(ctx,id){if(!confirm('Foto entfernen?'))return;if(ctx==='beleg')App.beCollect();else gbCollect();const o=fotoObj(ctx);o.fotos=(o.fotos||[]).filter(x=>x!==id);IDB.del('fotos',id).catch(()=>{});App.render()};
App.fotoView=function(id){IDB.get('fotos',id).then(f=>{if(!f)return;modal('<img src="'+f.data+'" style="width:100%;border-radius:12px;display:block"><div class="btn-row" style="margin-top:10px"><button class="btn sec" onclick="App.closeModal()">Schließen</button></div>')})};
function pdfFotos(fotos){if(!fotos||!fotos.length)return '';return '<div class="pf-wrap"><div class="pf-h">Fotodokumentation</div><div class="pf-grid">'+fotos.map((f,i)=>'<figure><img src="'+f.data+'"><figcaption>Foto '+(i+1)+'</figcaption></figure>').join('')+'</div></div>'}

/* ===== Suchfeld mit Vorschlägen (Autocomplete) ===== */
const normQ=s=>(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ß/g,'ss');
const AC_SRC={
 tree(q){q=normQ(q.trim());if(!q)return [];const L=(window.ALLTREES&&window.ALLTREES.length)?window.ALLTREES:TREES;const r=[];
  L.forEach(t=>{const de=normQ(t.de),la=normQ(t.la);let s=-1;if(de.startsWith(q))s=0;else if(la.startsWith(q))s=1;else if(de.split(/[\s\-]/).some(w=>w.startsWith(q)))s=2;else if(de.includes(q)||la.includes(q))s=3;if(s>=0)r.push({s,t})});
  r.sort((a,b)=>a.s-b.s||a.t.de.localeCompare(b.t.de,'de'));return r.slice(0,40).map(x=>({label:x.t.de,sub:x.t.la,value:x.t.de}))},
 kunde(q){q=normQ(q.trim());const ks=DB.get('kunden',[]);return ks.filter(k=>!q||normQ(k.name).includes(q)||normQ(k.stadt).includes(q)||normQ(k.adresse).includes(q)).sort((a,b)=>(a.name||'').localeCompare(b.name||'','de')).slice(0,30).map(k=>({label:k.name||'(ohne Name)',sub:[k.adresse,k.plz,k.stadt].filter(Boolean).join(', '),value:k.name||'',id:k.id}))}
};
function acField(id,value,placeholder,src){return '<div class="ac"><input type="text" id="'+id+'" value="'+esc(value||'')+'" placeholder="'+esc(placeholder||'')+'" autocomplete="off" autocapitalize="words" oninput="App.acShow(\''+id+'\',\''+src+'\',1)" onfocus="App.acShow(\''+id+'\',\''+src+'\')" onblur="setTimeout(()=>App.acHide(\''+id+'\'),220)"><div class="ac-list" id="'+id+'_ac"></div></div>'}
function treePicker(id,value){return acField(id,value,'Baumart eintippen, z. B. „Fichte" oder „Picea"…','tree')}
App._ac={};
App.acShow=function(id,src,typed){const inp=document.getElementById(id),box=document.getElementById(id+'_ac');if(!inp||!box)return;if(typed&&src==='kunde')App.beKundeTyped();const it=AC_SRC[src](inp.value);App._ac[id]=it;box.innerHTML=it.map((x,i)=>'<div class="ac-it" onmousedown="event.preventDefault()" onclick="App.acPick(\''+id+'\',\''+src+'\','+i+')"><b>'+esc(x.label)+'</b>'+(x.sub?'<span>'+esc(x.sub)+'</span>':'')+'</div>').join('');box.classList.toggle('show',it.length>0)};
App.acHide=function(id){const b=document.getElementById(id+'_ac');if(b)b.classList.remove('show')};
App.acPick=function(id,src,i){const x=(App._ac[id]||[])[i];if(!x)return;const inp=document.getElementById(id);inp.value=x.value;App.acHide(id);if(src==='kunde')App.beKundePick(x.id)};

/* ===== Eingabe-Helfer ===== */
function fldN(label,id,v,step,ph){return '<div class="field"><label class="fl">'+label+'</label><input type="number" inputmode="decimal" step="'+(step||'any')+'" min="0" id="'+id+'" value="'+esc(v||'')+'" placeholder="'+esc(ph||'')+'"></div>'}
/* Unterschrift vor Neuaufbau der Ansicht sichern */
function keepSig(o){const c=document.getElementById('sigpad');if(o&&c&&App._sigDirty){o.unterschrift=c.toDataURL('image/png');App._sigDirty=false}}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(window._tt);window._tt=setTimeout(()=>t.classList.remove('show'),2200)}
function sheet(html){document.getElementById('sheet-root').innerHTML='<div class="sheet-bg" onclick="if(event.target===this)App.closeSheet()"><div class="sheet">'+html+'</div></div>'}
App.closeSheet=()=>document.getElementById('sheet-root').innerHTML='';
function modal(html){document.getElementById('modal-root').innerHTML='<div class="modal-bg" onclick="if(event.target===this)App.closeModal()"><div class="modal">'+html+'</div></div>'}
App.closeModal=()=>document.getElementById('modal-root').innerHTML='';
function foot(){return '<div class="foot"><b>'+esc(meineDaten.name||'BaumWerk')+'</b>'+(meineDaten.stadt?' · '+esc(meineDaten.stadt):'')+'<br>'+esc(meineDaten.email||'')+(meineDaten.telefon?' · '+esc(meineDaten.telefon):'')+'</div>'}
function backRow(title,to){return '<div class="back-row"><button class="iconbtn" onclick="App.go(\''+to+'\')">'+I.back+'</button><div class="h-title" style="font-size:20px">'+title+'</div></div>'}
function fld(label,id,v,type){return '<div class="field"><label class="fl">'+label+'</label><input type="'+(type||'text')+'" id="'+id+'" value="'+esc(v||'')+'"></div>'}
function fldArea(label,id,v){return '<div class="field"><label class="fl">'+label+'</label><textarea id="'+id+'">'+esc(v||'')+'</textarea></div>'}
function chipPick(el){[...el.parentNode.children].forEach(c=>c.classList.remove('on'));el.classList.add('on')}

/* ===== Drawer & FAB ===== */
function buildDrawer(){
 const di=(label,fn,icon,sub)=>'<div class="di '+(sub?'sub':'')+'" onclick="'+fn+'">'+(icon?icon:'')+'<span>'+label+'</span>'+(sub?'<span class="chev">'+I.chev+'</span>':'')+'</div>';
 let h='<div class="dh"><span class="brand">Baum<span class="g">Werk</span></span></div>';
 h+=di('Meine Arbeit',"App.go('mearbeit')",I.tree);
 h+=di('Kunden',"App.go('kunden')",'',true);
 h+=di('Bäume',"App.go('baeume')",'',true);
 h+=di('Angebote',"App.go('belege',{belegTyp:'angebot'})",'',true);
 h+=di('Aufträge',"App.go('belege',{belegTyp:'auftrag'})",'',true);
 h+=di('Gefährdungsbeurteilung',"App.go('gb')",I.warn);
 h+=di('Dokumente',"App.go('dokumente')",I.folder);
 h+=di('Meine Ausrüstung',"App.go('ausruestung')",I.helmet);
 h+=di('Stammgewicht Rechner',"App.go('rechner')",I.calc);
 h+=di('Tree Climbing',"App.go('climbing')",I.climb);
 h+=di('Arboristik',"App.go('arboristik')",I.arbor);
 h+=di('Karte & Bäume verorten',"App.go('karte')",I.pin);
 document.getElementById('drawer').innerHTML=h;
}
function fabSheet(){
 const si=(l,fn)=>'<div class="si" onclick="App.closeSheet();'+fn+'"><span>'+l+'</span><span class="chev">'+I.chev+'</span></div>';
 sheet(si('Neuer Kunde',"App.kundeForm()")+si('Neuer Baum',"App.baumForm()")+si('Neues Angebot',"App.belegStart('angebot')")+si('Neuer Auftrag',"App.belegStart('auftrag')")+si('Neue Gefährdungsbeurteilung',"App.gbStart()")+si('Neues Dokument',"App.go('dokumente');App.dokForm()")+'<div class="sfoot"><button class="btn sec sm" onclick="App.closeSheet()">Abbrechen</button></div>');
}

/* ===== START ===== */
function rStart(){
 let h='';
 h+='<button class="tile-lg" onclick="App.go(\'mearbeit\')">'+I.tree+'<b>Meine Arbeit</b></button>';
 h+='<button class="tile-row" onclick="App.go(\'ausruestung\')">'+I.helmet+'<b>Meine Ausrüstung</b></button>';
 h+='<button class="tile-row" onclick="App.go(\'rechner\')">'+I.calc+'<b>Stammgewicht Rechner</b></button>';
 h+='<button class="tile-row" onclick="App.go(\'gb\')">'+I.warn+'<b>Gefährdungsbeurteilung</b></button>';
 h+='<div class="tile-2">';
 h+='<button class="tile-sq" onclick="App.go(\'climbing\')">'+I.climb+'<b>Tree Climbing</b></button>';
 h+='<button class="tile-sq" onclick="App.go(\'arboristik\')">'+I.arbor+'<b>Arboristik</b></button>';
 h+='</div>';
 h+='<button class="tile-row" onclick="App.go(\'baumarten\')">'+I.trees+'<b>Baumarten</b></button>';
 return h;
}
/* ===== MEINE ARBEIT submenu ===== */
function rMeArbeit(){
 let h=backRow('Meine Arbeit','start');
 h+='<div class="wtiles">';
 h+='<button class="wtile" onclick="App.go(\'kunden\')">'+I.users+'<b>Kunden</b></button>';
 h+='<button class="wtile" onclick="App.go(\'baeume\')">'+I.trees+'<b>Bäume</b></button>';
 h+='<button class="wtile wide" onclick="App.go(\'belege\',{belegTyp:\'angebot\'})">'+I.offer+'<b>Angebote</b></button>';
 h+='<button class="wtile wide" onclick="App.go(\'belege\',{belegTyp:\'auftrag\'})">'+I.saw+'<b>Aufträge</b></button>';
 h+='<button class="wtile wide" onclick="App.go(\'gb\')">'+I.warn+'<b>Gefährdungsbeurteilungen</b></button>';
 h+='<button class="wtile wide" onclick="App.go(\'dokumente\')">'+I.folder+'<b>Dokumente</b></button>';
 h+='</div>';
 return h;
}

/* ===== KUNDEN ===== */
function rKunden(){
 const ks=DB.get('kunden',[]).slice().sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''));
 let h=backRow('Kunden','mearbeit');
 h+='<div class="addrow" onclick="App.kundeForm()"><span>'+I.plus+' Neuer Kunde</span></div>';
 if(!ks.length)h+='<div class="empty">Keine Inhalte zum Anzeigen</div>';
 ks.forEach(k=>{const adr=[k.adresse,k.plz,k.stadt].filter(Boolean).join(', ');
  h+='<div class="item"><div class="m" onclick="App.kundeForm(\''+k.id+'\')"><b>'+esc(k.name||'(ohne Name)')+'</b><span>'+esc(adr||k.telefon||k.email||'')+'</span></div><button class="iconbtn" onclick="App.kundeForm(\''+k.id+'\')">'+I.edit+'</button><button class="iconbtn" style="color:#dc2626" onclick="App.kundeDel(\''+k.id+'\')">'+I.trash+'</button></div>';});
 h+=foot();return h;
}
App.kundeForm=function(id){
 const ks=DB.get('kunden',[]);const k=id?ks.find(x=>x.id===id):{id:uid(),typ:'name',name:'',land:'Deutschland',adresse:'',wohnung:'',plz:'',stadt:'',email:'',idnr:'',telefon:'',social:'',notiz:''};
 modal('<h3>'+(id?'Kunde bearbeiten':'Neuer Kunde')+'</h3>'+
  '<div class="chips" style="margin-bottom:12px"><button class="chip '+(k.typ==='name'?'on':'')+'" onclick="window._ktyp=\'name\';chipPick(this)">Name</button><button class="chip '+(k.typ==='firma'?'on':'')+'" onclick="window._ktyp=\'firma\';chipPick(this)">Firmenname</button></div>'+
  fld('Name / Firma','k_name',k.name)+
  '<div class="row2">'+fld('PLZ','k_plz',k.plz)+fld('Stadt','k_stadt',k.stadt)+'</div>'+
  fld('Adresse','k_adresse',k.adresse)+
  '<div class="row2">'+fld('Telefon','k_tel',k.telefon,'tel')+fld('E-Mail','k_email',k.email,'email')+'</div>'+
  fld('IdNr / Kundennr.','k_idnr',k.idnr)+
  fldArea('Notiz','k_notiz',k.notiz)+
  '<div class="btn-row" style="margin-top:8px"><button class="btn sec" onclick="App.closeModal()">Abbrechen</button><button class="btn" onclick="App.kundeSave(\''+k.id+'\')">Speichern</button></div>');
 window._ktyp=k.typ;
};
App.kundeSave=function(id){
 const ks=DB.get('kunden',[]);let k=ks.find(x=>x.id===id);
 const d={typ:window._ktyp||'name',name:val('k_name'),plz:val('k_plz'),stadt:val('k_stadt'),adresse:val('k_adresse'),telefon:val('k_tel'),email:val('k_email'),idnr:val('k_idnr'),notiz:val('k_notiz')};
 if(!d.name){toast('Bitte Name eingeben');return}
 if(k)Object.assign(k,d);else ks.push({id,createdAt:new Date().toISOString(),...d});
 DB.set('kunden',ks);App.closeModal();App.render();toast('Kunde gespeichert');
};
App.kundeDel=function(id){if(!confirm('Kunde löschen?'))return;DB.set('kunden',DB.get('kunden',[]).filter(x=>x.id!==id));App.render()};

/* ===== BÄUME ===== */
function rBaeume(){
 const bs=DB.get('baeume',[]).slice().sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''));
 let h=backRow('Bäume','mearbeit');
 h+='<div class="addrow" onclick="App.baumForm()"><span>'+I.plus+' Neuer Baum</span></div>';
 if(!bs.length)h+='<div class="empty">Keine Inhalte zum Anzeigen</div>';
 bs.forEach(b=>{const t=treeFind(x=>x.de===b.art);
  h+='<div class="item"><div class="m" onclick="App.baumForm(\''+b.id+'\')"><b>'+esc(b.titel||b.art||'Baum')+'</b><span>'+esc(b.art||'')+(t?' · '+esc(t.la):'')+(b.hoehe?' · '+b.hoehe+' m':'')+'</span></div><button class="iconbtn" onclick="App.baumForm(\''+b.id+'\')">'+I.edit+'</button><button class="iconbtn" style="color:#dc2626" onclick="App.baumDel(\''+b.id+'\')">'+I.trash+'</button></div>';});
 h+=foot();return h;
}
App.baumForm=function(id){
 const bs=DB.get('baeume',[]);const b=id?bs.find(x=>x.id===id):{id:uid(),titel:'',modus:'einzel',anzahl:'',kundeId:'',standortTyp:'aktuell',lat:null,lng:null,art:'',hoehe:'',durchmesser:'',kronenprojektion:'',bewertung:'',notiz:'',fotos:[]};
 const ks=DB.get('kunden',[]);
 modal('<h3>'+(id?'Baum bearbeiten':'Neuer Baum')+'</h3>'+
  fld('Titel','b_titel',b.titel)+
  '<div class="field"><label class="fl">Erfassung</label><div class="chips"><button class="chip '+(b.modus==='einzel'?'on':'')+'" onclick="window._bm=\'einzel\';chipPick(this)">Einzelbaum</button><button class="chip '+(b.modus==='gruppe'?'on':'')+'" onclick="window._bm=\'gruppe\';chipPick(this)">Gruppe</button><button class="chip '+(b.modus==='reihe'?'on':'')+'" onclick="window._bm=\'reihe\';chipPick(this)">Reihe</button></div></div>'+
  '<div class="field"><label class="fl">Kunde</label><select id="b_kunde"><option value="">— kein Kunde —</option>'+ks.map(k=>'<option value="'+k.id+'" '+(b.kundeId===k.id?'selected':'')+'>'+esc(k.name)+'</option>').join('')+'</select></div>'+
  '<div class="field"><label class="fl">Baumart (deutsch + lateinisch)</label>'+treePicker('b_art',b.art)+'</div>'+
  '<div class="row2">'+fld('Höhe (m)','b_hoehe',b.hoehe,'number')+fld('Durchmesser (cm)','b_dm',b.durchmesser,'number')+'</div>'+
  fld('Kronenprojektion (m)','b_kp',b.kronenprojektion,'number')+
  '<div class="field"><label class="fl">Standort</label><div class="chips"><button class="chip '+(b.standortTyp==='kunde'?'on':'')+'" onclick="window._bst=\'kunde\';chipPick(this)">Adresse des Kunden</button><button class="chip '+(b.standortTyp==='aktuell'?'on':'')+'" onclick="window._bst=\'aktuell\';chipPick(this)">Aktueller Standort</button></div>'+
   '<div id="b_coords" class="hint">'+(b.lat?'📍 '+b.lat.toFixed(5)+', '+b.lng.toFixed(5):'Noch kein Standort')+'</div><button class="btn sec sm" onclick="App.baumGPS(\''+b.id+'\')">'+I.gps+' Aktuellen Standort übernehmen</button></div>'+
  fldArea('Kurze Bewertung','b_bew',b.bewertung)+
  fldArea('Notiz','b_notiz',b.notiz)+
  '<div class="btn-row" style="margin-top:8px"><button class="btn sec" onclick="App.closeModal()">Abbrechen</button><button class="btn" onclick="App.baumSave(\''+b.id+'\')">Speichern</button></div>');
 window._bm=b.modus;window._bst=b.standortTyp;window._bcoords=b.lat?{lat:b.lat,lng:b.lng}:null;
};
App.baumGPS=function(id){if(!navigator.geolocation){toast('GPS nicht verfügbar');return}toast('Standort…');navigator.geolocation.getCurrentPosition(p=>{window._bcoords={lat:p.coords.latitude,lng:p.coords.longitude};const el=document.getElementById('b_coords');if(el)el.textContent='📍 '+p.coords.latitude.toFixed(5)+', '+p.coords.longitude.toFixed(5);toast('Standort übernommen')},()=>toast('GPS fehlgeschlagen'),{enableHighAccuracy:true})};
App.baumSave=function(id){
 const bs=DB.get('baeume',[]);let b=bs.find(x=>x.id===id);
 const c=window._bcoords||{};
 const d={titel:val('b_titel'),modus:window._bm||'einzel',kundeId:val('b_kunde'),art:val('b_art'),hoehe:val('b_hoehe'),durchmesser:val('b_dm'),kronenprojektion:val('b_kp'),standortTyp:window._bst||'aktuell',lat:c.lat||null,lng:c.lng||null,bewertung:val('b_bew'),notiz:val('b_notiz')};
 if(b)Object.assign(b,d);else bs.push({id,createdAt:new Date().toISOString(),fotos:[],...d});
 DB.set('baeume',bs);App.closeModal();App.render();toast('Baum gespeichert');
};
App.baumDel=function(id){if(!confirm('Baum löschen?'))return;DB.set('baeume',DB.get('baeume',[]).filter(x=>x.id!==id));App.render()};

/* ===== ANGEBOTE / AUFTRÄGE (Liste) ===== */
function rBelege(){
 const typ=App.state.belegTyp;const titel=typ==='angebot'?'Angebote':'Aufträge';
 const list=DB.get('belege',[]).filter(b=>b.typ===typ).sort((a,b)=>(b.datum||'').localeCompare(a.datum||''));
 let h=backRow(titel,'mearbeit');
 if(typ==='auftrag')h+='<div class="addrow" onclick="App.belegFromAngebot()"><span>'+I.plus+' Aus Angebot erstellen</span></div>';
 h+='<div class="addrow" onclick="App.belegStart(\''+typ+'\')"><span>'+I.plus+' '+(typ==='angebot'?'Neues Angebot':'Neuer Auftrag')+'</span></div>';
 h+='<div class="addrow" onclick="App.importLexPdf(\''+typ+'\')"><span>'+I.up+' Aus Lexoffice-PDF importieren</span></div>';
 if(!list.length)h+='<div class="empty">Keine Inhalte zum Anzeigen</div>';
 const ks=DB.get('kunden',[]);
 list.forEach(b=>{const k=ks.find(x=>x.id===b.kundeId);
  h+='<div class="item"><div class="m" onclick="App.belegOpen(\''+b.id+'\')"><b>Nr. '+esc(b.nummer||'–')+' · '+esc(k?k.name:'(kein Kunde)')+'</b><span>'+fmtDate(b.datum)+' · '+eur(belegTotal(b))+'</span></div><button class="iconbtn" onclick="App.belegPDF(\''+b.id+'\')">'+I.pdf+'</button><button class="iconbtn" style="color:#dc2626" onclick="App.belegDel(\''+b.id+'\')">'+I.trash+'</button></div>';});
 h+=foot();return h;
}
function newBeleg(typ){
 const list=DB.get('belege',[]).filter(b=>b.typ===typ);
 const nextNr=(list.reduce((m,b)=>Math.max(m,parseInt(b.nummer)||0),0)+1);
 return {id:uid(),typ,datum:todayISO(),gueltigMonate:'',nummer:String(nextNr),fortlaufend:true,kundeId:'',baeume:[],weiter:'beschreibung',arbeitVon:'',arbeitBis:'',anzahlKraefte:'',preisModus:'modul',durchMit:[],personal:[],dienste:{},custom:[],zusatz:{hub:{on:false,preis:''},kran:{on:false,preis:''},reise:{on:false,preis:''},halteverbot:{on:false,seite:'einseitig',preis:''}},rabatt:'',fussnote:'',privatNotiz:'',unterschrift:null,fotos:[],createdAt:new Date().toISOString()};
}
App.belegStart=function(typ){App.state.beleg=newBeleg(typ);App.state.belegTyp=typ;App.go('beleg');};
App.belegOpen=function(id){const b=DB.get('belege',[]).find(x=>x.id===id);if(!b)return;App.state.beleg=JSON.parse(JSON.stringify(b));App.state.beleg.dienste=App.state.beleg.dienste||{};App.state.beleg.baeume=App.state.beleg.baeume||[];App.state.beleg.personal=App.state.beleg.personal||[];App.state.beleg.fotos=App.state.beleg.fotos||[];App.state.beleg.kd=null;App.state.belegTyp=b.typ;App.go('beleg');};
App.belegDel=function(id){if(!confirm('Wirklich löschen?'))return;const _b=DB.get('belege',[]).find(x=>x.id===id);if(_b)fotosDelAll(_b.fotos);DB.set('belege',DB.get('belege',[]).filter(x=>x.id!==id));App.render()};
App.belegFromAngebot=function(){
 const angebote=DB.get('belege',[]).filter(b=>b.typ==='angebot');
 if(!angebote.length){toast('Keine Angebote vorhanden');return}
 const ks=DB.get('kunden',[]);
 sheet('<div class="si" style="font-weight:800">Angebot wählen</div>'+angebote.map(a=>{const k=ks.find(x=>x.id===a.kundeId);return '<div class="si" onclick="App.closeSheet();App.belegConvert(\''+a.id+'\')"><span>Nr. '+esc(a.nummer)+' · '+esc(k?k.name:'')+' · '+eur(belegTotal(a))+'</span><span class="chev">'+I.chev+'</span></div>'}).join('')+'<div class="sfoot"><button class="btn sec sm" onclick="App.closeSheet()">Abbrechen</button></div>');
};
App.belegConvert=function(id){const a=DB.get('belege',[]).find(x=>x.id===id);if(!a)return;const c=JSON.parse(JSON.stringify(a));c.id=uid();c.typ='auftrag';c.weiter='beschreibung';c.kd=null;c.fotos=[];const list=DB.get('belege',[]).filter(b=>b.typ==='auftrag');c.nummer=String(list.reduce((m,b)=>Math.max(m,parseInt(b.nummer)||0),0)+1);c.createdAt=new Date().toISOString();App.state.beleg=c;App.state.belegTyp='auftrag';App.go('beleg');toast('Aus Angebot übernommen');};
/* ===== Lexoffice-PDF-Import (Daten auslesen) ===== */
function loadPdfJs(){return new Promise((res,rej)=>{if(window.pdfjsLib)return res();const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';s.onload=()=>{try{pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';}catch(e){}res();};s.onerror=rej;document.head.appendChild(s);});}
async function extractPdfText(buf){await loadPdfJs();const pdf=await pdfjsLib.getDocument({data:new Uint8Array(buf)}).promise;const lines=[];for(let p=1;p<=pdf.numPages;p++){const page=await pdf.getPage(p);const tc=await page.getTextContent();const rows={};tc.items.forEach(it=>{if(!it.str)return;const y=Math.round(it.transform[5]);(rows[y]=rows[y]||[]).push({x:it.transform[4],s:it.str});});Object.keys(rows).map(Number).sort((a,b)=>b-a).forEach(y=>{const line=rows[y].sort((a,b)=>a.x-b.x).map(o=>o.s).join(' ').replace(/\s+/g,' ').trim();if(line)lines.push(line);});}return lines;}
function parseLex(lines){const text=lines.join('\n');const dM=text.match(/(\d{2})\.(\d{2})\.(\d{4})/);const datum=dM?dM[3]+'-'+dM[2]+'-'+dM[1]:'';const nM=text.match(/(?:Rechnung|Auftrag|Angebot|Beleg)(?:s?nummer)?\s*[:#\-]?\s*([A-Za-z0-9][A-Za-z0-9\-\/]{2,})/i);const nummer=nM?nM[1]:'';const amt=/(-?\d{1,3}(?:\.\d{3})*,\d{2})\s*(?:€|EUR)?\s*$/;const skip=/(summe|gesamt|zwischensumme|mwst|ust|umsatzsteuer|netto|brutto|iban|bic|seite|zahlbar|skonto|steuernummer|ihre kundennummer)/i;const positionen=[];lines.forEach(l=>{const m=l.match(amt);if(m&&!skip.test(l)){const preis=m[1].replace(/\./g,'').replace(',','.');let titel=l.slice(0,l.length-m[0].length).trim();titel=titel.replace(/\s+\d+([.,]\d+)?\s*(Std\.?|h|Stk\.?|x|Stück|St\.|pauschal)?\s*(\d+([.,]\d+)?\s*(€|EUR)?)?$/i,'').replace(/^\d+[\.,)]?\s+/,'').trim();const pv=parseFloat(preis);if(titel&&titel.length>1&&pv)positionen.push({titel:titel.slice(0,80),preis:String(pv)});}});let gesamt='';const gM=text.match(/(?:Gesamtbetrag|Rechnungsbetrag|Gesamt|Summe)\D{0,25}(\d{1,3}(?:\.\d{3})*,\d{2})/i);if(gM)gesamt=gM[1];const head=lines.slice(0,8).join(' / ');return {datum,nummer,positionen:positionen.slice(0,30),gesamt,head};}
App.importLexPdf=function(typ){const inp=document.createElement('input');inp.type='file';inp.accept='application/pdf';inp.onchange=async function(){const f=inp.files&&inp.files[0];if(!f)return;toast('PDF wird gelesen…');try{const buf=await f.arrayBuffer();const lines=await extractPdfText(buf);const d=parseLex(lines);const b=newBeleg(typ);if(d.datum)b.datum=d.datum;b.custom=d.positionen.length?d.positionen:[{titel:'',preis:''}];const ks=DB.get('kunden',[]);const hl=(d.head||'').toLowerCase();const found=ks.find(k=>k.name&&hl.indexOf(k.name.toLowerCase())>=0);if(found)b.kundeId=found.id;b.privatNotiz='Aus Lexoffice-PDF importiert ('+f.name+').'+(d.nummer?' Beleg-Nr.: '+d.nummer+'.':'')+(d.gesamt?' Gesamt laut PDF: '+d.gesamt+' EUR.':'')+(found?'':' Kunde bitte zuordnen.')+' Kopf erkannt: '+(d.head||'').slice(0,200);App.state.beleg=b;App.state.belegTyp=typ;App.go('beleg');toast('Importiert – Positionen & Kunde bitte prüfen');}catch(e){toast('PDF konnte nicht gelesen werden (beim 1. Mal Internet nötig)');}};inp.click();};

/* Beleg total */
function belegTotal(b){
 let t=0;b=b||{};const dn=b.dienste||{};
 DIENSTE.forEach(d=>{const m=dn[d.key];if(m&&m.on)t+=parseFloat(m.preis)||0;});
 (b.custom||[]).forEach(c=>t+=parseFloat(c.preis)||0);
 const z=b.zusatz||{};['hub','kran','reise','halteverbot'].forEach(k=>{if(z[k]&&z[k].on)t+=parseFloat(z[k].preis)||0;});
 return t;
}
function belegNet(b){const t=belegTotal(b);const r=parseFloat(b.rabatt)||0;return t-(t*r/100);}

/* ===== BELEG FORM ===== */
const QUALS=['AS I','AS II','SKT A','SKT B','SKT K'];
function personalTable(ctx){
 const o=ctx==='beleg'?App.state.beleg:App.state.gb;o.personal=o.personal||[];
 let h='<div style="overflow-x:auto"><table class="ptable"><thead><tr><th style="text-align:left">Name</th>'+QUALS.map(q=>'<th>'+q+'</th>').join('')+'<th></th></tr></thead><tbody>';
 o.personal.forEach((p,i)=>{p.q=p.q||{};
  h+='<tr><td><input type="text" value="'+esc(p.name)+'" placeholder="Name '+(i+1)+'" oninput="App.persName(\''+ctx+'\','+i+',this.value)"></td>'+
   QUALS.map(q=>'<td><span class="mini-box '+(p.q[q]?'on':'')+'" onclick="App.persQual(\''+ctx+'\','+i+',\''+q+'\',this)"></span></td>').join('')+
   '<td><button class="iconbtn" style="width:30px;height:30px;border:none" onclick="App.persDel(\''+ctx+'\','+i+')">×</button></td></tr>';
 });
 h+='</tbody></table></div><button class="btn sec sm" style="margin-top:8px" onclick="App.persAdd(\''+ctx+'\')">'+I.plus+' Person hinzufügen</button>';
 return h;
}
App.persName=function(ctx,i,v){const o=ctx==='beleg'?App.state.beleg:App.state.gb;if(o.personal[i])o.personal[i].name=v};
App.persQual=function(ctx,i,q,el){const o=ctx==='beleg'?App.state.beleg:App.state.gb;const p=o.personal[i];p.q=p.q||{};p.q[q]=!p.q[q];el.classList.toggle('on')};
App.persAdd=function(ctx){const o=ctx==='beleg'?App.state.beleg:App.state.gb;if(ctx==='beleg')App.beCollect();else gbCollect();o.personal=o.personal||[];o.personal.push({name:'',q:{}});App.render()};
App.persDel=function(ctx,i){const o=ctx==='beleg'?App.state.beleg:App.state.gb;if(ctx==='beleg')App.beCollect();else gbCollect();o.personal.splice(i,1);App.render()};
App.gbImportPersonal=function(){const g=App.state.gb;const b=DB.get('belege',[]).find(x=>x.id===g.belegId);if(!b||!(b.personal&&b.personal.length)){toast('Kein Personal im Auftrag');return}gbCollect();g.personal=JSON.parse(JSON.stringify(b.personal));App.render();toast('Personal aus Auftrag übernommen')};
function rpNum(n){return (''+n).replace('.',',');}
function rpHint(key){const rp=window.RICHTPREISE&&RICHTPREISE.module[key];if(!rp)return '';return '<div class="rp-hint">💶 HH-Richtpreis (netto): '+esc(rp.summary)+'<button class="btn sec sm" onclick="App.fillPrice(\'d_'+key+'_preis\','+rp.mid+')">Ø '+rp.mid+' € übernehmen</button></div>';}
function rpHalteHint(seite){const z=window.RICHTPREISE&&RICHTPREISE.zusatz&&RICHTPREISE.zusatz.halteverbot;if(!z)return '';const s=z[seite]||z.einseitig;return '<div class="rp-hint" style="margin-left:32px">Richtpreis '+esc(seite)+': '+rpNum(s.von)+'–'+rpNum(s.bis)+' '+esc(z.e)+'<button class="btn sec sm" onclick="App.fillPrice(\'z_halteverbot_preis\','+s.mid+')">Ø übernehmen</button></div>';}
App.fillPrice=function(id,val){const el=document.getElementById(id);if(el){el.value=val;if(App.beRecalc)App.beRecalc();}toast('Richtpreis übernommen – bitte ans Objekt anpassen');};
function rPreise(){
 const RP=window.RICHTPREISE;let h=backRow('Richtpreise Hamburg','einstellungen');
 if(!RP){h+='<div class="hint">Preisdaten nicht geladen.</div>';return h+foot();}
 h+='<div class="hint">'+esc(RP.stand)+'</div>';
 Object.keys(RP.module).forEach(k=>{const m=RP.module[k];h+='<div class="card"><h3>'+esc(m.label)+'</h3>'+m.ranges.map(r=>'<div class="kv"><span class="k">'+esc(r.t)+'</span><span class="v">'+rpNum(r.von)+'–'+rpNum(r.bis)+' '+esc(r.e)+'</span></div>').join('')+'</div>';});
 const z=RP.zusatz;h+='<div class="card"><h3>Zusätzliche Ausgaben</h3>';
 ['hub','kran','reise'].forEach(k=>{const r=z[k];h+='<div class="kv"><span class="k">'+esc(r.t)+'</span><span class="v">'+rpNum(r.von)+'–'+rpNum(r.bis)+' '+esc(r.e)+'</span></div>';});
 h+='<div class="kv"><span class="k">Halteverbot einseitig</span><span class="v">'+rpNum(z.halteverbot.einseitig.von)+'–'+rpNum(z.halteverbot.einseitig.bis)+' '+esc(z.halteverbot.e)+'</span></div>';
 h+='<div class="kv"><span class="k">Halteverbot beidseitig</span><span class="v">'+rpNum(z.halteverbot.beidseitig.von)+'–'+rpNum(z.halteverbot.beidseitig.bis)+' '+esc(z.halteverbot.e)+'</span></div></div>';
 h+='<div class="hint">Alle Werte netto, zzgl. 19% USt. Unverbindliche Orientierung – kein Ersatz für die eigene Kalkulation (Objekt, Zugänglichkeit, Risiko, Zeit, Entsorgung).</div>';
 return h+foot();
}
/* ===== BAUMARTEN-LEXIKON (Steckbriefe) ===== */
function baumList(){return (window.ALLTREES&&window.ALLTREES.length)?window.ALLTREES:TREES.map(t=>({de:t.de,la:t.la,cat:t.cat,s:t.la.replace('× ','').replace(/\s+/g,'_')}));}
function sbGet(la){const S=window.STECKBRIEF||{};return S[la]||S[la.replace(/ x /,' × ')]||S[la.replace(/ × /,' x ')];}
App.openSteckbrief=function(s){App.go('steckbrief',{sbSlug:s})};
function rBaumarten(){
 const all=baumList();const f=App.state.baFilter||'alle';const q=(App.state.baQuery||'').toLowerCase();
 let list=all.filter(t=>(f==='alle'||t.cat===f)&&(!q||t.de.toLowerCase().indexOf(q)>=0||t.la.toLowerCase().indexOf(q)>=0));
 list.sort((a,b)=>a.de.localeCompare(b.de,'de'));
 const c={alle:all.length,laub:all.filter(t=>t.cat==='laub').length,nadel:all.filter(t=>t.cat==='nadel').length,strauch:all.filter(t=>t.cat==='strauch').length};
 let h=backRow('Baumarten','start');
 h+='<div class="h-sub" style="margin-top:-4px">'+all.length+' Arten · deutsch + lateinisch · Steckbriefe</div>';
 h+='<div class="field"><input type="search" placeholder="Art suchen (deutsch/lateinisch)…" value="'+esc(App.state.baQuery||'')+'" oninput="App.state.baQuery=this.value;App.render();var s=document.querySelector(\'.view input[type=search]\');if(s){s.focus();s.setSelectionRange(s.value.length,s.value.length)}"></div>';
 h+='<div class="chips" style="margin-bottom:12px">'+[['alle','Alle'],['laub','Laubbäume'],['nadel','Nadelbäume'],['strauch','Sträucher']].map(x=>'<button class="chip '+(f===x[0]?'on':'')+'" onclick="App.state.baFilter=\''+x[0]+'\';App.render()">'+x[1]+' '+c[x[0]]+'</button>').join('')+'</div>';
 if(!list.length)h+='<div class="empty">Keine Treffer</div>';
 const lim=400,show=list.slice(0,lim);
 show.forEach(t=>{h+='<div class="art-acc" onclick="App.openSteckbrief(\''+esc(t.s)+'\')"><span><b>'+esc(t.de)+'</b><br><span class="art-sub" style="font-style:italic">'+esc(t.la)+'</span></span><span class="badge '+t.cat+'">'+CATLABEL[t.cat]+'</span></div>';});
 if(list.length>lim)h+='<div class="hint">'+lim+' von '+list.length+' angezeigt – Suche/Filter nutzen, um einzugrenzen.</div>';
 return h+foot();
}
function rSteckbrief(){
 const slug=App.state.sbSlug;const all=baumList();const t=all.find(x=>x.s===slug);
 let h=backRow(t?t.de:'Steckbrief','baumarten');
 if(!t){h+='<div class="empty">Art nicht gefunden</div>';return h+foot();}
 const sb=sbGet(t.la);const td=TREES.find(x=>x.la===t.la);
 const row=(k,v)=>v?'<div class="kv"><span class="k">'+k+'</span><span class="v">'+esc(v)+'</span></div>':'';
 h+='<div class="card"><h3 style="margin-bottom:2px">'+esc(t.de)+'</h3><div style="font-style:italic;color:var(--muted);margin-bottom:10px">'+esc(t.la)+'</div>';
 h+=row('Kategorie',CATLABEL[t.cat]);
 if(sb){h+=row('Familie',sb.f)+row('Gattung',sb.g)+row('Art',sb.a)+row('Herkunft',sb.h)+row('Giftigkeit',sb.gi)+row('Wuchshöhe',sb.ho)+row('Blatt',sb.bl)+row('Blütezeit',sb.bz)+row('Frucht / Reife',sb.fr);}
 if(td&&td.d)h+=row('Holzdichte (frisch)',td.d+' kg/m³');
 h+='</div>';
 if(sb&&sb.txt)h+='<div class="card"><div class="sec-label" style="margin-top:0">Beschreibung</div><div class="artikel"><p>'+esc(sb.txt)+'</p></div></div>';
 h+='<a class="btn sec" target="_blank" rel="noopener" href="https://www.baumkunde.de/'+esc(t.s)+'/">'+I.eye+' Steckbrief, Fotos & Details bei baumkunde.de</a>';
 if(!sb)h+='<div class="hint">Vollständiger Steckbrief (Familie, Giftigkeit, Wuchshöhe, Bilder …) über den baumkunde.de-Link.</div>';
 return h+foot();
}
/* Kunde direkt im Beleg erfassen / suchen */
const KD_F=['name','adresse','plz','stadt','telefon','email'];
function kdFrom(k){const d={};KD_F.forEach(f=>d[f]=(k&&k[f])||'');return d}
function kStatText(b){return b.kundeId?'<span class="badge g">✓ Bestehender Kunde</span> Änderungen an Adresse/Kontakt werden beim Speichern übernommen.':'<span class="badge b">+ Neuer Kunde</span> wird beim Speichern automatisch unter „Kunden" angelegt.'}
function belegKundeBlock(b){const k=DB.get('kunden',[]).find(x=>x.id===b.kundeId);if(!b.kd)b.kd=kdFrom(k);const d=b.kd;
 let h='<div class="kbox"><div class="field" style="margin-bottom:8px"><label class="fl">Kunde (Name / Firma)</label>'+acField('be_kname',d.name,'Name eintippen – bestehende Kunden werden vorgeschlagen','kunde')+'</div>';
 h+='<div id="be_kstat" class="kstat">'+kStatText(b)+'</div>';
 h+=fld('Straße / Hausnummer','be_kadresse',d.adresse)+'<div class="row2">'+fld('PLZ','be_kplz',d.plz)+fld('Stadt','be_kstadt',d.stadt)+'</div><div class="row2">'+fld('Telefon','be_ktelefon',d.telefon,'tel')+fld('E-Mail','be_kemail',d.email,'email')+'</div></div>';
 return h}
App.beKundeTyped=function(){const b=App.state.beleg;if(!b||!b.kundeId)return;const k=DB.get('kunden',[]).find(x=>x.id===b.kundeId);if(!k||normQ(k.name).trim()!==normQ(val('be_kname')).trim()){b.kundeId='';const st=document.getElementById('be_kstat');if(st)st.innerHTML=kStatText(b)}};
App.beKundePick=function(id){const b=App.state.beleg;const k=DB.get('kunden',[]).find(x=>x.id===id);if(!b||!k)return;b.kundeId=id;b.kd=kdFrom(k);KD_F.forEach(f=>{const e=document.getElementById('be_k'+f);if(e)e.value=b.kd[f]});const st=document.getElementById('be_kstat');if(st)st.innerHTML=kStatText(b)};
function belegKundeSync(b){const d=b.kd;if(!d)return;if(!d.name){b.kundeId='';return}const ks=DB.get('kunden',[]);
 let k=b.kundeId&&ks.find(x=>x.id===b.kundeId);
 if(!k)k=ks.find(x=>normQ(x.name).trim()===normQ(d.name).trim()&&normQ(x.adresse||'')===normQ(d.adresse||''));
 if(k)KD_F.forEach(f=>k[f]=d[f]);else{k=Object.assign({id:uid(),createdAt:new Date().toISOString(),typ:'name',land:'Deutschland',idnr:'',notiz:''},d);ks.push(k)}
 b.kundeId=k.id;DB.set('kunden',ks)}
function belegKunde(b){const k=DB.get('kunden',[]).find(x=>x.id===b.kundeId);return k||(b.kd&&b.kd.name?b.kd:{})}
const fmtNum=n=>(Math.round(n*100)/100).toLocaleString('de-DE');
function mhText(b){const s=parseFloat(String(b.stunden||'').replace(',','.'))||0,n=parseInt(b.anzahlKraefte)||0;if(s&&n)return 'Gesamt: <b>'+fmtNum(s*n)+' Personenstunden</b> ('+fmtNum(s)+' Std. × '+n+' Arbeitskräfte)';if(s)return 'Geschätzte Dauer: <b>'+fmtNum(s)+' Std.</b>';return 'Stunden und Arbeitskräfte eintragen – die Personenstunden werden berechnet.'}
document.addEventListener('input',e=>{const id=e.target&&e.target.id;if((id==='be_std'||id==='be_kraefte')&&App.state.beleg){App.state.beleg.stunden=val('be_std');App.state.beleg.anzahlKraefte=val('be_kraefte');const el=document.getElementById('be_mh');if(el)el.innerHTML=mhText(App.state.beleg)}});
function belegBaeumeCard(b){
 const bs=DB.get('baeume',[]);const ids=b.baeume||[];
 let h='<div class="card"><h3>Bäume / Objekte</h3>';
 if(!ids.length)h+='<div style="color:var(--muted);font-size:13px;margin-bottom:10px">Noch kein Baum zugeordnet. Art, Höhe und Durchmesser hier erfassen – wird mit dem Reiter „Bäume" verknüpft.</div>';
 ids.forEach(id=>{const x=bs.find(t=>t.id===id);if(!x)return;const t=treeFind(tt=>tt.de===x.art);
  h+='<div class="item" style="margin-bottom:8px"><div class="m" onclick="App.beAddBaum(\''+id+'\')"><b>'+esc(x.titel||x.art||'Baum')+'</b><span>'+esc(x.art||'(Art offen)')+(t?' · '+esc(t.la):'')+(x.hoehe?' · '+x.hoehe+' m':'')+(x.durchmesser?' · Ø '+x.durchmesser+' cm':'')+'</span></div><button class="iconbtn" onclick="App.beAddBaum(\''+id+'\')">'+I.edit+'</button><button class="iconbtn" style="color:#dc2626" onclick="App.beUnlinkBaum(\''+id+'\')">'+I.trash+'</button></div>';});
 h+='<div class="btn-row"><button class="btn sec sm" onclick="App.beAddBaum()">'+I.plus+' Baum hinzufügen</button><button class="btn sec sm" onclick="App.beSelectBaum()">Vorhandenen wählen</button></div></div>';
 return h;
}
function rBeleg(){
 const b=App.state.beleg;const isA=b.typ==='angebot';const ks=DB.get('kunden',[]);
 let h='<div class="back-row"><button class="iconbtn" onclick="App.belegExit()">'+I.back+'</button><div class="h-title" style="font-size:20px">'+(isA?'Angebot':'Auftrag')+'</div></div>';
 h+='<div class="card"><h3>'+(isA?'Angebotsdaten':'Auftragsdaten')+'</h3>';
 h+=fld('Datum','be_datum',b.datum,'date');
 h+='<div class="row2">'+fld('Nummer','be_nummer',b.nummer)+'<div class="field"><label class="fl">&nbsp;</label><div class="cbx '+(b.fortlaufend?'on':'')+'" onclick="App.beTog(this);App.state.beleg.fortlaufend=!App.state.beleg.fortlaufend"><span class="box">'+I.check+'</span>fortlaufende Nummer</div></div></div>';
 h+=belegKundeBlock(b);
 if(isA)h+=fld('Angebot gültig für (Monate)','be_gueltig',b.gueltigMonate,'number');
 h+='</div>';
 h+=belegBaeumeCard(b);
 h+='<div class="card"><h3>Erwartete Arbeitszeit</h3><div class="row2">'+fldN('Stunden (geschätzt)','be_std',b.stunden,'0.25','z. B. 4,5')+fldN('Arbeitskräfte','be_kraefte',b.anzahlKraefte,'1')+'</div><div class="hint" id="be_mh" style="margin:0">'+mhText(b)+'</div></div>';
 h+='<div class="card"><h3>Preiseingabe</h3><div class="chips"><button class="chip '+(b.preisModus==='modul'?'on':'')+'" onclick="App.bePreisModus(\'modul\')">Preis pro Modul</button><button class="chip '+(b.preisModus==='pauschal'?'on':'')+'" onclick="App.bePreisModus(\'pauschal\')">Pauschalpreis</button></div></div>';
 h+='<div class="card"><h3>Durchzuführende Arbeit mit</h3>'+DURCH_MIT.map(x=>'<div class="cbx '+(b.durchMit.indexOf(x)>=0?'on':'')+'" onclick="App.beDurch(\''+x+'\',this)"><span class="box">'+I.check+'</span>'+x+'</div>').join('')+'</div>';
 h+='<div class="card"><h3>Personal</h3>'+personalTable('beleg')+'</div>';
 h+='<div class="sec-label">Dienstleistung wählen</div>';
 DIENSTE.forEach(d=>{h+=dienstCard(d,b);});
 h+=zusatzCard(b);
 h+=customCard(b);
 h+='<div class="total" id="be_total"><span>Gesamt</span><span>'+eur(belegTotal(b))+'</span></div>';
 h+='<div class="card" style="margin-top:12px"><label class="fl">Rabatt anwenden (%)</label><input type="number" id="be_rabatt" placeholder="0" value="'+esc(b.rabatt)+'" oninput="App.beRecalc()" style="max-width:140px"></div>';
 h+='<div class="total big" id="be_net"><span>Neuer Gesamtbetrag</span><span>'+eur(belegNet(b))+'</span></div>';
 h+='<div class="card" style="margin-top:12px">'+fldArea('Fußnote (für Dokument)','be_foot',b.fussnote)+fldArea('Private Notiz','be_priv',b.privatNotiz)+'</div>';
 h+=fotoBlock('beleg','Fotos zum '+(isA?'Angebot':'Auftrag'));
 h+='<div class="card" style="margin-top:-4px"><div class="cbx '+(b.fotosImPdf?'on':'')+'" onclick="App.beTog(this);App.state.beleg.fotosImPdf=!App.state.beleg.fotosImPdf"><span class="box">'+I.check+'</span>Fotos ins PDF übernehmen</div></div>';
 h+='<div class="card"><h3>Unterschrift</h3><canvas id="sigpad" class="sigpad"></canvas><button class="btn sec sm" style="margin-top:6px" onclick="App.sigClear()">Löschen</button></div>';
 h+='<div class="btn-row"><button class="btn grad" onclick="App.belegSave()">Speichern</button></div>';
 h+='<div class="btn-row" style="margin-top:10px"><button class="btn sec" onclick="App.belegSave(true);App.belegPDFCurrent()">'+I.pdf+' PDF</button><button class="btn sec" onclick="App.belegCopy()">'+I.copy+' Text</button></div>';
 setTimeout(initSig,30);
 return h;
}
function dienstCard(d,b){
 const m=b.dienste[d.key]||{on:false,pos:{},anzahl:'',preis:'',notiz:''};
 let h='<div class="mod"><div class="mod-head"><span>'+esc(d.titel)+'</span><button class="mod-toggle" onclick="App.beDienst(\''+d.key+'\')">'+(m.on?I.minus:I.plus)+'</button></div>';
 if(m.on){
  h+='<div class="mod-body">';
  h+='<label class="fl" style="margin-top:10px">Anzahl der Bäume</label><input type="number" id="d_'+d.key+'_anz" value="'+esc(m.anzahl)+'" style="max-width:120px;margin-bottom:6px">';
  h+='<div style="margin-bottom:10px"><button class="btn sec sm" onclick="App.beAddBaum()">'+I.plus+' Baum spezifizieren</button></div>';
  if(d.key==='entsorgung')h+='<div class="subgrp">Menge</div><div class="row2">'+fldN('Häckselgut (m³)','d_entsorgung_hack',m.hackM3,'0.5','0')+fldN('Stammholz (m³)','d_entsorgung_stamm',m.stammM3,'0.5','0')+'</div>';
  d.pos.forEach(p=>{const on=m.pos&&m.pos[p];h+='<div class="cbx '+(on?'on':'')+'" onclick="App.beDienstPos(\''+d.key+'\',\''+esc(p).replace(/'/g,"\\'")+'\',this)"><span class="box">'+I.check+'</span>'+esc(p)+'</div>';});
  h+='<div class="price-line"><span class="k">Preis</span><input type="number" id="d_'+d.key+'_preis" value="'+esc(m.preis)+'" placeholder="0,00" oninput="App.beRecalc()"></div>';
  h+=rpHint(d.key);
  h+='<div style="margin-top:8px">'+fldArea('Notiz','d_'+d.key+'_notiz',m.notiz)+'</div>';
  h+='</div>';
 }
 h+='</div>';return h;
}
function zusatzCard(b){
 const z=b.zusatz;const on=window._zusatzOpen;
 let h='<div class="mod"><div class="mod-head"><span>Zusätzliche Ausgaben</span><button class="mod-toggle" onclick="App.beZusatz()">'+(on?I.minus:I.plus)+'</button></div>';
 if(on){
  h+='<div class="mod-body"><div class="subgrp">Geräteverleih</div>';
  h+=zRow('Hubarbeitsbühne','hub',z.hub);
  h+=zRow('Kran','kran',z.kran);
  h+='<div class="subgrp">Sonstiges</div>';
  h+=zRow('Reisekosten','reise',z.reise);
  h+=zRow('Halteverbot erforderlich','halteverbot',z.halteverbot);
  if(z.halteverbot.on){
   h+='<div style="margin-left:32px;margin-top:4px"><label class="fl">Aufstellung</label><div class="chips"><button class="chip '+(z.halteverbot.seite==='einseitig'?'on':'')+'" onclick="App.beHalteSeite(\'einseitig\')">einseitig</button><button class="chip '+(z.halteverbot.seite==='beidseitig'?'on':'')+'" onclick="App.beHalteSeite(\'beidseitig\')">auf beiden Straßenseiten</button></div></div>';
   h+=rpHalteHint(z.halteverbot.seite);
  }
  h+='</div>';
 }
 h+='</div>';return h;
}
function zRow(label,key,obj){
 const rp=window.RICHTPREISE&&RICHTPREISE.zusatz&&RICHTPREISE.zusatz[key];
 let h='<div style="display:flex;align-items:center;gap:10px;margin:6px 0"><div class="cbx '+(obj.on?'on':'')+'" style="flex:1" onclick="App.beZ(\''+key+'\',this)"><span class="box">'+I.check+'</span>'+esc(label)+'</div><input type="number" id="z_'+key+'_preis" value="'+esc(obj.preis)+'" placeholder="0,00" oninput="App.beRecalc()" style="max-width:110px;text-align:right"></div>';
 if(rp&&rp.von!==undefined)h+='<div class="rp-hint">'+rpNum(rp.von)+'–'+rpNum(rp.bis)+' '+esc(rp.e)+'<button class="btn sec sm" onclick="App.fillPrice(\'z_'+key+'_preis\','+rp.mid+')">Ø übernehmen</button></div>';
 return h;
}
function customCard(b){
 let h='<div class="mod"><div class="mod-head"><span>Dienstleistung hinzufügen</span><button class="mod-toggle" onclick="App.beCustomAdd()">'+I.plus+'</button></div>';
 if(b.custom&&b.custom.length){h+='<div class="mod-body">';b.custom.forEach((c,i)=>{h+='<div style="display:flex;align-items:center;gap:10px;margin:8px 0"><input type="text" value="'+esc(c.titel)+'" oninput="App.state.beleg.custom['+i+'].titel=this.value" placeholder="Titel" style="flex:1"><input type="number" value="'+esc(c.preis)+'" oninput="App.state.beleg.custom['+i+'].preis=this.value;App.beRecalc()" placeholder="€" style="max-width:90px"><button class="iconbtn" style="color:#dc2626" onclick="App.beCustomDel('+i+')">'+I.trash+'</button></div>';});h+='</div>';}
 h+='</div>';return h;
}
/* Beleg handlers */
App.beCollect=function(){const b=App.state.beleg;if(!b)return;
 if(!document.getElementById('be_datum'))return;keepSig(b);
 b.datum=val('be_datum')||b.datum;b.nummer=val('be_nummer')||b.nummer;b.gueltigMonate=val('be_gueltig');
 b.kd=b.kd||{};['name','adresse','plz','stadt','telefon','email'].forEach(f=>{const e=document.getElementById('be_k'+f);if(e)b.kd[f]=e.value.trim()});
 b.stunden=val('be_std');b.anzahlKraefte=val('be_kraefte');b.rabatt=val('be_rabatt');b.fussnote=val('be_foot');b.privatNotiz=val('be_priv');
 DIENSTE.forEach(d=>{const m=b.dienste[d.key];if(m&&m.on){m.anzahl=val('d_'+d.key+'_anz');m.preis=val('d_'+d.key+'_preis');m.notiz=val('d_'+d.key+'_notiz');if(d.key==='entsorgung'){m.hackM3=val('d_entsorgung_hack');m.stammM3=val('d_entsorgung_stamm');}}});
 ['hub','kran','reise','halteverbot'].forEach(k=>{if(b.zusatz[k].on)b.zusatz[k].preis=val('z_'+k+'_preis');});
};
App.beTog=function(el){el.classList.toggle('on')};
App.bePreisModus=function(m){App.beCollect();App.state.beleg.preisModus=m;App.render()};
App.beDurch=function(x,el){const a=App.state.beleg.durchMit;const i=a.indexOf(x);if(i>=0)a.splice(i,1);else a.push(x);el.classList.toggle('on')};
App.beDienst=function(key){App.beCollect();const b=App.state.beleg;if(!b.dienste[key])b.dienste[key]={on:false,pos:{},anzahl:'',preis:'',notiz:''};b.dienste[key].on=!b.dienste[key].on;App.render()};
App.beDienstPos=function(key,p,el){const m=App.state.beleg.dienste[key];m.pos=m.pos||{};m.pos[p]=!m.pos[p];el.classList.toggle('on')};
App.beZusatz=function(){App.beCollect();window._zusatzOpen=!window._zusatzOpen;App.render()};
App.beZ=function(key,el){App.beCollect();App.state.beleg.zusatz[key].on=!App.state.beleg.zusatz[key].on;App.render()};
App.beHalteSeite=function(s){App.state.beleg.zusatz.halteverbot.seite=s;App.render()};
App.beCustomAdd=function(){App.beCollect();App.state.beleg.custom=App.state.beleg.custom||[];App.state.beleg.custom.push({titel:'',preis:''});App.render()};
App.beCustomDel=function(i){App.state.beleg.custom.splice(i,1);App.render();App.beRecalc()};
App.beRecalc=function(){App.beCollect();const b=App.state.beleg;const t=document.getElementById('be_total');if(t)t.children[1].textContent=eur(belegTotal(b));const n=document.getElementById('be_net');if(n)n.children[1].textContent=eur(belegNet(b))};
App.belegExit=function(){if(confirm('Verlassen? Nicht gespeicherte Änderungen gehen verloren.'))App.go('belege',{belegTyp:App.state.belegTyp})};
App.belegSave=function(silent){App.beCollect();const b=App.state.beleg;belegKundeSync(b);if(App._sigDirty&&document.getElementById('sigpad'))b.unterschrift=document.getElementById('sigpad').toDataURL('image/png');const list=DB.get('belege',[]);const i=list.findIndex(x=>x.id===b.id);if(i>=0)list[i]=b;else list.push(b);DB.set('belege',list);if(!silent){toast((b.typ==='angebot'?'Angebot':'Auftrag')+' gespeichert');App.go('belege',{belegTyp:b.typ})}};
App.beAddBaum=function(id){App.beCollect();const b=App.state.beleg;const bs=DB.get('baeume',[]);const baum=id?bs.find(x=>x.id===id):{id:uid(),titel:'',kundeId:b.kundeId,art:'',hoehe:'',durchmesser:'',kronenprojektion:'',notiz:''};if(!baum){toast('Baum nicht gefunden');return}
 modal('<h3>'+(id?'Baum bearbeiten':'Baum spezifizieren')+'</h3>'+
  '<div class="field"><label class="fl">Baumart (deutsch + lateinisch)</label>'+treePicker('bb_art',baum.art)+'</div>'+
  '<div class="row2">'+fld('Höhe (m)','bb_hoehe',baum.hoehe,'number')+fld('Durchmesser (cm)','bb_dm',baum.durchmesser,'number')+'</div>'+
  fld('Kronenprojektion (m)','bb_kp',baum.kronenprojektion,'number')+
  fld('Bezeichnung / Standort (optional)','bb_titel',baum.titel)+
  fldArea('Notiz','bb_notiz',baum.notiz)+
  '<div class="hint">Wird auch im Reiter „Bäume" gespeichert und mit diesem '+(b.typ==='angebot'?'Angebot':'Auftrag')+' verknüpft.</div>'+
  '<div class="btn-row"><button class="btn sec" onclick="App.closeModal()">Abbrechen</button><button class="btn" onclick="App.beBaumSave(\''+baum.id+'\')">Speichern</button></div>');};
App.beBaumSave=function(id){const bs=DB.get('baeume',[]);let baum=bs.find(x=>x.id===id);const d={titel:val('bb_titel'),art:val('bb_art'),hoehe:val('bb_hoehe'),durchmesser:val('bb_dm'),kronenprojektion:val('bb_kp'),notiz:val('bb_notiz'),kundeId:App.state.beleg.kundeId};if(baum)Object.assign(baum,d);else{baum={id,createdAt:new Date().toISOString(),modus:'einzel',standortTyp:'kunde',lat:null,lng:null,bewertung:'',fotos:[],...d};bs.push(baum);}DB.set('baeume',bs);const b=App.state.beleg;b.baeume=b.baeume||[];if(b.baeume.indexOf(id)<0)b.baeume.push(id);App.closeModal();App.render();toast('Baum gespeichert & verknüpft');};
App.beSelectBaum=function(){App.beCollect();const b=App.state.beleg;const bs=DB.get('baeume',[]);const avail=bs.filter(x=>(b.baeume||[]).indexOf(x.id)<0);if(!avail.length){toast('Keine weiteren Bäume vorhanden');return;}sheet('<div class="si" style="font-weight:800">Vorhandenen Baum wählen</div>'+avail.map(x=>{const t=treeFind(tt=>tt.de===x.art);return '<div class="si" onclick="App.closeSheet();App.beLinkBaum(\''+x.id+'\')"><span>'+esc(x.titel||x.art||'Baum')+(t?' · '+esc(t.la):'')+(x.hoehe?' · '+x.hoehe+' m':'')+'</span><span class="chev">'+I.chev+'</span></div>'}).join('')+'<div class="sfoot"><button class="btn sec sm" onclick="App.closeSheet()">Abbrechen</button></div>');};
App.beLinkBaum=function(id){const b=App.state.beleg;b.baeume=b.baeume||[];if(b.baeume.indexOf(id)<0)b.baeume.push(id);App.render();toast('Baum verknüpft')};
App.beUnlinkBaum=function(id){const b=App.state.beleg;b.baeume=(b.baeume||[]).filter(x=>x!==id);App.render();toast('Verknüpfung entfernt')};

/* ===== Signature ===== */
App._sig=null;App._sigDirty=false;
function initSig(){const c=document.getElementById('sigpad');if(!c)return;const r=window.devicePixelRatio||1;c.width=c.offsetWidth*r;c.height=150*r;const x=c.getContext('2d');x.scale(r,r);x.lineWidth=2.2;x.lineCap='round';x.strokeStyle='#111';App._sig=x;App._sigDirty=false;const b=({beleg:App.state.beleg,gb:App.state.gb,pruefung:App.state.pr})[App.state.view];if(b&&b.unterschrift){const im=new Image();im.onload=()=>x.drawImage(im,0,0,c.offsetWidth,150);im.src=b.unterschrift}let dr=false;const pos=e=>{const t=e.touches?e.touches[0]:e,rc=c.getBoundingClientRect();return{x:t.clientX-rc.left,y:t.clientY-rc.top}};const st=e=>{dr=true;App._sigDirty=true;const p=pos(e);x.beginPath();x.moveTo(p.x,p.y);e.preventDefault()};const mv=e=>{if(!dr)return;const p=pos(e);x.lineTo(p.x,p.y);x.stroke();e.preventDefault()};const en=()=>dr=false;c.onmousedown=st;c.onmousemove=mv;c.onmouseup=en;c.onmouseleave=en;c.ontouchstart=st;c.ontouchmove=mv;c.ontouchend=en}
App.sigClear=function(){const c=document.getElementById('sigpad');if(c&&App._sig){App._sig.clearRect(0,0,c.width,c.height);App._sigDirty=false;if(App.state.beleg)App.state.beleg.unterschrift=null}};

/* ===== PDF / Copy für Beleg ===== */
App.belegPDF=function(id){const b=DB.get('belege',[]).find(x=>x.id===id);if(b)printBeleg(b)};
App.belegPDFCurrent=function(){printBeleg(App.state.beleg)};
function printBeleg(b){(b.fotosImPdf?fotosLoad(b.fotos):Promise.resolve([])).then(fs=>{document.getElementById('print-area').innerHTML=buildBelegPDF(b,fs);setTimeout(()=>window.print(),250)})}
function entsMenge(m){const a=[];if(parseFloat(m.hackM3))a.push('Häckselgut '+String(m.hackM3).replace('.',',')+' m³');if(parseFloat(m.stammM3))a.push('Stammholz '+String(m.stammM3).replace('.',',')+' m³');return a.join(' · ')}
function buildBelegPDF(b,fotos){
 const k=belegKunde(b);const isA=b.typ==='angebot';
 let rows='';
 DIENSTE.forEach(d=>{const m=(b.dienste||{})[d.key];if(m&&m.on){const sel=Object.keys(m.pos||{}).filter(p=>m.pos[p]);const em=d.key==='entsorgung'?entsMenge(m):'';rows+='<tr><td>'+esc(d.titel)+(m.anzahl?' · '+esc(m.anzahl)+' Bäume':'')+(sel.length?'<br><span style="color:#555;font-size:10px">'+esc(sel.join(', '))+'</span>':'')+(em?'<br><span style="color:#555;font-size:10px">Menge: '+esc(em)+'</span>':'')+'</td><td style="text-align:right">'+eur(m.preis)+'</td></tr>'}});
 const z=b.zusatz||{};
 if(z.hub&&z.hub.on)rows+='<tr><td>Hubarbeitsbühne</td><td style="text-align:right">'+eur(z.hub.preis)+'</td></tr>';
 if(z.kran&&z.kran.on)rows+='<tr><td>Kran</td><td style="text-align:right">'+eur(z.kran.preis)+'</td></tr>';
 if(z.reise&&z.reise.on)rows+='<tr><td>Reisekosten</td><td style="text-align:right">'+eur(z.reise.preis)+'</td></tr>';
 if(z.halteverbot&&z.halteverbot.on)rows+='<tr><td>Halteverbotszone ('+esc(z.halteverbot.seite)+')</td><td style="text-align:right">'+eur(z.halteverbot.preis)+'</td></tr>';
 (b.custom||[]).forEach(c=>{if(c.titel||c.preis)rows+='<tr><td>'+esc(c.titel||'Position')+'</td><td style="text-align:right">'+eur(c.preis)+'</td></tr>'});
 const total=belegTotal(b),rabatt=parseFloat(b.rabatt)||0,net=belegNet(b),ust=settings.ust||0;
 let h='<div class="pr">';
 h+='<div style="display:flex;justify-content:space-between;align-items:flex-start">';
 h+='<div>'+(meineDaten.logo&&meineDaten.logoInDocs?'<img src="'+meineDaten.logo+'" style="max-height:50px;margin-bottom:6px"><br>':'')+'<h1>'+(isA?'Angebot':'Auftrag')+' Nr. '+esc(b.nummer)+'</h1><div class="sub">Datum: '+fmtDate(b.datum)+(isA&&b.gueltigMonate?' · gültig '+esc(b.gueltigMonate)+' Monate':'')+'</div></div>';
 h+='<div style="text-align:right;font-size:11px">'+esc(meineDaten.name||'')+'<br>'+esc(meineDaten.adresse||'')+'<br>'+esc(meineDaten.plz||'')+' '+esc(meineDaten.stadt||'')+'<br>'+esc(meineDaten.email||'')+'<br>'+esc(meineDaten.telefon||'')+'</div></div>';
 h+='<div class="sec"><h4>Kunde</h4><div>'+esc(k.name||'–')+(k.adresse?'<br>'+esc(k.adresse):'')+((k.plz||k.stadt)?'<br>'+esc(k.plz||'')+' '+esc(k.stadt||''):'')+'</div></div>';
 const _bs=DB.get('baeume',[]);const _tr=(b.baeume||[]).map(id=>_bs.find(x=>x.id===id)).filter(Boolean);
 if(_tr.length)h+='<div class="sec"><h4>Bäume / Objekte</h4>'+_tr.map(x=>{const t=treeFind(tt=>tt.de===x.art);return '<div class="r"><span>'+esc(x.titel||x.art||'Baum')+(t?' ('+esc(t.la)+')':'')+'</span><span>'+(x.hoehe?esc(x.hoehe)+' m':'')+(x.durchmesser?' · Ø '+esc(x.durchmesser)+' cm':'')+(x.kronenprojektion?' · KPR '+esc(x.kronenprojektion)+' m':'')+'</span></div>'}).join('')+'</div>';
 const _pp=(b.personal||[]).filter(p=>p.name);if(_pp.length)h+='<div class="sec"><h4>Personal</h4>'+_pp.map(p=>'<div class="r"><span>'+esc(p.name)+'</span><span>'+(Object.keys(p.q||{}).filter(q=>p.q[q]).join(', ')||'–')+'</span></div>').join('')+'</div>';
 {const _st=parseFloat(String(b.stunden||'').replace(',','.'))||0,_n=parseInt(b.anzahlKraefte)||0;let _r='';
  if(b.durchMit&&b.durchMit.length)_r+='<div class="r"><span style="color:#555">Durchführung mit</span><span>'+esc(b.durchMit.join(', '))+'</span></div>';
  if(_st)_r+='<div class="r"><span style="color:#555">Geschätzte Arbeitszeit</span><span>'+fmtNum(_st)+' Std.'+(_n?' · '+_n+' Arbeitskräfte · '+fmtNum(_st*_n)+' Personenstunden':'')+'</span></div>';
  else if(_n)_r+='<div class="r"><span style="color:#555">Arbeitskräfte</span><span>'+_n+'</span></div>';
  if(_r)h+='<div class="sec">'+_r+'</div>';}
 h+='<div class="sec"><h4>Leistungen</h4><table><thead><tr><th>Position</th><th style="text-align:right">Betrag</th></tr></thead><tbody>'+(rows||'<tr><td>–</td><td></td></tr>')+'</tbody></table>';
 h+='<div class="tot">Zwischensumme: '+eur(total)+'</div>';
 if(rabatt)h+='<div class="tot">Rabatt '+rabatt+'%: −'+eur(total*rabatt/100)+'</div>';
 const sh=settings.preisModus==='keine'?'(keine USt. ausgewiesen)':settings.preisModus==='inkl'?'(inkl. '+ust+'% USt.)':'(zzgl. '+ust+'% USt.)';
 h+='<div class="tot">Gesamt '+sh+': '+eur(net)+'</div></div>';
 if(b.fussnote)h+='<div class="sec" style="font-size:11px">'+esc(b.fussnote)+'</div>';
 h+='<div class="sig"><div>'+(b.unterschrift?'<img src="'+b.unterschrift+'">':'')+'<div style="border-top:1px solid #000;width:200px;font-size:11px;padding-top:3px">Unterschrift</div></div><div style="font-size:11px;color:#555">erstellt: '+new Date().toLocaleDateString('de-DE')+'</div></div>';
 h+=pdfFotos(fotos);
 h+='</div>';return h;
}
App.belegCopy=function(){App.beCollect();const b=App.state.beleg;const k=belegKunde(b);const L=[];
 L.push((b.typ==='angebot'?'ANGEBOT':'AUFTRAG')+' Nr. '+b.nummer);L.push('Datum: '+fmtDate(b.datum));L.push('Kunde: '+(k.name||'–'));L.push('Durchführung mit: '+(b.durchMit.join(', ')||'–'));if(b.stunden)L.push('Geschätzte Arbeitszeit: '+b.stunden+' Std.'+(b.anzahlKraefte?' · '+b.anzahlKraefte+' Arbeitskräfte':''));
 const cbs=DB.get('baeume',[]);(b.baeume||[]).forEach(id=>{const x=cbs.find(t=>t.id===id);if(x)L.push('Baum: '+(x.art||x.titel||'')+(x.hoehe?' · '+x.hoehe+' m':'')+(x.durchmesser?' · Ø '+x.durchmesser+' cm':''))});
 L.push('');
 DIENSTE.forEach(d=>{const m=(b.dienste||{})[d.key];if(m&&m.on){L.push('- '+d.titel+': '+eur(m.preis)+(Object.keys(m.pos||{}).filter(p=>m.pos[p]).length?' ['+Object.keys(m.pos).filter(p=>m.pos[p]).join(', ')+']':'')+(d.key==='entsorgung'&&entsMenge(m)?' ('+entsMenge(m)+')':''))}});
 const z=b.zusatz;['hub','kran','reise'].forEach(kk=>{if(z[kk].on)L.push('- '+{hub:'Hubarbeitsbühne',kran:'Kran',reise:'Reisekosten'}[kk]+': '+eur(z[kk].preis))});
 if(z.halteverbot.on)L.push('- Halteverbotszone ('+z.halteverbot.seite+'): '+eur(z.halteverbot.preis));
 (b.custom||[]).forEach(c=>{if(c.titel)L.push('- '+c.titel+': '+eur(c.preis))});
 L.push('');L.push('Gesamt: '+eur(belegNet(b)));
 const txt=L.join('\n');navigator.clipboard.writeText(txt).then(()=>toast('Text kopiert')).catch(()=>modal('<h3>Text</h3><textarea style="height:240px">'+esc(txt)+'</textarea><button class="btn" style="margin-top:8px" onclick="App.closeModal()">Schließen</button>'));
};

/* ===== STAMMGEWICHT RECHNER ===== */
function rRechner(){
 const metric=settings.units!=='imperial';const dens=TREES.filter(t=>t.d).sort((a,b)=>a.de.localeCompare(b.de,'de'));
 let h=backRow('Stammgewicht Rechner','start');
 h+='<div class="card">';
 h+='<div class="chips" style="margin-bottom:14px"><button class="chip '+(metric?'on':'')+'" onclick="App.rUnits(\'metric\')">Metrisch</button><button class="chip '+(!metric?'on':'')+'" onclick="App.rUnits(\'imperial\')">Imperial</button></div>';
 h+='<div class="field"><label class="fl">Art auswählen</label><select id="r_sp" onchange="App.rSp()"><option value="">— Holzart wählen —</option>'+dens.map(t=>'<option value="'+t.d+'">'+esc(t.de)+' ('+esc(t.la)+') · '+t.d+' kg/m³</option>').join('')+'<option value="custom">Andere / eigener Wert…</option></select></div>';
 h+='<div id="r_cust" style="display:none" class="field"><label class="fl">Eigene Dichte (kg/m³, frisch)</label><input type="number" id="r_dens" oninput="App.rCalc()"></div>';
 if(metric){h+='<div class="row2"><div class="field"><label class="fl">Länge L</label><div class="inline"><input type="number" id="r_len" value="120" oninput="App.rCalc()"><select id="r_lenu" onchange="App.rCalc()"><option value="cm">cm</option><option value="m">m</option></select></div></div>'+fld('Durchmesser D (cm)','r_dia','40','number')+'</div>';}
 else{h+='<div class="row2">'+fld('Länge L (ft)','r_len','4','number')+fld('Durchmesser D (in)','r_dia','16','number')+'</div><input type="hidden" id="r_lenu" value="ft">';}
 h+='<div class="field"><label class="fl">Zustand</label><div class="chips"><button class="chip on" id="r_cf" onclick="App.rCond(\'frisch\')">frisch (grün)</button><button class="chip" id="r_ca" onclick="App.rCond(\'abgelagert\')">abgelagert</button></div></div>';
 h+='<button class="btn grad" onclick="App.rCalc()">Berechnen</button>';
 h+='<div class="total big" id="r_res" style="display:none;justify-content:center;font-size:24px;margin-top:14px"></div>';
 h+='</div><div class="hint">Zylinder-Berechnung V = π·(D/2)²·L (konservativ – eher schwer, gut für Rigging). Dichten = Richtwerte frisches Holz; „abgelagert" ≈ 72 %.</div>';
 App._cond='frisch';
 return h;
}
App._cond='frisch';
App.rUnits=function(u){settings.units=u;saveSettings();App.render()};
App.rSp=function(){const s=document.getElementById('r_sp');document.getElementById('r_cust').style.display=s.value==='custom'?'block':'none';App.rCalc()};
App.rCond=function(c){App._cond=c;const f=document.getElementById('r_cf'),a=document.getElementById('r_ca');if(f)f.classList.toggle('on',c==='frisch');if(a)a.classList.toggle('on',c==='abgelagert');App.rCalc()};
App.rCalc=function(){const s=document.getElementById('r_sp');if(!s)return;let dens=s.value==='custom'?num('r_dens'):parseFloat(s.value);const len=num('r_len'),dia=num('r_dia'),lenu=val('r_lenu'),metric=settings.units!=='imperial';const res=document.getElementById('r_res');if(!dens||!len||!dia){res.style.display='none';return}let L,D;if(metric){L=lenu==='m'?len:len/100;D=dia/100}else{L=len*0.3048;D=dia*0.0254}const V=Math.PI*Math.pow(D/2,2)*L;let kg=V*dens*(App._cond==='abgelagert'?0.72:1);res.style.display='flex';res.innerHTML=metric?'<span></span><span>'+kg.toFixed(1)+' kg</span>':'<span></span><span>'+(kg*2.20462).toFixed(0)+' lbs</span>'};

/* ===== GEFÄHRDUNGSBEURTEILUNG ===== */
const GB_STEPS=[{t:'Einsatz'},{t:'Personal'},{t:'Arbeiten & Ausrüstung'},{t:'Bäume & Umgebung'},{t:'Gefahren & Rettung'},{t:'Abschluss'}];
const GB_TYP=['SKT','Hubarbeitsbühne','Kran','vom Boden aus','Steigeisen Fällung'];
const GB_ARB=['Jungbaumpflege','Kronenpflege','Lichtraumprofilschnitt','Totholzentfernung','Einkürzen von Kronenteilen','Einkürzen der gesamten Krone','Formschnitt / Kopfbaumschnitt','Behandlung gekappter Kronen','Kronensicherung','Entfernung baumfremden Bewuchses','EPS-Bekämpfung','Fällung','Fällung mit Abseiltechnik','Fällung mit Kran'];
const GB_AUS=['Betriebssichere PSA vorhanden','Abseilausrüstung vorhanden','PSA überprüft','Abseilausrüstung überprüft','Zwei Kletterausrüstungen','Rettungsmaterial','Maschinen vorhanden','Maschinen überprüft','Erste-Hilfe-Ausrüstung','Funk erforderlich','Funk geprüft','Absperr- u. Sicherungsmaterial'];
const GB_UMF=['Bodenrisse','Nachbarbäume','Wurzelverletzung','Pilzfruchtkörper','Fallbereich frei','Gebäude'];
const GB_STAMM=['Defektsymptome (Risse/Wülste)','Pilzfruchtkörper','Faulstellen','Baumchirurgie','Wunden','Abgestorbene Rinde','Baumfremder Bewuchs (Efeu etc.)'];
const GB_KRONE=['Vitalität auffällig','Totholz','Defektsymptome','Druckzwiesel','Ausbrüche','Sturmschäden','Insektennester','Alte Kronensicherung','Kappung','Faulstellen','Pilzfruchtkörper'];
const GB_ORT=['Witterung geeignet','Stromleitungen','Fallbereich frei','Verkehrssicherung notwendig','Abseilen erforderlich','Kommunikation möglich','Rückweiche vorhanden'];
const GB_RETT=['Einsatzort / Zufahrt bekannt','Notruf möglich','Maßnahmen besprochen','Erste-Hilfe-Material','Rettungsmaterial','Rettungsseil','Ruf- und Sichtverbindung'];
const GB_PERS=['Arbeitsauftrag besprochen','Bodenperson','Personal eingeteilt','Sicherungsposten','Kommunikation abgesprochen','Gesundheitliche Eignung','Ausreichende Erfahrung'];
const GB_AUSR=['Normalbaum','leichte Neigung','starke Neigung'];
const GB_KGEW=['gleichmäßig','einseitig','stark einseitig'];
function newGBTree(){return {id:uid(),baumId:'',art:'',hoehe:'',durchmesser:'',ausrichtung:'',umfeld:[],umfeldSonst:'',stamm:[],krone:[],kronengewicht:'',sicher:'',bemerkung:''}}
function newGB(){return {id:uid(),createdAt:new Date().toISOString(),belegId:'',ort:'',zufahrt:'',datum:todayISO(),zeitVon:'',zeitBis:'',einsatztyp:[],einsatztypSonst:'',aufsicht:'',personal:[],personalChk:[],arbeiten:[],arbeitenSonst:'',ausruestung:[],baeume:[newGBTree()],gefahrenOrt:[],rettung:[],besonderheiten:'',verantw:'',unterschrift:null,fotos:[]}}
function gbMigrate(g){if(!g.baeume||!g.baeume.length){const t=newGBTree();Object.assign(t,{baumId:g.baumId||'',art:g.art||'',hoehe:g.hoehe||'',durchmesser:g.durchmesser||'',umfeld:g.umfeld||[],stamm:g.stamm||[],krone:g.krone||[],sicher:g.sicher||'',bemerkung:g.bemerkung||''});g.baeume=[t]}
 ['einsatztyp','personal','personalChk','arbeiten','ausruestung','gefahrenOrt','rettung','fotos'].forEach(k=>g[k]=g[k]||[]);return g}
function gbOverall(g){const t=(g.baeume||[]).map(x=>x.sicher);if(!t.length||t.every(x=>!x))return '';if(t.indexOf('Nein')>=0)return 'Nein';if(t.indexOf('Untersuchung nötig')>=0)return 'Untersuchung nötig';if(t.every(x=>x==='Ja'))return 'Ja';return 'offen'}
function gbTag(s){return s==='Ja'?'<span class="badge g">sicher</span>':s==='Nein'?'<span class="badge" style="background:#fde2e2;color:#b91c1c">nicht sicher</span>':s?'<span class="badge b">'+(s==='offen'?'offen':'Prüfung')+'</span>':''}
function gbTreeName(t,i){return 'Baum '+(i+1)+(t.art?' · '+t.art:'')}
function rGB(){
 if(App.state.gb){return rGBWizard()}
 const list=DB.get('gb',[]).slice().sort((a,b)=>(b.datum||'').localeCompare(a.datum||''));
 let h=backRow('Gefährdungsbeurteilung','start');
 h+='<div class="h-sub" style="margin-top:-4px">Digitale Gefährdungsermittlung / Baumsicherheitsbeurteilung</div>';
 h+='<div class="addrow" onclick="App.gbStart()"><span>'+I.plus+' Neue Beurteilung</span></div>';
 if(!list.length)h+='<div class="empty">Noch keine Beurteilungen</div>';
 const belege=DB.get('belege',[]);
 list.forEach(g0=>{const g=gbMigrate(JSON.parse(JSON.stringify(g0)));const bz=belege.find(x=>x.id===g.belegId);const arts=g.baeume.map(t=>t.art).filter(Boolean);
  h+='<div class="item"><div class="m" onclick="App.gbOpen(\''+g.id+'\')"><b>'+esc(g.ort||'Kein Ort')+' '+gbTag(gbOverall(g))+'</b><span>'+fmtDate(g.datum)+' · '+(g.baeume.length>1?g.baeume.length+' Bäume: ':'')+esc(arts.join(', ')||'Baumart unbekannt')+(bz?' · '+(bz.typ==='angebot'?'Angebot ':'Auftrag ')+bz.nummer:'')+'</span></div><button class="iconbtn" onclick="App.gbPDF(\''+g.id+'\')">'+I.pdf+'</button><button class="iconbtn" style="color:#dc2626" onclick="App.gbDel(\''+g.id+'\')">'+I.trash+'</button></div>';});
 h+=foot();return h;
}
App.gbStart=function(){App.state.gb=newGB();App.state.gbStep=0;App.state.gbTree=0;App.go('gb')};
App.gbOpen=function(id){const g=DB.get('gb',[]).find(x=>x.id===id);if(!g)return;App.state.gb=gbMigrate(JSON.parse(JSON.stringify(g)));App.state.gbStep=0;App.state.gbTree=0;App.go('gb')};
App.gbDel=function(id){if(!confirm('Beurteilung löschen?'))return;const _g=DB.get('gb',[]).find(x=>x.id===id);if(_g)fotosDelAll(_g.fotos);DB.set('gb',DB.get('gb',[]).filter(x=>x.id!==id));App.render()};
App.gbExit=function(){if(confirm('Verlassen? Nicht gespeicherte Änderungen gehen verloren.')){App.state.gb=null;App.go('gb')}};
App.gbStep=function(n){gbCollect();App.state.gbStep=n;App.render();window.scrollTo(0,0)};
function gbCur(){const g=App.state.gb;let i=App.state.gbTree||0;if(i>=g.baeume.length)i=App.state.gbTree=0;return g.baeume[i]}
function gbCollect(){const g=App.state.gb,s=App.state.gbStep;if(!g)return;
 if(s===0&&document.getElementById('g_ort')){g.ort=val('g_ort');g.zufahrt=val('g_zuf');g.datum=val('g_datum')||g.datum;g.zeitVon=val('g_von');g.zeitBis=val('g_bis');g.aufsicht=val('g_auf');g.belegId=val('g_beleg');g.einsatztypSonst=val('g_typs')}
 if(s===2&&document.getElementById('g_arbs')){g.arbeitenSonst=val('g_arbs')}
 if(s===3&&document.getElementById('g_art')){const t=gbCur();t.art=val('g_art');t.hoehe=val('g_hoehe');t.durchmesser=val('g_dm');t.umfeldSonst=val('g_usonst');t.bemerkung=val('g_bem')}
 if(s===4&&document.getElementById('g_bes')){g.besonderheiten=val('g_bes')}
 if(s===5&&document.getElementById('g_verantw')){g.verantw=val('g_verantw');keepSig(g)}
}
function gbGroup(title,arr,g,key,tree){const o=tree?gbCur():g;o[key]=o[key]||[];let h=title?'<div class="sec-label">'+title+'</div>':'';arr.forEach(l=>{const on=o[key].indexOf(l)>=0;h+='<div class="cbx '+(on?'on':'')+'" onclick="App.gbTogKey(\''+key+'\',\''+esc(l).replace(/'/g,"\\'")+'\',this,'+(tree?1:0)+')"><span class="box">'+I.check+'</span>'+esc(l)+'</div>'});return h}
App.gbTogKey=function(key,l,el,tree){const o=tree?gbCur():App.state.gb;o[key]=o[key]||[];const i=o[key].indexOf(l);if(i>=0)o[key].splice(i,1);else o[key].push(l);el.classList.toggle('on')};
function gbChips(arr,cur,fn){return '<div class="chips">'+arr.map(x=>'<button class="chip '+(cur===x?'on':'')+'" onclick="'+fn+'(\''+esc(x).replace(/'/g,"\\'")+'\')">'+esc(x)+'</button>').join('')+'</div>'}
App.gbTSet=function(key,v){gbCollect();const t=gbCur();t[key]=t[key]===v?'':v;App.render()};
App.gbSicher=function(s){App.gbTSet('sicher',s)};
function gbToTabs(){setTimeout(()=>{const t=document.querySelector('.tabs');if(t)window.scrollTo(0,t.getBoundingClientRect().top+window.scrollY-80)},10)}
App.gbTreeSel=function(i){gbCollect();App.state.gbTree=i;App.render();gbToTabs()};
App.gbTreeAdd=function(){gbCollect();const g=App.state.gb;g.baeume.push(newGBTree());App.state.gbTree=g.baeume.length-1;App.render();gbToTabs();toast('Baum '+g.baeume.length+' hinzugefügt')};
App.gbTreeDel=function(){const g=App.state.gb;if(g.baeume.length<2)return;if(!confirm('Diesen Baum aus der Beurteilung entfernen?'))return;g.baeume.splice(App.state.gbTree||0,1);App.state.gbTree=0;App.render()};
App.gbTreeFromReg=function(id){if(!id)return;gbCollect();const x=DB.get('baeume',[]).find(b=>b.id===id);if(!x)return;const t=gbCur();Object.assign(t,{baumId:id,art:x.art||t.art,hoehe:x.hoehe||t.hoehe,durchmesser:x.durchmesser||t.durchmesser});App.render();toast('Baumdaten übernommen')};
App.gbTreesFromBeleg=function(){gbCollect();const g=App.state.gb;const b=DB.get('belege',[]).find(x=>x.id===g.belegId);const reg=DB.get('baeume',[]);if(!b||!(b.baeume||[]).length){toast('Im Auftrag sind keine Bäume erfasst');return}let n=0;
 b.baeume.forEach(id=>{if(g.baeume.some(t=>t.baumId===id))return;const x=reg.find(r=>r.id===id);if(!x)return;let t=g.baeume.find(tt=>!tt.art&&!tt.baumId);if(!t){t=newGBTree();g.baeume.push(t)}Object.assign(t,{baumId:id,art:x.art||'',hoehe:x.hoehe||'',durchmesser:x.durchmesser||''});n++});
 App.render();toast(n?n+' Baum/Bäume übernommen':'Alle Bäume des Auftrags sind bereits erfasst')};
App.gbTypTog=function(x,el){const g=App.state.gb;g.einsatztyp=g.einsatztyp||[];const i=g.einsatztyp.indexOf(x);if(i>=0)g.einsatztyp.splice(i,1);else g.einsatztyp.push(x);el.classList.toggle('on')};
App.gbOrtAusAuftrag=function(){const g=App.state.gb;const id=val('g_beleg');const b=DB.get('belege',[]).find(x=>x.id===id);if(!b){toast('Erst Auftrag/Angebot wählen');return}const k=belegKunde(b);const a=[k.adresse,[k.plz,k.stadt].filter(Boolean).join(' ')].filter(Boolean).join(', ');if(!a){toast('Beim Kunden ist keine Adresse hinterlegt');return}document.getElementById('g_ort').value=a;toast('Adresse übernommen')};
function sicherBtns(t){return '<div class="chips"><button class="chip '+(t.sicher==='Ja'?'on':'')+'" onclick="App.gbSicher(\'Ja\')">✓ Ja, sicher</button><button class="chip '+(t.sicher==='Nein'?'on red':'')+'" onclick="App.gbSicher(\'Nein\')">✗ Nein</button><button class="chip '+(t.sicher==='Untersuchung nötig'?'on amber':'')+'" onclick="App.gbSicher(\'Untersuchung nötig\')">⚠ Untersuchung nötig</button></div>'}
function rGBWizard(){
 const g=App.state.gb,s=App.state.gbStep;
 let h='<div class="back-row"><button class="iconbtn" onclick="App.gbExit()">'+I.back+'</button><div class="h-title" style="font-size:19px">Gefährdungsbeurteilung</div></div>';
 h+='<div style="display:flex;gap:5px;margin:6px 0 16px">';for(let i=0;i<GB_STEPS.length;i++)h+='<div onclick="App.gbStep('+i+')" style="cursor:pointer;flex:1;height:5px;border-radius:9px;background:'+(i<=s?'var(--green)':'var(--line)')+'"></div>';h+='</div>';
 h+='<div class="h-title" style="font-size:19px;margin-bottom:12px">'+GB_STEPS[s].t+'</div>';
 if(s===0){const belege=DB.get('belege',[]);const ks=DB.get('kunden',[]);
  h+='<div class="field"><label class="fl">Zu Auftrag/Angebot zuordnen</label><select id="g_beleg"><option value="">— optional —</option>'+belege.map(b=>{const k=ks.find(x=>x.id===b.kundeId);return '<option value="'+b.id+'" '+(g.belegId===b.id?'selected':'')+'>'+(b.typ==='angebot'?'Angebot':'Auftrag')+' Nr. '+esc(b.nummer)+(k?' · '+esc(k.name):'')+'</option>'}).join('')+'</select></div>';
  h+=fld('Einsatzort (Adresse)','g_ort',g.ort)+'<div class="btn-row" style="margin:-4px 0 14px"><button class="btn sec sm" onclick="App.gbGPS()">'+I.gps+' GPS-Adresse</button><button class="btn sec sm" onclick="App.gbOrtAusAuftrag()">Adresse aus Auftrag</button></div>';
  h+=fld('Zufahrt über','g_zuf',g.zufahrt);
  h+='<div class="row2">'+fld('Datum','g_datum',g.datum,'date')+fld('Aufsichtsführender','g_auf',g.aufsicht)+'</div>';
  h+='<div class="row2">'+fld('Dauer von','g_von',g.zeitVon,'time')+fld('bis','g_bis',g.zeitBis,'time')+'</div>';
  h+='<div class="field"><label class="fl">Einsatztyp</label><div class="chips">'+GB_TYP.map(x=>'<button class="chip '+((g.einsatztyp||[]).indexOf(x)>=0?'on':'')+'" onclick="App.gbTypTog(\''+x+'\',this)">'+x+'</button>').join('')+'</div></div>';
  h+=fld('Einsatztyp – Ergänzung','g_typs',g.einsatztypSonst);
 }
 if(s===1){h+='<div class="sec-label">Namen und Qualifikationen</div>'+personalTable('gb');const lb=DB.get('belege',[]).find(x=>x.id===g.belegId);if(lb&&lb.personal&&lb.personal.length)h+='<button class="btn sec sm" style="margin-top:10px" onclick="App.gbImportPersonal()">'+I.dl+' Personal aus Auftrag übernehmen</button>';h+=gbGroup('Checkliste',GB_PERS,g,'personalChk');}
 if(s===2){h+=gbGroup('Durchzuführende Arbeiten',GB_ARB,g,'arbeiten')+'<div style="margin-top:8px">'+fld('Sonstiges (Arbeiten)','g_arbs',g.arbeitenSonst)+'</div>'+gbGroup('Ausrüstung',GB_AUS,g,'ausruestung');}
 if(s===3){const t=gbCur(),ti=App.state.gbTree||0;const reg=DB.get('baeume',[]);const lb=DB.get('belege',[]).find(x=>x.id===g.belegId);
  h+='<div class="hint" style="margin-top:0">Jeder Baum wird einzeln beurteilt – inklusive eigener Sicherheitsbeurteilung.</div>';
  h+='<div class="tabs">'+g.baeume.map((x,i)=>{const ic=x.sicher==='Ja'?'✓':x.sicher==='Nein'?'✗':x.sicher?'⚠':'•';return '<button class="tab '+(i===ti?'on':'')+' '+(x.sicher==='Nein'?'bad':x.sicher==='Ja'?'good':x.sicher?'warn':'')+'" onclick="App.gbTreeSel('+i+')">'+ic+' Baum '+(i+1)+'</button>'}).join('')+'<button class="tab add" onclick="App.gbTreeAdd()">'+I.plus+' Weiterer Baum</button></div>';
  if(lb&&(lb.baeume||[]).length)h+='<button class="btn sec sm" style="margin-bottom:12px" onclick="App.gbTreesFromBeleg()">'+I.dl+' Bäume aus Auftrag übernehmen ('+lb.baeume.length+')</button>';
  h+='<div class="card tree-card"><h3>'+esc(gbTreeName(t,ti))+'</h3>';
  if(reg.length)h+='<div class="field"><label class="fl">Aus Baum-Register übernehmen</label><select onchange="App.gbTreeFromReg(this.value)"><option value="">— optional —</option>'+reg.map(b=>'<option value="'+b.id+'" '+(t.baumId===b.id?'selected':'')+'>'+esc(b.titel||b.art||'Baum')+(b.titel&&b.art?' ('+esc(b.art)+')':'')+'</option>').join('')+'</select></div>';
  h+='<div class="field"><label class="fl">Baumart</label>'+treePicker('g_art',t.art)+'</div><div class="row2">'+fldN('Baumhöhe (m)','g_hoehe',t.hoehe,'0.5')+fldN('Stamm-Ø (cm)','g_dm',t.durchmesser,'1')+'</div>';
  h+='<div class="field"><label class="fl">Ausrichtung</label>'+gbChips(GB_AUSR,t.ausrichtung,"App.gbTSet.bind(null,'ausrichtung')")+'</div>';
  h+=gbGroup('Baumumfeld',GB_UMF,g,'umfeld',1)+'<div style="margin-top:6px">'+fld('Sonstiges Umfeld','g_usonst',t.umfeldSonst)+'</div>';
  h+=gbGroup('Stammfuß / Stamm',GB_STAMM,g,'stamm',1)+gbGroup('Baumkrone',GB_KRONE,g,'krone',1);
  h+='<div class="field" style="margin-top:12px"><label class="fl">Kronengewicht</label>'+gbChips(GB_KGEW,t.kronengewicht,"App.gbTSet.bind(null,'kronengewicht')")+'</div>';
  h+='<div class="sec-label">Baum '+(ti+1)+' sicher für geplante Arbeiten?</div>'+sicherBtns(t);
  h+='<div style="margin-top:12px">'+fldArea('Bemerkung zu Baum '+(ti+1),'g_bem',t.bemerkung)+'</div>';
  if(g.baeume.length>1)h+='<button class="btn danger sm" onclick="App.gbTreeDel()">'+I.trash+' Baum '+(ti+1)+' entfernen</button>';
  h+='</div>';
  if(ti<g.baeume.length-1)h+='<button class="btn sec" style="margin-bottom:6px" onclick="App.gbTreeSel('+(ti+1)+')">Weiter zu Baum '+(ti+2)+' '+I.chev+'</button>';
 }
 if(s===4){h+=gbGroup('Gefahren am Einsatzort',GB_ORT,g,'gefahrenOrt')+gbGroup('Notfall- & Rettungsmaßnahmen',GB_RETT,g,'rettung')+'<div style="margin-top:12px">'+fldArea('Besonderheiten','g_bes',g.besonderheiten)+'</div>';}
 if(s===5){const belege=DB.get('belege',[]);const bz=belege.find(x=>x.id===g.belegId);const ov=gbOverall(g);
  h+='<div class="card"><div class="kv"><span class="k">Einsatzort</span><span class="v">'+esc(g.ort||'–')+'</span></div><div class="kv"><span class="k">Datum</span><span class="v">'+fmtDate(g.datum)+(g.zeitVon?' · '+esc(g.zeitVon)+'–'+esc(g.zeitBis||''):'')+'</span></div>';
  g.baeume.forEach((t,i)=>{h+='<div class="kv"><span class="k">'+esc(gbTreeName(t,i))+(t.hoehe?' · '+esc(t.hoehe)+' m':'')+'</span><span class="v">'+(t.sicher?gbTag(t.sicher):'<span class="badge gray">nicht beurteilt</span>')+'</span></div>'});
  h+='<div class="kv"><span class="k">Zugeordnet</span><span class="v">'+(bz?(bz.typ==='angebot'?'Angebot ':'Auftrag ')+bz.nummer:'–')+'</span></div></div>';
  if(g.baeume.some(t=>!t.sicher))h+='<div class="hint" style="border-color:#f3d48a;background:#fff8e6">Nicht alle Bäume haben eine Sicherheitsbeurteilung (Schritt 4).</div>';
  if(ov==='Nein')h+='<div class="hint" style="border-color:#f0b4b4;background:#fdecec;color:#991b1b"><b>Mindestens ein Baum ist nicht sicher.</b> Arbeitsverfahren anpassen (z. B. Hubarbeitsbühne/Kran) oder Arbeiten nicht freigeben.</div>';
  h+=fotoBlock('gb','Fotos vom Einsatzort');
  h+=fld('Verantwortlicher (Name)','g_verantw',g.verantw||g.aufsicht);
  h+='<div class="card"><h3>Unterschrift</h3><canvas id="sigpad" class="sigpad"></canvas><button class="btn sec sm" style="margin-top:6px" onclick="App.gbSigClear()">Löschen</button></div>';
  h+='<div class="btn-row"><button class="btn grad" onclick="App.gbSave()">Speichern</button></div>';
  h+='<div class="btn-row" style="margin-top:10px"><button class="btn sec" onclick="App.gbSave(true);App.gbPDFCurrent()">'+I.pdf+' PDF</button></div>';
  setTimeout(initSig,30);
 }
 h+='<div style="display:flex;align-items:center;gap:12px;margin-top:16px">';
 h+=s>0?'<button class="btn sec" style="width:auto" onclick="App.gbStep('+(s-1)+')">'+I.back+' Zurück</button>':'<span></span>';
 h+='<div style="flex:1;text-align:center;color:var(--muted);font-size:13px">Schritt '+(s+1)+' / '+GB_STEPS.length+'</div>';
 h+=s<GB_STEPS.length-1?'<button class="btn" style="width:auto" onclick="App.gbStep('+(s+1)+')">Weiter '+I.chev+'</button>':'<span></span>';
 h+='</div>';
 return h;
}
App.gbGPS=function(){if(!navigator.geolocation){toast('GPS nicht verfügbar');return}toast('Standort…');navigator.geolocation.getCurrentPosition(async p=>{try{const r=await fetch('https://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1&lat='+p.coords.latitude+'&lon='+p.coords.longitude+'&zoom=18',{headers:{'Accept-Language':'de'}});const d=await r.json();const a=d.address||{};const el=document.getElementById('g_ort');const str=[[a.road,a.house_number].filter(Boolean).join(' '),[a.postcode,a.city||a.town||a.village].filter(Boolean).join(' ')].filter(Boolean).join(', ');if(el)el.value=str||(d.display_name||'').split(',').slice(0,3).join(',');toast('Adresse übernommen')}catch(e){const el=document.getElementById('g_ort');if(el&&!el.value)el.value=p.coords.latitude.toFixed(5)+', '+p.coords.longitude.toFixed(5);toast('Offline – Koordinaten übernommen')}},()=>toast('GPS fehlgeschlagen'),{enableHighAccuracy:true})};
App.gbSigClear=function(){const c=document.getElementById('sigpad');if(c&&App._sig){App._sig.clearRect(0,0,c.width,c.height);App._sigDirty=false;App.state.gb.unterschrift=null}};
App.gbSave=function(silent){gbCollect();const g=App.state.gb;const ov=gbOverall(g);g.sicher=ov;g.art=g.baeume.map(t=>t.art).filter(Boolean).join(', ');const list=DB.get('gb',[]);const i=list.findIndex(x=>x.id===g.id);if(i>=0)list[i]=g;else list.push(g);DB.set('gb',list);if(!silent){toast('Beurteilung gespeichert');App.state.gb=null;App.go('gb')}};
App.gbPDF=function(id){const g=DB.get('gb',[]).find(x=>x.id===id);if(g)printGB(gbMigrate(JSON.parse(JSON.stringify(g))))};
App.gbPDFCurrent=function(){printGB(App.state.gb)};
function printGB(g){fotosLoad(g.fotos).then(fs=>{document.getElementById('print-area').innerHTML=buildGBPDF(g,fs);setTimeout(()=>window.print(),300)})}
/* PDF-Layout Gefährdungsbeurteilung */
function gbpKV(k,v){return '<div class="gbp-kv"><span>'+esc(k)+':</span><span>'+esc(v||'–')+'</span></div>'}
function gbpGrid(arr,sel){sel=sel||[];return '<div class="gbp-grid">'+arr.map(l=>{const on=sel.indexOf(l)>=0;return '<div class="'+(on?'on':'off')+'">'+(on?'[X] ':'[ ] ')+esc(l)+'</div>'}).join('')+(sel.filter(x=>arr.indexOf(x)<0).map(l=>'<div class="on">[X] '+esc(l)+'</div>').join(''))+'</div>'}
function gbpSec(t){return '<div class="gbp-sec">'+esc(t)+'</div>'}
function gbVerdict(s){if(s==='Ja')return '<div class="gbp-verdict ja">Sicherheitsbeurteilung: JA – Baum ist sicher</div>';if(s==='Nein')return '<div class="gbp-verdict nein">Sicherheitsbeurteilung: NEIN – Baum ist nicht sicher</div>';if(s)return '<div class="gbp-verdict pruef">Sicherheitsbeurteilung: Untersuchung nötig</div>';return '<div class="gbp-verdict offen">Sicherheitsbeurteilung: nicht beurteilt</div>'}
function gbOrtStadt(o){const p=(o||'').split(',').map(x=>x.trim()).filter(Boolean);return p.length>1?p[p.length-1].replace(/^\d{4,5}\s*/,''):''}
function buildGBPDF(g,fotos){gbMigrate(g);const belege=DB.get('belege',[]);const bz=belege.find(x=>x.id===g.belegId);const ort=g.ort||'Einsatzort nicht angegeben';
 const typ=(g.einsatztyp||[]).concat(g.einsatztypSonst?[g.einsatztypSonst]:[]).join(', ');const dauer=g.zeitVon?(g.zeitVon+(g.zeitBis?' bis '+g.zeitBis:'')):'';
 let h='<div class="gbp">';
 h+='<div class="gbp-band"><div class="t">Einsatzbezogene Gefährdungsermittlung / Baumsicherheitsbeurteilung</div><div class="s">'+esc(meineDaten.name||'')+(meineDaten.name?' · ':'')+'Sicherheitstechnischer Dienst · nach Vorlage SVLFG</div></div>';
 h+='<div class="gbp-title">'+esc(ort)+'</div><div class="gbp-meta">'+fmtDate(g.datum)+(g.zufahrt?' · Zufahrt über '+esc(g.zufahrt):'')+(bz?' · '+(bz.typ==='angebot'?'Angebot':'Auftrag')+' Nr. '+esc(bz.nummer):'')+'</div>';
 h+='<div class="gbp-block">'+gbpSec('Einsatz')+gbpKV('Einsatzort',g.ort)+gbpKV('Zufahrt über',g.zufahrt)+gbpKV('Datum',fmtDate(g.datum))+gbpKV('Aufsichtsführender',g.aufsicht)+gbpKV('Dauer',dauer)+gbpKV('Einsatztyp',typ)+'</div>';
 const pp=(g.personal||[]).filter(p=>p.name);
 h+='<div class="gbp-block">'+gbpSec('Personal')+pp.map(p=>gbpKV(p.name,Object.keys(p.q||{}).filter(q=>p.q[q]).join(', '))).join('')+gbpGrid(GB_PERS,g.personalChk)+'</div>';
 h+='<div class="gbp-block">'+gbpSec('Durchzuführende Arbeiten')+gbpGrid(GB_ARB,g.arbeiten)+(g.arbeitenSonst?gbpKV('Sonstiges',g.arbeitenSonst):'')+'</div>';
 h+='<div class="gbp-block">'+gbpSec('Ausrüstung')+gbpGrid(GB_AUS,g.ausruestung)+'</div>';
 const n=g.baeume.length;
 g.baeume.forEach((t,i)=>{const nm=n>1?' – Baum '+(i+1)+' von '+n:'';
  h+='<div class="gbp-tree">';
  h+='<div class="gbp-block">'+gbpSec('Baumbezogene Gefahren'+nm)+gbpKV('Baumart',t.art)+gbpKV('Baumhöhe',t.hoehe?t.hoehe+' m':'')+gbpKV('Stamm-Ø',t.durchmesser?t.durchmesser+' cm':'')+gbpKV('Ausrichtung',t.ausrichtung)+'</div>';
  h+='<div class="gbp-block">'+gbpSec('Baumumfeld'+nm)+gbpGrid(GB_UMF,t.umfeld)+(t.umfeldSonst?gbpKV('Sonstiges Umfeld',t.umfeldSonst):'')+'</div>';
  h+='<div class="gbp-block">'+gbpSec('Stammfuß / Stamm'+nm)+gbpGrid(GB_STAMM,t.stamm)+'</div>';
  h+='<div class="gbp-block">'+gbpSec('Baumkrone'+nm)+gbpGrid(GB_KRONE,t.krone)+gbpKV('Kronengewicht',t.kronengewicht)+(t.bemerkung?gbpKV('Bemerkung',t.bemerkung):'')+'</div>';
  h+=gbVerdict(t.sicher).replace('Baum ist','Baum'+(n>1?' '+(i+1):'')+' ist').replace('Sicherheitsbeurteilung:','Sicherheitsbeurteilung'+(n>1?' Baum '+(i+1):'')+':');
  h+='</div>';});
 h+='<div class="gbp-block">'+gbpSec('Gefahren am Einsatzort')+gbpGrid(GB_ORT,g.gefahrenOrt)+'</div>';
 h+='<div class="gbp-block">'+gbpSec('Notfall- und Rettungsmaßnahmen')+gbpGrid(GB_RETT,g.rettung)+(g.besonderheiten?gbpKV('Besonderheiten',g.besonderheiten):'')+'</div>';
 h+=pdfFotos(fotos);
 const st=gbOrtStadt(g.ort);
 h+='<div class="gbp-sig"><div><div class="v">'+esc((st?st+', ':'')+fmtDate(g.datum))+'</div><div class="l">Ort und Datum</div></div><div>'+(g.unterschrift?'<img src="'+g.unterschrift+'">':'<div style="height:70px"></div>')+'<div class="v"><b>'+esc(g.verantw||g.aufsicht||'')+'</b></div><div class="l">Name / Unterschrift Verantwortlicher</div></div></div>';
 h+='<div class="gbp-end"><div class="gbp-addr"><div class="k">Einsatzort</div><div class="a">'+esc(ort)+'</div>'+(g.zufahrt?'<div class="z">Zufahrt über: '+esc(g.zufahrt)+'</div>':'')+'</div><div class="gbp-notruf">Notruf 112 · Standort nennen: '+esc(ort)+' · Einweiser an der Zufahrt'+(g.zufahrt?' ('+esc(g.zufahrt)+')':'')+'</div></div>';
 h+='</div>';return h}

/* ===== MEINE AUSRÜSTUNG → ausruestung.js ===== */

/* ===== DOKUMENTE (IndexedDB) ===== */
function rDokumente(){
 let h=backRow('Dokumente','mearbeit');
 h+='<div class="addrow" onclick="App.dokForm()"><span>'+I.plus+' Neues Dokument</span></div>';
 h+='<div id="dokList"><div class="empty">Lädt…</div></div>';
 h+='<div class="hint">Betriebsrelevante Nachweise (Gewerbeanmeldung, Versicherung, Schulungen, ärztliche Eignung …). PDFs/Fotos werden lokal auf diesem Gerät gespeichert. Mit „Gültig bis" warnt die App vor Ablauf.</div>';
 h+=foot();return h;
}
App.loadDocs=function(){const el=document.getElementById('dokList');if(!el)return;IDB.all('docs').then(list=>{const e2=document.getElementById('dokList');if(!e2)return;list.sort((a,b)=>(b.dateAdded||'').localeCompare(a.dateAdded||''));if(!list.length){e2.innerHTML='<div class="empty">Noch keine Dokumente</div>';return}const today=todayISO();e2.innerHTML=list.map(d=>{let bd='';if(d.ablauf){const dd=Math.round((new Date(d.ablauf)-new Date(today))/864e5);bd=dd<0?' <span class="badge" style="background:#fde2e2;color:#b91c1c">abgelaufen</span>':dd<=30?' <span class="badge b">läuft ab</span>':'';}return '<div class="item"><div class="m" onclick="App.dokOpen(\''+d.id+'\')"><b>'+esc(d.name||d.kategorie)+bd+'</b><span>'+esc(d.kategorie||'')+' · '+esc(d.filename||'')+' · '+fmtDate(d.dateAdded)+(d.ablauf?' · gültig bis '+fmtDate(d.ablauf):'')+'</span></div><button class="iconbtn" onclick="App.dokOpen(\''+d.id+'\')">'+I.eye+'</button><button class="iconbtn" style="color:#dc2626" onclick="App.dokDel(\''+d.id+'\')">'+I.trash+'</button></div>'}).join('')}).catch(()=>{const e3=document.getElementById('dokList');if(e3)e3.innerHTML='<div class="empty">Speicher nicht verfügbar</div>'})};
App.dokForm=function(){modal('<h3>Neues Dokument</h3>'+
 '<div class="field"><label class="fl">Kategorie</label><select id="dk_kat" onchange="document.getElementById(\'dk_name\').value=this.value">'+DOK_KAT.map(k=>'<option>'+esc(k)+'</option>').join('')+'</select></div>'+
 fld('Bezeichnung','dk_name',DOK_KAT[0])+
 fld('Gültig bis (optional)','dk_ablauf','','date')+
 '<div class="field"><label class="fl">Datei (PDF oder Foto)</label><input type="file" id="dk_file" accept="application/pdf,image/*"></div>'+
 fldArea('Notiz (optional)','dk_notiz','')+
 '<div class="btn-row"><button class="btn sec" onclick="App.closeModal()">Abbrechen</button><button class="btn" onclick="App.dokSave()">Speichern</button></div>')};
App.dokSave=function(){const fi=document.getElementById('dk_file');const f=fi&&fi.files[0];if(!f){toast('Bitte Datei wählen');return}const obj={id:uid(),name:val('dk_name')||val('dk_kat'),kategorie:val('dk_kat'),ablauf:val('dk_ablauf'),notiz:val('dk_notiz'),filename:f.name,type:f.type,blob:f,dateAdded:new Date().toISOString()};IDB.put('docs',obj).then(()=>{App.closeModal();toast('Dokument gespeichert');App.loadDocs()}).catch(()=>toast('Speichern fehlgeschlagen'))};
App.dokOpen=function(id){IDB.get('docs',id).then(d=>{if(!d||!d.blob)return;const url=URL.createObjectURL(d.blob);if((d.type||'').indexOf('image')===0){modal('<h3>'+esc(d.name||'Dokument')+'</h3><img src="'+url+'" style="width:100%;border-radius:10px">'+(d.notiz?'<div class="hint">'+esc(d.notiz)+'</div>':'')+'<div class="btn-row" style="margin-top:10px"><button class="btn sec" onclick="App.closeModal()">Schließen</button><a class="btn" href="'+url+'" download="'+esc(d.filename||'foto')+'">Herunterladen</a></div>')}else{const w=window.open(url,'_blank');if(!w){const a=document.createElement('a');a.href=url;a.download=d.filename||'dokument.pdf';document.body.appendChild(a);a.click();a.remove()}}})};
App.dokDel=function(id){if(!confirm('Dokument löschen?'))return;IDB.del('docs',id).then(()=>{toast('Gelöscht');App.loadDocs()})};

/* ===== ARBORISTIK & TREE CLIMBING (Inhalte aus inhalte_arbor.js / inhalte_climb.js) ===== */
function rInhalt(coll,title){
 const data=coll==='arbor'?(window.ARBOR||null):(window.CLIMB||null);
 let h=backRow(title,'start');
 if(!data){h+='<div class="hint">Inhalte konnten nicht geladen werden (Datei fehlt?).</div>';return h+foot()}
 Object.keys(data).forEach(secKey=>{const sec=data[secKey];
  h+='<div class="sec-label">'+esc(sec.label)+'</div>';
  sec.items.forEach((it,idx)=>{
   if(it.pdf){h+='<div class="art-acc" onclick="App.openPdf(\''+it.pdf+'\')"><span><b>'+esc(it.t)+'</b>'+(it.sub?'<br><span class="art-sub">'+esc(it.sub)+'</span>':'')+'</span>'+I.pdf+'</div>';}
   else{h+='<div class="art-acc" onclick="App.openArtikel(\''+coll+'\',\''+secKey+'\','+idx+')"><span>'+esc(it.t)+'</span><span class="chev">'+I.chev+'</span></div>';}
  });
 });
 return h+foot();
}
function rArbor(){return rInhalt('arbor','Arboristik')}
function rClimb(){return rInhalt('climb','Tree Climbing')}
function rArtikel(){
 const s=App.state;const data=s.artColl==='arbor'?window.ARBOR:window.CLIMB;const back=s.artColl==='arbor'?'arboristik':'climbing';
 const sec=data&&data[s.artSec];const it=sec&&sec.items&&sec.items[s.artIdx];
 let h=backRow(it?it.t:'Artikel',back);
 if(it){h+='<div class="card"><div class="sec-label" style="margin-top:0">'+esc(sec.label)+'</div><div class="artikel">'+it.html+'</div></div>';
  if(s.artColl==='climb')h+='<div class="hint">⚠ SKT/Rigging nur mit Ausbildung (SKT A/B), geprüfter PSAgA und Rettungskonzept – dies ersetzt keine Schulung.</div>';}
 else h+='<div class="empty">Artikel nicht gefunden</div>';
 return h+foot();
}
App.openArtikel=function(coll,sec,idx){App.go('artikel',{artColl:coll,artSec:sec,artIdx:idx})};
App.openPdf=function(p){const w=window.open(p,'_blank');if(!w){const a=document.createElement('a');a.href=p;a.target='_blank';document.body.appendChild(a);a.click();a.remove()}};

/* ===== KARTE ===== */
function rKarte(){
 let h=backRow('Karte & Bäume verorten','start');
 h+='<div style="display:flex;gap:8px;margin-bottom:12px"><input type="search" id="mapq" placeholder="Adresse oder Ort suchen…" onkeydown="if(event.key===\'Enter\'){event.preventDefault();App.mapSearch()}"><button class="btn" style="width:auto" onclick="App.mapSearch()">Suchen</button><button class="btn sec" style="width:auto" onclick="App.mapLocate()">'+I.gps+'</button></div>';
 h+='<div id="map"></div><div class="hint">Tippe auf die Karte, um einen Baum zu setzen. Oben rechts zwischen Karte (OSM) und Satellit umschalten. Adresssuche & Kartenkacheln brauchen Internet; markierte Bäume bleiben lokal gespeichert.</div><div id="treemarks"></div>';
 return h;
}
function loadLeaflet(){return new Promise((res,rej)=>{if(window.L)return res();const c=document.createElement('link');c.rel='stylesheet';c.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';document.head.appendChild(c);const s=document.createElement('script');s.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';s.onload=()=>res();s.onerror=rej;document.head.appendChild(s)})}
function initMap(){loadLeaflet().then(()=>{
 const el=document.getElementById('map');if(!el)return;
 if(App._map){try{App._map.remove()}catch(e){}App._map=null}
 const sv=DB.get('mapView',{lat:53.5511,lng:9.9937,zoom:12});
 const map=L.map('map').setView([sv.lat,sv.lng],sv.zoom);App._map=map;
 const osm=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap-Mitwirkende'});
 const sat=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'© Esri World Imagery'});
 osm.addTo(map);
 L.control.layers({'Karte (OSM)':osm,'Satellit':sat},null,{position:'topright'}).addTo(map);
 map.on('moveend',()=>{const c=map.getCenter();DB.set('mapView',{lat:c.lat,lng:c.lng,zoom:map.getZoom()})});
 map.on('click',e=>App.markTree(e.latlng.lat,e.latlng.lng));
 setTimeout(()=>{try{map.invalidateSize()}catch(e){}},250);
 App.renderMarks();
}).catch(()=>{const el=document.getElementById('map');if(el)el.innerHTML='<div class="empty" style="padding:60px 20px">Karte konnte nicht geladen werden – bitte einmal mit Internet öffnen.</div>'})}
function treeIcon(cat){const col=({laub:'#5a9e2f',nadel:'#3f6212',strauch:'#9a5b1a'})[cat]||'#5a9e2f';return L.divIcon({className:'',html:'<div style="background:'+col+';width:24px;height:24px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></div>',iconSize:[24,24],iconAnchor:[12,24],popupAnchor:[0,-22]})}
App.renderMarks=function(){const map=App._map;if(!map||!window.L)return;if(App._ml)map.removeLayer(App._ml);App._ml=L.layerGroup().addTo(map);const ts=DB.get('mapTrees',[]);ts.forEach(t=>{const mk=L.marker([t.lat,t.lng],{icon:treeIcon(t.cat)}).addTo(App._ml);mk.bindPopup('<b>'+esc(t.label||'Baum')+'</b><br>'+esc(t.art||'')+'<br><button onclick="App.delMark(\''+t.id+'\')" style="border:none;background:#dc2626;color:#fff;padding:5px 9px;border-radius:6px;margin-top:6px">Löschen</button>')});const l=document.getElementById('treemarks');if(l)l.innerHTML=ts.length?'<div class="sec-label">Markierte Bäume ('+ts.length+')</div>'+ts.map(t=>'<div class="item"><div class="m" onclick="App._map&&App._map.setView(['+t.lat+','+t.lng+'],18)"><b>'+esc(t.label||'Baum')+'</b><span>'+esc(t.art||'')+' · '+t.lat.toFixed(4)+', '+t.lng.toFixed(4)+'</span></div><button class="iconbtn" style="color:#dc2626" onclick="App.delMark(\''+t.id+'\')">'+I.trash+'</button></div>').join(''):''};
App.markTree=function(lat,lng){modal('<h3>Baum markieren</h3>'+fld('Bezeichnung / Nummer','mk_label','')+'<div class="field"><label class="fl">Baumart</label>'+treePicker('mk_art','')+'</div><div class="btn-row"><button class="btn sec" onclick="App.closeModal()">Abbrechen</button><button class="btn" onclick="App.saveMark('+lat+','+lng+')">Speichern</button></div>')};
App.saveMark=function(lat,lng){const art=val('mk_art');const known=treeFind(x=>x.de===art);const ts=DB.get('mapTrees',[]);ts.push({id:uid(),lat,lng,label:val('mk_label'),art,cat:known?known.cat:'laub'});DB.set('mapTrees',ts);App.closeModal();App.renderMarks();toast('Baum gespeichert')};
App.delMark=function(id){DB.set('mapTrees',DB.get('mapTrees',[]).filter(x=>x.id!==id));if(App._map)App._map.closePopup();App.renderMarks()};
App.mapLocate=function(){if(!navigator.geolocation){toast('GPS nicht verfügbar');return}toast('Standort…');navigator.geolocation.getCurrentPosition(p=>{if(App._map)App._map.setView([p.coords.latitude,p.coords.longitude],18)},()=>toast('GPS fehlgeschlagen'),{enableHighAccuracy:true,timeout:10000})};
App.mapSearch=function(){const q=(val('mapq')||'').trim();if(!q)return;toast('Suche…');fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&accept-language=de&q='+encodeURIComponent(q)).then(r=>r.json()).then(d=>{if(d&&d[0]&&App._map){App._map.setView([+d[0].lat,+d[0].lon],17);toast('Gefunden')}else toast('Nichts gefunden')}).catch(()=>toast('Suche nur mit Internet möglich'))};

/* ===== KALENDER (.ics-Übergabe an Geräte-Kalender) ===== */
function rKalender(){
 if(!App.state.calMonth){const d=new Date();App.state.calMonth=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')}
 const parts=App.state.calMonth.split('-');const y=+parts[0],mo=+parts[1];const events=DB.get('events',[]);const today=todayISO();
 let h='<div class="h-title">Kalender</div><div class="h-sub">Termine · Übergabe an iPhone-/Geräte-Kalender</div>';
 h+='<div class="addrow" onclick="App.evtForm()"><span>'+I.plus+' Neuer Termin</span></div>';
 h+='<div class="card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><button class="iconbtn" onclick="App.calNav(-1)">'+I.back+'</button><b>'+new Date(y,mo-1,1).toLocaleDateString('de-DE',{month:'long',year:'numeric'})+'</b><button class="iconbtn" onclick="App.calNav(1)">'+I.chev+'</button></div>';
 h+='<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px">'+['Mo','Di','Mi','Do','Fr','Sa','So'].map(d=>'<div style="text-align:center;font-size:11px;font-weight:700;color:var(--muted)">'+d+'</div>').join('');
 let first=new Date(y,mo-1,1).getDay();first=(first+6)%7;const days=new Date(y,mo,0).getDate();
 for(let i=0;i<first;i++)h+='<div></div>';
 for(let d=1;d<=days;d++){const iso=y+'-'+String(mo).padStart(2,'0')+'-'+String(d).padStart(2,'0');const ev=events.filter(e=>e.date===iso);h+='<div onclick="App.calDay(\''+iso+'\')" style="aspect-ratio:1;border:1px solid '+(iso===today?'var(--green)':'var(--line)')+';border-radius:9px;padding:4px;font-size:13px;display:flex;flex-direction:column;cursor:pointer">'+d+(ev.length?'<span style="font-size:9px;color:var(--green-d);font-weight:700;margin-top:auto">'+ev.length+' T.</span>':'')+'</div>'}
 h+='</div></div>';
 const up=events.filter(e=>e.date>=today).sort((a,b)=>(a.date+(a.start||'')).localeCompare(b.date+(b.start||''))).slice(0,6);
 h+='<div class="sec-label">Nächste Termine</div>';if(!up.length)h+='<div class="empty">Keine Termine</div>';
 up.forEach(e=>h+='<div class="item"><div class="m" onclick="App.evtForm(\''+e.id+'\')"><b>'+esc(e.title)+'</b><span>'+fmtDate(e.date)+(e.start?' · '+e.start:'')+(e.location?' · '+esc(e.location):'')+'</span></div><button class="iconbtn" onclick="App.evtICS(\''+e.id+'\')" title="In Kalender">'+I.cal+'</button></div>');
 h+='<div class="hint">„In Kalender" erzeugt eine .ics-Datei: auf dem iPhone öffnet sie direkt die Kalender-App zum Hinzufügen (→ iCloud). Echter Zwei-Wege-Sync kommt mit der späteren Capacitor-App.</div>';
 h+=foot();return h;
}
App.calNav=function(d){const parts=App.state.calMonth.split('-');let y=+parts[0],m=+parts[1];m+=d;if(m<1){m=12;y--}if(m>12){m=1;y++}App.state.calMonth=y+'-'+String(m).padStart(2,'0');App.render()};
App.calDay=function(iso){App.evtForm(null,iso)};
App.evtForm=function(id,preset){const events=DB.get('events',[]);const e=id?events.find(x=>x.id===id):{id:uid(),title:'',date:preset||todayISO(),start:'',end:'',location:'',notes:''};
 modal('<h3>'+(id?'Termin':'Neuer Termin')+'</h3>'+fld('Titel','e_title',e.title)+fld('Datum','e_date',e.date,'date')+'<div class="row2">'+fld('Von','e_start',e.start,'time')+fld('Bis','e_end',e.end,'time')+'</div>'+fld('Ort','e_loc',e.location)+fldArea('Notiz','e_notes',e.notes)+'<div class="btn-row"><button class="btn sec" onclick="App.closeModal()">Abbrechen</button><button class="btn" onclick="App.evtSave(\''+e.id+'\')">Speichern</button></div>'+'<button class="btn grad" style="margin-top:10px" onclick="App.evtSave(\''+e.id+'\',true)">'+I.cal+' Speichern & in Kalender</button>'+(id?'<button class="btn danger" style="margin-top:10px" onclick="App.evtDel(\''+e.id+'\')">Löschen</button>':''))};
App.evtSave=function(id,toCal){const events=DB.get('events',[]);let e=events.find(x=>x.id===id);const d={title:val('e_title'),date:val('e_date'),start:val('e_start'),end:val('e_end'),location:val('e_loc'),notes:val('e_notes')};if(!d.title){toast('Titel fehlt');return}if(e)Object.assign(e,d);else{e={id,...d};events.push(e)}DB.set('events',events);App.closeModal();App.render();toast('Termin gespeichert');if(toCal)App.evtICS(id)};
App.evtDel=function(id){DB.set('events',DB.get('events',[]).filter(x=>x.id!==id));App.closeModal();App.render()};
App.evtICS=function(id){const e=DB.get('events',[]).find(x=>x.id===id);if(!e)return;const dt=(d,t)=>{const dd=(d||todayISO()).replace(/-/g,'');return t?dd+'T'+t.replace(':','')+'00':dd};let ics='BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//BaumWerk//DE\r\nBEGIN:VEVENT\r\nUID:'+e.id+'@baumwerk\r\nDTSTAMP:'+dt(todayISO())+'T000000Z\r\n';if(e.start){ics+='DTSTART:'+dt(e.date,e.start)+'\r\nDTEND:'+dt(e.date,e.end||e.start)+'\r\n'}else{ics+='DTSTART;VALUE=DATE:'+dt(e.date)+'\r\n'}ics+='SUMMARY:'+(e.title||'').replace(/[,;\\]/g,'\\$&')+'\r\n';if(e.location)ics+='LOCATION:'+e.location.replace(/[,;\\]/g,'\\$&')+'\r\n';if(e.notes)ics+='DESCRIPTION:'+e.notes.replace(/\n/g,'\\n')+'\r\n';ics+='END:VEVENT\r\nEND:VCALENDAR';download('termin.ics',ics,'text/calendar');toast('Kalender-Datei erstellt')};
function download(name,content,type){const b=new Blob([content],{type:type||'text/plain'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1000)}

/* ===== MEINE DATEN ===== */
function rMeineDaten(){
 let h='<div class="h-title">Meine Daten</div><div class="h-sub">Für Dokumente, Angebote & Aufträge</div>';
 h+='<div class="card"><h3>Firma / Kontakt</h3>';
 h+=fld('Name / Firma','md_name',meineDaten.name)+fld('Adresse','md_adr',meineDaten.adresse)+'<div class="row2">'+fld('PLZ','md_plz',meineDaten.plz)+fld('Stadt','md_stadt',meineDaten.stadt)+'</div>'+'<div class="row2">'+fld('Telefon','md_tel',meineDaten.telefon,'tel')+fld('E-Mail','md_email',meineDaten.email,'email')+'</div>'+fld('IdNr / Steuernr.','md_idnr',meineDaten.idnr)+'<div class="row2">'+fld('Bank (Name)','md_bank',meineDaten.bankName)+fld('IBAN','md_iban',meineDaten.iban)+'</div>'+fldArea('Fußnote für Dokumente','md_foot',meineDaten.fussnote)+'<button class="btn" onclick="App.mdSave()">Speichern</button></div>';
 h+='<div class="card"><h3>Logo</h3><div class="cbx '+(meineDaten.logoInDocs?'on':'')+'" onclick="App.mdLogoToggle(this)"><span class="box">'+I.check+'</span>Logo in Dokumente einfügen</div>'+(meineDaten.logo?'<img src="'+meineDaten.logo+'" style="max-height:60px;margin-top:8px">':'')+'<button class="btn sec sm" style="margin-top:8px" onclick="document.getElementById(\'md_logo\').click()">Logo wählen</button><input type="file" id="md_logo" accept="image/*" style="display:none" onchange="App.mdLogo(this)"></div>';
 h+=foot();return h;
}
App.mdSave=function(){meineDaten.name=val('md_name');meineDaten.adresse=val('md_adr');meineDaten.plz=val('md_plz');meineDaten.stadt=val('md_stadt');meineDaten.telefon=val('md_tel');meineDaten.email=val('md_email');meineDaten.idnr=val('md_idnr');meineDaten.bankName=val('md_bank');meineDaten.iban=val('md_iban');meineDaten.fussnote=val('md_foot');saveMD();toast('Gespeichert');App.render()};
App.mdLogoToggle=function(el){el.classList.toggle('on');meineDaten.logoInDocs=el.classList.contains('on');saveMD()};
App.mdLogo=function(input){const f=input.files[0];if(!f)return;const r=new FileReader();r.onload=e=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas');const mx=400;let w=img.width,hh=img.height;const rt=Math.min(mx/w,mx/hh,1);c.width=w*rt;c.height=hh*rt;c.getContext('2d').drawImage(img,0,0,c.width,c.height);meineDaten.logo=c.toDataURL('image/png');saveMD();App.render();toast('Logo gespeichert')};img.src=e.target.result};r.readAsDataURL(f)};

/* ===== EINSTELLUNGEN ===== */
function rEinst(){
 let h='<div class="h-title">Einstellungen</div><div class="h-sub">Einheiten, Steuer & Daten</div>';
 h+='<div class="card"><h3>Standardeinheiten</h3><div class="chips"><button class="chip '+(settings.units!=='imperial'?'on':'')+'" onclick="App.rUnits(\'metric\')">m / cm</button><button class="chip '+(settings.units==='imperial'?'on':'')+'" onclick="App.rUnits(\'imperial\')">ft / in</button></div></div>';
 h+='<div class="card"><h3>Steuereinstellungen</h3><div class="field"><label class="fl">USt. (%)</label><input type="number" id="st_ust" value="'+esc(settings.ust)+'" style="max-width:120px"></div><div class="radio '+(settings.preisModus==='inkl'?'on':'')+'" onclick="App.stMode(\'inkl\')"><span class="dot"></span>Preise inklusive Steuern</div><div class="radio '+(settings.preisModus==='ohne'?'on':'')+'" onclick="App.stMode(\'ohne\')"><span class="dot"></span>Preise ohne Steuern</div><div class="radio '+(settings.preisModus==='keine'?'on':'')+'" onclick="App.stMode(\'keine\')"><span class="dot"></span>Keine Steuern anwenden</div><button class="btn sm" style="margin-top:8px" onclick="App.stSave()">Speichern</button></div>';
 h+='<div class="card"><h3>Richtpreise Hamburg</h3><p style="font-size:13px;color:var(--muted);margin:0 0 10px">Netto-Orientierungswerte für Angebote/Aufträge.</p><button class="btn sec" onclick="App.go(\'preise\')">Richtpreise anzeigen</button></div>';
 h+='<div class="card"><h3>Daten-Backup</h3><p style="font-size:13px;color:var(--muted);margin:0 0 10px">Alle Daten liegen lokal auf diesem Gerät. Sichere sie und übertrage sie so auf ein anderes Gerät.</p><div class="btn-row"><button class="btn sec" onclick="App.exportData()">'+I.dl+' Export</button><button class="btn sec" onclick="document.getElementById(\'imp\').click()">'+I.up+' Import</button></div><input type="file" id="imp" accept=".json" style="display:none" onchange="App.importData(this)"></div>';
 h+='<div class="card"><h3 style="color:#dc2626">Zurücksetzen</h3><button class="btn danger" onclick="App.wipe()">Alle Daten löschen</button></div>';
 h+='<div class="foot">BaumWerk · Stufe 1 · offline & online<br>für '+esc(meineDaten.name||'BFT')+'</div>';
 return h;
}
App.stMode=function(m){settings.preisModus=m;saveSettings();App.render()};
App.stSave=function(){settings.ust=num('st_ust');saveSettings();toast('Gespeichert')};
App.exportData=function(){const d={};['kunden','baeume','belege','gb','psa','events','mapTrees','meineDaten','settings'].forEach(k=>d[k]=DB.get(k,null));download('baumwerk-backup-'+todayISO()+'.json',JSON.stringify(d),'application/json');toast('Backup exportiert')};
App.importData=function(input){const f=input.files[0];if(!f)return;const r=new FileReader();r.onload=e=>{try{const d=JSON.parse(e.target.result);Object.keys(d).forEach(k=>{if(d[k]!==null)DB.set(k,d[k])});meineDaten=Object.assign(meineDaten,DB.get('meineDaten',{}));settings=Object.assign(settings,DB.get('settings',{}));toast('Backup importiert');App.go('start')}catch(err){toast('Datei ungültig')}};r.readAsText(f)};
App.wipe=function(){if(confirm('Wirklich ALLE Daten löschen?')){['kunden','baeume','belege','gb','psa','events','mapTrees'].forEach(k=>localStorage.removeItem('bw_'+k));toast('Daten gelöscht');App.go('start')}};

/* ===== Boot ===== */
if('serviceWorker' in navigator && location.protocol.startsWith('http')){navigator.serviceWorker.register('sw.js').catch(()=>{})}
window._zusatzOpen=false;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>App.go('start'));else setTimeout(()=>App.go('start'),0);
