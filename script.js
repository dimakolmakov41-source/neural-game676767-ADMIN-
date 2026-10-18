// ===== ВЕРСИЯ =====
const GAME_VERSION = "1.0";
let ysdk = null;

// ===== ЯЗЫК =====
const TRANSLATIONS = {
    ru: {
        loading: "ЗАГРУЗКА...",
        title: "🧠 КЛИКЕР: ЭВОЛЮЦИЯ НЕЙРОСЕТЕЙ",
        play: "🎮 ИГРАТЬ",
        settings: "⚙️ НАСТРОЙКИ",
        news: "📢 НОВОСТИ",
        share: "📤 ПОДЕЛИТЬСЯ",
        min: "мин",
        stat_total_clicks: "Всего кликов",
        stat_neurons: "Нейросетей",
        stat_session: "За сессию",
        reload: "🔄 ПЕРЕЗАГРУЗКА:",
        sleep: "😴 Спишь?",
        combo: "🔥 x2 КОМБО!",
        boost: "⚡ БУСТ X5 — 20⭐",
        boost_active: "⚡ X5 АКТИВЕН —",
        open_tasks: "📋 ОТКРЫТЬ ЗАДАНИЯ",
        shop_neurons: "🧠 НЕЙРОСЕТИ",
        shop_stars: "⭐ ЗВЁЗДЫ",
        shop_skins: "💎 СКИНЫ",
        buy_all: "💰 КУПИТЬ ВСЁ ДОСТУПНОЕ",
        close: "ЗАКРЫТЬ",
        back_menu: "◀ МЕНЮ",
        shop: "🛒 МАГАЗИН",
        autosave: "💾 автосохранение",
        yes: "Да", no: "Нет", ok: "ПОНЯЛ",
        robot1: ": Привет я робот !<br>Я вижу ты тут впервые ?",
        robot2: ": Нажми на мозг !",
        tutorial_text: "Потом пролистай вниз и нажми<br>магазин , потом купи любую<br>нейросеть (нажми на неё)",
        conv1: "Ваши алмазы конвертированы в звёзды",
        conv2: "Алмазы полностью удалены",
        settings_title: "⚙️ НАСТРОЙКИ",
        bg_choose: "🌄 Выбор фона",
        bg_early: "Ранняя осень", bg_golden: "Золотая", bg_rainy: "Дождливая", bg_late: "Поздняя",
        bg_forest: "Лес", bg_park: "Парк", bg_mountains: "Горы", bg_village: "Деревня",
        btn_color: "🎨 Цвет кнопок",
        save_progress: "💾 Сохранить прогресс",
        download_json: "Скачать JSON",
        load_progress: "📂 Загрузить прогресс",
        choose_file: "Выбрать файл",
        promo: "🎫 Промокоды", open: "Открыть",
        sound: "🔊 Звук клика", sound_toggle: "Сменить",
        fullscreen: "⛶ Полный экран", on: "Включить", off: "Выключить",
        language: "🌐 Язык / Language",
        reset_all: "⚠️ СБРОСИТЬ ВСЁ",
        promo_title: "🎫 ПРОМОКОД", activate: "АКТИВИРОВАТЬ",
        news_title: "📢 НОВОСТИ",
        news_text: "v1.0: Читерская версия с 3 админками!",
        pass_no_active: "✨ НЕТ АКТИВНОГО ПАССА ✨",
        pass_tasks_title: "ЗАДАНИЯ",
        level: "Уровень", clicks_done: "кликов",
        done: "✅ ВЫПОЛНЕНО", claim: "ЗАБРАТЬ",
        lock_first: "🔒 Сначала пройди уровень",
        until_end: "До конца AI Pass",
        days: "дн.", hours: "ч.", minutes: "мин.",
        pass_finished: "ЗАВЕРШЁН!",
        soon: "скоро",
        need_stars: "Нужно", need_points: "Нужно",
        bought: "куплена!", not_enough: "❌ Не хватает очков",
        boost_already: "⚡ Буст уже активен",
        boost_activated: "⚡ БУСТ X5 АКТИВЕН (5 минут)!",
        boost_ended: "⏳ Буст закончился",
        promo_ok: "✅ Промокод активирован!", promo_bad: "❌ Неверный код",
        star_got: "⭐ ЗВЁЗДЫ! +3", candy_got: "🍬 КОНФЕТЫ! +3", snowflake_got: "❄️ СНЕЖИНКИ! +3",
        triple_click: "⚡ ТРОЙНОЙ КЛИК! x3!",
        banned: "🌚 Ты забанен на", banned_min: "минут",
        ban_lifted: "✅ Бан снят. Не повторяй.",
        copied: "✅ Прогресс скопирован!",
        saved: "💾 Прогресс сохранён!",
        loaded: "📂 Загружено! Перезагружаю...",
        load_error: "❌ Ошибка загрузки",
        reload_toast: "Перезагрузка...",
        bought_count: "Куплено сетей",
        all_neurons: "Все нейросети куплены!",
        all_passes: "Все AI Pass открыты!",
        god_on: "БОГ ВКЛ", god_off: "БОГ ВЫКЛ",
        points_given: "+1000 очков", stars_given: "+100 звёзд",
        soon_feature: "⏳ Скоро появится!",
        task_claimed: "Уровень", task_received: "получен!",
        pass_reward: "Награда AI Pass",
        fact_title: "ФАКТ ДНЯ",
        roulette_no_stars: "❌ Нужно 50⭐",
        roulette_win: "🎉 ВЫИГРЫШ",
        roulette_spinning: "🎲 КРУТИТСЯ...",
        roulette_spin: "🎲 КРУТИТЬ",
        first_page: "⏮ НАЧАЛО", last_page: "КОНЕЦ ⏭",
        prev_page: "⬅️ НАЗАД", next_page: "ВПЕРЁД ➡️",
        test_ok: "✅ ТЕСТ OK!",
        prestige: "🌟 ПРЕСТИЖ",
        prestige_level: "Уровень:",
        prestige_bonus: "Бонус:",
        prestige_need: "Нужно:",
        prestige_warning: "⚠️ Прогресс сбросится: очки и сети. Звёзды останутся.",
        prestige_yes: "ДА, ПРЕСТИЖ!",
        prestige_done: "🌟 ПРЕСТИЖ! Уровень",
        prestige_not_enough: "❌ Нужно 100 000 000 🧠",
        prestige_confirm: "Точно престиж? Очки и сети сбросятся!",
        offline_title: "С ВОЗВРАЩЕНИЕМ!",
        offline_text: "Пока тебя не было, накапало:",
        offline_capped: "(максимум 8 часов)",
        meteor_win: "📢 МЕТЕОРИТ! +",
        birthday_boost: "🎂 БУСТ X10! (день рождения)",
        march8_boost: "🌷 БУСТ X15! (8 марта)",
        event_boost_start: "🎉 Ивентовый буст активирован!",
        ghost_win: "👻 ПРИЗРАК! +",
        spider_win: "🕷️ ПАУК! +3⭐",
        witch_win: "🧙 ВЕДЬМА! +",
        web_destroyed: "🕸️ ПАУТИНА РАЗБИТА! +",
        web_progress: "🕸️ Паутина:",
        web_hint: "Кликни 20 раз чтобы разбить",
        autoclicker: "🤖 АВТОКЛИКЕР — 500⭐",
        autoclicker_active: "🤖 АВТОКЛИКЕР АКТИВЕН",
        autoclicker_bought: "✅ Автокликер куплен!",
        autoclicker_no_stars: "❌ Нужно 500⭐",
        daily_gift: "🎁 ПОДАРОК",
        daily_gift_got: "🎁 Подарок получен!",
        daily_gift_already: "⏰ Уже получен сегодня",
        pumpkin_click: "🎃 ТЫКВА! +5⭐",
        x10_boost: "🧠 БУСТ X10! 5 часов!",
        achievements: "🏆 ДОСТИЖЕНИЯ",
        ach_unlocked: "🏆 Достижение:",
        bat_win: "🦇 ЛЕТУЧАЯ МЫШЬ! +500🧠",
        
        // --- СКИНЫ ---
        skin_normal: "Обычный",
        skin_halloween: "Тыква",
        skin_amethyst: "Аметист",
        skin_mult: "Множитель: ×",
        skin_free: "Бесплатно",
        skin_event_free: "Бесплатно (Ивент)",
        skin_equipped: "✅ Надет",
        skin_equip: "Одеть",
        skin_buy: "Купить за ",
        skin_equipped_toast: "Скин надет!",
        skin_bought: "куплен и надет!",

        // --- АДМИНКА ---
        admin_panel: "АДМИН ПАНЕЛЬ",
        tab_game: "Игра",
        tab_events: "Ивенты",
        tab_system: "Система",
        give_points: "Дать очков:",
        give_points_btn: "Дать очки",
        give_stars: "Дать звёзд:",
        give_stars_btn: "Дать звёзды",
        buy_all_btn: "Купить",
        open_pass: "Открыть все AI Pass",
        give_btn: "Дать",
        god_mode: "Режим Бога (x10)",
        toggle: "Вкл/Выкл",
        plus_prestige: "+1 Престиж",
        birthday_boost_btn: "🎂 Birthday boost",
        march8_boost_btn: "🌷 March 8 boost",
        x10_boost_btn: "🧠 X10 Boost (5ч)",
        autoclicker_btn: "🤖 Автокликер",
        reset_gift: "🎁 Сброс подарка",
        reset_gift_btn: "Сброс",
        unlock_ach: "🏆 Открыть все ачивки",
        unlock_btn: "Открыть",
        spawn_ghost: "👻 Призрак",
        spawn_bat: "🦇 Мышь",
        spawn_spider: "🕷️ Паук",
        spawn_witch: "🧙 Ведьма",
        spawn_web: "🕸️ Паутина",
        spawn_meteor: "📢 Метеорит",
        spawn_btn: "Спавн",
        unlock_skins: "💎 Открыть все скины",
        reset_tutorial: "Сбросить обучение",
        reset_x10: "Сбросить X10 буст",
        reset_ach: "Сбросить ачивки",
        reset_progress: "Сбросить прогресс",
        reset_btn: "Сбросить",
        on_btn: "Вкл"
    },
    en: {
        loading: "LOADING...",
        title: "🧠 CLICKER: NEURAL EVOLUTION",
        play: "🎮 PLAY", settings: "⚙️ SETTINGS", news: "📢 NEWS", share: "📤 SHARE",
        min: "min",
        stat_total_clicks: "Total clicks", stat_neurons: "Neurons", stat_session: "Session",
        reload: "🔄 RELOAD:",
        sleep: "😴 Sleeping?",
        combo: "🔥 x2 COMBO!", boost: "⚡ BOOST X5 — 20⭐", boost_active: "⚡ X5 ACTIVE —",
        open_tasks: "📋 OPEN TASKS",
        shop_neurons: "🧠 NEURONS", shop_stars: "⭐ STARS", shop_skins: "💎 SKINS",
        buy_all: "💰 BUY ALL AVAILABLE", close: "CLOSE",
        back_menu: "◀ MENU", shop: "🛒 SHOP", autosave: "💾 autosave",
        yes: "Yes", no: "No", ok: "GOT IT",
        robot1: ": Hi I'm a robot !<br>I see you're new here?",
        robot2: ": Tap the brain!",
        tutorial_text: "Then scroll down and tap<br>shop, then buy any<br>neuron (tap it)",
        conv1: "Your diamonds converted to stars", conv2: "Diamonds fully removed",
        settings_title: "⚙️ SETTINGS",
        bg_choose: "🌄 Background",
        bg_early: "Early autumn", bg_golden: "Golden", bg_rainy: "Rainy", bg_late: "Late autumn",
        bg_forest: "Forest", bg_park: "Park", bg_mountains: "Mountains", bg_village: "Village",
        btn_color: "🎨 Button color",
        save_progress: "💾 Save progress", download_json: "Download JSON",
        load_progress: "📂 Load progress", choose_file: "Choose file",
        promo: "🎫 Promo codes", open: "Open",
        sound: "🔊 Click sound", sound_toggle: "Change",
        fullscreen: "⛶ Fullscreen", on: "Enable", off: "Disable",
        language: "🌐 Language / Язык", reset_all: "⚠️ RESET ALL",
        promo_title: "🎫 PROMO CODE", activate: "ACTIVATE",
        news_title: "📢 NEWS",
        news_text: "v1.0: Cheat version with 3 admin panels!",
        pass_no_active: "✨ NO ACTIVE PASS ✨",
        pass_tasks_title: "TASKS",
        level: "Level", clicks_done: "clicks",
        done: "✅ DONE", claim: "CLAIM",
        lock_first: "🔒 Complete level first",
        until_end: "Until AI Pass",
        days: "d", hours: "h", minutes: "m",
        pass_finished: "FINISHED!", soon: "soon",
        need_stars: "Need", need_points: "Need",
        bought: "bought!", not_enough: "❌ Not enough points",
        boost_already: "⚡ Boost already active",
        boost_activated: "⚡ BOOST X5 ACTIVE (5 min)!",
        boost_ended: "⏳ Boost ended",
        promo_ok: "✅ Promo activated!", promo_bad: "❌ Invalid code",
        star_got: "⭐ STARS! +3", candy_got: "🍬 CANDY! +3", snowflake_got: "❄️ SNOWFLAKES! +3",
        triple_click: "⚡ TRIPLE CLICK! x3!",
        banned: "🌚 You are banned for", banned_min: "min",
        ban_lifted: "✅ Ban lifted. Don't repeat.",
        copied: "✅ Progress copied!", saved: "💾 Progress saved!",
        loaded: "📂 Loaded! Reloading...", load_error: "❌ Load error",
        reload_toast: "Reloading...",
        bought_count: "Bought neurons",
        all_neurons: "All neurons bought!", all_passes: "All AI Passes opened!",
        god_on: "GOD ON", god_off: "GOD OFF",
        points_given: "+1000 points", stars_given: "+100 stars",
        soon_feature: "⏳ Coming soon!",
        task_claimed: "Level", task_received: "received!",
        pass_reward: "AI Pass reward", fact_title: "FACT OF THE DAY",
        roulette_no_stars: "❌ Need 50⭐", roulette_win: "🎉 YOU WON",
        roulette_spinning: "🎲 SPINNING...", roulette_spin: "🎲 SPIN",
        first_page: "⏮ FIRST", last_page: "LAST ⏭",
        prev_page: "⬅️ BACK", next_page: "NEXT ➡️",
        test_ok: "✅ TEST OK!",
        prestige: "🌟 PRESTIGE",
        prestige_level: "Level:",
        prestige_bonus: "Bonus:",
        prestige_need: "Need:",
        prestige_warning: "⚠️ Progress will reset: points and neurons. Stars stay.",
        prestige_yes: "YES, PRESTIGE!",
        prestige_done: "🌟 PRESTIGE! Level",
        prestige_not_enough: "❌ Need 100 000 000 🧠",
        prestige_confirm: "Confirm prestige? Points and neurons reset!",
        offline_title: "WELCOME BACK!",
        offline_text: "While you were away, you earned:",
        offline_capped: "(max 8 hours)",
        meteor_win: "📢 METEOR! +",
        birthday_boost: "🎂 BOOST X10! (birthday)",
        march8_boost: "🌷 BOOST X15! (March 8)",
        event_boost_start: "🎉 Event boost activated!",
        ghost_win: "👻 GHOST! +",
        spider_win: "🕷️ SPIDER! +3⭐",
        witch_win: "🧙 WITCH! +",
        web_destroyed: "🕸️ WEB DESTROYED! +",
        web_progress: "🕸️ Web:",
        web_hint: "Click 20 times to destroy",
        autoclicker: "🤖 AUTOCLICKER — 500⭐",
        autoclicker_active: "🤖 AUTOCLICKER ACTIVE",
        autoclicker_bought: "✅ Autoclicker bought!",
        autoclicker_no_stars: "❌ Need 500⭐",
        daily_gift: "🎁 GIFT",
        daily_gift_got: "🎁 Gift received!",
        daily_gift_already: "⏰ Already got today",
        pumpkin_click: "🎃 PUMPKIN! +5⭐",
        x10_boost: "🧠 BOOST X10! 5 hours!",
        achievements: "🏆 ACHIEVEMENTS",
        ach_unlocked: "🏆 Achievement:",
        bat_win: "🦇 BAT! +500🧠",

        // --- SKINS ---
        skin_normal: "Normal",
        skin_halloween: "Pumpkin",
        skin_amethyst: "Amethyst",
        skin_mult: "Multiplier: ×",
        skin_free: "Free",
        skin_event_free: "Free (Event)",
        skin_equipped: "✅ Equipped",
        skin_equip: "Equip",
        skin_buy: "Buy for ",
        skin_equipped_toast: "Skin equipped!",
        skin_bought: "bought and equipped!",

        // --- ADMIN ---
        admin_panel: "ADMIN PANEL",
        tab_game: "Game",
        tab_events: "Events",
        tab_system: "System",
        give_points: "Give points:",
        give_points_btn: "Give points",
        give_stars: "Give stars:",
        give_stars_btn: "Give stars",
        buy_all_btn: "Buy",
        open_pass: "Open all AI Pass",
        give_btn: "Give",
        god_mode: "God Mode (x10)",
        toggle: "On/Off",
        plus_prestige: "+1 Prestige",
        birthday_boost_btn: "🎂 Birthday boost",
        march8_boost_btn: "🌷 March 8 boost",
        x10_boost_btn: "🧠 X10 Boost (5h)",
        autoclicker_btn: "🤖 Autoclicker",
        reset_gift: "🎁 Reset gift",
        reset_gift_btn: "Reset",
        unlock_ach: "🏆 Unlock all achievements",
        unlock_btn: "Unlock",
        spawn_ghost: "👻 Ghost",
        spawn_bat: "🦇 Bat",
        spawn_spider: "🕷️ Spider",
        spawn_witch: "🧙 Witch",
        spawn_web: "🕸️ Web",
        spawn_meteor: "📢 Meteor",
        spawn_btn: "Spawn",
        unlock_skins: "💎 Unlock all skins",
        reset_tutorial: "Reset tutorial",
        reset_x10: "Reset X10 boost",
        reset_ach: "Reset achievements",
        reset_progress: "Reset progress",
        reset_btn: "Reset",
        on_btn: "On"
    }
};

