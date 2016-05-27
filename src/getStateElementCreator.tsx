import * as React from 'react';
import { IState } from './store';

type ComponentType = (props: { state: IState }) => JSX.Element;

const getStateElementCreator = (state: any) =>
  (Comp: ComponentType, props: any) =>
    <Comp {...props} state={state} />

export default getStateElementCreator;
