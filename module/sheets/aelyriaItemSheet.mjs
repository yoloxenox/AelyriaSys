export default class AelyriaItemSheet extends ItemSheet{
    get template() {

        console.log(`Aelyria | Récupération du fichier html ${this.item.type}-sheet.`);
        return `systems/aelyria/templates/sheets/item/${this.item.type}-sheet.html`;

    }

    getData() {

        const context  = super.getData();

        const itemData = context.item;

        context.system = itemData.system;
        context.flags = itemData.flags;

        return context;
    }
}