let currentLang = localStorage.getItem('gameLang') || 'ru';
function t(key) {
    return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.ru[key] || key;
}

// ===== ФОРМАТ ЧИСЕЛ =====
function formatNumber(num) {
    if (num >= 1e21) return (num / 1e21).toFixed(2) + 'Sx';
    if (num >= 1e18) return (num / 1e18).toFixed(2) + 'Qi';
    if (num >= 1e15) return (num / 1e15).toFixed(2) + 'Qa';
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9)  return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6)  return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3)  return (num / 1e3).toFixed(2) + 'K';
    return Math.floor(num).toString();
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.innerText = t(key);
    });
    const r1 = document.getElementById('robotText1');
    if (r1) r1.innerHTML = t('robot1');
    const r2 = document.getElementById('robotText2');
    if (r2) r2.innerHTML = t('robot2');
    const tt = document.getElementById('tutorialText');
    if (tt) tt.innerHTML = t('tutorial_text');
    
    if (typeof updateBoostUI === 'function') updateBoostUI();
    if (typeof applyPassStyle === 'function') applyPassStyle();
    if (typeof applyTheme === 'function') applyTheme();
    if (typeof updatePassEndTimer === 'function') updatePassEndTimer();
    if (typeof updateAutoClickerUI === 'function') updateAutoClickerUI();
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    document.querySelectorAll('#setLangRu, #setLangEn').forEach(btn => {
        const isRu = btn.id === 'setLangRu';
        const isActive = (isRu && currentLang === 'ru') || (!isRu && currentLang === 'en');
        btn.classList.toggle('active', isActive);
    });
    
    if (document.getElementById('adminOverlay')?.classList.contains('show')) {
        renderAdminBody(adminCurrentTab);
    }
}

function setLanguage(lang) {
    if (lang !== 'ru' && lang !== 'en') return;
    currentLang = lang;
    localStorage.setItem('gameLang', lang);
    applyTranslations();
    if (typeof showToast === 'function') {
        showToast(lang === 'ru' ? "✅ Язык: Русский" : "✅ Language: English");
    }
}

// ===== ФАКТЫ =====
const FACTS = {
    ru: ["Первый перцептрон создан в 1958 году Фрэнком Розенблаттом.","Название «нейросеть» появилось в 1940-х годах.","ChatGPT обучался на 570 ГБ текста.","Человеческий мозг содержит около 86 миллиардов нейронов.","GPT расшифровывается как Generative Pre-trained Transformer.","Нейросети умеют распознавать лица лучше людей.","AlphaGo победила чемпиона мира по го в 2016 году.","Термин «искусственный интеллект» придуман в 1956 году.","DALL-E создаёт картинки по текстовому описанию.","Нейросети используются в медицине для диагностики рака."],
    en: ["The first perceptron was created in 1958 by Frank Rosenblatt.","The term 'neural network' appeared in the 1940s.","ChatGPT was trained on 570 GB of text.","The human brain contains about 86 billion neurons.","GPT stands for Generative Pre-trained Transformer.","Neural networks can recognize faces better than humans.","AlphaGo beat the world Go champion in 2016.","The term 'artificial intelligence' was coined in 1956.","DALL-E creates images from text descriptions.","Neural networks are used in medicine for cancer diagnosis."]
};

function getFactOfDay() {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    const facts = FACTS[currentLang];
    return facts[dayOfYear % facts.length];
}

function checkDailyFact() {
    const today = new Date().toISOString().slice(0, 10);
    const lastShown = localStorage.getItem('factShownDate');
    if (lastShown !== today) {
        localStorage.setItem('factShownDate', today);
        const factText = document.getElementById('factText');
        if (factText) factText.innerText = getFactOfDay();
        const factOverlay = document.getElementById('factOverlay');
        if (factOverlay) setTimeout(() => factOverlay.classList.add('show'), 2500);
    }
}

let _pendingDiamondConversion = 0;
(function captureOldDiamonds() {
    const s = localStorage.getItem('neuralEvoSave');
    if (s) {
        try {
            const d = JSON.parse(s);
            if (d.stars !== undefined) return;
            if (d.diamonds && d.diamonds > 0) _pendingDiamondConversion = d.diamonds;
        } catch(e) {}
    }
})();

if (localStorage.getItem('gameVersion') !== GAME_VERSION) {
    localStorage.removeItem('neuralEvoSave');
    localStorage.removeItem('aiPassSeason');
    localStorage.removeItem('banEnd');
    localStorage.setItem('gameVersion', GAME_VERSION);
}

// Ивенты
function isHalloween() {
    const now = new Date(); const m = now.getMonth(); const d = now.getDate();
    return m === 9 && d >= 5 && d <= 31;
}
function isNewYear() {
    const now = new Date(); const m = now.getMonth(); const d = now.getDate();
    return (m === 11 && d === 31) || (m === 0 && d === 1);
}
function isHackerMode() {
    const now = Date.now();
    return now >= new Date(2026, 8, 29).getTime() && now <= new Date(2026, 9, 5).getTime();
}
function isBirthday() {
    const now = new Date(); return now.getMonth() === 2 && now.getDate() === 17;
}
function isMarch8() {
    const now = new Date(); return now.getMonth() === 2 && now.getDate() === 8;
}

