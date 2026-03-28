export default function AboutComponent({ onClose }) {
  return (
    <div className="flex w-full gap-4">
      <main className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <h1 className="order-1 text-3xl md:col-start-1">John Art</h1>
        <img
          className="order-2 md:col-start-2 md:row-span-2"
          alt="Placeholder"
        ></img>
        <p className="order-3 md:col-start-1 md:row-start-2">Text here</p>
      </main>
    </div>
  );
}
