import Menu from "../parts/menu";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-start space-y-0 h-170 bg-primary relative">
            <div className="bg-gray/25 h-1/2 w-full flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start">           
                    <div className="text-6xl text-white font-bold pt-10" style={{ fontFamily: 'var(--font-cinzel-decorative)' }}>
                        PORTFORIO
                    </div>
                    <div className="text-3xl text-gray -mt-2" style={{ fontFamily: 'var(--font-alice)' }}>
                        2025
                    </div>
                    <div className="text-6xl text-white font-bold" style={{ fontFamily: 'var(--font-cinzel-decorative)' }}>
                        SITE
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-start pl-15 absolute top-68">
                <Menu />
            </div>
            <img src="./images/portfolio_hero.png" alt="hero" className="w-170 absolute top-50"/>
        </div>
    );

}