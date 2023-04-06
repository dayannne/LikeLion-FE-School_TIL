const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Flat', 'Audi'];

let text = '';

`
<section>
<h2>BMW</h2>
</section>
<section>
<h2>Volvo</h2>
</section>
...
`;

text += '<section><h2>' + cars[0] + '</h2></section>';
text += '<section><h2>' + cars[1] + '</h2></section>';
text += '<section><h2>' + cars[2] + '</h2></section>';
text += '<section><h2>' + cars[3] + '</h2></section>';
text += '<section><h2>' + cars[4] + '</h2></section>';

console.log(text);
