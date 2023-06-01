const objeto = { // expresiones regulares dentro de un objeto
    usuario2: /^[a-zA-Z0-9\_\-]{1,16}$/,
    nombre: /^[a-zA-Z+À-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,100}$/,
    contrasena: /^.{1,12}$/
};
// guardar etiqueta input en una variable
const inputs = document.querySelectorAll('input');
inputs.forEach((input) =>{
    input.addEventListener('keyup', campo )
})


function campo(e){
    switch(e.target.name){
        case 'usuario':
            if(objeto.usuario2.test(e.target.value)){
                document.querySelector('.p-1').classList.remove('p-1_error');
                document.getElementById('usuario').classList.remove('usuario-error')
                document.querySelector('.span-1').classList.remove('span-1_error')
            }else if(usuario.value === '' || usuario.value === null){
                document.querySelector('.p-1').classList.remove('p-1_error');
                document.getElementById('usuario').classList.remove('usuario-error')
                document.querySelector('.span-1').classList.remove('span-1_error')
            } else{
                document.querySelector('.p-1').classList.add('p-1_error');
                document.getElementById('usuario').classList.add('usuario-error')
                document.querySelector('.span-1').classList.add('span-1_error')
            }
        break;
        case 'nombre':
            if(objeto.nombre.test(e.target.value)){
                document.querySelector('.p-2').classList.remove('p-2_error');
                document.getElementById('nombre').classList.remove('nombre-error')
                document.querySelector('.span-2').classList.remove('span-2_error')
            }else if(usuario.value === '' || usuario.value === null){
                document.querySelector('.p-2').classList.remove('p-2_error');
                document.getElementById('nombre').classList.remove('nombre-error')
                document.querySelector('.span-2').classList.remove('span-2_error')
            } else{
                document.querySelector('.p-2').classList.add('p-2_error');
                document.getElementById('nombre').classList.add('nombre-error')
                document.querySelector('.span-2').classList.add('span-2_error')
            }
        break;
        case 'email':
            if(objeto.correo.test(e.target.value)){
                document.querySelector('.p-3').classList.remove('p-3_error');
                document.getElementById('email').classList.remove('email-error')
                document.querySelector('.span-3').classList.remove('span-3_error')
            }else if(usuario.value === '' || usuario.value === null){
                document.querySelector('.p-3').classList.remove('p-3_error');
                document.getElementById('email').classList.remove('email-error')
                document.querySelector('.span-3').classList.remove('span-3_error')
            } else{
                document.querySelector('.p-3').classList.add('p-3_error');
                document.getElementById('email').classList.add('email-error')
                document.querySelector('.span-3').classList.add('span-3_error')
            }
        break;
        case 'password':
            if(objeto.contrasena.test(e.target.value)){
                document.querySelector('.p-4').classList.remove('p-4_error');
                document.getElementById('password').classList.remove('password-error')
                document.querySelector('.span-4').classList.remove('span-4_error')
            }else if(usuario.value === '' || usuario.value === null){
                document.querySelector('.p-4').classList.remove('p-4_error');
                document.getElementById('password').classList.remove('password-error')
                document.querySelector('.span-4').classList.remove('span-4_error')
            } else{
                document.querySelector('.p-4').classList.add('p-4_error');
                document.getElementById('password').classList.add('password-error')
                document.querySelector('.span-4').classList.add('span-4_error')
            }
        break;
    }
}