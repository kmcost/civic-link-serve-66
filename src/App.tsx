
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Polls from "./pages/Polls";
import CreatePoll from "./pages/CreatePoll";
import AIRecommendations from "./pages/AIRecommendations";
import PollDetail from "./pages/PollDetail";
import Inbox from "./pages/Inbox";
import MessageDetail from "./pages/MessageDetail";
import Issues from "./pages/Issues";
import DataSources from "./pages/DataSources";
import Priorities from "./pages/Priorities";
import WebsitePreview from "./pages/WebsitePreview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/polls" element={<Polls />} />
            <Route path="/polls/edit" element={<CreatePoll />} />
            <Route path="/polls/ai-recommendations" element={<AIRecommendations />} />
            <Route path="/polls/:id" element={<PollDetail />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/inbox/:id" element={<MessageDetail />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/data-sources" element={<DataSources />} />
            <Route path="/priorities" element={<Priorities />} />
            <Route path="/website-preview" element={<WebsitePreview />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
