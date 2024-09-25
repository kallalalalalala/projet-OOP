class Produit {
    constructor(nom, prix, quantite,id) {
        this.id = id;  // id unique du produit
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
    }

    //méthodes d'affichage
    afficherProduit() {

        console.log(`ID: ${this.id}, Nom: ${this.nom}, Prix: ${this.prix}, Quantité: ${this.quantite}`);
    }
    // supprimer un produit  a traves son id

    // creer un panier et ajouter plusieur produit 
    creerPanier() {
        let panier = [];
        panier.push(this);
        return panier;
    }


}

//cration de produit pour tester

let produit1 = new Produit("Apple", 15, 10, 1);
let produit2 = new Produit("Banana", 20, 5, 2);
let produit3 = new Produit("Mango", 25, 20, 3);
let produit4 = new Produit("Orange", 30, 20, 4);

//ajouter tous les produits dans le panier 

let panier = produit1.creerPanier();
panier.push(produit2);
panier.push(produit3);
panier.push(produit4);

//afficher le panier

panier.forEach(produit => {
    produit.afficherProduit();
});

//calculer le prix total des produits du panier 

let prixTotal = panier.reduce((total, produit) => {
    return total + produit.prix * produit.quantite;
}, 0);

console.log(`Prix total du panier : ${prixTotal}`);

//supprimer un produit a traves son id

panier = panier.filter(produit => produit.id!== 2);

//afficher le panier après suppression

panier.forEach(produit => {
    produit.afficherProduit();
});


