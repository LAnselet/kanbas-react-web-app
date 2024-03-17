import React from 'react';
import ClickEvent from './ClickEvent';
import EventObject from './EventObject';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from './PassingFunctions';
import Counter from './Counter';
import BooleanStateVariables from './BooleanStateVariables';
import StringStateVariables from './StringStateVariables';
import DateStateVariable from './DateStateVariables';
import ObjectStateVariable from './ObjectStateVariable';
import ArrayStateVariable from './ArrayStateVariable';
import ParentStateComponent from './ParentStateComponent';
import HelloRedux from './ReduxExamples/HelloRedux';
import CounterRedux from './ReduxExamples/CounterRedux';
import AddRedux from './ReduxExamples/AddRedux';

const Assignment4 = () => {
  function sayHello() {
    alert('Hello');
  }
  return (
    <>
      <h1>Assignment 4</h1>
      <AddRedux />
      <CounterRedux />
      <HelloRedux />
      <ParentStateComponent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <DateStateVariable />
      <StringStateVariables />
      <BooleanStateVariables />
      <Counter />
      <EventObject />
      <PassingFunctions theFunction={sayHello} />
      <PassingDataOnEvent />
      <ClickEvent />
    </>
  );
};

export default Assignment4;
