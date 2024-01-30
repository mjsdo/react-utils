import{j as r,a as t,F as a}from"./jsx-runtime-1H0H8r1V.js";import{M as c,b as o}from"./index-6r0ro9qP.js";import{U as i,C as d,F as l}from"./useGetState.stories-mIX81T8o.js";import{useMDXComponents as u}from"./index-RF8qTkjN.js";import"./index-FaLGlFNx.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-HNIkBU8F.js";import"../sb-preview/runtime.js";import"./index-gMreU1aJ.js";import"./index-ogXoivrg.js";import"./extends-dGVwEr9R.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function s(e){const n=Object.assign({h1:"h1",code:"code",p:"p",br:"br",pre:"pre",h2:"h2",strong:"strong",ul:"ul",li:"li"},u(),e.components);return t(a,{children:[r(c,{of:i}),`
`,r(n.h1,{id:"use-get-state",children:r(n.code,{children:"use-get-state"})}),`
`,t(n.p,{children:["구독하지 않고 최신 상태를 읽기 위한 커스텀 훅",r(n.br,{}),`
`,"react-hook-form의 getValues API와 비슷함"]}),`
`,r("br",{}),`
`,r(n.h1,{id:"installation",children:"Installation"}),`
`,r(n.pre,{children:r(n.code,{className:"language-bash",children:`\r
yarn add @mjsdo/react-use-get-state\r

`})}),`
`,r(n.h1,{id:"usage",children:"Usage"}),`
`,r(n.pre,{children:r(n.code,{className:"language-tsx",children:`import { useGetState } from '@mjsdo/react-use-get-state';\r
\r
const [, setNum] = useState(1);\r
\r
const getNum = useGetState(setNum);\r
\r
const handleSubmit = async () => {\r
  console.log(await getNum()); // 1\r
\r
  setNum((c) => c + 1);\r
\r
  console.log(await getNum()); // 2\r
\r
  setNum(111);\r
\r
  console.log(await getNum()); // 111\r
};
`})}),`
`,r(n.h1,{id:"examples",children:"Examples"}),`
`,r(n.h2,{id:"count-example",children:"Count Example"}),`
`,r(o,{of:d}),`
`,r(n.pre,{children:r(n.code,{className:"language-tsx",children:`const CountExample = () => {\r
  return (\r
    <CountProvider>\r
      <Count />\r
      <GetCountResult />\r
    </CountProvider>\r
  );\r
};\r
\r
const Count = () => {\r
  const count = useCount();\r
  const setCount = useSetCount();\r
  const renderCountRef = useRef();\r
\r
  const increase = () => setCount((c) => c + 1);\r
\r
  useEffect(() => {\r
    if (!renderCountRef.current) return;\r
\r
    const $renderCount = renderCountRef.current;\r
    $renderCount.textContent = String(\r
      (Number($renderCount.textContent) ?? -1) + 1\r
    );\r
  });\r
\r
  return (\r
    <div>\r
      <h2>Count 구독 한 컴포넌트</h2>\r
      <button type="button" onClick={increase}>\r
        Count 1 증가시키기\r
      </button>\r
      <div>\r
        <span>Count: </span>\r
        <span>{count}</span>\r
      </div>\r
\r
      <div>\r
        <span>Render: </span>\r
        <span ref={renderCountRef} />\r
      </div>\r
    </div>\r
  );\r
};\r
\r
const GetCountResult = () => {\r
  const getCount = useGetCount();\r
\r
  const renderCountRef = useRef<HTMLSpanElement>(null);\r
  const countRef = useRef<HTMLSpanElement>(null);\r
\r
  const drawGetCountResult = async () => {\r
    if (!countRef.current) return;\r
    const $count = countRef.current;\r
\r
    const count = await getCount();\r
    $count.textContent = String(count);\r
  };\r
\r
  useEffect(() => {\r
    if (!renderCountRef.current) return;\r
\r
    const $renderCount = renderCountRef.current;\r
    $renderCount.textContent = String(\r
      (Number($renderCount.textContent) ?? -1) + 1\r
    );\r
  });\r
\r
  return (\r
    <div>\r
      <h2>Count 구독 안한 컴포넌트</h2>\r
\r
      <button type="button" onClick={drawGetCountResult}>\r
        현재 Count 반영하기\r
      </button>\r
\r
      <div>\r
        <span>Count: </span>\r
        <span ref={countRef} />\r
      </div>\r
\r
      <div>\r
        <span>Render: </span>\r
        <span ref={renderCountRef} />\r
      </div>\r
    </div>\r
  );\r
};
`})}),`
`,r(n.h2,{id:"form-example",children:"Form Example"}),`
`,r(o,{of:l}),`
`,r(n.pre,{children:r(n.code,{className:"language-tsx",children:`const App = () => {\r
  return (\r
    <FormProvider>\r
      <Form />\r
    </FormProvider>\r
  );\r
};\r
const FormProvider = ({ children }) => {\r
  const [id, setId] = useState('');\r
  const [pw, setPw] = useState('');\r
\r
  const getId = useGetState(setId);\r
  const getPw = useGetState(setPw);\r
\r
  return (\r
    /** id, pw context 코드 생략*/\r
    <GetIdContext.Provider value={getId}>\r
      <GetPwContext.Provider value={getPw}>{children}</GetPwContext.Provider>\r
    </GetIdContext.Provider>\r
  );\r
};\r
const Form = () => {\r
  const getId = useGetId();\r
  const getPw = useGetPw();\r
  const onSubmit = async (e) => {\r
    e.preventDefault();\r
    const id = await getId();\r
    const pw = await getPw();\r
    alert(\`id: \${id}, pw: \${pw}\`);\r
  };\r
\r
  return (\r
    <form>\r
      <Id />\r
      <Pw />\r
      <button type="submit">Submit</button>\r
    </form>\r
  );\r
};\r
const Id = () => {\r
  const [id, setId] = useId();\r
\r
  return (\r
    <div>\r
      <span>id: </span>\r
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />\r
    </div>\r
  );\r
};\r
const Pw = () => {\r
  const [pw, setPw] = usePw();\r
\r
  return (\r
    <div>\r
      <span>id: </span>\r
      <input type="text" value={pw} onChange={(e) => setPw(e.target.value)} />\r
    </div>\r
  );\r
};
`})}),`
`,r(n.h1,{id:"api",children:"API"}),`
`,r(n.h2,{id:"usegetstate",children:r(n.code,{children:"useGetState"})}),`
`,r(n.p,{children:r(n.strong,{children:"type: hook"})}),`
`,t(n.p,{children:[r(n.code,{children:"getState"}),"를 반환하는 커스텀 훅."]}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["파라미터로 ",r(n.code,{children:"Dispatch<SetStateAction<T>>"}),"타입을 갖는 Setter를 전달해야 한다."]}),`
`]}),`
`,r(n.pre,{children:r(n.code,{className:"language-tsx",children:`import { useState } from 'react';\r
\r
import { useGetState } from '@mjsdo/react-use-get-state';\r
\r
const [, setName] = useState('Name');\r
\r
const getName = useGetState(setName);\r
\r
const func = async () => {\r
  await getName(); // "Name"\r
\r
  setName('ABC');\r
\r
  await getName(); // "ABC"\r
};
`})})]})}function R(e={}){const{wrapper:n}=Object.assign({},u(),e.components);return n?r(n,Object.assign({},e,{children:r(s,e)})):s(e)}export{R as default};
