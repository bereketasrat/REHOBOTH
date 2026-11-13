/* ============================================================
   Rehoboth Technology – Language Switch (English / Amharic) + Mobile Menu
   ============================================================ */

// ---------- Translation strings ----------
const translations = {
  en: {
    // Meta / brand
    brand:        "Rehoboth",
    // Nav
    nav_home:     "Home",
    nav_about:    "About",
    nav_services: "Services",
    nav_contact:  "Contact",
    // Hero
    hero_title:   "Rehoboth Technology<br>Electronic Accessory Sales &amp; Maintenance",
    hero_sub:     "Your trusted partner for quality electronic accessories and expert repair services.",
    hero_cta:     "Explore Our Services",
    // About
    about_title:  "About Us",
    about_p1: `Rehoboth Technology is a dedicated electronics business
               committed to providing customers with high-quality accessories and dependable repair services.
               We combine product knowledge with hands-on technical expertise to keep your devices running at their best.`,
    about_p2: `Beyond maintenance, we also offer a wide selection of electronic accessories for sale, and we
               facilitate exchange of used electronics — giving customers flexible options to upgrade or replace
               their devices affordably.`,
    about_p3: `Our team takes pride in honest assessments, fair pricing, and building long-term relationships
               with every customer we serve.`,
    stat1:        "Satisfied Customers",
    stat2:        "Years of Experience",
    stat3:        "Devices Repaired",
    // Services
    services_title: "Our Services",
    services_sub:   "We offer a full range of electronic accessory and maintenance services to meet your needs.",
    s1_title: "Device Repair &amp; Maintenance",
    s1_desc:  "Comprehensive repair services for smartphones, tablets, laptops, and other electronic devices. We diagnose faults accurately and restore your device to full working order.",
    s2_title: "Accessory Sales",
    s2_desc:  "A curated selection of genuine and compatible accessories — chargers, cables, earphones, cases, screen protectors, and more — available for purchase in-store.",
    s3_title: "Battery Replacement",
    s3_desc:  "Fast and reliable battery replacement for phones, laptops, and portable devices using quality-tested cells to extend your device's lifespan.",
    s4_title: "Screen &amp; Hardware Repair",
    s4_desc:  "Cracked screens, damaged ports, faulty buttons, and hardware failures repaired with precision and care by our experienced technicians.",
    s5_title: "Device Exchange",
    s5_desc:  "Looking to upgrade? We facilitate device exchange so you can trade in your used electronics toward a newer model or accessory — a convenient and affordable option.",
    s6_title: "Diagnosis &amp; Consultation",
    s6_desc:  "Not sure what's wrong with your device? Bring it in for a free diagnostic assessment and honest consultation from our knowledgeable team.",
    // Contact
    contact_title: "Contact Us",
    contact_sub:   "Visit us or reach out — we're happy to help.",
    c1_title:  "Location",
    c1_detail: "KAFA, BONGA",
    c2_title:  "Phone",
    c2_detail: "+251 91 299 1968",
    c3_title:  "Working Hours",
    c3_detail: "Mon – Sat: 8:30 AM – 6:30 PM",
    c4_title:  "Email",
    c4_detail: "rehoboth@gmail.com",
    // Owner label
    owner_label: "Our Founder &amp; Owner",
    // Footer
    footer_tagline: "Electronic Accessory Sales &amp; Maintenance",
    footer_copy: "&copy; 2026 Rehoboth Technology. All rights reserved.",
  },

  am: {
    // Meta / brand
    brand:        "ሬሆቦት",
    // Nav
    nav_home:     "መነሻ",
    nav_about:    "ስለ እኛ",
    nav_services: "አገልግሎቶቻችን",
    nav_contact:  "አግኙን",
    // Hero
    hero_title:   "ሬሆቦት ቴክኖሎጂ<br>ኤሌክትሮኒክ መለዋወጫ ሽያጭ እና ጥገና",
    hero_sub:     "ለኤሌክትሮኒክ መለዋወጫዎች ጥራት ያለው ሽያጭ እና ለመሣሪያዎ ጥሩ ጥገና አማካይ።",
    hero_cta:     "አገልግሎቶቻችንን ይመልከቱ",
    // About
    about_title:  "ስለ እኛ",
    about_p1: `ሬሆቦት ቴክኖሎጂ ለደንበኞቻቸው ከፍተኛ ጥራት ያላቸው
               ኤሌክትሮኒክ መለዋወጫዎችን እና አስተማማኝ የጥገና አገልግሎቶችን ለመስጠት ቁርጠኝነት
               ያለው ድርጅት ነው። የምርት እውቀትን ከቴክኒካዊ ልምድ ጋር በማዋሃድ
               መሣሪያዎ ሁልጊዜ ተግባራዊ ሆኖ እንዲቆይ እናደርጋለን።`,
    about_p2: `ከጥገና ሥራ ባሻገር ለሽያጭ የሚቀርቡ ብዙ ዓይነት ኤሌክትሮኒክ መለዋወጫዎችን
               ለደንበኞቻችን እናቀርባለን፤ ከዚህ ሌላ ጥቅም ላይ የዋሉ ኤሌክትሮኒክ ዕቃዎችን
               ለመለዋወጥ ምቹ አማራጭ ሁኔታዎችን እናመቻቻለን።`,
    about_p3: `ቡድናችን ሐቀኛ ምዘና፣ ምክንያታዊ ዋጋ እና ከእያንዳንዱ ደንበኛ ጋር ዘላቂ ግንኙነት
               ለመገንባት ይጥራል።`,
    stat1:        "ረካ ያሉ ደንበኞች",
    stat2:        "የልምድ ዓመታት",
    stat3:        "የተጠገኑ መሣሪያዎች",
    // Services
    services_title: "አገልግሎቶቻችን",
    services_sub:   "ፍላጎቶቻችሁን ለማሟላት ሰፊ የኤሌክትሮኒክ መለዋወጫ እና የጥገና አገልግሎቶችን እናቀርባለን።",
    s1_title: "የመሣሪያ ጥገና",
    s1_desc:  "ለስማርት ስልኮች፣ ታብሌቶች፣ ላፕቶፖች እና ሌሎች ኤሌክትሮኒክ መሣሪያዎች አጠቃላይ የጥገና አገልግሎት። ጉዳቶችን በትክክል ለይተን መሣሪያዎን ወደ ሙሉ አሠራሩ እንመልሳለን።",
    s2_title: "መለዋወጫ ሽያጭ",
    s2_desc:  "ኦሪጂናል እና ተኳሃኝ መለዋወጫዎች — ቻርጀሮች፣ ኬብሎች፣ ኢርፎኖች፣ ኬዞች፣ ስክሪን ጠባቂዎች እና ሌሎችም — በሱቃችን ሊገዙ ይቻላል።",
    s3_title: "የባትሪ ለውጥ",
    s3_desc:  "ለስልኮች፣ ላፕቶፖች እና ፖርታብል መሣሪያዎች ፈጣን እና አስተማማኝ የባትሪ ልውውጥ — የምርምር ጥራት ያላቸው ሴሎችን ተጠቅሞ የመሣሪያዎን ዕድሜ ያራዝማል።",
    s4_title: "ስክሪን እና ሃርድዌር ጥገና",
    s4_desc:  "የተሰበሩ ስክሪኖች፣ የተበላሹ ፖርቶች፣ ያልሠሩ አዝራሮች እና ሃርድዌር ብልሽቶች ልምድ ባላቸው ቴክኒሻኖቻችን ትክክለኛ እና ጥንቁቅ ሆኖ ይጠገናሉ።",
    s5_title: "የመሣሪያ ለውጥ",
    s5_desc:  "ወደ አዲስ ሞዴል ማሻሻል ይፈልጋሉ? ጥቅም ላይ የዋሉ ኤሌክትሮኒኮቻቸውን ለምትፈልጉት ሞዴል ወይም መለዋወጫ እንዲለዋወጡ ምቹ ሁኔታ እናመቻቻለን።",
    s6_title: "ምርመራ እና ምክር",
    s6_desc:  "ለመሣሪያዎ ምን እንደሆነ አናውቁም? ይዘዉ ይምጡ — ምርምር ያደርጋሉ፤ ቡድናችን ነጻ ምርምራ እና ሐቀኛ ምክር ይሰጣሉ።",
    // Contact
    contact_title: "አግኙን",
    contact_sub:   "ይጎብኙን ወይም ያናግሩን — ደስ ብሎናል።",
    c1_title:  "አድራሻ",
    c1_detail: "ካፋ፣ ቦንጋ",
    c2_title:  "ስልክ",
    c2_detail: "+251 91 299 1968",
    c3_title:  "የሥራ ሰዓታት",
    c3_detail: "ሰኞ – ቅዳሜ: ከ 2:30 – 12:30 (ኢ.ሰ.ሰ)",
    c4_title:  "ኢሜይል",
    c4_detail: "rehoboth@gmail.com",
    // Owner label
    owner_label: "መስራች እና ባለቤት",
    // Footer
    footer_tagline: "ኤሌክትሮኒክ መለዋወጫ ሽያጭ እና ጥገና",
    footer_copy: "&copy; 2026 ሬሆቦት ቴክኖሎጂ። መብቱ የተጠበቀ ነው።",
  }
};

