import { jsx as _jsx } from "react/jsx-runtime";
import "./MyLabel.css";
export const MyLabel = ({ allCaps = false, backgroundColor = "transparent", color, fontColor, label, size = "normal", }) => {
    return (_jsx("span", { className: `${size} ${color} label`, style: { backgroundColor, color: `${fontColor}` }, children: allCaps ? label.toUpperCase() : label }));
};
