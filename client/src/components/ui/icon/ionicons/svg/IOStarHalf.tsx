import { SVGProps } from "@/types/SVG";

const IOStarHalf: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M22.5 10.25H14.4375L12 2.75L9.5625 10.25H1.5L8.0625 14.75L5.53125 22.25L12 17.5625L18.4688 22.25L15.9375 14.75L22.5 10.25Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M12 2.75V17.5625L5.53125 22.25L8.0625 14.75L1.5 10.25H9.5625L12 2.75Z"
                fill={color}
            />
        </svg>
    );
};

export default IOStarHalf;
