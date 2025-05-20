//connection au fichier de data 
fetch("data.json")
    .then(rep => rep.json())
    .then(data => {


        
        affiche(data)


    })


//connection au fichier de data 
fetch("articles-data.json")
.then(rep => rep.json())
.then(data => {


    
    afficheArticle(data)


})

// role afficher dans l'html et stock les donnee dans des variable
// paramettre donnee
// return pas affiche
function afficheArticle(donnee) {
    donnee.forEach(article => {

        let titre = article.titre
        let date = article.date
        let img = article.img
        let auteur = article.auteur
        let resume = article.resume


// role afficher dans la section qui a l'id "article"
        document.getElementById("article").innerHTML += `
 <div class="card large-6 flex gap align-center">
    <!-- partie gauche -->
    <img
      src="${img}"
      alt="image de steve le poisson en crochet"
      class="large-6 img-card"
    />

    <!-- partie de droite -->
    <div class="large-6 flex gap-12 ">
      <h3>${titre}</h3>
      <p>
        ${resume}
      </p>

      <!-- prix + bouton -->
      <div class="flex justify-between large-12 align-center">
        <p>${date}</p>
        <p>${auteur}</p>
        <p class="btn">Lire l'article</p>
      </div>
    </div>
  </div>
        `
    });

}





// Parametre : le tableau d'ingredient a parcourir
// retour : une chine de caractere avec tous les <li> quantite unite aliment</li>
function trierIngredients(tableauIngredients){
        let liste =""
        tableauIngredients.forEach(ingredient => {
            liste+= `<li>${ingredient.quantite} ${ingredient.unite} ${ingredient.aliment}</li>`
        });
        
        return liste

}


 
 // role cherche les etape et cree un li avec les etapes
 // Parametre : le tableau d'Etapes a parcourir
 // retour : une chaine de caractere avec tous les <li> numeroEtape descEtape </li>
function trierEtape(tableauEtape){
    let liste =""
    tableauEtape.forEach(etapes => {
        liste+= `<li>${etapes.descEtape}</li>`
    });
    
    return liste

}




// role afficher dans l'html et stock les donnee dans des variable
// paramettre donnee
// return pas affiche
function affiche(donnee) {
    donnee.forEach(produits => {

        let nom = produits.nom
        let description = produits.desc
        let difficulte = produits.difficulte
        let tempPreparation = produits.tempPreparation
        let tempCuisson = produits.tempCuisson
        let portions = produits.portions
        let ingredients = trierIngredients(produits.ingredients)
        let etapes = trierEtape (produits.etapes)
        let img = produits.img



// role afficher dans la section qui a l'id "carteContainer"
        document.getElementById("carteContainer").innerHTML += `

            <div class="card">
            <div class="flex gap16 align-center">
                <h1>${nom}</h1>
                
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">favorite</span></a>
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">
                    share
                    </span></a>   
                
            </div>
            <!-- 3 colonnes -->
            <div class="flex align-start gap32 mt-16">
                <!-- Partie images -->
                <div class="large-3">
                    <div class="align-start flex gap16">
                        <div class="large-12">
                            <img src="${img}" alt="" class="responsive">
                            <div class="legende">${nom}</div>
                        </div>
                        <div class="large-4">
                            <img src="${img}" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="${img}" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="${img}" alt="" class="responsive">
                        </div>    
                    </div>
                </div>
                <!-- Partie ingredients-->
                <div class="gap32 large-3">
                    <div class="flex gap16">
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            restaurant
                            </span>4</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            alarm
                            </span>30min</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            local_fire_department
                            </span>30min</p>
                    </div>
                    <div>
                        <h2>Détails</h2>
                        <p class="text-orange">
                        ${description}
                        </p>
                    </div>
                    <div>
                        <h2>Ingrédients</h2>
                        <ul>
                        ${ingredients}
                        </ul>
                    </div>

                </div>
                <!-- Partie etapes -->
                <div class="large-6">
                    <h2>Etapes</h2>
                    <ol>
                        ${etapes}
                    </ol>
                </div>
            </div>
        </div>
            
            `
    });

}


//role variable input qui stock les element ecrit dans l'input

const input = document.getElementById("recherche")
input.addEventListener("input",()=>{

    

})









