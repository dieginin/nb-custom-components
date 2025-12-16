import type { StoryObj } from "@storybook/react-vite";
declare const meta: {
    title: string;
    component: ({ allCaps, backgroundColor, color, fontColor, label, size, }: import("../components/MyLabel").Props) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
    argTypes: {
        color: {
            control: "select";
        };
        size: {
            control: "inline-radio";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const CustomColor: Story;
export declare const CustomBackgroundColor: Story;
