import logo from '../assets/images/logo.png'
import BNBBG from '../assets/images/BNB.png'
import aureggo from '../assets/images/aureggo.png'
const AurEggoCopy = () => {
    return (
        <div className="container max-w-[1440px] mx-auto h-[100vh] lg:overflow-hidden">
            <div className="headerBg py-3 xs:py-4 md:py-5 px-4 xs:px-5 md:px-[25px]">
                <div className="flex items-start justify-between w-full">
                    <img className='w-6 h-6 sm:w-14 sm:h-14 2xl:w-[88px] 2xl:h-[88px]' src={logo} alt="logo" />
                    <h2 className='font-normal font-Victory text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-black'>whitepaper <span>x</span></h2>
                </div>
                <h1 className='font-normal font-Victory text-black text-[56px] xs:text-[60px] sm:text-[100px] lg:text-[180px] 2xl:text-[220px] leading-[45px] sm:leading-[100px] lg:leading-[200px] 2xl:leading-[220px] text-center lg:-mt-9 tracking-wide'>AUREGGO</h1>
                <p className='font-normal font-Victory text-[11px] sm:text-[13px] lg:text-xl text-black 2xl:text-2xl lg:text-center flex lg:w-1/2 lg:justify-end pb-0 sm:pb-2 2xl:pb-5 sm:-mt-2 lg:-mt-5'>the first golden egg on the bsc network</p>
            </div>
            <div className='pt-4 sm:pt-6 headerBg px-3 sm:px-10 md:px-16 lg:px-[95px] relative overflow-x-clip'>
                <div className='grid grid-cols-2 gap-5 xl:grid-cols-2'>
                    <div className='flex flex-col col-span-1'>
                        <div className='flex flex-col items-center justify-center max-w-[380px]'>
                            <p className='font-normal font-Victory text-[11px] sm:text-[13px] lg:text-xl 2xl:text-2xl text-black'>Total raised:  $1,000,000</p>
                            <p className='text-[9px] font-normal text-center font-Victory sm:text-[11px] max-w-[323px] !leading-[107%] sm:mt-1 2xl:mt-3 text-black'>PRESALE PERIOD ONLY 2 WEEKS, REMAINING TOKENS WILL BE BURNED. ONE $EGGO = 0.001</p>
                        </div>
                        <div className='flex flex-col gap-2 max-w-[330px] mt-3 sm:mt-3 2xl:mt-7'>
                            <div className='flex items-center gap-1 sm:gap-3'>
                                <div className='flex flex-col items-center justify-center'>
                                    <p className='text-[10px] font-normal text-center text-black font-Victory sm:text-[13px] lg:text-2xl'>BNB</p>
                                    <img src={BNBBG} alt="image" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <p className='text-[10px] font-normal text-center text-black font-Victory sm:text-[13px] lg:text-2xl'>BNB</p>
                                    <img src={BNBBG} alt="image" />
                                </div>
                            </div>
                            <button className='text-xs font-normal text-center text-black font-Victory sm:text-xl lg:text-3xl 2xl:text-[52px] btnBg bgSizeFull py-1 sm:py-[14px] 2xl:py-6'>BUY NOW</button>
                        </div>
                        <div className='flex flex-col mt-3 sm:mt-3 2xl:mt-7'>
                            <h2 className='font-normal font-Victory text-[13px] xs:text-base sm:text-xl 2xl:text-[36px] text-black leading-[100%]'>tokenomics</h2>
                            <p className='text-[8px] sm:text-xs xl:text-[15px] font-semibold text-black font-Montserrat mt-0 sm:mt-[6px]'>Supply: 8 Billion $EGGO</p>
                            <p className='text-[8px] sm:text-xs xl:text-[15px] font-semibold text-black font-Montserrat mt-0 sm:mt-[3px] max-w-[430px]'>Presale: <span className='font-normal '>%100 of tokens will be on sale. <br /> For Marketing, Listings, Pool, Development and team (3%)</span></p>
                            <p className='text-[8px] sm:text-xs xl:text-[15px] font-semibold text-black font-Montserrat mt-0 sm:mt-[2px]'>Support: <span className='font-normal '>%3 tax on transactions fuels our journey.</span></p>
                            <p className='text-[8px] sm:text-xs xl:text-[15px] font-semibold text-black font-Montserrat mt-0 sm:mt-[2px]'>Period: <span className='font-normal '>Only two weeks assigned for pre-sale, remaining tokens will be burned.</span></p>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-normal font-Victory text-[13px] xs:text-base sm:text-xl 2xl:text-[36px] text-black mt-[5px] leading-[100%]'>how to buy?</h2>
                            <p className='text-[8px] sm:text-xs xl:text-[15px] 2xl:text-lg font-semibold text-black font-Montserrat mt-1 sm:mt-[3px] max-w-[430px]'>Click: <span className='font-normal '>Buy Now <br />Ready your BNB wallet (Trust, Metamask...etc)  </span></p>
                            <p className='text-[8px] sm:text-xs xl:text-[15px] 2xl:text-lg font-semibold text-black font-Montserrat mt-1 sm:mt-[2px]'>Buy $EGGO: <span className='font-normal '>Swap BNB for $EGGO and wait for listing date to claim your tokens.</span></p>
                        </div>
                        <div className='flex-col hidden sm:flex'>
                            <h2 className='font-normal font-Victory text-[13px] xs:text-base sm:text-xl 2xl:text-[36px] text-black mt-1 sm:mt-[5px] leading-[100%]'>when is launch?</h2>
                            <p className='text-[8px] sm:text-xs xl:text-[15px] 2xl:text-lg font-normal text-black font-Montserrat mt-1 sm:mt-[3px] max-w-[545px]'>We will inform you of the date of launch on PancakeSwap and other exchanges on Our official Account on X """", when Presale is done so You’d claim your tokens.</p>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-normal font-Victory text-[13px] xs:text-base sm:text-xl 2xl:text-[36px] text-black mt-[5px] leading-[100%]'>FAQ</h2>
                            <p className='text-[8px] sm:text-xs xl:text-[15px] 2xl:text-lg font-semibold text-black font-Montserrat mt-[3px]'>Q: <span className='font-normal '>Why presale? <br />To shield from snipers and secure liquidity for $EGGO.</span></p>
                            <p className='text-[8px] sm:text-xs xl:text-[15px] 2xl:text-lg font-semibold text-black font-Montserrat mt-[3px]'>Q: <span className='font-normal '>Contact info? <br />It will be shared then renounced post-$EGGO launch for transparency and trust.</span></p>
                            <p className='text-[8px] sm:text-xs xl:text-[15px] 2xl:text-lg font-semibold text-black font-Montserrat mt-[3px]'>Q: <span className='font-normal '>Liquidity? <br />Will be locked to ensure stable trading environment. </span></p>
                            <p className='text-[8px] hidden md:block sm:text-xs xl:text-[15px] 2xl:text-lg font-semibold text-black font-Montserrat mt-[3px]'>Q: <span className='font-normal '>More info? <br />Check the Aureggo whitepaper.</span></p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-end col-span-1'>
                        <div className='flex flex-col order-2 mb-10 md:mb-0 xl:order-1'>
                            <h2 className='font-normal font-Victory text-[11px] sm:text-[26px] lg:text-5xl 2xl:text-[85px] text-black mt-[5px] leading-[100%] text-center'>aureggo</h2>
                            <p className='pb-2 mt-2 text-[8px] font-semibold sm:mt-3 md:mt-4 sm:text-base black md:text-lg font-Montserrat'>Introducing Aureggo: <span className='font-normal '>The Epic Saga of the Crypto World’s Golden Layer! Here, legend has it, lies a project unlike any other, where Aureggo’s very own digital chicken is set to outcluck the rest by laying golden eggs. Dive into the heart of  meme magic with Aureggo, where every token is a piece of the golden puzzle, ready to hatch a new era of crypto prosperity</span></p>
                        </div>
                        <img className='absolute right-0 sm:right-20 lg:right-28 order-1 xl:order-2 mx-auto -top-6 sm:-top-10 w-[36.50%] lg:w-[28%] 2xl:w-[40%] mt-4 md:mt-5 xl:mt-0' src={aureggo} alt="aureeggo" />
                    </div>
                </div>
                <p className='text-[9px] hidden md:block sm:text-lg md:text-xl font-normal text-black font-Montserrat mt-[3px] pb-3 sm:pb-5 pt-5 sm:pt-8 md:pt-10 text-center'>Quick Cluck: Adventuring into $EGGO? It’s all fun, but tread wisely- chickens always watch where they step!</p>
            </div>
        </div>
    )
}

export default AurEggoCopy
