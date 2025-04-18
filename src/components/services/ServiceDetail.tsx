
import { ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  image: string;
  reversed?: boolean;
}

export function ServiceDetail({
  title,
  description,
  icon,
  features,
  image,
  reversed = false
}: ServiceDetailProps) {
  return (
    <div className="py-12 border-b border-gray-200 last:border-b-0">
      <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
        <div className="w-full lg:w-1/2">
          <img 
            src={image} 
            alt={title} 
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
        </div>
        
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-sbc-blue">{icon}</div>
            <h3 className="text-2xl font-bold text-sbc-gray-dark">{title}</h3>
          </div>
          
          <p className="text-sbc-gray mb-6">{description}</p>
          
          <h4 className="font-semibold mb-4 text-sbc-gray-dark">Key Features:</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-sbc-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-sbc-gray">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
