'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface DiscussionSectionProps {
  left: {
    content: string;
    person: string;
  };
  right: {
    content: string;
    person: string;
  };
}

export function DiscussionSection({ left, right }: DiscussionSectionProps) {
  const [leftComments, setLeftComments] = useState<string[]>([]);
  const [rightComments, setRightComments] = useState<string[]>([]);
  const [newLeftComment, setNewLeftComment] = useState('');
  const [newRightComment, setNewRightComment] = useState('');

  const addComment = (side: 'left' | 'right') => {
    if (side === 'left' && newLeftComment) {
      setLeftComments([...leftComments, newLeftComment]);
      setNewLeftComment('');
    } else if (side === 'right' && newRightComment) {
      setRightComments([...rightComments, newRightComment]);
      setNewRightComment('');
    }
  };

  return (
    <div className="bg-[#EED3B1]/30 p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-[#1F4529] mb-3">Discussion 코너</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#E8ECD7] p-4 rounded-lg">
          <h3 className="font-semibold text-[#1F4529] mb-2">{left.person}</h3>
          <p className="text-[#47663B] leading-relaxed mb-4">{left.content}</p>
          {leftComments.map((comment, index) => (
            <p key={index} className="text-[#47663B] mb-2">👤 {comment}</p>
          ))}
          <Textarea
            value={newLeftComment}
            onChange={(e) => setNewLeftComment(e.target.value)}
            placeholder="여기에 의견을 작성하세요..."
            className="mt-2"
          />
          <Button onClick={() => addComment('left')} className="mt-2 bg-[#47663B] text-[#E8ECD7]">의견 추가</Button>
        </div>
        <div className="bg-[#E8ECD7] p-4 rounded-lg">
          <h3 className="font-semibold text-[#1F4529] mb-2">{right.person}</h3>
          <p className="text-[#47663B] leading-relaxed mb-4">{right.content}</p>
          {rightComments.map((comment, index) => (
            <p key={index} className="text-[#47663B] mb-2">👤 {comment}</p>
          ))}
          <Textarea
            value={newRightComment}
            onChange={(e) => setNewRightComment(e.target.value)}
            placeholder="여기에 의견을 작성하세요..."
            className="mt-2"
          />
          <Button onClick={() => addComment('right')} className="mt-2 bg-[#47663B] text-[#E8ECD7]">의견 추가</Button>
        </div>
      </div>
    </div>
  )
}

