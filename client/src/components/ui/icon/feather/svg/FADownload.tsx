import { SVGProps } from "@/types/SVG";

const FADownload: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M5 19H19C19.2652 19 19.5196 19.1054 19.7071 19.2929C19.8946 19.4804 20 19.7348 20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20C4 19.7348 4.10536 19.4804 4.29289 19.2929C4.48043 19.1054 4.73478 19 5 19ZM13 13.175L16.243 9.933L17.657 11.347L12 17.004L6.343 11.347L7.757 9.933L11 13.175V2H13V13.175Z"
                fill={color}
            />
        </svg>
    );
};

export default FADownload;
