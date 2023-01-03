using IRS.Domain.Abstractions;
using IRS.Domain.Abstractions.Database;
using Microsoft.EntityFrameworkCore;

namespace IRS.Database.Repositories;

public class EFRepository<T> : IRepository<T> where T : BaseEntity
{
    private readonly ApplicationDbContext _context;

    public EFRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public IQueryable<T> GetQuery()
    {
        return _context.Set<T>().AsQueryable();
    }

    public async Task Create(T entity)
    {
        entity.Created = DateTime.Now;
        await _context.Set<T>().AddAsync(entity);
        await _context.SaveChangesAsync();
    }

    public async Task Remove(T entity)
    {
        _context.Set<T>().Remove(entity);
        await _context.SaveChangesAsync();
    }
}