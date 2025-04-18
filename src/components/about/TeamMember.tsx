
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  email: string;
  linkedin?: string;
}

export function TeamMember({ name, position, image, bio, email, linkedin }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-end space-x-2">
              <a 
                href={`mailto:${email}`}
                className="bg-white/20 hover:bg-sbc-blue text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail size={16} />
              </a>
              {linkedin && (
                <a 
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-sbc-blue text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                  aria-label={`${name}'s LinkedIn profile`}
                >
                  <Linkedin size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-sbc-gray-dark">{name}</h3>
        <p className="text-sbc-blue font-medium mb-3">{position}</p>
        <p className="text-sbc-gray">{bio}</p>
      </div>
    </div>
  );
}
