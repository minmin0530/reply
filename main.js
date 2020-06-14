window.onload = function()
{
  const node = new Node("root");
  global.push(node);
  node.addChild(new Node("child1"));
  console.log("hello world");
  console.log(node.name);
  console.log(node.children[0].name);
  console.log(global[1].name);
};
