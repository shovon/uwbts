import * as React from 'react';
import { IState } from './store';

type ComponentType = (props: { state: IState }) => JSX.Element;

export default (state: any) =>
  (Comp: ComponentType, props: any) =>
    <Comp {...props} state={state} />;
