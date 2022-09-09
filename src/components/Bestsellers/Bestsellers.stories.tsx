import { Meta, Story } from "@storybook/react";

import * as BestsellerStories from "../Bestseller/Bestseller.stories";
import Bestsellers from ".";

export default {
  title: "Bestsellers",
  component: Bestsellers,
} as Meta<typeof Bestsellers>;

const Template: Story<typeof Bestsellers> = (args) => <Bestsellers {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { ...BestsellerStories.AirMax270.args },
    { ...BestsellerStories.AirMax90.args },
    { ...BestsellerStories.AirMaxPlus.args },
  ],
};
