/* ===== MEINE AUSRÜSTUNG – Produkte, Prüfhistorie, Prüfbuch, Export/Import ===== */
const PSA_TYP=['Textile PSA','Metallische PSA','Abseilgeräte','Klettergurt','Auffanggurt','Kletterseil','Abseilseil','Helm','Steigeisen','Karabiner','Bandschlinge','Motorsäge','Schnittschutz','Erste-Hilfe','Rettungsgerät','Sonstiges'];
const PR_ROWS=5;

function psaMigrate(p){
 if(!p.pruefungen){p.pruefungen=[];if(p.last||p.notiz&&p.next){p.pruefungen.push({id:uid(),datum:p.last||'',next:p.next||'',zeilen:[],weiter:'',pruefer:'',unterschrift:null,bemerkung:p.notiz||'',legacy:true,createdAt:p.last||''})}}
 if(p.kommentar===undefined)p.kommentar=p.notiz||'';
 return p}
function psaList(){return DB.get('psa',[]).map(psaMigrate)}
function psaSaveList(l){DB.set('psa',l)}
function psaSorted(p){return (p.pruefungen||[]).slice().sort((a,b)=>(b.datum||'').localeCompare(a.datum||'')||(b.createdAt||'').localeCompare(a.createdAt||''))}
function psaLast(p){return psaSorted(p)[0]||null}
function psaNext(p){const l=psaLast(p);return l?l.next:(p.next||'')}
function psaStatus(p){const l=psaLast(p);if(l&&l.weiter==='nein')return {k:'aus',html:'<span class="badge" style="background:#fde2e2;color:#b91c1c">ausgesondert</span>'};const n=psaNext(p);if(!n)return {k:'none',html:'<span class="badge gray">'+(l?'kein Termin':'nicht geprüft')+'</span>'};const dd=Math.round((new Date(n)-new Date(todayISO()))/864e5);if(dd<0)return {k:'over',html:'<span class="badge" style="background:#fde2e2;color:#b91c1c">überfällig</span>'};if(dd<=30)return {k:'soon',html:'<span class="badge b">in '+dd+' T</span>'};return {k:'ok',html:'<span class="badge g">'+fmtDate(n)+'</span>'}}
function plusYear(iso){const b=iso?new Date(iso):new Date();b.setFullYear(b.getFullYear()+1);return b.toISOString().slice(0,10)}

/* Liste */
function rAusr(){
 const list=psaList().sort((a,b)=>(psaNext(a)||'9999').localeCompare(psaNext(b)||'9999'));
 let h=backRow('Meine Ausrüstung','start');
 h+='<div class="addrow" onclick="App.psaForm()"><span>'+I.plus+' Neue Ausrüstung</span></div>';
 h+='<div class="btn-row" style="margin-bottom:14px"><button class="btn sec sm" onclick="App.psaExportSheet()">'+I.dl+' Prüfbuch / Export</button><button class="btn sec sm" onclick="document.getElementById(\'psa_imp\').click()">'+I.up+' Import</button></div><input type="file" id="psa_imp" accept=".json,application/json" style="display:none" onchange="App.psaImport(this)">';
 if(!list.length)h+='<div class="empty">Keine Inhalte zum Anzeigen</div>';
 list.forEach(p=>{const st=psaStatus(p);const n=(p.pruefungen||[]).length;
  h+='<div class="item"><div class="pthumb" onclick="App.go(\'psa\',{psaId:\''+p.id+'\'})">'+(p.foto?'<img src="'+p.foto+'" alt="">':I.helmet)+'</div><div class="m" onclick="App.go(\'psa\',{psaId:\''+p.id+'\'})"><b>'+esc(p.name||p.typ)+' '+st.html+'</b><span>'+esc(p.typ)+(p.marke?' · '+esc(p.marke):'')+(p.serial?' · SN '+esc(p.serial):'')+' · '+n+' Prüfung'+(n===1?'':'en')+'</span></div><button class="iconbtn" onclick="App.go(\'psa\',{psaId:\''+p.id+'\'})">'+I.chev+'</button></div>';});
 h+='<div class="hint">PSAgA (Gurte, Seile, Helme, Karabiner, Abseilgeräte) muss i. d. R. mindestens jährlich durch eine sachkundige Person geprüft werden. Jede Prüfung wird als eigener Eintrag gespeichert, die Historie bleibt erhalten. Die App warnt 30 Tage vor der nächsten Prüfung.</div>';
 h+=foot();return h;
}

