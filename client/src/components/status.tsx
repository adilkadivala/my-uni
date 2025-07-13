const Status = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
            <div className="text-muted-foreground">Active Students</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
            <div className="text-muted-foreground">Faculty Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Courses Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">System Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
