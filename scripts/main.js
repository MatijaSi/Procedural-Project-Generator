var myButton = document.querySelector('button');
var projectField = document.querySelector('#generated');

var bases = ['a shopping list', 'a database', 'an irc client',
	     'a chatbot', 'an irc bot', 'an operating system',
	     'a bootloader', 'an asteroids remake',
	     'a tetris remake', 'a roguelike',
	     'an audio player', 'a terminal emulator'];

var features = ['machine learning', 'neural networks',
		'human like ai', 'interpreter',
		'domain specific language', 'web frontend',
		'curses frontend', 'advanced z80 emulation',
		'bead sort algorithm',
		'human machine interaction',
		'network of turing machines'];

var languages = ['C', 'FORTH', 'COBOL', 'Common Lisp',
		 'Scheme', 'Clojure', 'Racket', 'Assembly',
		 'C++', 'D', 'Rust', 'Go', 'Verilog', 'VHDL',
		 'SpinalHDL', 'Lisp 1.5', 'Java', 'Javascript',
		 'WebAssembly', 'Haskell', 'Brainfuck'];

var paradigms = ['genetic', 'functional', 'object-oriented',
		 'imperative', 'aspect-oriented',
		 'Hewitt\'s actor model', 'meta',
		 'multiparadigm', 'turing machine'];

// return random El from array
function randomEl(ary) {
   return ary[Math.floor(Math.random()*ary.length)];
}

function randomProject() {
    var base = randomEl(bases);
    var feature = randomEl(features);
    var language = randomEl(languages);
    var paradigm = randomEl(paradigms);
    
    var project = 'Make ' + base + ' with ' + feature + ' in ' + language + ' using ' + paradigm + ' programming.';

    return project;
}

function setProjectField() {
    project = randomProject();
    projectField.textContent = project;
}

setProjectField();

myButton.onclick = function() {
    setProjectField();
}