/* Produktdetail mit Prüfhistorie */
function rPsa(){
 const p=psaList().find(x=>x.id===App.state.psaId);if(!p)return backRow('Ausrüstung','ausruestung')+'<div class="empty">Produkt nicht gefunden</div>';
 const st=psaStatus(p);const hist=psaSorted(p);
 let h=backRow(esc(p.name||p.typ),'ausruestung');
 h+='<div class="card">';
 if(p.foto)h+='<img src="'+p.foto+'" class="psa-foto" onclick="App.psaFotoView()" alt="">';
 h+='<div class="kv"><span class="k">Status</span><span class="v">'+st.html+'</span></div>';
 h+='<div class="kv"><span class="k">Typ</span><span class="v">'+esc(p.typ||'–')+'</span></div>';
 if(p.marke)h+='<div class="kv"><span class="k">Marke</span><span class="v">'+esc(p.marke)+'</span></div>';
 if(p.serial)h+='<div class="kv"><span class="k">Seriennummer</span><span class="v">'+esc(p.serial)+'</span></div>';
 h+='<div class="kv"><span class="k">Herstellung</span><span class="v">'+fmtDate(p.herstellung)+'</span></div>';
 h+='<div class="kv"><span class="k">Kaufdatum</span><span class="v">'+fmtDate(p.kauf)+'</span></div>';
 h+='<div class="kv"><span class="k">1. Inbetriebnahme</span><span class="v">'+fmtDate(p.inbetrieb)+'</span></div>';
 h+='<div class="kv"><span class="k">Nächste Prüfung</span><span class="v">'+fmtDate(psaNext(p))+'</span></div>';
 if(p.kommentar)h+='<div style="font-size:14px;margin-top:10px;white-space:pre-wrap"><span style="color:var(--muted)">Kommentar:</span> '+esc(p.kommentar)+'</div>';
 h+='<div class="btn-row" style="margin-top:14px"><button class="btn sec sm" onclick="App.psaForm(\''+p.id+'\')">'+I.edit+' Bearbeiten</button><button class="btn sec sm" onclick="App.psaPrint([\''+p.id+'\'])">'+I.pdf+' Prüfbuch</button></div>';
 h+='</div>';
 h+='<button class="addrow" onclick="App.prStart(\''+p.id+'\')"><span>'+I.check+' Neue Prüfung starten</span></button>';
 h+='<div class="sec-label">Prüfhistorie ('+hist.length+')</div>';
 if(!hist.length)h+='<div class="empty">Noch keine Prüfung erfasst</div>';
 hist.forEach((r,i)=>{const res=r.weiter==='ja'?'<span class="badge g">weiter verwendbar</span>':r.weiter==='nein'?'<span class="badge" style="background:#fde2e2;color:#b91c1c">aussondern</span>':'<span class="badge gray">ohne Ergebnis</span>';
  h+='<div class="item pr-item'+(i===0?' latest':'')+'" onclick="App.prView(\''+p.id+'\',\''+r.id+'\')"><div class="m"><b>Prüfung '+fmtDate(r.datum)+' '+res+'</b><span>'+(r.pruefer?'Prüfer: '+esc(r.pruefer)+' · ':'')+'nächste: '+fmtDate(r.next)+(r.legacy?' · aus alter Version übernommen':'')+'</span></div><span class="chev" style="color:var(--muted2)">'+I.chev+'</span></div>';});
 h+='<button class="btn danger sm" style="margin-top:18px" onclick="App.psaDel(\''+p.id+'\')">'+I.trash+' Produkt löschen</button>';
 h+=foot();return h;
}
App.psaFotoView=function(){const p=psaList().find(x=>x.id===App.state.psaId);if(p&&p.foto)modal('<img src="'+p.foto+'" style="width:100%;border-radius:12px;display:block"><div class="btn-row" style="margin-top:10px"><button class="btn sec" onclick="App.closeModal()">Schließen</button></div>')};