function applyTheme() {
    const body = document.body;
    const brain = document.getElementById('clickableObject');
    const brainEmoji = document.getElementById('brainEmoji');
    const starLabel = document.getElementById('starLabel');
    const sleepMsg = document.getElementById('sleepMsg');
    const reloadTimer = document.getElementById('reloadTimer');
    const title = document.getElementById('gameTitle');
    const partyHat = document.getElementById('partyHat');
    const flowerDecor = document.getElementById('flowerDecor');
    const brainSpeech = document.getElementById('brainSpeech');

    body.classList.remove('bg-halloween', 'bg-newyear', 'bg-hacker', 'bg-birthday', 'bg-march8');
    body.classList.remove('bg-early-autumn', 'bg-golden', 'bg-rainy', 'bg-late', 'bg-forest', 'bg-park', 'bg-mountains', 'bg-village');
    if (brain) brain.classList.remove('halloween-brain', 'newyear-brain', 'birthday-brain', 'march8-brain');
    
    const oldHat = brain ? brain.querySelector('.santa-hat') : null;
    if (oldHat) oldHat.remove();
    if (partyHat) partyHat.style.display = 'none';
    if (flowerDecor) flowerDecor.style.display = 'none';
    if (brainSpeech) brainSpeech.style.display = 'none';

    if (isBirthday()) {
        body.classList.add('bg-birthday'); if (brain) brain.classList.add('birthday-brain');
        if (partyHat) partyHat.style.display = 'block';
        if (starLabel) starLabel.innerHTML = '⭐ <span id="stars">' + (window.__stars || 0) + '</span>';
    } else if (isMarch8()) {
        body.classList.add('bg-march8'); if (brain) brain.classList.add('march8-brain');
        if (flowerDecor) flowerDecor.style.display = 'block'; if (brainSpeech) brainSpeech.style.display = 'block';
        if (starLabel) starLabel.innerHTML = '⭐ <span id="stars">' + (window.__stars || 0) + '</span>';
    } else if (isHalloween()) {
        body.classList.add('bg-halloween'); if (brain) brain.classList.add('halloween-brain');
        if (starLabel) starLabel.innerHTML = '🍬 <span id="stars">' + (window.__stars || 0) + '</span>';
    } else if (isNewYear()) {
        body.classList.add('bg-newyear');
        if (brain) {
            brain.classList.add('newyear-brain');
            const hat = document.createElement('span'); hat.className = 'santa-hat'; hat.innerText = '🎅'; brain.appendChild(hat);
        }
        if (starLabel) starLabel.innerHTML = '❄️ <span id="stars">' + (window.__stars || 0) + '</span>';
    } else if (isHackerMode()) {
        body.classList.add('bg-hacker');
        if (starLabel) starLabel.innerHTML = '⭐ <span id="stars">' + (window.__stars || 0) + '</span>';
    } else {
        const savedBg = localStorage.getItem('selectedBg') || 'early_autumn';
        const bgThemes = { early_autumn: "bg-early-autumn", golden: "bg-golden", rainy: "bg-rainy", late: "bg-late", forest: "bg-forest", park: "bg-park", mountains: "bg-mountains", village: "bg-village" };
        body.classList.add(bgThemes[savedBg] || 'bg-early-autumn');
        if (starLabel) starLabel.innerHTML = '⭐ <span id="stars">' + (window.__stars || 0) + '</span>';
    }
    if (sleepMsg) sleepMsg.innerText = t('sleep');
    if (reloadTimer) reloadTimer.innerHTML = t('reload') + ' <span id="reloadCountdown">5:00</span>';
    if (title) title.innerText = t('title');
    if (typeof applySkin === 'function') applySkin();
}

function applyButtonColor(color) {
    document.body.classList.remove('btn-blue', 'btn-green', 'btn-red', 'btn-purple', 'btn-gold');
    if (color && color !== 'blue') document.body.classList.add('btn-' + color);
    localStorage.setItem('btnColor', color || 'blue');
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.color === (color || 'blue'));
    });
}

