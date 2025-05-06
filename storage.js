import { createPasswordItem } from './ui.js';

export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getData = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return Array.isArray(data) ? data : [];
};

export let passwords = getData("passwords");

export function displayPasswords(passwords) {
  const passwordList = document.getElementById('sifreListesi');
  passwordList.innerHTML = '';

  passwords.forEach(({ appName, username, password }, index) => {
    const listItem = createPasswordItem(appName, username, password, index);
    passwordList.appendChild(listItem);
  });
}

export function deletePassword(index) {
  const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
  deleteModal.show();

  document.getElementById('confirmDeleteBtn').onclick = () => {
    passwords.splice(index, 1);
    saveData("passwords", passwords);
    displayPasswords(passwords);
    deleteModal.hide();
  };
}

export function editPassword(index) {
  const item = passwords[index];
  if (!item) return;

  document.getElementById('editUygulamaAdi').value = item.appName;
  document.getElementById('editKullaniciAdi').value = item.username;
  document.getElementById('editSifre').value = item.password;

  const editModal = new bootstrap.Modal(document.getElementById('editModal'));
  editModal.show();

  document.getElementById('saveEditBtn').onclick = () => {
    const newApp = document.getElementById('editUygulamaAdi').value.trim();
    const newUser = document.getElementById('editKullaniciAdi').value.trim();
    const newPass = document.getElementById('editSifre').value.trim();

    if (newApp && newUser && newPass) {
      passwords[index] = {
        appName: newApp,
        username: newUser,
        password: newPass
      };
      saveData("passwords", passwords);
      displayPasswords(passwords);
      editModal.hide();
    }
  };
}
