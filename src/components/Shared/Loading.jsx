import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="w-full h-[20vh] flex flex-col items-center justify-center">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#800080"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

export default Loading;