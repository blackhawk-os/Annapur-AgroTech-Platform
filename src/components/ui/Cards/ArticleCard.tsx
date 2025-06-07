import React from 'react';

interface ArticleCardProps {
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  image?: string;
  variant?: 'normal' | 'featured';
  className?: string;
}
export const ArticleCard = ({
  title,
  date,
  excerpt,
  category,
  image,
  variant = 'normal',
  className = ''
}: ArticleCardProps) => {
  const [day, month, year] = date.split(' ');
  const formattedMonth = month?.toUpperCase();

  return (
    <div className={`group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow ${className}`}>
      {variant === 'featured' && image ? (
    
        <div className="relative h-[500px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <div className="max-w-2xl">
              {/* Category and Date */}
              <div className="flex items-center gap-4 mb-4">
                {category && (
                  <span className="px-4 py-1 bg-[#88B048] rounded-full text-sm">
                    {category}
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">{day}</span>
                  <div className="flex flex-col">
                    <span className="text-sm uppercase">{formattedMonth}</span>
                    <span className="text-sm">{year}</span>
                  </div>
                </div>
              </div>

              {/* Title and Excerpt */}
              <h3 className="text-4xl font-bold mb-4">{title}</h3>
              <p className="text-lg line-clamp-2 mb-6">{excerpt}</p>
              
              {/* Button */}
              <button className="flex items-center gap-2 text-[#88B048] hover:text-[#7a9e44] transition-colors">
                <span className="font-semibold">Continue Reading</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (

        <>
          {image && (
            <div className="relative h-48 overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {category && (
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm text-[#88B048]">
                  {category}
                </div>
              )}
            </div>
          )}
          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="min-w-[60px] text-center bg-[#88B048]/10 p-2 rounded-lg">
                <div className="text-[#88B048] font-bold text-xl">{day}</div>
                <div className="text-[#88B048] text-sm uppercase">{month}</div>
                <div className="text-gray-400 text-xs">{year}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{title}</h3>
                <p className="text-gray-600 line-clamp-3">{excerpt}</p>
              </div>
            </div>
            <button className="w-[182px] mt-4 flex items-center justify-between px-4 py-2 bg-[#88B048] text-white rounded-md hover:bg-[#7a9e44] transition-colors">
              Continue Reading
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
