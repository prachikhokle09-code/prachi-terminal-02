const output = document.getElementById('output');
const input = document.getElementById('command-input');

// Typing animation for greeting
let introText = "Type 'help' to see available commands.";
let index = 0;
function typeIntro() {
if (index < introText.length) {
output.innerHTML += introText.charAt(index);
index++;
setTimeout(typeIntro, 60);
}
}
setTimeout(typeIntro, 1500); // start typing after fade-in

// Command responses
function print(text) {
output.innerHTML += "\n" + text + "\n";
output.scrollTop = output.scrollHeight;
}

function processCommand(command) {
switch (command.toLowerCase()) {
case 'help':
print("Available commands:\n- about\n- skills\n- contact\n- clear");
break;
case 'about':
print("Hi! I'm Prachi — passionate about Java, Spring Boot, and creating beautiful web experiences.");
break;
case 'skills':
print("Java");
break;
case 'contact':
print("Email: prachikhokle09@gmail.com\nLinkedIn: linkedin.com/in/prachi");
break;
case 'clear':
output.innerHTML = "";
break;
default:
print(`Unknown command: ${command}`);
}
}

input.addEventListener('keydown', function (e) {
if (e.key === 'Enter') {
const command = input.value.trim();
if (command !== '') {
print("> " + command);
processCommand(command);
input.value = '';
}
}
});