import { ComponentMeta, ComponentStory } from '@storybook/react';
import DogCard, { IDogCard } from '../components/cards/dog/DogCard';
import { mockDogCardProps } from '../components/cards/dog/DogCard.mocks';

export default {
    title: 'cards/DogCard',
    component: DogCard,
    argTypes: {},
} as ComponentMeta<typeof DogCard>;

const Template: ComponentStory<typeof DogCard> = (args) => (
    <DogCard {...args} />
);

export const Base = Template.bind({});

Base.args ={
    ...mockDogCardProps.base,
} as IDogCard;