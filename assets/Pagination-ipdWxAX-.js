import{j as e,a as o,F as r}from"./jsx-runtime-1H0H8r1V.js";import{M as c,b as l,C as d}from"./index-_xrdRYVv.js";import{P as s,B as h}from"./Pagination.stories-oxVTbaaB.js";import{useMDXComponents as a}from"./index-RF8qTkjN.js";import"./index-FaLGlFNx.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-SSjCCD8j.js";import"../sb-preview/runtime.js";import"./index-gMreU1aJ.js";import"./index-ogXoivrg.js";import"./extends-dGVwEr9R.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./index-LgkRcltO.js";function i(t){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",h2:"h2",ul:"ul",li:"li"},a(),t.components);return o(r,{children:[e(c,{of:s}),`
`,e(n.h1,{id:"pagination",children:e(n.code,{children:"pagination"})}),`
`,e(n.p,{children:"페이지 이동을 위한 네비게이션을 제공하는 컴포넌트"}),`
`,e("br",{}),`
`,e(n.h1,{id:"installation",children:"Installation"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`yarn add @mjsdo/react-pagination
`})}),`
`,e(n.h1,{id:"props",children:"Props"}),`
`,e(l,{of:h}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`<Pagination
  page={10}
  onPageChange={setPage}
  totalPageCount={10}
  siblingCount={1}
  boundaryCount={1}
/>
`})}),`
`,e(d,{}),`
`,e(n.h1,{id:"note",children:"Note"}),`
`,e(n.h2,{id:"ui-prop에-커스텀-리액트-엘리먼트를-반환하는-함수를-전달하는-경우",children:"UI prop에 커스텀 리액트 엘리먼트를 반환하는 함수를 전달하는 경우"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"itemUI, previousUI, nextUI, truncUI의 경우도 동일하다."}),`
`,o(n.li,{children:[e(n.code,{children:"onClick"}),", ",e(n.code,{children:"className"}),"가 커스텀 컴포넌트로 전달되기 때문에, 실제 적용을 위해서 직접 커스텀 컴포넌트 내부에서 prop을 적용시켜야 한다."]}),`
`]}),`
`,e(n.p,{children:"예시)"}),`
`,o(n.p,{children:["아래와 같이 작성하면 ",e(n.code,{children:"button"}),"에 ",e(n.code,{children:"onClick"}),"및 ",e(n.code,{children:"className"}),"이 자동으로 적용되지만 (",e(n.code,{children:"onClick"}),"내부에서 ",e(n.code,{children:"onPageChange"}),"를 호출)"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`<Pagination
  itemUI={({}) => {
    return <button type="button">{}</button>;
  }}
/>
`})}),`
`,o(n.p,{children:["아래와 같이 작성하면 ",e(n.code,{children:"Button"}),"에 ",e(n.code,{children:"onClick"}),"및 ",e(n.code,{children:"className"}),"이 전달되기 때문에"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`<Pagination
  itemUI={({}) => {
    return <Button />;
  }}
/>
`})}),`
`,o(n.p,{children:["직접 ",e(n.code,{children:"Button"}),"컴포넌트에서 핸들러 및 클래스이름을 등록해줘야 한다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`<Pagination
  itemUI={({ targetPage }) => {
    return <Button targetPage={targetPage} />;
  }}
/>;

const Button = ({ targetPage, onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {targetPage}
    </button>
  );
};
`})})]})}function y(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e(n,Object.assign({},t,{children:e(i,t)})):i(t)}export{y as default};
