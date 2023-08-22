//   const div = React.createElement('div',{},[React.createElement('h1',{},"jh"),React.createElement('p',{},'i amp ')]);
//   const heading = React.createElement('h1',{id:'heading'},'Hello');
//   const paragarph = React.createElement('p',{},"I am paragarph");
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   console.log(heading);
//   root.render(div);
//   console.log(root)
//   // root.render(paragarph);


const parent = React.createElement('div',{id:'parent'},
React.createElement('div',{id:'child'},
[React.createElement('h1',{},"I am H1"),React.createElement('h2',{},"I am H2")]));
console.log(parent);
const parent1 = React.createElement('div',{id:'parent'},
[
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{},"I am H1"),React.createElement('h2',{},"I am H2")
    ])
    ,
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},"I am H1"),React.createElement('h2',{},"I am H2")
    ])
]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent1);

