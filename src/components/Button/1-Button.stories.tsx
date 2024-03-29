import React from 'react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

// export const Text = () => <Button />;

export const Emoji = () => (
  <Button>
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </Button>
);