// ---------- State ----------
let currentLang = 'en';

// ---------- Apply translations ----------
function applyTranslations(lang) {
  const t = translations[lang];

  // Update all elements with data-key
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update page title
  document.title = lang === 'am'
    ? 'ሬሆቦት ቴክኖሎጂ'
    : 'Rehoboth Technology';

  // Update html lang attribute
  document.documentElement.lang = lang === 'am' ? 'am' : 'en';

  // Update toggle button label (show the OTHER language)
  document.getElementById('langLabel').textContent = lang === 'en' ? 'አማርኛ' : 'English';
}

// ---------- Toggle ----------
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'am' : 'en';
  applyTranslations(currentLang);
});

// ---------- Mobile menu ----------
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Smooth active-link highlight ----------
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a, .mobile-menu a');

function highlightNav() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 90;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

/* ============================================================
   MAP  –  Leaflet + OpenStreetMap (no API key required)
   ============================================================ */

// ── Location settings ─────────────────────────────────────────
// Change these three values to point the map at a different place.

/** Starting centre of the map  [latitude, longitude] */
const MAP_CENTER      = [7.118575953363115, 36.4702235885709]; // ← coordinates here

/** Initial zoom level (1 = world, 15 = street, 18 = building) */
const MAP_ZOOM        = 18;                                    // ← adjust zoom here

