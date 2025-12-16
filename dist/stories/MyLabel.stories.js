import { MyLabel } from "../components/MyLabel";
const meta = {
    title: "UI/Labels/MyLabel",
    component: MyLabel,
    tags: ["autodocs"],
    parameters: { layout: "centered" },
    argTypes: {
        color: { control: "select" },
        size: { control: "inline-radio" },
    },
};
export default meta;
export const Basic = {
    args: {
        label: "Basic label",
        allCaps: false,
        backgroundColor: "transparent",
        color: undefined,
        fontColor: undefined,
        size: "normal",
    },
};
export const AllCaps = {
    args: {
        allCaps: true,
        label: "All Caps label",
        size: "normal",
    },
};
export const Secondary = {
    args: {
        color: "text-secondary",
        label: "Secondary label",
        size: "normal",
    },
};
export const CustomColor = {
    args: {
        fontColor: "red",
        label: "Custom Color label",
        size: "normal",
    },
};
export const CustomBackgroundColor = {
    args: {
        backgroundColor: "red",
        fontColor: "yellow",
        label: "Custom Background Color label",
        size: "h1",
    },
};
