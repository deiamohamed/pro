// Smooth scrolling and section reveal on scroll
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Translation content
  const translations = {
    en: {
      siteTitle: "Deia Mohamed",
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      navContact: "Contact",
      aboutTitle: "About Me",
      aboutContent: "I am a seasoned DevOps and Software Engineer...",
      skillsTitle: "Skills",
      projectsTitle: "Projects",
      contactTitle: "Contact",
      skill1: "C/C++ Programming",
      skill2: "Java Development",
      skill3: "Full-Stack JavaScript (Node.js, Express, React, Electron)",
      skill4: "IoT & Embedded Systems (ESP32, PIC, ATmega)",
      skill5: "Database Management (PostgreSQL, MongoDB)",
      skill6: "DevOps (Docker, GitHub, CI/CD)",
      skill7: "Cybersecurity Auditing",
      skill8: "3G/4G/5G Networking Fundamentals",
      project1Title: "IoT Smart Home System",
      project1Content: "Built a smart home automation system...",
      project2Title: "DevOps Automation Pipeline",
      project2Content: "Designed and implemented a CI/CD pipeline...",
      project3Title: "Electron Desktop App",
      project3Content: "Developed a cross-platform desktop application...",
      project4Title: "Cybersecurity Auditing Tool",
      project4Content: "Created a custom auditing tool..."
    },
    fr: {
      siteTitle: "Deia Mohamed",
      navAbout: "À propos",
      navSkills: "Compétences",
      navProjects: "Projets",
      navContact: "Contact",
      aboutTitle: "À propos de moi",
      aboutContent: "Je suis un ingénieur DevOps et logiciel...",
      skillsTitle: "Compétences",
      projectsTitle: "Projets",
      contactTitle: "Contact",
      skill1: "Programmation C/C++",
      skill2: "Développement Java",
      skill3: "JavaScript Full-Stack (Node.js, Express, React, Electron)",
      skill4: "IoT & Systèmes embarqués (ESP32, PIC, ATmega)",
      skill5: "Gestion de base de données (PostgreSQL, MongoDB)",
      skill6: "DevOps (Docker, GitHub, CI/CD)",
      skill7: "Audit de cybersécurité",
      skill8: "Fondamentaux des réseaux 3G/4G/5G",
      project1Title: "Système domotique IoT",
      project1Content: "Création d'un système domotique intelligent...",
      project2Title: "Pipeline d'automatisation DevOps",
      project2Content: "Conception et mise en œuvre d'un pipeline CI/CD...",
      project3Title: "Application de bureau Electron",
      project3Content: "Développement d'une application de bureau...",
      project4Title: "Outil d'audit de cybersécurité",
      project4Content: "Création d'un outil d'audit personnalisé..."
    },
    ar: {
      siteTitle: "دية محمد",
      navAbout: "عني",
      navSkills: "المهارات",
      navProjects: "المشاريع",
      navContact: "اتصال",
      aboutTitle: "عني",
      aboutContent: "أنا مهندس DevOps ومطور برمجيات متمرس...",
      skillsTitle: "المهارات",
      projectsTitle: "المشاريع",
      contactTitle: "اتصال",
      skill1: "برمجة C/C++",
      skill2: "تطوير جافا",
      skill3: "تطوير JavaScript الشامل...",
      skill4: "إنترنت الأشياء والأنظمة المدمجة...",
      skill5: "إدارة قواعد البيانات...",
      skill6: "DevOps (Docker، GitHub، CI/CD)",
      skill7: "تدقيق الأمن السيبراني",
      skill8: "أساسيات الشبكات 3G/4G/5G",
      project1Title: "نظام المنزل الذكي IoT",
      project1Content: "بناء نظام أتمتة منزلية ذكي...",
      project2Title: "خط أنابيب الأتمتة DevOps",
      project2Content: "تصميم وتنفيذ خط أنابيب CI/CD...",
      project3Title: "تطبيق سطح مكتب Electron",
      project3Content: "تطوير تطبيق سطح مكتب...",
      project4Title: "أداة تدقيق الأمن السيبراني",
      project4Content: "إنشاء أداة تدقيق مخصصة..."
    }
  };
  
  // Function to change language
  function changeLanguage(lang) {
    document.documentElement.lang = lang;
  
    const elements = [
      "siteTitle", "navAbout", "navSkills", "navProjects", "navContact",
      "aboutTitle", "aboutContent", "skillsTitle", "projectsTitle", "contactTitle",
      "skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7", "skill8",
      "project1Title", "project1Content", "project2Title", "project2Content",
      "project3Title", "project3Content", "project4Title", "project4Content"
    ];
  
    elements.forEach(id => {
      if (document.getElementById(id)) {
        document.getElementById(id).innerText = translations[lang][id];
      }
    });
  }
  
  // Initialize with default language (English)
  document.addEventListener("DOMContentLoaded", () => {
    changeLanguage('en');  // Default to English or load from a saved setting
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    changeLanguage('en');  // Default to English
  });
  