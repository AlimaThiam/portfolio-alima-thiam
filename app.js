/* ==========================================================================
   DONNÉES DES PROJETS (POUR LES MODALES DETRAIL)
   ========================================================================== */
const projectsData = {
    "1": {
        title: "E-Stock Manager",
        tag: "PHP / Laravel / MySQL",
        image: "assets/project1.jpg",
        description: "Une application web robuste de gestion des stocks et de facturation conçue pour automatiser les flux d'approvisionnement d'une PME. Ce système résout les problèmes de surstockage et de rupture en offrant un suivi en temps réel des articles, des fournisseurs et des commandes clients.",
        features: [
            "Authentification sécurisée avec rôles utilisateurs (Administrateur, Gestionnaire de stock)",
            "Tableau de bord de suivi du niveau de stock en temps réel avec indicateurs visuels",
            "Alertes automatiques par e-mail en cas de dépassement du seuil critique de réapprovisionnement",
            "Génération dynamique et téléchargement de factures et de bons de commande au format PDF",
            "Module de recherche avancée et de filtrage multicritère des articles"
        ],
        techs: ["PHP", "Laravel", "MySQL", "Bootstrap", "Composer", "Git"],
        demoLink: "#",
        repoLink: "https://github.com/AlimaThiam"
    },
    "2": {
        title: "PortalRH",
        tag: "C# / .NET Core / SQL Server",
        image: "assets/project2.jpg",
        description: "Un portail d'entreprise collaboratif destiné aux services des ressources humaines. Il simplifie la gestion des demandes de congés et le remboursement des notes de frais. L'application intègre un workflow de validation hiérarchique avec notifications par e-mail.",
        features: [
            "Formulaire de demande de congés avec calcul automatique et déduction du solde restant",
            "Dépôt de notes de frais en ligne avec possibilité de joindre des justificatifs (fichiers ou images)",
            "Workflow de validation à double niveau (Manager puis Responsable RH)",
            "Vue calendrier d'équipe partagée pour planifier les absences et éviter les conflits d'effectifs",
            "Export des états récapitulatifs pour l'intégration directe en comptabilité/paie"
        ],
        techs: ["C#", ".NET Core 8", "Entity Framework", "SQL Server", "HTML5/CSS3", "JavaScript"],
        demoLink: "#",
        repoLink: "https://github.com/AlimaThiam"
    },
    "3": {
        title: "Sales Analytics Dashboard",
        tag: "Power BI / SQL Server / DAX",
        image: "assets/project3.jpg",
        description: "Un projet complet de Business Intelligence (BI) visant à consolider et analyser les performances commerciales d'une entreprise multi-site. De la modélisation de la base de données relationnelle SQL Server au reporting interactif sous Power BI, cette solution guide les décisions stratégiques.",
        features: [
            "Conception d'un schéma en étoile (tables de faits et de dimensions) optimisé pour l'analyse",
            "Processus ETL (Extract-Transform-Load) pour nettoyer et structurer les données de vente brutes",
            "Écriture de mesures complexes en langage DAX pour calculer le chiffre d'affaires, la marge et les prévisions",
            "Création de visuels interactifs : cartes géographiques des ventes, évolution temporelle du CA, top vendeurs",
            "Filtres dynamiques par période (année, trimestre, mois), région et gamme de produits"
        ],
        techs: ["Power BI", "SQL Server", "DAX", "T-SQL", "Power Query", "Modélisation en étoile"],
        demoLink: "#",
        repoLink: "https://github.com/AlimaThiam"
    },
    "4": {
        title: "Valentine Site",
        tag: "HTML5 / CSS3 / JavaScript",
        image: "assets/valentine_site.jpg",
        description: "Un site internet interactif et romantique créé spécialement pour la Saint-Valentin. Ce projet met en valeur des animations fluides en CSS, des effets interactifs en JavaScript et une esthétique soignée et dynamique.",
        features: [
            "Animations de cœurs et transitions douces en CSS pur",
            "Boutons interactifs avec logique de réponse dynamique en JavaScript",
            "Rendu entièrement responsive pour mobiles et tablettes",
            "Thématique de couleurs harmonieuse (dégradés rose, rouge et blanc)"
        ],
        techs: ["HTML5", "CSS3", "JavaScript", "Animations CSS", "Git"],
        demoLink: "https://alimathiam.github.io/valentine-site/",
        repoLink: "https://github.com/AlimaThiam/valentine-site"
    },
    "5": {
        title: "Neenawaw",
        tag: "HTML5 / CSS3 / JavaScript",
        image: "assets/neenawaw.jpg",
        description: "Un site web interactif et personnalisé créé pour une amie, racontant son histoire d'amour depuis sa rencontre avec son partenaire jusqu'à la demande en mariage. Il intègre une annonce officielle de mariage, un compte à rebours dynamique et une carte pour la localisation.",
        features: [
            "Storytelling interactif retraçant le parcours de vie du couple",
            "Annonce interactive de la demande en mariage et de la date",
            "Compte à rebours dynamique en temps réel avant le jour J",
            "Intégration d'une carte interactive (Maps) pour guider les invités vers le lieu de l'événement",
            "Mise en page thématique avec des animations douces et romantiques"
        ],
        techs: ["HTML5", "CSS3", "JavaScript", "Google Maps API", "Countdown Timer", "Git"],
        demoLink: "https://alimathiam.github.io/neenawaw/",
        repoLink: "https://github.com/AlimaThiam/neenawaw"
    },
    "6": {
        title: "Portfolio Personnel",
        tag: "HTML5 / CSS3 / JavaScript",
        image: "assets/portfolio_site.png",
        description: "Conception et développement de ce portfolio professionnel complet. Il sert de vitrine pour présenter mes compétences mixtes en informatique de gestion, développement d'applications, comptabilité et bases de données.",
        features: [
            "Design system moderne avec mode sombre et clair dynamique",
            "Effet d'écriture dynamique en JavaScript (typing effect) pour les rôles",
            "Formulaire de contact AJAX entièrement connecté et opérationnel avec FormSubmit",
            "Grille de projets avec filtres de catégories interactifs",
            "Modales de détails pour chaque projet avec animations de zoom"
        ],
        techs: ["HTML5", "CSS3", "JavaScript", "FormSubmit API", "Git", "Design System"],
        demoLink: "https://alimathiam.github.io/portfolio-alima-thiam/",
        repoLink: "https://github.com/AlimaThiam/portfolio-alima-thiam"
    },
    "7": {
        title: "Yaram Jangat",
        tag: "WinDev / HFSQL / WLanguage",
        image: "assets/yaram_jangat.png",
        description: "Études et mise en place d'une application de bureau robuste pour la gestion des rendez-vous et le suivi médical des patients. Réalisé et soutenu avec succès dans le cadre de ma soutenance de fin d'études.",
        features: [
            "Gestion des fiches d'informations patients et de leur dossier médical complet",
            "Planification et suivi des rendez-vous et motifs de consultation",
            "Module complet de consultation (diagnostics, traitements et ordonnances)",
            "Base de données relationnelle locale performante sous HFSQL",
            "Génération d'ordonnances imprimables et d'états de visites",
            "Requêtes personnalisées et statistiques sur l'activité de la clinique"
        ],
        perspectives: [
            "Architecture Back-Office : L'application développée sous WinDev se concentre sur le Back-Office (les fonctionnalités internes pour les médecins et secrétaires). L'accès direct du patient (Front-Office) a été modélisé dans le mémoire et constitue une perspective d'évolution.",
            "Partiellement atteint : Implémenter l'exportation des dossiers médicaux au format Excel pour les utilisateurs.",
            "Partiellement atteint : Peaufiner et intégrer pleinement l'envoi de rappels automatiques pour les rendez-vous et prises de médicaments.",
            "À développer : Compléter la phase de développement du système d'alertes en temps réel pour le suivi et le renouvellement des prescriptions thérapeutiques."
        ],
        techs: ["WinDev 25", "WLanguage", "HFSQL", "Modélisation de données", "Conception d'IHM", "Génération d'États"],
        demoLink: "yaram_jangat_demo.html",
        repoLink: "https://github.com/AlimaThiam/YaramJangat"
    },
    "8": {
        title: "GesSchool",
        tag: "C# / SQL Server / Windows Forms",
        image: "assets/ges_school.jpg",
        description: "Application de bureau de gestion d'établissement scolaire développée en C#. Elle permet de piloter l'administration des élèves, l'organisation des classes, les inscriptions et le suivi des notes.",
        features: [
            "Gestion complète des inscriptions et réinscriptions des élèves",
            "Organisation et administration des classes et des départements scolaires",
            "Attribution des matières d'enseignement et gestion des enseignants",
            "Saisie et calcul automatique des moyennes avec édition des bulletins de notes",
            "Base de données SQL Server structurée pour assurer la persistance et l'intégrité des informations"
        ],
        techs: ["C#", "SQL Server", "Windows Forms", "ADO.NET", "Visual Studio"],
        demoLink: "csharp_projects_demo.html?project=ges_school",
        repoLink: "https://github.com/AlimaThiam/GesSchool"
    },
    "9": {
        title: "Gestion des Ventes",
        tag: "C# / Windows Forms / SQL Server",
        image: "assets/gestion_ventes.jpg",
        description: "Logiciel Windows Form d'administration des ventes et de suivi d'inventaire. Conçu pour automatiser la facturation et le suivi de performance commerciale d'une entreprise.",
        features: [
            "Enregistrement et suivi des transactions commerciales et ventes au quotidien",
            "Suivi des niveaux de stocks en temps réel avec alertes de réapprovisionnement",
            "Génération et édition de factures de vente au format imprimable",
            "Rapports de ventes et suivi du chiffre d'affaires global"
        ],
        techs: ["C#", "SQL Server", "Windows Forms", "ADO.NET", "Génération d'États"],
        demoLink: "csharp_projects_demo.html?project=gestion_ventes",
        repoLink: "https://github.com/AlimaThiam/gestiondesventes"
    },
    "10": {
        title: "MDIParent MySQL",
        tag: "C# / MySQL / Windows Forms",
        image: "assets/mdi_parent_mysql.jpg",
        description: "Application multi-fenêtres (MDI - Multiple Document Interface) connectée à une base de données MySQL. Ce projet met en valeur la conception d'interfaces de gestion centralisées et fluides.",
        features: [
            "Architecture multi-fenêtres (MDI) permettant d'ouvrir plusieurs modules enfants simultanément",
            "Connexion ADO.NET dynamique à un serveur de base de données relationnelle MySQL",
            "Interface d'administration centralisée avec barre de navigation et menu dynamique",
            "Optimisation des requêtes SQL de lecture et d'écriture"
        ],
        techs: ["C#", "MySQL", "MDI Architecture", "ADO.NET", "SQL Server"],
        demoLink: "csharp_projects_demo.html?project=mdi_parent",
        repoLink: "https://github.com/AlimaThiam/MDIParentMySQL"
    },
    "11": {
        title: "CRUD Scolaire",
        tag: "C# / Windows Forms / SQL Server",
        image: "assets/crud_scolaire.jpg",
        description: "Un projet pratique de gestion d'étudiants implémentant les opérations fondamentales de création, lecture, mise à jour et suppression (CRUD).",
        features: [
            "Opérations CRUD complètes (Create, Read, Update, Delete) sur la table des étudiants",
            "Formulaire de saisie dynamique avec contrôle de validité des champs de saisie",
            "Grid View réactif pour la consultation et le filtrage rapide des dossiers élèves",
            "Logique d'accès aux données optimisée avec SQL Server"
        ],
        techs: ["C#", "SQL Server", "Windows Forms", "ADO.NET", "CRUD Logic"],
        demoLink: "csharp_projects_demo.html?project=crud_scolaire",
        repoLink: "https://github.com/AlimaThiam/crudscolaire"
    }
};

