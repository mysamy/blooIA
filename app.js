const buttonQuestion = document.querySelectorAll(".question__button")
console.log(buttonQuestion);

buttonQuestion.forEach((btn) => {
  btn.addEventListener("click", () => {
    const container = btn.closest(".question__container");
    const answer = container.querySelector(".question__text");
    answer.classList.toggle("question__text--active"); 
    btn.classList.toggle("question__button--click")
  });
});

const buttonAdvantage = document.querySelector(".compliance__button--advantage")
const buttonCompliance = document.querySelector(".compliance__button--compliance")

const compliance = document.querySelector(".compliance__content--compliance")
const advantage = document.querySelector(".compliance__content--advantage");
console.log(advantage);

function toggleSection(show, hide) {
  show.style.display = "flex";
  hide.style.display = "none";

}

buttonCompliance.addEventListener("click", () => {
  toggleSection(compliance, advantage);
  buttonCompliance.classList.add("compliance__button--pressed")
  buttonCompliance.classList.remove("compliance__button--unpressed")
  buttonAdvantage.classList.remove("compliance__button--pressed")
  buttonAdvantage.classList.add("compliance__button--unpressed")  
});

buttonAdvantage.addEventListener("click", () => {
  toggleSection(advantage, compliance);
   buttonAdvantage.classList.add("compliance__button--pressed")
  buttonAdvantage.classList.remove("compliance__button--unpressed")
  buttonCompliance.classList.remove("compliance__button--pressed")
  buttonCompliance.classList.add("compliance__button--unpressed")  
});
const featureAudit = document.querySelector(".feature--audit")
const featureEdition = document.querySelector(".feature--edition")
const featureAgent = document.querySelector(".feature--agent")
const featureTest = document.querySelector(".feature--test")

const tableauFeature = [
    {
      icon : "fa-eye",
      title : "Audit",
      description : "BlooAI effectue un audit automatique de votre site pour détecter les erreurs majeures d'accessibilité.",
    },
    {
      icon : "fa-pencil",
      title : "Edition",
      description : "BlooAI effectue un audit automatique de votre site pour détecter les erreurs majeures d'accessibilité.",
    },
     {
      icon : "fa-brain",
      title : "Agent IA",
      description : "BlooAI effectue un audit automatique de votre site pour détecter les erreurs majeures d'accessibilité.",
    },
     {
      icon : "fa-user-doctor",
      title : "Tests",
      description : "BlooAI effectue un audit automatique de votre site pour détecter les erreurs majeures d'accessibilité.",
    }
];
const cardFeature= document.querySelector(".hero__feature-description")
function createCard(feature) {
 
  cardFeature.innerHTML = "";

 
  cardFeature.classList.add("hero__feature-description");
  const containerFeature = document.createElement("div")
  const icon = document.createElement("i");
  icon.classList.add("feature__icon", "fas", "fa-9x", feature.icon);
  cardFeature.appendChild(icon);

  const title = document.createElement("h3");
  title.textContent = feature.title;

  containerFeature.appendChild(title);
  containerFeature.classList.add("hero__feature-content");

  const desc = document.createElement("p");
  desc.textContent = feature.description;
  containerFeature.appendChild(desc);
  cardFeature.append(icon,containerFeature)
}
featureAudit.addEventListener("click", () => createCard(tableauFeature[0]));
featureEdition.addEventListener("click", () => createCard(tableauFeature[1]));
featureAgent.addEventListener("click", () => createCard(tableauFeature[2]));
featureTest.addEventListener("click", () => createCard(tableauFeature[3]));

console.log(featureTest);
console.log(featureAgent);
