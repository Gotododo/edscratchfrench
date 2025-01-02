// blocks categories
var categoryMenuItems = document.getElementsByClassName("scratchCategoryMenuItem");

for (var i = 0; i < categoryMenuItems.length; i++) {
    var translation = null;

    var splitIndex = categoryMenuItems[i].innerHTML.indexOf("<");

    var menuTitle = categoryMenuItems[i].innerHTML.substring(0, splitIndex);
    var menuDot = categoryMenuItems[i].innerHTML.substring(splitIndex);

    switch (menuTitle) {
        case "Drive":
            translation = "Mouvement";
            break;
        case "LEDs":
            translation = "Lumières";
            break;
        case "Sound":
            translation = "Sons";
            break;
        case "Data":
            translation = "Données";
            break;
        case "Events":
            translation = "Événements";
            break;
        case "Control":
            translation = "Contrôle";
            break;
        case "Sensing":
            translation = "Capteurs";
            break;
        case "Operators":
            translation = "Opérateurs";
            break;
        case "Comment":
            translation = "Commentaires";
            break;
    }

    if (translation != null) {
        categoryMenuItems[i].innerHTML = translation + menuDot;
    }
}