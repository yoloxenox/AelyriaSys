// Import sheet classes.
import AelyriaActorSheet from "./sheets/aelyriaActorSheet.mjs";
import AelyriaItemSheet from "./sheets/aelyriaItemSheet.mjs";
// Import helper/utility classes and constants.

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', async function() {

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("aelyria", AelyriaActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("aelyria", AelyriaItemSheet, { makeDefault: true });

});
