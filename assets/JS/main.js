// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


const teams = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "./assets/img/wayne-barnett-founder-ceo.jpg", 
    }, 

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "./assets/img/angela-caroll-chief-editor.jpg", 
    }, 

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "./assets/img/walter-gordon-office-manager.jpg", 
    }, 

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "./assets/img/angela-lopez-social-media-manager.jpg", 
    }, 

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "./assets/img/scott-estrada-developer.jpg", 
    }, 

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "./assets/img/barbara-ramos-graphic-designer.jpg", 
    },
]

for (let i = 0; i < teams.length; i++){
    let arrayTeams = teams[i]

    console.log(arrayTeams)

    document.querySelector("main").innerHTML += `
    <div>
       <img class="card-img-top" src='${arrayTeams.image}' alt="images team"/>
       <div>
          <h1>${arrayTeams.name}</h1>
          <p>${arrayTeams.role}</p>
        </di
    </div>
 `
}