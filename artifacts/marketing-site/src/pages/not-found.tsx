import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-24">
        <Card className="w-full max-w-md border-slate-200 bg-white shadow-sm">
          <CardContent className="pt-6 pb-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0" />
              <h1 className="text-2xl font-bold text-slate-900">404 Page Not Found</h1>
            </div>
            <p className="mt-4 text-sm text-slate-600 mb-6">
              This page could not be found. Check the URL or use the links below to get back on track.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-md transition-colors"
              >
                <Home className="w-4 h-4" /> Home
              </a>
              <a
                href="/platforms"
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-medium rounded-md transition-colors"
              >
                Platforms <ArrowRight className="w-3 h-3" />
              </a>
              <a
                href="/company"
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-medium rounded-md transition-colors"
              >
                Company
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
