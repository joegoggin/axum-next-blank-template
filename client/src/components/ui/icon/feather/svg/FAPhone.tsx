import { SVGProps } from "@/types/SVG";

const FAPhone: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M4.024 9L4 8.931C3.46 7.384 3 5.27 3 4C3 3.45 3.45 3 4 3H7C7.53043 3 8.03914 3.21071 8.41421 3.58579C8.78929 3.96086 9 4.46957 9 5V7C9 7.53043 8.78929 8.03914 8.41421 8.41421C8.03914 8.78929 7.53043 9 7 9H6.163C6.97017 10.9891 8.16816 12.7961 9.68605 14.3139C11.2039 15.8318 13.0109 17.0298 15 17.837V17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15H19C19.5304 15 20.0391 15.2107 20.4142 15.5858C20.7893 15.9609 21 16.4696 21 17V20C21 20.45 20.45 21 20 21C18.275 21 16.56 20.544 15 20C9.886 18.168 5.832 14.114 4.024 9Z"
                fill={color}
            />
        </svg>
    );
};

export default FAPhone;
