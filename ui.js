import { randompass } from './utils.js';

export function changepass() {
  const rndpass = randompass();
  document.getElementById('sifre').value = rndpass;
}

export function togglePassword() {
  const passwordInput = document.getElementById('sifre');
  const toggleButton = document.getElementById('sifreGosterBtn');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

export function toggleEditPassword() {
  const passwordInput = document.getElementById('editSifre');
  const toggleButton = document.getElementById('editSifreGosterBtn');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

export function setupUI() {
  const generateBtn = document.getElementById('gucluSifreBtn');
  if (generateBtn) {
    generateBtn.addEventListener("click", changepass);
  }

  const toggleBtn = document.getElementById('sifreGosterBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener("click", togglePassword);
  }
  const editToggleBtn = document.getElementById('editSifreGosterBtn');
  if (editToggleBtn) {
    editToggleBtn.addEventListener("click", toggleEditPassword);
  }

}



export function showDetails(appName, username, password) {
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <strong>Uygulama:</strong> ${appName}<br>
    <strong>Kullanıcı Adı:</strong> ${username}<br>
    <strong>Şifre:</strong> ${password}`
  ;
  const myModal = new bootstrap.Modal(document.getElementById('detailsModal'));
  myModal.show();
}

// ui a aldım
export function createPasswordItem(appName, username, password, index) {
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
  listItem.innerHTML = `
    ${appName} - ${username}
    <div class="btn-group">
      <button class="btn btn-info btn-sm border border-dark shadow " onclick="showDetails('${appName}', '${username}', '${password}')">Görüntüle</button>
      <button class="btn btn-warning btn-sm border border-dark shadow " onclick="editPassword(${index})">Düzenle</button>
      <button class="btn btn-danger btn-sm border border-dark shadow " onclick="deletePassword(${index})">Sil</button>
    </div>`
  ;
  return listItem;
}