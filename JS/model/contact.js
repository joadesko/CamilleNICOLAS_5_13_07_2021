// La classe Contact permet de créer l'objet contact
// L'objet contact contient les données de
// du client qui passe la commande sur le site
// Pour construire l'objet contact
// On passe en paramètre au constructeur
// le prénom (firstName)
// le nom (lastName)
// l'adresse (address)
// le code postale (postCode)
// la ville (city)
// l'email (email)
// les commentaires (commentary)
class Contact{
    constructor(firstName, lastName, address, city, postCode, email, commentary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.postCode = postCode;
        this.city = city;
        this.email = email;
        this.commentary = commentary;
    }
}