/* eslint-disable react/prop-types */

const Button = ({ title, style, onclick, disable, icon: Icon }) => {

    return (
        <div className="flex items-center justify-around">
            <button onClick={onclick} disabled={disable} className={`gradient-btn btn border w-full px-7 capitalize py-2 text-xl font-medium rounded hover:text-white hover:translate border-black hover:border-none hover:bg-transparent transition ease-in ${style}`}> 
            <span className="mr-3">{<Icon />}</span>
            {title}</button>
        </div>
    );
};

export default Button;