let input = document.querySelector(".input-text");
let btn = document.querySelector(".btn-send");
let btnClear = document.querySelector(".btn-clear");
let h1 = document.createElement("H1");

btn.addEventListener("click", () => {
  document.body.appendChild(h1);

  valorInput = input.value;

  let unidades;
  let decenas;
  let centenas;
  let millar;
  let numero = parseInt(input.value);

  let numeroRomano = "";

  unidades = numero % 10;
  numero = Math.floor(numero / 10);
  decenas = numero % 10;
  numero = Math.floor(numero / 10);
  centenas = numero % 10;
  numero = Math.floor(numero / 10);
  millar = numero % 10;

  switch (millar) {
    case 1:
      numeroRomano += "M";
      break;
    case 2:
      numeroRomano += "MM";
      break;
    case 3:
      numeroRomano += "MMM";
      break;
  }

  switch (centenas) {
    case 1:
      numeroRomano += "C";
      break;
    case 2:
      numeroRomano += "CC";
      break;
    case 3:
      numeroRomano += "CCC";
      break;
    case 4:
      numeroRomano += "CD";
      break;
    case 5:
      numeroRomano += "D";
      break;
    case 6:
      numeroRomano += "DC";
      break;
    case 7:
      numeroRomano += "DCC";
      break;
    case 8:
      numeroRomano += "DCCC";
      break;
    case 9:
      numeroRomano += "CM";
      break;
  }

  switch (decenas) {
    case 1:
      numeroRomano += "X";
      break;
    case 2:
      numeroRomano += "XX";
      break;
    case 3:
      numeroRomano += "XXX";
      break;
    case 4:
      numeroRomano += "XL";
      break;
    case 5:
      numeroRomano += "L";
      break;
    case 6:
      numeroRomano += "LX";
      break;
    case 7:
      numeroRomano += "LXX";
      break;
    case 8:
      numeroRomano += "LXXX";
      break;
    case 9:
      numeroRomano += "XC";
      break;
  }

  switch (unidades) {
    case 1:
      numeroRomano += "I";
      break;
    case 2:
      numeroRomano += "II";
      break;
    case 3:
      numeroRomano += "III";
      break;
    case 4:
      numeroRomano += "IV";
      break;
    case 5:
      numeroRomano += "V";
      break;
    case 6:
      numeroRomano += "VI";
      break;
    case 7:
      numeroRomano += "VII";
      break;
    case 8:
      numeroRomano += "VIII";
      break;
    case 9:
      numeroRomano += "IX";
      break;
  }

  h1.textContent = numeroRomano;
  document.body.appendChild(h1);
});

btnClear.addEventListener("click", () => {
  h1.remove();
  input.value = "";
});
