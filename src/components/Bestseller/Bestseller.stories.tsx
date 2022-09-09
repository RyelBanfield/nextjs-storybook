import { ComponentMeta, ComponentStory } from "@storybook/react";

import Bestseller from ".";

export default {
  title: "Bestseller",
  component: Bestseller,
} as ComponentMeta<typeof Bestseller>;

const Template: ComponentStory<typeof Bestseller> = (args) => (
  <Bestseller {...args} />
);

export const AirMax270 = Template.bind({});
AirMax270.args = {
  title: "Nike Air Max 270",
  brand: "Nike",
  price: "$195.80",
  image: "/270.svg",
  active: true,
};

export const AirMax90 = Template.bind({});
AirMax90.args = {
  title: "Nike Air Max 90",
  brand: "Nike",
  price: "$195.80",
  image: "/90.svg",
  active: false,
};

export const AirMaxPlus = Template.bind({});
AirMaxPlus.args = {
  title: "Nike Air Max Plus",
  brand: "Nike",
  price: "$195.80",
  image: "/plus.svg",
  active: false,
};
