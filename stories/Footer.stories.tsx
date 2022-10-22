import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer, { IFooter } from '../components/navigation/footer/Footer';
import { mockFooterProps } from '../components/navigation/footer/Footer.mocks';

export default {
    title: 'navigation/ Footer',
    component:  Footer,
    argTypes: {},
} as ComponentMeta<typeof  Footer>;

const Template: ComponentStory<typeof  Footer> = (args) => (
    < Footer {...args} />
);

export const Base = Template.bind({});

Base.args ={
    ...mockFooterProps.base,
} as IFooter;