// import React, { useState } from 'react';

// const TaskDescription = ({ description }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const maxLength = 30; 

//   if (description.length <= maxLength) {
//     return <p className="text-gray-600 text-sm mt-1">{description}</p>;
//   }

//   return (
//     <p className="text-gray-600 text-sm mt-1 break-words">
//       {isExpanded ? description : `${description.slice(0, maxLength)}... `}
//       <span
//         className="text-blue-500 text-xs cursor-pointer hover:text-blue-700"
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         {isExpanded ? 'See Less' : 'See More'}
//       </span>
//     </p>
//   );
// };

// export default TaskDescription;
import React, { useState } from 'react';

const TaskDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 50; 

  if (description.length <= maxLength) {
    return (
      <p className="text-gray-600 text-sm mt-1 w-full max-w-xs sm:max-w-sm md:max-w-md break-all">
        {description}
      </p>
    );
  }

  return (
    <div className="text-gray-600 text-sm mt-1 w-full max-w-xs sm:max-w-sm md:max-w-md">
      <span className="break-all">
        {isExpanded ? description : `${description.slice(0, maxLength)}... `}
      </span>
      <button
        className="text-blue-500 text-xs hover:text-blue-700 block mt-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default TaskDescription;
