import React from 'react';
import { MessageCircle, Share2, ThumbsUp, MoreVertical } from 'lucide-react';
import type { PoliticalPost as PoliticalPostType } from '../../types';

interface PoliticalPostProps {
  post: PoliticalPostType;
}

export function PoliticalPost({ post }: PoliticalPostProps) {
  return (
    <article className="bg-gray-900 rounded-lg overflow-hidden w-[70%] mx-auto">
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
      )}
      
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full"
          />
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-xl">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-400 mt-1">
                  <span className="font-medium">{post.author.name}</span>
                  {post.author.verified && (
                    <svg className="h-4 w-4 ml-1 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                  <span className="mx-2">•</span>
                  <span>{post.author.position}</span>
                  <span className="mx-2">•</span>
                  <span>{post.timestamp}</span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-800 rounded-full">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
            
            <p className="mt-4 text-gray-200">{post.content}</p>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <ThumbsUp className="h-5 w-5" />
                <span>{post.likes.toLocaleString()}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <MessageCircle className="h-5 w-5" />
                <span>{post.comments.toLocaleString()}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Share2 className="h-5 w-5" />
                <span>{post.shares.toLocaleString()}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}