using IRS.Domain.Abstractions.Database;

namespace IRS.Domain.ReversWords.Models;

public class TextEntity : BaseEntity
{
    public string Text { get; set; } = string.Empty;
    
    public bool IsShorthand { get; set; }
}