import{j as n,a as ct,F as dt}from"./jsx-runtime-1H0H8r1V.js";import{r as x}from"./index-FaLGlFNx.js";import{$ as T}from"./index-LgkRcltO.js";function D(t,[e,u]){return Math.min(u,Math.max(e,t))}var _=(t=>(t.LEFT="trunc-left",t.RIGHT="trunc-right",t))(_||{});const l=(t,e)=>t>e?[]:t===e?[t]:Array(e-t+1).fill(void 0).map((u,r)=>r+t),pt=t=>{const{page:e,totalPageCount:u,siblingCount:r,boundaryCount:h,firstPage:p=1}=t,b=[p,u],P=p,C=D(h,[p-1,u]),g=D(e-r,b),m=D(e+r,b),i=u-h+1,c=u;let d;return C+1>=i||C+1>=g&&m+1>=i?d=l(P,c):C+1>=g?d=[...l(p,Math.max(C,m)),"trunc-right",...l(i,c)]:m+1>=i?d=[...l(P,C),"trunc-left",...l(Math.min(i,g),c)]:d=[...l(P,C),"trunc-left",...l(g,m),"trunc-right",...l(i,c)],d},v=(...t)=>t.filter(Boolean).join(" "),N=1,s={item:"pagination-item",trunc:"pagination-item__trunc",leftTrunc:"pagination-item__trunc--left",rightTrunc:"pagination-item__trunc--right",previous:"pagination-item__previous",next:"pagination-item__next",currentPage:"pagination-item--current-page"},A=t=>{const{page:e,totalPageCount:u,onPageChange:r,siblingCount:h=1,boundaryCount:p=1,truncStep:b=5,leftTruncUI:P=k,rightTruncUI:C=k,previousUI:g=gt,nextUI:m=mt,itemUI:i=Bt,invalidFallbackUI:c,className:d,style:it}=t,F=a=>N<=a&&a<=u,V=F(e),ot=!V&&c,W=[N,u],st=pt({page:e,totalPageCount:u,siblingCount:h,boundaryCount:p,firstPage:N}),E={currentPage:e,isCurrentPageValid:V,lastPage:u},Ct=a=>{const o=r&&(()=>r(a)),U=a===e;return n(x.Fragment,{children:i&&n(T,{onClick:o,className:v(s.item,U&&s.currentPage),children:i({...E,targetPage:a})})},a)},q=(a,o,U)=>{const M=r&&(()=>r(o)),lt=`trunc-${o}`;return a&&n(T,{onClick:M,className:v(s.item,s.trunc,U),children:a({...E,targetPage:o})},lt)},L=(a,o,U)=>a&&n(T,{onClick:r&&(()=>{F(o)&&r(o)}),className:v(s.item,U),children:a({...E,targetPage:o})});return n("div",{style:it,className:v(d,"pagination-root"),children:ot?c:ct(dt,{children:[L(g,e-1,s.previous),st.map(a=>a===_.LEFT?q(P,D(e-b,W),s.leftTrunc):a===_.RIGHT?q(C,D(e+b,W),s.rightTrunc):Ct(a)),L(m,e+1,s.next)]})})},k=()=>n("button",{type:"button",children:"⋯"}),gt=()=>n("button",{type:"button",children:"<"}),mt=()=>n("button",{type:"button",children:">"}),Bt=({targetPage:t})=>n("button",{type:"button",children:t});try{A.displayName="Pagination",A.__docgenInfo={description:"",displayName:"Pagination",props:{page:{defaultValue:null,description:"페이지 상태",name:"page",required:!0,type:{name:"number"}},totalPageCount:{defaultValue:null,description:"전체 페이지 개수",name:"totalPageCount",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"- 페이지네이션 아이템 UI를 클릭할 때 수행되는 콜백\n- 각 UI 컴포넌트에 `onClick` 핸들러가 있는경우 합성된다.",name:"onPageChange",required:!1,type:{name:"((page: number) => void)"}},siblingCount:{defaultValue:{value:"1"},description:`- 0 이상이어야 함
- 현재 페이지 UI의 앞뒤로 표시할 페이지의 개수`,name:"siblingCount",required:!1,type:{name:"number"}},boundaryCount:{defaultValue:{value:"1"},description:`- 0 이상이어야 함
- 첫 페이지 UI의 뒤로, 마지막 페이지 UI의 앞으로 표시할 페이지의 개수`,name:"boundaryCount",required:!1,type:{name:"number"}},truncStep:{defaultValue:{value:"5"},description:"- Trunc UI를 클릭했을 때 이동할 페이지를 결정\n- 현재 페이지가 5, `truncStep`이 1이면, trunc UI 클릭시 4 또는 6으로 이동",name:"truncStep",required:!1,type:{name:"number"}},leftTruncUI:{defaultValue:null,description:"- 왼쪽 Trunc UI\n- 렌더링하지 않으려면 `null`을 전달한다.",name:"leftTruncUI",required:!1,type:{name:"PaginationItemUI | null"}},rightTruncUI:{defaultValue:null,description:"- 오른쪽 Trunc UI\n- 렌더링하지 않으려면 `null`을 전달한다.",name:"rightTruncUI",required:!1,type:{name:"PaginationItemUI | null"}},previousUI:{defaultValue:null,description:"- 이전 페이지 UI\n- 렌더링하지 않으려면 `null`을 전달한다.",name:"previousUI",required:!1,type:{name:"PaginationItemUI | null"}},nextUI:{defaultValue:null,description:"- 다음 페이지 UI\n- 렌더링하지 않으려면 `null`을 전달한다.",name:"nextUI",required:!1,type:{name:"PaginationItemUI | null"}},itemUI:{defaultValue:null,description:"- 페이지 UI\n- 렌더링하지 않으려면 `null`을 전달한다.",name:"itemUI",required:!1,type:{name:"PaginationItemUI | null"}},invalidFallbackUI:{defaultValue:null,description:"- `page`값이 범위를 벗어났을 때 보여줄 Pagination UI\n- 값을 전달하지 않는 경우 기존 Pagination UI가 보임",name:"invalidFallbackUI",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const yt={title:"libs/react-pagination",parameters:{layout:"fullscreen"},component:A,decorators:[t=>n("div",{style:{padding:20},children:n(t,{})})]},S=t=>{const[e,u]=x.useState(5);return x.useEffect(()=>{t.page!=null&&u(t.page)},[t.page]),n(A,{itemUI:({targetPage:r})=>n("button",{type:"button",className:"basic-pagination",children:r}),...t,page:e,onPageChange:u})},B={name:"Basic Pagination",args:{totalPageCount:10},render:S},y={name:"Without One Step Navigation",args:{totalPageCount:10},render:t=>n(S,{...t,previousUI:null,nextUI:null})},I={name:"Without Trunc UI",args:{totalPageCount:10},render:t=>n(S,{...t,leftTruncUI:null,rightTruncUI:null})},f={name:"Styled",args:{totalPageCount:10},render:t=>n(S,{...t,className:"styled-pagination",previousUI:({currentPage:e})=>n("button",{type:"button",className:"styled-pagination-item",disabled:e===1,children:n("svg",{viewBox:"0 0 24 22",children:n("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),nextUI:({lastPage:e,currentPage:u})=>n("button",{type:"button",className:"styled-pagination-item",disabled:e===u,children:n("svg",{viewBox:"0 0 24 22",children:n("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})}),itemUI:({targetPage:e})=>n("button",{type:"button",className:"styled-pagination-item",children:e}),leftTruncUI:()=>n("button",{type:"button",className:"styled-pagination-item",children:"..."}),rightTruncUI:()=>n("button",{type:"button",className:"styled-pagination-item",children:"..."})})};var O,$,j,w,z;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Basic Pagination',
  args: {
    totalPageCount: 10
  },
  render: PaginationWrapper
}`,...(j=($=B.parameters)==null?void 0:$.docs)==null?void 0:j.source},description:{story:"Basic Pagination **",...(z=(w=B.parameters)==null?void 0:w.docs)==null?void 0:z.description}}};var R,G,H,J,K;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Without One Step Navigation',
  args: {
    totalPageCount: 10
  },
  render: args => <PaginationWrapper {...args} previousUI={null} nextUI={null} />
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"Without One-Step Navigation Example **",...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,tt;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Without Trunc UI',
  args: {
    totalPageCount: 10
  },
  render: args => <PaginationWrapper {...args} leftTruncUI={null} rightTruncUI={null} />
}`,...(Y=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Without Trunc UI Example **",...(tt=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:tt.description}}};var et,nt,ut,at,rt;f.parameters={...f.parameters,docs:{...(et=f.parameters)==null?void 0:et.docs,source:{originalSource:`{
  name: 'Styled',
  args: {
    totalPageCount: 10
  },
  render: args => <PaginationWrapper {...args} className="styled-pagination" previousUI={({
    currentPage
  }) => {
    const isFirstPage = currentPage === 1;
    return <button type="button" className="styled-pagination-item" disabled={isFirstPage}>
            <svg viewBox="0 0 24 22">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>;
  }} nextUI={({
    lastPage,
    currentPage
  }) => {
    const isLastPage = lastPage === currentPage;
    return <button type="button" className="styled-pagination-item" disabled={isLastPage}>
            <svg viewBox="0 0 24 22">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>;
  }} itemUI={({
    targetPage
  }) => {
    return <button type="button" className="styled-pagination-item">
            {targetPage}
          </button>;
  }} leftTruncUI={() => {
    return <button type="button" className="styled-pagination-item">
            ...
          </button>;
  }} rightTruncUI={() => {
    return <button type="button" className="styled-pagination-item">
            ...
          </button>;
  }} />
}`,...(ut=(nt=f.parameters)==null?void 0:nt.docs)==null?void 0:ut.source},description:{story:"Styling Example **",...(rt=(at=f.parameters)==null?void 0:at.docs)==null?void 0:rt.description}}};const It=["BasicPaginationStory","WithoutOneStepNavigationStory","WithoutTruncStory","StyledStory"],Ut=Object.freeze(Object.defineProperty({__proto__:null,BasicPaginationStory:B,StyledStory:f,WithoutOneStepNavigationStory:y,WithoutTruncStory:I,__namedExportsOrder:It,default:yt},Symbol.toStringTag,{value:"Module"}));export{B,Ut as P};