/* Produkt anlegen / bearbeiten */
App.psaForm=function(id){const p=id?psaList().find(x=>x.id===id):{id:uid(),typ:PSA_TYP[0],name:'',marke:'',serial:'',herstellung:'',kauf:'',inbetrieb:'',kommentar:'',foto:'',pruefungen:[]};if(!p)return;
 window._psaFoto=p.foto||'';
 modal('<h3>'+(id?'Ausrüstung bearbeiten':'Neue Ausrüstung')+'</h3>'+fld('Produktname','p_name',p.name)+
  '<div class="field"><label class="fl">Typ</label><select id="p_typ">'+PSA_TYP.concat(PSA_TYP.indexOf(p.typ)<0&&p.typ?[p.typ]:[]).map(t=>'<option '+(p.typ===t?'selected':'')+'>'+esc(t)+'</option>').join('')+'</select></div>'+
  '<div class="row2">'+fld('Marke / Hersteller','p_marke',p.marke)+fld('Seriennummer','p_serial',p.serial)+'</div>'+
  '<div class="row3">'+fld('Herstellungsdatum','p_herst',p.herstellung,'date')+fld('Kaufdatum','p_kauf',p.kauf,'date')+fld('1. Inbetriebnahme','p_inb',p.inbetrieb,'date')+'</div>'+
  fldArea('Kommentar','p_komm',p.kommentar)+
  '<div class="field"><label class="fl">Produktfoto</label><div id="p_fprev" class="psa-fprev">'+(p.foto?'<img src="'+p.foto+'" alt="">':'<span>Kein Foto</span>')+'</div>'+
  '<div class="btn-row" style="margin-top:8px"><button class="btn sec sm" onclick="document.getElementById(\'p_fcam\').click()">'+I.cam+' Foto aufnehmen</button><button class="btn sec sm" onclick="document.getElementById(\'p_fup\').click()">'+I.up+' Hochladen</button><button class="btn sec sm" onclick="App.psaFotoClear()">×</button></div>'+
  '<input type="file" id="p_fcam" accept="image/*" capture="environment" style="display:none" onchange="App.psaFoto(this)"><input type="file" id="p_fup" accept="image/*" style="display:none" onchange="App.psaFoto(this)"></div>'+
  '<div class="btn-row" style="margin-top:8px"><button class="btn sec" onclick="App.closeModal()">Abbrechen</button><button class="btn" onclick="App.psaSave(\''+p.id+'\','+(id?1:0)+')">Produkt speichern</button></div>')};
App.psaFoto=function(input){const f=input.files[0];input.value='';if(!f)return;imgCompress(f,640,0.7).then(d=>{window._psaFoto=d;document.getElementById('p_fprev').innerHTML='<img src="'+d+'" alt="">'}).catch(()=>toast('Foto konnte nicht gelesen werden'))};
App.psaFotoClear=function(){window._psaFoto='';document.getElementById('p_fprev').innerHTML='<span>Kein Foto</span>'};
App.psaSave=function(id,existing){const list=psaList();let p=list.find(x=>x.id===id);
 const d={typ:val('p_typ'),name:val('p_name'),marke:val('p_marke'),serial:val('p_serial'),herstellung:val('p_herst'),kauf:val('p_kauf'),inbetrieb:val('p_inb'),kommentar:val('p_komm'),foto:window._psaFoto||'',updatedAt:new Date().toISOString()};
 if(!d.name&&!d.serial){toast('Bitte Produktname eingeben');return}
 if(p)Object.assign(p,d);else{p=Object.assign({id,createdAt:new Date().toISOString(),pruefungen:[]},d);list.push(p)}
 psaSaveList(list);App.closeModal();toast('Gespeichert');
 if(existing)App.render();else App.go('psa',{psaId:id})};
App.psaDel=function(id){if(!confirm('Produkt inkl. aller Prüfungen löschen?'))return;psaSaveList(psaList().filter(x=>x.id!==id));App.go('ausruestung')};

/* Prüfung durchführen */
App.prStart=function(psaId){const p=psaList().find(x=>x.id===psaId);if(!p)return;const zeilen=[];for(let i=0;i<PR_ROWS;i++)zeilen.push({ok:false,kommentar:'',reparieren:'',aussondern:''});
 App.state.pr={id:uid(),psaId,datum:todayISO(),next:plusYear(todayISO()),zeilen,weiter:'',pruefer:(psaLast(p)||{}).pruefer||'',unterschrift:null,createdAt:new Date().toISOString()};App.go('pruefung')};
