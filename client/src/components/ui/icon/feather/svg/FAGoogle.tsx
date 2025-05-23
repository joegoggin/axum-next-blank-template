import { SVGProps } from "@/types/SVG";

const FAGoogle: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M11.99 13.9V10.18H21.35C21.49 10.81 21.6 11.4 21.6 12.23C21.6 17.94 17.77 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C14.7 2 16.96 2.99 18.69 4.61L15.85 7.37C15.13 6.69 13.87 5.89 12 5.89C8.69 5.89 5.99 8.64 5.99 12.01C5.99 15.38 8.69 18.13 12 18.13C15.83 18.13 17.24 15.48 17.5 13.91H11.99V13.9Z"
                fill={color}
            />
        </svg>
    );
};

export default FAGoogle;
