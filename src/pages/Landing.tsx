import { 
  ArrowRightIcon, 
  HeartIcon, 
  ChatBubbleBottomCenterTextIcon, 
  ChartBarIcon,
  BookOpenIcon,
  UserGroupIcon,
  SparklesIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Button } from '../components/shared/Button';

const Landing = () => {
  const features = [
    {
      title: 'Track Your Mood',
      description: 'Monitor your emotional well-being with our intuitive mood tracking tools and visualize your progress over time.',
      icon: ChartBarIcon,
      color: 'bg-teal-100 text-teal-700'
    },
    {
      title: 'Echo Assistant',
      description: 'Get 24/7 support from our empathetic AI companion trained to provide emotional support and guidance.',
      icon: ChatBubbleBottomCenterTextIcon,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      title: 'Guided Meditation',
      description: 'Practice mindfulness with our guided meditation sessions designed to reduce stress and anxiety.',
      icon: HeartIcon,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Journal Your Thoughts',
      description: 'Express yourself freely in a private, secure digital journal with mood tracking and reflection prompts.',
      icon: BookOpenIcon,
      color: 'bg-green-100 text-green-700'
    }
  ];

  const benefits = [
    {
      title: 'Personalized Support',
      description: 'Get tailored recommendations and insights based on your unique emotional patterns.',
      icon: SparklesIcon
    },
    {
      title: 'Community Support',
      description: 'Connect with others on similar journeys in a safe, moderated environment.',
      icon: UserGroupIcon
    },
    {
      title: 'Evidence-Based Approach',
      description: 'Access tools and techniques backed by psychological research and best practices.',
      icon: BeakerIcon
    }
  ];

  const testimonials = [
    {
      quote: "Echo Care has helped me understand and manage my emotions better than ever before.",
      author: "Sarah M.",
      role: "Student"
    },
    {
      quote: "The meditation features and daily check-ins have become an essential part of my wellness routine.",
      author: "James K.",
      role: "Professional"
    },
    {
      quote: "Having an AI companion available 24/7 makes me feel supported whenever I need someone to talk to.",
      author: "Emily R.",
      role: "Teacher"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Your Journey to <span className="text-teal-600">Better Mental Health</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Echo Care combines AI technology, mood tracking, and proven therapeutic techniques to support your mental well-being journey.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link to="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Journey
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Mental Health Support</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="absolute -top-4">
                  <div className={`rounded-lg p-3 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Echo Care?</h2>
            <p className="mt-4 text-lg text-gray-500">
              We're committed to providing you with the best tools for your mental health journey.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 rounded-lg p-3 mr-4">
                    <benefit.icon className="h-6 w-6 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-4xl font-bold text-teal-600">10,000+</p>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-4xl font-bold text-teal-600">98%</p>
            <p className="text-gray-600">User Satisfaction</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-4xl font-bold text-teal-600">24/7</p>
            <p className="text-gray-600">AI Support</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center bg-teal-600 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-white">Start Your Journey Today</h2>
          <p className="mt-4 text-lg text-teal-100">
            Join thousands of users who have taken the first step towards better mental health.
          </p>
          <div className="mt-8">
            <Link to="/dashboard">
              <Button variant="secondary" size="lg">
                Get Started Now
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;