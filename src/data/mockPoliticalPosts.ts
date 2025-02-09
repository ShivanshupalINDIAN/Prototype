import type { PoliticalPost } from '../types';

export const MOCK_POLITICAL_POSTS: PoliticalPost[] = [
  {
    id: '1',
    title: 'Digital Infrastructure Initiative',
    content: 'Announcing a new initiative to strengthen our digital infrastructure and ensure better connectivity for all citizens.',
    imageUrl: 'https://images.unsplash.com/photo-1577017040065-650ee4d43339?w=1280',
    author: {
      id: '1',
      name: 'Minister of Digital Affairs',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64',
      position: 'Cabinet Minister',
      verified: true
    },
    likes: 3500,
    comments: 428,
    shares: 1200,
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    title: 'Cybersecurity Policy Update',
    content: 'Proposing new cybersecurity measures to protect citizen data and strengthen digital privacy laws.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280',
    author: {
      id: '2',
      name: 'Tech Policy Director',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64',
      position: 'Policy Director',
      verified: true
    },
    likes: 2800,
    comments: 312,
    shares: 950,
    timestamp: '5 hours ago'
  }
];