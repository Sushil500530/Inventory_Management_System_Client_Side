/* eslint-disable react/prop-types */

const CompanyServices = ({ image }) => {
    return (
        <div className="w-[120px] h-[120px] flex flex-col items-center justify-center cursor-pointer border space-y-3  ">
            <img className="w-full h-full" src={image} alt="" />
        </div>
    );
};

export default CompanyServices;