$(".menu-toggle-btn").click(function () {
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
});

//  não consegui implementar esse código no meu trabalho professor, entretanto
// coloquei um alert no botao. Os campos para aparecer a mensagem "preencha o campo".
//
//OBS: Eu coloquei o autofocus no input do nome e agora quando voce abre o site ele esta direcionando o focus para o formulário..
//Não consegui solucionar esse defeito
//
//function formulario(form) {
//     if (form.NOME.value == "") {
//         alert("Por favor digite o seu nome !!!");
//         form.NOME.focus();
//         return;
//     }

//     if (form.SOBRENOME.value == "") {
//         alert("Por favor digite o seu sobrenome !!!");
//         form.SOBRENOME.focus();
//         return;
//     }

//     if (form.EMAIL.value == "") {
//         alert("Por favor digite o email !!!");
//         form.EMAIL.focus();
//         return;
//     }

//     if (form.FONE.value == "") {
//         alert("Por favor digite o telefone !!!");
//         form.FONE.focus();
//         return;
//     }
// }

