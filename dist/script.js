const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
 sobremi:
    '<span class="code2">Hola 👋<br>Soy preprofesional de la carrera Diseño de Software e Integración de Sistemas. Perteneciente al tercio superior, con auspicio académico por la Asociación de Educación.',
  habilidades:
    '<span class="code3">Languages:</span><span class="code2"> Python, HTML, CSS, JavaScript,Java,PHP</span><br><span class="code3">Tecnologias:</span><span class="code2"> Git, SQL</span><br><span class="code3">Frameworks:</span><span class="code2"> React.js, Vue.js, Django</span>',
  educacion:
    '<span class="code">Instituto, Tecsup</span><br>Diseño de Software e Integración de Sistemas<br><span class="code">Instituto,Británico</span><br>Inglés',
  
  experiencia: '<span class="code3"> ► Desarrolladora web en el Área de TI </span></br><span class="code2">IProyecto Educativo Pilares /Surco</span></br><span class="code3"> ► Pasante del Área de Informática</span><br> <span class="code2">Radio Observatorio de Jicamarca-IGP /Lurigancho</span>',                      
  
  contacto:
    "<span class='code2'>Puedes contactarme en cualquiera de los siguientes enlaces:</span><br><a href='https://www.facebook.com/sabriinaalexandra.pomajulcarazabal' class='success link'>Facebook</a> ,<a href='https://www.linkedin.com/in/sabrina-alexandra-pomajulca-razabal-197358197/' class='success link'>linkedin</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line"><span class="code">Oops! Palabra incorrecta:</span> ${input}</div>`;
    console.log("Oops! no es la palabra correcta :(");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);