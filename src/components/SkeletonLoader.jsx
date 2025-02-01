export const SkeletonLoader = () => {
    return (
      <div className="animate-pulse">
        <div className="bg-gray-200 h-64 w-full rounded-lg"></div>
        <div className="mt-2 bg-gray-200 h-4 w-3/4 rounded"></div>
        <div className="mt-2 bg-gray-200 h-4 w-1/2 rounded"></div>
      </div>
    );
  };
  