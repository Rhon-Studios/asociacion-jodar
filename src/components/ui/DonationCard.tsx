import { Heart, Euro, Box } from 'lucide-react';

interface DonationCardProps {
    icon: 'heart' | 'euro' | 'box';
    title: string;
    description: string;
    action: string;
    link?: string;
    isPriority?: boolean;
}

export function DonationCard({ icon, title, description, action, link, isPriority }: DonationCardProps) {
    const IconComponent = icon === 'heart' ? Heart : icon === 'euro' ? Euro : Box;

    return (
        <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${isPriority ? 'border-2 border-[#6A4A8A]' : ''}`}>
            {isPriority && (
                <div className="bg-[#6A4A8A] text-white px-3 py-1 rounded-full text-sm inline-block mb-4">
                    Prioridad Alta
                </div>
            )}
            <div className="flex items-start gap-4">
                <div className="bg-[#E9E1F3] p-3 rounded-full">
                    <IconComponent className="w-6 h-6 text-[#6A4A8A]" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg mb-2 text-black">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    {link ? (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#805BA6] hover:bg-[#6A4A8A] text-white px-5 py-2 rounded-lg transition-colors duration-200"
                        >
                            {action}
                        </a>
                    ) : (
                        <p className="text-[#6A4A8A]">{action}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
