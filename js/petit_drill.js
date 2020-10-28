const pte = document.getElementById("pte");

const who = document.getElementById("who");

const szosty = document.getElementById("szosty");

const parabeny = document.getElementById("parabeny");

const mech = document.getElementById("mech");

const alko = document.getElementById("alko");

const night = document.getElementById("night");

const kolka = document.querySelectorAll(".kolko");

const overlay = document.getElementById("overlay");

const mechanic = document.querySelector(".mechanic");

const closeMech = mechanic.querySelector(".close");

console.log(pte);

pte.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el.classList.contains("active") && el !== pte) {
      el.classList.remove("active");
    }
  }
  pte.classList.toggle("active");
  overlay.classList.toggle("active");
});

who.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el.classList.contains("active") && el !== who) {
      el.classList.remove("active");
    }
  }
  who.classList.toggle("active");
  overlay.classList.toggle("active");
});

szosty.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el.classList.contains("active") && el !== szosty) {
      el.classList.remove("active");
    }
  }
  szosty.classList.toggle("active");
  overlay.classList.toggle("active");
});

parabeny.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el.classList.contains("active") && el !== parabeny) {
      el.classList.remove("active");
    }
  }
  parabeny.classList.toggle("active");
  overlay.classList.toggle("active");
});

// =====   DZIALANIE MECHANICZNE   ======

mech.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el.classList.contains("active") && el !== mech) {
      el.classList.remove("active");
    }
  }
  mechanic.classList.add("active");
  overlay.classList.add("active");
});

closeMech.addEventListener("touchstart", () => {
  mechanic.classList.remove("active");
  overlay.classList.remove("active");
});

const obrazkiMech = mechanic.querySelectorAll("img");

for (let el of obrazkiMech) {
  el.addEventListener("touchstart", () => {
    el.classList.toggle("active");
  });
}

// =====   ALKO   =====

alko.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el.classList.contains("active") && el !== alko) {
      el.classList.remove("active");
    }
  }
  alko.classList.toggle("active");
  overlay.classList.toggle("active");
});

night.addEventListener("touchstart", () => {
  for (let el of kolka) {
    if (el.classList.contains("active") && el !== night) {
      el.classList.remove("active");
    }
  }
  night.classList.toggle("active");
  overlay.classList.toggle("active");
});

// =====   PACZKI    =====

const plain = document.querySelector(".plain");

plain.addEventListener("touchstart", () => {
  plain.classList.toggle("active");
  overlay.classList.toggle("active");
});

const junior = document.querySelector(".junior");

junior.addEventListener("touchstart", () => {
  junior.classList.toggle("active");
  overlay.classList.toggle("active");
});

// =====   SIL    =====

const sil = document.querySelector(".sil");

const silEkran = document.querySelector(".sil_ekran");

const silClose = silEkran.querySelector(".close");

sil.addEventListener("touchstart", () => {
  silEkran.classList.add("active");
  overlay.classList.add("active");
  sil.classList.add("active");
});

silClose.addEventListener("touchstart", () => {
  silEkran.classList.remove("active");
  overlay.classList.remove("active");
  sil.classList.remove("active");
});
