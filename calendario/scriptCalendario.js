function createCalendario(ano, mes) {
  const body = document.querySelector("body");

  const date = new Date(ano, mes);

  console.log(date);

  const table = document.createElement("table");
  body.append(table);
  const tbody = document.createElement("tbody");
  table.append(tbody);

  const daysOfWeek = ["L", "M", "X", "J", "V", "S", "D"];

  for (dayOfWeek of daysOfWeek) {
    const th = document.createElement("th");
    th.append(dayOfWeek);
    tbody.append(th);
  }

  const day1 = date.getDay();
  console.log(day1);

  let tr = document.createElement("tr");

  for (let i = 1; i < day1; i++) {
    const td = document.createElement("td");
    tr.append(td);
  }
  tbody.append(tr);

  const lastDay = new Date(ano, mes + 1, 0).getDate();

  for (let day = 1; day <= lastDay; day++) {
    const td = document.createElement("td");
    td.append(day);
    tr.append(td);

    if (tr.children.length === 7) {
      tbody.append(tr);
      tr = document.createElement("tr");
    }
  }

  while (tr.children.length > 0 && tr.children.length < 7) {
    const td = document.createElement("td");
    tr.append(td);
    tbody.append(tr);
  }
}

createCalendario(2026, 895);