function prCollect(){const r=App.state.pr;if(!r||!document.getElementById('pr_datum'))return;r.datum=val('pr_datum');r.next=val('pr_next');r.pruefer=val('pr_pruefer');
 r.zeilen.forEach((z,i)=>{['kommentar','reparieren','aussondern'].forEach(f=>{const e=document.getElementById('pr_'+f+'_'+i);if(e)z[f]=e.value})});keepSig(r)}
function rPruefung(){const r=App.state.pr;if(!r)return rAusr();const p=psaList().find(x=>x.id===r.psaId)||{};
 let h='<div class="back-row"><button class="iconbtn" onclick="App.prExit()">'+I.back+'</button><div class="h-title" style="font-size:20px">Neue Prüfung</div></div>';
 h+='<div class="h-sub" style="margin-top:-4px">'+esc(p.name||p.typ||'')+(p.serial?' · SN '+esc(p.serial):'')+'</div>';
 h+='<div class="card"><h3>Sichtprüfung der Komponenten</h3><div class="prt-wrap"><table class="prt"><thead><tr><th class="c-ok">ok</th><th>Kommentar</th><th>Reparieren</th><th>Aussondern</th><th></th></tr></thead><tbody>';
 r.zeilen.forEach((z,i)=>{h+='<tr><td class="c-ok"><span class="mini-box '+(z.ok?'on':'')+'" onclick="App.prOk('+i+',this)"></span></td>'+['kommentar','reparieren','aussondern'].map(f=>'<td><textarea rows="1" id="pr_'+f+'_'+i+'">'+esc(z[f])+'</textarea></td>').join('')+'<td>'+(r.zeilen.length>1?'<button class="iconbtn prt-del" onclick="App.prDelRow('+i+')">×</button>':'')+'</td></tr>'});
 h+='</tbody></table></div><button class="btn sec sm" style="margin-top:8px" onclick="App.prAddRow()">'+I.plus+' Zeile hinzufügen</button></div>';
 h+='<div class="card"><h3>Ergebnis</h3><div style="font-weight:700;margin-bottom:4px">Das Produkt darf weiterhin verwendet werden:</div><div style="display:flex;gap:24px"><div class="cbx '+(r.weiter==='ja'?'on':'')+'" onclick="App.prWeiter(\'ja\')"><span class="box">'+I.check+'</span>Ja</div><div class="cbx no '+(r.weiter==='nein'?'on':'')+'" onclick="App.prWeiter(\'nein\')"><span class="box">'+I.check+'</span>Nein</div></div>';
 if(r.weiter==='nein')h+='<div class="hint" style="border-color:#f0b4b4;background:#fdecec;color:#991b1b">Produkt wird als ausgesondert markiert.</div>';
 h+='<div class="row2" style="margin-top:12px;align-items:end">'+fld('Datum der Prüfung','pr_datum',r.datum,'date')+fld('Datum der nächsten Prüfung','pr_next',r.next,'date')+'</div><button class="btn sec sm" style="margin:-6px 0 12px" onclick="App.prPlusYear()">+1 Jahr ab Prüfdatum</button>';
 h+=fld('Prüfer (Name)','pr_pruefer',r.pruefer);
 h+='<label class="fl">Unterschrift Prüfer</label><canvas id="sigpad" class="sigpad"></canvas><button class="btn sec sm" style="margin-top:6px" onclick="App.prSigClear()">Löschen</button></div>';
 h+='<div class="btn-row"><button class="btn grad" onclick="App.prSave()">Prüfung speichern</button></div>';
 setTimeout(initSig,30);return h}
