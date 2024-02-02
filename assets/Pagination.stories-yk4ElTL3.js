import{j as u,a as le,F as ce}from"./jsx-runtime-1H0H8r1V.js";import{r as x}from"./index-FaLGlFNx.js";import{$ as T}from"./index-LgkRcltO.js";function U(e,[t,n]){return Math.min(n,Math.max(t,e))}var _=(e=>(e.LEFT="trunc-left",e.RIGHT="trunc-right",e))(_||{});const l=(e,t)=>e>t?[]:e===t?[e]:Array(t-e+1).fill(void 0).map((n,r)=>r+e),de=e=>{const{page:t,totalPageCount:n,siblingCount:r,boundaryCount:h,firstPage:p=1}=e,D=[p,n],b=p,s=U(h,[p-1,n]),g=U(t-r,D),m=U(t+r,D),i=n-h+1,c=n;let d;return s+1>=i||s+1>=g&&m+1>=i?d=l(b,c):s+1>=g?d=[...l(p,Math.max(s,m)),"trunc-right",...l(i,c)]:m+1>=i?d=[...l(b,s),"trunc-left",...l(Math.min(i,g),c)]:d=[...l(b,s),"trunc-left",...l(g,m),"trunc-right",...l(i,c)],d},A=(...e)=>e.filter(Boolean).join(" "),N=1,o={item:"pagination-item",trunc:"pagination-item__trunc",leftTrunc:"pagination-item__trunc--left",rightTrunc:"pagination-item__trunc--right",previous:"pagination-item__previous",next:"pagination-item__next",currentPage:"pagination-item--current-page"},v=e=>{const{page:t,totalPageCount:n,onPageChange:r,siblingCount:h=1,boundaryCount:p=1,truncStep:D=5,leftTruncUI:b=k,rightTruncUI:s=k,previousUI:g=pe,nextUI:m=ge,itemUI:i=me,invalidFallbackUI:c,className:d,style:re}=e,F=a=>N<=a&&a<=n,V=F(t),ie=!V&&c,W=[N,n],oe=de({page:t,totalPageCount:n,siblingCount:h,boundaryCount:p,firstPage:N}),S={currentPage:t,isCurrentPageValid:V,lastPage:n},se=a=>{const C=r&&(()=>r(a)),P=a===t;return u(x.Fragment,{children:i&&u(T,{onClick:C,className:A(o.item,P&&o.currentPage),children:i({...S,targetPage:a})})},a)},q=(a,C,P)=>a&&u(T,{onClick:r&&(()=>r(C)),className:A(o.item,o.trunc,P),children:a({...S,targetPage:C})}),L=(a,C,P)=>a&&u(T,{onClick:r&&(()=>{F(C)&&r(C)}),className:A(o.item,P),children:a({...S,targetPage:C})});return u("div",{style:re,className:A(d,"pagination-root"),children:ie?c:le(ce,{children:[L(g,t-1,o.previous),oe.map(a=>a===_.LEFT?q(b,U(t-D,W),o.leftTrunc):a===_.RIGHT?q(s,U(t+D,W),o.rightTrunc):se(a)),L(m,t+1,o.next)]})})},k=()=>u("button",{type:"button",children:"⋯"}),pe=()=>u("button",{type:"button",children:"<"}),ge=()=>u("button",{type:"button",children:">"}),me=({targetPage:e})=>u("button",{type:"button",children:e});try{v.displayName="Pagination",v.__docgenInfo={description:"",displayName:"Pagination",props:{page:{defaultValue:null,description:"페이지 상태",name:"page",required:!0,type:{name:"number"}},totalPageCount:{defaultValue:null,description:"전체 페이지 개수",name:"totalPageCount",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"- 페이지네이션 아이템 UI를 클릭할 때 수행되는 콜백\n- 각 UI 컴포넌트에 `onClick` 핸들러가 있는경우 합성된다.\n- 호출을 막기 위해서는 각 UI 컴포넌트의 `onClick` 핸들러에서 `e.preventDefault()`를 호출하면 된다.",name:"onPageChange",required:!1,type:{name:"((page: number) => void)"}},siblingCount:{defaultValue:{value:"1"},description:`- 0 이상이어야 함
- 현재 페이지 UI의 앞뒤로 표시할 페이지의 개수`,name:"siblingCount",required:!1,type:{name:"number"}},boundaryCount:{defaultValue:{value:"1"},description:`- 0 이상이어야 함
- 첫 페이지 UI의 뒤로, 마지막 페이지 UI의 앞으로 표시할 페이지의 개수`,name:"boundaryCount",required:!1,type:{name:"number"}},truncStep:{defaultValue:{value:"5"},description:"- Trunc UI를 클릭했을 때 이동할 페이지를 결정\n- 현재 페이지가 5, `truncStep`이 1이면, trunc UI 클릭시 4 또는 6으로 이동",name:"truncStep",required:!1,type:{name:"number"}},leftTruncUI:{defaultValue:null,description:"- 왼쪽 Trunc UI\n- 렌더링하지 않으려면 `null`을 전달한다.",name:"leftTruncUI",required:!1,type:{name:"PaginationItemUI | null"}},rightTruncUI:{defaultValue:null,description:"- 오른쪽 Trunc UI\n- 렌더링하지 않으려면 `null`을 전달한다.",name:"rightTruncUI",required:!1,type:{name:"PaginationItemUI | null"}},previousUI:{defaultValue:null,description:"- 이전 페이지 UI\n- 렌더링하지 않으려면 `null`을 전달한다.",name:"previousUI",required:!1,type:{name:"PaginationItemUI | null"}},nextUI:{defaultValue:null,description:"- 다음 페이지 UI\n- 렌더링하지 않으려면 `null`을 전달한다.",name:"nextUI",required:!1,type:{name:"PaginationItemUI | null"}},itemUI:{defaultValue:null,description:"- 페이지 UI\n- 렌더링하지 않으려면 `null`을 전달한다.",name:"itemUI",required:!1,type:{name:"PaginationItemUI | null"}},invalidFallbackUI:{defaultValue:null,description:"- `page`값이 범위를 벗어났을 때 보여줄 Pagination UI\n- 값을 전달하지 않는 경우 기존 Pagination UI가 보임",name:"invalidFallbackUI",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Be={title:"libs/react-pagination",parameters:{layout:"fullscreen"},component:v,decorators:[e=>u("div",{style:{padding:20},children:u(e,{})})]},E=e=>{const[t,n]=x.useState(5);return x.useEffect(()=>{e.page!=null&&n(e.page)},[e.page]),u(v,{itemUI:({targetPage:r})=>u("button",{type:"button",className:"basic-pagination",children:r}),...e,page:t,onPageChange:n})},B={name:"Basic Pagination",args:{totalPageCount:10},render:E},y={name:"Without One Step Navigation",args:{totalPageCount:10},render:e=>u(E,{...e,previousUI:null,nextUI:null})},I={name:"Without Trunc UI",args:{totalPageCount:10},render:e=>u(E,{...e,leftTruncUI:null,rightTruncUI:null})},f={name:"Styled",args:{totalPageCount:10},render:e=>u(E,{...e,className:"styled-pagination",previousUI:({currentPage:t})=>u("button",{type:"button",className:"styled-pagination-item",disabled:t===1,children:u("svg",{viewBox:"0 0 24 22",children:u("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),nextUI:({lastPage:t,currentPage:n})=>u("button",{type:"button",className:"styled-pagination-item",disabled:t===n,children:u("svg",{viewBox:"0 0 24 22",children:u("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})}),itemUI:({targetPage:t})=>u("button",{type:"button",className:"styled-pagination-item",children:t}),leftTruncUI:()=>u("button",{type:"button",className:"styled-pagination-item",children:"..."}),rightTruncUI:()=>u("button",{type:"button",className:"styled-pagination-item",children:"..."})})};var M,O,$,j,w;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Basic Pagination',
  args: {
    totalPageCount: 10
  },
  render: PaginationWrapper
}`,...($=(O=B.parameters)==null?void 0:O.docs)==null?void 0:$.source},description:{story:"Basic Pagination **",...(w=(j=B.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var z,R,G,H,J;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Without One Step Navigation',
  args: {
    totalPageCount: 10
  },
  render: args => <PaginationWrapper {...args} previousUI={null} nextUI={null} />
}`,...(G=(R=y.parameters)==null?void 0:R.docs)==null?void 0:G.source},description:{story:"Without One-Step Navigation Example **",...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,Q,X,Y,Z;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Without Trunc UI',
  args: {
    totalPageCount: 10
  },
  render: args => <PaginationWrapper {...args} leftTruncUI={null} rightTruncUI={null} />
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Without Trunc UI Example **",...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,te,ue,ne,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Styled',
  args: {
    totalPageCount: 10
  },
  render: args => <PaginationWrapper {...args} className="styled-pagination" previousUI={({
    currentPage
  }) => {
    const isFirstPage = currentPage === 1;
    return <button type="button" className="styled-pagination-item" disabled={isFirstPage}>\r
            <svg viewBox="0 0 24 22">\r
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />\r
            </svg>\r
          </button>;
  }} nextUI={({
    lastPage,
    currentPage
  }) => {
    const isLastPage = lastPage === currentPage;
    return <button type="button" className="styled-pagination-item" disabled={isLastPage}>\r
            <svg viewBox="0 0 24 22">\r
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />\r
            </svg>\r
          </button>;
  }} itemUI={({
    targetPage
  }) => {
    return <button type="button" className="styled-pagination-item">\r
            {targetPage}\r
          </button>;
  }} leftTruncUI={() => {
    return <button type="button" className="styled-pagination-item">\r
            ...\r
          </button>;
  }} rightTruncUI={() => {
    return <button type="button" className="styled-pagination-item">\r
            ...\r
          </button>;
  }} />
}`,...(ue=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ue.source},description:{story:"Styling Example **",...(ae=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};const ye=["BasicPaginationStory","WithoutOneStepNavigationStory","WithoutTruncStory","StyledStory"],be=Object.freeze(Object.defineProperty({__proto__:null,BasicPaginationStory:B,StyledStory:f,WithoutOneStepNavigationStory:y,WithoutTruncStory:I,__namedExportsOrder:ye,default:Be},Symbol.toStringTag,{value:"Module"}));export{B,be as P};
