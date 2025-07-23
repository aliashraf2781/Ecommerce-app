import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="h-screen w-full bg-background flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-7xl font-bold text-primary mb-4 animate-bounce">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-2">الصفحة غير موجودة</h2>
            <p className="text-dark/60 mb-6">
                يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها. تحقق من الرابط أو عد إلى الصفحة الرئيسية.
            </p>
            <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/70 text-white px-5 py-2 rounded-full transition duration-200 shadow-md"
            >
                <FaArrowLeft /> العودة للصفحة الرئيسية
            </Link>
        </div>
    );
}
