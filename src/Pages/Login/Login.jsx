import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import loginImage from '../../assets/image/authentication/undraw_secure_files_re_6vdh.svg'
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
    const { loginUser, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const { register, handleSubmit,
        formState: { errors },
    } = useForm();
   
    const handleLogin = async (data) => {
        console.log('button clicked', data);
        const toastId = toast.loading(' proccessing....');
        loginUser(data?.email, data?.password)
            .then(result => {
                console.log(result.user);
                if (result?.user) {
                    if (result.user) {
                        const userInfo = {
                            email: result.user?.email,
                            name: result.user?.displayName,
                            role: 'guest',
                            status: 'Verified',
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data);
                            })
                            .catch(err => console.error(err))
                    }
                    navigate(location?.state ? location.state : "/");
                    return toast.success('resister successfully....!', { id: toastId })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Handle Google Signin
    const handleGoogleSignIn = async () => {
        try {
            //2. User Registration using google
            const result = await googleSignIn()
            if (result.user) {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: 'guest',
                    status: 'Verified',
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => console.error(err))
            }
            navigate(location?.state ? location.state : "/")
            toast.success('Login Successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }




    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center mt-7 gap-5">
            <div className="bg-[url('https://i.ibb.co/zF7chZF/Animated-Shape.png')] w-full min-h-[50vh] lg:w-3/5 lg:h-[80vh] bg-no-repeat bg-center bg-cover flex items-center justify-center p-5">
                <img src={loginImage} alt="" />
            </div>
            <div className="card-body p-0 lg:p-8 border m-5 w-full lg:w-1/2">
                <form onSubmit={handleSubmit(handleLogin)} className="p-5 space-y-3">
                    <h1 className="text-3xl font-bold mb-12">Please Login🤔</h1>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Username or Email Address</label>
                        <input type="email" name="email"  {...register("email", { required: true })} className="input bg-[#F3F3F3] w-full border-blue-500" id="" placeholder="Enter your username or address" />
                        {errors.email && <span className="text-red-500">email is required</span>}
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Password</label>
                        <input type="password" name="password" {...register("password", { required: true })} className="input bg-[#F3F3F3] w-full border-blue-500" id="" placeholder="Enter your password" />
                        {errors.password && <span className="text-red-500">password is required</span>}
                    </div>
                    <p className="text-base font-medium my-8">Please register at first. Go to <Link to='/register' className="text-blue-500 underline">SIGN UP</Link></p>
                    <button className="btn px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] font-medium hover:text-white w-full">Sign in</button>
                </form>
                <div className="w-3/5 mx-auto pb-6">
                    <div className="divider text-2xl">Or</div>
                    <div onClick={handleGoogleSignIn} className="space-y-3 mt-6">
                        <h1 className="flex items-center justify-center py-2 border rounded-full text-3xl ease-in gap-5 hover:bg-[#F2F3F3] cursor-pointer transition hover:text-blue-600"><FcGoogle></FcGoogle> <span className="text-xl font-bold">Sign in With Google</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;