import DashboardWrapper from '@/components/shared/DashboardWrapper';
import Link from 'next/link';

export default function NotFound() {
  return (
    <DashboardWrapper>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-8xl font-bold text-purple-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Page Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors shadow-sm"
        >
          Return to Dashboard
        </Link>
      </div>
    </DashboardWrapper>
  );
} 