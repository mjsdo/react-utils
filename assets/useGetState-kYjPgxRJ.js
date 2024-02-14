import{j as e,a as o,F as a}from"./jsx-runtime-1H0H8r1V.js";import{M as c,b as r}from"./index-_xrdRYVv.js";import{U as i,C as d,F as l}from"./useGetState.stories-lW3DWqtx.js";import{useMDXComponents as u}from"./index-RF8qTkjN.js";import"./index-FaLGlFNx.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-SSjCCD8j.js";import"../sb-preview/runtime.js";import"./index-gMreU1aJ.js";import"./index-ogXoivrg.js";import"./extends-dGVwEr9R.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function s(t){const n=Object.assign({h1:"h1",code:"code",p:"p",br:"br",pre:"pre",h2:"h2",strong:"strong",ul:"ul",li:"li"},u(),t.components);return o(a,{children:[e(c,{of:i}),`
`,e(n.h1,{id:"use-get-state",children:e(n.code,{children:"use-get-state"})}),`
`,o(n.p,{children:["구독하지 않고 최신 상태를 읽기 위한 커스텀 훅",e(n.br,{}),`
`,"react-hook-form의 getValues API와 비슷함"]}),`
`,e("br",{}),`
`,e(n.h1,{id:"installation",children:"Installation"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`
yarn add @mjsdo/react-use-get-state

`})}),`
`,e(n.h1,{id:"usage",children:"Usage"}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`import { useGetState } from '@mjsdo/react-use-get-state';

const [, setNum] = useState(1);

const getNum = useGetState(setNum);

const handleSubmit = async () => {
  console.log(await getNum()); // 1

  setNum((c) => c + 1);

  console.log(await getNum()); // 2

  setNum(111);

  console.log(await getNum()); // 111
};
`})}),`
`,e(n.h1,{id:"examples",children:"Examples"}),`
`,e(n.h2,{id:"count-example",children:"Count Example"}),`
`,e(r,{of:d}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`const CountExample = () => {
  return (
    <CountProvider>
      <Count />
      <GetCountResult />
    </CountProvider>
  );
};

const Count = () => {
  const count = useCount();
  const setCount = useSetCount();
  const renderCountRef = useRef();

  const increase = () => setCount((c) => c + 1);

  useEffect(() => {
    if (!renderCountRef.current) return;

    const $renderCount = renderCountRef.current;
    $renderCount.textContent = String(
      (Number($renderCount.textContent) ?? -1) + 1
    );
  });

  return (
    <div>
      <h2>Count 구독 한 컴포넌트</h2>
      <button type="button" onClick={increase}>
        Count 1 증가시키기
      </button>
      <div>
        <span>Count: </span>
        <span>{count}</span>
      </div>

      <div>
        <span>Render: </span>
        <span ref={renderCountRef} />
      </div>
    </div>
  );
};

const GetCountResult = () => {
  const getCount = useGetCount();

  const renderCountRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  const drawGetCountResult = async () => {
    if (!countRef.current) return;
    const $count = countRef.current;

    const count = await getCount();
    $count.textContent = String(count);
  };

  useEffect(() => {
    if (!renderCountRef.current) return;

    const $renderCount = renderCountRef.current;
    $renderCount.textContent = String(
      (Number($renderCount.textContent) ?? -1) + 1
    );
  });

  return (
    <div>
      <h2>Count 구독 안한 컴포넌트</h2>

      <button type="button" onClick={drawGetCountResult}>
        현재 Count 반영하기
      </button>

      <div>
        <span>Count: </span>
        <span ref={countRef} />
      </div>

      <div>
        <span>Render: </span>
        <span ref={renderCountRef} />
      </div>
    </div>
  );
};
`})}),`
`,e(n.h2,{id:"form-example",children:"Form Example"}),`
`,e(r,{of:l}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`const App = () => {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
};
const FormProvider = ({ children }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const getId = useGetState(setId);
  const getPw = useGetState(setPw);

  return (
    /** id, pw context 코드 생략*/
    <GetIdContext.Provider value={getId}>
      <GetPwContext.Provider value={getPw}>{children}</GetPwContext.Provider>
    </GetIdContext.Provider>
  );
};
const Form = () => {
  const getId = useGetId();
  const getPw = useGetPw();
  const onSubmit = async (e) => {
    e.preventDefault();
    const id = await getId();
    const pw = await getPw();
    alert(\`id: \${id}, pw: \${pw}\`);
  };

  return (
    <form>
      <Id />
      <Pw />
      <button type="submit">Submit</button>
    </form>
  );
};
const Id = () => {
  const [id, setId] = useId();

  return (
    <div>
      <span>id: </span>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
    </div>
  );
};
const Pw = () => {
  const [pw, setPw] = usePw();

  return (
    <div>
      <span>id: </span>
      <input type="text" value={pw} onChange={(e) => setPw(e.target.value)} />
    </div>
  );
};
`})}),`
`,e(n.h1,{id:"api",children:"API"}),`
`,e(n.h2,{id:"usegetstate",children:e(n.code,{children:"useGetState"})}),`
`,e(n.p,{children:e(n.strong,{children:"type: hook"})}),`
`,o(n.p,{children:[e(n.code,{children:"getState"}),"를 반환하는 커스텀 훅."]}),`
`,o(n.ul,{children:[`
`,o(n.li,{children:["파라미터로 ",e(n.code,{children:"Dispatch<SetStateAction<T>>"}),"타입을 갖는 Setter를 전달해야 한다."]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`import { useState } from 'react';

import { useGetState } from '@mjsdo/react-use-get-state';

const [, setName] = useState('Name');

const getName = useGetState(setName);

const func = async () => {
  await getName(); // "Name"

  setName('ABC');

  await getName(); // "ABC"
};
`})})]})}function R(t={}){const{wrapper:n}=Object.assign({},u(),t.components);return n?e(n,Object.assign({},t,{children:e(s,t)})):s(t)}export{R as default};
