import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/Mylabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args } />;

export const Basic = Template.bind({});
Basic.args = {
    size: "normal"
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: "h2",
    allCaps: true 
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: "h3",
    color: 'primary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: "h1",
}


