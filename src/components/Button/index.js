import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Loader = () => (_jsx("div", { className: "animate-spin h-[24px] ml-4 rounded-full w-[24px] text-white border-2 border-purple border-t-light border-l-light" }));
const Button = ({ children, isLoading, isDisabled, loadingText = "", className = "", ...rest }) => {
    return (_jsxs("button", { ...rest, disabled: isDisabled, className: `rounded-md bg-purple py-2 px-2 text-sm flex flex-row justify-center items-center text-white h-[48px] disabled:bg-gray disabled:cursor-not-allowed disabled:text-black font-bold text-white hover:bg-dark-violet ${className}`, children: [isLoading && loadingText ? loadingText : children, isLoading && _jsx(Loader, {})] }));
};
export default Button;
