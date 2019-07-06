import React from 'react';

import { Button, Card, Flex, Text } from 'rebass';

import { UserProvider, useUser } from '../context/user';
import { CountProvider, useCount } from '../context/count';

const UserInfo = () => {
  const [user] = useUser();
  return (
    <Flex>
      <Text fontFamily="main">{user.name}</Text>
    </Flex>
  );
};

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
  <UserProvider>
    <Card
      fontSize={6}
      width={[1, 1, 1 / 2]}
      p={5}
      my={5}
      bg="primary"
      borderRadius={8}
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
    >
      <Text fontFamily="main">
        we lit!!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nam ratione natusdcdc molestias dignissimos rem qui tempora amet molestiae
        porro voluptatibus quae aliquam harum, esse culpa inventore quaerat
        corporis non iusto?

        lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nam ratione natus molestias dignissimos rem qui tempora amet molestiae
        porro voluptatibus quae aliquam harum, esse culpa inventore quaerat
        corporis non iusto?
      </Text>
      <br />
      <UserInfo />
      <br />
      <CountProvider>
        <Counter />
      </CountProvider>
    </Card>
    <Card
      fontSize={6}
      width={[1, 1, 1 / 2]}
      p={5}
      my={5}
      bg="primary"
      borderRadius={8}
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
    >
      <Text fontFamily="main">
        we lit!!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nam ratione natusdcdc molestias dignissimos rem qui tempora amet molestiae
        porro voluptatibus quae aliquam harum, esse culpa inventore quaerat
        corporis non iusto?

        lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nam ratione natus molestias dignissimos rem qui tempora amet molestiae
        porro voluptatibus quae aliquam harum, esse culpa inventore quaerat
        corporis non iusto?
      </Text>
      <br />
      <UserInfo />
      <br />
      <CountProvider>
        <Counter />
      </CountProvider>
    </Card>
  </UserProvider>
);
