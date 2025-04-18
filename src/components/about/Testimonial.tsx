
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

export function Testimonial({ quote, author, position, company, image }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-sbc-blue mb-4">
        <Quote size={32} />
      </div>
      
      <blockquote className="mb-6">
        <p className="text-sbc-gray-dark italic">{quote}</p>
      </blockquote>
      
      <div className="flex items-center">
        {image && (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        
        <div>
          <p className="font-semibold text-sbc-gray-dark">{author}</p>
          <p className="text-sm text-sbc-gray">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
