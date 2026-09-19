// The published server catalog is the price source. This module contains only
// presentation and arithmetic; it never authorizes a purchase or entitlement.
export const slotWords = {
 en: { title:'Grow one client at a time', slots:'Client slots', slot:'client slot', credits:'credits', month:'month', exVat:'excluding VAT', active:'active', earned:'earned', paused:'paused', free:'Free test', pool:'Shared credits per calendar month (UTC). Unused credits do not roll over.', freeNote:'Free is a separate test: 2 client slots and 50 credits per month.', included:'Each paid slot adds {credits} credits to your shared monthly pool. Paid slots replace Free slots.', creditHelp:'1 Luna credit = 1 AI answer. A conversation can have several answers. Terra uses {terraCredits} credits per answer. AI answers pause if the available credits cannot cover the next answer.', answerExample:'With Luna, these credits cover up to {credits} AI answers per full month.', rewards:'Levels and benefits', starter:'Core features and 3,000 KB knowledge capacity per client.', studio:'Everything in Starter + advanced models, reseller branding and 5,000 KB knowledge capacity per client.', agency:'Everything in Studio + 10,000 KB knowledge capacity per client.', scale:'Everything in Agency + 20,000 KB knowledge capacity per client.', knowledgeCapacity:'Knowledge capacity per assistant', knowledgeHelp:'Knowledge capacity is the amount of saved website text an assistant can use. KB indicates its size; this is separate from monthly answer credits.', baseline:'Team access, widget customization and Human Assist are included.', earning:'Benefits activate after payment. A paid invoice for a full calendar month earns the level permanently. Earned benefits remain with at least one paid slot and pause on Free.', branding:'Reseller branding uses the existing footer; ClientRelay attribution remains.', calculator:'Partner calculator', sell:'Your monthly price per client (NOK, excluding VAT)', setup:'One-time setup fee per client (NOK, excluding VAT)', revenue:'Monthly revenue', fee:'Monthly platform cost', contribution:'Monthly amount after platform cost', firstYear:'First year, including setup fees', caution:'Before your own work, support and other costs. Assumes all clients remain for 12 months.', continue:'Start free', slotHelp:'One slot provides capacity for one client assistant. Add and manage your clients in the dashboard.', levelHelp:'Your paid slot count unlocks reseller levels automatically; there is no separate plan upgrade.', knowledge:'KB per client' },
 no: { title:'Voks én klient om gangen', slots:'Klientplasser', slot:'klientplass', credits:'kreditter', month:'måned', exVat:'eksklusive mva.', active:'aktivt', earned:'opptjent', paused:'pauset', free:'Gratis test', pool:'Felles kreditter per kalendermåned (UTC). Ubrukte kreditter overføres ikke.', freeNote:'Gratis er en separat test: 2 klientplasser og 50 kreditter per måned.', included:'Hver betalte plass legger til {credits} kreditter i den felles månedlige potten. Betalte plasser erstatter gratisplassene.', creditHelp:'1 Luna-kreditt = 1 AI-svar. En samtale kan ha flere svar. Terra bruker {terraCredits} kreditter per svar. AI-svar pauses hvis tilgjengelige kreditter ikke dekker neste svar.', answerExample:'Med Luna dekker disse kredittene opptil {credits} AI-svar per hele måned.', rewards:'Nivåer og fordeler', starter:'Grunnfunksjoner og 3 000 KB kunnskapskapasitet per klient.', studio:'Alt i Starter + avanserte modeller, forhandlerprofilering og 5 000 KB kunnskapskapasitet per klient.', agency:'Alt i Studio + 10 000 KB kunnskapskapasitet per klient.', scale:'Alt i Agency + 20 000 KB kunnskapskapasitet per klient.', knowledgeCapacity:'Kunnskapskapasitet per assistent', knowledgeHelp:'Kunnskapskapasitet er mengden lagret nettstedtekst assistenten kan bruke. KB angir størrelsen; dette er separat fra månedlige svarkreditter.', baseline:'Teamtilgang, widgettilpasning og Human Assist er inkludert.', earning:'Fordelene aktiveres etter betaling. En betalt faktura for en hel kalendermåned gir varig opptjent nivå. Opptjente fordeler beholdes med minst én betalt plass og pauses på Gratis.', branding:'Forhandlerprofilering bruker dagens bunntekst; ClientRelay-navnet beholdes.', calculator:'Partnerkalkulator', sell:'Din månedspris per klient (NOK, eksklusive mva.)', setup:'Engangspris for oppsett per klient (NOK, eksklusive mva.)', revenue:'Månedlig omsetning', fee:'Månedlig plattformkostnad', contribution:'Månedlig beløp etter plattformkostnad', firstYear:'Første år, inkludert oppsett', caution:'Før eget arbeid, support og andre kostnader. Forutsetter alle klientene i 12 måneder.', continue:'Start gratis', slotHelp:'Én plass gir kapasitet til én klientassistent. Legg til og administrer klientene dine i dashboardet.', levelHelp:'Antall betalte plasser låser opp forhandlernivåer automatisk; du trenger ikke oppgradere en egen plan.', knowledge:'KB per klient' },
 se: { title:'Väx en klient i taget', slots:'Klientplatser', slot:'klientplats', credits:'krediter', month:'månad', exVat:'exklusive moms', active:'aktivt', earned:'intjänat', paused:'pausat', free:'Gratis test', pool:'Gemensamma krediter per kalendermånad (UTC). Oanvända krediter sparas inte.', freeNote:'Gratis är ett separat test: 2 klientplatser och 50 krediter per månad.', included:'Varje betald plats lägger till {credits} krediter i den gemensamma månadspotten. Betalda platser ersätter gratisplatserna.', creditHelp:'1 Luna-kredit = 1 AI-svar. Ett samtal kan innehålla flera svar. Terra använder {terraCredits} krediter per svar. AI-svar pausas om tillgängliga krediter inte täcker nästa svar.', answerExample:'Med Luna räcker dessa krediter till upp till {credits} AI-svar per hel månad.', rewards:'Nivåer och förmåner', starter:'Grundfunktioner och 3 000 KB kunskapskapacitet per klient.', studio:'Allt i Starter + avancerade modeller, återförsäljarmärkning och 5 000 KB kunskapskapacitet per klient.', agency:'Allt i Studio + 10 000 KB kunskapskapacitet per klient.', scale:'Allt i Agency + 20 000 KB kunskapskapacitet per klient.', knowledgeCapacity:'Kunskapskapacitet per assistent', knowledgeHelp:'Kunskapskapacitet är mängden sparad webbplatstext som assistenten kan använda. KB anger storleken; detta är separat från månatliga svarskrediter.', baseline:'Teamåtkomst, widgetanpassning och Human Assist ingår.', earning:'Förmånerna aktiveras efter betalning. En betald faktura för en hel kalendermånad ger permanent intjänad nivå. Intjänade förmåner behålls med minst en betald plats och pausas på Gratis.', branding:'Återförsäljarmärkning använder befintlig sidfot; ClientRelay-märkningen finns kvar.', calculator:'Partnerkalkylator', sell:'Ditt månadspris per klient (NOK, exklusive moms)', setup:'Engångspris för uppsättning per klient (NOK, exklusive moms)', revenue:'Månadsintäkt', fee:'Månatlig plattformskostnad', contribution:'Kvar per månad efter plattformskostnad', firstYear:'Första året, inklusive uppsättning', caution:'Före eget arbete, support och andra kostnader. Förutsätter alla klienter i 12 månader.', continue:'Börja gratis', slotHelp:'En plats ger kapacitet för en klientassistent. Lägg till och hantera dina klienter i dashboarden.', levelHelp:'Antalet betalda platser låser upp återförsäljarnivåer automatiskt; du behöver inte uppgradera en separat plan.', knowledge:'KB per klient' },
};
export function pricingWords(lang) { return slotWords[lang === 'sv' ? 'se' : lang === 'nb' ? 'no' : lang] || slotWords.en; }
const guideWords = {
 en: { answers:'Credits pay for AI answers', answerIntro:'Your clients share one monthly credit pool. Each AI answer uses credits; a conversation can contain several answers.', rate:'credits per answer', singleRate:'credit per answer', monthly:'Monthly credit rules', pause:'AI answers pause when the remaining credits cannot cover the next answer.', knowledge:'Knowledge holds website text', knowledgeIntro:'This is the saved text an assistant can use to answer questions. KB measures its size. It is separate from your monthly credits.', knowledgeLabel:'Website knowledge', perClient:'per client', starter:'Core features', studio:'Everything in Starter, plus:', agency:'Everything in Studio', scale:'Everything in Agency', advanced:'Advanced models', branding:'Reseller branding', levels:'More clients, more benefits', levelIntro:'Levels unlock automatically as you add paid client slots.', details:'When benefits activate and how you keep them' },
 no: { answers:'Kreditter brukes til AI-svar', answerIntro:'Klientene dine deler én månedlig kredittpott. Hvert AI-svar bruker kreditter. En samtale kan inneholde flere svar.', rate:'kreditter per svar', singleRate:'kreditt per svar', monthly:'Slik fungerer månedlige kreditter', pause:'AI-svar pauses når det ikke er nok kreditter til neste svar.', knowledge:'Kunnskap er lagret nettstedtekst', knowledgeIntro:'Dette er teksten assistenten kan bruke for å svare på spørsmål. KB viser størrelsen. Kunnskap er separat fra de månedlige kredittene.', knowledgeLabel:'Nettstedkunnskap', perClient:'per klient', starter:'Grunnfunksjoner', studio:'Alt i Starter, pluss:', agency:'Alt i Studio', scale:'Alt i Agency', advanced:'Avanserte modeller', branding:'Forhandlerprofilering', levels:'Flere klienter, flere fordeler', levelIntro:'Nivåene låses opp automatisk når du legger til betalte klientplasser.', details:'Når fordelene aktiveres og hvordan du beholder dem' },
 se: { answers:'Krediter används till AI-svar', answerIntro:'Dina klienter delar en månatlig kreditpott. Varje AI-svar använder krediter. Ett samtal kan innehålla flera svar.', rate:'krediter per svar', singleRate:'kredit per svar', monthly:'Så fungerar månatliga krediter', pause:'AI-svar pausas när det inte finns tillräckligt med krediter för nästa svar.', knowledge:'Kunskap är sparad webbplatstext', knowledgeIntro:'Det är texten assistenten kan använda för att svara på frågor. KB visar storleken. Kunskap är separat från de månatliga krediterna.', knowledgeLabel:'Webbplatskunskap', perClient:'per klient', starter:'Grundfunktioner', studio:'Allt i Starter, plus:', agency:'Allt i Studio', scale:'Allt i Agency', advanced:'Avancerade modeller', branding:'Återförsäljarmärkning', levels:'Fler klienter, fler förmåner', levelIntro:'Nivåerna låses upp automatiskt när du lägger till betalda klientplatser.', details:'När förmånerna aktiveras och hur du behåller dem' },
};
function pricingGuideWords(lang) { return guideWords[lang === 'sv' ? 'se' : lang === 'nb' ? 'no' : lang] || guideWords.en; }
function knowledgeGuideHtml(lang) {
 const g=pricingGuideWords(lang);
 return `<section class="slot-guide-panel"><h3>${g.knowledge}</h3><p>${g.knowledgeIntro}</p></section>`;
}
function creditGuideHtml(config,lang) {
 const g=pricingGuideWords(lang), w=pricingWords(lang);
 const terra=config.credits_per_slot===2000?15:3;
 return `<div class="slot-guide"><section class="slot-guide-panel"><h3>${g.answers}</h3><p>${g.answerIntro}</p>
 <div class="slot-answer-rates"><p><span>Luna</span><strong>1</strong><small>${g.singleRate}</small></p><p><span>Terra</span><strong>${terra}</strong><small>${g.rate}</small></p></div>
 <details class="slot-details"><summary>${g.monthly}</summary><p>${w.pool}</p><p>${g.pause}</p></details></section>${knowledgeGuideHtml(lang)}</div>`;
}
export function slotIncludedText(config, lang = 'en') {
 if (![400, 2000].includes(config?.credits_per_slot)) throw new Error('Unsupported credit catalog');
 return pricingWords(lang).included.replace('{credits}', config.credits_per_slot.toLocaleString(lang === 'se' ? 'sv-SE' : lang === 'no' ? 'nb-NO' : 'en-GB'));
}
export function slotCreditHelpText(config, lang = 'en') {
 if (![400, 2000].includes(config?.credits_per_slot)) throw new Error('Unsupported credit catalog');
 return pricingWords(lang).creditHelp.replace('{terraCredits}', config.credits_per_slot === 2000 ? 15 : 3);
}
export function slotAnswerExampleText(config, slots, lang = 'en') {
 const estimate = estimateSlots(config, slots);
 const w = pricingWords(lang);
 const number = value => value.toLocaleString(lang === 'se' ? 'sv-SE' : lang === 'no' ? 'nb-NO' : 'en-GB');
 return w.answerExample.replace('{credits}', number(estimate.credits));
}
export function nok(minor, lang = 'en') { return `${(minor / 100).toLocaleString(lang === 'se' ? 'sv-SE' : lang === 'no' ? 'nb-NO' : 'en-GB', { maximumFractionDigits:2 })} NOK`; }
export function validatePublicSlotPricing(value) {
 if (!value || value.version !== 'slots_v1' || typeof value.enabled !== 'boolean' || value.currency !== 'nok'
   || value.unit_amount !== 25000 || ![400, 2000].includes(value.credits_per_slot) || value.free_slots !== 2 || value.free_credits !== 50
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
export function levelsHtml(config, lang, showKnowledge = true) {
 const w=pricingWords(lang), g=pricingGuideWords(lang);
 const locale=lang==='se'||lang==='sv'?'sv-SE':lang==='no'||lang==='nb'?'nb-NO':'en-GB';
 return `<div class="slot-benefits"><header class="slot-benefits-heading"><h3>${g.levels}</h3><p>${g.levelIntro}</p></header>
 ${showKnowledge?`<div class="slot-knowledge-note">${knowledgeGuideHtml(lang)}</div>`:''}
 <div class="slot-levels">${config.levels.filter(row=>row.min_slots>0).map(row=>`<section>
 <h4>${escapeSlot(row.level[0].toUpperCase()+row.level.slice(1))}</h4><p class="slot-level-threshold">${row.min_slots}+ ${w.slots.toLowerCase()}</p>
 <div class="slot-level-features"><p>${g[row.level]}</p>${row.level==='studio'?`<ul><li>${g.advanced}</li><li>${g.branding}</li></ul>`:''}</div>
 <p class="slot-level-capacity"><span>${g.knowledgeLabel}</span><strong>${row.kb_limit_kb.toLocaleString(locale)}\u00a0KB</strong><small>${g.perClient}</small></p>
 </section>`).join('')}</div><p class="slot-baseline">${w.baseline}</p>
 <details class="slot-details slot-benefit-details"><summary>${g.details}</summary><p>${w.earning}</p><p>${w.branding}</p></details></div>`;
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
 const stylesUrl=new URL('./slot-pricing.css',import.meta.url);
 stylesUrl.search=new URL(import.meta.url).search;
 link.href=stylesUrl.href; document.head.append(link);
}

export function mountSlotPricing(root, config, lang = 'en') {
 validatePublicSlotPricing(config); ensureSlotStyles();
 const w=pricingWords(lang);
 root.innerHTML=`<div class="section-inner slot-pricing"><h2>${w.title}</h2><p>${w.slotHelp}</p><div class="slot-offer">
 <section><h3>${w.free}</h3><strong>0 NOK</strong><p>${w.freeNote}</p><a href="https://clientrelay.tech/app/signup/?lang=${encodeURIComponent(lang)}">${w.continue}</a></section>
 <section><h3>${nok(config.unit_amount,lang)} / ${w.slot} / ${w.month}</h3><p>${w.exVat}</p>
 <label>${w.slots}<input name="pricing-slots" type="number" min="1" max="10000" step="1" value="3"></label>
 <output aria-live="polite"></output><p data-slot-credits></p><p data-slot-answers></p><p>${slotIncludedText(config,lang)}</p><a href="https://clientrelay.tech/app/signup/?lang=${encodeURIComponent(lang)}">${w.continue}</a></section></div>
 ${creditGuideHtml(config,lang)}${levelsHtml(config,lang,false)}</div>`;
 const update=()=>{try {const slots=Number(root.querySelector('[name=pricing-slots]').value); const e=estimateSlots(config,slots); root.querySelector('output').textContent=`${nok(e.amount,lang)} / ${w.month} · ${w.exVat}`; root.querySelector('[data-slot-credits]').textContent=`${e.credits.toLocaleString(lang === 'se' ? 'sv-SE' : lang === 'no' ? 'nb-NO' : 'en-GB')} ${w.credits}/${w.month} · ${e.level[0].toUpperCase()+e.level.slice(1)}`; root.querySelector('[data-slot-answers]').textContent=slotAnswerExampleText(config,slots,lang);} catch {root.querySelector('output').textContent='—';root.querySelector('[data-slot-credits]').textContent='';root.querySelector('[data-slot-answers]').textContent='';}};
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
