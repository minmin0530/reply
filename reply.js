const QUESTION_PARENT = 1;
const QUESTION_BROTHER = 2;
const QUESTION_CHILD = 3;
const QUESTION_OPPOSITE = 4
const ANSWER   = 10;

class Reply {
    constructor() {
        this.replies = [
            "ってまとめて言うと何？",
            "って何?",
            "って具体的に言うと何？",
            "の反対は何？",
        ];
    }
    reply (state, node, node2, global) {
        console.log(node2.name + this.replies[state]);

        if (state == QUESTION_PARENT) {
            node.setParent(node2, global);
        } else if (state == QUESTION_BROTHER) {
            node.addBrother(node2, global);
        } else if (state == QUESTION_CHILD) {
            node.addChild(node2, global);
        } else if (state == QUESTION_OPPOSITE) {
            node.addOpposite(node2, global);
        }
    }
};
module.exports = Reply;