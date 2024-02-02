import{j as e,a as t,F as a}from"./jsx-runtime-1H0H8r1V.js";import{M as c,b as l,C as d}from"./index-BfSpPd4d.js";import{P as s,B as h}from"./Pagination.stories-yk4ElTL3.js";import{useMDXComponents as i}from"./index-RF8qTkjN.js";import"./index-FaLGlFNx.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-Um6_r2aN.js";import"../sb-preview/runtime.js";import"./index-gMreU1aJ.js";import"./index-ogXoivrg.js";import"./extends-dGVwEr9R.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./index-LgkRcltO.js";function o(r){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",h2:"h2",ul:"ul",li:"li"},i(),r.components);return t(a,{children:[e(c,{of:s}),`
`,e(n.h1,{id:"pagination",children:e(n.code,{children:"pagination"})}),`
`,e(n.p,{children:"페이지 이동을 위한 네비게이션을 제공하는 컴포넌트"}),`
`,e("br",{}),`
`,e(n.h1,{id:"installation",children:"Installation"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`yarn add @mjsdo/react-pagination
`})}),`
`,e(n.h1,{id:"props",children:"Props"}),`
`,e(l,{of:h}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`<Pagination\r
  page={10}\r
  onPageChange={setPage}\r
  totalPageCount={10}\r
  siblingCount={1}\r
  boundaryCount={1}\r
/>
`})}),`
`,e(d,{}),`
`,e(n.h1,{id:"note",children:"Note"}),`
`,e(n.h2,{id:"ui-prop에-커스텀-리액트-엘리먼트를-반환하는-함수를-전달하는-경우",children:"UI prop에 커스텀 리액트 엘리먼트를 반환하는 함수를 전달하는 경우"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"itemUI, previousUI, nextUI, truncUI의 경우도 동일하다."}),`
`,t(n.li,{children:[e(n.code,{children:"onClick"}),", ",e(n.code,{children:"className"}),"가 커스텀 컴포넌트로 전달되기 때문에, 실제 적용을 위해서 직접 커스텀 컴포넌트 내부에서 prop을 적용시켜야 한다."]}),`
`]}),`
`,e(n.p,{children:"예시)"}),`
`,t(n.p,{children:["아래와 같이 작성하면 ",e(n.code,{children:"button"}),"에 ",e(n.code,{children:"onClick"}),"및 ",e(n.code,{children:"className"}),"이 자동으로 적용되지만 (",e(n.code,{children:"onClick"}),"내부에서 ",e(n.code,{children:"onPageChange"}),"를 호출)"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`<Pagination\r
  itemUI={({}) => {\r
    return <button type="button">{}</button>;\r
  }}\r
/>
`})}),`
`,t(n.p,{children:["아래와 같이 작성하면 ",e(n.code,{children:"Button"}),"에 ",e(n.code,{children:"onClick"}),"및 ",e(n.code,{children:"className"}),"이 전달되기 때문에"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`<Pagination\r
  itemUI={({}) => {\r
    return <Button />;\r
  }}\r
/>
`})}),`
`,t(n.p,{children:["직접 ",e(n.code,{children:"Button"}),"컴포넌트에서 핸들러 및 클래스이름을 등록해줘야 한다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`<Pagination\r
  itemUI={({ targetPage }) => {\r
    return <Button targetPage={targetPage} />;\r
  }}\r
/>;\r
\r
const Button = ({ targetPage, onClick, className }) => {\r
  return (\r
    <button type="button" onClick={onClick} className={className}>\r
      {targetPage}\r
    </button>\r
  );\r
};
`})})]})}function y(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e(n,Object.assign({},r,{children:e(o,r)})):o(r)}export{y as default};
