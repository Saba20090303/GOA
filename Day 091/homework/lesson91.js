const calendarBody = document.querySelector('.calendar-body');
        const prevMonthButton = document.getElementById('prevMonth');
        const nextMonthButton = document.getElementById('nextMonth');

        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        function generateCalendar() {
            calendarBody.innerHTML = '';

            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

            const firstDay = new Date(currentYear, currentMonth, 1).getDay();

            
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            for (let i = 0; i < daysOfWeek.length; i++) {
                const dayElement = document.createElement('div');
                dayElement.classList.add('day');
                dayElement.textContent = daysOfWeek[i];
                calendarBody.appendChild(dayElement);
            }
            let dayCounter = 1;
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    if (i === 0 && j < firstDay) {
                        
                        continue;
                    } else if (dayCounter > daysInMonth) {
                        
                        break;
                    }

                    const dayElement = document.createElement('div');
                    dayElement.classList.add('day');
                    dayElement.textContent = dayCounter;

                    
                    if (currentYear === new Date().getFullYear() && currentMonth === new Date().getMonth() && dayCounter === new Date().getDate()) {
                        dayElement.classList.add('today');
                    }

                    calendarBody.appendChild(dayElement);
                    dayCounter++;
                }
            }
        }

        prevMonthButton.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar();
        });

        nextMonthButton.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar();
        });

        generateCalendar();