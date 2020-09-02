"use strict";
let data = [
  {
    type_year: "conf_2014",
    description:
      "S. Kiamehr, A. Amouri, and M. B. Tahoori, “Investigation of NBTI and PBTI induced aging in different LUT implementations,” in Field-Programmable Technology (FPT), 2011 International Conference on, 2011, pp. 1–8",
  },
  {
    type_year: "journal_2014",
    description:
      "V.  B.  Kleeberger,  M.  Barke,  C.  Werner,  D.  Schmitt-Landsiedel,  and U.  Schlichtmann,  “A  compact  model  for  NBTI  degradation  and recovery  under  use-profile  variations  and  its  application  to  aging analysis of digital integrated circuits,” Microelectron. Reliab., vol. 54, no. 6–7, pp. 1083–1089, 2014.",
  },
  {
    type_year: "conf_2012",
    description:
      "Amouri,  S.  Kiamehr,  and  M.  Tahoori,  “Investigation  of  aging effects  in  different  implementations  and  structures  of  programmable routing  resources  of  fpgas,”  in Field-Programmable   Technology (FPT), 2012 International Conference on, 2012, pp. 215–219.",
  },
  {
    type_year: "journal_2000",
    description:
      "J. Lach, W. H. Mangione-Smith, and M. Potkonjak, “Enhanced FPGA reliability  through  efficient  run-time  fault  reconfiguration,” IEEE Trans. Reliab., vol. 49, no. 3, pp. 296–304, 2000",
  },
  {
    type_year: "conf_2013",
    description:
      "P. M. Rao, A. Amouri, S. Kiamehr, and M. B. Tahoori, “Altering LUT configuration  for  wear-out  mitigation  of  FPGA-mapped designs,” in Field   Programmable   Logic   and   Applications ,  (FPL),   2013   23rd International Conference on, 2013, pp. 1–8",
  },
  {
    type_year: "journal_2015",
    description:
      "S.  D.  Carlo,  G.  Gambardella,  P.  Prinetto,  D.  Rolfo,  and  P.  Trotta, “SATTA:  a  Self-Adaptive    Temperature-based    TDF    awareness methodology  for  dynamically  reconfigurable  FPGAs,” ACM  Trans. Reconfigurable Technol. Syst. TRETS, vol. 8, no. 1, p. 1, 2015.",
  },
  {
    type_year: "conf_2013",
    description:
      "H.  Zhang et  al., “Module diversification: Fault tolerance  and  aging mitigation  for  runtime  reconfigurable  architectures,”  in Test Conference (ITC), 2013 IEEE International, 2013, pp. 1–10.",
  },
  {
    type_year: "journal_2014",
    description:
      "C.  Ma et  al.,  “Universal  NBTI  compact  model  for  circuit  aging simulation under any stress conditions,” IEEE  Trans.  Device  Mater. Reliab., vol. 14, no. 3, pp. 818–825, 2014",
  },
  {
    type_year: "conf_2011",
    description:
      "S.  Golshan,  A.  Khajeh,  H.  Homayoun,  E.  Bozorgzadeh,  A.  Eltawil, and  F.  J.  Kurdahi,  “Reliability-aware  placement  in  SRAM-based FPGA  for  voltage  scaling  realization  in  the  presence  of  process variations,”  in Proceedings    of    the    seventh    IEEE/ACM/IFIP international  conference  on  Hardware/software  codesign  and  system synthesis, 2011, pp. 257–266. ",
  },
  {
    type_year: "journal_2008",
    description:
      "S. Srinivasan et al., “Toward increasing FPGA lifetime,” IEEE Trans. Dependable Secure Comput., vol. 5, no. 2, pp. 115–127, 2008.",
  },
  {
    type_year: "conf_2014",
    description:
      "X.  Guo,  W.  Burleson,  and  M.  Stan,  “Modeling  and  experimental demonstration   of   accelerated   self-healing  techniques,”  in Design Automation  Conference  (DAC),  2014  51st  ACM/EDAC/IEEE,  2014, pp. 1–6.",
  },
  {
    type_year: "journal_2006",
    description:
      "J. H. Anderson and F. N. Najm, “Active leakage power  optimization for FPGAs,” IEEE  Trans.  Comput.-Aided  Des.  Integr.  Circuits  Syst., vol. 25, no. 3, pp. 423–437, 2006.",
  },
];

let projects = [
  {
    year: "2013",
    description: "Hardware Trojan Detection Using Multi Voltage Supply Design",
  },
  { year: "2014", description: "Mobile Antenna Jammer" },
  { year: "2015", description: "Sigfox GPS Tracker" },
  {
    year: "2016",
    description: "Handheld Tester Device for BCM and FCM boards of Peugeot 206",
  },
  { year: "2017", description: "High Voltage Coil And Isolation Tester" },
  { year: "2018", description: "Molecular-Beam Epitaxy System" },
  { year: "2019", description: "Magnetorquer for CubeSats" },
  {
    year: "2011",
    description:
      "Farsi Vehicle Registration Plate Charachter Recognition using CUDA",
  },
];

