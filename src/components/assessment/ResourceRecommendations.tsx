import { Card } from '../shared/Card';
import { BookOpenIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/outline';

interface ResourceRecommendationsProps {
  riskLevel: string;
}

export const ResourceRecommendations = ({ riskLevel }: ResourceRecommendationsProps) => {
  const getResources = () => {
    switch (riskLevel) {
      case "High Risk":
        return [
          {
            title: "Professional Help",
            description: "Connect with licensed therapists",
            icon: UserGroupIcon,
            link: "/appointments"
          },
          {
            title: "Crisis Resources",
            description: "Immediate support and crisis intervention",
            icon: HeartIcon,
            link: "/resources#crisis"
          },
          {
            title: "Support Groups",
            description: "Connect with others who understand",
            icon: BookOpenIcon,
            link: "/resources#support"
          }
        ];
      case "Moderate Risk":
        return [
          {
            title: "Therapy Resources",
            description: "Learn about therapy options",
            icon: BookOpenIcon,
            link: "/resources#therapy"
          },
          {
            title: "Meditation Guide",
            description: "Guided meditation practices",
            icon: HeartIcon,
            link: "/meditation"
          },
          {
            title: "Community Support",
            description: "Join supportive communities",
            icon: UserGroupIcon,
            link: "/resources#community"
          }
        ];
      default:
        return [
          {
            title: "Wellness Tips",
            description: "Daily mental health practices",
            icon: HeartIcon,
            link: "/resources#wellness"
          },
          {
            title: "Educational Resources",
            description: "Learn about mental health",
            icon: BookOpenIcon,
            link: "/resources#education"
          },
          {
            title: "Preventive Care",
            description: "Maintain mental well-being",
            icon: UserGroupIcon,
            link: "/resources#prevention"
          }
        ];
    }
  };

  return (
    <Card>
      <div className="p-6">
        <h4 className="font-medium mb-4">Recommended Resources</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {getResources().map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="block p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white rounded-lg">
                  <resource.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h5 className="font-medium text-teal-700">{resource.title}</h5>
              </div>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
};