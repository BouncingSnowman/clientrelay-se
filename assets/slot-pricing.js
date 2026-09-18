// The published server catalog is the price source. This module contains only
// presentation and arithmetic; it never authorizes a purchase or entitlement.
export const slotWords = {
 en: { title:'Grow one client at a time', slots:'Client slots', slot:'client slot', credits:'credits', month:'month', exVat:'excluding VAT', active:'active', earned:'earned', paused:'paused', free:'Free test', pool:'Shared credits per calendar month (UTC). Unused credits do not roll over.', freeNote:'Free is a separate test: 2 client slots and 50 credits per month.', included:'One slot includes 400 credits per month. Paid capacity replaces Free capacity.', rewards:'Levels and benefits', starter:'Core features and 3,000 KB of knowledge per client.', studio:'Everything in Starter + advanced models, reseller branding and 5,000 KB per client.', agency:'Everything in Studio + 10,000 KB per client.', scale:'Everything in Agency + 20,000 KB per client.', baseline:'Team access, widget customization and Human Assist are included.', earning:'Benefits activate after payment. A paid invoice for a full calendar month earns the level permanently. Earned benefits remain with at least one paid slot and pause on Free.', branding:'Reseller branding uses the existing footer; ClientRelay attribution remains.', calculator:'Partner calculator', sell:'Your monthly price per client (NOK, excluding VAT)', setup:'One-time setup fee per client (NOK, excluding VAT)', revenue:'Monthly revenue', fee:'Monthly platform cost', contribution:'Monthly amount after platform cost', firstYear:'First year, including setup fees', caution:'Before your own work, support and other costs. Assumes all clients remain for 12 months.', continue:'Start free', slotHelp:'One slot provides capacity for one client assistant. Add and manage your clients in the dashboard.', creditHelp:'Credits measure AI reply usage and are shared by all clients in your hub. More capable models use more credits per reply. AI replies pause when the available credits cannot cover the next reply.', levelHelp:'Your paid slot count unlocks reseller levels automatically; there is no separate plan upgrade.', knowledge:'KB per client' },
 no: { title:'Voks én klient om gangen', slots:'Klientplasser', slot:'klientplass', credits:'kreditter', month:'måned', exVat:'eksklusive mva.', active:'aktivt', earned:'opptjent', paused:'pauset', free:'Gratis test', pool:'Felles kreditter per kalendermåned (UTC). Ubrukte kreditter overføres ikke.', freeNote:'Gratis er en separat test: 2 klientplasser og 50 kreditter per måned.', included:'Én plass inkluderer 400 kreditter per måned. Kjøpte plasser erstatter gratisplassene.', rewards:'Nivåer og fordeler', starter:'Grunnfunksjoner og 3 000 KB kunnskap per klient.', studio:'Alt i Starter + avanserte modeller, forhandlerprofilering og 5 000 KB per klient.', agency:'Alt i Studio + 10 000 KB per klient.', scale:'Alt i Agency + 20 000 KB per klient.', baseline:'Teamtilgang, widgettilpasning og Human Assist er inkludert.', earning:'Fordelene aktiveres etter betaling. En betalt faktura for en hel kalendermåned gir varig opptjent nivå. Opptjente fordeler beholdes med minst én betalt plass og pauses på Gratis.', branding:'Forhandlerprofilering bruker dagens bunntekst; ClientRelay-navnet beholdes.', calculator:'Partnerkalkulator', sell:'Din månedspris per klient (NOK, eksklusive mva.)', setup:'Engangspris for oppsett per klient (NOK, eksklusive mva.)', revenue:'Månedlig omsetning', fee:'Månedlig plattformkostnad', contribution:'Månedlig beløp etter plattformkostnad', firstYear:'Første år, inkludert oppsett', caution:'Før eget arbeid, support og andre kostnader. Forutsetter alle klientene i 12 måneder.', continue:'Start gratis', slotHelp:'Én plass gir kapasitet til én klientassistent. Legg til og administrer klientene dine i dashboardet.', creditHelp:'Kreditter måler bruken av AI-svar og deles mellom alle klientene i hubben. Mer avanserte modeller bruker flere kreditter per svar. AI-svar pauses når tilgjengelige kreditter ikke dekker neste svar.', levelHelp:'Antall betalte plasser låser opp forhandlernivåer automatisk; du trenger ikke oppgradere en egen plan.', knowledge:'KB per klient' },
 se: { title:'Väx en klient i taget', slots:'Klientplatser', slot:'klientplats', credits:'krediter', month:'månad', exVat:'exklusive moms', active:'aktivt', earned:'intjänat', paused:'pausat', free:'Gratis test', pool:'Gemensamma krediter per kalendermånad (UTC). Oanvända krediter sparas inte.', freeNote:'Gratis är ett separat test: 2 klientplatser och 50 krediter per månad.', included:'En plats inkluderar 400 krediter per månad. Köpta platser ersätter gratisplatserna.', rewards:'Nivåer och förmåner', starter:'Grundfunktioner och 3 000 KB kunskapsunderlag per klient.', studio:'Allt i Starter + avancerade modeller, återförsäljarmärkning och 5 000 KB per klient.', agency:'Allt i Studio + 10 000 KB per klient.', scale:'Allt i Agency + 20 000 KB per klient.', baseline:'Teamåtkomst, widgetanpassning och Human Assist ingår.', earning:'Förmånerna aktiveras efter betalning. En betald faktura för en hel kalendermånad ger permanent intjänad nivå. Intjänade förmåner behålls med minst en betald plats och pausas på Gratis.', branding:'Återförsäljarmärkning använder befintlig sidfot; ClientRelay-märkningen finns kvar.', calculator:'Partnerkalkylator', sell:'Ditt månadspris per klient (NOK, exklusive moms)', setup:'Engångspris för uppsättning per klient (NOK, exklusive moms)', revenue:'Månadsintäkt', fee:'Månatlig plattformskostnad', contribution:'Kvar per månad efter plattformskostnad', firstYear:'Första året, inklusive uppsättning', caution:'Före eget arbete, support och andra kostnader. Förutsätter alla klienter i 12 månader.', continue:'Börja gratis', slotHelp:'En plats ger kapacitet för en klientassistent. Lägg till och hantera dina klienter i dashboarden.', creditHelp:'Krediter mäter användningen av AI-svar och delas mellan alla klienter i din hubb. Mer avancerade modeller använder fler krediter per svar. AI-svar pausas när tillgängliga krediter inte räcker till nästa svar.', levelHelp:'Antalet betalda platser låser upp återförsäljarnivåer automatiskt; du behöver inte uppgradera en separat plan.', knowledge:'KB per klient' },
};
export function pricingWords(lang) { return slotWords[lang === 'sv' ? 'se' : lang === 'nb' ? 'no' : lang] || slotWords.en; }
export function nok(minor, lang = 'en') { return `${(minor / 100).toLocaleString(lang === 'se' ? 'sv-SE' : lang === 'no' ? 'nb-NO' : 'en-GB', { maximumFractionDigits:2 })} NOK`; }
export function validatePublicSlotPricing(value) {
 if (!value || value.version !== 'slots_v1' || typeof value.enabled !== 'boolean' || value.currency !== 'nok'
   || value.unit_amount !== 25000 || value.credits_per_slot !== 400 || value.free_slots !== 2 || value.free_credits !== 50
   || !Array.isArray(value.levels)) throw new Error('Unsupported pricing catalog');
 const expected = [['starter',1,3000],['studio',3,5000],['agency',10,10000],['scale',20,20000]];
 const allowed = [['free',0,3000], ...expected];
 if (!expected.every(([level,min,kb]) => value.levels.some(row => row.level === level && row.min_slots === min && row.kb_limit_kb === kb))
   || value.levels.some(row => !allowed.some(([level,min,kb]) => row?.level === level && row.min_slots === min && row.kb_limit_kb === kb))
   || new Set(value.levels.map(row => row.level)).size !== value.levels.length) throw new Error('Incomplete pricing catalog');
 return value;
}
export function estimateSlots(config, slots) {
 validatePublicSlotPricing(config);
 if (!Number.isSafeInteger(slots) || slots < 1 || slots > 10000) throw new Error('Choose a positive whole number of slots');
 const level = [...config.levels].sort((a,b) => b.min_slots - a.min_slots).find(row => slots >= row.min_slots);
 return { slots, amount:slots * config.unit_amount, credits:slots * config.credits_per_slot, level:level.level };
}
export function escapeSlot(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
export function levelsHtml(config, lang) {
 const w = pricingWords(lang);
 return `<h3>${w.rewards}</h3><div class="slot-levels">${config.levels.filter(row => row.min_slots > 0).map(row => `<section><h4>${escapeSlot(row.level[0].toUpperCase()+row.level.slice(1))} · ${row.min_slots}+ ${w.slots.toLowerCase()}</h4><p>${w[row.level]}</p></section>`).join('')}</div><p>${w.baseline}</p><p>${w.earning}</p><p><small>${w.branding}</small></p>`;
}
export function mountSlotCalculator(root, config, lang = 'en', initialSlots = 3) {
 validatePublicSlotPricing(config);
 const w = pricingWords(lang);
 root.innerHTML = `<div class="card slot-calculator"><h2>${w.calculator}</h2><div class="slot-fields">
 <label>${w.slots}<input class="input" name="slots" type="number" min="1" max="10000" step="1" value="${Math.max(1, initialSlots)}"></label>
 <label>${w.sell}<input class="input" name="sell" type="number" min="0" step="1" value="750"></label>
 <label>${w.setup}<input class="input" name="setup" type="number" min="0" step="1" value="3000"></label></div>
 <div class="slot-results" aria-live="polite"></div><p>${w.caution}</p><p>${w.pool}</p>${levelsHtml(config, lang)}</div>`;
 const calculate = () => {
  const slots = Number(root.querySelector('[name=slots]').value);
  const sell = Number(root.querySelector('[name=sell]').value), setup = Number(root.querySelector('[name=setup]').value);
  const out = root.querySelector('.slot-results');
  try {
   const estimate = estimateSlots(config, slots);
   if (!Number.isFinite(sell) || sell < 0 || !Number.isFinite(setup) || setup < 0) throw new Error('');
   const revenue = slots * sell * 100, contribution = revenue - estimate.amount;
   out.innerHTML = `<p><strong>${estimate.level[0].toUpperCase()+estimate.level.slice(1)}</strong> · ${estimate.credits.toLocaleString(lang === 'se' ? 'sv-SE' : lang === 'no' ? 'nb-NO' : 'en-GB')} ${w.credits}/${w.month}</p>` +
     [[w.revenue,revenue],[w.fee,estimate.amount],[w.contribution,contribution],[w.firstYear,contribution*12+slots*setup*100]]
     .map(([label,value])=>`<p>${label}: <strong>${nok(value,lang)}</strong> ${w.exVat}</p>`).join('');
  } catch { out.textContent = '—'; }
 };
 root.addEventListener('input',calculate); calculate();
}

export function ensureSlotStyles() {
 if (document.querySelector('link[data-slot-styles]')) return;
 const link=document.createElement('link'); link.rel='stylesheet'; link.dataset.slotStyles='true';
 link.href=new URL('./slot-pricing.css?v=__BUILD_VERSION__',import.meta.url).href; document.head.append(link);
}

export function mountSlotPricing(root, config, lang = 'en') {
 validatePublicSlotPricing(config); ensureSlotStyles();
 const w=pricingWords(lang);
 root.innerHTML=`<div class="section-inner slot-pricing"><h2>${w.title}</h2><p>${w.slotHelp}</p><div class="slot-offer">
 <section><h3>${w.free}</h3><strong>0 NOK</strong><p>${w.freeNote}</p><a href="https://clientrelay.tech/app/signup/?lang=${encodeURIComponent(lang)}">${w.continue}</a></section>
 <section><h3>${nok(config.unit_amount,lang)} / ${w.slot} / ${w.month}</h3><p>${w.exVat}</p>
 <label>${w.slots}<input name="pricing-slots" type="number" min="1" max="10000" step="1" value="3"></label>
 <output aria-live="polite"></output><p data-slot-credits></p><p>${w.included}</p><a href="https://clientrelay.tech/app/signup/?lang=${encodeURIComponent(lang)}">${w.continue}</a></section></div>
 <p>${w.creditHelp}</p><p>${w.pool}</p><p>${w.levelHelp}</p>${levelsHtml(config,lang)}</div>`;
 const update=()=>{try {const e=estimateSlots(config,Number(root.querySelector('[name=pricing-slots]').value)); root.querySelector('output').textContent=`${nok(e.amount,lang)} / ${w.month} · ${w.exVat}`; root.querySelector('[data-slot-credits]').textContent=`${e.credits.toLocaleString(lang === 'se' ? 'sv-SE' : lang === 'no' ? 'nb-NO' : 'en-GB')} ${w.credits}/${w.month} · ${e.level[0].toUpperCase()+e.level.slice(1)}`;} catch {root.querySelector('output').textContent='—';root.querySelector('[data-slot-credits]').textContent='';}};
 root.oninput=update; update();
 // Replace all offer claims together, including structured data. Legacy
 // package prices must not survive after the slot catalog is activated.
 for (const script of document.querySelectorAll('script[type="application/ld+json"]')) {
  try { const doc=JSON.parse(script.textContent); if (doc['@type']==='SoftwareApplication') {
   doc.offers={ '@type':'Offer', name:'ClientRelay client slot', priceCurrency:'NOK', price:'250',
    priceSpecification:{'@type':'UnitPriceSpecification',price:250,priceCurrency:'NOK',valueAddedTaxIncluded:false,
     unitText:'client slot / calendar month'}, url:location.origin+'/#pricing' };
   script.textContent=JSON.stringify(doc);
  }} catch { /* unrelated schema stays unchanged */ }
 }
}
