export default function Menu() {
    return (
        <div className="flex justify-center">
            <ul className="flex flex-col items-center gap-y-2 text-gray text-xl" style={{ fontFamily: 'var(--font-lato)' }}>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li>SKILLS</li>
                <li>CONTACT</li>
                <li>RESUME</li>
            </ul>
        </div>
    );
}