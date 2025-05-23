import { SVGProps } from "@/types/SVG";

const FALogout: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M3 5C3 3.9 3.9 3 5 3H13V5H5V19H13V21H5C3.9 21 3 20.1 3 19V5ZM17.176 11L14.64 8.464L16.054 7.05L21.004 12L16.054 16.95L14.64 15.536L17.176 13H10.59V11H17.176Z"
                fill={color}
            />
        </svg>
    );
};

export default FALogout;
