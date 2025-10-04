interface SocialMediaButtonProps {
    text: string;
    link: string;
    icon: React.ReactNode;
}

function SocialMediaButton({text, link, icon}: SocialMediaButtonProps) {
    return (
        <a href={link}
           target="_blank"
           rel="noopener noreferrer"
           className="bg-gray-700 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded-md inline-flex items-center hover:text-white"
        >
            <span className="whitespace-nowrap">{text}</span>
            {icon}
        </a>
    );
}

export default SocialMediaButton;