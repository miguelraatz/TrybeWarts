const enterButton = document.querySelector('#btn-enter');

function validaLogin() {
  const inputEmail = document.querySelector('#e-mail');
  const inputSenha = document.querySelector('#pass');
  const valueEmail = inputEmail.value;
  const valueSenha = inputSenha.value;
  if (valueEmail === 'tryber@teste.com' && valueSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

enterButton.addEventListener('click', validaLogin);

const submitButton = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');

function ativaSubmitButton() {
  if (checkBox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkBox.addEventListener('click', ativaSubmitButton);

const counter = document.querySelector('#counter');
const texteArea = document.querySelector('#textarea');

function contaCaracteres() {
  counter.innerHTML = 500 - texteArea.value.length;
}

texteArea.addEventListener('input', contaCaracteres);

const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const text = document.querySelector('#textarea');
const house = document.querySelectorAll('.house');
const family = document.getElementsByName('family');
const content = document.querySelectorAll('.subject');
const rate = document.getElementsByName('rate');
const mainForm = document.querySelector('#evaluation-form');
const formData = document.querySelector('#form-data');

function achaVariasCoisas(coisas) {
  const coisasValue = [];
  for (let i = 0; i < coisas.length; i += 1) {
    if (coisas[i].checked) {
      coisasValue.push(coisas[i].value);
    }
  }
  return coisasValue.join(', ');
}

function achaCoisa2(coisa) {
  let coisaValue;
  for (let i = 0; i < coisa.length; i += 1) {
    if (coisa[i].selected) {
      coisaValue = coisa[i].value;
    }
  }
  return coisaValue;
}

function achaCoisa(coisa) {
  let coisaValue;
  for (let i = 0; i < coisa.length; i += 1) {
    if (coisa[i].checked) {
      coisaValue = coisa[i].value;
    }
  }
  return coisaValue;
}

function imprimeElements(classe, userinput) {
  const element = document.createElement('p');
  element.innerText = `${classe}: ${userinput}`;
  element.className = 'formData';
  formData.appendChild(element);
}

function newForm() {
  mainForm.style = 'display: none';
  formData.style = 'display: flex';
  imprimeElements('Nome', `${firstName.value} ${lastName.value}`);
  imprimeElements('Email', email.value);
  imprimeElements('Casa', achaCoisa2(house));
  imprimeElements('Família', achaCoisa(family));
  imprimeElements('Matérias', achaVariasCoisas(content));
  imprimeElements('Avaliação', achaCoisa(rate));
  imprimeElements('Observações', text.value);
  window.event.preventDefault();
}

submitButton.addEventListener('click', newForm);
