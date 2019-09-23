import React from 'react';

import {
  Flex,
  Text,
} from 'rebass';

import { useUser } from '../context/user';

export default () => {
  const [user] = useUser();
  return (
    <Flex>
      <Text fontFamily="main">{user.name}</Text>
    </Flex>
  );
};
