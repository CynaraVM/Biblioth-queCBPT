document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const monthSelect = document.getElementById('month-select');

    const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    let date = new Date();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    // Fonction pour remplir le sélecteur de mois
    function populateMonthSelect() {
        months.forEach((month, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = month;
            if (index === currentMonth) {
                option.selected = true;
            }
            monthSelect.appendChild(option);
        });
    }

    // Fonction pour rendre le calendrier
    function renderCalendar(month, year) {
        calendar.innerHTML = '';

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7;  // Ajustement de l'indice pour commencer par lundi
        const prevLastDay = new Date(year, month, 0).getDate();

        // En-tête des jours de la semaine
        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'header');
            dayElement.textContent = day;
            calendar.appendChild(dayElement);
        });

        // Jours du mois précédent
        for (let i = firstDayIndex; i > 0; i--) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'prev-date');
            dayElement.textContent = prevLastDay - firstDayIndex + i + 1;
            calendar.appendChild(dayElement);
        }

        // Jours du mois actuel
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            if (i === date.getDate() && month === currentMonth && year === currentYear) {
                dayElement.classList.add('today');
            }
            dayElement.textContent = i;
            calendar.appendChild(dayElement);
        }

        // Jours du mois suivant
        const totalCells = firstDayIndex + daysInMonth;
        const nextDays = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
        for (let i = 1; i <= nextDays; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'next-date');
            dayElement.textContent = i;
            calendar.appendChild(dayElement);
        }
    }

    // Écouteur pour changer le mois sélectionné
    monthSelect.addEventListener('change', function () {
        currentMonth = parseInt(this.value);
        renderCalendar(currentMonth, currentYear);
    });

    // Initialisation du sélecteur de mois et rendu initial du calendrier
    populateMonthSelect();
    renderCalendar(currentMonth, currentYear);
});
