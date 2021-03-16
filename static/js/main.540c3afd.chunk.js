(this["webpackJsonpsearch-pokemon"]=this["webpackJsonpsearch-pokemon"]||[]).push([[0],{112:function(e,n,t){},126:function(e,n,t){"use strict";t.r(n);var a=t(38),c=t(0),r=t.n(c),o=t(41),s=t.n(o),i=t(36),l=t(40),h=t(147),j=t(101),d=t(148),u=t(149),m=(t(112),t(12)),b=t(89),p=t(143),O=t(128),x=t(151),v=t(150),g=t(145),_=t(152),f=t(146),k=t(73),C=t.n(k),S=t(97),T=t.n(S),N=t(98),y=t.n(N),R=t(96),I=t.n(R),F=t(14),W=t.n(F);var P,w=Object(c.createContext)({themeType:"light",toggleThemeType:function(){}}),A=t(5),E="/full-stack-evaluation",B=Object(i.gql)(P||(P=Object(b.a)(["\n  query pokemon($name: String!) {\n    pokemon(name: $name) {\n      id\n      number\n      name\n      weight {\n        minimum\n        maximum\n      }\n      height {\n        minimum\n        maximum\n      }\n      classification\n      types\n      resistant\n      weaknesses\n      fleeRate\n      maxCP\n      maxHP\n      image\n      evolutionRequirements {\n        amount\n        name\n      }\n      evolutions {\n        name\n        image\n      }\n    }\n  }\n"]))),q=function(e){var n=e.children,t=e.className;return Object(A.jsx)(p.a,{variant:"body2",component:"p",className:t||"",children:n})};function M(){var e=new URLSearchParams(Object(m.g)().search),n=Object(m.f)(),t=Object(m.g)(),r=e.get("name"),o=Object(c.useState)(""),s=Object(a.a)(o,2),h=s[0],j=s[1],d=Object(c.useState)(""),u=Object(a.a)(d,2),b=u[0],k=u[1],S=Object(c.useState)(!1),N=Object(a.a)(S,2),R=N[0],F=N[1],P=Object(c.useContext)(w),M=P.themeType,D=P.toggleThemeType,L=Object(i.useLazyQuery)(B,{variables:{name:b}}),H=Object(a.a)(L,2),K=H[0],Q=H[1],U=Q.data,z=Q.error,J=Q.loading;function $(e){j(e.target.value)}function X(e){e.preventDefault(),h!==b&&n.push("".concat(E,"/?name=").concat(h)),k(h)}return Object(c.useEffect)((function(){r?(j(r),k(r),K(),F(!0)):(j(""),k(""),F(!1))}),[t,K,r]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(f.a,{children:Object(A.jsxs)("div",{className:W.a.appBarContainer,children:[Object(A.jsx)("div",{className:W.a.search,children:R?Object(A.jsxs)(O.a,{component:"form",className:W.a.searchTextRoot,onSubmit:X,children:[Object(A.jsx)(x.a,{className:W.a.searchTextInput,placeholder:"Search Pokemon",inputProps:{"data-testid":"name-input"},value:h,onChange:$}),Object(A.jsx)(v.a,{type:"submit","aria-label":"search",className:W.a.searchTextIconButton,"data-testid":"search-button",children:Object(A.jsx)(C.a,{})})]}):null}),Object(A.jsx)("div",{className:W.a.themeToggle,children:Object(A.jsx)(v.a,{onClick:D,children:"light"===M?Object(A.jsx)(T.a,{}):Object(A.jsx)(y.a,{})})})]})}),Object(A.jsx)("div",{className:W.a.searchResultWrapper,children:function(){var e,n,t,a,c,r,o,s;if(!R)return null;if(J)return Object(A.jsx)("div",{className:W.a.notFoundWrapper,children:Object(A.jsxs)("div",{className:W.a.notFound,children:[Object(A.jsx)(g.a,{}),Object(A.jsx)(p.a,{variant:"overline",component:"p",children:"Searching..."})]})});if(z)throw z;if(!U||!U.pokemon)return Object(A.jsx)("div",{className:W.a.notFoundWrapper,"data-testid":"not-found",children:Object(A.jsxs)("div",{className:W.a.notFound,children:[Object(A.jsx)(I.a,{}),Object(A.jsx)(p.a,{variant:"overline",component:"p",children:'Pokemon name "'.concat(h,'" cannot be found')})]})});var i=U.pokemon;return Object(A.jsxs)("div",{className:W.a.searchResultContainer,children:[Object(A.jsx)("div",{className:W.a.pokemonImage,children:Object(A.jsx)("img",{src:i.image||"",alt:i.name||""})}),Object(A.jsxs)("div",{className:W.a.pokemonDetail,children:[Object(A.jsx)(p.a,{variant:"h2",component:"h2",children:i.name}),Object(A.jsx)("br",{}),Object(A.jsxs)(q,{className:"types",children:[Object(A.jsx)("b",{children:"Types:"})," ",Object(A.jsx)("span",{"data-testid":"pokemon-types",children:(null===(e=i.types)||void 0===e?void 0:e.join(" "))||""})]}),Object(A.jsxs)(q,{children:[Object(A.jsx)("b",{children:"Resistant(s):"})," ",(null===(n=i.resistant)||void 0===n?void 0:n.join(" "))||""]}),Object(A.jsxs)(q,{children:[Object(A.jsx)("b",{children:"FleeRate:"})," ",i.fleeRate||""]}),Object(A.jsxs)(q,{children:[Object(A.jsx)("b",{children:"MaxCP:"})," ",i.maxCP||""]}),Object(A.jsxs)(q,{children:[Object(A.jsx)("b",{children:"Weakness(es):"})," ",(null===(t=i.weaknesses)||void 0===t?void 0:t.join(" "))||"-"]}),Object(A.jsxs)(q,{children:[Object(A.jsx)("b",{children:"Classification:"})," ",i.classification||"-"]}),Object(A.jsxs)(q,{children:[Object(A.jsx)("b",{children:"Weight:"})," ","".concat(null===(a=i.weight)||void 0===a?void 0:a.minimum," - ").concat(null===(c=i.weight)||void 0===c?void 0:c.maximum)]}),Object(A.jsxs)(q,{children:[Object(A.jsx)("b",{children:"Height:"})," ","".concat(null===(r=i.height)||void 0===r?void 0:r.minimum," - ").concat(null===(o=i.height)||void 0===o?void 0:o.maximum)]}),Object(A.jsxs)(q,{children:[Object(A.jsx)("b",{children:"Evolution Requirement:"})," ",function(e){var n,t,a=null===(n=e.evolutionRequirements)||void 0===n?void 0:n.amount,c=null===(t=e.evolutionRequirements)||void 0===t?void 0:t.name;return a&&c?"".concat(a," ").concat(c):"None"}(i)]}),Object(A.jsxs)("div",{className:W.a.evolutions,children:[Object(A.jsx)("b",{children:"Evolution(s):"}),"\xa0",Object(A.jsx)("div",{className:W.a.pokemonAvatarContainer,children:(null===(s=i.evolutions)||void 0===s?void 0:s.map((function(e,n){return Object(A.jsx)("div",{className:W.a.pokemonAvatar,children:Object(A.jsx)(l.b,{to:"".concat(E,"/?name=").concat(e.name),children:Object(A.jsx)(_.a,{alt:e.name||"",src:e.image||""})})},"evolution-".concat(null===e||void 0===e?void 0:e.name,"-").concat(n))})))||"None"})]})]})]})}()}),R?null:Object(A.jsx)("div",{className:W.a.notCalledWrapper,"data-testid":"search-center-input",children:Object(A.jsx)("div",{className:W.a.notCalled,children:Object(A.jsxs)(O.a,{component:"form",className:W.a.searchTextRootInContent,onSubmit:X,children:[Object(A.jsx)(x.a,{className:W.a.searchTextInput,placeholder:"Search Pokemon",inputProps:{"data-testid":"name-input"},value:h,onChange:$}),Object(A.jsx)(v.a,{type:"submit","aria-label":"search",className:W.a.searchTextIconButton,"data-testid":"search-button",children:Object(A.jsx)(C.a,{})})]})})})]})}var D=function(){return Object(A.jsx)(m.c,{children:Object(A.jsx)(m.a,{path:"".concat("/full-stack-evaluation","/"),children:Object(A.jsx)(M,{})})})},L=t(99),H=t(100),K=t(103),Q=t(102),U=function(e){Object(K.a)(t,e);var n=Object(Q.a)(t);function t(){var e;Object(L.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={hasError:!1},e}return Object(H.a)(t,[{key:"componentDidCatch",value:function(e,n){console.error("Uncaught error:",e,n)}},{key:"render",value:function(){return this.state.hasError?Object(A.jsx)("h1",{children:"Sorry.. there was an error"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(c.Component),z=new i.ApolloClient({uri:"https://graphql-pokemon2.vercel.app",cache:new i.InMemoryCache}),J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,153)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};function $(){var e=Object(h.a)("(prefers-color-scheme: dark)"),n=Object(c.useState)("light"),t=Object(a.a)(n,2),o=t[0],s=t[1],m=r.a.useMemo((function(){return Object(j.a)({palette:{type:o}})}),[o]);return r.a.useMemo((function(){s(e?"dark":"light")}),[e]),Object(A.jsx)(l.a,{children:Object(A.jsx)(w.Provider,{value:{themeType:o,toggleThemeType:function(){s("light"===o?"dark":"light")}},children:Object(A.jsxs)(d.a,{theme:m,children:[Object(A.jsx)(u.a,{}),Object(A.jsx)(i.ApolloProvider,{client:z,children:Object(A.jsx)(D,{})})]})})})}s.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(U,{children:Object(A.jsx)($,{})})}),document.getElementById("root")),J()},14:function(e,n,t){e.exports={appBarContainer:"Search_appBarContainer__3pAnM",search:"Search_search__11K1C",themeToggle:"Search_themeToggle__2OF3A",searchTextRoot:"Search_searchTextRoot__33ECK",searchTextRootInContent:"Search_searchTextRootInContent__RITwK",searchTextInput:"Search_searchTextInput__2O8Ps",searchTextIconButton:"Search_searchTextIconButton__1jSgQ",searchResultWrapper:"Search_searchResultWrapper__13QHW",searchResultContainer:"Search_searchResultContainer__pAqzv",pokemonImage:"Search_pokemonImage__bOgUF",pokemonDetail:"Search_pokemonDetail__2sK1k",evolutions:"Search_evolutions__1Qi1-",pokemonAvatarContainer:"Search_pokemonAvatarContainer__2Rsdk",pokemonAvatar:"Search_pokemonAvatar__2MLMh",loadingWrapper:"Search_loadingWrapper__19bEX",notFoundWrapper:"Search_notFoundWrapper__1sTt0",notCalledWrapper:"Search_notCalledWrapper__2N4RI",loading:"Search_loading__adoxd",notFound:"Search_notFound__2W_HI",notCalled:"Search_notCalled__1p60c"}}},[[126,1,2]]]);
//# sourceMappingURL=main.540c3afd.chunk.js.map