/** Marker pin – keep same as MAP_CENTER unless you need to offset it */
const MARKER_POSITION = [7.118575953363115, 36.4702235885709]; // ← pin coordinates here

/** HTML shown inside the popup bubble */
const POPUP_HTML = `
  <strong>Rehoboth Technology</strong>
  Electronic Accessory Sales &amp; Maintenance<br>
  📍 Bonga, Kafa Zone, Ethiopia<br>
  📞 +251 91 299 1968
`;                                                             // ← edit popup text here
// ─────────────────────────────────────────────────────────────

// Wait for the full page to load before initialising the map
// so the #map element already has its CSS height applied.
window.addEventListener('load', function () {
  var mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;

  // Tell Leaflet where the local marker images live
  L.Icon.Default.imagePath = 'leaflet/';

  // Create the map
  var map = L.map(mapEl, {
    center:   MAP_CENTER,
    zoom:     MAP_ZOOM,
    keyboard: true,
  });

  // OpenStreetMap tiles – free, no API key needed
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Marker + popup
  L.marker(MARKER_POSITION)
    .addTo(map)
    .bindPopup(POPUP_HTML, { maxWidth: 260 })
    .openPopup();

  // Re-measure the container in case it was off-screen at init
  map.invalidateSize();
  setTimeout(function () { map.invalidateSize(); }, 400);

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          map.invalidateSize();
          obs.unobserve(mapEl);
        }
      });
    }, { threshold: 0.05 }).observe(mapEl);
  }
});

// ── Translation keys for the map section ─────────────────────
// Add "Find Us" labels to both language objects so the
// language-toggle script can update the section heading.
translations.en.map_title = 'Find Us';
translations.en.map_sub   = 'Come visit us in Bonga, Kafa Zone, Ethiopia.';
translations.en.nav_map   = 'Map';

translations.am.map_title = 'አቀፍ ቦታ';
translations.am.map_sub   = 'ቦንጋ፣ ካፋ ዞን፣ ኢትዮጵያ ውስጥ ይጎብኙን።';
translations.am.nav_map   = 'ካርታ';
