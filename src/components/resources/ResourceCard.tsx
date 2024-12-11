import { FC } from 'react';
import { Resource } from '../../types/resources';

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard: FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-sm font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
            {resource.category}
          </span>
          <h3 className="mt-2 text-xl font-semibold">{resource.title}</h3>
          <p className="mt-2 text-gray-600">{resource.description}</p>
        </div>
      </div>
      {resource.content && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="prose prose-sm max-w-none">
            {resource.content}
          </div>
        </div>
      )}
      {resource.links && (
        <div className="mt-4 space-y-2">
          {resource.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-teal-600 hover:text-teal-700 font-medium"
            >
              {link.title} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
};