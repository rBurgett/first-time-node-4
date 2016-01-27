var hello1 = function(name) {
  return 'Hellooooo... ' + name + '.';
};

var hello2 = (name) => `Hellooooo... ${name}.`;

console.log(hello1('Oldman'));
console.log(hello2('Newman'));
