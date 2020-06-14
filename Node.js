class Node
{
  constructor(name) {
    this.name = name;
    this.parent = null;
    this.brothers = [];
    this.children = [];
    this.opposits = [];
  }

  setParent(parent, global) {
    global.push(parent);
    this.parent = parent;
    parent.children.push(this);
  }
  addChild(child, global) {
    global.push(child);
    this.children.push(child);
    child.parent = this;
  }

  addBrother(brother, global) {
    global.push(brother);
    this.brothers.push(brother);
  }

  addOpposite(opposite, global) {
    global.push(opposite);
    this.opposits.push(opposite);
  }
};
module.exports = Node;
