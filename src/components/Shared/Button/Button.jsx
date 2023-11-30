/* eslint-disable react/prop-types */

const Button = ({ title, style,style2, onclick, disable, icon: Icon }) => {

    return (
        <div className="flex items-center justify-around">
            <button onClick={onclick} disabled={disable} className={`gradient-btn btn border w-full px-7 capitalize py-2 text-xl font-medium rounded hover:text-white hover:translate border-black hover:border-none hover:bg-transparent dark:border dark:border-white transition ease-in ${style} ${style2}`}> 
            <span className="mr-3">{<Icon />}</span>
            {title}</button>
        </div>
    );
};

export default Button;