const CardRelative = () => {
  return (
    <div className="relative">
      <div className="absolute inset-48 flex items-center justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-80 h-24"
            src="https://via.placeholder.com/300"
            alt="CardRelative"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">CardRelative Title</div>
            <p className="text-gray-700 text-base">
              Some description about the cardRelative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardRelative;
