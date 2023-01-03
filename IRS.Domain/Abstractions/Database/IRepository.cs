namespace IRS.Domain.Abstractions.Database;

public interface IRepository<T> where T: class
{
    public IQueryable<T> GetQuery();

    public Task Create(T entity);

    public Task Remove(T entity);
}