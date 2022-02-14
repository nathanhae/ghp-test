import StateComponent from '../StateComponent';

export default {
  title: 'StateComponent',
  component: StateComponent,
};

const Template = (args) => <StateComponent {...args} />;

export const Default = {
  args: {
    borderColor: 'red',
  },
};
