/* eslint-disable react/prop-types */

const HanadleToggleBtn = ({ toggler }) => {
    return (
        <>
            <label htmlFor='Toggle3' className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
            >
                <input onChange={toggler} id='Toggle3' type='checkbox' className='hidden peer'
                />
              
                <span className=' px-6 text-[18px] font-medium py-3 rounded-l-md bg-purple-500 peer-checked:bg-gray-300'>
                    Guest
                </span>
                <span className=' px-6 text-[18px] font-medium py-3 rounded-r-md bg-gray-300 peer-checked:bg-gradient-to-r from-purple-500 to-pink-500'>
                    Manager
                </span>
            </label>
        </>
    );
};

export default HanadleToggleBtn;