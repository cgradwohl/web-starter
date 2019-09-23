import React from 'react';

import {
  Button,
  Flex,
} from 'rebass';

import { useCount } from '../context/count';

export default function () {
  const [count, setCount] = useCount();
  return (
    <Flex>
      <Button bg="danger" onClick={() => setCount(x => x + 1)}>{<span>{count}</span>}</Button>
    </Flex>
  );
}
