/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className='lg:max-w-[2520px] h-full mx-auto xl:px-20 w-full'>
        {children}
      </div>
    );
};

export default Container;