const projects = [
    {
        id: "greenhouse",
        title: "Դպրոցական Ջերմոց",
        summary: "Բուսաբանական կյանքի վերականգնումը ժամանակակից տեխնոլոգիաներով:",
        image: "campus_life.png",
        lecture: `
            <div class="lecture-header">
                <span class="section-label">Կենսատեխնոլոգիա</span>
                <h1>Դպրոցական Ջերմոց</h1>
            </div>
            <div class="lecture-body">
                <div class="lecture-main">
                    <h2>Տեսլական</h2>
                    <p>Այս նախագիծը ծնվել է մեր դպրոցի տարածքում հազվագյուտ բուսատեսակները պահպանելու ցանկությունից:</p>
                    <img src="campus_life.png" class="lecture-images">
                    <h2>Իրականացում</h2>
                    <p>Մենք նախագծել ենք խոնավեցման հատուկ համակարգ, որը նմանակում է բնական անձրևները՝ միաժամանակ պահպանելով վերահսկվող կլիմա:</p>
                    <h2>Արդյունք</h2>
                    <p>Պատմության պահպանումը ժամանակակից ինժեներիայի միջոցով այս ուսումնական տարվա հիմնական թեման է:</p>
                </div>
                <div class="lecture-sidebar">
                    <div class="sidebar-widget">
                        <span class="sidebar-label">Բաժին</span>
                        <span class="sidebar-value">Բնագիտություն</span>
                    </div>
                    <div class="sidebar-widget">
                        <span class="sidebar-label">Տարեթիվ</span>
                        <span class="sidebar-value">2025</span>
                    </div>
                    <div class="sidebar-widget">
                        <span class="sidebar-label">Ղեկավար</span>
                        <span class="sidebar-value">Աշակերտական Խորհուրդ</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "rover",
        title: "Ռոբոտաշինության Խմբակ",
        summary: "Ինքնավար սարքերի ստեղծում և քարտեզագրում:",
        image: "school_hero.png",
        lecture: `
            <div class="lecture-header">
                <span class="section-label">Ռոբոտաշինություն</span>
                <h1>Կամպուս Վոյաջեր</h1>
            </div>
            <div class="lecture-body">
                <div class="lecture-main">
                    <h2>Նպատակ</h2>
                    <p>Ստեղծել ինքնավար ռոբոտ, որն ընդունակ է տեղաշարժվել դպրոցի բակում՝ հաղթահարելով տարբեր արգելքներ:</p>
                    <img src="school_hero.png" class="lecture-images">
                    <h2>Տեխնոլոգիաներ</h2>
                    <p>Վոյաջերը օգտագործում է ուլտրաձայնային սենսորներ արգելքները հայտնաբերելու համար և հատուկ կախոցների համակարգ:</p>
                    <h2>Ազդեցություն</h2>
                    <p>Հավաքագրված տվյալները օգնում են մեր թիմին ավելի արդյունավետ կառավարել դպրոցի տարածքը:</p>
                </div>
                <div class="lecture-sidebar">
                    <div class="sidebar-widget">
                        <span class="sidebar-label">Բաժին</span>
                        <span class="sidebar-value">Ինժեներիա</span>
                    </div>
                    <div class="sidebar-widget">
                        <span class="sidebar-label">Տարեթիվ</span>
                        <span class="sidebar-value">2025</span>
                    </div>
                    <div class="sidebar-widget">
                        <span class="sidebar-label">Բարդություն</span>
                        <span class="sidebar-value">Բարձր</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "digital-archive",
        title: "Թվային Արխիվ",
        summary: "Դպրոցի փաստաթղթերի և պատմության կենտրոնացված հաբ:",
        image: "school_history.png",
        lecture: "<h1>Թվային Արխիվ</h1><p>Բովանդակությունը շուտով...</p>"
    },
    {
        id: "ai-assistant",
        title: "Աուրա ԱԻ",
        summary: "Աշակերտների կողմից ստեղծված վիրտուալ օգնական գրադարանի համար:",
        image: "campus_life.png",
        lecture: "<h1>Աուրա ԱԻ</h1><p>Բովանդակությունը շուտով...</p>"
    }
];

function init() {
    const projGrid = document.getElementById('projects-grid');
    if (projGrid) {
        projGrid.innerHTML = projects.map(p => `
            <div class="card" onclick="openProject('${p.id}')">
                <img src="${p.image}" class="card-img" alt="${p.title}">
                <h3>${p.title}</h3>
                <p>${p.summary}</p>
            </div>
        `).join('');
    }
}

function openProject(id) {
    const p = projects.find(item => item.id === id);
    const container = document.getElementById('modal-container');
    container.innerHTML = `
        <div class="modal-project" style="position: relative;">
            <button class="close-btn" onclick="closeOverlay()">✕</button>
            ${p.lecture}
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
