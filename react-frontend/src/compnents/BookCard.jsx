import { FiTrash2 } from "react-icons/fi";
const BookCard = ({
  bookId,
  handleDeleteBook,
  title,
  author,
  published,
  editions,
  imageUrl,
}) => {
  return (
    <div className="relative group flex items-center flex-col px-12 h-80 shadow-sm rounded-sm bg-white cursor-pointer">
      <FiTrash2
        onClick={() => {
          handleDeleteBook(bookId);
        }}
        className="absolute top-2 right-2 text-gray-800 font-bold text-xl hover:text-red-600 duration-150 hidden group-hover:block"
      />
      <img className="h-52 w-44 object-contain p-2" src={imageUrl} alt="book" />
      <h3 className="font-bold text-xl">{title}</h3>
      <div className="text-gray-800">
        <span className="font-bold mr-1">Author:</span>
        {author}
      </div>
      <div>
        <span className="font-bold mr-1">Total editions:</span>
        {editions}
      </div>
      <div>
        <span className="font-bold mr-1">First publish year:</span>
        {published}
      </div>
    </div>
  );
};

export default BookCard;
