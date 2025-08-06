import Sns from "../parts/sns";

export default function About() {
    return (
        <div className="bg-white h-[680px] flex justify-center items-center m-7 mx-10 relative">
            <div className="absolute -top-20 -left-20 text-light-cian text-[250px] z-0" style={{ fontFamily: 'var(--font-abril-fatface)' }}>
                ABOUT
            </div>
            <div className="rounded-2xl border-8 border-primary w-full h-full z-10 relative">
                <div className="h-full absolute top-38 left-16">
                    <img src="./images/about.png" alt="about" className="h-130"/>
                </div>
                <div className="flex flex-row justify-end w-full">
                    <div className="flex flex-col justify-center items-center pr-15">
                        <div className="text-gray text-5xl pt-20 pb-5" style={{ fontFamily: 'var(--font-lato)' }}>
                            ABOUT
                        </div>
                        <hr className="border-light-gray border-2 w-[400px]"/>
                        <div className="flex flex-col justify-center text-center h-50">
                            <div className="text-gray text-[18px] pb-5" style={{ fontFamily: 'var(--font-mamelon)' }}>
                                アウトドアメディアを運営する
                                <br />
                                ベンチャー企業でエンジニアをしています
                            </div>
                            <div className="text-gray text-[18px]" style={{ fontFamily: 'var(--font-mamelon)' }}>
                                犬を養うために仕事をしています。
                                <br />
                                コーヒーを飲みながらダラダラ開発をするのが好きです
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className="flex flex-row justify-center items-center gap-7 text-secondary font-bold" style={{ fontFamily: 'var(--font-mamelon)' }}>
                                <li># 野球観戦</li>
                                <li># 犬</li>
                                <li># ネイル</li>
                                <li># コーヒー</li>
                                <li># 開発</li>
                            </ul>
                        </div>
                        <div className="pt-15">
                            <Sns />
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    );
}