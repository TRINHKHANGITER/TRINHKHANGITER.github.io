(function () {
  "use strict";

  const LANG_KEY = "portfolio-language";
  const supportedLanguages = ["vi", "en"];

  const translations = {
    vi: {
      meta: {
        homeTitle: "Võ Trịnh Khang | Portfolio cá nhân",
        homeDescription:
          "Portfolio cá nhân của Võ Trịnh Khang - sinh viên Kỹ thuật phần mềm tập trung vào web development và hệ thống quản lý.",
      },
      nav: {
        home: "Trang chủ",
        about: "Giới thiệu",
        skills: "Kỹ năng",
        contact: "Liên hệ",
        resume: "Resume",
      },
      profile: {
        role: "Sinh viên Kỹ thuật phần mềm",
        location: "TP. Hồ Chí Minh, Việt Nam",
        focus: "Web development, AI tooling, hệ thống quản lý",
      },
      home: {
        eyebrow: "Portfolio cá nhân",
        hello: "Xin chào, ",
        title: "Tôi là Võ Trịnh Khang.",
        description:
          "Tôi là sinh viên năm ba ngành Kỹ thuật phần mềm tại Trường Đại học Sài Gòn, tập trung xây dựng ứng dụng web, hệ thống quản lý và các sản phẩm phần mềm có trải nghiệm rõ ràng.",
        primaryCta: "Xem giới thiệu",
        secondaryCta: "Liên hệ",
        stats: {
          year: "Năm học nền tảng phần mềm",
          stack: "Định hướng phát triển web",
          language: "Giao tiếp và giao diện song ngữ",
        },
      },
      about: {
        eyebrow: "Giới thiệu",
        title: "Tôi xây dựng phần mềm với tư duy rõ ràng và thực tế.",
        intro:
          "Tôi là Võ Trịnh Khang, sinh viên năm ba ngành Kỹ thuật phần mềm tại Trường Đại học Sài Gòn. Tôi quan tâm đến cách một sản phẩm phần mềm được thiết kế, triển khai và vận hành để giải quyết đúng nhu cầu người dùng.",
        experienceTitle: "Kinh nghiệm học tập và thực hành",
        experienceText:
          "Tôi đã thực hành nhiều bài tập web và hệ thống quản lý trong quá trình học, từ giao diện người dùng, luồng nghiệp vụ, quản lý dữ liệu đến tích hợp API. Tôi quen với việc đọc yêu cầu, chia nhỏ chức năng, thiết kế màn hình và kiểm tra lại trải nghiệm sử dụng.",
        skillTitle: "Kỹ năng nổi bật",
        skillText:
          "Tôi tập trung vào nền tảng HTML, CSS, JavaScript, React, backend API, database và cách tổ chức code dễ bảo trì. Ngoài kỹ thuật, tôi rèn luyện khả năng tự học, phân tích vấn đề, làm việc nhóm và trình bày ý tưởng mạch lạc.",
        interestTitle: "Sở thích",
        interestText:
          "Tôi thích tìm hiểu công nghệ mới, thử nghiệm các công cụ AI hỗ trợ lập trình, đọc tài liệu kỹ thuật và cải thiện giao diện để sản phẩm dễ dùng hơn.",
        goalTitle: "Mục tiêu nghề nghiệp",
        goalText:
          "Mục tiêu của tôi là trở thành lập trình viên phần mềm có nền tảng full-stack vững, có khả năng xây dựng sản phẩm thực tế từ ý tưởng đến triển khai, đồng thời tiếp tục phát triển ở các mảng web, backend và AI ứng dụng.",
      },
      skills: {
        eyebrow: "Kỹ năng",
        title: "Các công nghệ và năng lực tôi đang phát triển.",
        intro:
          "Tôi chia kỹ năng thành các nhóm để dễ theo dõi: frontend, backend, database, cloud/devops, công cụ, kỹ năng mềm và ngoại ngữ.",
        groups: {
          frontend: "Frontend",
          backend: "Backend",
          database: "Database",
          cloud: "Cloud & DevOps",
          tools: "Công cụ",
          soft: "Kỹ năng mềm & ngoại ngữ",
        },
        soft: {
          problem: "Phân tích vấn đề và chia nhỏ yêu cầu",
          teamwork: "Làm việc nhóm và giao tiếp kỹ thuật",
          learning: "Tự học, đọc tài liệu và thử nghiệm công nghệ mới",
          language: "Tiếng Việt, tiếng Anh đọc hiểu tài liệu kỹ thuật",
        },
      },
      contact: {
        eyebrow: "Liên hệ",
        title: "Kết nối với tôi.",
        intro:
          "Tôi luôn sẵn sàng trao đổi về cơ hội thực tập, trao đổi học tập, cộng tác hoặc các chủ đề liên quan đến phát triển phần mềm.",
        labels: {
          email: "Email",
          phone: "Số điện thoại",
          address: "Địa chỉ",
        },
        socialTitle: "Mạng xã hội",
      },
      footer: {
        text: "© 2026 Võ Trịnh Khang. Portfolio cá nhân.",
      },
    },
    en: {
      meta: {
        homeTitle: "Vo Trinh Khang | Personal Portfolio",
        homeDescription:
          "Personal portfolio of Vo Trinh Khang - a Software Engineering student focused on web development and management systems.",
      },
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        contact: "Contact",
        resume: "Resume",
      },
      profile: {
        role: "Software Engineering Student",
        location: "Ho Chi Minh City, Vietnam",
        focus: "Web development, AI tooling, management systems",
      },
      home: {
        eyebrow: "Personal portfolio",
        hello: "Hi, ",
        title: "I am Vo Trinh Khang.",
        description:
          "I am a third-year Software Engineering student at Saigon University, focused on building web applications, management systems, and software products with clear user experiences.",
        primaryCta: "Read about me",
        secondaryCta: "Contact me",
        stats: {
          year: "Years of software foundation",
          stack: "Web development direction",
          language: "Bilingual UI and communication",
        },
      },
      about: {
        eyebrow: "About",
        title: "I build software with clear and practical thinking.",
        intro:
          "I am Vo Trinh Khang, a third-year Software Engineering student at Saigon University. I care about how software products are designed, implemented, and operated to solve the right user needs.",
        experienceTitle: "Learning and practice experience",
        experienceText:
          "I have practiced multiple web and management-system exercises during my studies, from user interfaces and business flows to data management and API integration. I am used to reading requirements, breaking down features, designing screens, and reviewing the user experience.",
        skillTitle: "Core strengths",
        skillText:
          "I focus on HTML, CSS, JavaScript, React, backend APIs, databases, and maintainable code organization. Beyond technical work, I practice self-learning, problem analysis, teamwork, and clear technical communication.",
        interestTitle: "Interests",
        interestText:
          "I enjoy learning new technologies, experimenting with AI tools for programming, reading technical documentation, and improving interfaces so products are easier to use.",
        goalTitle: "Career goal",
        goalText:
          "My goal is to become a software developer with a solid full-stack foundation, able to build practical products from idea to deployment while continuing to grow in web, backend, and applied AI.",
      },
      skills: {
        eyebrow: "Skills",
        title: "Technologies and capabilities I am developing.",
        intro:
          "I group my skills into frontend, backend, database, cloud/devops, tools, soft skills, and languages for easier scanning.",
        groups: {
          frontend: "Frontend",
          backend: "Backend",
          database: "Database",
          cloud: "Cloud & DevOps",
          tools: "Tools",
          soft: "Soft skills & languages",
        },
        soft: {
          problem: "Problem analysis and requirement breakdown",
          teamwork: "Teamwork and technical communication",
          learning: "Self-learning, documentation reading, and technology experiments",
          language: "Vietnamese, English for reading technical documentation",
        },
      },
      contact: {
        eyebrow: "Contact",
        title: "Connect with me.",
        intro:
          "I am open to discussing internships, study work, collaboration, or topics related to software development.",
        labels: {
          email: "Email",
          phone: "Phone",
          address: "Address",
        },
        socialTitle: "Social links",
      },
      footer: {
        text: "© 2026 Vo Trinh Khang. Personal portfolio.",
      },
    },
  };

  function getSavedLanguage() {
    const saved = localStorage.getItem(LANG_KEY);
    return supportedLanguages.includes(saved) ? saved : "vi";
  }

  function getValue(path, language) {
    return path.split(".").reduce((value, key) => value && value[key], translations[language]);
  }

  function applyLanguage(language) {
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getValue(element.dataset.i18n, language);
      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(";").forEach((entry) => {
        const [attribute, path] = entry.split(":").map((item) => item.trim());
        const value = getValue(path, language);
        if (attribute && typeof value === "string") {
          element.setAttribute(attribute, value);
        }
      });
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setActiveSection(sectionId) {
    document.querySelectorAll("[data-section]").forEach((link) => {
      const isActive = link.dataset.section === sectionId;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function scrollToSection(sectionId, updateHash) {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(sectionId);

    if (updateHash) {
      history.pushState(null, "", `#${sectionId}`);
    }
  }

  function bindSectionNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const sectionId = link.getAttribute("href").slice(1);

        if (!sectionId || !document.getElementById(sectionId)) {
          return;
        }

        event.preventDefault();
        scrollToSection(sectionId, true);
      });
    });
  }

  function observeActiveSection() {
    const sections = [...document.querySelectorAll("[data-nav-section]")];

    if (!("IntersectionObserver" in window)) {
      setActiveSection(location.hash.replace("#", "") || "home");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.dataset.navSection);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.08, 0.18, 0.32, 0.48],
      },
    );

    sections.forEach((section) => observer.observe(section));
  }

  function bindLanguageSwitch() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        const language = button.dataset.language;
        if (!supportedLanguages.includes(language)) {
          return;
        }

        localStorage.setItem(LANG_KEY, language);
        applyLanguage(language);
      });
    });
  }

  function initPointerEffects() {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const glow = document.createElement("div");
    const dot = document.createElement("div");
    glow.className = "cursor-glow";
    dot.className = "cursor-dot is-hidden";
    document.body.prepend(glow, dot);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    function renderCursor() {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;
      dot.style.left = `${targetX}px`;
      dot.style.top = `${targetY}px`;
      requestAnimationFrame(renderCursor);
    }

    window.addEventListener("pointermove", (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.classList.add("is-visible");
      dot.classList.remove("is-hidden");
    });

    function hideCursor() {
      glow.classList.remove("is-visible");
      dot.classList.add("is-hidden");
    }

    document.documentElement.addEventListener("pointerleave", hideCursor);
    window.addEventListener("blur", hideCursor);

    document.querySelectorAll("a, button, .logo-grid img, .contact-item, .skill-group").forEach((element) => {
      element.addEventListener("pointerenter", () => dot.classList.add("is-hovering"));
      element.addEventListener("pointerleave", () => dot.classList.remove("is-hovering"));
    });

    document
      .querySelectorAll(
        ".stats-strip article, .profile-card, .about-content article, .skill-group, .contact-item, .social-panel, .portrait-panel",
      )
      .forEach((card) => {
        card.addEventListener("pointermove", (event) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--card-x", `${event.clientX - rect.left}px`);
          card.style.setProperty("--card-y", `${event.clientY - rect.top}px`);
        });
      });

    renderCursor();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const initialSection = location.hash.replace("#", "") || "home";

    bindSectionNavigation();
    bindLanguageSwitch();
    applyLanguage(getSavedLanguage());
    observeActiveSection();
    setActiveSection(document.getElementById(initialSection) ? initialSection : "home");
    initPointerEffects();
  });
})();
