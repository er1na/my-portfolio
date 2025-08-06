"use client";

export default function Sns() {
    return (
        <div className="rounded-full bg-primary w-55 h-15 flex items-center justify-center">
            <ul className="flex flex-row justify-center items-center gap-x-5">
                <li>
                    <a href="https://github.com/er1na" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                        <img src="./images/github_icon.png" alt="GitHub" className="w-10 h-10"/>
                    </a>
                </li>
                <li className="relative group">
                    <div 
                        className="block hover:opacity-80 transition-opacity cursor-not-allowed"
                        title="準備中です"
                        onClick={(e) => e.preventDefault()}
                    >
                        <img src="./images/instagram_icon.png" alt="Instagram" className="w-10 h-10"/>
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        準備中です
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                </li>
                <li>
                    <a href="https://x.com/your-username" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                        <img src="./images/x_icon.png" alt="X (Twitter)" className="w-10 h-10"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}