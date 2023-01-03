namespace IRS.Domain.Abstractions.Database;

public class BaseEntity
{
    public Guid Id { get; set; }
    
    public DateTime Created { get; set; }
}