import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-stencil text-8xl text-alert mb-4">404</h1>
        <p className="font-stencil text-2xl uppercase tracking-wider text-foreground mb-2">
          Target Not Found
        </p>
        <p className="text-muted-foreground mb-8">
          The requested route does not exist in the operational area.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-alert text-alert-foreground font-stencil uppercase tracking-wider rounded-sm hover:bg-alert/90 transition-all duration-300 hover:shadow-glow"
        >
          Return to Base
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
