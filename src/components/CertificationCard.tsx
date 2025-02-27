

interface CertificationCardProps {
    title: string;
    issuer: string;
    date: string;
    linkTo: string;
    image: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, issuer, date, linkTo, image }) => {
    return (
        <a
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-shrink-0 w-full md:w-[33%] bg-gray-800 rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105`}
        >
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
            </div>
            <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="text-gray-400">{issuer}</p>
                <p className="mt-2 text-sm text-gray-500">{date}</p>
            </div>
        </a>
    );
};

export default CertificationCard;