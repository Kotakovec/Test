// Aplikace
const apps = {
    phone: {
        name: "Telefon",
        icon: "📞",
        content: "<h2>Telefon</h2><p>Zde by byl telefonní aplikace.</p>"
    },
    messages: {
        name: "Zprávy",
        icon: "💬",
        content: "<h2>Zprávy</h2><p>Seznam zpráv by byl zde.</p>"
    },
    browser: {
        name: "Prohlížeč",
        icon: "🌐",
        content: "<h2>Prohlížeč</h2><div><input type='text' placeholder='Zadejte URL'><button>Přejít</button></div>"
    },
    settings: {
        name: "Nastavení",
        icon: "⚙️",
        content: "<h2>Nastavení</h2><ul><li>Wi-Fi</li><li>Zvuk</li><li>Obrazovka</li></ul>"
    }
};

// Vytvoření ikon aplikací
const appGrid = document.querySelector('.app-grid');
Object.keys(apps).forEach(appId => {
    const app = apps[appId];
    const appIcon = document.createElement('div');
    appIcon.className = 'app-icon';
    appIcon.dataset.app = appId;
    appIcon.textContent = app.icon;
    appGrid.appendChild(appIcon);
});

// Otevření aplikace
document.querySelectorAll('.app-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const appId = this.dataset.app;
        const app = apps[appId];
        
        document.getElementById('app-window').classList.remove('hidden');
        document.querySelector('.app-title').textContent = app.name;
        document.querySelector('.app-content').innerHTML = app.content;
    });
});

// Zavření aplikace
document.querySelector('.close-app').addEventListener('click', function() {
    document.getElementById('app-window').classList.add('hidden');
});

// Aktualizace času
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.querySelector('.time').textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();

// PWA - Service Worker registrace
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(registration => {
            console.log('ServiceWorker registrován');
        }).catch(err => {
            console.log('ServiceWorker registrace selhala: ', err);
        });
    });
}