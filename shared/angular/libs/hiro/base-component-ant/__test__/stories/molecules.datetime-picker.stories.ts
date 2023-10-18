import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DatetimePicker, DatetimePickerModule } from '../../src/public-api';

const meta: Meta<DatetimePicker> = {
  title: 'Molecules/DatetimePicker',
  component: DatetimePicker,
  decorators: [
    moduleMetadata({
      imports: [DatetimePickerModule],
    }),
  ],
  render: (args: DatetimePicker) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};
export default meta;

type Story = StoryObj<DatetimePicker>;

export const Primary: Story = {
  args: {
    date: new Date(),
  },
};

export const NoLabel: Story = {
  args: {
    date: new Date(),
  },
};
