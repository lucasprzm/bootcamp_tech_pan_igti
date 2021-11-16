// Puxando a lista de empregados e roles correspondentes.
function fetchJson(url, options) {
  return fetch(url, options)
    .then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        console.log(r);
        throw new Error(r.statusText);
      }
    })
    .catch((error) => {
      showError("Error loading data", error);
      throw error;
    });
}

// Constantes e variáveis

const baseUrl = "http://localhost:3000";
const tipoFiltro = document.getElementById("tipoFiltro");
const rolesfs = document.getElementById("rolesfs");

// Lançando lista na tabela

async function init() {
  [roles, employees] = await Promise.all([
    fetchJson(`${baseUrl}/roles`),
    fetchJson(`${baseUrl}/employees`),
  ]);
  renderData(employees, roles);
  opcoesDeFiltro(); // formas de ordenação
  initRoles(roles);
  rolesfs.addEventListener("change", () => renderData(employees, roles));
  const sortby = document.getElementById("tipoFiltro");
  sortby.addEventListener("change", () => renderData(employees, roles));
}
init();

function renderData(employees, roles) {
  const checkboxes = document.querySelectorAll("input:checked");
  const rolesIds = [];
  for (let i = 0; i < checkboxes.length; i++) {
    const roleid = parseInt(checkboxes[i].value);
    rolesIds.push(roleid);
  }
  const filteredEmployees = employees.filter((employee) => {
    if (rolesIds.length == 0) {
      return true;
    } else {
      return rolesIds.indexOf(employee.role_id) !== -1; // Retorna verdadeiro para os items que estão no array.
    }
  });
  const sortby = document.getElementById("tipoFiltro").value;
  filteredEmployees.sort((a, b) => {
    switch (sortby) {
      case "Nomes A-Z":
        return comparar(a.name, b.name);
      case "Nomes Z-A":
        return comparar(b.name, a.name);
      case "Salário do Maior para o Menor":
        return comparar(b.salary, a.salary);
      case "Salário do Menor para o Maior":
        return comparar(a.salary, b.salary);
    }
  });

  const tableEl = document.querySelector("tbody");
  tableEl.innerHTML = ""; // Limpa os dados antes de fazer o for.
  for (const employee of filteredEmployees) {
    let role = roles.find((role) => role.id === employee.role_id); // Relacionando as roles em número para nome.
    const tr = document.createElement("tr"); // Criando linha na tabela em loop
    const tdId = document.createElement("td"); // Lançando ID
    tdId.textContent = employee.id;
    const tdName = document.createElement("td"); // Lançando Nome
    tdName.textContent = employee.name;
    const tdRole = document.createElement("td"); // Lançando Cargo
    tdRole.textContent = role.name;
    const tdSalary = document.createElement("td"); // Lançando Salário
    tdSalary.textContent = employee.salary;
    tr.append(tdId, tdName, tdRole, tdSalary); // Criando o dado na linha
    tableEl.append(tr); // Criando a linha na tabela, referenciada pela constante tableEl.
  }
  document.getElementById(
    "counter"
  ).textContent = `(${filteredEmployees.length})`;
  // Legenda de quantidade de funcionários no cabeçalho
}

// Criando as opções de filtro

function opcoesDeFiltro() {
  const vazio = document.createElement("option"); // Criando a opção
  vazio.textContent = "Selecione o filtro"; // Nomeando a opção
  tipoFiltro.appendChild(vazio); // Criar opção para ser selecionada
  const nomeAZ = document.createElement("option"); // Criando a opção
  nomeAZ.textContent = "Nomes A-Z"; // Nomeando a opção
  tipoFiltro.appendChild(nomeAZ); // Criar opção para ser selecionada
  const nomeZA = document.createElement("option"); // Criando a opção
  nomeZA.textContent = "Nomes Z-A"; // Nomeando a opção
  tipoFiltro.appendChild(nomeZA); // Criar opção para ser selecionada
  const salarioMaiorMenor = document.createElement("option"); // Criando a opção
  salarioMaiorMenor.textContent = "Salário do Maior para o Menor"; // Nomeando a opção
  tipoFiltro.appendChild(salarioMaiorMenor); // Criar opção para ser selecionada
  const salarioMenorMaior = document.createElement("option"); // Criando a opção
  salarioMenorMaior.textContent = "Salário do Menor para o Maior"; // Nomeando a opção
  tipoFiltro.appendChild(salarioMenorMaior); // Criar opção para ser selecionada
}

// Criando as checkboxes dinamicamente.
function initRoles(roles) {
  for (const role of roles) {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = role.id;
    label.append(checkbox, role.name);
    rolesfs.append(label);
  }
}

// Função genérica de comparação de valores para colocar em ordem
function comparar(v1, v2) {
  if (v1 < v2) {
    return -1;
  } else if (v1 > v2) {
    return 1;
  } else {
    return 0;
  }
}
