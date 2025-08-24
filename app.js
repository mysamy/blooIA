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
      hide.classList.remove("u-active");
      hide.classList.add("u-inactive");
    
      show.classList.remove("u-inactive");
      show.classList.add("u-active");
}
buttonAdvantage.addEventListener("click", () => {
      toggleSection(advantage, compliance);
});
buttonCompliance.addEventListener("click", () => {
      toggleSection(compliance, advantage);
});
buttonCompliance.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleSection(compliance, advantage);
      }
});

buttonAdvantage.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleSection(advantage, compliance);
      }
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
      cardFeature.classList.add("hide");
      requestAnimationFrame(() => {
            cardFeature.addEventListener("transitionend", function handler() {
                  cardFeature.removeEventListener("transitionend", handler);

                  cardFeature.innerHTML = "";
                  cardFeature.classList.remove("hide");
                  cardFeature.classList.add("hero__feature-description", "show");

                  const containerFeature = document.createElement("div");
                  const icon = document.createElement("i");
                  icon.classList.add("fas", "fa-9x", "fa-responsive", feature.icon);
                  icon.setAttribute("aria-hidden", "true");
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
            });
      });
}

featureAudit.addEventListener("click", () => createCard(tableauFeature[0]));
featureEdition.addEventListener("click", () => createCard(tableauFeature[1]));
featureAgent.addEventListener("click", () => createCard(tableauFeature[2]));
featureTest.addEventListener("click", () => createCard(tableauFeature[3]));

// Responsive input URL
featureAudit.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            createCard(tableauFeature[0]);
      }
});
featureEdition.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            createCard(tableauFeature[1]);
      }
});

featureAgent.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            createCard(tableauFeature[2]);
      }
});

featureTest.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            createCard(tableauFeature[3]);
      }
});
