document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('site-nav');
    if (!container) return;

    fetch('partials/nav.html')
        .then(r => { if (!r.ok) throw new Error('nav load'); return r.text(); })
        .then(html => {
            container.innerHTML = html;
            markActive(container);
        })
        .catch(() => {
            container.innerHTML = '<nav><a href="index.html">Início</a></nav>';
        });

    function markActive(root) {
        const links = (root || document).querySelectorAll('.nav-link');
        const current = (location.pathname.split('/').pop() || 'index.html');
        links.forEach(a => {
            const href = a.getAttribute('href');
            a.classList.toggle('active', href === current);
        });
    }
});