App.prOk=function(i,el){const z=App.state.pr.zeilen[i];z.ok=!z.ok;el.classList.toggle('on')};
App.prAddRow=function(){prCollect();App.state.pr.zeilen.push({ok:false,kommentar:'',reparieren:'',aussondern:''});App.render()};
App.prDelRow=function(i){prCollect();App.state.pr.zeilen.splice(i,1);App.render()};
App.prWeiter=function(v){prCollect();App.state.pr.weiter=App.state.pr.weiter===v?'':v;App.render()};
App.prPlusYear=function(){const e=document.getElementById('pr_next');if(e)e.value=plusYear(val('pr_datum'))};
App.prSigClear=function(){const c=document.getElementById('sigpad');if(c&&App._sig){App._sig.clearRect(0,0,c.width,c.height);App._sigDirty=false;App.state.pr.unterschrift=null}};
App.prExit=function(){if(!confirm('Prüfung verwerfen?'))return;const id=App.state.pr.psaId;App.state.pr=null;App.go('psa',{psaId:id})};
App.prSave=function(){prCollect();const r=App.state.pr;if(!r.datum){toast('Bitte Prüfdatum eintragen');return}if(!r.weiter){toast('Bitte Ergebnis wählen (Ja / Nein)');return}
 const list=psaList();const p=list.find(x=>x.id===r.psaId);if(!p){toast('Produkt nicht gefunden');return}
 const rec=JSON.parse(JSON.stringify(r));delete rec.psaId;rec.zeilen=rec.zeilen.filter(z=>z.ok||z.kommentar||z.reparieren||z.aussondern);
 p.pruefungen=p.pruefungen||[];p.pruefungen.push(rec);p.updatedAt=new Date().toISOString();psaSaveList(list);App.state.pr=null;toast('Prüfung gespeichert');App.go('psa',{psaId:p.id})};

/* Prüfung ansehen (nur lesen) */
function prTable(r){const z=(r.zeilen||[]);if(!z.length)return '<div style="color:var(--muted);font-size:13px">Keine Einzelbefunde erfasst.</div>';return '<table class="prt ro"><thead><tr><th class="c-ok">ok</th><th>Kommentar</th><th>Reparieren</th><th>Aussondern</th></tr></thead><tbody>'+z.map(x=>'<tr><td class="c-ok">'+(x.ok?'✓':'')+'</td><td>'+esc(x.kommentar)+'</td><td>'+esc(x.reparieren)+'</td><td>'+esc(x.aussondern)+'</td></tr>').join('')+'</tbody></table>'}
App.prView=function(psaId,id){const p=psaList().find(x=>x.id===psaId);const r=p&&(p.pruefungen||[]).find(x=>x.id===id);if(!r)return;
 modal('<h3>Prüfung vom '+fmtDate(r.datum)+'</h3>'+'<div class="sec-label" style="margin-top:0">Sichtprüfung der Komponenten</div><div class="prt-wrap">'+prTable(r)+'</div>'+
  (r.bemerkung?'<div class="hint">'+esc(r.bemerkung)+'</div>':'')+
  '<div class="card" style="margin-top:12px"><div class="kv"><span class="k">Weiter verwendbar</span><span class="v">'+(r.weiter==='ja'?'Ja':r.weiter==='nein'?'Nein – aussondern':'–')+'</span></div><div class="kv"><span class="k">Datum der Prüfung</span><span class="v">'+fmtDate(r.datum)+'</span></div><div class="kv"><span class="k">Nächste Prüfung</span><span class="v">'+fmtDate(r.next)+'</span></div><div class="kv"><span class="k">Prüfer</span><span class="v">'+esc(r.pruefer||'–')+'</span></div>'+(r.unterschrift?'<img src="'+r.unterschrift+'" style="max-height:70px;margin-top:8px">':'')+'</div>'+
  '<div class="btn-row"><button class="btn danger" onclick="App.prDel(\''+psaId+'\',\''+id+'\')">'+I.trash+' Löschen</button><button class="btn sec" onclick="App.closeModal()">Schließen</button></div>')};
App.prDel=function(psaId,id){if(!confirm('Diese Prüfung endgültig aus der Historie löschen?'))return;const list=psaList();const p=list.find(x=>x.id===psaId);if(!p)return;p.pruefungen=(p.pruefungen||[]).filter(x=>x.id!==id);p.updatedAt=new Date().toISOString();psaSaveList(list);App.closeModal();App.render()};

/* Prüfbuch (PDF über Druckdialog) */
App.psaExportSheet=function(){sheet('<div class="si" style="font-weight:800">Prüfbuch / Export</div>'+
 '<div class="si" onclick="App.closeSheet();App.psaPrint()"><span>'+I.pdf+' Prüfbuch drucken / als PDF</span><span class="chev">'+I.chev+'</span></div>'+
 '<div class="si" onclick="App.closeSheet();App.psaCSV()"><span>'+I.dl+' Tabelle für Excel (CSV)</span><span class="chev">'+I.chev+'</span></div>'+
 '<div class="si" onclick="App.closeSheet();App.psaExport()"><span>'+I.dl+' Datei für andere Geräte (Abgleich)</span><span class="chev">'+I.chev+'</span></div>'+
 '<div class="sfoot"><button class="btn sec sm" onclick="App.closeSheet()">Abbrechen</button></div>')};
