using IRS.BusinessLogic.Services;
using IRS.Domain.Abstractions;
using Microsoft.Extensions.DependencyInjection;

namespace IRS.BusinessLogic
{
    public static class Entry
    {
        public static IServiceCollection AddServices(this IServiceCollection service)
        {
            service.AddScoped<ITextsService, TextsService>();

            return service;
        }
    }
}