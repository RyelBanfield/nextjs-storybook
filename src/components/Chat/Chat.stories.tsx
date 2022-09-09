import { ComponentMeta, ComponentStory } from "@storybook/react";
import Image from "next/image";

import Chat from ".";

export default {
  title: "Chat",
  component: Chat,
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatar: "/avatar.png",
  name: "Emily Dougrer",
  title: "Developer",
  body: (
    <>
      Hi there.
      <span>
        <Image src="/hand.svg" alt="Hand" width={18} height={18} />
      </span>{" "}
      We use Boards to share initial goals and ideas.
    </>
  ),
};
