// La classe Contact permet de créer l'objet contact
// L'objet contact contient les données de
// du client qui passe la commande sur le site
// Pour construire l'objet contact
// On passe en paramètre au constructeur
// le prénom (firstName)
// le nom (lastName)
// l'adress (address)
// la ville (city)
// l'email (email)
class Contact{
    constructor(firstName, lastName, address, city, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.email = email;
    }
}