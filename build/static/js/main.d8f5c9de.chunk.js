(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(15),c=t.n(a),r=t(3),o=t(2),u=t(4),s=t.n(u),i="http://localhost:3001/api/persons",d=function(){return s.a.get(i)},l=function(e){return s.a.post(i,e)},b=function(e,n){return s.a.put("".concat(i,"/").concat(e),n)},j=function(e){return s.a.delete("".concat(i,"/").concat(e))},h=t(0),f=function(e){var n=e.filterText,t=e.handleFilterChange;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{value:n,onChange:t})]})},m=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,c=e.newNumber,r=e.handleNumberChange;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:t,onChange:a})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:c,onChange:r})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var n=e.persons,t=e.handleDelete;return n.map((function(e){return Object(h.jsx)(p,{person:e,handleDelete:function(){return t(e)}},e.name)}))},p=function(e){var n=e.person,t=e.handleDelete;return Object(h.jsxs)("span",{children:[n.name," ",n.number," ",Object(h.jsx)("button",{onClick:t,children:"delete"}),Object(h.jsx)("br",{})]})},x=function(e){var n=e.message;e.messageType;return null===n?null:Object(h.jsx)("div",{className:n.type,children:n.text})},v=function(){var e=Object(o.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],c=Object(o.useState)(""),u=Object(r.a)(c,2),s=u[0],i=u[1],p=Object(o.useState)(""),v=Object(r.a)(p,2),g=v[0],w=v[1],C=Object(o.useState)(""),N=Object(r.a)(C,2),k=N[0],y=N[1],D=Object(o.useState)(null),S=Object(r.a)(D,2),T=S[0],M=S[1];Object(o.useEffect)((function(){d().then((function(e){a(e.data)}))}),[]);var P=function(e,n,t){M({text:e,type:n}),setTimeout((function(){M(null)}),t)},E=t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(x,{message:T}),Object(h.jsx)(f,{filterText:k,handleFilterChange:function(e){y(e.target.value)}}),Object(h.jsx)("h3",{children:"add a new"}),Object(h.jsx)(m,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));n?n.number===g?alert("".concat(s," is already added to phonebook")):window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))&&b(n.id,{name:s,number:g}).then((function(e){a(t.map((function(t){return t.id!==n.id?t:e.data}))),i(""),w(""),P("Updated ".concat(e.data.name),"successMessage",3e3)})):l({name:s,number:g}).then((function(e){a(t.concat(e.data)),i(""),w(""),P("Added ".concat(e.data.name),"successMessage",3e3)}))},newName:s,handleNameChange:function(e){i(e.target.value)},newNumber:g,handleNumberChange:function(e){w(e.target.value)}}),Object(h.jsx)("h3",{children:"Numbers"}),Object(h.jsx)(O,{persons:E,handleDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&j(e.id).then((function(){a(t.filter((function(n){return n.id!==e.id})))})).catch((function(n){P("Information of ".concat(e.name," has already been removed from the server"),"errorMessage",3e3)}))}})]})};t(40);c.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d8f5c9de.chunk.js.map