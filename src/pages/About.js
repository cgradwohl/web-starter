import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Flex } from 'rebass';
import { CountProvider, useCount } from '../context/count';

const Counter = () => {
  const [count, setCount] = useCount();
  return (
    <Flex>
      <span>{count}</span>
      <Button bg="danger" onClick={() => setCount(x => x + 1)}>Click Me</Button>
    </Flex>
  );
};

export default () => (
  <CountProvider>
    <Card
      fontSize={6}
      width={[1, 1, 1 / 2]}
      p={5}
      my={5}
      bg="secondary"
      borderRadius={8}
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
    >
      <FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['far', 'smile']} />
      <FontAwesomeIcon icon={['fab', 'github']} />
      <FontAwesomeIcon icon={['fab', 'react']} />
      <FontAwesomeIcon icon={['far', 'grin-alt']} />
      <FontAwesomeIcon icon={['fas', 'cannabis']} />
      <Counter />
    </Card>
  </CountProvider>
);
