import { SVGProps } from "@/types/SVG";

const FAYoutube: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M9.935 14.628V9.008L15.338 11.828L9.935 14.628ZM21.8 8.035C21.8 8.035 21.605 6.656 21.005 6.049C20.245 5.253 19.392 5.249 19.001 5.202C16.203 5 12.004 5 12.004 5H11.996C11.996 5 7.798 5 4.999 5.202C4.608 5.249 3.756 5.252 2.995 6.049C2.395 6.656 2.2 8.035 2.2 8.035C2.2 8.035 2 9.653 2 11.272V12.789C2 14.407 2.2 16.026 2.2 16.026C2.2 16.026 2.395 17.404 2.995 18.011C3.755 18.808 4.755 18.782 5.2 18.866C6.8 19.019 12 19.066 12 19.066C12 19.066 16.203 19.06 19.001 18.858C19.392 18.811 20.245 18.808 21.005 18.011C21.605 17.404 21.8 16.026 21.8 16.026C21.8 16.026 22 14.407 22 12.789V11.272C22 9.653 21.8 8.035 21.8 8.035Z"
                fill={color}
            />
        </svg>
    );
};

export default FAYoutube;
