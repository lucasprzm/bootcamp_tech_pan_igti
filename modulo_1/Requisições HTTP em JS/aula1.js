// Solução 1
function solution1() {
  let employeesPromise = fetch("http://localhost:3000/employees");
  employeesPromise.then((r1) => {
    r1.json().then((employees) => {
      let rolesPromise = fetch("http://localhost:3000/roles");
      rolesPromise.then((r2) => {
        r2.json().then((roles) => {
          let table = renderTable(employees, roles);
          document.getElementById("app").innerHTML = table;
        });
      });
    });
  });
}
//solution1();
// Solução 2
function solution2() {
  fetchJson("http://localhost:3000/employees")
    .then((employees) => {
      fetchJson("http://localhost:3000/roles")
        .then((roles) => {
          let table = renderTable(employees, roles);
          document.getElementById("app").innerHTML = table;
        })
        .catch(showError);
    })
    .catch(showError);
}
//solution2();

// Solução 3
function solution3() {
  Promise.all([
    fetchJson("http://localhost:3000/employees"),
    fetchJson("http://localhost:3000/roles"),
  ])
    .then(([employees, roles]) => {
      let table = renderTable(employees, roles);
      document.getElementById("app").innerHTML = table;
    })
    .catch(showError)
    .finally(() => {
      console.log("Carregou");
    });
}
// solution3();

// Solução 4
async function solution4() {
  try {
    let employees = await fetchJson("http://localhost:3000/employees");
    let roles = await fetchJson("http://localhost:3000/roles");
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  } catch (erro) {
    showError(erro);
  }
}
//solution4();

// Solução 5
async function solution5() {
  try {
    let [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  } catch (erro) {
    showError(erro);
  } finally {
    console.log("Carregou");
  }
}
//solution5();

// Comum a todas as soluções!
function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}

function fetchJson(url) {
  return fetch(url).then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      console.log(r);
      throw r.statusText;
    }
  });
}

function showError(error) {
  document.getElementById("app").innerHTML = "Erro ao carregar dados.";
  console.error(error);
}
