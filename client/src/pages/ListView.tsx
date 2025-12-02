import { Link, useParams, Outlet } from "react-router";

function ListView() {
  const params = useParams();

  return (
    <>
      <nav className="text-blue-500 text-2xl font-extrabold">
        <ul className="flex space-x-5">
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to={`/list/${params.listtitle}/${params.id}/todo`}>
              Todos
            </Link>
          </li>
          <li>
            <Link to={`/list/${params.listtitle}/${params.id}/done`}>
              Done
            </Link>
          </li>
        </ul>
      </nav>

      {/* 👇 This is where TodoView or DoneView will appear */}
      <Outlet />
    </>
  );
}

export default ListView;
