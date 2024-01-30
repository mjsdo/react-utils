import type { Meta, StoryObj } from '@storybook/react';
import type {
  PropsWithChildren,
  SetStateAction,
  Dispatch,
  FormEventHandler,
} from 'react';

import { useRenderHighlight } from '@mjsdo/shared-dev';
import React, {
  useMemo,
  useEffect,
  createContext,
  useContext,
  useState,
  useRef,
} from 'react';

import { useGetState } from './useGetState';

const meta = {
  title: 'libs/react-use-get-state',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 10 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

/* --------------- Examples --------------- */

/*** Count ***/
const countStyle = { border: '1px solid grey', padding: 10 };
const CountContext = createContext<number>(0);
const GetCountContext = createContext<() => Promise<number>>(() =>
  Promise.resolve(0)
);

const SetCountContext = createContext<Dispatch<SetStateAction<number>>>(
  () => {}
);
const useCount = () => useContext(CountContext);
const useGetCount = () => useContext(GetCountContext);
const useSetCount = () => useContext(SetCountContext);

const CountProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const getCount = useGetState(setCount);

  return (
    <CountContext.Provider value={count}>
      <GetCountContext.Provider value={getCount}>
        <SetCountContext.Provider value={setCount}>
          {children}
        </SetCountContext.Provider>
      </GetCountContext.Provider>
    </CountContext.Provider>
  );
};

const CountExample = () => {
  return (
    <CountProvider>
      <Count />

      <br />
      <GetCountResult />
    </CountProvider>
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
    <div style={countStyle}>
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

const Count = () => {
  const count = useCount();
  const renderCountRef = useRef<HTMLSpanElement>(null);
  const setCount = useSetCount();
  const increase = () => setCount((c) => c + 1);

  useEffect(() => {
    if (!renderCountRef.current) return;
    const $renderCount = renderCountRef.current;

    $renderCount.textContent = String(
      (Number($renderCount.textContent) ?? -1) + 1
    );
  });

  return (
    <div style={countStyle}>
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

export const CountStory: StoryObj = {
  name: 'Count',
  render: () => <CountExample />,
};

/*** Form ***/
const IdContext = createContext<[string, Dispatch<SetStateAction<string>>]>([
  '',
  () => {},
]);
const PwContext = createContext<[string, Dispatch<SetStateAction<string>>]>([
  '',
  () => {},
]);
const GetIdContext = createContext<() => Promise<string>>(() =>
  Promise.resolve('')
);
const GetPwContext = createContext<() => Promise<string>>(() =>
  Promise.resolve('')
);

const FormProvider = ({ children }: PropsWithChildren) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const getId = useGetState(setId);
  const getPw = useGetState(setPw);

  const memoizedIdContext = useMemo(
    () => [id, setId] as [string, Dispatch<SetStateAction<string>>],
    [id]
  );
  const memoizedPwContext = useMemo(
    () => [pw, setPw] as [string, Dispatch<SetStateAction<string>>],
    [pw]
  );

  return (
    <IdContext.Provider value={memoizedIdContext}>
      <PwContext.Provider value={memoizedPwContext}>
        <GetIdContext.Provider value={getId}>
          <GetPwContext.Provider value={getPw}>
            {children}
          </GetPwContext.Provider>
        </GetIdContext.Provider>
      </PwContext.Provider>
    </IdContext.Provider>
  );
};

const FormExample = () => {
  const [, force] = useState({});
  const getId = useContext(GetIdContext);
  const getPw = useContext(GetPwContext);
  const renderHighlightRef = useRenderHighlight();
  const rerenderForm = () => force({});

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const id = await getId();
    const pw = await getPw();
    alert(`id: ${id}, pw: ${pw}`);
  };

  return (
    <form onSubmit={onSubmit} ref={renderHighlightRef}>
      <Id />
      <Pw />
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={rerenderForm}>
        Form 리렌더
      </button>
    </form>
  );
};

const Id = () => {
  const renderHighlightRef = useRenderHighlight();
  const [id, setId] = useContext(IdContext);

  return (
    <div ref={renderHighlightRef}>
      <span>id: </span>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
    </div>
  );
};
const Pw = () => {
  const renderHighlightRef = useRenderHighlight();
  const [pw, setPw] = useContext(PwContext);

  return (
    <div ref={renderHighlightRef}>
      <span>pw: </span>
      <input type="text" value={pw} onChange={(e) => setPw(e.target.value)} />
    </div>
  );
};

export const FormStory: StoryObj = {
  name: 'Form',
  decorators: [
    (Story) => (
      <FormProvider>
        <Story />
      </FormProvider>
    ),
  ],
  render: () => <FormExample />,
};
