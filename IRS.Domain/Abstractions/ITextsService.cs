using IRS.Domain.ReversWords.Models;

namespace IRS.Domain.Abstractions;

public interface ITextsService
{
    public Task<IReadOnlyCollection<TextEntity>> GetList(int skip, int take, bool isShorthand);

    public Task Create(TextEntity entity);

    public Task Remove(Guid id);

    public Task<TextEntity> GetRandomReversWords(Guid? exclusionId);

    Task<TextEntity> GetRandomShorthand(Guid? exclusionId);
}