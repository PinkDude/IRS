using IRS.Domain.Abstractions.Database;
using IRS.Domain.ReversWords.Models;

namespace IRS.Database.Repositories;

public class UnitOfWork : IUnitOfWork
{
    public IRepository<TextEntity> Texts { get; }

    public UnitOfWork(ApplicationDbContext context)
    {
        Texts = new EFRepository<TextEntity>(context);
    }
}