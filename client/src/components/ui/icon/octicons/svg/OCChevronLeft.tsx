import { SVGProps } from "@/types/SVG";

const OCChevronLeft: React.FC<SVGProps> = ({
    width,
    height,
    color = "black",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M15.28 5.72001C15.4205 5.86064 15.4994 6.05126 15.4994 6.25001C15.4994 6.44876 15.4205 6.63939 15.28 6.78001L9.56001 12.5L15.28 18.22C15.3787 18.3117 15.4509 18.4283 15.4889 18.5575C15.5269 18.6868 15.5294 18.8239 15.496 18.9544C15.4626 19.0849 15.3947 19.204 15.2993 19.2992C15.2039 19.3943 15.0846 19.462 14.954 19.495C14.8236 19.5283 14.6867 19.5259 14.5575 19.4881C14.4284 19.4503 14.3118 19.3784 14.22 19.28L7.97001 13.03C7.82956 12.8894 7.75067 12.6988 7.75067 12.5C7.75067 12.3013 7.82956 12.1106 7.97001 11.97L14.22 5.72001C14.3606 5.57956 14.5513 5.50067 14.75 5.50067C14.9488 5.50067 15.1394 5.57956 15.28 5.72001Z"
                fill={color}
            />
        </svg>
    );
};

export default OCChevronLeft;