App.psaPrint=function(ids){let list=psaList();if(ids)list=list.filter(p=>ids.indexOf(p.id)>=0);if(!list.length){toast('Keine Ausrüstung vorhanden');return}
 list.sort((a,b)=>(a.typ||'').localeCompare(b.typ||'','de')||(a.name||'').localeCompare(b.name||'','de'));
 document.getElementById('print-area').innerHTML=buildPruefbuch(list);setTimeout(()=>window.print(),250)};
function buildPruefbuch(list){
 let h='<div class="pb">';
 h+='<div class="pb-head"><div><div class="pb-t">Prüfbuch Ausrüstung / PSA</div><div class="pb-s">'+esc(meineDaten.name||'')+(meineDaten.stadt?' · '+esc(meineDaten.stadt):'')+'</div></div><div class="pb-s" style="text-align:right">Stand: '+new Date().toLocaleDateString('de-DE')+'<br>'+list.length+' Produkt'+(list.length===1?'':'e')+'</div></div>';
 if(list.length>1){h+='<table class="pb-tab"><thead><tr><th>Produkt</th><th>Typ</th><th>Seriennr.</th><th>Letzte Prüfung</th><th>Nächste Prüfung</th><th>Status</th></tr></thead><tbody>';
  list.forEach(p=>{const l=psaLast(p);const st=psaStatus(p);h+='<tr><td>'+esc(p.name||'–')+'</td><td>'+esc(p.typ||'')+'</td><td>'+esc(p.serial||'')+'</td><td>'+fmtDate(l&&l.datum)+'</td><td>'+fmtDate(psaNext(p))+'</td><td>'+({aus:'ausgesondert',over:'überfällig',soon:'bald fällig',ok:'in Ordnung',none:'–'})[st.k]+'</td></tr>'});
  h+='</tbody></table>';}
 list.forEach((p,i)=>{const hist=psaSorted(p).reverse();
  h+='<div class="pb-prod'+(list.length>1||i>0?' pb-break':'')+'">';
  h+='<div class="pb-ph"><div>'+(p.foto?'<img src="'+p.foto+'" class="pb-img">':'')+'</div><div style="flex:1"><div class="pb-pn">'+esc(p.name||p.typ)+'</div>';
  [['Typ',p.typ],['Marke / Hersteller',p.marke],['Seriennummer',p.serial],['Herstellungsdatum',fmtDate(p.herstellung)],['Kaufdatum',fmtDate(p.kauf)],['1. Inbetriebnahme',fmtDate(p.inbetrieb)],['Nächste Prüfung',fmtDate(psaNext(p))]].forEach(r=>{h+='<div class="pb-kv"><span>'+r[0]+'</span><span>'+esc(r[1]||'–')+'</span></div>'});
  if(p.kommentar)h+='<div class="pb-kv"><span>Kommentar</span><span>'+esc(p.kommentar)+'</span></div>';
  h+='</div></div>';
  h+='<div class="pb-sec">Prüfhistorie ('+hist.length+')</div>';
  if(!hist.length)h+='<div style="color:#666;font-size:11px">Noch keine Prüfung erfasst.</div>';
  hist.forEach((r,j)=>{h+='<div class="pb-pr"><div class="pb-prh"><b>Prüfung '+(j+1)+' · '+fmtDate(r.datum)+'</b><span>'+(r.weiter==='ja'?'<b style="color:#166534">Weiter verwendbar: JA</b>':r.weiter==='nein'?'<b style="color:#b91c1c">Weiter verwendbar: NEIN – aussondern</b>':'')+'</span></div>';
   if((r.zeilen||[]).length)h+='<table class="pb-tab"><thead><tr><th style="width:34px;text-align:center">ok</th><th>Kommentar</th><th>Reparieren</th><th>Aussondern</th></tr></thead><tbody>'+r.zeilen.map(z=>'<tr><td style="text-align:center">'+(z.ok?'✓':'')+'</td><td>'+esc(z.kommentar)+'</td><td>'+esc(z.reparieren)+'</td><td>'+esc(z.aussondern)+'</td></tr>').join('')+'</tbody></table>';
   if(r.bemerkung)h+='<div style="font-size:11px;margin:4px 0">Befund: '+esc(r.bemerkung)+'</div>';
   h+='<div class="pb-prf"><span>Nächste Prüfung: <b>'+fmtDate(r.next)+'</b></span><span class="pb-sig">'+(r.unterschrift?'<img src="'+r.unterschrift+'">':'')+'<span>Prüfer: '+esc(r.pruefer||'–')+'</span></span></div></div>'});
  h+='</div>';});
 h+='</div>';return h}

