import { Helmet } from "react-helmet-async";

const SaleSummary = () => {
    return (
        <div className="w-[90%] mx-auto dark:text-white">
              <Helmet>
                <title>Sale Summary | Inventory M</title>
            </Helmet>
            <h3 className="text-3xl text-center font-bold mt-12 mb-5 flex items-center justify-center gap-2">Sale Summary</h3>
          
        </div>
    );
};

export default SaleSummary;