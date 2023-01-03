using IRS.Database.Repositories;
using IRS.Domain.Abstractions.Database;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace IRS.Database;

public static class Entry
{
    public static IServiceCollection AddRepositories(this IServiceCollection _service, string connectionString)
    {
        _service.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlite(connectionString));

        _service.AddTransient<IUnitOfWork, UnitOfWork>();

        return _service;
    }
}