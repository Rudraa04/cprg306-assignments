import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-3xl text-orange-900 font-bold mb-4 ">Shopping List</h1>
      <ItemList />
    </main>
  );
}