let fltrdConfPapers = [];
let fltrdJrnlPapers = [];
let filteredPapers = [];

const description = data.map((dataObj) => dataObj.description);
const type_year = data.map((dataObj) => dataObj.type_year);
const splitTypeYear = type_year.map((dataObj) => dataObj.split("_"));
data.map(function (item) {
  delete item.type_year;
});

for (let i = 0; i < data.length; i++) {
  data[i].type = splitTypeYear[i][0];
  data[i].year = splitTypeYear[i][1];
  data[i].id = i;
}
for (let i = 0; i < projects.length; i++) projects[i].id = "Project" + i;

data.sort(function (a, b) {
  return a.year - b.year;
});
projects.sort(function (a, b) {
  return a.year - b.year;
});
console.log(projects);

filteredPapers = data;

data.forEach(htmlGenerate.bind(null, "resume"));
projects.forEach(htmlGenerate.bind(null, "projects"));
function htmlGenerate(str, item) {
  let pEl = document.createElement("div");
  let cEl1, cEl2;
  document.getElementById(str).appendChild(pEl);
  pEl.className = "row No10";
  pEl.id = item.id.toString();
  cEl1 = document.createElement("div");
  cEl1.innerHTML = item.year.toString();
  cEl2 = document.createElement("div");
  cEl2.innerHTML = item.description.toString();
  cEl1.className = "colomn No1";
  cEl2.className = "colomn No9";
  cEl1.style.border = "1px solid gray";
  cEl2.style.border = "1px solid gray";
  cEl1.style.display = "inline-block";
  cEl2.style.display = "inline-block";
  console.log(pEl);
  console.log(cEl1);
  console.log(cEl2);
  pEl.appendChild(cEl1);
  pEl.appendChild(cEl2);
}

projectSrch.addEventListener("click", function (event) {
  if (projectYrIn.value) {
    let projectsFilter = parseInt(projectYrIn.value);
    let filteredProjects = projects.filter((obj) => {
      if (parseInt(obj.year) >= projectsFilter) return obj;
    });
    projects.forEach((item) => {
      let displayType = filteredProjects.includes(item) ? "flex" : "none";
      document.getElementById(item.id.toString()).style.display = displayType;
    });
  }
});

paperSrch.addEventListener("click", function (event) {
  if (paperYrIn.value) {
    let dataFilter = parseInt(paperYrIn.value);
    filteredPapers = data.filter((obj) => {
      if (parseInt(obj.year) >= dataFilter) return obj;
    });
    data.forEach((item) => {
      let displayType = filteredPapers.includes(item) ? "flex" : "none";
      document.getElementById(item.id.toString()).style.display = displayType;
    });
  }
});

conf.addEventListener("click", function (event) {
  fltrdConfPapers = filteredPapers.filter((dataObj) => dataObj.type === "conf");
  if (this.checked) {
    //if (jrnl.checked === false)
    filteredPapers.forEach((item) => {
      document.getElementById(item.id.toString()).style.display = "none";
    });
    //  if(jrnl.checked == false)
    fltrdConfPapers.forEach((item) => {
      document.getElementById(item.id.toString()).style.display = "flex";
    });
  } /*else {
    fltrdJrnlPapers.forEach((item) => { 
      document.getElementById(item.id.toString()).style.display = "none";
    });
  }*/
});
jrnl.addEventListener("click", function (event) {
  fltrdJrnlPapers = filteredPapers.filter(
    (dataObj) => dataObj.type === "journal"
  );
  if (this.checked) {
    /// if (conf.checked === false)
    filteredPapers.forEach((item) => {
      document.getElementById(item.id.toString()).style.display = "none";
    });
    //  if(conf.checked == false)
    fltrdJrnlPapers.forEach((item) => {
      document.getElementById(item.id.toString()).style.display = "flex";
    });
  } /*else {
    fltrdConfPapers.forEach((item) => {
      document.getElementById(item.id.toString()).style.display = "none";
    });
  }*/
});
Icon.addEventListener("click", function (event) {
  this.classList.toggle("change");
  let temp = document.getElementById("v");
  if (temp.style.display != "block") temp.style.display = "block";
  else temp.style.display = "none";
});
function myFunction(id) {
  var nameArr = ["home", "about", "resume", "projects", "contact"];
  var tempVar;
  for (let i = 0; i < nameArr.length; i++) {
    tempVar = document.getElementById(nameArr[i]);
    tempVar.style.display = "none";
  }
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}
