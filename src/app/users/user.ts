export class User {
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public numJoueur?: number,
    public fbID?: number,
    public fbName?: string,
    public age?: number,
    public licenceID?: number,
    public team?: string,
    public type?: string,
    public adresse?: string,
    public birthday?: Date
  ) {  }
}