import { FC } from "react";
import { Loader2 } from "lucide-react";

interface SpinnerLoaderProps {}

// see - https://lucide.dev/icon/loader-2?search=load
const SpinnerLoader: FC<SpinnerLoaderProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
          <Loader2 className="animate-spin" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">Loading...</h1>
      </div>
    </div>
  );
};

export default SpinnerLoader;
