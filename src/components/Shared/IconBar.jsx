/* eslint-disable react/prop-types */

const IconBar = ({icon:Icon}) => {
    return (
        <>
             <span className="mr-3 text-5xl text-center text-indigo-500">{<Icon />}</span>
        </>
    );
};

export default IconBar;