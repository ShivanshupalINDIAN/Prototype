// Update the Post interface to include description
export interface Post {
  id: string;
  user: User;
  content: string;
  description?: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  timestamp: number;
  tags?: string[];
}

// Update the Short interface to include tags
export interface Short {
  id: string;
  user: {
    id: string;
    username: string;
    fullName: string;
    avatar: string;
    followers: number;
    following: number;
    isVerified: boolean;
    socialCreditScore: number;
    tokens: number;
    protestsParticipated: number;
  };
  videoUrl: string;
  videoUrls: string[]; // Added to support multiple video URLs
  description: string;
  likes: number;
  comments?: number;
  views: number;
  timestamp: number;
  tags: string[];
}


export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  followers: number;
  following: number;
  isVerified: boolean;
  socialCreditScore: number;
  tokens: number;
  protestsParticipated: number;
  bio: string; // Added bio property
  location: string; // Added location property
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Tab {
  id: string;
  label: string;
}

export interface Trend {
  id: string;
  title: string;
  postCount: number;
  category: string;
}
