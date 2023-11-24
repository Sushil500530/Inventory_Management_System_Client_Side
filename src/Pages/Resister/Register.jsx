import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit,

        formState: { errors },
    } = useForm();

    const handleResister = async (data) => {
        console.log('button clicked', data);
    }
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center mt-5 gap-5">
            <div className="bg-[url('https://i.ibb.co/zF7chZF/Animated-Shape.png')] w-full lg:w-3/5 h-[80vh] bg-no-repeat bg-center bg-cover flex items-center justify-center p-5">
                {/* <img src={imageLogin} alt="" /> */}
            </div>
            <div className="card-body border m-5 w-1/2">
                <form onSubmit={handleSubmit(handleResister)} className="p-5 space-y-3">
                    <h1 className="text-3xl font-bold mb-12">Please Register Now🤠</h1>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Username </label>
                        <input type="text"  {...register("name", { required: true })} name="name" className="input bg-[#F3F3F3] w-full border-blue-500" id="" placeholder="Enter your name" />
                        {errors.name && <span className="text-red-500">name is required</span>}
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Email Address</label>
                        <input type="email"  {...register("email", { required: true })} name="email" className="input bg-[#F3F3F3] w-full border-blue-500" id="" placeholder="Enter your username or address" />
                        {errors.email && <span className="text-red-500">email is required</span>}
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl font-medium">Password</label>
                        <input type="password"  {...register("password", {
                            required: true, minLength: 6,
                            pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                        })} name="password" className="input bg-[#F3F3F3] w-full border-blue-500" id="" placeholder="Enter your password" />
                        {errors.password?.type === "minLength" && <span className="text-red-600">password length must be 6 characters or longer</span>}
                        {errors.password?.type === 'pattern' && <span className="text-red-600">password must have one uppercase one lowercase one number and one special character</span>}
                        {errors.password?.type === "required" && (
                            <p className="text-red-600">password is required</p>
                        )}
                    </div>
                    <p className="text-base font-medium my-8">Please register at first. Go to <Link to='/login' className="text-blue-500 underline">SIGN UP</Link></p>
                    <button className="btn px-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-[18px] font-medium hover:text-white w-full">Sign in</button>
                </form>
                <div className="w-3/5 mx-auto">
                    <div className="divider text-2xl">Or</div>
                    <div className="space-y-3 mt-6">
                        <h1 className="flex items-center justify-center py-2 border rounded-full text-3xl ease-in gap-5 hover:bg-[#F2F3F3] cursor-pointer transition hover:text-blue-600"><FcGoogle></FcGoogle> <span className="text-xl font-bold">Sign in With Google</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;