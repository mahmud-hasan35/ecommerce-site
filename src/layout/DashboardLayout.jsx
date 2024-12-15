import { Link, Outlet } from "react-router";

export default function DashboardLayout() {
    return (
        <>
            <header className="bg-white shadow-sm mt-5 p-3">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <Link
                        to="/"
                        className="bg-indigo-800 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition"
                    >
                        Home
                    </Link>

                    <div className="space-x-4">
                        <Link
                            to="create-product"
                            className="bg-amber-600 text-white font-semibold py-2 px-4 rounded hover:bg-amber-500 transition"
                        >
                            Create new Product
                        </Link>
                        <Link
                            to="create-category"
                            className="bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
                        >
                            Create new Category
                        </Link>
                    </div>
                </div>
            </header>
            <div className="py-5">
                <Outlet/>
                
            </div>
        </>
    );
}
