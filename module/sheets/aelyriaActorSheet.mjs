export default class AelyriaActorSheet extends ActorSheet{
    get template() {

        console.log(`Aelyria | Récupération du fichier html ${this.actor.type}-sheet.`);
        return `systems/aelyria/templates/sheets/actor/${this.actor.type}-sheet.html`;

    }

    getData() {
        const context  = super.getData();

        const actorData = this.actor.toObject(false);
        context.system = actorData.system;
        context.flags = actorData.flags;
  
    

    }
}