namespace IRS.Contracts.Texts;

public class TextsDto
{
    public Guid Id { get; set; }
    
    public string Text { get; set; } = String.Empty;
    
    public DateTime Created { get; set; }
    
    public bool IsShorthand { get; set; }
}