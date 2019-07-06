import React from 'react';
import { Link } from 'react-navi';
import { Flex, Button } from 'rebass';

export default () => (
  <Flex>
    <Link href="/">
      <Button bg="primary">HOME</Button>
    </Link>
    <Link href="/about">
      <Button bg="secondary">About</Button>
    </Link>
  </Flex>
);
