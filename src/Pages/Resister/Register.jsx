import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import loginImage from '../../assets/image/authentication/undraw_secure_files_re_6vdh.svg'
import toast from 'react-hot-toast';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Register = () => {
    const { createUser, updateUserProfile, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit,
        formState: { errors },
    } = useForm();

    const handleResister = async (data) => {
        createUser(data?.email, data?.password)
            .then(result => {
                updateUserProfile(data?.name, data?.photoURL)
                    .then(() => {
                        console.log('user profile updated')
                        // create user entry in the database 
                        const userInfo = {
                            name: data?.name,
                            email: data?.email,
                            role: 'guest',
                            status: 'Verified',
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added database ---->', res.data);
                                }
                            })
                    })
                    .catch(err => toast.error(err.message))
                if (result?.user) {
                    navigate(location?.state ? location.state : "/")
                    toast.success('resister successfully....!');
                }

            })
            .catch(error => {
                toast.error(error.message);
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
        <div className="container mx-auto dark:text-white mb-12 flex flex-col lg:flex-row items-center justify-center mt-7 gap-5">
            <div className="bg-[url('https://i.ibb.co/zF7chZF/Animated-Shape.png')] w-full lg:w-3/5 h-[80vh] bg-no-repeat bg-center bg-cover flex items-center justify-center p-5">
                <img src={loginImage} alt="" />
            </div>
            <div className="card-body p-0 lg:p-8 border m-5 w-full lg:w-1/2">
                <form onSubmit={handleSubmit(handleResister)} className="p-5 space-y-3">
                    <h1 className="text-3xl font-bold mb-12">Please Register Now🤠</h1>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Username </label>
                        <input type="text"  {...register("name", { required: true })} name="name" className="input bg-[#F3F3F3] w-full border-blue-500 dark:text-black" id="" placeholder="Enter your name" />
                        {errors.name && <span className="text-red-500">name is required</span>}
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Email Address</label>
                        <input type="email"  {...register("email", { required: true })} name="email" className="input bg-[#F3F3F3] w-full border-blue-500 dark:text-black" id="" placeholder="Enter your username or address" />
                        {errors.email && <span className="text-red-500">email is required</span>}
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl font-medium">Password</label>
                        <input type="password"  {...register("password", {
                            required: true, minLength: 6,
                            pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                        })} name="password" className="input bg-[#F3F3F3] w-full border-blue-500 dark:text-black" id="" placeholder="Enter your password" />
                        {errors.password?.type === "minLength" && <span className="text-red-600">password length must be 6 characters or longer</span>}
                        {errors.password?.type === 'pattern' && <span className="text-red-600">password must have one uppercase one lowercase one number and one special character</span>}
                        {errors.password?.type === "required" && (
                            <p className="text-red-600">password is required</p>
                        )}
                    </div>
                    <p className="text-base font-medium my-8">Please register at first. Go to <Link to='/login' className="text-blue-500 underline">SIGN In</Link></p>
                    <button className="btn px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] font-medium hover:text-white w-full">Sign Up</button>
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

export default Register;