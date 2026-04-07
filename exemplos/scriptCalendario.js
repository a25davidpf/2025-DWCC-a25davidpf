function createCalendario(ano, mes) {
  const body = document.querySelector('body');

  const date = new Date(ano, mes);

  console.log(date);

  const table = document.createElement('table');
  body.append(table);
  const tbody = document.createElement('tbody');
  table.append(tbody);

  const daysOfWeek = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  for (dayOfWeek of daysOfWeek) {
    const th = document.createElement('th');
    th.append(dayOfWeek);
    tbody.append(th);
  }

  const day1 = date.getDay();
  console.log(day1);

  const tr = document.createElement('tr');

  for (let i = 1; i < day1; i++) {
    const td = document.createElement('td');
    tr.append(td);
  }
    table.append(tr);
    
    while
}

createCalendario(2026, 3);
