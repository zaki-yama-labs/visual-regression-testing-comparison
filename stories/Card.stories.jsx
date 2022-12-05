import React from "react";

import { Card } from "../components/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card",
  component: Card,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ display: "flex" }}>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  href: "https://example.com",
  title: "Title",
  description: "This is the description.",
};

export const 日本語 = Template.bind({});
日本語.args = {
  href: "https://example.com",
  title: "日本語タイトル",
  description: "これは日本語の説明文です",
};
