import { SVGProps } from "@/types/SVG";

const FAExport: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M13 5.828V17H11V5.828L7.757 9.071L6.343 7.657L12 2L17.657 7.657L16.243 9.071L13 5.828ZM4 16H6V20H18V16H20V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.037 4 20V16Z"
                fill={color}
            />
        </svg>
    );
};

export default FAExport;
