import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  color: "red",
  onClick: () => alert("Red Button Clicked"),
};

export const Blue = Template.bind({});
Blue.args = {
  color: "blue",
  onClick: () => alert("Blue Button Clicked"),
};
