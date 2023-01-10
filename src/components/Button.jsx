export default function Button({ children, ...rest }) {
  return (
    <button className="px-6 py-4 bg-green-600 rounded-md shadow-md text-white min-w-[200px] hover:bg-green-500" {...rest}>{children}</button>
  );
}