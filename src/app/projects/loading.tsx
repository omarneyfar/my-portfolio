export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="w-20 h-20 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-2xl mx-auto flex items-center justify-center animate-pulse">
          <span className="text-3xl font-bold text-white">ON</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        <p className="text-text-muted text-sm">Loading projects...</p>
      </div>
    </div>
  );
}
