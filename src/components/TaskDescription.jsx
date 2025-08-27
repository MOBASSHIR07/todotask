import React, { useState } from 'react';

const TaskDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100; 

  if (description.length <= maxLength) {
    return <p className="text-gray-600 text-sm mt-1">{description}</p>;
  }

  return (
    <p className="text-gray-600 text-sm mt-1">
      {isExpanded ? description : `${description.slice(0, maxLength)}... `}
      <span
        className="text-blue-500 text-xs cursor-pointer hover:text-blue-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'See Less' : 'See More'}
      </span>
    </p>
  );
};

export default TaskDescription;
