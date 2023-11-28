import { FaBook, FaDollarSign, FaLayerGroup } from "react-icons/fa";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { HiUserGroup} from "react-icons/hi";
import './adminHome.css'
import { FaCircleDollarToSlot } from "react-icons/fa6";
import ChartSection from "./ChartSection";


const AdminHome = () => {
    return (
        <div className="w-[90%] mx-auto mb-12">
            <div>
                <h2 className="text-2xl font-bold capitalize text-center my-5"><span>Hi, Wellcome </span>
                    {/* {
                    user?.displayName ? user?.displayName : 'Back'
                } */}
                </h2>
                <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center">

                    <div className=" income-component shadow-xl  gap-1 rounded-lg flex flex-col items-center py-3">
                        <FaCircleDollarToSlot  className="text-4xl" ></FaCircleDollarToSlot>
                        <p className="font-bold text-xl">Total Income</p>
                        <h2 className="text-5xl font-bold text-center">50</h2>
                        <div className="stat-desc pl-2 font-medium">↗︎ 400 (22%)</div>
                    </div>
                    <div className="product-component shadow-xl gap-1 rounded-lg flex flex-col items-center py-3">
                        <FaLayerGroup  className="text-4xl" ></FaLayerGroup>
                        <p className="font-bold text-xl">Total Products</p>
                        <h2 className="text-5xl font-bold text-center">50</h2>
                        <div className="stat-desc pl-2 font-medium">↗︎ 400 (22%)</div>
                    </div>
                    <div className="sale-component shadow-xl gap-1 rounded-lg flex flex-col items-center py-3">
                        <HiClipboardDocumentCheck className="text-4xl" ></HiClipboardDocumentCheck>
                        <p className="font-bold text-xl">Total Sale</p>
                        <h2 className="text-5xl font-bold text-center">50</h2>
                        <div className="stat-desc pl-2 font-medium">↗︎ 400 (22%)</div>
                    </div>
                    <div className="user-component shadow-xl  rounded-lg flex flex-col items-center py-3 gap-1">
                        <HiUserGroup className="text-4xl" ></HiUserGroup>
                        <p className="font-bold text-xl">All users</p>
                        <h2 className="text-5xl font-bold text-center">50</h2>
                        <div className="stat-desc pl-2 font-medium">↗︎ 400 (22%)</div>
                    </div>
                </div>
                <div className="flex gap-8">

                    <ChartSection />
                  {/* bar chart  */}
                    {/* <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div> */}
                    {/* <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default AdminHome;