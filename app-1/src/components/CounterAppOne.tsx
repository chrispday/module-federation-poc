import {
  Button,
  CardContent,
  CardFooter,
  CardHeader,
  CardLarge,
  FormRow,
  TextMedium,
} from "@cmctechnology/phoenix-stockbroking-web-design";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterUpdated, IStore } from "store";

const Counter = () => {
  const [count, setCount] = useState(0);
  const theCount = useSelector((store: IStore) => store.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(counterUpdated(count));
  }, [count, dispatch]);

  return (
    <CardLarge>
      <CardHeader>
        <TextMedium>
          CRA Add by one each click <strong>APP-1</strong>
        </TextMedium>
      </CardHeader>
      <CardContent>
        <FormRow>
          <TextMedium>Your click count: {count} </TextMedium>
        </FormRow>
      </CardContent>
      <CardContent>
        <FormRow>
          <TextMedium>Count via the store: {theCount} </TextMedium>
        </FormRow>
      </CardContent>
      <CardFooter>
        <Button onClick={() => setCount(count + 1)} label="Click me" />
      </CardFooter>
    </CardLarge>
  );
};

export default Counter;
