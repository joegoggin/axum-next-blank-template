import { SVGProps } from "@/types/SVG";

const FADisabled: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM7.094 18.32L18.32 7.094C19.5165 8.63317 20.1098 10.5563 19.9885 12.5021C19.8671 14.4478 19.0394 16.2823 17.6608 17.6608C16.2823 19.0394 14.4478 19.8671 12.5021 19.9885C10.5563 20.1098 8.63317 19.5165 7.094 18.32ZM5.68 16.906C4.48347 15.3668 3.89016 13.4437 4.01154 11.4979C4.13291 9.55218 4.96062 7.7177 6.33916 6.33916C7.7177 4.96062 9.55218 4.13291 11.4979 4.01154C13.4437 3.89016 15.3668 4.48347 16.906 5.68L5.68 16.906Z"
                fill={color}
            />
        </svg>
    );
};

export default FADisabled;
