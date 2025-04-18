function verificar() {
  var formAno = document.querySelector("#txtano");
  var data = new Date();
  var ano = data.getFullYear();
  var idade = ano - Number(formAno.value);
  if (formAno.value == 0|| Number(formAno.value) > ano) {
    alert("[ERROR] Verifique os dados e tente novamente!!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var genero = "";
    var res = document.querySelector("#res");
    var img = document.createElement("img");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // crianca
        img.setAttribute("src", "bebe-M.jpg");
      } else if (idade < 20) {
        // jovem
        img.setAttribute("src", "jovem-M.jpg");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "adulto-M.jpg");
      } else {
        img.setAttribute("src", "idoso-M.jpg");
        // idoso
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // crianca
        img.setAttribute("src", "bebe-F.jpg");
      } else if (idade < 20) {
        // jovem
        img.setAttribute("src", "jovem-F.jpg");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "adulta-F.jpg");
      } else {
        img.setAttribute("src", "idosa-F.jpg");
        // idoso
      }
    }
  }
  res.innerHTML = `Detectamos ${genero} de ${idade} anos`;
  res.appendChild(img);
}
