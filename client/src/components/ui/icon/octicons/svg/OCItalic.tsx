import { SVGProps } from "@/types/SVG";

const OCItalic: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M10 5.25C10 5.05109 10.079 4.86032 10.2197 4.71967C10.3603 4.57902 10.5511 4.5 10.75 4.5H19.25C19.4489 4.5 19.6397 4.57902 19.7803 4.71967C19.921 4.86032 20 5.05109 20 5.25C20 5.44891 19.921 5.63968 19.7803 5.78033C19.6397 5.92098 19.4489 6 19.25 6H15.736L9.908 19H13.25C13.4489 19 13.6397 19.079 13.7803 19.2197C13.921 19.3603 14 19.5511 14 19.75C14 19.9489 13.921 20.1397 13.7803 20.2803C13.6397 20.421 13.4489 20.5 13.25 20.5H4.75C4.55109 20.5 4.36032 20.421 4.21967 20.2803C4.07902 20.1397 4 19.9489 4 19.75C4 19.5511 4.07902 19.3603 4.21967 19.2197C4.36032 19.079 4.55109 19 4.75 19H8.264L14.092 6H10.75C10.5511 6 10.3603 5.92098 10.2197 5.78033C10.079 5.63968 10 5.44891 10 5.25Z"
                fill={color}
            />
        </svg>
    );
};

export default OCItalic;
