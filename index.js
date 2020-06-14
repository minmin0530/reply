const QUESTION_PARENT = 1;
const QUESTION_BROTHER = 2;
const QUESTION_CHILD = 3;
const QUESTION_OPPOSITE = 4
const global = [];
const Reply = require('./reply');
const reply = new Reply();
const Node = require('./Node');
const root = new Node('name');
let   prev = null;
process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('何でしょう？');

reader.on('line', (word) => {
	let flag = false;
	if (global.length > 0) {
		for (const g of global) {
			if(g.name == word){
				flag = true;

				let state = Math.ceil(Math.random() * reply.replies.length);
				if (state == QUESTION_PARENT && g.parent != null) {
					console.log('俗に言う' + g.parent.name);
				} else if (state == QUESTION_BROTHER && g.brothers.length) {
					console.log(g.brothers[Math.ceil(Math.random() * g.brothers.length) - 1].name + "と同じだね");
				} else if (state == QUESTION_CHILD && g.children.length) {
					console.log("具体的に言うと" + g.children[Math.ceil(Math.random() * g.children.length) - 1].name + "だね");
				} else if (state == QUESTION_OPPOSITE && g.opposits.length) {
					console.log(g.opposits[Math.ceil(Math.random() * g.opposits.length) - 1].name + "と反対だね");
				} else {
					console.log("何か聞いたことあるよ");
				}
			}
		}
	}
	if (flag) {
		
	} else {
		let state = Math.floor(Math.random() * reply.replies.length);
		let node = null;
		for (const g of global) {
			if(g.name == word){
				node = g;
				break;
			}
		}
		if(node == null) {
			node = root;
		}
		reply.reply(state, node, new Node(word), global);
		// if (state == QUESTION_BROTHER) {
		// 	prev = new Node(word);
		// 	root.addChild(prev, global);
		// 	console.log(word + 'ってなに？');
		// 	state = ANSWER;
		// } else if (state == ANSWER) {
		// 	prev.addChild(new Node(word), global);
		// 	console.log('なるほど');
		// 	state = QUESTION;
		// }
	}
});