/* ==========================================================================
   INITIALISATION ET GESTION DES EVENEMENTS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Éléments du DOM
    const header = document.querySelector(".header");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.getElementById("menu-btn");
    const themeToggle = document.getElementById("theme-toggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    
    // 1. STICKY HEADER & ACTIVE NAVIGATION LINK ON SCROLL
    window.addEventListener("scroll", () => {
        // Sticky Header
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        // Highlighter de lien actif
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === currentSection) {
                link.classList.add("active");
            }
        });

        // Fermer le menu mobile au défilement
        if (navbar.classList.contains("active")) {
            closeMenu();
        }
    });

    // Fonction utilitaire pour fermer le menu mobile (DRY)
    function closeMenu() {
        navbar.classList.remove("active");
        if (menuBtn) {
            const icon = menuBtn.querySelector("i");
            icon.classList.replace("bx-x", "bx-menu");
        }
    }

    // 2. TOGGLE NAVIGATION MENU (MOBILE)
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navbar.classList.toggle("active");
            const icon = menuBtn.querySelector("i");
            if (navbar.classList.contains("active")) {
                icon.classList.replace("bx-menu", "bx-x");
            } else {
                icon.classList.replace("bx-x", "bx-menu");
            }
        });
    }

    // Fermer le menu mobile lors d'un clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // 3. DARK / LIGHT THEME TOGGLE
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
    });

    // 4. HERO SECTION TYPING EFFECT (EFFET D'ECRITURE)
    const typingTextElement = document.querySelector(".typing-text");
    if (typingTextElement) {
        const roles = [
            "Développeuse Web & Mobile",
            "Double Diplômée en Informatique (ISI / UNCHK)",
            "Spécialiste en Informatique de Gestion",
            "Développeuse d'Applications Métiers"
        ];
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;
        let erasingDelay = 50;
        let newTextDelay = 2000; // Pause avant d'effacer le rôle actuel

        function type() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = erasingDelay;
            } else {
                typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 100;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                typingDelay = newTextDelay;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingDelay = 500;
            }

            setTimeout(type, typingDelay);
        }

        // Lancer l'animation
        setTimeout(type, 1000);
    }

    // 5. FILTRAGE DYNAMIQUE DES PROJETS
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Retirer la classe active de tous les boutons et l'ajouter au clic
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                
                // Animation de transition fluide
                card.style.opacity = "0";
                card.style.transform = "scale(0.9) translateY(15px)";
                
                setTimeout(() => {
                    if (filterValue === "all" || category === filterValue) {
                        card.classList.remove("hide");
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "scale(1) translateY(0)";
                        }, 50);
                    } else {
                        card.classList.add("hide");
                    }
                }, 300);
            });
        });
    });

    // 6. GESTION DES FENETRES MODALES POUR LES PROJETS
    const modal = document.getElementById("project-modal");
    const closeModalBtn = document.querySelector(".close-modal");

    // Fonction utilitaire pour remplir une liste dynamique (DRY)
    function populateList(container, items, tagName, className) {
        container.innerHTML = "";
        items.forEach(item => {
            const el = document.createElement(tagName);
            if (className) el.className = className;
            el.textContent = item;
            container.appendChild(el);
        });
    }

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project-id");
            const data = projectsData[projectId];
            
            if (data) {
                // Remplissage dynamique des champs de la modale
                document.getElementById("modal-project-img").src = data.image;
                document.getElementById("modal-project-img").alt = data.title;
                document.getElementById("modal-project-tag").textContent = data.tag;
                document.getElementById("modal-project-title").textContent = data.title;
                document.getElementById("modal-project-description").textContent = data.description;

                // Remplissage des fonctionnalités (utilise populateList)
                populateList(document.getElementById("modal-project-features"), data.features, "li");

                // Remplissage des perspectives (si présentes)
                const perspectivesSection = document.getElementById("modal-project-perspectives-section");
                const perspectivesList = document.getElementById("modal-project-perspectives");
                if (data.perspectives && data.perspectives.length > 0) {
                    perspectivesSection.style.display = "block";
                    populateList(perspectivesList, data.perspectives, "li");
                } else {
                    perspectivesSection.style.display = "none";
                }

                // Remplissage des technos (utilise populateList)
                populateList(document.getElementById("modal-project-techs"), data.techs, "span", "modal-tech-tag");

                // Remplissage des boutons d'actions
                const linksContainer = document.getElementById("modal-project-links");
                const isRealDemo = data.demoLink !== "#";
                linksContainer.innerHTML = `
                    <a href="${data.repoLink}" target="_blank" class="btn btn-secondary"><i class='bx bxl-github'></i> Code Source</a>
                    <a href="${data.demoLink}" ${isRealDemo ? 'target="_blank"' : 'onclick="alert(\'Ceci est une simulation de démonstration en local.\'); return false;"'} class="btn btn-primary"><i class='bx bx-link-external'></i> Démo Live</a>
                `;

                // Ouverture de la modale
                modal.classList.add("active");
                document.body.style.overflow = "hidden"; // Bloque le défilement arrière
            }
        });
    });

    // Fermeture de la modale
    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // Rétablit le défilement
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fermer la modale avec la touche Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    // 7. ENVOI DU FORMULAIRE DE CONTACT (SIMULÉ)
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector(".btn-submit");
            const originalBtnContent = submitBtn.innerHTML;
            
            // État de chargement
            submitBtn.disabled = true;
            submitBtn.innerHTML = "Envoi en cours... <i class='bx bx-loader-alt bx-spin'></i>";
            formStatus.textContent = "";
            formStatus.className = "form-status";

            const data = new FormData(contactForm);
            const jsonObject = Object.fromEntries(data.entries());

            // Envoi de la requête AJAX à FormSubmit
            fetch("https://formsubmit.co/ajax/alimathiam48@gmail.com", {
                method: "POST",
                body: JSON.stringify(jsonObject),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                
                if (response.ok) {
                    response.json().then(resData => {
                        console.log("FormSubmit Response:", resData);
                    });
                    formStatus.textContent = "Message envoyé avec succès ! Merci de m'avoir contactée, je vous répondrai dans les plus brefs délais.";
                    formStatus.className = "form-status success";
                    contactForm.reset();
                    
                    // Masquer le message après 6 secondes
                    setTimeout(() => {
                        formStatus.style.opacity = "0";
                        formStatus.style.transition = "opacity 0.5s ease";
                        setTimeout(() => {
                            formStatus.textContent = "";
                            formStatus.style.opacity = "1";
                        }, 500);
                    }, 6000);
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            formStatus.textContent = data.errors.map(error => error.message).join(", ");
                        } else {
                            formStatus.textContent = "Une erreur est survenue lors de l'envoi du message.";
                        }
                    });
                    formStatus.className = "form-status error";
                }
            })
            .catch(error => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                formStatus.textContent = "Une erreur réseau est survenue. Veuillez réessayer plus tard.";
                formStatus.className = "form-status error";
            });
        });
    }

    // 8. ANIMATIONS D'ENTREE AU SCROLL (INTERSECTION OBSERVER)
    const revealElements = document.querySelectorAll(".skills-card, .project-card, .timeline-item, .contact-card, .contact-form-container");
    
    // Styles de départ pour l'animation en CSS via JS
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // S'assurer que l'animation ne se joue qu'une fois
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
