(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Project}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Meta__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(683),__webpack_require__(146)),_Description__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(147),_Footer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(148);function Project(props){const project=props.project,setQuery=props.setQuery,measure=props.measure,idx=props.idx;return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{project&&measure&&measure()},[]),project?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article",{className:"Project"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_2__.a,{project:project,setQuery:setQuery})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Description__WEBPACK_IMPORTED_MODULE_3__.a,{project:project,idx:idx}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer",{className:"col s12"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__.a,{project:project,setQuery:setQuery}))):null}try{Project.displayName="Project",Project.__docgenInfo={description:"",displayName:"Project",props:{project:{defaultValue:null,description:"",name:"project",required:!0,type:{name:"Project"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"Dispatch<SetStateAction<string | undefined>>"}},measure:{defaultValue:null,description:"",name:"measure",required:!1,type:{name:"(() => void)"}},idx:{defaultValue:null,description:"",name:"idx",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/project/Project.tsx#Project"]={docgenInfo:Project.__docgenInfo,name:"Project",path:"src/components/project/Project.tsx#Project"})}catch(__react_docgen_typescript_loader_error){}try{Project.displayName="Project",Project.__docgenInfo={description:"",displayName:"Project",props:{project:{defaultValue:null,description:"",name:"project",required:!0,type:{name:"Project"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"Dispatch<SetStateAction<string | undefined>>"}},measure:{defaultValue:null,description:"",name:"measure",required:!1,type:{name:"(() => void)"}},idx:{defaultValue:null,description:"",name:"idx",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/project/Project.tsx#Project"]={docgenInfo:Project.__docgenInfo,name:"Project",path:"src/components/project/Project.tsx#Project"})}catch(__react_docgen_typescript_loader_error){}},146:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Meta}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(684);function Meta(props){const project=props.project,setQuery=props.setQuery;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"Meta"},project.image&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:project.image,className:"project-img","data-caption":"photo: ".concat(project.photo_credit&&project.photo_credit.replace("Photo credit: ","")),alt:"project"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"photo-credit truncate"},"".concat(project.photo_credit&&project.photo_credit.replace("Photo credit: ","")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,project.title)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"2011"===project.volume&&"first performed on ",project.first_performed,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"hotlink",onClick:event=>{event.preventDefault(),event.stopPropagation(),setQuery(project.place)}},project.place),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),project.times_performed),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6",{className:"contributor hotlink",onClick:event=>{event.preventDefault(),event.stopPropagation(),setQuery(project.contributor)}},project.contributor),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"project-collaborators"},project.collaborators&&project.collaborators.map((collaborator,i)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"hotlink",onClick:event=>{event.preventDefault(),event.stopPropagation(),setQuery(collaborator)}},collaborator,project.collaborators&&i<project.collaborators.length-1&&", "))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"home hotlink",onClick:event=>{event.preventDefault(),event.stopPropagation(),setQuery(project.home)}},project.home),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"contact"},project.contact),project.links&&project.links.map(link=>{const l=link.match("http://")||link.match("https://")?link:"http://".concat(link);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{key:l},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"links"},l),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null))})),project.footnote)}try{Meta.displayName="Meta",Meta.__docgenInfo={description:"",displayName:"Meta",props:{project:{defaultValue:null,description:"",name:"project",required:!0,type:{name:"Project"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"Dispatch<SetStateAction<string | undefined>>"}},measure:{defaultValue:null,description:"",name:"measure",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/project/Meta.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"src/components/project/Meta.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}try{Meta.displayName="Meta",Meta.__docgenInfo={description:"",displayName:"Meta",props:{project:{defaultValue:null,description:"",name:"project",required:!0,type:{name:"Project"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"Dispatch<SetStateAction<string | undefined>>"}},measure:{defaultValue:null,description:"",name:"measure",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/project/Meta.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"src/components/project/Meta.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},147:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Description}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(685);function Description(props){const project=props.project;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"Description"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,project.title," ",props.idx)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6",{className:"contributor"},project.contributor),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},project.content.split("\n").map((p,i)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{key:i},p))))}try{Description.displayName="Description",Description.__docgenInfo={description:"",displayName:"Description",props:{project:{defaultValue:null,description:"",name:"project",required:!0,type:{name:"Project"}},idx:{defaultValue:null,description:"",name:"idx",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/project/Description.tsx#Description"]={docgenInfo:Description.__docgenInfo,name:"Description",path:"src/components/project/Description.tsx#Description"})}catch(__react_docgen_typescript_loader_error){}try{Description.displayName="Description",Description.__docgenInfo={description:"",displayName:"Description",props:{project:{defaultValue:null,description:"",name:"project",required:!0,type:{name:"Project"}},idx:{defaultValue:null,description:"",name:"idx",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/project/Description.tsx#Description"]={docgenInfo:Description.__docgenInfo,name:"Description",path:"src/components/project/Description.tsx#Description"})}catch(__react_docgen_typescript_loader_error){}},148:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Footer}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(686);function Footer(props){const project=props.project,setQuery=props.setQuery;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"Footer"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{"data-tooltip":"Edit This Project on GitHub","data-position":"top",href:"https://github.com/emergencyindex/projects-".concat(project.volume,"/blob/projects/").concat(project.pages,".md"),target:"_blank",rel:"noopener noreferrer"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"material-icons"},"edit")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{"data-tooltip":"Cite this project","data-position":"top",href:project.url?project.url:"#"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"material-icons"},"cite")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{"data-tooltip":"Permanent link to this project","data-position":"top",href:project.url?project.url:"#"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"material-icons"},"link"))),project.tags&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,project.tags.map((tag,idx)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:"".concat(tag).concat(idx)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"hotlink chip",href:"#","data-tag":tag,onClick:event=>{event.preventDefault(),event.stopPropagation(),setQuery(tag)}},tag)))))}try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{project:{defaultValue:null,description:"",name:"project",required:!0,type:{name:"Project"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"Dispatch<SetStateAction<string | undefined>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/project/Footer.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"src/components/project/Footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{project:{defaultValue:null,description:"",name:"project",required:!0,type:{name:"Project"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"Dispatch<SetStateAction<string | undefined>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/project/Footer.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"src/components/project/Footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}},1744:function(module,exports,__webpack_require__){},1745:function(module,exports,__webpack_require__){},1746:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"example",(function(){return example}));var react=__webpack_require__(1),react_default=__webpack_require__.n(react),dist=__webpack_require__(65),slicedToArray=__webpack_require__(64),es=__webpack_require__(112),lodash_debounce=__webpack_require__(150),lodash_debounce_default=__webpack_require__.n(lodash_debounce);var Project=__webpack_require__(145),createForOfIteratorHelper=(__webpack_require__(1744),__webpack_require__(320));__webpack_require__(1745);function Search_Search(props){const projects=props.projects,setResults=props.setResults,query=props.query,setQuery=props.setQuery,searchBlur=props.searchBlur,clearSearch=props.clearSearch,_useState=Object(react.useState)({contributor:!0,title:!0,content:!0,place:!0,collaborators:!0,home:!0,tags:!0,volume:!0}),exactMatchOptions=Object(slicedToArray.a)(_useState,1)[0];Object(react.useEffect)(()=>{if(""===query)return console.log("query is empty string effect gonna setResults([])!!"),void setResults([]);void 0!==query&&debouncedSearch(query)},[query]);const debouncedSearch=Object(react.useCallback)(lodash_debounce_default()(q=>search(q),500),[]);function search(q){if(void 0===q)return;const results=function exactMatchSearch(q){const propz=Object.entries(exactMatchOptions).reduce((acc,v)=>(v[1]&&acc.push(v[0]),acc),[]);if(propz&&0===propz.length)return void console.log("no propz");const re=new RegExp(q.replace(/([^a-zA-Z0-9])/g,"\\$1"),"i");return projects.reduce((acc,v)=>{var _step,_iterator=Object(createForOfIteratorHelper.a)(propz);try{for(_iterator.s();!(_step=_iterator.n()).done;){const prop=_step.value;if(re.test(v[prop])){acc.push(v);break}}}catch(err){_iterator.e(err)}finally{_iterator.f()}return acc},[])}(q);console.log("search() results:",results),setResults(results||[])}return react_default.a.createElement("div",{className:"Search"},react_default.a.createElement("input",{value:query,onChange:event=>{setQuery(event.currentTarget.value)},onKeyDown:event=>"Enter"===event.key&&search(query),onBlur:searchBlur,placeholder:"Search Emergency INDEX"}),react_default.a.createElement("div",{className:"results-count"},react_default.a.createElement("span",null,projects.length," ",1===projects.length?"project":"projects"),void 0!==query&&react_default.a.createElement("button",{title:"clear search",onClick:()=>{clearSearch()}},"×")))}try{Search_Search.displayName="Search",Search_Search.__docgenInfo={description:"",displayName:"Search",props:{projects:{defaultValue:null,description:"",name:"projects",required:!0,type:{name:"Project[]"}},setResults:{defaultValue:null,description:"",name:"setResults",required:!0,type:{name:"Dispatch<SetStateAction<Project[]>>"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string | undefined"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"Dispatch<SetStateAction<string | undefined>>"}},searchBlur:{defaultValue:null,description:"",name:"searchBlur",required:!0,type:{name:"() => void"}},clearSearch:{defaultValue:null,description:"",name:"clearSearch",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/volume/Search.tsx#Search"]={docgenInfo:Search_Search.__docgenInfo,name:"Search",path:"src/components/volume/Search.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}try{Search_Search.displayName="Search",Search_Search.__docgenInfo={description:"",displayName:"Search",props:{projects:{defaultValue:null,description:"",name:"projects",required:!0,type:{name:"Project[]"}},setResults:{defaultValue:null,description:"",name:"setResults",required:!0,type:{name:"Dispatch<SetStateAction<Project[]>>"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string | undefined"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"Dispatch<SetStateAction<string | undefined>>"}},searchBlur:{defaultValue:null,description:"",name:"searchBlur",required:!0,type:{name:"() => void"}},clearSearch:{defaultValue:null,description:"",name:"clearSearch",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/volume/Search.tsx#Search"]={docgenInfo:Search_Search.__docgenInfo,name:"Search",path:"src/components/volume/Search.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}function TOC(props){const idx=props.idx,project=props.project,currentIdx=props.currentIdx,projectsRef=props.projectsRef;return react_default.a.createElement("div",{className:"TOCRow",style:{borderLeft:"".concat(currentIdx===idx?"5px solid white":"none")},onClick:()=>function tocRowClick(idx){var _projectsRef$current;null===(_projectsRef$current=projectsRef.current)||void 0===_projectsRef$current||_projectsRef$current.scrollToRow(idx),window.setTimeout(()=>{var _projectsRef$current2;return null===(_projectsRef$current2=projectsRef.current)||void 0===_projectsRef$current2?void 0:_projectsRef$current2.scrollToRow(idx)},0),window.setTimeout(()=>{var _projectsRef$current3;return null===(_projectsRef$current3=projectsRef.current)||void 0===_projectsRef$current3?void 0:_projectsRef$current3.scrollToRow(idx)},750)}(idx),title:"".concat(project.pages," ").concat(project.title," -- ").concat(project.contributor)},react_default.a.createElement("div",null,project.title),react_default.a.createElement("div",null,project.contributor))}function Volume_Volume(props){const windowSize=function useWindowSize(){const isClient="object"==typeof window,_useState=Object(react.useState)({width:isClient?window.innerWidth:100,height:isClient?window.innerHeight:100}),_useState2=Object(slicedToArray.a)(_useState,2),windowSize=_useState2[0],setWindowSize=_useState2[1];return Object(react.useEffect)(()=>{if("object"==typeof window)return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize);function handleResize(){setWindowSize({width:window.innerWidth,height:window.innerHeight})}},[]),windowSize}(),_useState=Object(react.useState)(()=>windowSize.width>600),_useState2=Object(slicedToArray.a)(_useState,2),showSideNav=_useState2[0],setShowSideNav=_useState2[1],projectsRef=Object(react.useRef)(null),tocRef=Object(react.useRef)(null),_useState3=Object(react.useState)(()=>props.projects),_useState4=Object(slicedToArray.a)(_useState3,2),projects=_useState4[0],setResults=_useState4[1],_useState5=Object(react.useState)(void 0),_useState6=Object(slicedToArray.a)(_useState5,2),query=_useState6[0],setQuery=_useState6[1],_useState7=Object(react.useState)(0),_useState8=Object(slicedToArray.a)(_useState7,2),currentProjectIdx=_useState8[0],setCurrentProjectIdx=_useState8[1],dSetCurrentProjectIdx=Object(react.useCallback)(lodash_debounce_default()(i=>setCurrentProjectIdx(i),500),[]);Object(react.useEffect)(()=>{var _tocRef$current;null===(_tocRef$current=tocRef.current)||void 0===_tocRef$current||_tocRef$current.scrollToRow(currentProjectIdx)},[currentProjectIdx]),Object(react.useEffect)(()=>{setShowSideNav(windowSize.width>600)},[windowSize]);const cache=new es.b({defaultHeight:windowSize.height,fixedWidth:!0});return react_default.a.createElement("div",{className:"Volume"},react_default.a.createElement("div",{className:"Projects"},react_default.a.createElement(es.c,{height:windowSize.height,width:windowSize.width-8-(showSideNav?200:0),rowCount:projects.length,deferredMeasurementCache:cache,rowHeight:cache.rowHeight,rowRenderer:function projectRowRenderer(props){const index=props.index,isVisible=props.isVisible,key=props.key,parent=props.parent,style=props.style;return isVisible&&dSetCurrentProjectIdx(index),react_default.a.createElement(es.a,{cache:cache,columnIndex:0,key:key,parent:parent,rowIndex:index},({measure:_measure})=>react_default.a.createElement("div",{style:style},react_default.a.createElement(Project.a,{measure:()=>isVisible&&_measure(),project:projects[index],setQuery:setQuery,idx:index})))},scrollToAlignment:"start",ref:projectsRef})),react_default.a.createElement("div",{className:"TOC",style:showSideNav?void 0:{display:"none"}},react_default.a.createElement(Search_Search,{projects:projects,query:query,setQuery:setQuery,setResults:setResults,searchBlur:function searchBlur(){0===projects.length&&setResults(props.projects)},clearSearch:()=>{setQuery(void 0),setResults(props.projects)}}),react_default.a.createElement(es.c,{height:windowSize.height,width:200,rowCount:projects.length,rowHeight:50,scrollToAlignment:"center",rowRenderer:function tocRowRenderer(props){const index=props.index,key=props.key,style=props.style;return react_default.a.createElement("div",{style:style,key:key},react_default.a.createElement(TOC,{project:projects[index],idx:index,currentIdx:currentProjectIdx,projectsRef:projectsRef}))},ref:tocRef})))}var volume_Volume=Volume_Volume;try{Volume_Volume.displayName="Volume",Volume_Volume.__docgenInfo={description:"",displayName:"Volume",props:{projects:{defaultValue:null,description:"",name:"projects",required:!0,type:{name:"Project[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/volume/Volume.tsx#Volume"]={docgenInfo:Volume_Volume.__docgenInfo,name:"Volume",path:"src/components/volume/Volume.tsx#Volume"})}catch(__react_docgen_typescript_loader_error){}try{Volume_Volume.displayName="Volume",Volume_Volume.__docgenInfo={description:"",displayName:"Volume",props:{projects:{defaultValue:null,description:"",name:"projects",required:!0,type:{name:"Project[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/volume/Volume.tsx#Volume"]={docgenInfo:Volume_Volume.__docgenInfo,name:"Volume",path:"src/components/volume/Volume.tsx#Volume"})}catch(__react_docgen_typescript_loader_error){}var _test_projects=__webpack_require__(43);__webpack_exports__.default={title:"Volume",decorators:[dist.withKnobs]};const example=()=>{const projectCount=Object(dist.number)("project count",350,{min:1,max:1e4}),projects=Object(_test_projects.b)(projectCount);return console.log("Volume gonna render ".concat(projectCount," projects...")),react_default.a.createElement(volume_Volume,{projects:projects})}},321:function(module,exports,__webpack_require__){__webpack_require__(322),__webpack_require__(473),__webpack_require__(474),module.exports=__webpack_require__(666)},389:function(module,exports){},43:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return generateFakeProject})),__webpack_require__.d(__webpack_exports__,"b",(function(){return generateFakeProjects}));var faker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),faker__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);const timesPerformedWord=(times,volume)=>{const words=["not even once","once","twice","three","four","five","six","seven","eight","nine","ten"];return"performed ".concat(words[times]?words[times]:times," ").concat(times>2?"times":""," in ").concat(volume)},generateFakeProject=idx=>({volume:"2011",image:"".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.image.cats(),"?cachebustr=").concat(idx),photo_credit:"".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.name.firstName()," ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.name.lastName()),title:"".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.hacker.adjective()," ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.hacker.adjective()," ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.hacker.noun()),first_performed:"".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.date.month()," ").concat(Math.max(1,faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number(28)),", 2011"),place:"".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.arrayElement([faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.productMaterial(),faker__WEBPACK_IMPORTED_MODULE_0___default.a.hacker.verb().toUpperCase(),faker__WEBPACK_IMPORTED_MODULE_0___default.a.hacker.abbreviation()])," ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.arrayElement(["Gallery","Art Institute","Club","Space","Spot","Hub","Joint"]),", ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.address.city(),", ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.address.countryCode()),times_performed:timesPerformedWord(faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number(24),"2011"),contributor:"".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.name.firstName()," ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.name.lastName()),collaborators:Array.from({length:faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number(6)},()=>"".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.name.firstName()," ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.name.lastName())),home:faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.arrayElement(["".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.address.city(),", ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.address.stateAbbr()),"".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.address.city(),", ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.address.countryCode())]),links:[faker__WEBPACK_IMPORTED_MODULE_0___default.a.internet.url()],contact:faker__WEBPACK_IMPORTED_MODULE_0___default.a.internet.email(),footnote:"",tags:[...Array.from({length:faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number(5)},()=>faker__WEBPACK_IMPORTED_MODULE_0___default.a.hacker.adjective()),...Array.from({length:faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number(5)},()=>faker__WEBPACK_IMPORTED_MODULE_0___default.a.hacker.verb()),...Array.from({length:faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number(5)},()=>faker__WEBPACK_IMPORTED_MODULE_0___default.a.hacker.noun())],pages:"".concat(idx?"".concat((2*idx).toString().padStart(3,"0"),"-").concat((2*idx+1).toString().padStart(3,"0")):"001-002"),needs_review:!0,content:"".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.hacker.phrase()," ").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.hacker.phrase(),"\n").concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.lorem.paragraphs(Math.max(4,faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number(25))))}),generateFakeProjects=projectCount=>Array(projectCount).fill({}).map((_,idx)=>generateFakeProject(idx))},474:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(144)},666:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(144).configure)([__webpack_require__(667)],module,!1)}).call(this,__webpack_require__(103)(module))},667:function(module,exports,__webpack_require__){var map={"./components/App.stories.tsx":668,"./components/project/Project.stories.tsx":670,"./components/volume/Volume.stories.tsx":1746};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=667},668:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(144);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Introduction",module).add("to Storybook",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Emergency INDEX"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"storybook"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"This is a UI component dev environment for the emergencyindex react app."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"A story is a single state of one or more UI components. Basically a story is like a visual test case.")))}.call(this,__webpack_require__(669)(module))},670:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"project",(function(){return project})),__webpack_require__.d(__webpack_exports__,"meta",(function(){return meta})),__webpack_require__.d(__webpack_exports__,"description",(function(){return description})),__webpack_require__.d(__webpack_exports__,"footer",(function(){return footer}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65),_Project__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(145),_Meta__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(146),_Description__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(147),_Footer__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(148),_test_projects__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(43);__webpack_exports__.default={title:"Project",decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs]};const project=()=>{let project=Object(_test_projects__WEBPACK_IMPORTED_MODULE_6__.a)();return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.button)("randomize project text",()=>{project=Object(_test_projects__WEBPACK_IMPORTED_MODULE_6__.a)()}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_2__.a,{project:project,setQuery:()=>{}})},meta=()=>{let project=Object(_test_projects__WEBPACK_IMPORTED_MODULE_6__.a)();return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.button)("randomize project text",()=>{project=Object(_test_projects__WEBPACK_IMPORTED_MODULE_6__.a)()}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_3__.a,{project:project,setQuery:()=>{}})},description=()=>{let project=Object(_test_projects__WEBPACK_IMPORTED_MODULE_6__.a)();return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.button)("randomize project text",()=>{project=Object(_test_projects__WEBPACK_IMPORTED_MODULE_6__.a)()}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Description__WEBPACK_IMPORTED_MODULE_4__.a,{project:project})},footer=()=>{let project=Object(_test_projects__WEBPACK_IMPORTED_MODULE_6__.a)();return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.button)("randomize project text",()=>{project=Object(_test_projects__WEBPACK_IMPORTED_MODULE_6__.a)()}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__.a,{project:project,setQuery:()=>{}})}},683:function(module,exports,__webpack_require__){},684:function(module,exports,__webpack_require__){},685:function(module,exports,__webpack_require__){},686:function(module,exports,__webpack_require__){}},[[321,1,2]]]);
//# sourceMappingURL=main.7cc6ea7661757648c431.bundle.js.map