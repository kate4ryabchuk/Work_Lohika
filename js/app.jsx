//Hello World!
let h1 = React.createElement('h1', null, 'Hello, World!');
let parag = React.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odio.');

let container = React.createElement('div', {className: 'container'}, h1, parag);
let root = document.getElementById('root');

ReactDOM.render(container, root);
