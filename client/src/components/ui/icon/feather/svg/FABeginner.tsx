import { SVGProps } from "@/types/SVG";

const FABeginner: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M12 7.529L5 5.09V15.462L12 18.713V7.529ZM5.632 3.108L12 5.326L18.368 3.108C19.415 2.743 20.548 3.335 20.898 4.43C20.965 4.643 21 4.866 21 5.09V15.462C21 16.288 20.535 17.036 19.812 17.372L12 21L4.188 17.372C3.465 17.036 3 16.288 3 15.462V5.09C3 3.936 3.895 3 5 3C5.215 3 5.429 3.037 5.632 3.108Z"
                fill={color}
            />
        </svg>
    );
};

export default FABeginner;
