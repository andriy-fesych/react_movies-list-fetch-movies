(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(6),s=i.n(c),a=(i(13),i(8)),n=i(2),l=i(1),r=(i(14),i(15),i(16),i(0)),d=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(d,{movie:e},e.imdbId)}))})},j=(i(18),i(7)),m=i.n(j);var b=function(e){var t=e.addMovie,i=Object(l.useState)(!1),c=Object(n.a)(i,2),s=c[0],a=c[1],o=Object(l.useState)(!1),j=Object(n.a)(o,2),b=j[0],u=j[1],h=Object(l.useState)(),v=Object(n.a)(h,2),O=v[0],x=v[1],f=Object(l.useState)(""),p=Object(n.a)(f,2),g=p[0],N=p[1],y=function(){a(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=ab3d9135","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(g).then((function(e){if("Title"in e){var t={title:e.Title,description:e.Plot,imgUrl:e.Poster||"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID,"/"),imdbId:e.imdbID};x(t)}else u(!0)})).finally((function(){a(!1)}))},w=function(){O&&(t(O),N(""),x(null),u(!1))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),O?w():y()},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",onChange:function(e){N(e.target.value),u(!1)},value:g})}),b&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"button",className:m()("button","is-light",{"is-loading":s}),onClick:y,disabled:0===g.length,children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:w,disabled:!O,children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("div",{children:'press "Enter" once to initiate search, if a movie has been found succesfully press "Enter" again to add it'}),Object(r.jsx)("h2",{className:"title",children:"Preview"}),O?Object(r.jsx)(d,{movie:O}):null]})]})},u=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),i=t[0],c=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{addMovie:function(e){return i.find((function(t){return t.imdbId===e.imdbId}))||c((function(t){return[].concat(Object(a.a)(t),[e])})),null}})})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9a0d7ba3.chunk.js.map