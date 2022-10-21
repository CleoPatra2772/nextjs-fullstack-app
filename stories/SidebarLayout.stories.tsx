import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarLayout, { ISidebarLayout } from '../components/layouts/sidebar/SidebarLayout';
import { mockSidebarLayoutProps } from '../components/layouts/sidebar/SidebarLayout.mock';

export default {
    title: 'sidebar/SidebarLayout',
    component: SidebarLayout,
    argTypes: {},
} as ComponentMeta<typeof SidebarLayout>;

const Template: ComponentStory<typeof SidebarLayout> = (args) => (
    <SidebarLayout {...args} />
);

export const Base = Template.bind({});

Base.args ={
    ...mockSidebarLayoutProps.base,
} as ISidebarLayout;