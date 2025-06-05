const ShimmerMenu = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 animate-pulse">
      {/* Title shimmer */}
      <div className="h-10 bg-gray-300 rounded w-3/5 mb-6"></div>

      {/* Info shimmer */}
      <div className="border-b border-gray-300 pb-6 mb-6 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-5 bg-gray-300 rounded w-1/5"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Category shimmers */}
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="mb-6">
          {/* Category title shimmer */}
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>

          {/* Items shimmer (3 items per category) */}
          <div className="space-y-3">
            {[...Array(3)].map((__, i) => (
              <div key={i} className="h-5 bg-gray-300 rounded w-full"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerMenu;
