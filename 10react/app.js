
//3 args, tag name, attribute, content>innerhtml

const heading=React.createElement('h1',{id:"title"},"Hello World")
console.log(heading)

//root >DOM
//const root =ReactDOM.createRoot(document.getElementById('root'))

//render
// root.render(heading)
// 3 paremeter > multiple >array
const parent=React.createElement('div',{id:"parent"},[
React.createElement('h1',{},"Hello World"),
React.createElement('h2',{},"Hello World")  
])
console.log(parent)

const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

