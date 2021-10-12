import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  TextMedium,
} from "@cmctechnology/phoenix-stockbroking-web-design";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions, IStore } from "store";

const Counter = () => {
  const [count, setCount] = useState(1);
  const theCount = useSelector((store: IStore) => store.counter.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(counterActions.incrementByAmount(count));
  }, [count, dispatch]);

  return (
    <Form>
      <FormGroup>
        CRA Multiply by two each click <strong>APP-2</strong>
      </FormGroup>
      <FormGroup>
        <FormLabel>Your click count: {count}</FormLabel>
        <Button
          onClick={() => setCount((prevState) => prevState * 2)}
          label="Click me"
        />
      </FormGroup>
      <FormGroup>
        <TextMedium>Count via the store: {theCount} </TextMedium>
      </FormGroup>
    </Form>
  );
};

export default Counter;
