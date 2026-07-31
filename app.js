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
        repoLink: "https://github.com"
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
        repoLink: "https://github.com"
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
        repoLink: "https://github.com"
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
            navbar.classList.remove("active");
            if (menuBtn) {
                const icon = menuBtn.querySelector("i");
                icon.classList.replace("bx-x", "bx-menu");
            }
        }
    });

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
            navbar.classList.remove("active");
            if (menuBtn) {
                const icon = menuBtn.querySelector("i");
                icon.classList.replace("bx-x", "bx-menu");
            }
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
            "Technicienne Supérieure en Informatique de Gestion",
            "Développeuse d'Applications Métiers (C# / PHP)",
            "Spécialiste Bases de Données (SQL)",
            "Analyste de Données & BI (Power BI)"
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

                // Remplissage des fonctionnalités
                const featuresList = document.getElementById("modal-project-features");
                featuresList.innerHTML = "";
                data.features.forEach(feat => {
                    const li = document.createElement("li");
                    li.textContent = feat;
                    featuresList.appendChild(li);
                });

                // Remplissage des technos
                const techsContainer = document.getElementById("modal-project-techs");
                techsContainer.innerHTML = "";
                data.techs.forEach(tech => {
                    const span = document.createElement("span");
                    span.className = "modal-tech-tag";
                    span.textContent = tech;
                    techsContainer.appendChild(span);
                });

                // Remplissage des boutons d'actions
                const linksContainer = document.getElementById("modal-project-links");
                linksContainer.innerHTML = `
                    <a href="${data.repoLink}" target="_blank" class="btn btn-secondary"><i class='bx bxl-github'></i> Code Source</a>
                    <a href="${data.demoLink}" class="btn btn-primary" onclick="alert('Ceci est une simulation de démonstration en local.'); return false;"><i class='bx bx-link-external'></i> Démo Live</a>
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

            // Simulation d'envoi réseau (1.5 seconde)
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                
                // Statut de succès
                formStatus.textContent = "Message envoyé avec succès ! Merci de m'avoir contactée, je vous répondrai dans les plus brefs délais.";
                formStatus.classList.add("success");
                
                // Réinitialiser le formulaire
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
                
            }, 1500);
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
