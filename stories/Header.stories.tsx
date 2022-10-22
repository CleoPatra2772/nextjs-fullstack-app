import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header, { IHeader } from '../components/navigation/header/Header';
import { mockHeaderProps } from '../components/navigation/header/Header.mocks';

export default {
    title: 'navigation/Header',
    component: Header,
    argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
    <Header {...args} />
);

export const Base = Template.bind({});

Base.args ={
    ...mockHeaderProps.base,
} as IHeader;