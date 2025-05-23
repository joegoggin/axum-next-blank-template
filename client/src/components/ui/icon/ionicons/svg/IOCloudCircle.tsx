import { SVGProps } from "@/types/SVG";

const IOCloudCircle: React.FC<SVGProps> = ({
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
                d="M12 2.75C6.61547 2.75 2.25 7.11547 2.25 12.5C2.25 17.8845 6.61547 22.25 12 22.25C17.3845 22.25 21.75 17.8845 21.75 12.5C21.75 7.11547 17.3845 2.75 12 2.75ZM15.2812 15.875H9.04922C7.57125 15.875 6.35109 14.6759 6.37734 13.198C6.40219 11.7102 7.48734 10.8566 8.78437 10.6527C8.84886 10.6424 8.90952 10.6154 8.96021 10.5742C9.01091 10.5331 9.04986 10.4793 9.07312 10.4183C9.47203 9.36969 10.4827 8.375 12 8.375C13.5548 8.375 14.8992 9.42922 15.2878 11.1973C15.3214 11.3496 15.3972 11.4894 15.5064 11.6007C15.6157 11.712 15.754 11.7904 15.9056 11.8269C16.7714 12.0336 17.625 12.6505 17.625 13.8125C17.625 15.2319 16.5703 15.875 15.2812 15.875Z"
                fill={color}
            />
        </svg>
    );
};

export default IOCloudCircle;
