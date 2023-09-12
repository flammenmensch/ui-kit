import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'atoms/Typography',
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof HTMLElement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>
        Primary <code>p</code> <code>span</code>
      </p>
      <p>
        <small>Secondary</small> <code>small</code>
      </p>
      <p>
        <a href="#">Link</a> <code>a</code>
      </p>
      <p>
        <abbr>Abbr.</abbr> <code>abbr</code>
      </p>
      <p>
        <strong>Bold</strong> <code>b</code> <code>strong</code>
      </p>
      <p>
        <em>Italic</em> <code>i</code> <code>em</code> <code>cite</code>
      </p>
      <p>
        <u>Underline</u> <code>u</code>
      </p>
      <p>
        <s>Strikethrough</s> <code>s</code>
      </p>
      <p>
        <mark>Highlighted</mark> <code>mark</code>
      </p>
      <p>
        <ins>Inserted</ins> <code>ins</code>
      </p>
      <p>
        <del>Deleted</del> <code>del</code>
      </p>
      <p>
        <kbd>Cmd+S</kbd> <code>kbd</code>
      </p>
    </div>
  ),
};
