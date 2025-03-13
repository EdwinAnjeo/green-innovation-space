
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Import directly from Blog.tsx
import { successStoriesData } from '@/pages/Blog';

const SuccessStoryDetail = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  
  const story = successStoriesData.find(s => s.id === storyId);
  
  if (!story) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 pt-32">
          <h2 className="text-3xl font-bold text-atdc-green mb-6">Story Not Found</h2>
          <Button onClick={() => navigate('/success-stories')}>
            <ArrowLeft className="mr-2" size={16} />
            Back to Success Stories
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 pt-32">
        <Button 
          variant="outline" 
          onClick={() => navigate('/success-stories')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Success Stories
        </Button>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-atdc-green mb-4">{story.title}</h1>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">{story.description}</p>
                
                {story.keyAchievements && (
                  <>
                    <h2 className="text-xl font-bold text-atdc-green mb-2">Key Achievements</h2>
                    <ul className="list-disc pl-5 mb-6">
                      {story.keyAchievements.map((achievement, index) => (
                        <li key={index} className="text-gray-700 mb-2">{achievement}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {story.challengesAddressed && (
                  <>
                    <h2 className="text-xl font-bold text-atdc-green mb-2">Challenges Addressed</h2>
                    <ul className="list-disc pl-5 mb-6">
                      {story.challengesAddressed.map((challenge, index) => (
                        <li key={index} className="text-gray-700 mb-2">{challenge}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessStoryDetail;
