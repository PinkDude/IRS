using IRS.Domain.ReversWords.Models;

namespace IRS.Domain.Abstractions.Database;

public interface IUnitOfWork
{
    public IRepository<TextEntity> Texts { get; }
}