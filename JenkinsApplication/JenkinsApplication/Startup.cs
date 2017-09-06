using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JenkinsApplication.Startup))]
namespace JenkinsApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
