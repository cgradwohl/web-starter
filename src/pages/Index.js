import React from 'react';

import { Card, Text } from 'rebass';

export default () => (
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
  </Card>
);
