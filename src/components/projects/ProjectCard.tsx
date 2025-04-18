
import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  year: string;
  client: string;
  location: string;
}

export function ProjectCard({
  title,
  category,
  description,
  fullDescription,
  image,
  year,
  client,
  location
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div 
        className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
        onClick={() => fullDescription && setIsModalOpen(true)}
      >
        <div className="relative overflow-hidden h-64">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-6 w-full">
              <span className="text-white text-xs uppercase tracking-wider bg-sbc-blue px-2 py-1 rounded">
                {category}
              </span>
              {fullDescription && (
                <div className="mt-2 text-white text-sm flex items-center">
                  <span>View Details</span>
                  <ExternalLink size={14} className="ml-1" />
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-sbc-gray-dark mb-2">{title}</h3>
          <p className="text-sbc-gray mb-4">{description}</p>
          <div className="flex justify-between text-sm text-sbc-gray">
            <span>{year}</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      {/* Project Details Modal */}
      {fullDescription && (
        <div className={cn(
          "fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4",
          isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )} onClick={() => setIsModalOpen(false)}>
          <div 
            className={cn(
              "bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto transition-all",
              isModalOpen ? "scale-100" : "scale-95"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-64 object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-sbc-gray-dark p-2 rounded-full backdrop-blur-sm transition-colors"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-sbc-gray-dark">{title}</h3>
                <span className="text-xs uppercase tracking-wider bg-sbc-blue text-white px-2 py-1 rounded">
                  {category}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                <div>
                  <p className="font-semibold text-sbc-gray-dark">Year</p>
                  <p className="text-sbc-gray">{year}</p>
                </div>
                <div>
                  <p className="font-semibold text-sbc-gray-dark">Client</p>
                  <p className="text-sbc-gray">{client}</p>
                </div>
                <div>
                  <p className="font-semibold text-sbc-gray-dark">Location</p>
                  <p className="text-sbc-gray">{location}</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-sbc-gray">{fullDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
