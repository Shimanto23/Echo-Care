import { Resource } from '../types/resources';

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Understanding Early Signs of Mental Health Issues',
    description: 'Learn to recognize early warning signs of mental health challenges.',
    category: 'Education',
    content: `Common early warning signs include:
    • Changes in sleep or appetite
    • Withdrawing from social activities
    • Difficulty concentrating
    • Unexplained physical symptoms
    • Persistent feelings of hopelessness
    • Changes in mood or behavior`,
    links: [
      {
        title: 'Mental Health Warning Signs Guide',
        url: 'https://www.nimh.nih.gov/health/topics/mental-health-warning-signs'
      }
    ]
  },
  {
    id: 2,
    title: 'Importance of Early Mental Health Detection',
    description: 'Why early detection and intervention matter for mental health.',
    category: 'Education',
    content: `Early detection benefits:
    • Better treatment outcomes
    • Prevention of severe symptoms
    • Reduced impact on daily life
    • Improved recovery rates
    • Lower healthcare costs
    • Better quality of life`,
  },
  {
    id: 3,
    title: 'Self-Care Techniques',
    description: 'Evidence-based self-care practices for mental wellness.',
    category: 'Self-Care',
    content: `Essential self-care practices:
    • Regular exercise
    • Healthy sleep habits
    • Balanced nutrition
    • Mindfulness and meditation
    • Social connections
    • Setting boundaries`,
  },
  {
    id: 4,
    title: 'Crisis Resources',
    description: 'Emergency contacts and crisis intervention resources.',
    category: 'Support',
    content: `If you're in crisis:
    • National Crisis Hotline: 988
    • Crisis Text Line: Text HOME to 741741
    • Emergency: 911
    
    These services are available 24/7 and are completely confidential.`,
  },
  {
    id: 5,
    title: 'Understanding Mental Health Conditions',
    description: 'Comprehensive guide to common mental health conditions.',
    category: 'Education',
    content: `Common conditions include:
    • Depression
    • Anxiety disorders
    • Bipolar disorder
    • PTSD
    • OCD
    • Eating disorders
    
    Each condition has unique symptoms and treatment approaches.`,
  },
  {
    id: 6,
    title: 'Treatment Options',
    description: 'Overview of mental health treatment approaches.',
    category: 'Treatment',
    content: `Available treatments:
    • Psychotherapy
    • Medication
    • Support groups
    • Lifestyle changes
    • Alternative therapies
    • Integrated approaches`,
  },
  {
    id: 7,
    title: 'Building Resilience',
    description: 'Strategies for developing mental strength and resilience.',
    category: 'Self-Care',
    content: `Key resilience factors:
    • Developing coping skills
    • Building strong relationships
    • Maintaining perspective
    • Setting realistic goals
    • Learning from experience
    • Accepting change`,
  },
  {
    id: 8,
    title: 'Finding Professional Help',
    description: 'Guide to seeking professional mental health support.',
    category: 'Support',
    content: `Steps to find help:
    • Types of mental health professionals
    • How to choose a therapist
    • Insurance considerations
    • Questions to ask
    • What to expect in therapy`,
    links: [
      {
        title: 'Find a Therapist',
        url: 'https://www.psychologytoday.com/us/therapists'
      }
    ]
  }
];