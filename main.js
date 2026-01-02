// Simplified Data for Home Page
const professions = [
    {
        id: "humanities",
        title: "Հումանիտար",
        summary: "Լեզուների և բանասիրության խորացված ուսուցում:",
        details: "Հումանիտար հոսքը կենտրոնանում է մայրենի և օտար լեզուների խորացված ուսումնասիրության ու գրականության վերլուծության վրա: Այն զարգացնում է սովորողների թարգմանչական հմտությունները և բանավոր ու գրավոր հաղորդակցվելու արվեստը՝ պատրաստելով ապագա լեզվաբանների և բանասերների:"
    },
    {
        id: "Technologies",
        title: "ՏՀՏ",
        summary: "Ծրագրավորման և թվային տեխնոլոգիաների խորացված ուսուցում:",
        details: "Այս հոսքը նպատակ ունի զարգացնել ալգորիթմական մտածողությունը և տիրապետել ժամանակակից ծրագրավորման լեզուներին: Սովորողները ձեռք են բերում գործնական հմտություններ տեղեկատվական համակարգերի կառավարման և նորարարական տեխնոլոգիաների կիրառման ոլորտում։"
    },
    {
        id: "Art",
        title: "Արվեստ",
        summary: "Ստեղծագործական հմտությունների և գեղագիտության զարգացում:",
        details: "Այս ուղղությունը կենտրոնանում է կերպարվեստի դիզայնի և արվեստի պատմության ուսումնասիրության վրա: Այն օգնում է սովորողներին բացահայտել իրենց ստեղծագործական ներուժը և զարգացնել տեսողական հաղորդակցության ու գեղագիտական վերլուծության կարողությունները:"
    },
    {
        id: "PhysicsMath",
        title: "Ֆիզմաթ",
        summary: "Ֆիզիկայի և մաթեմատիկայի խորացված ուսուցում:",
        details: "Այս հոսքը նախատեսված է տրամաբանական և վերլուծական ուժեղ մտածողություն ունեցողների համար: Սովորողները խորությամբ ուսումնասիրում են բնության օրենքները և մաթեմատիկական մոդելավորումը որոնք հիմք են հանդիսանում ճարտարագիտության և տեխնոլոգիական բնագավառների համար:"
    },
    {
        id: "BioChemistry",
        title: "Կենսաքիմիա",
        summary: "Կենսաբանության և քիմիայի համակողմանի ուսումնասիրություն:",
        details: "Այս ուղղությունը կենտրոնանում է կենդանի օրգանիզմների և նյութերի քիմիական կառուցվածքի հետազոտման վրա Այն հիանալի նախապատրաստական հիմք է ապագա բժիշկների դեղագործների և բնապահպանների համար ովքեր ցանկանում են հասկանալ կյանքի գիտական հիմքերը:"
    },
    {
        id: "History",
        title: "Պատմագիտություն",
        summary: "Պատմական իրադարձությունների և հասարակագիտության վերլուծություն:",
        details: "Այս ուղղությունը կենտրոնանում է մարդկության պատմության քաղաքական զարգացումների և սոցիալական փոփոխությունների ուսումնասիրության վրա Այն զարգացնում է քննադատական վերլուծության և փաստարկված խոսքի հմտությունները որոնք կարևոր են ապագա քաղաքագետների և իրավաբանների համար:"
    },
];

function init() {
    const profGrid = document.getElementById('professions-grid');
    if (profGrid) {
        profGrid.innerHTML = professions.map(p => `
            <div class="card" onclick="openProfession('${p.id}')">
                <h3>${p.title}</h3>
                <p>${p.summary}</p>
            </div>
        `).join('');
    }
}

function openProfession(id) {
    const p = professions.find(item => item.id === id);
    const container = document.getElementById('modal-container');
    container.innerHTML = `
        <div class="modal-profession" style="position: relative;">
            <button class="close-btn" onclick="closeOverlay()">✕</button>
            <h2 class="serif" style="font-size: 2.8rem; margin-bottom: 1.5rem; color: var(--primary);">${p.title}</h2>
            <p style="font-size: 1.15rem; color: var(--text-muted); line-height: 1.8;">${p.details}</p>
        </div>
    `;
    showOverlay();
}

function showOverlay() {
    const ov = document.getElementById('global-overlay');
    ov.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOverlay() {
    const ov = document.getElementById('global-overlay');
    ov.classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOverlay();
});

window.onclick = function (e) {
    if (e.target.id === 'global-overlay') closeOverlay();
}

document.addEventListener('DOMContentLoaded', init);
