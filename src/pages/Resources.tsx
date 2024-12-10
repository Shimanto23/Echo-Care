const Resources = () => {
  const resources = [
    {
      id: 1,
      title: 'Meditation Basics',
      description: 'Learn the fundamentals of meditation and mindfulness.',
      category: 'Self-Care',
    },
    {
      id: 2,
      title: 'Stress Management',
      description: 'Effective techniques for managing daily stress.',
      category: 'Mental Health',
    },
    {
      id: 3,
      title: 'Sleep Hygiene',
      description: 'Tips for better sleep and establishing a healthy routine.',
      category: 'Wellness',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Resource Library</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map(resource => (
          <div key={resource.id} className="bg-white p-6 rounded-lg shadow">
            <span className="text-sm font-medium text-indigo-600">
              {resource.category}
            </span>
            <h2 className="mt-2 text-xl font-semibold">{resource.title}</h2>
            <p className="mt-2 text-gray-500">{resource.description}</p>
            <button className="mt-4 text-indigo-600 hover:text-indigo-700">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;