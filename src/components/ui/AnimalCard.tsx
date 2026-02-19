import {ImageWithFallBack} from "@/components/ui/ImageWithFallBack";

export interface CatCardProps {
    id: string;
    name: string;
    age: number;
    sex: string;
    priority: string;
    shDescription: string;
    image: string;
    status: string;
}

export  function CatCard({ name, age, sex, priority, shDescription, image, status}: CatCardProps) {
    const priorityConfig = {
        urgente: { 
            label: '🔴 Adopción Urgente', 
            color: 'bg-red-100 text-red-700 border-red-300' 
        },
        alta: { 
            label: '🟡 Prioridad Alta', 
            color: 'bg-yellow-100 text-yellow-700 border-yellow-300' 
        },
        normal: { 
            label: '', 
            color: ''
        }
    }

    const statusConfig = {
        acogido: { 
            label: 'Disponible | Acogido', 
            color: 'bg-orange-500 text-white' 
        },
        reservado: { 
            label: 'Reservado', 
            color: 'bg-gray-400 text-white' 
        },
        normal: { 
            label: 'Disponible', 
            color: 'bg-emerald-500 text-white'
        }
    }
    
    const sexLabel = sex === 'macho' ? '♂️ Macho' : '♀️ Hembra';
    
    return(
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
                <ImageWithFallBack
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm">
                    <span
                        className={`px-3 py-1 rounded-full text-sm ${statusConfig[status as keyof typeof statusConfig].color}`}
                    >
                        {statusConfig[status as keyof typeof statusConfig].label}
                    </span>
                </div>
                {priority !== 'normal' && (
                    <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm border ${priorityConfig[priority as keyof typeof priorityConfig].color}`}>
                            {priorityConfig[priority as keyof typeof priorityConfig].label}
                        </span>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl text-black mb-2">{name}</h3>
                <div className="flex items-center gap-3 mb-3">
                    <p className="text-gray-600 text-sm">{age}</p>
                    <span className="text-gray-400">·</span>
                    <p className="text-gray-600 text-sm">{sexLabel}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">{shDescription}</p>
            </div>
        </div>
    )
}