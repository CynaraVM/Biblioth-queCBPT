function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.classList.contains('visible')) {
        content.classList.remove('visible');
        setTimeout(function() {
            content.style.display = 'none';
        }, 500); // Correspond à la durée de la transition
    } else {
        content.style.display = 'block';
        setTimeout(function() {
            content.classList.add('visible');
        }, 10); // Légère attente pour que le changement d'affichage soit pris en compte
    }
}