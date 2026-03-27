const btnLogin = document.getElementById('btn_login');
const btnRegister = document.getElementById('btn_register');
const registToggle = document.getElementById('regist-toggle');
const authForm = document.getElementById('auth_form');
const knopka = document.getElementById('knopka');
const p_login = document.getElementById('p_login');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('p_password');

const first_name_div = document.getElementById('first_name_div');
const username_div = document.getElementById('username_div');
const password1_div = document.getElementById('password1_div');
const password2_div = document.getElementById('password2_div');

var none1 = password2;
none1.disabled = true;
p_login.reset();

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registToggle.classList.add('login-mode');
    registToggle.classList.remove('register-mode');
    
    authForm.classList.remove('register-mode');
    authForm.action = login;
    knopka.textContent = 'Войти';
    knopka.value = 'login';
    
    // Simulate original 1s effect
    setTimeout(() => {
        knopka.textContent = 'Войти';
    }, 200);
});

function kill_reg(mode){

    const nabor = [ p_login, password1, password2 ];

    if (mode === 'login') {
        nabor.forEach(nab => {
            if (nab) {
                nab.disabled = true;
            } 
        });
    } else {
        nabor.forEach(nab => {
            if (nab) {
                nab.disabled = false;
            } 
        });
    }
};

btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    registToggle.classList.add('register-mode');
    registToggle.classList.remove('login-mode');
    
    authForm.classList.add('register-mode');
    authForm.action = signup;
    knopka.textContent = 'Зарегистрироваться';
    knopka.value = 'register';
    
    // Simulate original 1s effect
    setTimeout(() => {
        knopka.textContent = 'Войти'; // as in original, the button stayed the same
    }, 200);
});

btnLogin.addEventListener('click', () => {
    kill_reg('login');
});

btnRegister.addEventListener('click', () => {
    kill_reg('reg');
});