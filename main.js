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
        projects: "Dự án",
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
        hello: "Xin chào,",
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
      projects: {
        eyebrow: "Dự án",
        title: "Các project tôi đã xây dựng và phân tích.",
        intro:
          "Bốn project dưới đây thể hiện kinh nghiệm của tôi với hệ thống full-stack, realtime, bản đồ, thanh toán, OCR và RAG.",
        items: {
          cinema: {
            role: "FULL-STACK",
            title: "Cinema Booking System",
            meta: "2026 · Full-stack Project",
            summary:
              "Hệ thống đặt vé rạp phim với luồng khách hàng, trang quản trị, thanh toán online và trợ lý chatbot.",
            highlights: [
              "Xây dựng luồng đặt vé gồm chọn phim, suất chiếu, ghế, combo và thanh toán VNPay.",
              "Thiết kế quản trị cho phim, rạp, phòng, ghế, giá vé, suất chiếu, đơn hàng và dashboard doanh thu.",
              "Tích hợp giữ ghế realtime, email/OTP xác thực tài khoản và chatbot Gemini hỗ trợ tra cứu.",
            ],
          },
          audio: {
            role: "AUDIO GUIDE",
            title: "VinhKhanh Audio Guide",
            meta: "2026 · Seminar Project",
            summary:
              "Nền tảng khám phá khu ẩm thực Vĩnh Khánh với audio đa ngôn ngữ, bản đồ, tour ăn uống và quản trị cửa hàng.",
            highlights: [
              "Phát triển customer web, admin web và shop-owner web cho khám phá quán, món ăn và đơn hàng.",
              "Tích hợp audio thuyết minh theo ngôn ngữ, Python TTS, dịch nội dung, bản đồ và gợi ý tour theo ngân sách.",
              "Xây dựng các luồng quản lý audio, món ăn, cửa hàng, QR, thống kê và thanh toán VNPay.",
            ],
          },
          rag: {
            role: "AI / RAG",
            title: "OCR-RAG Workspace",
            meta: "2026 · AI Research Project",
            summary:
              "Workspace hỏi đáp tài liệu nội bộ kết hợp OCR, Classic RAG, Graph RAG và truy vết nguồn trả lời.",
            highlights: [
              "Xây dựng pipeline upload tài liệu thường và OCR, hỗ trợ tiếng Việt/tiếng Anh, chunking và quản lý project.",
              "Kết hợp vector search, BM25, CrossEncoder và Graph RAG để tăng độ phủ ngữ cảnh khi hỏi đáp.",
              "Thiết kế giao diện chat có citation, xem chunk, xem file, rebuild graph và trực quan hóa node/edge.",
            ],
          },
          bus: {
            role: "REALTIME MAP",
            title: "Smart School Bus Tracking System",
            meta: "2026 · Academic Project",
            summary:
              "Hệ thống quản lý và theo dõi xe buýt đưa đón học sinh theo thời gian thực cho admin, tài xế và phụ huynh.",
            highlights: [
              "Xây dựng các vai trò admin, driver và parent với luồng quản lý học sinh, phụ huynh, tài xế, xe và lịch trình.",
              "Tích hợp bản đồ, marker xe/trạm/trường học, cập nhật vị trí realtime và thông báo qua Socket.IO.",
              "Phát triển lập lịch, định tuyến chuyến đi, tối ưu lộ trình theo hướng TSP và báo cáo sự cố từ tài xế.",
            ],
          },
        },
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
        projects: "Projects",
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
      projects: {
        eyebrow: "Projects",
        title: "Projects I have built and analyzed.",
        intro:
          "These four projects show my work across full-stack systems, realtime maps, online payment, OCR, and RAG.",
        items: {
          cinema: {
            role: "FULL-STACK",
            title: "Cinema Booking System",
            meta: "2026 · Full-stack Project",
            summary:
              "A cinema ticket booking system with customer flows, an admin portal, online payment, and a chatbot assistant.",
            highlights: [
              "Built the ticket-booking flow for movie search, showtime selection, seat holding, combos, and VNPay checkout.",
              "Designed admin management for movies, cinemas, rooms, seats, prices, showtimes, orders, and revenue dashboards.",
              "Integrated realtime seat updates, email/OTP account verification, and a Gemini chatbot for user support.",
            ],
          },
          audio: {
            role: "AUDIO GUIDE",
            title: "VinhKhanh Audio Guide",
            meta: "2026 · Seminar Project",
            summary:
              "A multilingual food-tour platform for Vinh Khanh Street with audio guides, maps, tour planning, and shop management.",
            highlights: [
              "Developed customer, admin, and shop-owner web apps for discovering shops, dishes, audio content, and orders.",
              "Integrated multilingual audio narration, Python TTS, translation, maps, and budget-based food-tour suggestions.",
              "Built management flows for audio, dishes, shops, QR codes, statistics, and VNPay payments.",
            ],
          },
          rag: {
            role: "AI / RAG",
            title: "OCR-RAG Workspace",
            meta: "2026 · AI Research Project",
            summary:
              "An internal document Q&A workspace combining OCR, Classic RAG, Graph RAG, and source tracking.",
            highlights: [
              "Built document upload and OCR pipelines with Vietnamese/English support, chunking, and project management.",
              "Combined vector search, BM25, CrossEncoder reranking, and Graph RAG to improve context coverage.",
              "Designed a chat UI with citations, chunk/file viewing, graph rebuilding, and node/edge visualization.",
            ],
          },
          bus: {
            role: "REALTIME MAP",
            title: "Smart School Bus Tracking System",
            meta: "2026 · Academic Project",
            summary:
              "A realtime school bus management and tracking system for admins, drivers, and parents.",
            highlights: [
              "Built role-based flows for admins, drivers, and parents across students, guardians, drivers, buses, and schedules.",
              "Integrated maps, school/bus/station markers, realtime location updates, and Socket.IO notifications.",
              "Developed scheduling, trip routing, TSP-style route optimization, and driver incident reporting.",
            ],
          },
        },
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

    if (sections.length === 0) {
      setActiveSection("home");
      return;
    }

    let isTicking = false;

    function updateActiveSection() {
      const headerHeight = document.querySelector(".site-header")?.offsetHeight ?? 0;
      const checkpoint = headerHeight + Math.min(window.innerHeight * 0.28, 260);
      let activeSectionId = sections[0].dataset.navSection;

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= checkpoint) {
          activeSectionId = section.dataset.navSection;
        }
      });

      setActiveSection(activeSectionId || "home");
    }

    function requestActiveSectionUpdate() {
      if (isTicking) {
        return;
      }

      isTicking = true;
      requestAnimationFrame(() => {
        isTicking = false;
        updateActiveSection();
      });
    }

    window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", requestActiveSectionUpdate);
    updateActiveSection();
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

    document.querySelectorAll("a, button, .logo-grid img, .contact-item, .skill-group, .project-card").forEach((element) => {
      element.addEventListener("pointerenter", () => dot.classList.add("is-hovering"));
      element.addEventListener("pointerleave", () => dot.classList.remove("is-hovering"));
    });

    document
      .querySelectorAll(
        ".stats-strip article, .profile-card, .about-content article, .skill-group, .project-card, .contact-item, .social-panel, .portrait-panel",
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
