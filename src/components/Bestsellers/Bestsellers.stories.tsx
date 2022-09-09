import { ComponentMeta, ComponentStory } from "@storybook/react";

import * as BestsellerStories from "../Bestseller/Bestseller.stories";
import Bestsellers from ".";

export default {
  title: "Bestsellers",
  component: Bestsellers,
} as ComponentMeta<typeof Bestsellers>;

const Template: ComponentStory<typeof Bestsellers> = (args) => (
  <Bestsellers {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { ...BestsellerStories.AirMax270.args },
    { ...BestsellerStories.AirMax90.args },
    { ...BestsellerStories.AirMaxPlus.args },
  ],
};
