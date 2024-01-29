import{j as n,a as t,F as s}from"./jsx-runtime-1H0H8r1V.js";import{M as r,b as c}from"./index-D_dKYYsW.js";import{C as d,B as p,R as l}from"./ComponentStack.stories-jim9YK8o.js";import{useMDXComponents as a}from"./index-RF8qTkjN.js";import"./index-FaLGlFNx.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-9jtpU3vm.js";import"../sb-preview/runtime.js";import"./index-gMreU1aJ.js";import"./index-ogXoivrg.js";import"./extends-dGVwEr9R.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function i(o){const e=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",h2:"h2",strong:"strong",hr:"hr",h3:"h3"},a(),o.components);return t(s,{children:[n(r,{of:d}),`
`,n(e.h1,{id:"component-stack",children:n(e.code,{children:"component-stack"})}),`
`,n(e.p,{children:"컴포넌트를 쌓기위한 컴포넌트"}),`
`,n("br",{}),`
`,n(e.h1,{id:"installation",children:"Installation"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`yarn add @mjsdo/react-component-stack
`})}),`
`,n(e.h1,{id:"usage",children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import {
  ComponentStack,
  ComponentStackProvider,
} from '@mjsdo/react-component-stack';

<ComponentStackProvider>
  <ComponentStack stackKey="key1" />
  <ComponentStack stackKey="key2" />
</ComponentStackProvider>;
`})}),`
`,n(e.h1,{id:"examples",children:"Examples"}),`
`,n(e.h2,{id:"basic-example",children:"Basic Example"}),`
`,n(c,{of:p}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`// app.tsx
import {
  ComponentStackProvider,
  ComponentStack,
} from '@mjsdo/react-component-stack';
import { BasicExample } from './basic-example';

const App = () => {
  return (
    <ComponentStackProvider>
      <BasicExample />
      <ComponentStack stackKey="basic" />
    </ComponentStackProvider>
  );
};

// basic-example.tsx
import { useSetComponentStack } from '@mjsdo/react-component-stack';

const BasicExample = () => {
  const { push, pop, remove } = useSetComponentStack();
  const onPush = () => {
    push('basic', {
      node: ({ id }) => (
        <div>
          Auto generated item id:
          <strong style={{ color: 'blue' }}>{id}</strong>
        </div>
      ),
    });
  };
  const onPop = () => {
    pop('basic');
  };
  const onRemove = () => {
    remove('basic', () => true);
  };
  return (
    <>
      <button type="button" onClick={onPush}>
        Push
      </button>
      <button type="button" onClick={onPop}>
        Pop
      </button>
      <button type="button" onClick={onRemove}>
        Remove first item
      </button>
    </>
  );
};
`})}),`
`,n(e.h2,{id:"dialog-stack-example",children:"Dialog Stack Example"}),`
`,n(c,{of:l}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`// app.tsx
import {
  ComponentStackProvider,
  ComponentStack,
} from '@mjsdo/react-component-stack';
import { Header } from './header';

const App = () => {
  return (
    <ComponentStackProvider>
      <Header />
      <ComponentStack stackKey="dialog" />
    </ComponentStackProvider>
  );
};

// header.tsx
import { useSetComponentStack } from '@mjsdo/react-component-stack';

const Header = () => {
  const { push } = useSetComponentStack();
  const onClickOpen = () => {
    push('dialog', {
      /** id는 작성하지 않아도 자동으로 추가된다. */
      id: '123',
      node: <Dialog1 />,
    });
  };

  return (
    <div>
      <button type="button" onClick={onClickOpen}>
        Open
      </button>
    </div>
  );
};

const Dialog1 = () => {
  const { push, pop } = useSetComponentStack();
  const onClickOpen = () => {
    push('dialog', {
      /** \`node\`는 함수로 전달 가능 */
      node: ({ id, dismiss }) => <Dialog2 onClose={dismiss} />,
    });
  };

  const onClickClose = () => {
    pop();
  };

  return (
    <DialogRoot>
      <DialogOverlay />
      <DialogContent>
        <button type="button">Open</button>
        <button type="button" onClick={onClickClose}>
          X
        </button>
      </DialogContent>
    </DialogRoot>
  );
};

const Dialog2 = ({ onClose }) => {
  return (
    <DialogRoot>
      <DialogOverlay />
      <DialogContent
        onPointerDownOutside={onClose}
        onEscapeKeyDown={onClose}
        //
      >
        <button type="button">Open</button>
        <button type="button" onClick={onClose}>
          X
        </button>
      </DialogContent>
    </DialogRoot>
  );
};
`})}),`
`,n(e.h1,{id:"api",children:"API"}),`
`,n(e.h2,{id:"componentstackprovider",children:n(e.code,{children:"ComponentStackProvider"})}),`
`,n(e.p,{children:n(e.strong,{children:"type: component"})}),`
`,t(e.p,{children:[n(e.code,{children:"ComponentStack"}),"과 ",n(e.code,{children:"useSetComponentStack"}),", ",n(e.code,{children:"useComponentStackValue"}),"를 사용하기 위한 context provider"]}),`
`,n(e.hr,{}),`
`,n(e.h2,{id:"componentstack",children:n(e.code,{children:"ComponentStack"})}),`
`,n(e.p,{children:n(e.strong,{children:"type: component"})}),`
`,t(e.p,{children:["스택에 있는 ",n(e.code,{children:"node"}),"를 순차적으로 렌더링하는 컴포넌트"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`
// abc키에 해당하는 스택의 상태가 다음과 같다면
stack = [
  { id: '1', node: <div>1</div> },
  { id: '2', node: <div>2</div> },
  { id: '3', node: ({ id, dismiss }) => <div>3</div> },
];

<ComponentStack stackKey="abc" />
// 위 컴포넌트의 내부에는 다음 컴포넌트가 렌더링된다.
<div>1</div>
<div>2</div>
<div>3</div>

`})}),`
`,n(e.h2,{id:"usecomponentstackvalue",children:n(e.code,{children:"useComponentStackValue"})}),`
`,n(e.p,{children:n(e.strong,{children:"type: hook"})}),`
`,n(e.p,{children:"스택 상태를 반환하는 커스텀 훅."}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { useComponentStackValue } from '@mjsdo/react-component-stack';

const stack = useComponentStackValue('stackKey');
`})}),`
`,n(e.h2,{id:"usesetcomponentstack",children:n(e.code,{children:"useSetComponentStack"})}),`
`,n(e.p,{children:n(e.strong,{children:"type: hook"})}),`
`,n(e.p,{children:"스택 상태를 업데이트하기 위한 커스텀 훅"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { useSetComponentStack } from '@mjsdo/react-component-stack';

const { push, pop, remove } = useSetComponentStack();
`})}),`
`,n(e.h3,{id:"push",children:"push"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`push('stackKey', {
  id: '1',
  node: <div>1</div>,
});

// id를 넣지 않아도 자동생성
push('stackKey', {
  node: <div>1</div>,
});

// \`dismiss\`는 현재 \`push\`하려는 아이템을 제거하는 함수
push('stackKey', {
  node: ({ id, dismiss }) => <div>1</div>,
});
`})}),`
`,n(e.h3,{id:"pop",children:"pop"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:"// `stackKey`에 해당하는 스택에서 가장 마지막에 `push`한 아이템을 제거\npop('stackKey');\n"})}),`
`,n(e.h3,{id:"remove",children:"remove"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:"// `stackKey`에 해당하는 스택에서 조건에 맞는 아이템중 가장 일찍 `push`했던 아이템을 제거\n// 동일한 조건을 만족하는 아이템이 여러개 있어도 1개만 제거된다.\nremove('stackKey', ({ id, node }) => id === '1');\n"})})]})}function P(o={}){const{wrapper:e}=Object.assign({},a(),o.components);return e?n(e,Object.assign({},o,{children:n(i,o)})):i(o)}export{P as default};
