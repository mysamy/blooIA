const buttonQuestion = document.querySelectorAll(".question__button");

buttonQuestion.forEach((btn) => {
      btn.addEventListener("click", () => {
            const container = btn.closest(".question__container");
            const answer = container.querySelector(".question__text");
            answer.classList.toggle("question__text--active");
            btn.classList.toggle("question__button--click");
      });
});

const buttonAdvantage = document.querySelector(".compliance__button--advantage");
const buttonCompliance = document.querySelector(".compliance__button--compliance");

const compliance = document.querySelector(".compliance__content--compliance");
const advantage = document.querySelector(".compliance__content--advantage");

function toggleSection(show, hide) {
      show.style.display = "flex";
      hide.style.display = "none";
}

buttonCompliance.addEventListener("click", () => {
      toggleSection(compliance, advantage);
      buttonCompliance.classList.add("compliance__button--pressed");
      buttonCompliance.classList.remove("compliance__button--unpressed");
      buttonAdvantage.classList.remove("compliance__button--pressed");
      buttonAdvantage.classList.add("compliance__button--unpressed");
});

buttonAdvantage.addEventListener("click", () => {
      toggleSection(advantage, compliance);
      buttonAdvantage.classList.add("compliance__button--pressed");
      buttonAdvantage.classList.remove("compliance__button--unpressed");
      buttonCompliance.classList.remove("compliance__button--pressed");
      buttonCompliance.classList.add("compliance__button--unpressed");
});

// hero
const featureAudit = document.querySelector(".feature--audit");
const featureEdition = document.querySelector(".feature--edition");
const featureAgent = document.querySelector(".feature--agent");
const featureTest = document.querySelector(".feature--test");

const tableauFeature = [
      {
            icon: "fa-eye",
            title: "Audit",
            description: "BlooAI effectue un audit automatique de votre site pour détecter les erreurs majeures d'accessibilité.",
      },
      {
            icon: "fa-pencil",
            title: "Edition",
            description: "BlooAI effectue un audit automatique de votre site pour détecter les erreurs majeures d'accessibilité.",
      },
      {
            icon: "fa-brain",
            title: "Agent IA",
            description: "BlooAI effectue un audit automatique de votre site pour détecter les erreurs majeures d'accessibilité.",
      },
      {
            icon: "fa-user-doctor",
            title: "Tests",
            description: "BlooAI effectue un audit automatique de votre site pour détecter les erreurs majeures d'accessibilité.",
      },
];
const cardFeature = document.querySelector(".hero__feature-description");
function createCard(feature) {
      cardFeature.innerHTML = "";
      cardFeature.classList.add("hero__feature-description");
      const containerFeature = document.createElement("div");
      const icon = document.createElement("i");
      icon.classList.add("feature__icon", "fas", "fa-9x", "fa-responsive", feature.icon);
      cardFeature.appendChild(icon);

      const title = document.createElement("h3");
      title.textContent = feature.title;

      containerFeature.appendChild(title);
      containerFeature.classList.add("hero__feature-content");

      const desc = document.createElement("p");
      desc.textContent = feature.description;
      containerFeature.appendChild(desc);
      cardFeature.append(icon, containerFeature);

      handleResponsiveChange();
}
featureAudit.addEventListener("click", () => createCard(tableauFeature[0]));
featureEdition.addEventListener("click", () => createCard(tableauFeature[1]));
featureAgent.addEventListener("click", () => createCard(tableauFeature[2]));
featureTest.addEventListener("click", () => createCard(tableauFeature[3]));

// Responsive input URL
const mediaQuery450 = window.matchMedia("(max-width: 450px)");
const mediaQuery900 = window.matchMedia("(max-width: 900px)");
function handleResponsiveChange() {
      const div = document.querySelector(".fa-responsive");
      if(!div) return;
       div.classList.remove("fa-9x", "fa-5x", "fa-3x");

  if (window.innerWidth <= 450) {
    div.classList.add("fa-3x");
  } else if (window.innerWidth <= 900) {
    div.classList.add("fa-5x");
  } else {
    div.classList.add("fa-9x");
  }
}
mediaQuery450.addEventListener("change", handleResponsiveChange);
mediaQuery900.addEventListener("change", handleResponsiveChange);
handleResponsiveChange();

function updatePlaceholder() {
      const input = document.getElementById("url");
      if (window.innerWidth <= 450) {
            input.placeholder = "URL";
      } else {
            input.placeholder = "Entrez une URL";
      }
}

// nav bouton burger déroulant

const buttonMenu = document.querySelector(".button-burger");
const menuDialog = document.querySelector(".modal-nav");
const iconButton = document.querySelector(".button-burger__icon");

buttonMenu.addEventListener("click", () => {
      if (menuDialog.open) {
            menuDialog.close();
            menuDialog.classList.remove("is-visible");
            iconButton.classList.add("fa-angle-down");
            iconButton.classList.remove("fa-angle-up");
      } else {
            menuDialog.show();
            menuDialog.classList.add("is-visible");
            iconButton.classList.add("fa-angle-up");
            iconButton.classList.remove("fa-angle-down");
      }
});
