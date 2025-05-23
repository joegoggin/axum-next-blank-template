import { SVGProps } from "@/types/SVG";

const OCRuby: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M5.87301 3.76C5.94333 3.67852 6.03036 3.61312 6.1282 3.56826C6.22603 3.52339 6.33238 3.50012 6.44001 3.5H17.75C17.973 3.5 18.184 3.599 18.326 3.77L23.326 9.77C23.443 9.91038 23.5047 10.0886 23.4995 10.2713C23.4944 10.454 23.4227 10.6284 23.298 10.762L12.548 22.262C12.4778 22.3371 12.393 22.397 12.2987 22.4379C12.2045 22.4788 12.1028 22.4999 12 22.4999C11.8972 22.4999 11.7956 22.4788 11.7013 22.4379C11.607 22.397 11.5222 22.3371 11.452 22.262L0.70201 10.762C0.575412 10.6268 0.503323 10.4495 0.49963 10.2643C0.495938 10.0791 0.560902 9.89915 0.68201 9.759L5.87301 3.76ZM6.78301 5L2.25801 10.23L12 20.653L21.75 10.223L17.399 5H6.78301Z"
                fill={color}
            />
        </svg>
    );
};

export default OCRuby;
