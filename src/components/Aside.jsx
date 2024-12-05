export default function Aside() {
  return (
    <aside className="w-[20%] h-screen float-start z-50 bg-gray-200">
      <div className="flex flex-col gap-4">
        <div>
          <input type="text" id="search" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-semibold">TEAMS</h2>
            <ul className="text-md font-light">
              <li>Raja CA</li>
              <li>Liverpool FC</li>
              <li>Real Madrid</li>
              <li>AC Milan</li>
              <li>Borussia Dortmund</li>
            </ul>
          </div>
          <div>
            <h2>NATIONAL TEAMS</h2>
            <ul>
              <li>Italy</li>
              <li>England</li>
              <li>Germany</li>
              <li>France</li>
              <li>Spain</li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
