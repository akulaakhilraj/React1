const parent=React.createElement("div",{id:"headup"},
React.createElement("div",{id:'child'},
),React.createElement("div",{},
),React.createElement("h1",{id:"headingline"},"Hello React"
))

const root=ReactDOM.createRoot(document.getElementById("parentChild"));
root.render(parent);
