import "./MyLabel.css";
export interface Props {
    /** Capitalize all letters */
    allCaps?: boolean;
    /** Background color */
    backgroundColor?: string;
    /** Label color */
    color?: "text-primary" | "text-secondary" | "text-tertiary";
    /** Font color */
    fontColor?: string;
    /** Text to display */
    label: string;
    /** Label size */
    size?: "normal" | "h1" | "h2" | "h3";
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: Props) => import("react/jsx-runtime").JSX.Element;
