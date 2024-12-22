import SolanaLogo from '../../assets/images/home/solana.png';

const Solana: React.FC = () => {
    return (
        <section className="w-full flex justify-center items-center mb-8 lg:mb-10 xl:mb-24">
            <h4 className="font-inter font-medium md:text-lg lg:text-xl xl:text-2xl mac:text-3xl">
                Built using
            </h4>
            <img
                src={SolanaLogo}
                className="w-1/2 sm:w-1/3"
            />
        </section>
    );
};

export default Solana;
