//connection au fichier de data 
fetch("data.json")
    .then(rep => rep.json())
    .then(data => {


        
        affiche(data)


    })

// Parametre : le tableau d'ingredient a parcourir
// retour : une chine de caractere avec tous les <li> quantite unite aliment</li>
function trierIngredients(tableauIngredients){
        let liste =""
        tableauIngredients.forEach(ingredient => {
            liste+= `<li>${ingredient.quantite} ${ingredient.unite} ${ingredient.aliment}</li>`
        });
        
        return liste

}


 // Parametre : le tableau d'Etapes a parcourir
 // // retour : une chine de caractere avec tous les <li> numeroEtape descEtape </li>

function trierEtape(tableauEtape){
    let liste =""
    tableauEtape.forEach(etapes => {
        liste+= `<li>${etapes.numeroEtape} ${etapes.descEtape}</li>`
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