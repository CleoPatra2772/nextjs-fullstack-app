import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryLayout, { IPrimaryLayout } from '../components/layouts/primary/PrimaryLayout';
import { mockPrimaryLayoutProps } from '../components/layouts/primary/PrimaryLayout.mocks';



export default {
    title: 'layouts/PrimaryLayout',
    component: PrimaryLayout,
    argTypes: {},
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
    <PrimaryLayout {...args} />
);

export const Base = Template.bind({});

Base.args ={
    ...mockPrimaryLayoutProps.base,
} as IPrimaryLayout;