/* CSV (eine Zeile je Prüfung) */
App.psaCSV=function(){const list=psaList();if(!list.length){toast('Keine Ausrüstung vorhanden');return}const cd=d=>d?fmtDate(d):'';const q=v=>'"'+String(v==null?'':v).replace(/"/g,'""')+'"';
 const rows=[['Produkt','Typ','Marke','Seriennummer','Herstellung','Kauf','1. Inbetriebnahme','Kommentar','Prüfdatum','Weiter verwendbar','Nächste Prüfung','Prüfer','Befunde']];
 list.forEach(p=>{const hist=psaSorted(p).reverse();const base=[p.name,p.typ,p.marke,p.serial,cd(p.herstellung),cd(p.kauf),cd(p.inbetrieb),p.kommentar];
  if(!hist.length)rows.push(base.concat(['','','','','']));
  hist.forEach(r=>rows.push(base.concat([cd(r.datum),r.weiter==='ja'?'ja':r.weiter==='nein'?'nein':'',cd(r.next),r.pruefer,(r.zeilen||[]).map(z=>(z.ok?'[ok] ':'')+[z.kommentar,z.reparieren&&('Reparieren: '+z.reparieren),z.aussondern&&('Aussondern: '+z.aussondern)].filter(Boolean).join(' / ')).concat(r.bemerkung?[r.bemerkung]:[]).join(' | ')])))});
 download('pruefbuch-'+todayISO()+'.csv','﻿'+rows.map(r=>r.map(q).join(';')).join('\r\n'),'text/csv;charset=utf-8');toast('CSV exportiert')};

/* Export / Import zum Abgleich zwischen Geräten */
App.psaExport=async function(){const data={format:'baumwerk-ausruestung',version:1,exportedAt:new Date().toISOString(),items:psaList()};const name='baumwerk-ausruestung-'+todayISO()+'.json';const txt=JSON.stringify(data);
 try{const file=new File([txt],name,{type:'application/json'});if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:'BaumWerk Ausrüstung'});return}}catch(e){if(e&&e.name==='AbortError')return}
 download(name,txt,'application/json');toast('Ausrüstung exportiert ('+data.items.length+')')};
function psaMerge(a,b){const newer=(b.updatedAt||'')>(a.updatedAt||'')?b:a;const m=Object.assign({},a,b,newer);const map={};(a.pruefungen||[]).concat(b.pruefungen||[]).forEach(r=>{if(!map[r.id])map[r.id]=r});m.pruefungen=Object.values(map);m.updatedAt=newer.updatedAt||a.updatedAt||b.updatedAt||'';return m}
App.psaImport=function(input){const f=input.files[0];input.value='';if(!f)return;const rd=new FileReader();rd.onload=e=>{let items;try{const d=JSON.parse(e.target.result);items=Array.isArray(d)?d:(d.items||d.psa)}catch(err){toast('Datei ungültig');return}
 if(!Array.isArray(items)){toast('Keine Ausrüstungsdaten in der Datei');return}
 const list=psaList();let neu=0,akt=0;
 items.forEach(x=>{if(!x||!x.id)return;psaMigrate(x);let i=list.findIndex(p=>p.id===x.id);if(i<0&&x.serial)i=list.findIndex(p=>p.serial&&p.serial===x.serial&&normQ(p.name)===normQ(x.name));
  if(i<0){list.push(x);neu++}else{const before=JSON.stringify(list[i]);list[i]=psaMerge(list[i],x);if(JSON.stringify(list[i])!==before)akt++}});
 psaSaveList(list);App.render();toast('Import: '+neu+' neu, '+akt+' aktualisiert')};rd.readAsText(f)};
