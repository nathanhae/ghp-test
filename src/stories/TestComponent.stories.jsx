import TestComponent from '../TestComponent';

export default {
  title: 'TestComponent',
  component: TestComponent,
};

const Template = (args) => <TestComponent {...args} />;

export const Default = {
  args: {
    name: 'Nathan',
  },
};
