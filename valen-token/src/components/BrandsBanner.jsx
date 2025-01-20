import Forbes from "../assets/svg/forbes.svg?react";
import CNN from "../assets/svg/cnn.svg?react";
import NBCGolf from "../assets/svg/golf.svg?react";
import Bloomberg from "../assets/svg/bloomberg.svg?react";
import FoxSport from "../assets/svg/fox.svg?react";
import LN from "../assets/svg/ln.svg?react";

const BrandsBanner = () => {
  return (
    <div className='bg-[rgb(23,23,23)] py-8 text-[rgb(137,141,171)]'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16'>
          {/* Forbes */}
          <div className='max-w-[151px] min-w-[151px] h-12 flex items-center'>
            <Forbes className='w-full h-auto object-contain opacity-50 hover:opacity-75 transition-opacity' />
          </div>

          {/* CNN */}
          <div className='max-w-[96px] min-w-[45px] h-12 flex items-center'>
            <CNN className='w-full h-auto object-contain opacity-50 hover:opacity-75 transition-opacity' />
          </div>

          {/* NBC Golf */}
          <div className='max-w-[98px] min-w-[21px] h-12 flex items-center'>
            <NBCGolf className='w-full h-auto object-contain opacity-50 hover:opacity-75 transition-opacity' />
          </div>

          {/* Bloomberg */}
          <div className='max-w-[102px] min-w-[33px] h-12 flex items-center'>
            <Bloomberg className='w-full h-auto object-contain opacity-50 hover:opacity-75 transition-opacity' />
          </div>

          {/* Fox Sports */}
          <div className='max-w-[98px] min-w-[59px] h-12 flex items-center'>
            <FoxSport className='w-full h-auto object-contain opacity-50 hover:opacity-75 transition-opacity' />
          </div>

          {/* LN */}
          <div className='max-w-[98px] min-w-[59px] h-12 flex items-center'>
            <LN className='w-full h-auto object-contain opacity-50 hover:opacity-75 transition-opacity' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsBanner;