window.addEventListener('load', () => {
    // Yandex SDK
    if (typeof YaGames !== 'undefined') {
        YaGames.init().then(_ysdk => {
            ysdk = _ysdk;
            const sdkLang = ysdk.environment.i18n.lang;
            if (sdkLang === 'ru' || sdkLang === 'en') {
                currentLang = sdkLang;
                localStorage.setItem('gameLang', currentLang);
                applyTranslations();
            }
            if (ysdk.features && ysdk.features.LoadingAPI) {
                ysdk.features.LoadingAPI.ready();
            }
        }).catch(e => console.error("Yandex SDK init error:", e));
    }

    setTimeout(() => {
        const ls = document.getElementById('loadingScreen');
        if (ls) ls.classList.add('hidden');
    }, 1500);

    document.getElementById('menuVersion').innerText = `v${GAME_VERSION} (читерская версия)`;

    const badWords = ["дима лох","дима тупой","разработчик лох"]; // Сокращено для теста
    let isBanned = false;
    let banTimer = null;
    const BAN_DURATION = 20 * 60 * 1000;

    function checkBan(code) {
        const lower = code.toLowerCase().trim();
        for (let word of badWords) if (lower.includes(word)) return true;
        return false;
    }
    function activateBan() {
        if (isBanned) return;
        localStorage.setItem('banEnd', Date.now() + BAN_DURATION);
        applyBanState();
    }
    function applyBanState() {
        const banEnd = parseInt(localStorage.getItem('banEnd'));
        if (banEnd && Date.now() < banEnd) {
            isBanned = true;
            document.body.style.filter = "grayscale(1) brightness(0.5)";
            document.body.style.pointerEvents = "none";
            const remaining = Math.ceil((banEnd - Date.now()) / 1000);
            showToast(`${t('banned')} ${Math.ceil(remaining / 60)} ${t('banned_min')}`);
            if (banTimer) clearTimeout(banTimer);
            banTimer = setTimeout(() => {
                localStorage.removeItem('banEnd'); isBanned = false;
                document.body.style.filter = ""; document.body.style.pointerEvents = "";
                showToast(t('ban_lifted'));
            }, banEnd - Date.now());
        } else {
            localStorage.removeItem('banEnd'); isBanned = false;
            document.body.style.filter = ""; document.body.style.pointerEvents = "";
        }
    }

    // СТАРТОВЫЕ ОЧКИ - 100 000
    let points = 100000, stars = 0, totalClicks = 0, purchasedCount = 1;
    let totalStarsEarned = 0, sessionClicks = 0;
    let godMode = false, comboCounter = 0;
    let gameStartTime = Date.now();
    let playtimeInterval = null, sleepMsgTimer = null, sleepMsgShowing = false;
    let prestigeLevel = 0, lastSaveTime = Date.now();

    const PRESTIGE_REQUIREMENT = 100000000;
    const PRESTIGE_BONUS_PER_LEVEL = 0.1;
    const OFFLINE_MAX_HOURS = 8;
    const OFFLINE_RATE = 0.3;

    const BOOST_MULTIPLIER = 5, BOOST_PRICE = 20, BOOST_DURATION = 5 * 60 * 1000;
    let boostEndTime = 0, boostInterval = null;

    const BIRTHDAY_BOOST_MULT = 10;
    const BIRTHDAY_BOOST_DURATION = (60 * 3600 + 10 * 60 + 10) * 1000;
    let birthdayBoostEndTime = 0;

    const MARCH8_BOOST_MULT = 15;
    const MARCH8_BOOST_DURATION = 70 * 3600 * 1000;
    let march8BoostEndTime = 0;

    const X10_BOOST_MULT = 10;
    const X10_BOOST_DURATION = 5 * 3600 * 1000;
    let x10BoostEndTime = 0;

    const AUTOCLICKER_PRICE = 500;
    const AUTOCLICKER_RATE = 10;
    let autoclickerBought = false;
    let autoclickerInterval = null;

    const ROULETTE_PRICE = 50;
    let rouletteSpinning = false;

    // ===== СКИНЫ =====
    const SKINS = [
        { id: 'normal', price: 0, mult: 1 },
        { id: 'halloween', price: 20, mult: 5 },
        { id: 'amethyst', price: 320, mult: 15 }
    ];
    let currentSkin = localStorage.getItem('currentSkin');
    if (!currentSkin) currentSkin = isHalloween() ? 'halloween' : 'normal';
    let purchasedSkins = JSON.parse(localStorage.getItem('purchasedSkins') || '["normal"]');

    let unlockedAchievements = JSON.parse(localStorage.getItem('neuralAch') || '[]');
    Object.defineProperty(window, '__stars', { get: () => stars });

    const ACHIEVEMENTS = [
        { id: 'click1', name: 'Первый клик', desc: 'Сделай 1 клик', condition: () => totalClicks >= 1, points: 100, stars: 1 },
        { id: 'click1000', name: 'Кликер-маньяк', desc: 'Сделай 1000 кликов', condition: () => totalClicks >= 1000, points: 5000, stars: 10 },
        { id: 'neuron10', name: 'Новичок', desc: 'Купи 10 сетей', condition: () => purchasedCount >= 10, points: 1000, stars: 5 },
        { id: 'neuron100', name: 'Коллекционер', desc: 'Купи 100 сетей', condition: () => purchasedCount >= 100, points: 50000, stars: 50 },
        { id: 'neuron500', name: 'Сетевой магнат', desc: 'Купи 500 сетей', condition: () => purchasedCount >= 500, points: 500000, stars: 200 },
        { id: 'prestige1', name: 'Перерождение', desc: 'Сделай первый престиж', condition: () => prestigeLevel >= 1, points: 100000, stars: 100 },
        { id: 'star100', name: 'Звездочёт', desc: 'Накопи 100 звёзд', condition: () => stars >= 100, points: 10000, stars: 0 },
        { id: 'star1000', name: 'Галактика', desc: 'Накопи 1000 звёзд', condition: () => stars >= 1000, points: 100000, stars: 0 },
        { id: 'boss', name: 'Босс', desc: 'Купи ВСЕ 2000 сетей', condition: () => purchasedCount >= 2000, points: 10000000, stars: 5000 }
    ];

    const neuralNames = [
        "Перцептрон","Нейро-искра","Сверточная","Рекуррентная","Трансформер","Квантовая","GPT-клик","Автокодировщик","DALL-E","Глубокий мозг","Gemini","Нейро-интерфейс","Claude 3","Мультивселенная","Midjourney","Легендарная","Сингулярность","Божественный ИИ","Нейро-Земля","ИИ-Солнце","Галактическая","Космическая","Сверхразум","ДНК-бота","Бесконечность",
        "Лев","Тигр","Медведь","Волк","Лиса","Орёл","Сокол","Дельфин","Кит","Акула","Пантера","Ягуар","Леопард","Гепард","Зебра","Жираф","Слон","Носорог","Бегемот","Крокодил","Питон","Анаконда","Хамелеон","Игуана","Фламинго","Пингвин","Сова","Ястреб","Скорпион","Паук",
        "Пицца","Бургер","Суши","Роллы","Рамен","Паста","Спагетти","Лазанья","Тирамису","Панна-котта","Крем-брюле","Макаронс","Эклер","Пончик","Круассан","Багет","Сыр","Ветчина","Колбаса","Бекон","Стейк","Гриль","Барбекю","Шашлык","Плов","Борщ","Оливье","Сельдь","Икра","Блины",
        "Меркурий","Венера","Земля","Марс","Юпитер","Сатурн","Уран","Нептун","Плутон","Церера","Эрида","Макемаке","Хаумеа","Седна","Орк","Иксион","Варуна","Квавар","Фобос","Деймос","Ио","Европа","Ганимед","Каллисто","Титан","Рея","Япет","Мимас","Энцелад","Тритон",
        "Mario","Link","Samus","Kirby","Fox","Pikachu","Charizard","Mewtwo","Cloud","Sephiroth","Sonic","Tails","Knuckles","Shadow","Master Chief","Cortana","Doom","Ryu","Ken","Chun-Li","Kratos","Atreus","Lara","Nathan","Ezio","Altair","Gordon","Freeman","Chell","Wheatley"
    ];

    let upgrades = [];
    for (let i = 0; i < 2000; i++) {
        const power = i === 0 ? 1 : 1 + Math.floor(i / 10);
        const price = i === 0 ? 20 : Math.floor(20 * Math.pow(1.17, i));
        const name = i < neuralNames.length ? neuralNames[i] : `Нейросеть #${i + 1}`;
        upgrades.push({ id: i, name: name, power: power, price: price, purchased: i === 0 });
    }

    let currentPage = 0, ITEMS_PER_PAGE = 20, totalPages = Math.ceil(upgrades.length / ITEMS_PER_PAGE);

    function renderShopNeurons() {
        const start = currentPage * ITEMS_PER_PAGE, end = Math.min(start + ITEMS_PER_PAGE, upgrades.length);
        let html = '';
        if (totalPages > 1) {
            html += `<div class="pagination"><button class="page-btn" id="firstPageBtn">${t('first_page')}</button><button class="page-btn" id="prevPageBtn">${t('prev_page')}</button><span>${currentPage+1}/${totalPages}</span><button class="page-btn" id="nextPageBtn">${t('next_page')}</button><button class="page-btn" id="lastPageBtn">${t('last_page')}</button></div>`;
        }
        for (let i = start; i < end; i++) {
            const u = upgrades[i];
            html += `<div class="shop-item" data-id="${u.id}"><span>${u.name} +${u.power}</span><span>${u.purchased ? '✅' : `💰 ${formatNumber(u.price)}`}</span></div>`;
        }
        if (totalPages > 1) {
            html += `<div class="pagination"><button class="page-btn" id="firstPageBtn2">${t('first_page')}</button><button class="page-btn" id="prevPageBtn2">${t('prev_page')}</button><span>${currentPage+1}/${totalPages}</span><button class="page-btn" id="nextPageBtn2">${t('next_page')}</button><button class="page-btn" id="lastPageBtn2">${t('last_page')}</button></div>`;
        }
        document.getElementById('shopNeurons').innerHTML = html;
        document.querySelectorAll('#shopNeurons .shop-item').forEach(el => {
            const id = parseInt(el.dataset.id); const u = upgrades[id];
            if (!u.purchased) el.addEventListener('click', () => buyUpgrade(id));
        });
        ['firstPageBtn', 'firstPageBtn2'].forEach(id => document.getElementById(id)?.addEventListener('click', () => { currentPage = 0; renderShopNeurons(); }));
        ['lastPageBtn', 'lastPageBtn2'].forEach(id => document.getElementById(id)?.addEventListener('click', () => { currentPage = totalPages - 1; renderShopNeurons(); }));
        ['prevPageBtn', 'prevPageBtn2'].forEach(id => document.getElementById(id)?.addEventListener('click', () => { if (currentPage > 0) { currentPage--; renderShopNeurons(); } }));
        ['nextPageBtn', 'nextPageBtn2'].forEach(id => document.getElementById(id)?.addEventListener('click', () => { if (currentPage < totalPages - 1) { currentPage++; renderShopNeurons(); } }));
    }

    function renderShopSkins() {
        const container = document.getElementById('shopSkins');
        if (!container) return;
        let html = '';
        SKINS.forEach(skin => {
            const isUnlocked = purchasedSkins.includes(skin.id) || skin.id === 'normal' || (skin.id === 'halloween' && isHalloween());
            const isEquipped = currentSkin === skin.id;
            const priceText = (skin.id === 'halloween' && isHalloween()) ? t('skin_event_free') : (skin.price > 0 ? `💰 ${skin.price}⭐` : t('skin_free'));
            const nameText = t('skin_' + skin.id);
            const emoji = skin.id === 'halloween' ? '🎃' : (skin.id === 'amethyst' ? '💎' : '🧠');
            
            let btnText = isEquipped ? t('skin_equipped') : (isUnlocked ? t('skin_equip') : `${t('skin_buy')}${skin.price}⭐`);
            let btnStyle = isEquipped ? 'background:#555; color:#aaa;' : (isUnlocked ? 'background:#4caf50;' : 'background:#ffaa00;');
            
            html += `
                <div class="skin-item ${isEquipped ? 'active' : ''}" data-id="${skin.id}">
                    <div class="skin-info">
                        <div class="skin-name">${nameText} ${emoji}</div>
                        <div class="skin-mult">${t('skin_mult')}${skin.mult}</div>
                        <div class="skin-price">${priceText}</div>
                    </div>
                    <button class="skin-btn" style="${btnStyle}" data-action="${isEquipped ? 'none' : (isUnlocked ? 'equip' : 'buy')}">${btnText}</button>
                </div>
            `;
        });
        container.innerHTML = html;
        
        document.querySelectorAll('#shopSkins .skin-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = e.target.closest('.skin-item').dataset.id;
                if (btn.dataset.action === 'equip') {
                    currentSkin = id; localStorage.setItem('currentSkin', id);
                    applySkin(); saveGame(); showToast(t('skin_equipped_toast')); renderShopSkins();
                } else if (btn.dataset.action === 'buy') {
                    buySkin(id);
                }
            });
        });
    }

    function buySkin(id) {
        const skin = SKINS.find(s => s.id === id);
        if (!skin) return;
        if (stars < skin.price) { showToast(`❌ ${t('need_stars')} ${skin.price}⭐`); return; }
        stars -= skin.price;
        purchasedSkins.push(id); localStorage.setItem('purchasedSkins', JSON.stringify(purchasedSkins));
        currentSkin = id; localStorage.setItem('currentSkin', id);
        updateUI(); applySkin(); saveGame(); renderShopSkins();
        showToast(`✅ ${t('skin_' + skin.id)} ${t('skin_bought')}`); playBuySound();
    }

    function applySkin() {
        const brain = document.getElementById('clickableObject');
        if (!brain) return;
        brain.classList.remove('skin-normal', 'skin-halloween', 'skin-amethyst');
        brain.classList.add('skin-' + currentSkin);
        const emoji = document.getElementById('brainEmoji');
        if (emoji) {
            if (currentSkin === 'normal') { emoji.innerText = '🧠'; emoji.style.display = 'block'; }
            else if (currentSkin === 'halloween') { emoji.innerText = '🎃'; emoji.style.display = 'block'; }
            else if (currentSkin === 'amethyst') { emoji.style.display = 'none'; }
        }
    }

    function getSkinMultiplier() {
        const skin = SKINS.find(s => s.id === currentSkin);
        return skin ? skin.mult : 1;
    }

    function buyUpgrade(id) {
        const u = upgrades[id];
        if (!u.purchased && points >= u.price) {
            points -= u.price; u.purchased = true; purchasedCount++;
            updateUI(); renderShopNeurons(); saveGame(); showToast(`✅ ${u.name} ${t('bought')}`); playBuySound();
        } else showToast(t('not_enough'));
    }

    function buyAllAvailable() {
        const list = upgrades.map((u, i) => ({ u, i })).filter(x => !x.u.purchased).sort((a, b) => a.u.price - b.u.price);
        let bought = 0;
        for (const item of list) {
            if (points >= item.u.price) { points -= item.u.price; item.u.purchased = true; bought++; }
            else break;
        }
        if (bought > 0) {
            purchasedCount = upgrades.filter(u => u.purchased).length;
            updateUI(); renderShopNeurons(); saveGame(); showToast(`💰 ${t('bought_count')}: ${bought}!`); playBuySound();
        } else showToast(t('not_enough'));
    }

    const EXCHANGES = [
        { id: 'exNew', type: 'pointsToStars', cost: 10, reward: 1, label: '10🧠 = 1⭐' },
        { id: 'ex1', type: 'starsToPoints', cost: 100, reward: 10000000, label: '100⭐ = 10M🧠' },
        { id: 'ex2', type: 'starsToPoints', cost: 90, reward: 1000000, label: '90⭐ = 1M🧠' },
        { id: 'ex3', type: 'starsToPoints', cost: 50, reward: 100000, label: '50⭐ = 100K🧠' },
        { id: 'ex4', type: 'pointsToStars', cost: 1000000, reward: 100, label: '1M🧠 = 100⭐' },
        { id: 'soon', type: 'soon', label: 'soon', disabled: true }
    ];

    function renderShopStars() {
        const container = document.getElementById('shopStars');
        if (!container) return;
        let html = '';
        EXCHANGES.forEach(ex => {
            const cls = ex.disabled ? 'exchange-item disabled' : 'exchange-item';
            const label = ex.disabled ? t('soon') : ex.label;
            html += `<div class="${cls}" data-ex="${ex.id}">${label}</div>`;
        });
        container.innerHTML = html;
        document.querySelectorAll('#shopStars .exchange-item').forEach(el => {
            const ex = EXCHANGES.find(e => e.id === el.dataset.ex);
            if (ex && !ex.disabled) el.addEventListener('click', () => doExchange(ex));
            else if (ex && ex.disabled) el.addEventListener('click', () => showToast(t('soon_feature')));
        });
    }

    function doExchange(ex) {
        if (isBanned) return;
        if (ex.type === 'starsToPoints') {
            if (stars < ex.cost) { showToast(`❌ ${t('need_stars')} ${ex.cost}⭐`); return; }
            stars -= ex.cost; points += ex.reward;
            updateUI(); saveGame(); showToast(`✅ -${ex.cost}⭐ → +${formatNumber(ex.reward)}🧠`); playBuySound();
        } else if (ex.type === 'pointsToStars') {
            if (points < ex.cost) { showToast(`❌ ${t('need_points')} ${formatNumber(ex.cost)}🧠`); return; }
            points -= ex.cost; stars += ex.reward; totalStarsEarned += ex.reward;
            updateUI(); saveGame(); showToast(`✅ -${formatNumber(ex.cost)}🧠 → +${ex.reward}⭐`); playBuySound();
        }
    }

    function switchShopTab(tab) {
        const tabNeurons = document.querySelector('.shop-tab[data-tab="neurons"]');
        const tabStars = document.querySelector('.shop-tab[data-tab="stars"]');
        const tabSkins = document.querySelector('.shop-tab[data-tab="skins"]');
        const listNeurons = document.getElementById('shopNeurons');
        const listStars = document.getElementById('shopStars');
        const listSkins = document.getElementById('shopSkins');
        const buyAllBtn = document.getElementById('buyAllBtn');
        
        [tabNeurons, tabStars, tabSkins].forEach(t2 => t2?.classList.remove('active'));
        [listNeurons, listStars, listSkins].forEach(l => { if (l) l.style.display = 'none'; });
        if (buyAllBtn) buyAllBtn.style.display = 'none';

        if (tab === 'stars') {
            tabStars?.classList.add('active'); if (listStars) listStars.style.display = 'block'; renderShopStars();
        } else if (tab === 'skins') {
            tabSkins?.classList.add('active'); if (listSkins) listSkins.style.display = 'block'; renderShopSkins();
        } else {
            tabNeurons?.classList.add('active'); if (listNeurons) listNeurons.style.display = 'block'; if (buyAllBtn) buyAllBtn.style.display = ''; renderShopNeurons();
        }
    }

    const ROULETTE_PRIZES = [
        { emoji: '💰', type: 'points', min: 500000, max: 5000000 },
        { emoji: '⭐', type: 'stars', min: 100, max: 500 },
        { emoji: '🧠', type: 'points', min: 1000000, max: 10000000 },
        { emoji: '🌟', type: 'stars', min: 50, max: 200 },
        { emoji: '⚡', type: 'boost', duration: 30 * 60 * 1000 },
        { emoji: '🎁', type: 'points', min: 100000, max: 1000000 },
        { emoji: '💥', type: 'points', min: 5000000, max: 20000000 },
        { emoji: '👑', type: 'stars', min: 500, max: 2000 }
    ];

    function openRoulette() { if (!isBanned) document.getElementById('rouletteOverlay')?.classList.add('show'); }

    function spinRoulette() {
        if (rouletteSpinning) return;
        if (stars < ROULETTE_PRICE) { showToast(t('roulette_no_stars')); return; }
        stars -= ROULETTE_PRICE; updateUI(); saveGame();
        rouletteSpinning = true;
        const spinBtn = document.getElementById('rouletteSpinBtn');
        if (spinBtn) { spinBtn.disabled = true; spinBtn.innerText = t('roulette_spinning'); }
        const slots = document.querySelectorAll('#rouletteWheel .roulette-slot');
        slots.forEach(s => s.classList.remove('win'));
        let counter = 0; const totalSpins = 20; const finalIdx = Math.floor(Math.random() * slots.length);
        const spinInterval = setInterval(() => {
            slots.forEach(s => s.classList.remove('win'));
            slots[counter % slots.length].classList.add('win');
            counter++; playClickSound();
            if (counter >= totalSpins + finalIdx) {
                clearInterval(spinInterval); slots.forEach(s => s.classList.remove('win'));
                slots[finalIdx].classList.add('win'); giveRoulettePrize(finalIdx);
                rouletteSpinning = false;
                if (spinBtn) { spinBtn.disabled = false; spinBtn.innerText = t('roulette_spin'); }
            }
        }, 80);
    }

    function giveRoulettePrize(idx) {
        const slot = document.querySelectorAll('#rouletteWheel .roulette-slot')[idx];
        const emoji = slot ? slot.innerText : '🎁';
        let prize = ROULETTE_PRIZES.find(p => p.emoji === emoji) || ROULETTE_PRIZES[0];
        let msg = '';
        if (prize.type === 'points') {
            const amount = Math.floor(prize.min + Math.random() * (prize.max - prize.min));
            points += amount; msg = `+${formatNumber(amount)}🧠`;
        } else if (prize.type === 'stars') {
            const amount = Math.floor(prize.min + Math.random() * (prize.max - prize.min));
            stars += amount; totalStarsEarned += amount; msg = `+${formatNumber(amount)}⭐`;
        } else if (prize.type === 'boost') {
            boostEndTime = Date.now() + prize.duration; updateBoostUI(); msg = `⚡ Буст X5 на 30 минут!`;
        }
        updateUI(); saveGame(); showToast(`${t('roulette_win')}: ${emoji} ${msg}`); playBuySound();
    }

    function isBoostActive() { return Date.now() < boostEndTime; }
    function getBoostRemaining() { return Math.max(0, boostEndTime - Date.now()); }
    function isBirthdayBoostActive() { return Date.now() < birthdayBoostEndTime; }
    function getBirthdayBoostRemaining() { return Math.max(0, birthdayBoostEndTime - Date.now()); }
    function isMarch8BoostActive() { return Date.now() < march8BoostEndTime; }
    function getMarch8BoostRemaining() { return Math.max(0, march8BoostEndTime - Date.now()); }
    function isX10BoostActive() { return Date.now() < x10BoostEndTime; }
    function getX10BoostRemaining() { return Math.max(0, x10BoostEndTime - Date.now()); }

    function updateBoostUI() {
        const btn = document.getElementById('boostBtn');
        if (!btn) return;
        if (isBoostActive()) {
            const ms = getBoostRemaining(); const m = Math.floor(ms / 60000); const s = Math.floor((ms % 60000) / 1000);
            btn.innerText = `${t('boost_active')} ${m}:${s.toString().padStart(2, '0')}`; btn.classList.add('active');
        } else { btn.innerText = t('boost'); btn.classList.remove('active'); }
        updateBoostTimersPanel();
    }

    function updateBoostTimersPanel() {
        const panel = document.getElementById('boostTimerPanel');
        if (!panel) return; let html = '';
        if (isBoostActive()) { const ms = getBoostRemaining(); html += `<div class="boost-timer-item">⚡×5: ${Math.floor(ms/3600000)}:${Math.floor((ms%3600000)/60000).toString().padStart(2,'0')}:${Math.floor((ms%60000)/1000).toString().padStart(2,'0')}</div>`; }
        if (isBirthdayBoostActive()) { const ms = getBirthdayBoostRemaining(); html += `<div class="boost-timer-item">🎂×10: ${Math.floor(ms/3600000)}:${Math.floor((ms%3600000)/60000).toString().padStart(2,'0')}:${Math.floor((ms%60000)/1000).toString().padStart(2,'0')}</div>`; }
        if (isMarch8BoostActive()) { const ms = getMarch8BoostRemaining(); html += `<div class="boost-timer-item">🌷×15: ${Math.floor(ms/3600000)}:${Math.floor((ms%3600000)/60000).toString().padStart(2,'0')}:${Math.floor((ms%60000)/1000).toString().padStart(2,'0')}</div>`; }
        if (isX10BoostActive()) { const ms = getX10BoostRemaining(); html += `<div class="boost-timer-item">🧠×10: ${Math.floor(ms/3600000)}:${Math.floor((ms%3600000)/60000).toString().padStart(2,'0')}:${Math.floor((ms%60000)/1000).toString().padStart(2,'0')}</div>`; }
        panel.innerHTML = html;
    }

    function startBoostTimer() {
        if (boostInterval) clearInterval(boostInterval);
        updateBoostUI();
        boostInterval = setInterval(() => {
            if (isBoostActive() || isBirthdayBoostActive() || isMarch8BoostActive() || isX10BoostActive()) updateBoostTimersPanel();
            if (isBoostActive()) updateBoostUI();
            else if (boostEndTime > 0) { boostEndTime = 0; showToast(t('boost_ended')); updateUI(); }
        }, 1000);
    }
    function buyBoost() {
        if (isBanned) return;
        if (isBoostActive()) { showToast(t('boost_already')); return; }
        if (stars < BOOST_PRICE) { showToast(`❌ ${t('need_stars')} ${BOOST_PRICE}⭐`); return; }
        stars -= BOOST_PRICE; boostEndTime = Date.now() + BOOST_DURATION;
        updateUI(); updateBoostUI(); saveGame(); showToast(t('boost_activated')); playBuySound();
    }

    function updateAutoClickerUI() {
        const btn = document.getElementById('autoclickerBtn');
        if (!btn) return;
        if (autoclickerBought) { btn.innerText = t('autoclicker_active'); btn.classList.add('active'); btn.style.background = 'linear-gradient(145deg, #2e7d32, #1a5a20)'; btn.style.borderColor = '#66cc66'; }
        else { btn.innerText = t('autoclicker'); btn.classList.remove('active'); btn.style.background = ''; btn.style.borderColor = ''; }
    }
    function buyAutoclicker() {
        if (isBanned) return;
        if (autoclickerBought) { showToast(t('autoclicker_bought')); return; }
        if (stars < AUTOCLICKER_PRICE) { showToast(t('autoclicker_no_stars')); return; }
        stars -= AUTOCLICKER_PRICE; autoclickerBought = true; startAutoclicker(); updateAutoClickerUI(); updateUI(); saveGame(); showToast(t('autoclicker_bought')); playBuySound();
    }
    function startAutoclicker() {
        if (autoclickerInterval) clearInterval(autoclickerInterval);
        if (!autoclickerBought) return;
        autoclickerInterval = setInterval(() => { if (isBanned) return; points += getClickPower(); totalClicks++; sessionClicks++; updateUI(); }, 1000 / AUTOCLICKER_RATE);
    }

    function canGetDailyGift() {
        const today = new Date().toISOString().slice(0, 10);
        return localStorage.getItem('dailyGiftDate') !== today;
    }
    function claimDailyGift() {
        if (isBanned) return;
        if (!canGetDailyGift()) { showToast(t('daily_gift_already')); return; }
        localStorage.setItem('dailyGiftDate', new Date().toISOString().slice(0, 10));
        points += 50000; stars += 25; totalStarsEarned += 25;
        updateUI(); saveGame(); showToast(`${t('daily_gift_got')} +50K🧠 +25⭐`); playBuySound(); updateDailyGiftUI();
    }
    function updateDailyGiftUI() {
        const btn = document.getElementById('dailyGiftBtn'); if (!btn) return;
        if (canGetDailyGift()) { btn.style.opacity = '1'; btn.style.animation = 'dailyGiftPulse 1.5s ease-in-out infinite'; }
        else { btn.style.opacity = '0.5'; btn.style.animation = 'none'; }
    }

    function checkAchievements() {
        let newUnlocked = false;
        ACHIEVEMENTS.forEach(ach => {
            if (!unlockedAchievements.includes(ach.id) && ach.condition()) {
                unlockedAchievements.push(ach.id); points += ach.points; stars += ach.stars; totalStarsEarned += ach.stars; newUnlocked = true;
                showToast(`${t('ach_unlocked')} ${ach.name}`); playBuySound();
            }
        });
        if (newUnlocked) { localStorage.setItem('neuralAch', JSON.stringify(unlockedAchievements)); renderAchievements(); }
    }
    function renderAchievements() {
        const list = document.getElementById('achList'); if (!list) return; let html = '';
        ACHIEVEMENTS.forEach(ach => {
            const isUnlocked = unlockedAchievements.includes(ach.id);
            html += `<div class="${isUnlocked ? 'ach-item unlocked' : 'ach-item locked'}"><div class="ach-info"><div class="ach-name">${isUnlocked ? '🏆' : '🔒'} ${ach.name}</div><div class="ach-desc">${ach.desc}</div></div><div class="ach-reward">+${formatNumber(ach.points)}🧠 +${ach.stars}⭐</div></div>`;
        });
        list.innerHTML = html;
    }

    // Ивенты Спавн
    function spawnMeteor() {
        if (isBanned) return;
        const el = document.createElement('div'); el.className = 'meteor'; el.innerText = '📢';
        const startY = Math.random() * (window.innerHeight - 100); el.style.top = startY + 'px'; el.style.left = '-100px';
        document.body.appendChild(el);
        el.addEventListener('click', () => { points += 5000; updateUI(); saveGame(); showToast(`${t('meteor_win')}5000🧠`); playBuySound(); el.remove(); });
        let pos = -100; const int = setInterval(() => { pos += 6; el.style.left = pos + 'px'; if (pos > window.innerWidth + 50) { clearInterval(int); el.remove(); } }, 30);
    }
    function spawnGhost() {
        if (isBanned) return;
        const el = document.createElement('div'); el.className = 'ghost'; el.innerText = '👻';
        const startY = Math.random() * (window.innerHeight - 100); el.style.top = startY + 'px'; el.style.left = '-100px';
        document.body.appendChild(el);
        el.addEventListener('click', () => { points += 5000; updateUI(); saveGame(); showToast(`${t('ghost_win')}5000🧠`); playBuySound(); el.remove(); });
        let pos = -100; const int = setInterval(() => { pos += 4; el.style.left = pos + 'px'; if (pos > window.innerWidth + 50) { clearInterval(int); el.remove(); } }, 40);
    }
    function spawnBat() {
        if (isBanned) return;
        const el = document.createElement('div'); el.className = 'bat'; el.innerText = '🦇';
        const startY = Math.random() * (window.innerHeight - 100); el.style.top = startY + 'px'; el.style.left = '-100px';
        document.body.appendChild(el);
        el.addEventListener('click', () => { points += 500; updateUI(); saveGame(); showToast(t('bat_win')); playBuySound(); el.remove(); });
        let pos = -100; const int = setInterval(() => { pos += 5; el.style.left = pos + 'px'; if (pos > window.innerWidth + 50) { clearInterval(int); el.remove(); } }, 30);
    }
    let spiderOnBrain = false;
    function spawnSpider() {
        if (isBanned || spiderOnBrain) return;
        const brain = document.getElementById('clickableObject'); if (!brain) return;
        spiderOnBrain = true;
        const el = document.createElement('div'); el.className = 'spider'; el.innerText = '🕷️';
        el.addEventListener('click', (e) => { e.stopPropagation(); stars += 3; totalStarsEarned += 3; updateUI(); saveGame(); showToast(t('spider_win')); playBuySound(); el.remove(); spiderOnBrain = false; });
        brain.appendChild(el);
        setTimeout(() => { if (el.parentElement) { el.remove(); spiderOnBrain = false; } }, 30000);
    }
    function spawnWitch() {
        if (isBanned) return;
        const el = document.createElement('div'); el.className = 'witch'; el.innerText = '🧙';
        const startY = Math.random() * (window.innerHeight - 100); el.style.top = startY + 'px'; el.style.left = '-100px';
        document.body.appendChild(el);
        el.addEventListener('click', () => { points += 50000; stars += 10; totalStarsEarned += 10; updateUI(); saveGame(); showToast(`${t('witch_win')}50K🧠 +10⭐`); playBuySound(); el.remove(); });
        let pos = -100; const int = setInterval(() => { pos += 3; el.style.left = pos + 'px'; if (pos > window.innerWidth + 50) { clearInterval(int); el.remove(); } }, 50);
    }
    let webActive = false;
    function spawnWeb() {
        if (isBanned || webActive) return;
        webActive = true; let clicks = 20;
        const overlay = document.createElement('div'); overlay.className = 'web-overlay';
        overlay.innerHTML = `<div class="web-content"><div class="web-emoji">🕸️</div><div class="web-text">${t('web_progress')} <span id="webCounter">20</span></div><div class="web-hint">${t('web_hint')}</div></div>`;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', () => {
            clicks--; const c = document.getElementById('webCounter'); if (c) c.innerText = clicks; playClickSound();
            if (clicks <= 0) { overlay.remove(); webActive = false; points += 5000; updateUI(); saveGame(); showToast(`${t('web_destroyed')}5000🧠`); playBuySound(); }
        });
    }

    function getPrestigeMultiplier() { return 1 + prestigeLevel * PRESTIGE_BONUS_PER_LEVEL; }
    function updatePrestigeDisplay() {
        document.getElementById('prestigeLevelDisplay').innerText = prestigeLevel;
        document.getElementById('prestigeBonusDisplay').innerText = '+' + Math.round(prestigeLevel * PRESTIGE_BONUS_PER_LEVEL * 100) + '%';
        document.getElementById('prestigeNeedDisplay').innerText = formatNumber(PRESTIGE_REQUIREMENT) + ' 🧠';
    }
    function doPrestige() {
        if (points < PRESTIGE_REQUIREMENT) { showToast(t('prestige_not_enough')); return; }
        if (!confirm(t('prestige_confirm'))) return;
        prestigeLevel++; points = 100000; purchasedCount = 1; upgrades.forEach((u, i) => { u.purchased = (i === 0); });
        updateUI(); renderShopNeurons(); updatePrestigeDisplay(); saveGame(); showToast(`🌟 ${t('prestige_done')} ${prestigeLevel}!`); playBuySound();
        document.getElementById('prestigeModal')?.classList.remove('show');
    }

    function calculateOfflineIncome() {
        const awaySec = Math.min((Date.now() - lastSaveTime) / 1000, OFFLINE_MAX_HOURS * 3600);
        if (awaySec < 60) return 0;
        return Math.floor(getClickPower() * awaySec * OFFLINE_RATE);
    }
    function showOfflineReward(amount) {
        document.getElementById('offlineReward').innerText = '+' + formatNumber(amount) + ' 🧠';
        document.getElementById('offlineOverlay')?.classList.add('show');
    }

    // ===== AI PASS =====
    let passTasks = [], passCurrentTask = 0;
    const pass8StartDate = new Date(2026, 9, 5).getTime();
    const pass8EndDate = new Date(2026, 9, 31, 23, 59, 59).getTime();
    let passEndTimerInterval = null, passRewardSeconds = 600, passRewardInterval = null;

    function getActivePassNumber() { const now = Date.now(); return (now >= pass8StartDate && now <= pass8EndDate) ? 8 : 0; }
    function getPassEndTime(season) { return season === 8 ? pass8EndDate : 0; }
    function getPassRewardSeconds() { return getActivePassNumber() === 8 ? 1500 : 600; }
    function getPassRewardRewards() { return getActivePassNumber() === 8 ? { points: 20000, stars: 50 } : { points: 5000, stars: 50 }; }

    function applyPassStyle() {
        const container = document.getElementById('passContainer'); const title = document.getElementById('passTitle');
        if (!container || !title) return;
        const num = getActivePassNumber(); container.classList.remove('pass-v8');
        if (num === 8) { container.classList.add('pass-v8'); title.innerHTML = '🎃 AI PASS 8 🎃'; }
        else { title.innerHTML = t('pass_no_active'); }
    }

    function fillPassTasks(season) {
        passTasks = [];
        if (season === 8) for (let i = 1; i <= 40; i++) passTasks.push({ level: i, targetClicks: i * 500, rewardPoints: 20000, rewardStars: 50, completed: false, claimed: false });
    }
    function initPassSeason(skipSave) {
        const activeSeason = getActivePassNumber(); const savedSeason = parseInt(localStorage.getItem('aiPassSeason')) || 0;
        fillPassTasks(activeSeason);
        if (savedSeason !== activeSeason) { passCurrentTask = 0; passRewardSeconds = getPassRewardSeconds(); localStorage.setItem('aiPassSeason', String(activeSeason)); if (!skipSave) saveGame(); }
    }

    function renderPassBadges() {
        const container = document.getElementById('passLevels'); if (!container) return; let html = '';
        passTasks.forEach((task, idx) => {
            let cls = 'pass-badge', statusText = '';
            if (task.claimed) { cls += ' completed'; statusText = '✅'; }
            else if (idx === passCurrentTask) { cls += ' available'; statusText = '🎯'; }
            else if (idx < passCurrentTask) { cls += ' completed'; statusText = '✔'; }
            else { cls += ' locked'; statusText = '🔒'; }
            html += `<div class="${cls}">${task.level}<br>${statusText}</div>`;
        });
        container.innerHTML = html;
        const pf = document.getElementById('passProgressFill');
        if (pf) pf.style.width = (passTasks.length > 0 ? (passTasks.filter(t => t.claimed).length / passTasks.length) * 100 : 0) + '%';
    }

    function updatePassRewardTimerDisplay() {
        const el = document.getElementById('passTimer'); if (!el) return;
        el.innerHTML = `⏱️ ${Math.floor(passRewardSeconds / 60)}:${(passRewardSeconds % 60).toString().padStart(2, '0')}`;
    }
    function startPassRewardTimer() {
        if (passRewardInterval) clearInterval(passRewardInterval); updatePassRewardTimerDisplay();
        passRewardInterval = setInterval(() => {
            passRewardSeconds--;
            if (passRewardSeconds <= 0) {
                if (getActivePassNumber() > 0) { const r = getPassRewardRewards(); points += r.points; stars += r.stars; totalStarsEarned += r.stars; updateUI(); saveGame(); showToast(`🎁 ${t('pass_reward')}! +${formatNumber(r.points)}🧠 +${r.stars}⭐`); playBuySound(); }
                passRewardSeconds = getPassRewardSeconds();
            }
            updatePassRewardTimerDisplay();
        }, 1000);
    }

    function renderTasksList() {
        const container = document.getElementById('tasksList'); if (!container) return; let html = '';
        passTasks.forEach((task, idx) => {
            let cls = 'task-item', statusText = '', claimBtn = '';
            if (task.claimed) { cls += ' completed'; statusText = t('done'); }
            else if (idx === passCurrentTask) {
                cls += ' current'; const progress = Math.min(totalClicks, task.targetClicks); const percent = Math.min(100, (progress / task.targetClicks) * 100);
                statusText = `${progress} / ${task.targetClicks} ${t('clicks_done')}`;
                if (totalClicks >= task.targetClicks) claimBtn = `<button class="task-claim-btn" data-idx="${idx}">${t('claim')}</button>`;
                html += `<div class="${cls}"><div class="task-header"><span class="task-level">🎯 ${t('level')} ${task.level}</span><span class="task-reward">+${formatNumber(task.rewardPoints)}🧠 +${task.rewardStars}⭐</span></div><div class="task-desc">${task.targetClicks} ${t('clicks_done')}</div><div class="task-progress-bar"><div class="task-progress-fill" style="width:${percent}%"></div></div><div class="task-progress-text">${statusText}</div>${claimBtn}</div>`;
                return;
            } else if (idx < passCurrentTask) { cls += ' completed'; statusText = t('done'); }
            else statusText = `${t('lock_first')} ${idx}`;
            html += `<div class="${cls}"><div class="task-header"><span class="task-level">${idx === passCurrentTask ? '🎯' : '🔒'} ${t('level')} ${task.level}</span><span class="task-reward">+${formatNumber(task.rewardPoints)}🧠 +${task.rewardStars}⭐</span></div><div class="task-desc">${task.targetClicks} ${t('clicks_done')}</div><div class="task-progress-text">${statusText}</div></div>`;
        });
        container.innerHTML = html;
        document.querySelectorAll('.task-claim-btn').forEach(btn => btn.addEventListener('click', () => claimTask(parseInt(btn.dataset.idx))));
    }

    function claimTask(idx) {
        const task = passTasks[idx];
        if (!task || task.claimed || idx !== passCurrentTask || totalClicks < task.targetClicks) return;
        task.claimed = true; points += task.rewardPoints; stars += task.rewardStars; totalStarsEarned += task.rewardStars; passCurrentTask++;
        updateUI(); renderPassBadges(); renderTasksList(); saveGame(); showToast(`🎉 ${t('task_claimed')} ${task.level} ${t('task_received')}`); playBuySound();
    }

    function checkPassProgress() { const modal = document.getElementById('passTasksModal'); if (modal && modal.classList.contains('show')) renderTasksList(); }
    function updatePassEndTimer() {
        const el = document.getElementById('passEndTimer'); if (!el) return;
        const num = getActivePassNumber(); if (num === 0) { el.innerHTML = `⏳ ${t('pass_no_active')}`; return; }
        const diff = getPassEndTime(num) - Date.now();
        if (diff <= 0) { el.innerHTML = `⏳ AI PASS ${num} ${t('pass_finished')}`; return; }
        el.innerHTML = `⏳ ${t('until_end')} ${num}: ${Math.floor(diff / 86400000)} ${t('days')} ${Math.floor((diff % 86400000) / 3600000)} ${t('hours')}`;
    }
    function startPassEndTimer() { if (passEndTimerInterval) clearInterval(passEndTimerInterval); updatePassEndTimer(); passEndTimerInterval = setInterval(updatePassEndTimer, 60000); }

    const soundProfiles = [{ name: "Обычный", freq: 880, type: "sine" }, { name: "Пиксельный", freq: 1200, type: "square" }, { name: "Глубокий", freq: 440, type: "sawtooth" }];
    let currentSoundProfile = 0, audioCtx = null, musicEnabled = localStorage.getItem('musicEnabled') === 'true';

    function initMusic() { if (audioCtx) return; try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {} }
    function playClickSound() { if (!audioCtx) initMusic(); if (audioCtx) { try { const p = soundProfiles[currentSoundProfile]; const o = audioCtx.createOscillator(); const g = audioCtx.createGain(); o.type = p.type; o.frequency.value = p.freq; g.gain.value = 0.08; g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05); o.connect(g); g.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime + 0.05); } catch(e) {} } }
    function playBuySound() { if (!audioCtx) initMusic(); if (audioCtx) { try { const o = audioCtx.createOscillator(); const g = audioCtx.createGain(); o.type = "triangle"; o.frequency.value = 523.25; g.gain.value = 0.08; g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1); o.connect(g); g.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime + 0.1); } catch(e) {} } }

    const musicBtn = document.getElementById('musicToggle');
    if (musicBtn) { musicBtn.innerText = musicEnabled ? '🔊' : '🔇'; musicBtn.onclick = () => { musicEnabled = !musicEnabled; localStorage.setItem('musicEnabled', musicEnabled); musicBtn.innerText = musicEnabled ? '🔊' : '🔇'; }; }
    document.querySelectorAll('.menu-btn').forEach((btn,i)=>{ btn.style.animationDelay=`${i*0.05}s`; });

    function spawnFloatText(x, y, text) {
        const el = document.createElement('div'); el.className = 'float-text'; el.innerText = text;
        el.style.left = (x - 20) + 'px'; el.style.top = (y - 10) + 'px'; document.body.appendChild(el);
        setTimeout(() => el.remove(), 1000);
    }
    function updateStatsUI() {
        document.getElementById('statTotalClicks').innerText = formatNumber(totalClicks);
        document.getElementById('statNeuronsBought').innerText = purchasedCount;
        document.getElementById('statSessionClicks').innerText = formatNumber(sessionClicks);
    }
    function updatePlaytime() { const el = document.getElementById('playtime'); if (el) el.innerText = Math.max(0, Math.floor((Date.now() - gameStartTime) / 60000)); }
    function startSleepMsgTimer() { if (sleepMsgTimer) clearTimeout(sleepMsgTimer); sleepMsgTimer = setTimeout(() => { if (!sleepMsgShowing) { sleepMsgShowing = true; document.getElementById('sleepMsg')?.classList.add('show'); } }, 45000); }
    function hideSleepMsg() { if (sleepMsgTimer) clearTimeout(sleepMsgTimer); if (sleepMsgShowing) { sleepMsgShowing = false; document.getElementById('sleepMsg')?.classList.remove('show'); } startSleepMsgTimer(); }
    
    function shareProgress() {
        const text = `🧠 ${t('title')}:\n🧠 ${formatNumber(points)}\n⭐ ${formatNumber(stars)}\n🖱️ ${formatNumber(totalClicks)}\n🧬 ${purchasedCount}/${upgrades.length}\n🌟 Престиж: ${prestigeLevel}\n📅 ${GAME_VERSION} (CHEAT)`;
        navigator.clipboard.writeText(text); showToast(t('copied'));
    }

    function getClickPower() {
        let base = 1; upgrades.forEach(u => { if (u.purchased) base += u.power; });
        if (godMode) base *= 10;
        if (isBoostActive()) base *= BOOST_MULTIPLIER;
        if (isBirthdayBoostActive()) base *= BIRTHDAY_BOOST_MULT;
        if (isMarch8BoostActive()) base *= MARCH8_BOOST_MULT;
        if (isX10BoostActive()) base *= X10_BOOST_MULT;
        base *= getPrestigeMultiplier(); base *= getSkinMultiplier(); return Math.floor(base);
    }

    function updateUI() {
        if (isBanned) return;
        document.getElementById('points').innerText = formatNumber(points);
        document.getElementById('power').innerText = getClickPower();
        document.getElementById('clickHint').innerHTML = godMode ? `+${formatNumber(getClickPower())} (БОГ)` : `+${formatNumber(getClickPower())}`;
        document.getElementById('stars').innerText = formatNumber(stars);
        updateStatsUI(); updatePlaytime(); document.getElementById('comboText')?.classList.remove('show');
        checkPassProgress(); checkAchievements();
    }

    function showToast(msg) {
        const t2 = document.createElement('div'); t2.className = 'toast'; t2.innerText = msg;
        document.body.appendChild(t2); setTimeout(() => t2.remove(), 2500);
    }

    function saveGame() {
        lastSaveTime = Date.now();
        const save = {
            points, stars, totalClicks, purchasedCount, totalStarsEarned, godMode, comboCounter, prestigeLevel,
            birthdayBoostEndTime, march8BoostEndTime, x10BoostEndTime, autoclickerBought, unlockedAchievements,
            currentSkin, purchasedSkins, upgrades: upgrades.map(u => ({ purchased: u.purchased })),
            passTasks: passTasks.map(t => ({ claimed: t.claimed, completed: t.completed })),
            passCurrentTask, passRewardSeconds, passSeason: localStorage.getItem('aiPassSeason') || '0',
            boostEndTime, gameStartTime, currentSoundProfile, gameVersion: GAME_VERSION, lastSaveTime
        };
        localStorage.setItem('neuralEvoSave', JSON.stringify(save));
    }

    function loadGame() {
        initPassSeason(true);
        const activeSeason = localStorage.getItem('aiPassSeason') || '0';
        let _showAnim = false;
        const saved = localStorage.getItem('neuralEvoSave');
        if (saved) {
            try {
                const d = JSON.parse(saved);
                points = d.points || 100000; // Читерский старт
                if (d.stars !== undefined) stars = d.stars;
                else if (d.diamonds !== undefined) stars = Math.floor(d.diamonds / 10);
                else stars = 0;
                totalClicks = d.totalClicks || 0; purchasedCount = d.purchasedCount || 1;
                totalStarsEarned = d.totalStarsEarned || d.totalDiamondsEarned || 0;
                godMode = d.godMode || false; comboCounter = d.comboCounter || 0; prestigeLevel = d.prestigeLevel || 0;
                boostEndTime = d.boostEndTime || 0; birthdayBoostEndTime = d.birthdayBoostEndTime || 0;
                march8BoostEndTime = d.march8BoostEndTime || 0; x10BoostEndTime = d.x10BoostEndTime || 0;
                autoclickerBought = d.autoclickerBought || false;
                if (d.lastSaveTime) lastSaveTime = d.lastSaveTime;
                if (d.currentSkin) currentSkin = d.currentSkin;
                if (d.purchasedSkins) purchasedSkins = d.purchasedSkins;
                if (d.upgrades) d.upgrades.forEach((data, i) => { if (upgrades[i]) upgrades[i].purchased = data.purchased; });
                if (String(d.passSeason) === String(activeSeason) && d.passTasks) {
                    d.passTasks.forEach((data, i) => { if (passTasks[i]) { passTasks[i].claimed = data.claimed; passTasks[i].completed = data.completed; } });
                    if (d.passCurrentTask !== undefined) passCurrentTask = d.passCurrentTask;
                    if (d.passRewardSeconds !== undefined) passRewardSeconds = d.passRewardSeconds;
                }
                if (d.gameStartTime) gameStartTime = d.gameStartTime;
                if (d.currentSoundProfile !== undefined) currentSoundProfile = d.currentSoundProfile;
                purchasedCount = upgrades.filter(u => u.purchased).length;
            } catch(e) {}
        }
        updateUI(); renderShopNeurons(); renderPassBadges(); renderTasksList(); updateStatsUI(); renderAchievements();
        startPassEndTimer(); startPassRewardTimer(); startBoostTimer();
        if (playtimeInterval) clearInterval(playtimeInterval);
        playtimeInterval = setInterval(() => updatePlaytime(), 60000);
        startSleepMsgTimer(); updateAutoClickerUI(); updateDailyGiftUI();
        applyBanState(); applyTheme(); applyPassStyle(); applySkin();
        applyButtonColor(localStorage.getItem('btnColor') || 'blue');
        updatePrestigeDisplay();
        const offlineIncome = calculateOfflineIncome();
        if (offlineIncome > 0) { points += offlineIncome; setTimeout(() => showOfflineReward(offlineIncome), 2600); saveGame(); updateUI(); }
        if (!localStorage.getItem('x10BoostUsed_v127')) { x10BoostEndTime = Date.now() + X10_BOOST_DURATION; localStorage.setItem('x10BoostUsed_v127', 'true'); setTimeout(() => showToast(t('x10_boost')), 3500); saveGame(); }
    }

    function showDiamondRemoval() { document.getElementById('diamondRemovalOverlay')?.classList.add('show'); }
    document.getElementById('diamondRemovalOk')?.addEventListener('click', () => document.getElementById('diamondRemovalOverlay')?.classList.remove('show'));
    document.getElementById('offlineOkBtn')?.addEventListener('click', () => document.getElementById('offlineOverlay')?.classList.remove('show'));

    function exportProgress() {
        saveGame(); const saved = localStorage.getItem('neuralEvoSave'); let data = {};
        if (saved) try { data = JSON.parse(saved); } catch(e) {}
        data.gameVersion = GAME_VERSION; data.exportDate = new Date().toISOString();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "cheat_save.json"; a.click();
        showToast(t('saved'));
    }
    function importProgress(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try { const data = JSON.parse(e.target.result); data.gameVersion = GAME_VERSION; localStorage.setItem('neuralEvoSave', JSON.stringify(data)); showToast(t('loaded')); setTimeout(() => location.reload(), 1000); }
            catch { showToast(t('load_error')); }
        };
        reader.readAsText(file);
    }
    const importInput = document.createElement('input'); importInput.type = 'file'; importInput.accept = '.json'; importInput.onchange = (e) => { if (e.target.files[0]) importProgress(e.target.files[0]); };

    const bgThemes = { early_autumn: "bg-early-autumn", golden: "bg-golden", rainy: "bg-rainy", late: "bg-late", forest: "bg-forest", park: "bg-park", mountains: "bg-mountains", village: "bg-village" };
    function setBodyBg(theme) {
        if (isHalloween() || isNewYear() || isHackerMode() || isBirthday() || isMarch8()) { applyTheme(); return; }
        document.body.className = ''; document.body.classList.add(bgThemes[theme] || 'bg-early-autumn');
        applyButtonColor(localStorage.getItem('btnColor') || 'blue'); localStorage.setItem('selectedBg', theme); applySkin();
    }

    function processSingleClick(gain, x, y) {
        if (isBanned) return; hideSleepMsg(); comboCounter++;
        let finalGain = gain;
        if (comboCounter % 5 === 0) {
            finalGain = gain * 2; const comboText = document.getElementById('comboText');
            if (comboText) { comboText.innerText = t('combo'); comboText.classList.add('show'); setTimeout(() => comboText.classList.remove('show'), 800); }
            spawnFloatText(x, y - 40, "🔥 x2!");
        }
        if (Math.random() < 0.02) { finalGain *= 3; spawnFloatText(x, y - 40, "⚡ x3!"); showToast(t('triple_click')); playBuySound(); }
        points += finalGain; totalClicks++; sessionClicks++; playClickSound();
        if (Math.random() < 0.001) { stars += 3; totalStarsEarned += 3; showToast(t('star_got')); playBuySound(); spawnFloatText(x, y - 30, "⭐⭐⭐"); }
        if (isHalloween() && Math.random() < 0.02) { stars += 5; totalStarsEarned += 5; showToast(t('pumpkin_click')); spawnFloatText(x, y - 50, "🎃 +5⭐"); playBuySound(); }
    }
    function handleMultiTouch(e) {
        e.preventDefault(); if (isBanned) return;
        const gain = getClickPower(); for (let i = 0; i < e.touches.length; i++) processSingleClick(gain, e.touches[i].clientX, e.touches[i].clientY);
        const brain = document.getElementById('clickableObject'); brain.style.transform = 'scale(0.92)'; setTimeout(() => brain.style.transform = '', 120); updateUI(); saveGame();
    }
    function handleMouseClick(e) {
        e.preventDefault(); if (isBanned) return;
        const gain = getClickPower(); processSingleClick(gain, e.clientX, e.clientY);
        const brain = document.getElementById('clickableObject'); brain.style.transform = 'scale(0.92)'; setTimeout(() => brain.style.transform = '', 120); updateUI(); saveGame();
    }
    const clickable = document.getElementById('clickableObject');
    if (clickable) { clickable.addEventListener('touchstart', handleMultiTouch, { passive: false }); clickable.addEventListener('mousedown', handleMouseClick); }

    // Tutorial & Menu
    const tutorialOverlay = document.getElementById('tutorialOverlay');
    const tutorialStep1 = document.getElementById('tutorialStep1');
    const tutorialStep2 = document.getElementById('tutorialStep2');
    function showTutorial() { tutorialStep1?.classList.remove('hidden'); tutorialStep2?.classList.add('hidden'); tutorialOverlay?.classList.add('show'); }
    function goToGame() { document.getElementById('mainMenu').classList.add('hidden'); document.getElementById('gameInterface').classList.remove('hidden'); }
    document.getElementById('tutorialYes')?.addEventListener('click', () => { tutorialStep1.classList.add('hidden'); tutorialStep2.classList.remove('hidden'); });
    document.getElementById('tutorialNo')?.addEventListener('click', () => { localStorage.setItem('tutorialDone', 'true'); tutorialOverlay?.classList.remove('show'); goToGame(); });
    document.getElementById('tutorialOk')?.addEventListener('click', () => { localStorage.setItem('tutorialDone', 'true'); tutorialOverlay?.classList.remove('show'); goToGame(); });
    document.getElementById('playBtn')?.addEventListener('click', () => { if (!localStorage.getItem('tutorialDone')) { showTutorial(); return; } goToGame(); });
    document.getElementById('testBtn')?.addEventListener('click', () => { showToast(t('test_ok')); playBuySound(); });
    document.getElementById('prestigeBtn')?.addEventListener('click', () => { updatePrestigeDisplay(); document.getElementById('prestigeModal')?.classList.add('show'); });
    document.getElementById('doPrestigeBtn')?.addEventListener('click', doPrestige);
    document.getElementById('closePrestigeBtn')?.addEventListener('click', () => document.getElementById('prestigeModal')?.classList.remove('show'));
    document.getElementById('backToMenu')?.addEventListener('click', () => { document.getElementById('mainMenu').classList.remove('hidden'); document.getElementById('gameInterface').classList.add('hidden'); });
    document.getElementById('openShopBtn')?.addEventListener('click', () => { document.getElementById('shopPanel').classList.add('show'); switchShopTab('neurons'); });
    document.getElementById('closeShopBtn')?.addEventListener('click', () => document.getElementById('shopPanel').classList.remove('show'));
    document.getElementById('buyAllBtn')?.addEventListener('click', buyAllAvailable);
    document.getElementById('boostBtn')?.addEventListener('click', buyBoost);
    document.getElementById('autoclickerBtn')?.addEventListener('click', buyAutoclicker);
    document.getElementById('dailyGiftBtn')?.addEventListener('click', claimDailyGift);
    document.getElementById('rouletteBtn')?.addEventListener('click', openRoulette);
    document.getElementById('rouletteSpinBtn')?.addEventListener('click', spinRoulette);
    document.getElementById('rouletteCloseBtn')?.addEventListener('click', () => document.getElementById('rouletteOverlay')?.classList.remove('show'));
    
    document.getElementById('achBtn')?.addEventListener('click', () => { renderAchievements(); document.getElementById('achOverlay')?.classList.add('show'); });
    document.getElementById('achCloseBtn')?.addEventListener('click', () => document.getElementById('achOverlay')?.classList.remove('show'));
    document.getElementById('factCloseBtn')?.addEventListener('click', () => document.getElementById('factOverlay')?.classList.remove('show'));
    document.getElementById('settingsBtn')?.addEventListener('click', () => document.getElementById('settingsModal').classList.add('show'));
    document.getElementById('closeSettings')?.addEventListener('click', () => document.getElementById('settingsModal').classList.remove('show'));
    document.getElementById('resetGameBtn')?.addEventListener('click', () => { if (confirm("Сбросить всё? / Reset all?")) { localStorage.clear(); location.reload(); } });
    document.getElementById('newsBtn')?.addEventListener('click', () => document.getElementById('newsModal').classList.add('show'));
    document.getElementById('closeNewsBtn')?.addEventListener('click', () => document.getElementById('newsModal').classList.remove('show'));

    document.getElementById('langRu')?.addEventListener('click', () => setLanguage('ru'));
    document.getElementById('langEn')?.addEventListener('click', () => setLanguage('en'));
    document.getElementById('setLangRu')?.addEventListener('click', () => setLanguage('ru'));
    document.getElementById('setLangEn')?.addEventListener('click', () => setLanguage('en'));

    document.querySelectorAll('.color-btn').forEach(btn => btn.addEventListener('click', () => { applyButtonColor(btn.dataset.color); showToast(`🎨 ${btn.dataset.color}`); }));
    document.querySelectorAll('.shop-tab').forEach(tab => tab.addEventListener('click', () => switchShopTab(tab.dataset.tab)));

    document.getElementById('openTasksBtn')?.addEventListener('click', () => { renderTasksList(); document.getElementById('passTasksModal').classList.add('show'); });
    document.getElementById('closeTasksBtn')?.addEventListener('click', () => document.getElementById('passTasksModal').classList.remove('show'));

    document.getElementById('bgEarlyAutumn')?.addEventListener('click', () => setBodyBg('early_autumn'));
    document.getElementById('bgGolden')?.addEventListener('click', () => setBodyBg('golden'));
    document.getElementById('bgRainy')?.addEventListener('click', () => setBodyBg('rainy'));
    document.getElementById('bgLate')?.addEventListener('click', () => setBodyBg('late'));
    document.getElementById('bgForest')?.addEventListener('click', () => setBodyBg('forest'));
    document.getElementById('bgPark')?.addEventListener('click', () => setBodyBg('park'));
    document.getElementById('bgMountains')?.addEventListener('click', () => setBodyBg('mountains'));
    document.getElementById('bgVillage')?.addEventListener('click', () => setBodyBg('village'));

    document.getElementById('exportSaveBtn')?.addEventListener('click', exportProgress);
    document.getElementById('importSaveBtn')?.addEventListener('click', () => importInput.click());
    document.getElementById('promoBtn')?.addEventListener('click', () => document.getElementById('promoModal').classList.add('show'));
    document.getElementById('closePromoBtn')?.addEventListener('click', () => document.getElementById('promoModal').classList.remove('show'));

    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            const el = document.documentElement; const isFull = document.fullscreenElement || document.webkitFullscreenElement;
            if (!isFull) { if (el.requestFullscreen) el.requestFullscreen(); else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen(); fullscreenBtn.innerText = t('off'); }
            else { if (document.exitFullscreen) document.exitFullscreen(); else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); fullscreenBtn.innerText = t('on'); }
        });
    }

    const promoCodes = {}; for (let i = 1; i <= 100; i++) promoCodes[`code${i}`] = { points: 100 + i * 5, stars: 1 + Math.floor(i / 10) };
    promoCodes['dima'] = { points: 500, stars: 10 }; promoCodes['dima god'] = { points: 5000, stars: 100 }; promoCodes['start'] = { points: 100, stars: 5 };
    promoCodes['neural'] = { points: 1000, stars: 50 }; promoCodes['evolution'] = { points: 2000, stars: 100 }; promoCodes['prestige'] = { points: 10000, stars: 200 };
    promoCodes['legend'] = { points: 20000, stars: 500 }; promoCodes['pass8'] = { points: 8000, stars: 80 }; promoCodes['halloween'] = { points: 6666, stars: 66 };
    promoCodes['newyear'] = { points: 7777, stars: 77 }; promoCodes['robot'] = { points: 9999, stars: 99 }; promoCodes['cheat'] = { points: 9999999, stars: 9999 }; // Новый чит-промокод

    document.getElementById('activatePromoBtn')?.addEventListener('click', () => {
        if (isBanned) return;
        const code = document.getElementById('promoInput').value.toLowerCase().trim();
        if (checkBan(code)) { document.getElementById('promoInput').value = ''; document.getElementById('promoModal').classList.remove('show'); activateBan(); return; }
        if (promoCodes[code]) {
            const promo = promoCodes[code]; points += promo.points; stars += promo.stars; totalStarsEarned += promo.stars;
            updateUI(); saveGame(); showToast(t('promo_ok')); document.getElementById('promoInput').value = ''; document.getElementById('promoModal').classList.remove('show');
        } else showToast(t('promo_bad'));
    });

    document.getElementById('soundToggleBtn')?.addEventListener('click', () => {
        if (isBanned) return; currentSoundProfile = (currentSoundProfile + 1) % soundProfiles.length;
        document.getElementById('soundToggleBtn').innerText = `${t('sound_toggle')} (${soundProfiles[currentSoundProfile].name})`;
        saveGame(); showToast(`🔊 ${soundProfiles[currentSoundProfile].name}`);
    });

    function moveEyes(e) {
        const x = e.touches ? e.touches[0].clientX : e.clientX; const y = e.touches ? e.touches[0].clientY : e.clientY;
        document.querySelectorAll('.pupil').forEach(p => {
            const rect = p.parentElement.parentElement.getBoundingClientRect();
            const dx = x - (rect.left + rect.width / 2); const dy = y - (rect.top + rect.height / 2);
            const angle = Math.atan2(dy, dx); const dist = Math.min(4, Math.hypot(dx, dy) / 20);
            p.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
        });
    }
    document.addEventListener('mousemove', moveEyes); document.addEventListener('touchmove', moveEyes);

    let reloadSeconds = 300;
    setInterval(() => {
        if (reloadSeconds > 0) {
            reloadSeconds--; const el = document.getElementById('reloadCountdown');
            if (el) el.innerText = `${Math.floor(reloadSeconds / 60)}:${(reloadSeconds % 60).toString().padStart(2, '0')}`;
            if (reloadSeconds === 0) { showToast(t('reload_toast')); setTimeout(() => location.reload(), 2000); }
        }
    }, 1000);
    setInterval(saveGame, 5000);

    // ===== ЧИТЕРСКАЯ АДМИНКА (3 ВКЛАДКИ) =====
    let adminCurrentTab = 'game';
    function renderAdminBody(tabId) {
        adminCurrentTab = tabId;
        document.querySelectorAll('.admin-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
        document.getElementById('adminHeaderTitle').innerText = t('admin_panel');
        const body = document.getElementById('adminBody');
        if (!body) return;

        if (tabId === 'game') {
            body.innerHTML = `
                <div class="admin-item"><span>${t('give_points')}</span><input type="number" id="admPointsInput" class="admin-input" placeholder="1000"></div>
                <div class="admin-item"><span></span><button id="admPoints">${t('give_points_btn')}</button></div>
                <div class="admin-item"><span>${t('give_stars')}</span><input type="number" id="admStarsInput" class="admin-input" placeholder="100"></div>
                <div class="admin-item"><span></span><button id="admStars">${t('give_stars_btn')}</button></div>
                <div class="admin-item"><span>${t('buy_all')}</span><button id="admBuyAll">${t('buy_all_btn')}</button></div>
                <div class="admin-item"><span>${t('god_mode')}</span><button id="admGod">${t('toggle')}</button></div>
                <div class="admin-item"><span>${t('plus_prestige')}</span><button id="admPrestige">${t('give_btn')}</button></div>
                <div class="admin-item"><span>${t('autoclicker_btn')}</span><button id="admAuto">${t('give_btn')}</button></div>
            `;
            document.getElementById('admPoints').onclick = () => { const val = parseInt(document.getElementById('admPointsInput').value) || 100000; points += val; updateUI(); saveGame(); showToast(`+${formatNumber(val)}🧠`); };
            document.getElementById('admStars').onclick = () => { const val = parseInt(document.getElementById('admStarsInput').value) || 1000; stars += val; totalStarsEarned += val; updateUI(); saveGame(); showToast(`+${formatNumber(val)}⭐`); };
            document.getElementById('admBuyAll').onclick = () => { upgrades.forEach((u) => { if (!u.purchased) { u.purchased = true; purchasedCount++; } }); updateUI(); renderShopNeurons(); saveGame(); showToast(t('all_neurons')); };
            document.getElementById('admGod').onclick = () => { godMode = !godMode; updateUI(); saveGame(); showToast(godMode ? t('god_on') : t('god_off')); };
            document.getElementById('admPrestige').onclick = () => { prestigeLevel++; updatePrestigeDisplay(); updateUI(); saveGame(); showToast(`🌟 Престиж: ${prestigeLevel}`); };
            document.getElementById('admAuto').onclick = () => { autoclickerBought = true; startAutoclicker(); updateAutoClickerUI(); saveGame(); showToast('🤖 Автокликер выдан!'); };
        } 
        else if (tabId === 'events') {
            body.innerHTML = `
                <div class="admin-item"><span>${t('birthday_boost_btn')}</span><button id="admBirthday">${t('on_btn')}</button></div>
                <div class="admin-item"><span>${t('march8_boost_btn')}</span><button id="admMarch8">${t('on_btn')}</button></div>
                <div class="admin-item"><span>${t('x10_boost_btn')}</span><button id="admX10">${t('on_btn')}</button></div>
                <div class="admin-item"><span>${t('spawn_meteor')}</span><button id="admMeteor">${t('spawn_btn')}</button></div>
                <div class="admin-item"><span>${t('spawn_ghost')}</span><button id="admGhost">${t('spawn_btn')}</button></div>
                <div class="admin-item"><span>${t('spawn_bat')}</span><button id="admBat">${t('spawn_btn')}</button></div>
                <div class="admin-item"><span>${t('spawn_spider')}</span><button id="admSpider">${t('spawn_btn')}</button></div>
                <div class="admin-item"><span>${t('spawn_witch')}</span><button id="admWitch">${t('spawn_btn')}</button></div>
                <div class="admin-item"><span>${t('spawn_web')}</span><button id="admWeb">${t('spawn_btn')}</button></div>
            `;
            document.getElementById('admBirthday').onclick = () => { birthdayBoostEndTime = Date.now() + BIRTHDAY_BOOST_DURATION; updateBoostTimersPanel(); saveGame(); showToast(t('birthday_boost')); };
            document.getElementById('admMarch8').onclick = () => { march8BoostEndTime = Date.now() + MARCH8_BOOST_DURATION; updateBoostTimersPanel(); saveGame(); showToast(t('march8_boost')); };
            document.getElementById('admX10').onclick = () => { x10BoostEndTime = Date.now() + X10_BOOST_DURATION; updateBoostTimersPanel(); saveGame(); showToast(t('x10_boost')); };
            document.getElementById('admMeteor').onclick = () => { spawnMeteor(); showToast('📢 Спавн!'); };
            document.getElementById('admGhost').onclick = () => { spawnGhost(); showToast('👻 Спавн!'); };
            document.getElementById('admBat').onclick = () => { spawnBat(); showToast('🦇 Спавн!'); };
            document.getElementById('admSpider').onclick = () => { spawnSpider(); showToast('🕷️ Спавн!'); };
            document.getElementById('admWitch').onclick = () => { spawnWitch(); showToast('🧙 Спавн!'); };
            document.getElementById('admWeb').onclick = () => { spawnWeb(); showToast('🕸️ Спавн!'); };
        }
        else if (tabId === 'system') {
            body.innerHTML = `
                <div class="admin-item"><span>${t('open_pass')}</span><button id="admPass">${t('give_btn')}</button></div>
                <div class="admin-item"><span>${t('reset_gift')}</span><button id="admResetGift">${t('reset_gift_btn')}</button></div>
                <div class="admin-item"><span>${t('unlock_ach')}</span><button id="admAch">${t('unlock_btn')}</button></div>
                <div class="admin-item"><span>${t('unlock_skins')}</span><button id="admSkins">${t('unlock_btn')}</button></div>
                <div class="admin-item"><span>${t('reset_tutorial')}</span><button id="admResetTutorial">${t('reset_btn')}</button></div>
                <div class="admin-item"><span>${t('reset_x10')}</span><button id="admResetX10">${t('reset_btn')}</button></div>
                <div class="admin-item"><span>${t('reset_ach')}</span><button id="admResetAch">${t('reset_btn')}</button></div>
                <div class="admin-item"><span>${t('reset_progress')}</span><button id="admReset" style="background:red;">${t('reset_btn')}</button></div>
            `;
            document.getElementById('admPass').onclick = () => { passTasks.forEach((t2) => { t2.claimed = true; }); passCurrentTask = passTasks.length; renderPassBadges(); renderTasksList(); saveGame(); showToast(t('all_passes')); };
            document.getElementById('admResetGift').onclick = () => { localStorage.removeItem('dailyGiftDate'); updateDailyGiftUI(); showToast('🎁 Подарок сброшен!'); };
            document.getElementById('admAch').onclick = () => { unlockedAchievements = ACHIEVEMENTS.map(a => a.id); localStorage.setItem('neuralAch', JSON.stringify(unlockedAchievements)); renderAchievements(); updateUI(); saveGame(); showToast(t('unlock_ach')); };
            document.getElementById('admSkins').onclick = () => { purchasedSkins = SKINS.map(s => s.id); localStorage.setItem('purchasedSkins', JSON.stringify(purchasedSkins)); renderShopSkins(); saveGame(); showToast(t('unlock_skins')); };
            document.getElementById('admResetTutorial').onclick = () => { localStorage.removeItem('tutorialDone'); showToast("✅ Tutorial reset!"); };
            document.getElementById('admResetX10').onclick = () => { localStorage.removeItem('x10BoostUsed_v127'); showToast("✅ X10 boost reset!"); };
            document.getElementById('admResetAch').onclick = () => { unlockedAchievements = []; localStorage.removeItem('neuralAch'); renderAchievements(); showToast("✅ Achievements reset!"); };
            document.getElementById('admReset').onclick = () => { if (confirm("Сбросить прогресс? / Reset progress?")) { localStorage.clear(); location.reload(); } };
        }
    }

    function openAdminPanel(tabId) {
        const overlay = document.getElementById('adminOverlay');
        if (!overlay) return;
        renderAdminBody(tabId);
        overlay.classList.add('show');
    }
    
    document.getElementById('admBtn1')?.addEventListener('click', () => openAdminPanel('game'));
    document.getElementById('admBtn2')?.addEventListener('click', () => openAdminPanel('events'));
    document.getElementById('admBtn3')?.addEventListener('click', () => openAdminPanel('system'));
    
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => renderAdminBody(tab.dataset.tab));
    });
    document.getElementById('adminCloseBtn')?.addEventListener('click', () => document.getElementById('adminOverlay').classList.remove('show'));
    document.getElementById('adminOverlay')?.addEventListener('click', (e) => { if (e.target.id === 'adminOverlay') document.getElementById('adminOverlay').classList.remove('show'); });

    applyTranslations();
    loadGame();
    checkDailyFact();
});
