import { SVGProps } from "@/types/SVG";

const OCTriangleDown: React.FC<SVGProps> = ({
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
                d="M11.646 15.646L5.85399 9.854C5.78394 9.78413 5.7362 9.69505 5.7168 9.59804C5.6974 9.50102 5.70722 9.40043 5.74501 9.309C5.7828 9.21757 5.84687 9.1394 5.92911 9.0844C6.01135 9.02939 6.10805 9.00002 6.20699 9H17.793C17.8919 9.00002 17.9886 9.02939 18.0709 9.0844C18.1531 9.1394 18.2172 9.21757 18.255 9.309C18.2928 9.40043 18.3026 9.50102 18.2832 9.59804C18.2638 9.69505 18.216 9.78413 18.146 9.854L12.353 15.646C12.2592 15.7397 12.1321 15.7924 11.9995 15.7924C11.8669 15.7924 11.7397 15.7397 11.646 15.646Z"
                fill={color}
            />
        </svg>
    );
};

export default OCTriangleDown;
